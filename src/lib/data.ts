export const personalInfo = {
  name: "Talip Yıldız",
  title: "Mobile Developer",
  location: "İstanbul / Beykoz",
  email: "talipyildiz.dev@gmail.com",
  phone: "0537 433 0959",
  github: "",
  linkedin: "",
  profilePicture: "/profile.jpeg",
  heroDescription:
    "Mobile Developer with 6+ years of experience building scalable mobile applications (Flutter, Kotlin) across e-commerce, B2B, AI, media monitoring, and restaurant management domains. Skilled in Clean Architecture, Firebase integrations, and state management solutions. Experienced in leading end-to-end mobile product development — from architecture and implementation to deployment, maintenance, and store management.",
};

export const workExperience = [
  {
    company: "Kodiks",
    location: "İstanbul",
    position: "Flutter Developer",
    period: "2022 - Present",
    achievements: [
      "Contributed to the creation, development, and post-launch support of AI, B2B, e-commerce, media monitoring, and magazine reading applications.",
      "Led development of a media monitoring app serving thousands of active users.",
      "For the past year, responsible for all mobile projects within the company.",
    ],
  },
  {
    company: "Adisyo",
    location: "Türkiye",
    position: "Flutter Developer",
    period: "2020 - 2022",
    achievements: [
      "Laid the foundation and was involved from start to finish in developing a mobile restaurant application serving around 7,000 active users.",
      "Continuously maintained the live app according to the specific needs of each branch.",
    ],
  },
  {
    company: "Beykoz Municipality, Republic of Turkey",
    location: "Beykoz, İstanbul",
    position: "Technical / Software Support",
    period: "2019 - 2020",
    achievements: [
      "Completed a short-term internship in the Information Processing Department.",
      "Attended meetings with various companies and provided support regarding the municipality's software needs.",
      "Dedicated to self-improvement throughout the process.",
    ],
  },
  {
    company: "Pia Computer",
    location: "İstanbul",
    position: "Technical / Software Support",
    period: "2017 - 2018",
    achievements: [
      "Completed high school internship at a company providing software and hardware support.",
      "Worked in direct contact with customers, improving communication and social skills.",
    ],
  },
];

export const education = [
  {
    institution: "Bilecik University",
    location: "Bilecik",
    degree: "Computer Programmer",
    period: "2017 - 2019",
    achievements: [
      "Associate degree in computer programming.",
    ],
  },
  {
    institution: "Beykoz Anatolian Technical High School",
    location: "İstanbul / Beykoz",
    degree: "Web Programmer",
    period: "2013 - 2017",
    achievements: [
      "Vocational high school program focused on web programming.",
    ],
  },
];

export const skills = {
  programmingLanguages: ["Dart", "Kotlin", "Flutter"],
  frontendDevelopment: [
    "Responsive UI",
    "App Lifecycle",
    "Push Notifications",
    "Deep Linking",
    "Localization",
    "In-App Purchases",
  ],
  backendDevelopment: [
    "Clean Architecture",
    "SOLID Principles",
    "MVVM",
    "Repository Pattern",
    "Dependency Injection",
  ],
  databaseAndStorage: ["Hive", "SharedPreferences", "SQLite", "Isar"],
  cloudAndDevOps: [
    "Firebase",
    "Authentication",
    "Firestore",
    "Crashlytics",
    "Analytics",
    "Cloud Messaging",
    "Supabase",
    "REST APIs",
    "WebSocket",
    "Git",
    "GitHub",
    "GitLab",
    "Codemagic",
    "Fastlane",
    "CI/CD",
  ],
  toolsAndServices: [
    "Riverpod",
    "Bloc",
    "GetX",
    "ValueNotifier",
    "Provider",
    "Google Play Console",
    "App Store Connect",
    "Internal Testing",
    "TestFlight",
    "Flavors",
    "Subscriptions",
    "Unit Testing",
    "Widget Testing",
    "Integration Testing",
    "English (B1)",
  ],
};

export const projects = [
  {
    title: "Adisyo Restaurant App",
    github: "",
    images: [
      "/projects/adisyo/1-masalar.png",
      "/projects/adisyo/2-siparisler.png",
      "/projects/adisyo/3-menu.png",
      "/projects/adisyo/4-adisyon.png",
    ],
    description: [
      "Mobile restaurant management application serving around 7,000 active users.",
      "Built with Flutter based on customer and branch-specific requirements.",
      "Continuously maintained and improved for live production use.",
    ],
  },
  {
    title: "Media Monitoring App",
    github: "",
    images: [] as string[],
    description: [
      "Media monitoring mobile application with thousands of active users.",
      "Developed at Kodiks with focus on scalability and real-time data.",
    ],
  },
  {
    title: "E-commerce Mobile App",
    github: "",
    images: [] as string[],
    description: [
      "Scalable e-commerce mobile application with end-to-end product development.",
      "Integrated Firebase services and modern state management solutions.",
    ],
  },
  {
    title: "Magazine Reading App",
    github: "",
    images: [] as string[],
    description: [
      "Digital magazine reading application with smooth UX and content delivery.",
      "Built with Flutter and deployed to app stores.",
    ],
  },
  {
    title: "B2B Mobile Platform",
    github: "",
    images: [
      "/projects/b2b/2-ana-sayfa.png",
      "/projects/b2b/3-kategoriler.png",
      "/projects/b2b/1-urun-detay.png",
    ],
    description: [
      "Business-to-business mobile platform for enterprise workflows.",
      "Clean Architecture and modular codebase for long-term maintainability.",
    ],
  },
  {
    title: "AI Mobile Application",
    github: "",
    images: [] as string[],
    description: [
      "AI-powered mobile application integrating intelligent features.",
      "Full lifecycle development from architecture to store release.",
    ],
  },
];

export const awards: {
  name: string;
  issuer: string;
  date: string;
  type: string;
  position: string;
}[] = [];
