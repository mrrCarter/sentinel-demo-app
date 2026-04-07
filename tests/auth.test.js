import assert from "node:assert/strict";
import { test, after } from "node:test";

let baseUrl;
let server;

test("auth API — full lifecycle", async (t) => {
  // Start server on random port
  const { default: app } = await import("../src/index.js");
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      baseUrl = `http://localhost:${server.address().port}`;
      resolve();
    });
  });

  await t.test("register creates user and returns JWT", async () => {
    const res = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@example.com", password: "securepass123" }),
    });
    assert.equal(res.status, 201);
    const body = await res.json();
    assert.ok(body.token, "Should return JWT");
    assert.ok(body.userId, "Should return userId");
  });

  await t.test("duplicate register returns 409", async () => {
    const res = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@example.com", password: "other" }),
    });
    assert.equal(res.status, 409);
  });

  await t.test("login returns JWT", async () => {
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@example.com", password: "securepass123" }),
    });
    assert.equal(res.status, 200);
    const body = await res.json();
    assert.ok(body.token, "Should return JWT");
  });

  await t.test("login with wrong password returns 401", async () => {
    const res = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@example.com", password: "wrongpass" }),
    });
    assert.equal(res.status, 401);
  });

  await t.test("GET /me with valid token returns profile", async () => {
    const loginRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "test@example.com", password: "securepass123" }),
    });
    const { token } = await loginRes.json();

    const meRes = await fetch(`${baseUrl}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    assert.equal(meRes.status, 200);
    const body = await meRes.json();
    assert.equal(body.email, "test@example.com");
    assert.equal(body.emailVerified, false);
  });

  await t.test("GET /me without token returns 401", async () => {
    const res = await fetch(`${baseUrl}/api/auth/me`);
    assert.equal(res.status, 401);
  });

  // Cleanup
  server.close();
});
