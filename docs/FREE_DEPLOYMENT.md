# Free Deployment Guide (Online in ~10 minutes)

This project can be deployed fully free while you build.

## Option A (Fastest): Frontend/Admin on Vercel (Free)


## Security note (important)

Vercel may block deployment if it detects vulnerable Next.js versions.
This repository already uses a patched line (`next@15.5.9`).

If needed, force upgrade before deploy:

```bash
npm install next@15.5.9 react@19.2.0 react-dom@19.2.0
```

---


### 1) Push code to GitHub

```bash
git init
git add .
git commit -m "initial deploy"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

### 2) Import repo in Vercel

1. Open https://vercel.com/new
2. Choose your GitHub repo.
3. Framework auto-detects as **Next.js**.
4. Click **Deploy**.

### 3) Add environment variables

In Vercel Project Settings → Environment Variables:

- `NEXT_PUBLIC_APP_NAME`
- `DATABASE_URL` (when backend integration starts)

Redeploy after adding env vars.

### 4) Verify app health

Open:

- `/login`
- `/dashboard`
- `/api/health`

`/api/health` should return JSON status.

---

## Option B (Free database)

Use **Neon** free PostgreSQL:

1. Create project on https://neon.tech
2. Copy connection string.
3. Set as `DATABASE_URL` in Vercel.

---

## Option C (Later: separate backend API)

When you split backend service:

- Keep Next.js admin on **Vercel Free**
- Deploy API (NestJS) on **Render Free**
- Keep DB on **Neon Free**

---

## Recommended now

For your current codebase, deploy on **Vercel only** first. It is free and enough to show your dashboard online immediately.
