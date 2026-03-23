# CarSales

> A full-stack car sales platform built with **Next.js 16**, **React 19**, **Fastify**, and **PostgreSQL**.

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

---

## Overview

A modern platform designed to simplify the process of buying and selling vehicles. Built as a project to showcase expertise in **full-stack development**, **modern UI patterns**, **relational database management**, and **API integration**.

### Key Highlights

- **Modern Frontend**: Built with the latest Next.js 16 and React 19 features, utilizing Tailwind CSS 4 for styling.
- **Multi-step Forms**: Intuitive interface for vehicle listing to improve user experience.
- **Market Data Integration**: Dedicated section for FIPE table consultation to check market values.
- **Robust Backend**: Fastify API coupled with Prisma ORM for type-safe database interactions.
- **Clean Architecture**: Modular component structure using shadcn.

---

## Features

### Vehicle Selling
- **Step-by-Step Flow**: Breakdown of the selling process into manageable steps (Basic Info, Details, Photos, Summary).
- **State Management**: Persists form data between steps using React state.
- **Photo Upload**: Client-side preview of vehicle images before submission.
- **Validation**: visual feedback and validation logic to ensure data integrity.

### Market Intelligence (FIPE)
- **Price Consultation**: Interface to query vehicle values based on Brand, Model, and Year.
- **Dynamic Filtering**: Cascading dropdowns where models depend on the selected brand.
- **Data Visualization**: Clear display of reference values for informed decision-making.

### UI/UX
- **Responsive Design**: Fully responsive layout optimized for mobile and desktop.
- **Modern Components**: Utilizes shadcn/ui for consistent and accessible interactive elements.
- **Visual Feedback**: Loading states, interactive buttons, and progress indicators.

---

## Technical Architecture

### Frontend Stack
- **Next.js 16** with App Router for routing and server-side rendering
- **React 19** for the latest concurrent features
- **TypeScript** for type-safe component development
- **Tailwind CSS 4** for styling and design system
- **shadcn/ui** for accessible, reusable component primitives
- **Lucide React** for consistent iconography

### Backend Stack
- **Fastify** for high-performance Node.js web framework
- **Prisma** for type-safe ORM and database schema management
- **PostgreSQL** for reliable relational data storage
- **JWT & bcryptjs** for secure authentication and password hashing

---

## Getting Started

### Option 1: Docker (Database) + Local Dev

The recommended way to run the database while developing the application locally.

**Prerequisites:**
- Node.js 18+ and npm
- Docker and Docker Compose

**Installation:**

1. **Backend Setup & Database**
   ```bash
   # Start PostgresSQL container
   cd backend
   docker-compose up -d
   
   # Install dependencies
   npm install

   # Set up environment variables
   cp .env.example .env

   # Run migrations
   npx prisma migrate dev

   # Start the backend server
   npm run dev
   ```
   The API server will run on `http://localhost:3000` (or configured port).

2. **Frontend Setup**
   ```bash
   # Open a new terminal
   cd frontend
   
   # Install dependencies
   npm install

   # Run the frontend
   npm run dev
   ```
   App will open at `http://localhost:3000`.

---

## Technologies & Libraries

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Frontend Framework** | Next.js 16 | React framework & Routing |
| **UI Library** | React 19 | Component library |
| **Styling** | Tailwind CSS 4 | Utility-first CSS |
| **Components** | shadcn/ui | Accessible UI primitives |
| **Backend Framework** | Fastify | High-performance API server |
| **Database** | PostgreSQL | Relational Database |
| **ORM** | Prisma | Database toolkit & ORM |
| **Authentication** | JWT | Stateless authentication |
| **Language** | TypeScript | Type safety across the stack |

---

## Learning Outcomes

This project helped to improve skills in:

- **Next.js App Router**: Implementing modern routing patterns and server components.
- **Tailwind v4**: Utilizing the latest engine for rapid UI development.
- **Form Handling**: Managing complex multi-step form state and validation.
- **Docker Composition**: Orchestrating database containers for development environments.
- **Prisma Integration**: Defining schemas and performing type-safe database queries.
- **API Design**: Building RESTful endpoints with Fastify.

---

## Future Enhancements

- [ ] **Real FIPE API**: Replace mock data with real-time API integration.
- [ ] **Image Storage**: Implement AWS S3 or similar for persistent photo storage.
- [ ] **User Dashboard**: Area for users to manage their listings and favorites.
- [ ] **Advanced Search**: Filtering vehicles by price range, mileage, and location.
- [ ] **Chat System**: Real-time communication between buyers and sellers.
