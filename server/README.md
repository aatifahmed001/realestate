# RealEstate Server

## Setup
```bash
cd server
npm i
cp .env.example .env
npm run seed   # seeds MongoDB with demo projects
npm run dev    # starts on http://localhost:5000
```

## Endpoints
- `GET /api/projects` — list projects
- `GET /api/projects/:idOrSlug` — single project by Mongo _id or slug
