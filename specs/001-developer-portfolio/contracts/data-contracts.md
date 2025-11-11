# Data Contracts: Developer Portfolio Website

**Feature**: Developer Portfolio Website  
**Date**: 2025-01-27

## Overview

Since this is a static frontend-only application, there are no API endpoints. Instead, we define data contracts for the TypeScript data structures that components consume. These contracts ensure type safety and consistent data structure across the application.

## Portfolio Content Contract

**File**: `src/data/portfolio.ts`  
**Export**: `portfolio: PortfolioContent`

### Interface

```typescript
interface PortfolioContent {
  name: string;
  title: string;
  specialization: string[];
  bio: string;
  problemSolving: string;
  professionalPhilosophy?: string;
  location?: string;
  availableFor?: string[];
}
```

### Validation Rules

- `name`: Required, non-empty string, max 100 characters
- `title`: Required, non-empty string, max 100 characters
- `specialization`: Required, non-empty array, min 1 item, max 10 items, each item max 50 characters
- `bio`: Required, 50-300 characters
- `problemSolving`: Required, 100-500 characters
- `professionalPhilosophy`: Optional, max 500 characters
- `location`: Optional, max 100 characters
- `availableFor`: Optional, array of strings, each max 50 characters

### Usage

Components import and use:
```typescript
import { portfolio } from '@/data/portfolio';
// Use portfolio.name, portfolio.specialization, etc.
```

## Projects Contract

**File**: `src/data/projects.ts`  
**Export**: `projects: WorkItem[]`

### Interface

```typescript
interface WorkItem {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcomes: string;
  imageUrl?: string;
  imageAlt?: string;
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  date?: string;
}
```

### Validation Rules

- `id`: Required, URL-safe slug (lowercase, alphanumeric, hyphens), unique across all items
- `title`: Required, non-empty string, max 100 characters
- `description`: Required, 50-200 characters
- `problem`: Required, 100-500 characters
- `solution`: Required, 100-500 characters
- `technologies`: Required, non-empty array, each item max 50 characters
- `outcomes`: Required, 50-300 characters
- `imageUrl`: Optional, valid URL path (relative to public/ or absolute)
- `imageAlt`: Required if `imageUrl` is provided, max 200 characters
- `liveUrl`: Optional, valid URL (http/https)
- `sourceUrl`: Optional, valid URL (http/https)
- `featured`: Required boolean
- `date`: Optional, ISO 8601 date string (YYYY-MM-DD)

### Usage

Components import and use:
```typescript
import { projects } from '@/data/projects';
// Filter: projects.filter(p => p.featured)
// Find: projects.find(p => p.id === 'some-id')
```

## Contact Information Contract

**File**: `src/data/contact.ts`  
**Export**: `contact: ContactInformation`

### Interface

```typescript
interface ContactMethod {
  type: "email" | "social" | "form";
  label: string;
  value: string;
  icon?: string;
  available?: boolean;
}

interface ContactInformation {
  methods: ContactMethod[];
  responseTime?: string;
  availability?: string;
}
```

### Validation Rules

- `methods`: Required, non-empty array (at least 1 method), max 10 methods
- `methods[].type`: Required, one of: "email", "social", "form"
- `methods[].label`: Required, non-empty string, max 50 characters
- `methods[].value`: Required, format depends on type:
  - `type: "email"` → Valid email address
  - `type: "social"` → Valid URL (http/https)
  - `type: "form"` → Valid URL or form identifier
- `methods[].icon`: Optional, valid lucide-react icon name
- `methods[].available`: Optional boolean
- `responseTime`: Optional, max 100 characters
- `availability`: Optional, max 200 characters

### Usage

Components import and use:
```typescript
import { contact } from '@/data/contact';
// Access: contact.methods, contact.responseTime
```

## Component Data Contracts

### Hero Section

**Component**: `src/sections/Hero.tsx`  
**Props**: `{ portfolio: PortfolioContent }`

Consumes: `portfolio.name`, `portfolio.title`, `portfolio.specialization`, `portfolio.bio`

### Projects Section

**Component**: `src/sections/Projects.tsx`  
**Props**: `{ projects: WorkItem[] }`

Consumes: All `WorkItem` fields, filters by `featured` if needed

### Contact Section

**Component**: `src/sections/Contact.tsx`  
**Props**: `{ contact: ContactInformation }`

Consumes: `contact.methods`, `contact.responseTime`, `contact.availability`

## Data Flow

1. **Build Time**: TypeScript files in `src/data/` are imported by components
2. **Type Checking**: TypeScript compiler validates structure matches interfaces
3. **Runtime**: Data is embedded in JavaScript bundle, no runtime fetching
4. **Updates**: Edit TypeScript files, rebuild application

## Breaking Changes Policy

Since data is embedded at build time:
- Adding optional fields: ✅ Non-breaking
- Removing required fields: ❌ Breaking (requires component updates)
- Changing field types: ❌ Breaking (requires component updates)
- Renaming fields: ❌ Breaking (requires component updates)

All breaking changes require:
1. Update data model documentation
2. Update component code
3. Update tests
4. Version bump if semantic versioning is used

