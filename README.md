# KnowMySpend

![Project Architecture](assets/landing.png)

**KnowMySpend** is an AI-powered personal finance management platform that enables users to track income and expenses across multiple accounts, set budgets, and receive intelligent spending insights. The platform emphasizes automation, security, and data-driven decision-making with a modern, responsive user interface.

---

## Live Demo
🔗 https://knowmyspend2-cd5c1wtle-anurag-kumars-projects-41c07e00.vercel.app

## Repository
🔗 https://github.com/Anurag-Kumar-01/my-app

---

## Key Features

-  **income and expense tracking** across user-defined accounts  
- **Budget creation and monitoring** with automated email alerts  
- **Recurring transactions** processed via scheduled background jobs  
- **AI-powered monthly expense reports** with actionable insights delivered via email  
- **Interactive analytics dashboard** with bar and pie charts  
- Secure authentication and authorization using **Clerk**  
- Fully responsive and accessible UI  

> Note: This platform does **not** connect to real bank accounts or cards. All accounts and transactions are user-managed.

---

## AI & Automation

- **Google Gemini AI** for generating monthly spending summaries and insights  
- **Inngest cron jobs** for:
  - Recurring transaction processing  
  - Budget limit alert emails  
  - Monthly report generation and delivery  

---

## Security

- **Arcjet** protection against common web attacks  
- Bot detection and request shielding  
- API rate limiting  
- Secure session and user management via Clerk  

---

## Tech Stack

**Frontend**
- Next.js (App Router)
- shadcn/ui
- React Hook Form
- Zod
- Recharts
- Lucide-react
- Sonner

**Backend & Infrastructure**
- Supabase (PostgreSQL)
- Prisma ORM
- Inngest (background jobs & cron)
- Resend (email delivery)
- Arcjet (security)
- Google Gemini AI

**Deployment**
- Vercel

---

## Data Visualization

- Category-wise expense analysis using **pie charts**  
- Time-based and comparative insights using **bar charts**  
- Clear, actionable financial summaries for users  

---

## Environment Variables

Create a `.env` file using the following template:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=

DATABASE_URL=
DIRECT_URL=

ARCJET_KEY=
RESEND_API_KEY=
GEMINI_API_KEY=
```

---

## 👤 Author

**Anurag Kumar**  
 

---

## 📬 Contact

- **Email:** anuragkumar199123@gmail.com 
- **GitHub:** https://github.com/Anurag-Kumar-01 
- **LinkedIn:** [www.linkedin.com/in/anurag-kumar-aba021293](https://www.linkedin.com/in/anurag-kumar-aba021293/)


