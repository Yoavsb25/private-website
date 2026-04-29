/**
 * Projects/Work Items Data
 * Showcase of work examples and projects
 */

export interface WorkItem {
  id: string
  title: string
  tagline?: string
  description: string
  problem: string
  solution: string
  technologies: string[]
  outcomes: string
  imageUrl?: string
  imageAlt?: string
  liveUrl?: string
  sourceUrl?: string
  featured: boolean
  date?: string
}
import teamBalncerImg from '@/assets/images/Teamaker.png'
import alertBuddyImg from '@/assets/images/alert_buddy.png'
import mlProjectsImg from '@/assets/images/ml_projects.png'
import calendarAnalyticsImg from '@/assets/images/calendar_analytics.png'
import filesUnifederImg from '@/assets/images/files_unifeder.png'
import claudeCodeToolsImg from '@/assets/images/claude_code_tools_cli.png'

export const projects: WorkItem[] = [
  {
    id: 'claude-code-tools',
    title: 'Claude Code Tools - Skills & Automation Registry',
    tagline: 'CI/CD-powered registry for sharing and installing Claude Code skills',
    description:
      'A monorepo registry of Claude Code skills and automation tools with a CLI for discovering and installing them. Ships 10 tools across productivity, finance, shopping, and developer-tools categories, each with a structured manifest, SKILL.md, and per-tool README.',
    problem:
      'Claude Code users have no standard way to discover, share, or install community-built skills and automation tools.',
    solution:
      'Built a manifest-driven monorepo with an auto-generated registry.json and a published npm CLI (@yoavsb25/claude-tools). Users can browse by category or complexity, get tool details, and install skills directly into ~/.claude/skills/ with pre-flight requirement checks. GitHub Actions validates manifests and updates the registry on every merge.',
    technologies: ['TypeScript', 'Node.js', 'GitHub Actions'],
    outcomes:
      'Built a CI/CD-powered registry to manage and share Claude Code skills, standardizing publishing and version management; published @yoavsb25/claude-tools on npm; automated registry validation via GitHub Actions.',
    imageUrl: claudeCodeToolsImg,
    imageAlt: 'Claude Code Tools — CLI terminal output listing all 10 skills and tools by category',
    liveUrl: 'https://yoavsb25.github.io/claude-code-tools/',
    sourceUrl: 'https://github.com/Yoavsb25/claude-code-tools',
    featured: true,
    date: '2026',
  },
  {
    id: 'alert-buddy',
    title: 'Alert Buddy - Emergency Safety Platform',
    tagline: 'Real-time emergency safety check-ins for friends & family',
    description:
      'A platform for users to mark themselves safe during emergencies, allowing real-time updates on the safety of friends and family.',
    problem:
      'During emergencies, people need a way to quickly communicate their safety status to friends and family without direct communication channels.',
    solution:
      'Developed a full-stack web application using Django, Python, MySQL, HTML, CSS, and JavaScript. Built real-time update system allowing users to mark themselves safe and view safety status of contacts.',
    technologies: ['Python', 'Django', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    outcomes:
      'Created a functional emergency communication platform that enables real-time safety status updates for users and their networks.',
    imageUrl: alertBuddyImg,
    imageAlt: 'Alert Buddy - Emergency Safety Platform interface showing friend safety statuses',
    featured: true,
    date: '2024',
  },
  {
    id: 'ml-projects',
    title: 'ML Projects - Algorithms from Scratch',
    tagline: 'ML algorithms implemented from scratch — linear regression to clustering',
    description:
      'Implementations of core ML algorithms from first principles for a Machine Learning course (2025). All models are built using Python and NumPy — no sklearn for core logic — to develop deep intuition for how algorithms work under the hood.',
    problem:
      'Learning ML theory without implementation leaves gaps in understanding how algorithms actually behave with real data.',
    solution:
      'Implemented five algorithms from scratch — Linear Regression, Decision Trees, Statistical Models, Logistic Regression, and K-Means Clustering — each in a Jupyter notebook with mathematical derivations and result visualizations.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Jupyter'],
    outcomes:
      'Built five complete algorithm implementations with step-by-step derivations and visualizations, covering supervised and unsupervised learning.',
    imageUrl: mlProjectsImg,
    imageAlt: 'ML Projects — scatter plot with linear regression fit on housing price data',
    sourceUrl: 'https://github.com/Yoavsb25/ml-projects',
    featured: true,
    date: '2025',
  },
  {
    id: 'calendar-analytics',
    title: 'Calendar Analytics - Google Calendar Revenue Tracker',
    tagline:
      'Flask app that connects to Google Calendar, aggregates events, and exports revenue reports as CSV',
    description:
      'A Flask web app that authenticates with Google OAuth 2.0, fetches events from your primary Google Calendar for any date range, aggregates them by event name, and exports a revenue report as CSV — built for freelancers and consultants tracking billable sessions.',
    problem:
      'Freelancers and consultants spend time manually counting calendar sessions and calculating revenue from spreadsheets.',
    solution:
      'Built a Flask app with Google OAuth 2.0 and Calendar API integration. Events are fetched, counted by name, and presented in an editable pricing table. One click exports a CSV with per-event totals and a grand total row. Deployed on Heroku.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS'],
    outcomes:
      'Automated calendar event aggregation and revenue reporting with one-click CSV export; deployed on Heroku.',
    imageUrl: calendarAnalyticsImg,
    imageAlt: 'Calendar Analytics — revenue report table showing event counts, prices, and totals',
    sourceUrl: 'https://github.com/Yoavsb25/Calendar-Analytics',
    featured: true,
    date: '2025',
  },
  {
    id: 'files-unifeder',
    title: 'Files Unifeder - PDF Batch Merger',
    tagline:
      'Desktop batch-processing tool sold to an Israeli law firm — now used internally for document workflows',
    description:
      'A Python desktop application that automates high-volume PDF assembly. Given a CSV or Excel manifest and a folder of PDFs, it matches files by serial number, merges them in the configured order, and produces a detailed results report. Packaged as a standalone executable.',
    problem:
      'High-volume PDF assembly workflows require manually matching, merging, and tracking hundreds of files — time-consuming and prone to errors.',
    solution:
      'Built a Tkinter desktop app with a serial number-based matching engine, configurable merge order and page range control, and a detailed per-file results report. Includes license management, crash reporting, and opt-in telemetry. Packaged with PyInstaller.',
    technologies: ['Python', 'Tkinter', 'PyInstaller', 'CSV', 'GitHub Actions'],
    outcomes:
      'Built and sold to an Israeli law firm; now used internally for document workflows. Modular pipeline architecture with observability, license management, and automated testing; packaged as a standalone executable.',
    imageUrl: filesUnifederImg,
    imageAlt: 'Files Unifeder — dark-themed desktop GUI for batch PDF merging',
    sourceUrl: 'https://github.com/Yoavsb25/files_unifeder',
    featured: true,
    date: '2026',
  },
  {
    id: 'team-balancer',
    title: 'Team Balancer - Skill-Based Group Balancing',
    tagline: 'Automatically balances teams by skill level — no spreadsheets needed',
    description:
      'Web application to balance groups based on skill levels, ensuring fair team distribution.',
    problem:
      'Organizing teams or groups with balanced skill levels is time-consuming and often results in unfair distributions.',
    solution:
      'Built a web application using Python, Flask, SQL, HTML, and CSS that automatically balances groups based on skill level inputs, ensuring fair and optimal team composition.',
    technologies: ['Python', 'Flask', 'SQL', 'HTML', 'CSS'],
    outcomes:
      'Automated team balancing process, saving time and ensuring fair group distributions based on skill levels.',
    imageUrl: teamBalncerImg,
    imageAlt: 'Team Balancer - Results page showing balanced teams with average scores',
    featured: true,
    date: '2024',
  },
]
