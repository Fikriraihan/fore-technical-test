# Fore Technical Test - Movie Application

This generic movie application allows users to browse popular movies, search for movies, and view detailed information about specific movies. It allows you to find your next watch!

## Table of Contents
- [Prerequisites](#prerequisites)
- [Environment Variables](#required-environment-variables)
- [How to Run](#how-to-run)
- [Architecture & Trade-offs](#architecture--trade-offs)
- [Technologies Used](#technologies-used)

## Prerequisites

- **Node.js**: v18 or higher recommended.
- **npm**: v9 or higher (usually comes with Node.js).

## Required Environment Variables

The application requires the following environment variables to be set in `.env` files in their respective directories.

### Backend (`backend/.env`)
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | The port the backend server runs on. | `5000` |
| `TMDB_API_KEY` | Your API Key from The Movie Database. | `a1b2c3...` |
| `TMDB_TOKEN` | Your Read Access Token from TMDB (Bearer token). | `eyJhbGci...` |
| `TMDB_BASE_URL` | The base URL for TMDB API. | `https://api.themoviedb.org/3` |

### Frontend (`frontend/.env`)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_SERVER_URL` | The URL where the backend is running. | `http://localhost:5000` |

## How to Run

### 1. Backend Setup
The backend serves as a proxy to the TMDB API to securely handle authentication.

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup Environment:
   ```bash
   cp .env.example .env
   # Edit .env and add your TMDB keys
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   *Server runs at `http://localhost:5000` by default.*

### 2. Frontend Setup
The frontend is the user interface built with React and Vite.

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Setup Environment:
   ```bash
   cp .env.example .env
   # Ensure VITE_SERVER_URL matches your backend URL
   ```
4. Start the application:
   ```bash
   npm run dev
   ```
   *App runs at `http://localhost:5173` by default.*

## Architecture & Trade-offs

### Architecture
The project follows a **Client-Server** architecture contained within a simple **Monorepo** structure.

- **Frontend (Client)**: Built with **React** and **Vite** for a fast, modern development experience. It utilizes **TanStack Query** for efficient server state management (caching, deduping requests) and **TanStack Router** for type-safe routing. Styling is handled by **TailwindCSS** for utility-first design.
- **Backend (Server)**: A lightweight **Express.js** server written in **TypeScript**. Its primary role is to act as a **Proxy** for the TMDB API.
- **Data Flow**: Client -> Backend API -> TMDB API.

### Trade-offs

1.  **Backend Proxy vs. Direct API Calls**:
    -   *Decision*: all TMDB API is requested through backend instead of calling TMDB directly from the frontend.
    -   *Pros*: **Security**. This ensures sensitive TMDB API tokens are never exposed to the client browser. It also allows for centralized error handling and allows us to easily implement caching or rate limiting in the future.
    -   *Cons*: Introduces a slight network hop compared to direct calls, but this is a necessary compromise for security.

2.  **Client-Side Rendering (CSR) with Vite**:
    -   *Decision*: The app is a Single Page Application (SPA).
    -   *Pros*: **Interactivity**. Provides a smooth, native-app-like feel with no page reloads during navigation. Rich interactions are easier to manage.
    -   *Cons*: Initial load time might be slightly higher than Server-Side Rendering (SSR) solutions (like Next.js), but for this scale, Vite's build optimizations make the difference negligible. SEO is slightly more complex, though modern crawlers handle JS well.

3.  **TanStack Query vs. Redux/Context**:
    -   *Decision*: Used TanStack Query for data fetching.
    -   *Pros*: Eliminates the need for global state boilerplate for server data. Handles caching, loading states, and error states out of the box.
    -   *Cons*: Adds a dependency, but vastly simplifies the data fetching logic compared to `useEffect` + local state.

## Technologies Used

### Backend
- **Framework**: Express.js
- **Language**: TypeScript
- **HTTP Client**: Axios
- **Tools**: Nodemon, Dotenv

### Frontend
- **Framework**: React.js
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS, Radix UI, Base UI
- **Routing**: TanStack Router
- **State Management**: TanStack Query
- **Icons**: Remix Icon

## License
This project is open source and available under the [ISC License](backend/package.json).
