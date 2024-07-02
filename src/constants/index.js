import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  linux,
  aws,
  java,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  upgradx,
  stone,
  ERaktdaan,
  carrent,
  npm,
  insta,
  itube,
  jobit,
  tripguide,
  threejs,
  share,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "App Devloper",
    icon: mobile,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    icon: backend,
  },
  {
    title: "Devops",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "UpgradX",
    icon: upgradx,
    iconBg: "#383E56",
    date: "Feb 2023 - March 2023",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed a cross-platform mobile application using Flutter, targeting both iOS and Android devices.",
      "Collaborated with client to gather requirements and translate them into technical specifications and functional features",
      "Managed version control and collaboration using Git and GitHub, ensuring code quality and maintainability.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Stone Arts Kenya",
    icon: stone,
    iconBg: "#E6DEDD",
    date: "March 2024",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
      // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed a dynamic and responsive web application using Next.js, leveraging its server-side rendering and static site generation capabilities.",
      "Utilized Firebase for backend services, including Firestore for real-time database management, Firebase Authentication for user authentication.",
      "Managed state and asynchronous data fetching using React hooks and Next.js features, enhancing user experience and app performance.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Railworld",
  //   icon: railworld,
  //   iconBg: "#383E56",
  //   date: "Apr 2024 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Algobox📦",
    description:
      "200+ downloads since its launch in February 2024. An NPM package published on npm, aimed at simplifying array sorting tasks. Eliminates the need for complex sorting logic or compare functions by allowing effortless array sorting.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
    ],
    image: npm,
    source_code_link: "https://github.com/Babur02/algobox_npm_package.git",
    live_link: "https://www.npmjs.com/package/algobox",
  },
  {
    name: "iTube🎥",
    description:
      "Offers a seamless video watching experience where users can enjoy an extensive library of videos.Seamlessly integrates React's component-based architecture for efficient and scalable development.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: itube,
    source_code_link: "https://github.com/Babur02/iTube.git",
    live_link: "https://new-itube.netlify.app/",
  },
  {
    name: "E-Raktdaan🩸",
    description:
      "E-Raktdaan, an Android-based blood donation app that enables donors and recipients to connect and arrange blood donations.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "XML",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: ERaktdaan,
    source_code_link: "https://github.com/Babur02/E-Raktdaan.git",
    live_link: "https://drive.google.com/file/d/124XrBnqColazioznMEMuQDpzL0mTtqu-/view",
  },
  {
    name: "Insta-Style📱",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: insta,
    source_code_link: "https://github.com/Babur02/Insta-Style-WebApp.git",
    live_link: "https://insta-style-webapp-1.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
