# Frontend Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite. Perfect for showcasing your frontend development skills and full-stack projects.

## ✨ Features

- **Modern Design**: Clean, professional design with dark theme and purple accent colors
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations, hover effects, and transitions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Fast Loading**: Built with Vite for optimal performance
- **Accessible**: WCAG compliant with proper focus states and semantic HTML

## 🚀 Sections

1. **Hero Section**: Animated text, call-to-action buttons, and social links
2. **About Section**: Personal information, experience timeline, and downloadable CV
3. **Skills Section**: Categorized skills with progress bars and animations
4. **Projects Section**: Showcase of frontend and full-stack projects with filtering
5. **Contact Section**: Contact form and contact information
6. **Footer**: Social links, quick navigation, and additional information

## 🛠️ Technologies Used

- **React 19** - UI library
- **Tailwind CSS 4** - Styling framework
- **Vite** - Build tool and development server
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
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

Update the following files with your personal information:

#### Hero Section (`src/components/Hero.jsx`)
- Change "Your Name" to your actual name
- Update the animated text array with your roles
- Replace social media URLs with your actual profiles
- Update the description text

#### About Section (`src/components/About.jsx`)
- Replace "YP" placeholder with your initials or profile image
- Update the about text and experience timeline
- Change the CV download link
- Update experience details and dates

#### Contact Section (`src/components/Contact.jsx`)
- Update email address
- Change location and availability
- Update social media links

### 2. Projects

Edit the projects array in `src/components/Projects.jsx`:

```javascript
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

```javascript
const skillCategories = {
  frontend: {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      // Add your skills with proficiency levels
    ]
  }
  // Add more categories...
}
```

### 4. Colors and Theme

The portfolio uses a purple theme. To change colors:

1. **Primary Colors**: Update purple colors in `src/index.css`
2. **Background**: Modify the gradient in `src/App.jsx`
3. **Accent Colors**: Change purple-400, purple-600, etc. throughout components

### 5. SEO and Meta Tags

Update `index.html` with your information:
- Title and description
- Open Graph and Twitter Card images
- Canonical URL
- Keywords

### 6. Images and Assets

1. **Profile Image**: Replace the placeholder in About section
2. **Project Images**: Add your project screenshots
3. **Favicon**: Replace `/vite.svg` with your own favicon
4. **Social Media Images**: Create and add og-image.jpg and twitter-image.jpg

## �� Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimization

- Images are optimized and lazy-loaded
- CSS is purged in production
- JavaScript is minified and bundled
- Fonts are optimized for web

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
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
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/portfolio"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Made with ❤️ using React, Tailwind CSS, and Vite**
