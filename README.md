# 🏥 Nurse Staffing Management System

A full-stack web application designed to streamline **nurse staffing and workforce management** by connecting hospitals, staffing agencies, and administrators through a centralized platform.

The system provides role-based access, authentication, staffing management, and a structured workflow for managing nurse staffing operations.

---

## 📸 Screenshots

<img width="959" height="447" alt="1" src="https://github.com/user-attachments/assets/65d13976-8c11-48c0-93ac-4e7e99aa81cd" />

<img width="959" height="439" alt="2" src="https://github.com/user-attachments/assets/c3649abf-3fb0-49b0-a0e3-fe081e348a26" />

<img width="843" height="445" alt="3" src="https://github.com/user-attachments/assets/1f19aaaa-57b8-452f-ad48-9f40fb20c078" />

---

## ✨ Features

* 🔐 **Secure Authentication**

  * Role-based authentication and authorization
  * Protected application routes

* 👥 **Role-Based Access**

  * Admin
  * Staffing Agency
  * Hospital

* 📊 **Centralized Dashboard**

  * Role-specific dashboards
  * Staffing-related information at a glance

* 👩‍⚕️ **Nurse Staffing Management**

  * Manage nurse staffing information
  * Track staffing requirements and assignments

* 🏥 **Hospital Management**

  * Hospital-specific staffing workflows
  * Manage staffing requirements

* 🏢 **Agency Management**

  * Staffing agency workflows
  * Coordinate nurse staffing operations

* 🗄️ **Secure Database**

  * PostgreSQL database
  * Row Level Security (RLS)
  * Structured data access based on user roles

* 📱 **Responsive UI**

  * Responsive interface for different screen sizes
  * Modern component-based design

---

## 🛠️ Tech Stack

### Frontend

* **Next.js**
* **React**
* **JavaScript**
* **Tailwind CSS**
* **Shadcn/UI**
* **Next.js App Router**

### Backend & Database

* **Supabase**
* **PostgreSQL**
* **Supabase Authentication**
* **Row Level Security (RLS)**

### Development Tools

* **Git**
* **GitHub**
* **VS Code / Cursor**
* **Vercel**

---

## 🏗️ Application Architecture

```text
                    ┌──────────────────────┐
                    │       User           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Next.js Frontend  │
                    │                      │
                    │  React + Tailwind    │
                    │  Shadcn/UI           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       Supabase       │
                    │                      │
                    │  Authentication      │
                    │  PostgreSQL          │
                    │  Row Level Security  │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Application      │
                    │        Data          │
                    └──────────────────────┘
```

---

## 👤 User Roles

### 🔑 Admin

The administrator has access to centralized management functionality and can oversee the staffing platform.

### 🏢 Staffing Agency

Agencies can manage staffing-related operations and coordinate available nurses with hospital requirements.

### 🏥 Hospital

Hospitals can manage staffing requirements and interact with the staffing workflow.

---

## 🔒 Security

The application uses **Supabase Authentication** for user authentication and **PostgreSQL Row Level Security (RLS)** to control access to application data.

Role-based access ensures that users can access functionality and data according to their assigned role.

---

## 📂 Project Structure

```text
nurse-staffing-management-system/
│
├── app/
│   ├── dashboard/
│   ├── login/
│   ├── ...
│
├── components/
│   ├── ui/
│   ├── ...
│
├── lib/
│   ├── supabase/
│   └── ...
│
├── public/
│   └── screenshots/
│
├── styles/
│
├── package.json
├── next.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd nurse-staffing-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the values with your Supabase project credentials.

### 4. Run the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🌐 Deployment

The application can be deployed using **Vercel**, with Supabase providing authentication and database services.

```text
Frontend → Vercel
           │
           ▼
       Supabase
     ┌─────┴─────┐
     │           │
Authentication  PostgreSQL
                  │
                  ▼
                 RLS
```

---

## 🎯 Project Highlights

* Built a full-stack staffing management platform using **Next.js and Supabase**
* Implemented **role-based access** for Admin, Agency, and Hospital users
* Integrated **Supabase Authentication** for secure user login
* Designed database access using **PostgreSQL and Row Level Security**
* Developed responsive and reusable UI components using **Tailwind CSS and Shadcn/UI**
* Built a centralized workflow for managing nurse staffing operations
