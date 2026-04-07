# Build Guide

## Scope
- Keep each PR bounded and shippable.
- Run tests and local scans before each handoff.
- Keep secrets out of source control.

## Implementation order
1. Establish repo baseline and CI checks.
2. Implement domain model and persistence boundaries.
3. Implement API/worker surface and auth/session policies.
4. Add observability, retries, and production hardening.
5. Finalize docs and operational runbooks.

## Review loop
- Run `sentinel /omargate deep --path .` and `sentinel /audit --path .`.
- Fix P0/P1 issues before merge.
- Fix P2 findings before merge when feasible.
