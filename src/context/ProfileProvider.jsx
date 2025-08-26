import { ProfileContext } from "./ProfileContext";
import { useState } from "react";

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState({
        name: 'Uday Panda',
        title: 'Frontend Developer',
        description: 'MERN stack developer and Computer Science graduate with hands-on project experience. Stepped away briefly for family reasons; now back with stronger communication skills, real-world maturity, and a renewed passion for building impactful software solutions.',
        about: 'Versatile and tenacious computer science enthusiast, Uday Panda, with a strong focus on web technologies. Over two years of hands-on experience with JavaScript libraries, including Node.js, React.js, and PHP. Actively pursuing mastery in the MERN stack. Adept at staying current with advancements in AI and ML, while also exploring emerging technologies such as GoLang. Seeking opportunities to leverage my skills and passion for continuous learning in a dynamic professional environment.',
        experienceInYears: 'Fresher',
        noofProjects: '4',
        techStack: 'MERN Stack',
        uniqueness: 'Explorer, Learner, Problem Solver',
        resumeUrl: '../assets/Resume.pdf',
        image: '',
        githubUrl: 'https://github.com/UdayPanda',
        linkedinUrl: 'https://www.linkedin.com/in/uday-panda-i-m-musical-programmer',
    });

    const [experience, setExperience] = useState([
        {company: '9Envoy Technologies',
         role: 'Intern', 
         startDate: 'July 2023', 
         endDate: 'January 2024', 
         description: `Developed utilities using Golang for internal tools and automation (XLREADER). Collaborated with senior developers on JavaScript (ES6+) projects. Gained hands-on experience in full-stack development using modern web technologies.`, 
         technologies: ['HTML/CSS', 'Javascript(ES6+)', 'SQL', 'ReactJS', 'NodeJS', 'MongoDB', 'GoLang', 'GIT']
        },
        {company: '9Envoy Technologies',
         role: 'Intern', 
         startDate: 'July 2023', 
         endDate: 'January 2024', 
         description: `Developed utilities using Golang for internal tools and automation (XLREADER). Collaborated with senior developers on JavaScript (ES6+) projects. Gained hands-on experience in full-stack development using modern web technologies.`, 
         technologies: ['HTML/CSS', 'Javascript(ES6+)', 'SQL', 'ReactJS', 'NodeJS', 'MongoDB', 'GoLang', 'GIT']
        },
    ]);

    const [skills, setSkills] = useState([
        {name: 'HTML', level: 'Intermediate', stack: 'Frontend'},
        {name: 'CSS', level: 'Intermediate', stack: 'Frontend'},
        {name: 'JavaScript', level: 'Intermediate', stack: 'Frontend'},
        {name: 'React', level: 'Intermediate', stack: 'Frontend'},
        {name: 'Node.js', level: 'Intermediate', stack: 'Backend'},
        {name: 'MongoDB', level: 'Intermediate', stack: 'Database'},
        {name: 'Express.js', level: 'Intermediate', stack: 'Backend'},
        {name: 'PHP', level: 'Intermediate', stack: 'Backend'},
        {name: 'MySQL', level: 'Intermediate', stack: 'Database'},
    ]);

    const [projects, setProjects] = useState([
        {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React, Firebase, and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      category: "fullstack",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "React DnD"],
      liveUrl: "https://task-app-demo.com",
      githubUrl: "https://github.com/yourusername/task-app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Integrates with multiple weather APIs for comprehensive data.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
      category: "frontend",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Geolocation"],
      liveUrl: "https://weather-dashboard.com",
      githubUrl: "https://github.com/yourusername/weather-app",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with real-time data visualization, campaign tracking, and performance metrics. Built for marketing teams and content creators.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "fullstack",
      technologies: ["React", "Node.js", "PostgreSQL", "D3.js", "Socket.io", "Redis"],
      liveUrl: "https://social-dashboard.com",
      githubUrl: "https://github.com/yourusername/social-dashboard",
      featured: true
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, dark mode toggle, and contact form integration. Built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      category: "frontend",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Email.js"],
      liveUrl: "https://your-portfolio.com",
      githubUrl: "https://github.com/yourusername/portfolio",
      featured: false
    },
    {
      id: 6,
      title: "Recipe Management System",
      description: "A full-stack recipe management application with user authentication, recipe sharing, meal planning, and nutritional information tracking. Features image upload and search functionality.",
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=300&fit=crop",
      category: "fullstack",
      technologies: ["React", "Express", "MongoDB", "Multer", "JWT", "Cloudinary"],
      liveUrl: "https://recipe-app.com",
      githubUrl: "https://github.com/yourusername/recipe-app",
      featured: false
    }
    ]);

    const [contact, setContact] = useState({
        name: 'Uday Panda',
        email: 'panda.webdeveloper@gmail.com',
        location: 'Gurgaon, India',
        phone: '9752234567',
        linkedinUrl: 'https://www.linkedin.com/in/uday-panda-i-m-musical-programmer',
        githubUrl: 'https://github.com/UdayPanda',
        resumeUrl: '../assets/Resume.pdf',
        instagramUrl: '',
        twitterUrl: '',
        available: 'Open for opportunities',
    });

    const [miscellaneous, setMiscellaneous] = useState({
        bio: 'Confident Computer Science graduate with strong MERN skills. Passionate about building impactful software, solving problems efficiently. Seeking opportunities to collaborate with like-minded individuals and contribute to impactful projects. Let\'s connect and explore the possibilities of web development together!',
        otherSkills: [],
        languages: ['English', 'Hindi', 'Oria'],
        currentlyLearning: ['AI/ML', 'GoLang'],
        mission: '#Mission Maverick 🚀',
        missionDeadline: '',
        hobbies: [],
        interests: [],
        certifications: [],
    });

    return (
        <ProfileContext.Provider value={{ profile, setProfile, experience, setExperience, skills, setSkills, projects, setProjects, contact, setContact, miscellaneous, setMiscellaneous }}>
            {children}
        </ProfileContext.Provider>
    );

};
