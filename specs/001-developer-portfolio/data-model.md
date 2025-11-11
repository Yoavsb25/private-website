# Data Model: Developer Portfolio Website

**Feature**: Developer Portfolio Website  
**Date**: 2025-01-27

## Overview

The portfolio website uses static TypeScript data files to store all content. No database or API is required. All data is loaded at build time and embedded in the application bundle.

## Entities

### Portfolio Content

Represents the core personal and professional information displayed on the site.

**File**: `src/data/portfolio.ts`

**Structure**:
```typescript
interface PortfolioContent {
  name: string;                    // Developer's full name
  title: string;                   // Professional title/role
  specialization: string[];        // Array of specialization areas (e.g., ["Full-Stack Development", "React", "TypeScript"])
  bio: string;                     // Short professional bio (2-3 sentences)
  problemSolving: string;          // Description of problems solved and approach
  professionalPhilosophy: string; // Optional: professional values/philosophy
  location?: string;                // Optional: geographic location
  availableFor?: string[];         // Optional: availability types (e.g., ["Consulting", "Full-time"])
}
```

**Validation Rules**:
- `name` and `title` are required and non-empty
- `specialization` must contain at least one item
- `bio` must be between 50-300 characters
- `problemSolving` must be between 100-500 characters

**Example**:
```typescript
export const portfolio: PortfolioContent = {
  name: "John Doe",
  title: "Senior Software Engineer",
  specialization: ["Full-Stack Development", "React", "TypeScript"],
  bio: "I build elegant, performant web applications...",
  problemSolving: "I specialize in solving complex business problems...",
  professionalPhilosophy: "I value clarity, simplicity, and elegance in code."
};
```

### Work Item

Represents an individual project, case study, or work example showcased on the site.

**File**: `src/data/projects.ts`

**Structure**:
```typescript
interface WorkItem {
  id: string;                      // Unique identifier (slug)
  title: string;                   // Project name/title
  description: string;             // Brief description (1-2 sentences)
  problem: string;                 // Problem this project solved
  solution: string;                // How it was built/approach
  technologies: string[];          // Technologies/methods used
  outcomes: string;                // Impact or results achieved
  imageUrl?: string;               // Optional: project screenshot/image
  imageAlt?: string;               // Alt text for image (required if imageUrl present)
  liveUrl?: string;                // Optional: link to live project
  sourceUrl?: string;              // Optional: link to source code
  featured: boolean;               // Whether to highlight this project
  date?: string;                   // Optional: project date (ISO format)
}
```

**Validation Rules**:
- `id` must be unique, URL-safe slug
- `title` and `description` are required
- `problem`, `solution`, and `outcomes` are required (non-empty)
- `technologies` must contain at least one item
- If `imageUrl` is provided, `imageAlt` is required
- `featured` projects should be limited to 3-5 items

**Example**:
```typescript
export const projects: WorkItem[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory...",
    problem: "Client needed scalable e-commerce platform...",
    solution: "Built with React frontend, Node.js backend...",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    outcomes: "Increased sales by 40%, reduced load time by 60%",
    imageUrl: "/assets/projects/ecommerce.png",
    imageAlt: "E-commerce platform dashboard",
    liveUrl: "https://example.com",
    featured: true
  }
];
```

### Contact Information

Represents methods for visitors to connect with the developer.

**File**: `src/data/contact.ts`

**Structure**:
```typescript
interface ContactMethod {
  type: "email" | "social" | "form"; // Contact method type
  label: string;                     // Display label (e.g., "Email", "LinkedIn")
  value: string;                     // Contact value (email address, URL, etc.)
  icon?: string;                     // Optional: icon name from lucide-react
  available?: boolean;               // Optional: whether currently available
}

interface ContactInformation {
  methods: ContactMethod[];          // Array of contact methods
  responseTime?: string;             // Optional: expected response time
  availability?: string;             // Optional: availability description
}
```

**Validation Rules**:
- At least one contact method is required (FR-006)
- Email addresses must be valid format
- URLs must be valid format
- `type: "email"` requires valid email in `value`
- `type: "social"` requires valid URL in `value`

**Example**:
```typescript
export const contact: ContactInformation = {
  methods: [
    {
      type: "email",
      label: "Email",
      value: "hello@example.com",
      icon: "Mail",
      available: true
    },
    {
      type: "social",
      label: "LinkedIn",
      value: "https://linkedin.com/in/username",
      icon: "Linkedin"
    },
    {
      type: "social",
      label: "GitHub",
      value: "https://github.com/username",
      icon: "Github"
    }
  ],
  responseTime: "Usually within 24 hours",
  availability: "Available for consulting and full-time opportunities"
};
```

## Data Relationships

- **Portfolio Content** → Standalone entity (one instance)
- **Work Items** → Array of independent items (no relationships between items)
- **Contact Information** → Standalone entity (one instance)

All entities are independent and loaded separately. No foreign keys or relationships to manage.

## Data Loading Strategy

1. All data files are imported at build time in `App.tsx` or respective section components
2. TypeScript ensures type safety during development
3. Data is embedded in JavaScript bundle (no runtime fetching)
4. Updates require editing TypeScript files and rebuilding

## State Management

No global state management library needed. Data is:
- Loaded once at app initialization
- Passed as props to components
- Static (no mutations during runtime)

If future features require state (e.g., contact form submissions), React Context or simple useState hooks can be added.

## Data Validation

TypeScript provides compile-time validation. Runtime validation can be added using libraries like Zod if needed for:
- User-submitted data (contact forms)
- External data imports
- Build-time data validation in CI

For now, TypeScript interfaces provide sufficient validation for static content.

