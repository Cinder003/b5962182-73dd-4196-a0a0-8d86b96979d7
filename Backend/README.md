# Backend - Todo Application

This is the backend for the Todo application, built with Node.js, Express, TypeScript, and Prisma.

## Features

-   RESTful API for Todo management
-   SQLite database with Prisma ORM
-   Request validation with Zod
-   Secure headers with Helmet
-   CORS and Rate Limiting

## Prerequisites

-   Node.js (v20 or later)
-   npm

## Getting Started

1.  **Clone the repository**

2.  **Navigate to the `Backend` directory:**
    ```bash
    cd Backend
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Create a `.env` file** by copying `.env.example` (if provided) or creating a new one with the following content:
    ```env
    # Server Configuration
    PORT=3000
    CORS_ORIGIN=http://localhost:5173
    NODE_ENV=development

    # Database
    DATABASE_URL="file:./data/dev.db"

    # Rate Limiting
    RATE_LIMIT_WINDOW_MS=15000
    RATE_LIMIT_MAX_REQUESTS=100
    ```

5.  **Generate Prisma Client:**
    ```bash
    npx prisma generate
    ```

6.  **Run database migrations:** This will create the SQLite database file and the `todos` table.
    ```bash
    npx prisma migrate dev --name init
    ```

7.  **Run the development server:**
    ```bash
    npm run dev
    ```

The server will be running on `http://localhost:3000`.

## Scripts

-   `npm run dev`: Starts the server in development mode with hot-reloading using `ts-node-dev`.
-   `npm run build`: Compiles the TypeScript code to JavaScript.
-   `npm start`: Starts the production server from the compiled code in the `dist` folder.
-   `npm run lint`: Lints the codebase.
-   `npx prisma studio`: Opens the Prisma Studio to view and manage your data.

## API Endpoints

-   `GET /api/todos`: Get all todos.
    -   Query Params:
        -   `status` (`all`, `active`, `completed`): Filter todos by status.
        -   `search` (string): Search todos by title.
-   `POST /api/todos`: Create a new todo.
    -   Body: `{ "title": "My new todo" }`
-   `PATCH /api/todos/:id`: Update a todo.
    -   Body: `{ "title": "Updated title", "completed": true }`
-   `DELETE /api/todos/:id`: Delete a todo.

## Docker

To run the backend using Docker, use the `docker-compose.yaml` file in the root directory.

```bash
docker-compose up --build backend
```