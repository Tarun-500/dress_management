# DressFlow — Dress Rental Management (Admin First)

This repository now includes a **real starter project** (Next.js + TypeScript + Prisma schema) based on your requirements:

- Responsive dashboard
- Dark/light mode toggle
- Owner/admin login flow (redirect to dashboard)
- Business KPI cards (dresses, users, upcoming rent, deadlines)
- Day/week/month revenue cards
- User details screen with booking/payment/message timeline
- Dress details screen with unique dress ID and profitability stats
- Data model with **super admin** and **soft delete** behavior
- WhatsApp message log model for booking notifications

---

## Tech Stack

- **Frontend/admin panel:** Next.js (App Router) + React + TypeScript
- **Design system:** CSS variables (easy color/theme updates later)
- **Backend data model:** Prisma + PostgreSQL schema

---

## Run the app

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

- `/login` → owner/admin login
- `/dashboard` → business dashboard
- `/users/U001` → user details
- `/dresses/D001` → dress details

---

## Requirement Mapping

### 1) Dashboard + responsive + dark/light + full design control

Implemented with CSS variables in `app/globals.css` and theme state in `components/theme-provider.tsx`.

### 2) Owner login redirect

Root route redirects to `/login`, and login submits to dashboard.

### 3) KPI and operational widgets

Dashboard includes:

- total dresses
- total users
- upcoming rentals
- return deadlines
- daily / weekly / monthly revenue

### 4) Super admin vs normal admin delete behavior

In Prisma schema:

- `UserRole` includes `SUPER_ADMIN` and `ADMIN`
- models use soft-delete style fields (`isHiddenForAdmin`, `isDeletedByAdmin`, `deletedBySuperAdmin`, etc.)

This supports: normal admin “hide/delete from their view”, while super admin can still see everything.

### 5) Unique dress ID and booking status updates

- Dress has unique code like `D001` (`dressCode @unique`)
- booking relations connect customer ↔ booking ↔ dress
- status and booking timelines are included

### 6) WhatsApp notification log

`WhatsAppMessage` model stores notification status, payload, and sent time for each booking.

### 7) Unique mobile number for user

`Customer.phone` is marked unique (`@unique`).

### 8) Rich user details + dress profitability insights

- User page: bookings, paid amount, message history timestamp
- Dress page: purchase price, rental price, total earned, times rented, upcoming booking

### 9) Extend fields later without breaking old data

Already designed for safe expansion:

- optional fields (`String?`, `Json?`)
- soft delete fields
- relational structure for future modules

---

## Current Structure

```txt
app/
  login/page.tsx
  dashboard/page.tsx
  users/[id]/page.tsx
  dresses/[code]/page.tsx
  globals.css
components/
  dashboard-shell.tsx
  theme-provider.tsx
  theme-toggle.tsx
lib/
  mock-data.ts
prisma/
  schema.prisma
```

---

## Next steps I recommend (Phase 2)

1. Add real authentication (JWT + hashed password + session middleware).
2. Implement API routes / backend service layer (CRUD for users, dresses, bookings).
3. Replace mock data with Prisma client queries.
4. Add image upload to Cloudinary/S3 for dresses.
5. Add actual WhatsApp integration (Twilio/Meta Cloud API).
6. Add role-based route guards for Super Admin vs Admin.
7. Add audit logs (who updated/deleted what and when).
8. Add export reports (CSV/PDF) for revenue and inventory.

