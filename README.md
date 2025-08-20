# MERN RealEstate (Vite + React + TS + Tailwind + Node + Express + MongoDB)

## 1) Server
```bash
cd server
npm i
cp .env.example .env
npm run seed
npm run dev
```

## 2) Client
Open a new terminal:
```bash
cd client
npm i
cp .env.example .env
npm run dev
```

- Client: http://localhost:5173
- API: http://localhost:5000/api

### Pages
- Home (banner, carousel, featured projects)
- About
- Projects (grid)
- Project Detail (more images, description, layout, facilities)
- Contact

### Notes
- Dummy images are pulled from Unsplash via public URLs.
- Configure CORS ORIGIN in `server/.env` if your client runs on a different host/port.
