# 🎨 AI-Powered Design Platform

A production-ready, full-stack graphic design web application inspired by Canva — featuring a drag-and-drop canvas editor, AI image generation, real payment infrastructure, and cloud media management.

🔗 **Live Demo:** [canva-eight-pi.vercel.app](https://canva-eight-pi.vercel.app)

---

## ✨ Features

- 🖼️ **Drag-and-drop canvas editor** — built with Fabric.js, supporting templates, text, shapes, and image layers
- 🤖 **AI image generation** — generate images from text prompts directly inside the editor using Replicate AI
- 💳 **Stripe payments** — premium subscription flow with webhook handling and access control
- 🔐 **Authentication** — Google OAuth and GitHub OAuth via Auth.js
- ☁️ **Media uploads** — file storage and retrieval via Uploadthing
- 🗄️ **Persistent designs** — user projects saved and synced with Neon (PostgreSQL) via Drizzle ORM
- 📱 **Responsive UI** — built with TailwindCSS and shadcn/ui components

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14, React, TailwindCSS, Fabric.js |
| Backend | Next.js API Routes, Drizzle ORM |
| Database | Neon (PostgreSQL) |
| Auth | Auth.js (Google OAuth, GitHub OAuth) |
| Payments | Stripe |
| Media Storage | Uploadthing |
| AI | Replicate API |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A [Neon](https://neon.tech) database
- A [Stripe](https://stripe.com) account
- A [Replicate](https://replicate.com) account
- A [Uploadthing](https://uploadthing.com) account
- Google and GitHub OAuth credentials

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/vishu-1007/canva.git
cd canva
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Fill in the following variables in `.env.local`:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

REPLICATE_API_TOKEN=

AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
AUTH_SECRET=

STRIPE_SECRET_KEY=
STRIPE_PRICE_ID=
STRIPE_WEBHOOK_SECRET=

DATABASE_URL=
```

4. **Run database migrations**
```bash
npx drizzle-kit push
```

5. **Start the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💳 Stripe Webhook (Local Development)

To test Stripe payments locally, use the Stripe CLI to forward webhook events:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

---

## 📁 Project Structure

```
canva/
├── src/
│   ├── app/          # Next.js app router pages and API routes
│   ├── components/   # Reusable UI components
│   └── lib/          # Utility functions, DB client, auth config
├── drizzle/          # Database schema and migrations
├── public/           # Static assets
└── .env.example      # Environment variable template
```

---

## 🔑 Key Technical Decisions

- **Fabric.js** over plain Canvas API — for built-in object model, serialization, and event handling
- **Neon (PostgreSQL)** over MongoDB — for relational design data with serverless-friendly connection pooling
- **Uploadthing** over Cloudinary — simpler Next.js integration with type-safe file handling
- **Drizzle ORM** over Prisma — lightweight, type-safe, and faster cold starts on Vercel Edge

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

**Vishal Karthikeya**
- GitHub: [@vishu-1007](https://github.com/vishu-1007)
- LinkedIn: [vishal-karthikeya](https://linkedin.com/in/vishal-karthikeya)
