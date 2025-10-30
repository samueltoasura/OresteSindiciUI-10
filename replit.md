# Institución Educativa Oreste Sindici

## Overview

This is a web application for Institución Educativa Oreste Sindici, an educational institution in Nilo, Cundinamarca. The application serves as the institution's digital presence, providing information about academic programs, student platforms, institutional staff, news, and educational projects. It features a colorful, modern interface with navigation organized by distinct color-coded sections.

The application is built as a full-stack web platform with a React frontend and Express backend, designed to present institutional information and provide access to educational resources.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight routing library. The application uses path-based routing with dedicated pages for each major section (Home, Plan de Estudio, Manual de Convivencia, Planta Institucional, Noticias, Plataforma de Notas, Proyectos).

**UI Component System**: Heavily utilizes shadcn/ui component library with Radix UI primitives. Components follow the "New York" style variant with custom theming. The design system is configured through Tailwind CSS with HSL-based color tokens for consistent theming across light/dark modes.

**State Management**: TanStack Query (React Query) for server state management with a custom query client configured for specific refetch and caching behaviors. Local component state managed with React hooks.

**Styling Approach**: Tailwind CSS utility-first styling with custom design tokens. The application uses a custom color palette defined in CSS variables, including specific colors for navigation buttons (black, red, yellow, blue, purple, green). Typography uses Poppins font from Google Fonts.

**Key Design Patterns**: 
- Component composition with reusable UI components in `/components/ui`
- Custom utility classes for hover and active states (`hover-elevate`, `active-elevate-2`)
- Responsive design with mobile-first breakpoints
- Carousel implementation using Embla Carousel with autoplay for hero section

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Architecture Pattern**: Simple REST API structure with modular route registration. The server follows a separation of concerns with distinct files for routing (`routes.ts`), storage layer (`storage.ts`), and Vite integration (`vite.ts`).

**Development vs Production**: In development, Vite middleware is integrated directly into Express for hot module replacement and live reloading. Production builds serve static assets from the compiled output directory.

**Storage Layer**: Currently implements an in-memory storage pattern (`MemStorage` class) with an `IStorage` interface. This abstraction allows for future database integration without changing the API surface. The storage interface includes basic user CRUD operations.

**Request/Response Handling**: 
- JSON body parsing with raw body capture for webhook scenarios
- Custom request logging middleware that captures request method, path, status, duration, and response payload
- Error handling through Vite's error overlay plugin in development

### Data Storage Solutions

**Current Implementation**: In-memory Map-based storage for user data, suitable for development and prototyping.

**Database Schema Design**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`. The schema includes a users table with UUID primary keys, username (unique), and password fields. Schema validation is handled through Zod using drizzle-zod integration.

**Database Provider**: Configured to use Neon serverless Postgres driver (`@neondatabase/serverless`), though the actual database connection is not yet active in the current implementation.

**Migration Strategy**: Drizzle Kit configured for schema migrations with output directory at `./migrations` and PostgreSQL dialect.

**Future Database Integration**: The architecture is prepared for database integration - the storage interface pattern allows swapping the `MemStorage` implementation with a database-backed implementation without changing route handlers.

### Authentication and Authorization

**Current State**: Basic user registration modal interface implemented in the header with username/password fields and Google OAuth option (UI only - not yet functional).

**Planned Approach**: User authentication schema defined with username/password storage. The application structure suggests session-based authentication (connect-pg-simple dependency for PostgreSQL session storage).

**Session Management**: PostgreSQL-backed session storage configured through connect-pg-simple, though not yet active in the current implementation.

## External Dependencies

### UI Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives (accordion, dialog, dropdown, navigation menu, etc.)
- **shadcn/ui**: Pre-built component library built on Radix UI with Tailwind styling
- **Embla Carousel**: Carousel implementation with autoplay plugin for image galleries
- **Lucide React**: Icon library used throughout the application
- **React Icons**: Additional icons, specifically Google icon (FcGoogle) for OAuth buttons

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Utility for creating variant-based component styles
- **clsx & tailwind-merge**: Class name manipulation utilities

### Backend Services
- **Express**: Web server framework
- **Drizzle ORM**: TypeScript ORM for database operations with PostgreSQL support
- **Neon Serverless**: PostgreSQL database driver optimized for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler used in production builds
- **Replit Plugins**: Development environment plugins for runtime error overlay, cartographer, and dev banner

### Data Validation
- **Zod**: Schema validation library used with Drizzle for type-safe database operations
- **React Hook Form**: Form state management with @hookform/resolvers for validation integration

### State Management
- **TanStack Query (React Query)**: Server state management, caching, and data fetching

### Routing
- **Wouter**: Lightweight routing library for React applications

### Assets
The application references several image assets stored in `/attached_assets`:
- Institution logo (Adobe Express PNG)
- Carousel images (1.jpg through 4.jpg)
- PDF document for academic planning (SIE 2024)