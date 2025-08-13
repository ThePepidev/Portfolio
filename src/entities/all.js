// Mock data for development
const mockProjects = [
  {
    id: 1,
    title: "Portfolio Personnel",
    description:
      "Site portfolio développé avec React et TailwindCSS, incluant des animations fluides et un design responsive.",
    image_url:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
    technologies: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    github_url: "https://github.com/ThePepidev/Portfolio",
    live_url: "https://www.pepidev.dev",
    category: "web",
    status: "completed",
  },
  {
    id: 2,
    title: "Api REST de Todo List",
    description:
      "API REST pour la gestion d'une liste de tâches, incluant des fonctionnalités d'authentification et de gestion des utilisateurs.",
    image_url:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
    technologies: ["Node.js", "Express", "MySQL", "JWT"],
    github_url: "https://github.com/ThePepidev/Epytodo",
    category: "backend",
    status: "completed",
  },
  {
    id: 3,
    title: "Développement API d'agents RAG",
    description:
      "API de chatbot agents ia RAG, permettant de discuter avec des agents IA sur des sujets variés, intégrant des fonctionnalités de recherche et de réponse contextuelle.",
    image_url:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500",
    technologies: ["FastAPI", "Python", "LangChain", "MySQL", "Chromadb", "Streamlit", "Crewai"],
    /* live_url: "https://rag-agents.example.com", */
    category: "backend",
    status: "in_progress",
  },
];

const mockSkills = [
  // Frontend
{
    id: 1,
    name: "JavaScript",
    category: "frontend",
    proficiency: 3,
    icon: "js",
},
{
    id: 2,
    name: "React",
    category: "frontend",
    proficiency: 3,
    icon: "react",
},
{
    id: 3,
    name: "HTML",
    category: "frontend",
    proficiency: 3,
    icon: "html",
},

  // Backend
    {
    id: 4,
    name: "Python",
    category: "backend",
    proficiency: 4,
    icon: "ts",
  },
  {
    id: 5,
    name: "Node.js",
    category: "backend",
    proficiency: 3,
    icon: "node",
  },
  {
    id: 6,
    name: "Express",
    category: "backend",
    proficiency: 3,
    icon: "express",
  },
  {
    id: 7,
    name: "PHP",
    category: "backend",
    proficiency: 3,
    icon: "php",
  },

  // Database
  {
    id: 8,
    name: "PostgreSQL",
    category: "database",
    proficiency: 2,
    icon: "postgres",
  },
  {
    id: 9,
    name: "MySQL",
    category: "database",
    proficiency: 4,
    icon: "mysql",
  },
  {
    id: 10,
    name: "Chromadb",
    category: "database",
    proficiency: 3,
    icon: "chromadb",
  },

  // Tools
  {
    id: 11,
    name: "Git",
    category: "tools",
    proficiency: 5,
    icon: "git",
  },
  {
    id: 12,
    name: "Docker",
    category: "tools",
    proficiency: 3,
    icon: "docker",
  },
  {
    id: 13,
    name: "Figma",
    category: "tools",
    proficiency: 2,
    icon: "figma",
  },

  // Soft Skills
  {
    id: 14,
    name: "Communication",
    category: "soft_skills",
    proficiency: 5,
  },
  {
    id: 15,
    name: "Travail d'équipe",
    category: "soft_skills",
    proficiency: 5,
  },
  {
    id: 16,
    name: "Résolution de problèmes",
    category: "soft_skills",
    proficiency: 4,
  },
];

const mockExperiences = [
  {
    id: 1,
    position: "Développeur",
    company: "LeBlogDuDirigeant",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7IiRSsI2EXKaDu6JByB9YIz-ChYIzJ19Xg&s",
    start_date: "2025-07-01",
    end_date: "2025-12-31",
    is_current: true,
    description:
      "Développement d'api et d'applications web modernes utilisant les dernières technologies en terme d'intelligence artificielle et de développement web.",
    achievements: [
      "Développement d'une Api de chatbot agents ia RAG",
    ],
  },
];

// Simulated API functions
export const Project = {
  async list(sort = "") {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    let projects = [...mockProjects];

    if (sort === "-created_date") {
      projects.sort((a, b) => b.id - a.id);
    }

    return projects;
  },

  async get(id) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockProjects.find((p) => p.id === id);
  },
};

export const Skill = {
  async list() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockSkills;
  },

  async get(id) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockSkills.find((s) => s.id === id);
  },
};

export const Experience = {
  async list(sort = "") {
    await new Promise((resolve) => setTimeout(resolve, 100));

    let experiences = [...mockExperiences];

    if (sort === "-start_date") {
      experiences.sort(
        (a, b) => new Date(b.start_date) - new Date(a.start_date)
      );
    }

    return experiences;
  },

  async get(id) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return mockExperiences.find((e) => e.id === id);
  },
};
