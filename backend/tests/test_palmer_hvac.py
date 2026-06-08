"""Palmer HVAC backend API tests"""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
if not BASE_URL:
    # fallback: read from frontend .env
    from pathlib import Path
    env = Path('/app/frontend/.env').read_text()
    for line in env.splitlines():
        if line.startswith('REACT_APP_BACKEND_URL='):
            BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
            break

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root health
def test_root_running(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert "running" in r.json().get("message", "").lower()


# Full payload lead creation
def test_create_lead_full_payload(client):
    payload = {
        "name": "TEST_John Doe",
        "phone": "(479) 555-0123",
        "email": "test_john@example.com",
        "address": "123 Main St",
        "city": "Bentonville",
        "service_needed": "AC Repair",
        "urgency": "Emergency – ASAP",
        "preferred_contact": "Phone call",
        "message": "AC not cooling",
    }
    r = client.post(f"{API}/leads", json=payload)
    assert r.status_code in (200, 201), r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["service_needed"] == "AC Repair"


# Required-only fields
def test_create_lead_required_only(client):
    payload = {
        "name": "TEST_Min User",
        "phone": "4795550000",
        "service_needed": "Heating Repair",
        "urgency": "Same day",
        "preferred_contact": "Text message",
    }
    r = client.post(f"{API}/leads", json=payload)
    assert r.status_code in (200, 201), r.text
    data = r.json()
    assert data["id"]
    assert data["email"] is None


# Missing required field
def test_create_lead_missing_required(client):
    payload = {
        "name": "TEST_Bad",
        "phone": "4795550000",
        # missing service_needed
        "urgency": "Same day",
        "preferred_contact": "Email",
    }
    r = client.post(f"{API}/leads", json=payload)
    assert r.status_code == 422


# Invalid email
def test_create_lead_invalid_email(client):
    payload = {
        "name": "TEST_Bad Email",
        "phone": "4795550000",
        "email": "not-an-email",
        "service_needed": "AC Repair",
        "urgency": "Flexible / scheduling",
        "preferred_contact": "Email",
    }
    r = client.post(f"{API}/leads", json=payload)
    assert r.status_code == 422


# List leads contains created and is sorted newest first
def test_list_leads_contains_recent(client):
    # create a fresh marker lead
    payload = {
        "name": "TEST_Marker_Latest",
        "phone": "4795559999",
        "service_needed": "Furnace Repair",
        "urgency": "Same day",
        "preferred_contact": "Phone call",
    }
    cr = client.post(f"{API}/leads", json=payload)
    assert cr.status_code in (200, 201)
    created_id = cr.json()["id"]

    r = client.get(f"{API}/leads")
    assert r.status_code == 200
    leads = r.json()
    assert isinstance(leads, list)
    assert len(leads) >= 1
    ids = [l.get("id") for l in leads]
    assert created_id in ids

    # newest first
    times = [l.get("created_at") for l in leads if l.get("created_at")]
    assert times == sorted(times, reverse=True)
