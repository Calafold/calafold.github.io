# Calafold - Software Development Company Website

A modern, responsive landing page built with Astro, React, and Tailwind CSS. Features a JSON-based content management system for easy updates without touching code.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Your site will be available at `http://localhost:4321/`

## 📁 Project Structure

```
/
├── public/                 # Static assets (favicon, images, etc.)
├── src/
│   ├── components/        # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── Navigation.tsx
│   ├── data/
│   │   └── content.json  # Site content configuration
│   ├── layouts/
│   │   └── Layout.astro  # Base layout with SEO
│   ├── pages/
│   │   └── index.astro   # Homepage
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
└── package.json
```

## 📝 Content Management

All site content is managed through `src/data/content.json`. This file controls:

- Site metadata (title, description)
- Navigation links
- Hero section (headline, tagline, CTA buttons)
- Features/Services section
- About section
- Contact information
- Footer content

### Example: Updating CTA Button

```json
{
  "hero": {
    "cta": {
      "primary": {
        "text": "Start Your Project",  // ← Edit this
        "href": "#contact"             // ← Edit this
      }
    }
  }
}
```

### Navigation Links

Edit navigation in `src/data/content.json`:

```json
{
  "navigation": {
    "logo": "Your Company",
    "links": [
      {
        "label": "Home",
        "href": "/"
      },
      {
        "label": "Services",
        "href": "/#services"
      },
      {
        "label": "About",
        "href": "/#about"
      },
      {
        "label": "Contact",
        "href": "/#contact"
      }
    ]
  }
}
```

## 🎨 Styling

The site uses Tailwind CSS for styling. Key design features:

- **Modern gradient effects** with animated blobs
- **Smooth transitions** and hover effects
- **Responsive design** (mobile-first)
- **Accessible** with proper ARIA labels
- **Typography** optimized for readability

### Customizing Colors

Edit `tailwind.config.mjs` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        600: '#2563eb',  // Change primary color
        // ... other shades
      },
    },
  },
}
```

### Custom Animations

The site includes custom blob animations. Modify them in `tailwind.config.mjs`:

```javascript
animation: {
  'blob': 'blob 7s infinite',
},
keyframes: {
  blob: {
    '0%': { transform: 'translate(0px, 0px) scale(1)' },
    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
    '100%': { transform: 'translate(0px, 0px) scale(1)' },
  },
}
```

## 🔧 Configuration

### Site Configuration

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://your-domain.com',  // Your site URL
  output: 'static',
  integrations: [react(), tailwind()],
});
```

### SEO

The Layout component includes:
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

Edit in `src/layouts/Layout.astro` or pass as props.

## 🚢 Deployment

### GitHub Pages

1. Update `.github/workflows/astro.yml` if needed
2. Push to your repository
3. Enable GitHub Pages in repository settings

### Other Platforms

**Vercel:**
```bash
npm run build
# Deploy the ./dist folder
```

**Netlify:**
```bash
npm run build
# Deploy the ./dist folder
```

**Cloudflare Pages:**
- Build command: `npm run build`
- Build output directory: `dist`

## 📊 Features

✅ Modern, responsive design inspired by Tailwind documentation
✅ JSON-based content management
✅ SEO optimized
✅ Fast page loads with Astro
✅ Mobile-friendly navigation
✅ Smooth animations and transitions
✅ Accessible (WCAG compliant)
✅ Gradient effects and modern UI patterns
✅ Contact section with social links
✅ Statistics display
✅ Feature cards with hover effects

## 🛠️ Development

### Adding a New Section

1. Create a component in `src/components/`
2. Add content to `src/data/content.json`
3. Import and use in `src/pages/index.astro`

Example:

```tsx
// src/components/Testimonials.tsx
export default function Testimonials({ items }) {
  return (
    <section>
      {items.map(item => (
        <div key={item.id}>{item.quote}</div>
      ))}
    </section>
  );
}
```

```json
// src/data/content.json
{
  "testimonials": {
    "heading": "What Our Clients Say",
    "items": [...]
  }
}
```

### TypeScript

All components use TypeScript for type safety. Define interfaces for props:

```tsx
interface MyComponentProps {
  title: string;
  description?: string;
  items: Array<{
    id: string;
    name: string;
  }>;
}
```

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 4321
kill -9 $(lsof -ti:4321)
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📝 License

MIT License - feel free to use this for your own projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by Calafold
