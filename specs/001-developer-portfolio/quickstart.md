# Quickstart Guide: Developer Portfolio Website

**Feature**: Developer Portfolio Website  
**Date**: 2025-01-27

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher (or yarn/pnpm)
- Git

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

This installs:
- React, TypeScript, Vite
- Tailwind CSS, shadcn/ui dependencies
- react-router-dom, lucide-react
- Testing libraries (Vitest, React Testing Library, Playwright)

### 2. Initialize shadcn/ui

```bash
npx shadcn-ui@latest init
```

Follow prompts to configure:
- Style: Default
- Base color: Slate (or your preference)
- CSS variables: Yes

### 3. Add shadcn/ui Components

```bash
npx shadcn-ui@latest add button card badge
```

Add components as needed for your design.

### 4. Configure Tailwind

Ensure `tailwind.config.js` includes:
- Content paths: `["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`
- Theme extensions for your design tokens

### 5. Set Up Data Files

Create data files in `src/data/`:

```bash
mkdir -p src/data
touch src/data/portfolio.ts src/data/projects.ts src/data/contact.ts
```

Populate with your content following the data model in `data-model.md`.

## Development

### Start Development Server

```bash
npm run dev
```

Server runs at `http://localhost:5173` (Vite default port).

### Build for Production

```bash
npm run build
```

Output: `dist/` directory with optimized static files.

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` directory locally.

## Project Structure

```
src/
├── data/              # Your content (edit these files)
│   ├── portfolio.ts
│   ├── projects.ts
│   └── contact.ts
├── components/        # Reusable UI components
│   └── ui/           # shadcn/ui components
├── sections/         # Page sections (Hero, Projects, Contact)
├── styles/           # Tailwind and global styles
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## Updating Content

### Update Portfolio Information

Edit `src/data/portfolio.ts`:

```typescript
export const portfolio: PortfolioContent = {
  name: "Your Name",
  title: "Your Title",
  specialization: ["Your", "Specializations"],
  bio: "Your bio...",
  problemSolving: "What problems you solve...",
  // ... other fields
};
```

### Add/Update Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: WorkItem[] = [
  {
    id: "project-slug",
    title: "Project Name",
    description: "Brief description",
    problem: "Problem solved",
    solution: "How you solved it",
    technologies: ["React", "TypeScript"],
    outcomes: "Results achieved",
    featured: true
  }
];
```

### Update Contact Information

Edit `src/data/contact.ts`:

```typescript
export const contact: ContactInformation = {
  methods: [
    {
      type: "email",
      label: "Email",
      value: "your@email.com",
      icon: "Mail"
    }
  ]
};
```

After editing data files:
1. Save changes
2. Development server auto-reloads (HMR)
3. Verify changes in browser

## Testing

### Run Unit Tests

```bash
npm run test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Run E2E Tests

```bash
npm run test:e2e
```

### Check Test Coverage

```bash
npm run test:coverage
```

## Code Quality

### Linting

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

### Type Checking

```bash
npm run type-check
```

## Deployment

### GitHub Pages Setup

1. **Configure GitHub Actions** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. **Configure Vite for GitHub Pages** (`vite.config.ts`):

```typescript
export default defineConfig({
  base: '/your-repo-name/', // or '/' for custom domain
  // ... other config
});
```

3. **Enable GitHub Pages**:
   - Repository Settings → Pages
   - Source: GitHub Actions

### Manual Deployment

```bash
npm run build
# Upload dist/ directory to your hosting provider
```

## Performance Optimization

### Bundle Analysis

```bash
npm run build -- --analyze
```

Check bundle size and identify large dependencies.

### Image Optimization

- Use WebP format when possible
- Provide responsive image sizes
- Lazy load images below the fold

### Code Splitting

Vite automatically code-splits. Ensure route-based splitting if using multiple pages:

```typescript
const Projects = lazy(() => import('./sections/Projects'));
```

## Accessibility Checklist

- [ ] Semantic HTML (nav, main, section, article)
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works for all features
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Images have alt text
- [ ] Focus indicators visible
- [ ] Screen reader testing completed

## Troubleshooting

### Port Already in Use

```bash
# Change port in vite.config.ts or use:
npm run dev -- --port 3000
```

### TypeScript Errors

```bash
# Check for type errors:
npm run type-check

# Common fixes:
# - Ensure data files match interfaces in data-model.md
# - Check import paths use @ alias correctly
```

### Build Fails

```bash
# Clear cache and rebuild:
rm -rf node_modules dist
npm install
npm run build
```

### shadcn/ui Components Not Styling

- Ensure Tailwind is configured correctly
- Check `globals.css` includes Tailwind directives
- Verify component is copied to `src/components/ui/`

## Next Steps

1. Customize design tokens in `tailwind.config.js`
2. Add your content to data files
3. Customize section components in `src/sections/`
4. Add animations with Framer Motion (optional)
5. Set up custom domain (if desired)
6. Configure analytics (if desired)

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Router Documentation](https://reactrouter.com/)

