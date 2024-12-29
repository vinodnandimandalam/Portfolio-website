import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with 4 years of experience in building robust and scalable web and mobile applications. Skilled in front-end technologies like React, and React Native, as well as back-end development using Node.js with MySQL, PostgreSQL, I specialize in delivering end-to-end solutions. My focus is on crafting innovative applications that drive business growth while providing exceptional user experiences.`;

export const ABOUT_TEXT = `I am a Computer Science graduate from IIIT with experience working in the edtech and fintech domains. As a fitness enthusiast, I bring the same discipline and dedication to my work, crafting innovative solutions that merge technology and user needs seamlessly.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "FullStack Developer",
    company: "Quanteon Solutions",
    description: `Designed and developed world-class mobile applications for e-commerce and fin-tech clients`,
    technologies: ["React", "React Native", "Node"],
  },
  {
    year: "2021 - 2022",
    role: "Frontend Developer",
    company: "IB Hubs",
    description: `Developed and maintained web applications using JavaScript, React.js. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["HTML", "CSS", "JS", "React"],
  },
  {
    year: "2020 - 2021",
    role: "Tech Content Developer",
    company: "Ib Hubs",
    description: `Delivered world-class content in full-stack technologies, helping over 10,000 individuals secure placements in their dream companies.`,
    technologies: ["HTML", "CSS", "JS", "React"],
  },
];

export const PROJECTS = [
  {
    title: "Chipps",
    image: project1,
    description:
      "An application for an e-commerce platform which delivers and manages orders",
    technologies: ["React Native", "Node.js"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Varnav Houses, Padmasri garden, near Sreeja hospital, gowlidoddy Gachibowli Hyderabad - 500032 TELANGANA",
  phoneNo: "9493317431",
  email: "vinodnandimandalam@gmail.com",
};
