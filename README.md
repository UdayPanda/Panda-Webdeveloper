# Frontend Developer Portfolio

A modern, interactive portfolio website built with **React**, **Tailwind CSS**, **Vite**, and **Three.js**. Designed to showcase your frontend and full-stack projects with 3D visuals, smooth animations, and a professional dark theme.

## ✨ Features

- **Modern 3D Design**: Animated Three.js backgrounds and interactive visuals
- **Responsive**: Fully responsive layout for all devices
- **Interactive**: Framer Motion animations, hover effects, and transitions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Fast Loading**: Powered by Vite for optimal performance
- **Accessible**: WCAG compliant with semantic HTML and focus states

## 🚀 Sections

1. **Hero Section**: Animated text, 3D background, call-to-action, and social links
2. **About Section**: Profile image with gradient hover, experience timeline, and downloadable CV
3. **Skills Section**: Categorized skills with progress bars and animated levels
4. **Projects Section**: Project showcase with filtering and live/GitHub links
5. **Contact Section**: Contact form and information
6. **Footer**: Social links and navigation

## 🛠️ Technologies Used

- **React 19**
- **Tailwind CSS 4**
- **Vite**
- **Three.js** & **@react-three/fiber** (for 3D backgrounds)
- **Framer Motion** (for animations)
- **JavaScript ES6+**

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/UdayPanda/Panda-Webdeveloper.git
   cd Panda-Webdeveloper
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization Guide

### 1. Personal Information

Update these files with your info:

- **Hero Section:** `src/components/User/Hero.jsx`
- **About Section:** `src/components/User/About.jsx`
- **Contact Section:** `src/components/Contact.jsx`
- **Profile Image:** Place your image in `src/assets/` and update the import path.

### 2. Projects

Edit the projects array in `src/components/Projects.jsx`:

```js
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description...",
    image: "project-image-url",
    category: "fullstack", // or "frontend"
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true
  }
  // Add more projects...
]
```

### 3. Skills

Update the skills in `src/components/Skills.jsx`:

```js
const skillCategories = {
  frontend: {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      // Add your skills
    ]
  }
  // Add more categories...
}
```

### 4. Colors and Theme

- **Primary Colors:** Edit in `src/index.css` or Tailwind config
- **Background:** Update gradients in `src/App.jsx`
- **Accent Colors:** Change purple-400, purple-600, etc. in components

### 5. SEO and Meta Tags

Edit `index.html`:
- Title, description, Open Graph/Twitter images, canonical URL, keywords

### 6. Images and Assets

- **Profile Image:** Place in `src/assets/`
- **Project Images:** Add screenshots to `src/assets/`
- **Favicon:** Replace `/vite.svg` with your favicon in `public/`
- **Social Media Images:** Add `og-image.jpg` and `twitter-image.jpg` in `public/`

## 📱 Responsive Design

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## 🎯 Performance Optimization

- Optimized and lazy-loaded images
- Purged CSS in production
- Minified and bundled JS
- Web-optimized fonts

## 🔧 Development

### Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### File Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── User/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repo to Vercel
3. Deploy

### Netlify
1. Build: `npm run build`
2. Upload `dist` to Netlify

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/portfolio"` to `package.json`
2. Install: `npm install --save-dev gh-pages`
3. Add: `"deploy": "gh-pages -d dist"` to scripts
4. Run: `npm run build && npm run deploy`

## 📄 License

Open source under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions welcome! Please open a Pull Request.

## 📞 Support

For help or questions, open an issue on GitHub.

---

**Made with ❤️ using React, Tailwind CSS, Three.js, and Vite**