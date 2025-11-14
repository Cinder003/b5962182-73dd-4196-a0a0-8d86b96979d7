# Frontend - Todo Application

This is the frontend for the Todo application, built with React, Vite, TypeScript, and Tailwind CSS.

## Features

-   Modern, responsive, and colorful UI
-   Add, update, delete, and view todos
-   Filter todos by status (All, Active, Completed)
-   Search todos by title
-   State management with React Hooks
-   API communication with Axios

## Prerequisites

-   Node.js (v20 or later)
-   npm

## Getting Started

1.  **Clone the repository**

2.  **Navigate to the `Front-end` directory:**
    ```bash
    cd Front-end
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Create a `.env` file** in the `Front-end` directory with the following content. This points the frontend to the backend API.
    ```env
    VITE_API_BASE_URL=http://localhost:3000/api
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:5173`.

## Scripts

-   `npm run dev`: Starts the Vite development server.
-   `npm run build`: Builds the application for production.
-   `npm run lint`: Lints the codebase using ESLint.
-   `npm run preview`: Serves the production build locally for previewing.

## Docker

To run the frontend using Docker, use the `docker-compose.yaml` file in the root directory.

```bash
docker-compose up --build frontend
```

The application will be accessible at `http://localhost:5173`.