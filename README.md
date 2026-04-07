# sentinel-demo-app

sentinel-demo-app project

## Tech Stack

greenfield

## Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

## Testing

```bash
npm test
```

## Project Structure

```
sentinel-demo-app/
├── src/
│   ├── index.js          # Application entry point
│   └── routes/            # API route handlers
├── tests/                 # Test files
├── docs/                  # SentinelLayer spec & build guide
├── prompts/               # Agent execution prompts
├── .github/workflows/     # CI/CD (Omar Gate)
└── tasks/                 # Build checklist
```

## Security

This project uses [SentinelLayer](https://sentinelayer.com) Omar Gate for automated security review on every PR.

---
Generated with [create-sentinelayer](https://www.npmjs.com/package/sentinelayer-cli)
