# Sentinelayer Autonomous Build Plan

Generated: 2026-04-07T08:56:14.611Z
Project: sentinel-demo-app

## Inputs
- AI provider: `anthropic`
- Coding agent: `Other (generic)`
- Auth mode: `byok`
- Generation mode: `detailed`
- Audience level: `intermediate`
- Project type: `greenfield`
- Repo: `not connected`
- Workspace mode: `new scaffold`

## Execution Checklist
- [ ] PR 1: repository bootstrap, CI checks, and deterministic scaffolding baseline
- [ ] PR 2: domain model + migrations + persistence abstraction
- [ ] PR 3: API contracts + auth/session lifecycle hardening
- [ ] PR 4: existing-codebase ingest path and repo context extraction
- [ ] PR 5: build planner generation quality and prompt artifact validation
- [ ] PR 6: workflow orchestration integration with Omar Gate policy defaults
- [ ] PR 7: local scan command runner (`sentinel /omargate deep`) MVP
- [ ] PR 8: local audit command runner (`sentinel /audit`) MVP
- [ ] PR 9: persona orchestrator command router + policy templates
- [ ] PR 10: scale/performance tuning and caching strategy
- [ ] PR 11: observability, retries, timeout policies, and structured logs
- [ ] PR 12: docs, release, rollout safety checks, and production readiness

## Omar Loop Contract (Per PR)
- [ ] Run Omar Gate for the PR.
- [ ] Fix all P0 and P1 findings.
- [ ] Fix P2 findings before merge when feasible.
- [ ] Re-run gate and confirm clean status.
- [ ] Merge only after quality gates are green.

## Command Roadmap (Local Terminal)
- [ ] `sentinel /omargate deep --path <repo>`: local deep scan pipeline
- [ ] `sentinel /audit --path <repo>`: security + quality audit summary
- [ ] `sentinel /persona orchestrator --mode <builder|reviewer|hardener>`: agent persona routing
- [ ] `sentinel /apply --plan tasks/todo.md`: execute roadmap batches autonomously

## Required Read Order
1. `docs/spec.md`
2. `docs/build-guide.md`
3. `prompts/execution-prompt.md`
4. `.github/workflows/omar-gate.yml`
5. `AGENT_HANDOFF_PROMPT.md`
