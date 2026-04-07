# Sentinelayer Agent Handoff Prompt

You are executing "sentinel-demo-app" autonomously.

Read files in this exact order:
1. docs/spec.md
2. docs/build-guide.md
3. prompts/execution-prompt.md
4. tasks/todo.md
5. .github/workflows/omar-gate.yml

Execution mode:
- Work PR-by-PR from tasks/todo.md.
- For each PR run Omar loop until P0/P1 are zero and quality checks pass.
- Keep commits scoped and deterministic.
- Stop only for blocking secrets/permission gaps.

Coding agent profile:
- Selected agent: Other (generic)
- Prompt target: generic
- Suggested config path: none

Agent-specific guidance:
- Follow the provided spec and todo list exactly.
- Implement incrementally with deterministic checkpoints.
- Document assumptions and unresolved risks clearly.

GitHub Action contract:
- Sentinelayer token: not configured (BYOK mode).
- Keep provider credentials in your own environment (OPENAI_API_KEY / ANTHROPIC_API_KEY / GOOGLE_API_KEY).
- If you later adopt Omar Gate GitHub Action, set secrets.SENTINELAYER_TOKEN and wire sentinelayer_token accordingly.

Terminal command options:
- sentinel /omargate deep --path .
- sentinel /audit --path .
- sentinel /persona orchestrator --mode builder --path .
- sentinel /persona orchestrator --mode reviewer --path .
- sentinel /persona orchestrator --mode hardener --path .
- sentinel /apply --plan tasks/todo.md --path .
- Add --json to /omargate, /audit, /persona, or /apply for machine-readable CI output.

Workflow tuning options:
- BYOK workflow is guidance-only and does not call the Sentinelayer action.
- To enable Omar Gate later, set SENTINELAYER_TOKEN and configure scan_mode/severity_gate in workflow inputs.

Repo context:
- Target repo: not provided
- Workspace mode: new scaffold

Start now and continue autonomously.
