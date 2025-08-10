# Haoting Cheng - Portfolio Website 🚀

A modern, interactive portfolio website showcasing full-stack development skills and projects. Built with cutting-edge web technologies and featuring immersive 3D visuals, liquid glass UI, and seamless user experience.

## ✨ Features

### 🎨 **Modern Design**
- **Liquid Glass UI**: Beautiful glassmorphism design with glass card components
- **3D Interactive Elements**: Three.js powered 3D text and cursor blur effects
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Dark/Light Theme**: Built-in theme switching with `next-themes`
- **Responsive Design**: Fully responsive across all devices

### 🛠 **Technical Showcase**
- **Interactive Project Modals**: Detailed project showcases with image carousels
- **Skills Visualization**: Dynamic skills section with technology icons
- **Blog System**: Markdown-based blog with syntax highlighting using Shiki
- **SEO Optimized**: Comprehensive metadata and Open Graph support
- **Performance Optimized**: Fast loading with Next.js Image optimization

### 📱 **Key Sections**
- **Hero Section**: 3D liquid glass text with dynamic background
- **Projects Portfolio**: Interactive project cards with detailed modals
- **Skills & Experience**: Professional experience timeline and technology stack
- **Blog**: Technical articles and development insights
- **Contact**: Multiple contact channels and social links

## 🛠 Tech Stack

### **Frontend**
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics and interactions

### **UI/UX**
- **React Icons** - Comprehensive icon library
- **Next Themes** - Theme switching capability
- **Glassmorphism Design** - Modern UI aesthetic
- **Responsive Grid Layouts** - Mobile-first design

### **Blog & Content**
- **Gray Matter** - Markdown frontmatter parsing
- **Unified/Rehype/Remark** - Markdown processing pipeline
- **Shiki** - Syntax highlighting with Poimandres theme
- **Markdown Support** - Full markdown blog system

### **Development Tools**
- **Biome** - Fast linter and formatter
- **Sharp** - High-performance image processing
- **Vercel Analytics** - Performance monitoring

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/hati8haha/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
yarn install
# or
npm install
```

3. **Run the development server**
```bash
yarn dev
# or
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── posts/             # Blog section
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections (Hero, Projects, etc.)
│   ├── ui/                # Reusable UI components
│   └── motion/            # Animation components
├── _posts/               # Markdown blog posts
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
└── public/               # Static assets
```

## 🎯 Key Components

### **Project Modal System**
Interactive project showcases with:
- Image carousels with multiple project screenshots
- Technology stack visualization
- Role descriptions and project details
- External links and live demos

### **3D Interactive Elements**
- **LiquidGlassText3D**: Three.js powered 3D text animations
- **CursorBlur**: Dynamic cursor interaction effects
- **LiquidGlass**: Background visual effects

### **Blog System**
- Markdown-based content management
- Syntax highlighting for code blocks
- SEO-optimized article pages
- Category and tag organization

## 🌟 Featured Projects

The portfolio showcases several key projects including:

- **ValleyDeer Survey System** - AI-powered survey platform
- **Mr. Watt** - Green energy company website with animations
- **Deer Donate** - Real-time donation platform for streamers
- **NADI Platform** - Internationalization membership system
- **Geography Information Platform** - 3D mapping application

## 📝 Blog Content

Technical articles covering:
- Frontend development (React, Next.js, CSS)
- Backend technologies (Node.js, PHP, APIs)
- Database design and management
- Web security (XSS, CSRF, CORS)
- Development best practices

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Build for Production**
```bash
yarn build
yarn start
```

## 🔧 Development

### **Available Scripts**
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

### **Adding New Projects**
1. Update `components/sections/data.ts`
2. Add project images to `public/` directory
3. Update types in `types/index.ts` if needed

### **Adding Blog Posts**
1. Create new `.md` file in `_posts/` directory
2. Include frontmatter with title, date, tags, and categories
3. Write content in Markdown format


---

*Built with ❤️ using Next.js, TypeScript, and modern web technologies*
