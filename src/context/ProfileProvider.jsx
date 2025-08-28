import { ProfileContext } from "./ProfileContext";
import { useState } from "react";
import ProfilePhoto from "../assets/ProfilePhoto.jpg";
import Resume from "../assets/Resume_Uday_Panda.pdf";
import StayDetermined from "../assets/stay-determined.png";
// import { UseCSVData, DownloadCSV } from "../lib";

export const ProfileProvider = ({ children }) => {
  // const [profileData, setProfileData] = UseCSVData(
  //   "../../public/data/ProfileDetails.csv"
  // );
  // const [experienceData, setExperienceData] = UseCSVData(
  //   "../../public/data/Experience.csv"
  // );
  // const [skillData, setSkillData] = UseCSVData("../../public/data/Skills.csv");
  // const [projectData, setProjectData] = UseCSVData(
  //   "../../public/data/Projects.csv"
  // );
  // const [contactData, setContactData] = UseCSVData(
  //   "../../public/data/Contact.csv"
  // );
  // const [miscellaneousData, setMiscellaneousData] = UseCSVData(
  //   "../../public/data/Miscellanious.csv"
  // );

  // useEffect(() => {
  //   if (profileData && profileData.length > 0) {
  //     console.log(profileData[0]);
  //     setProfile(profileData[0]);
  //   }
  // }, [profileData]);

  // useEffect(() => {
  //   if (experienceData && experienceData.length > 0) {
  //     console.log(experienceData);
  //     setExperience(experienceData);
  //   }
  // }, [experienceData]);

  // useEffect(() => {
  //   if (skillData && skillData.length > 0) {
  //     console.log(skillData);
  //     setSkills(skillData);
  //   }
  // }, [skillData]);

  // useEffect(() => {
  //   if (projectData && projectData.length > 0) {
  //     console.log(projectData);
  //     setProjects(projectData);
  //   }
  // }, [projectData]);

  // useEffect(() => {
  //   if (contactData && contactData.length > 0) {
  //     console.log(contactData);
  //     setContact(contactData[0]);
  //   }
  // }, [contactData]);

  // useEffect(() => {
  //   if (miscellaneousData && miscellaneousData.length > 0) {
  //     console.log(miscellaneousData);
  //     setMiscellaneous(miscellaneousData[0]);
  //   }
  // }, [miscellaneousData]);

  const [profile, setProfile] = useState({
    name: "Uday Panda",
    title: "Frontend Developer",
    description:
      "MERN stack developer and Computer Science graduate with hands-on project experience. Stepped away briefly for family reasons; now back with stronger communication skills, real-world maturity, and a renewed passion for building impactful software solutions.",
    about:
      "Versatile and tenacious computer science enthusiast, Uday Panda, with a strong focus on web technologies. Over two years of hands-on experience with JavaScript libraries, including Node.js, React.js, and PHP. Actively pursuing mastery in the MERN stack. Adept at staying current with advancements in AI and ML, while also exploring emerging technologies such as GoLang. Seeking opportunities to leverage my skills and passion for continuous learning in a dynamic professional environment.",
    experienceInYears: "Fresher",
    noofProjects: "4+ Projrects",
    techStack: "MERN Stack",
    uniqueness: "Explorer, Learner, Problem Solver",
    resumeUrl: Resume,
    image: ProfilePhoto,
    githubUrl: "https://github.com/UdayPanda",
    linkedinUrl:
      "https://www.linkedin.com/in/uday-panda-i-m-musical-programmer",
  });

  const [experience, setExperience] = useState([
    
    {
      company: "9Envoy Technologies",
      role: "Intern",
      startDate: "July 2023",
      endDate: "January 2024",
      description: `Developed utilities using Golang for internal tools and automation (XLREADER). Collaborated with senior developers on JavaScript (ES6+) projects. Gained hands-on experience in full-stack development using modern web technologies.`,
      technologies: [
        "HTML/CSS",
        "Javascript(ES6+)",
        "SQL",
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "GoLang",
        "GIT",
      ],
    }
  ]);

  const [skills, setSkills] = useState([
    { name: "HTML", level: "Intermediate", stack: "Frontend" },
    { name: "CSS", level: "Intermediate", stack: "Frontend" },
    { name: "JavaScript", level: "Intermediate", stack: "Frontend" },
    { name: "React", level: "Intermediate", stack: "Frontend" },
    { name: "Node.js", level: "Intermediate", stack: "Backend" },
    { name: "MongoDB", level: "Intermediate", stack: "Database" },
    { name: "Express.js", level: "Intermediate", stack: "Backend" },
    { name: "Python", level: "Intermediate", stack: "Backend" },
    { name: "MySQL", level: "Intermediate", stack: "Database" },
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Stay Determined",
      description:
        "Developed MERN productivity app for managing schedules, time tracking & expenses. Integrated debit/credit tracking and graphical data visualization. Planned updates to enhance productivity features.",
      image: StayDetermined,
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "JWT", "Vite"],
      liveUrl: "https://stay-determined-frontend.onrender.com",
      githubUrl: "https://github.com/UdayPanda/Stay-Determined",
      featured: true,
    },
    {
      id: 2,
      title: "Excel Reader",
      description:
        "Built a Go utility to parse Excel tables and create relational database tables, using efficient File I/O and external modules for smooth Excel-to-database conversion.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      category: "Utility",
      technologies: [
        "GoLang",
        "Linux Commands",
        "Regex",
        "File I/O",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/UdayPanda/ExcelReader",
      featured: true,
    }
  ]);

  const [contact, setContact] = useState({
    name: "Uday Panda",
    email: "panda.webdeveloper@gmail.com",
    location: "Gurgaon, India",
    phone: "9752234567",
    linkedinUrl:
      "https://www.linkedin.com/in/uday-panda-i-m-musical-programmer",
    githubUrl: "https://github.com/UdayPanda",
    resumeUrl: Resume,
    instagramUrl: "https://www.instagram.com/panda_supers.2?igsh=OTE2bTZhM2premZr",
    twitterUrl: "https://x.com/UdayPanda5?t=TQyygoqWFlgLPbbBet8UVw&s=09",
    available: "Open For Opportunities",
  });

  const [miscellaneous, setMiscellaneous] = useState({
    bio: "Confident Computer Science graduate with strong MERN skills. Passionate about building impactful software, solving problems efficiently. Seeking opportunities to collaborate with like-minded individuals and contribute to impactful projects. Let's connect and explore the possibilities of web development together!",
    otherSkills: [],
    languages: ["English", "Hindi", "Oria"],
    currentlyLearning: ["AI/ML", "GoLang"],
    mission: "#Mission Maverick 🚀",
    missionDeadline: "",
    hobbies: [],
    interests: [],
    certifications: [],
  });

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        experience,
        setExperience,
        skills,
        setSkills,
        projects,
        setProjects,
        contact,
        setContact,
        miscellaneous,
        setMiscellaneous,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
