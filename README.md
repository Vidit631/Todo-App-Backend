# Todo App

## Overview
This is the backend portion of the Todo App

## Setup

### Prerequisites
- Node.js
- npm
- MySQL Server (Must be installed and running)

### Installation

#### Backend
Install dependencies:
```bash
npm install
```

Create a .env file in the backend directory and configure your MySQL database connection:
```bash
DATABASE_URL="mysql://user:password@localhost:3306/todo_app_db"
#Replace user, password, and todo_app_db with your MySQL credentials and database name.
```

Run Prisma migrations to set up your database schema:
```bash
npx prisma migrate dev --name init
```

Start the backend server:
```bash
npm run dev
```
The backend server should start running at http://localhost:4000