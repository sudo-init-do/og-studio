# 🎨 OG Studio Pro

**Professional Social Media Card Generator**

OG Studio Pro is a modern, feature-rich web application for creating stunning social media cards (Open Graph images) with real-time preview and professional templates. Built with Next.js 15, React 19, and enhanced with glassmorphism design patterns.

![OG Studio Pro](https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&q=80)

## ✨ Features

### 🚀 **Core Functionality**
- **Real-time Preview** - See changes instantly as you customize
- **HD Downloads** - Export high-quality PNG images
- **Multiple Templates** - Product Launch, Blog Post, Speaker Card, Product Showcase
- **Platform Optimization** - Supports Open Graph, Twitter, Instagram, and LinkedIn formats

### 🎨 **Design System**
- **Modern Glassmorphism UI** - Beautiful translucent interface with backdrop blur effects
- **Dark/Light Theme Toggle** - Seamless theme switching with custom animations
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Professional Templates** - Pre-designed layouts for different use cases

### ⚡ **Customization Options**
- **Dynamic Content** - Custom titles, subtitles, and logo integration
- **Theme Variants** - Dark, Light, Gradient, and Minimal themes
- **Color Controls** - Primary and accent color customization
- **Background Styles** - Solid, Radial, Linear, and Mesh gradients
- **Pattern Overlays** - None, Dots, Grid, and Waves
- **Border Radius** - Adjustable corner rounding (0-50px)
- **Platform Sizes** - Optimized dimensions for each social platform

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Frontend**: [React 19](https://react.dev/) with TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom glassmorphism effects
- **Image Generation**: [@vercel/og](https://vercel.com/docs/functions/edge-functions/og-image-generation) for server-side rendering
- **Utilities**: clsx, tailwind-merge for dynamic styling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/og-studio.git
   cd og-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📱 Usage Guide

### Creating Your First OG Image

1. **Choose a Template** - Select from Product Launch, Blog Post, Speaker Card, or Product Showcase
2. **Customize Content** - Add your title, subtitle, and logo URL
3. **Design Settings** - Pick your theme, colors, background style, and patterns
4. **Preview Live** - Watch your changes update in real-time
5. **Download** - Click "Download HD" to export your image

### Template Types

- **🚀 Product Launch** - Perfect for new product announcements
- **📝 Blog Post** - Ideal for article and blog sharing
- **🎤 Speaker Card** - Great for event speakers and presentations  
- **📱 Product Showcase** - Excellent for featuring products or services

### Platform Formats

- **📈 Open Graph** (1200×630px) - Standard for websites and social sharing
- **🐦 Twitter Card** (1600×900px) - Optimized for Twitter posts
- **📷 Instagram** (1080×1080px) - Square format for Instagram
- **💼 LinkedIn** (1200×627px) - Professional network optimized

## 🎨 Design Features

### Glassmorphism Interface
- Translucent panels with backdrop blur
- Smooth hover animations and transitions
- Modern gradient overlays and effects

### Theme System
- **Light Mode** - Clean, bright interface with subtle gradients
- **Dark Mode** - Sleek dark interface with pure black backgrounds
- Seamless theme switching with custom animations

### Responsive Design
- Mobile-first responsive layout
- Adaptive grid system for different screen sizes
- Touch-friendly controls and interactions

## 🏗️ Project Structure

```
og-studio/
├── src/
│   ├── app/
│   │   ├── api/og/           # Image generation API route
│   │   ├── studio/           # Main studio interface
│   │   ├── globals.css       # Global styles and dark theme
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   └── components/           # Reusable components (if any)
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🔧 API Routes

### `/api/og` - Image Generation Endpoint

Generates social media images using Vercel's `@vercel/og` package.

**Parameters:**
- `template` - Template type (launch, blog, speaker, product)
- `title` - Main heading text
- `subtitle` - Supporting text
- `theme` - Color theme (dark, light, gradient, minimal)
- `brand` - Primary brand color (hex)
- `accent` - Accent color (hex)
- `bg` - Background style (solid, radial, gradient, mesh)
- `pattern` - Overlay pattern (none, dots, grid, waves)
- `size` - Platform format (og, twitter, instagram, linkedin)
- `radius` - Border radius (0-50)
- `logo` - Logo image URL

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy OG Studio Pro is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on Vercel
3. Deploy with zero configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/og-studio)

### Other Platforms

OG Studio Pro can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify  
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Vercel](https://vercel.com/) for the OG image generation API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Unsplash](https://unsplash.com/) for beautiful stock photos

---

**Built with ❤️ using Next.js 15 and React 19**
