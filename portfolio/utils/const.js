export function useConstants() {
  const navigation = [
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    {
      id: 2,
      name: "Skills",
      href: "/skills",
    },
    {
      id: 3,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 4,
      name: "Contact",
      href: "/contact",
    },
  ];

  const skillWithLogo = [
    {
      imgUrl: "/logos/html5-original.svg",
      name: "HTML",
      alt: "HTML logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/tailwindcss-plain.svg",
      name: "TailwindCSS",
      alt: "TailwindCSS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/javascript-original.svg",
      name: "JavaScript",
      alt: "JavaScript logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/react-original.svg",
      name: "React",
      alt: "React logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/python.png",
      name: "Python",
      alt: "Python logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/java.png",
      name: "Java",
      alt: "Java logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/c.png",
      name: "C",
      alt: "C logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/api.png",
      name: "FastAPI",
      alt: "FastAPI logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/mongoDB.png",
      name: "MongoDB",
      alt: "MongoDB logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/nodejs-original.svg",
      name: "NodeJS",
      alt: "NodeJS logo",
      width: 150,
      height: 150,
    },
    {
      imgUrl: "/logos/git-original.svg",
      name: "Git",
      alt: "Git logo",
      width: 150,
      height: 150,
    },
  ];
  const hobbies = [
    {
      title: "Listening to rap music",
      text: "Recent favourites: Kr$na, Karma, Divine, Talha Anjum and Umair",
      classBg: "bg-music",
    },
    {
      title: "Playing Sports",
      text: "I love playing any sport in my free time.",
      classBg: "bg-sports",
    },
    {
      title: "Learning new technologies/framework",
      text: "To explore and expand my skillsets.",
      classBg: "bg-programming",
    },
  ];
  const projects = [
    {
      isReverse: true,
      title: "Portfolio Website",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/portfolio.png",
      description:
        "A personal blog using NextJS and Notion API. It has code syntax highlight, text to speech and image viewer.",
      techStack: [
        "NextJS",
        "tailwindcss"
      ],
      isUrl: false,
      githubLink: "https://github.com/aayushujjwal/Portfolio-Website",
    },
    {
      isReverse: true,
      title: "Adventure Trip Planning Website",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/atp.png",
      description:
        "Executed React for frontend UI, MongoDB for data storage,and Node with Express for backend operations in the Adventure Trip Planning Website.",
      techStack: [
       "React",
        "MongoDB",
        "Node",
        "Express",
        "tailwindcss",
      ],
      isUrl: false,
      githubLink: "https://github.com/aayushujjwal/Adventure-Trip-Planning-Website",
    },
    {
      isReverse: false,
      title: "Image Captioning AI Assistant",
      titleColor: "text-white",
      filterColor: "bg-slate-900 bg-opacity-60",
      imageUrl: "/project-ss/aiic.png",
      description:
        "Integrated ViT-GPT2 transformers with an ML model fine-tuned onthe COCO dataset, consisting of 82,000 images, delivering precise caption generation.",
      techStack: [
      "ViT-GPT2",
      "ML Model",
      "COCO Dataset",
      "Streamlit Cloud",
      ],
      isUrl: true,
      url: "https://ai-image-captioning-ai.vercel.app/",
      githubLink: "https://github.com/aayushujjwal/AI-Image-Captioning",
    },
    {
      isReverse: true,
      title: "Dance Club Hub: Event and Member Management",
      titleColor: "text-white",
      filterColor: "bg-slate-500 mix-blend-hard-light",
      imageUrl: "/project-ss/home.png",
      description:
        "A Spotify clone web app. Built to view your saved and created playlist. It also can control your Spotify app playback state.",
      techStack: [
        "React",
        "Express",
        "Node",
        "MySQL",
        "TailwindCSS",
      ],
      isUrl: false,
      githubLink: "https://github.com/aayushujjwal/Dance-Club-Management-System",
    },
  ];
  

  return {
    navigation,
    hobbies,
    skillWithLogo,
    projects,
  };
}
