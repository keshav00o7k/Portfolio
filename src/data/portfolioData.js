export const personalInfo = {
  name: "Keshav Goyal",
  title: "Full-Stack Developer | MERN & Computer Vision",
  tagline: "Building robust web systems, scalable backend architectures, and production-ready Computer Vision pipelines.",
  location: "Kota, Rajasthan, India",
  college: "Government Engineering College, Baran (RTU Kota)",
  degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
  timeline: "Sep 2023 – 2027",
  email: "goyalkeshav316@gmail.com",
  github: "https://github.com/keshav00o7k",
  linkedin: "https://www.linkedin.com/in/keshav00o7k/",
  availability: "Open to Full-Stack & Backend Software Engineering Roles",
  resumePdf: "/Keshav_Goyal_Cv.pdf",
  avatar: "/assets/images/profile.png",
  summary: "Full-Stack Developer with practical engineering experience in developing end-to-end web applications and integrating AI/Computer Vision workflows. Passionate about architecting scalable RESTful APIs, designing clean database schemas, and optimizing media-heavy applications for seamless real-time performance."
};

export const skillCategories = [
  {
    category: "Frontend",
    icon: "fa-solid fa-laptop-code",
    skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Responsive UI/UX", "Component Architecture"]
  },
  {
    category: "Backend & APIs",
    icon: "fa-solid fa-server",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Email OTP Verification", "Middleware Architecture"]
  },
  {
    category: "AI & Computer Vision",
    icon: "fa-solid fa-brain",
    skills: ["Python", "InsightFace", "FAISS (Vector Similarity Search)", "ONNX Runtime", "OpenCV", "NumPy"]
  },
  {
    category: "Databases",
    icon: "fa-solid fa-database",
    skills: ["MongoDB", "MongoDB Atlas", "Document Modeling", "Aggregation Pipelines"]
  },
  {
    category: "DevOps & Deployment",
    icon: "fa-solid fa-cloud-arrow-up",
    skills: ["Git", "GitHub", "Linux VPS", "Cloudflare Tunnels", "Postman", "Vite"]
  }
];

export const experienceList = [
  {
    id: "fotographiya-fulltime",
    company: "Fotographiya",
    location: "Kota, Rajasthan (Hybrid)",
    role: "MERN Stack Developer (Full-Time)",
    duration: "Aug 2025 – Aug 2026",
    type: "Full-Time",
    subProjects: [
      {
        name: "AI Event Photo-Sharing Platform (Core Product)",
        liveUrl: "https://quick.fotographiya.com/",
        highlights: [
          "Co-developed and scaled full-stack event platform using React.js, Node.js, Express, and MongoDB Atlas.",
          "Re-architected facial retrieval from request-time scanning to upload-time vector indexing for scalable event photo matching.",
          "Collaborated on integrating InsightFace and FAISS in Python for facial feature extraction and similarity search.",
          "Implemented backend security flows, JWT authentication, protected routes, and input validation."
        ]
      },
      {
        name: "Commercial Web Platforms (fotographiya.com & wedding.fotographiya.com)",
        liveUrls: [
          { label: "fotographiya.com", url: "https://www.fotographiya.com/" },
          { label: "wedding.fotographiya.com", url: "https://wedding.fotographiya.com/" }
        ],
        highlights: [
          "Built and maintained responsive frontend web architectures for both main commercial and wedding portals using React and modern CSS.",
          "Engineered interactive UI components with smooth visual transitions and optimized media rendering for photography portfolios.",
          "Implemented on-page SEO best practices and metadata structure to improve search discoverability and client leads."
        ]
      }
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Python", "InsightFace", "FAISS", "JWT", "Cloudflare"]
  },
  {
    id: "fotographiya-intern",
    company: "Fotographiya",
    location: "Kota, Rajasthan (On-site)",
    role: "MERN Stack Developer Intern",
    duration: "Jun 2025 – Jul 2025",
    type: "Internship",
    highlights: [
      "Co-developed an end-to-end event photo-sharing web application using React, Node.js, Express, and MongoDB.",
      "Designed database schemas for managing event folders, media assets, and access permissions.",
      "Implemented secure user authentication and onboarding flows using JWT and email OTP verification.",
      "Developed the initial prototype for photo retrieval workflows using facial matching logic."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"]
  },
  {
    id: "octanet-intern",
    company: "OctaNet Services Pvt Ltd",
    location: "Remote",
    role: "Python Developer Intern",
    duration: "Oct 2024 – Nov 2024",
    type: "Internship",
    highlights: [
      "Completed hands-on training focused on Python programming, Object-Oriented Design, and data structures.",
      "Built scripts and utility programs to automate basic data processing tasks.",
      "Practiced problem-solving and algorithmic logic through practical coding assignments."
    ],
    techStack: ["Python", "OOP", "Data Structures", "Algorithms"]
  }
];

export const projectList = [
  {
    slug: "face-recognition",
    title: "Fotographiya: AI Face Recognition & Event Photo-Sharing Platform",
    liveUrl: "https://quick.fotographiya.com/",
    githubUrl: "https://github.com/keshav00o7k",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Python", "InsightFace", "FAISS", "Cloudflare"],
    overview: "A full-stack platform solving event photo chaos. Instead of browsing thousands of album photos, users upload a single selfie to query pre-indexed facial vector embeddings and instantly retrieve their personal photos.",
    keyArchitecture: "Upload-time facial indexing, asynchronous processing, JWT-authenticated client access.",
    problem: "Event photographers upload 2,000+ photos per event. Finding photos of a specific person manually takes hours and frustrates guests.",
    solution: "Users upload a single selfie, and the system uses high-accuracy facial embeddings to instantly extract only their photos via FAISS vector similarity search in sub-second response times.",
    highlights: [
      {
        title: "Upload-Time Facial Indexing",
        text: "Shifted compute from slow query-time scanning to upload-time embedding extraction, enabling rapid parallel retrieval."
      },
      {
        title: "Vector Similarity with FAISS & InsightFace",
        text: "Extracted high-dimensional facial embeddings using InsightFace with ONNX Runtime and used FAISS for sub-second vector similarity matching."
      },
      {
        title: "Backend Security & Access Control",
        text: "Implemented JWT authentication, Email OTP verification, protected routes, and strict selfie input validation."
      },
      {
        title: "Asynchronous Media Pipelines",
        text: "Designed background workers to process and index high-resolution event media without blocking client requests."
      }
    ]
  },
  {
    slug: "fotographiya-commercial",
    title: "Fotographiya: Commercial Business Web Platform",
    liveUrl: "https://www.fotographiya.com/",
    techStack: ["React.js", "Tailwind CSS", "Modern CSS", "Vite", "SEO"],
    overview: "Commercial frontend web platform engineered for corporate brand showcase, photography service portfolios, and client lead generation.",
    problem: "Showcasing commercial photography services and corporate portfolios with fast load times and strong local SEO discoverability.",
    solution: "Built a high-performance responsive web platform with modular components, structured schema metadata, and optimized media delivery.",
    keyArchitecture: "Component-driven frontend architecture with asset lazy-loading and SEO optimization.",
    highlights: [
      {
        title: "Corporate Brand Presence",
        text: "Designed and developed the primary business portal to present photography services, client testimonials, and studio credentials."
      },
      {
        title: "Optimized Media & Performance",
        text: "Implemented asset optimization and responsive image rendering for crisp viewing across all desktop and mobile devices."
      },
      {
        title: "SEO Metadata & Lead Generation",
        text: "Engineered OpenGraph tags, structured data, and direct lead capture channels to maximize client inquiries."
      }
    ]
  },
  {
    slug: "fotographiya-wedding",
    title: "Fotographiya: Wedding & Cinematic Landing Platform",
    liveUrl: "https://wedding.fotographiya.com/",
    techStack: ["React.js", "Modern CSS Animations", "Tailwind CSS", "Responsive UI", "Vite"],
    overview: "A high-conversion, visually rich landing page tailored for luxury wedding photography, featuring cinematic visual storytelling, couple galleries, and instant booking funnels.",
    problem: "Wedding clients demand an emotional, visually immersive experience with instant access to highlight reels and clear inquiry pathways.",
    solution: "Engineered an elegant landing page featuring smooth scroll animations, curated wedding photo grids, and direct WhatsApp & form booking CTAs.",
    keyArchitecture: "Storytelling landing page architecture with rich media showcase and conversion-focused CTA triggers.",
    highlights: [
      {
        title: "Cinematic Visual Storytelling",
        text: "Crafted an immersive wedding aesthetic with elegant typography, smooth transitions, and high-impact hero showcase."
      },
      {
        title: "High-Conversion Booking Funnel",
        text: "Integrated direct inquiry triggers, pricing package previews, and instant consultation booking channels."
      },
      {
        title: "Lazy-Loaded Rich Media Galleries",
        text: "Engineered fast-loading photo and video showcase reels optimized for mobile-heavy wedding audience traffic."
      }
    ]
  }
];

export const educationInfo = {
  institution: "Government Engineering College, Baran (RTU Kota)",
  degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
  timeline: "Sep 2023 – 2027",
  coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Operating Systems"]
};
