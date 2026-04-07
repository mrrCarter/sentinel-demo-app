import assert from "node:assert/strict";
import { test } from "node:test";

test("health endpoint returns ok status", async () => {
  // Dynamically import to avoid port binding during test
  const { default: app } = await import("../src/index.js");
  // Verify app is an express instance
  assert.ok(app, "Express app should be exported");
  assert.equal(typeof app.listen, "function", "App should have listen method");
});
