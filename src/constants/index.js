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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  arl,
 convergent,
 ecocar,
 twhs,
 ut,
 ansible,
 paycom,
 aws,
 bash,
 c,
 flask,
 ghub,
 gitlab,
 java,
 matplotlib,
 opencv,
 python,
 r,
 reactnative,
 salesforce,
 sklearn,
 sql,
 swift,
 tensorflow,
 tkinter

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "education",
  //   title: "Education",
  // },
  {
    id: "work",
    title: "Experience",
  },
  // FIX
  // {
  //   id: "skills",
  //   title: "Skills",
  // },
  {
    id: "contact",
    title: "Contact",
  },
 ];
 

 const services = [
  {
    title: "Student",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "System Design",
    icon: creator,
  },
 ];
 


const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Salesforce",
    icon: salesforce,
  },
  {
    name: "Amazon Web Services",
    icon: aws,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
];

const devops =[
  {
    name: "Amazon Web Services",
    icon: aws,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
  {
    name: "Github",
    icon: ghub,
  },
  {
    name: "Gitlab",
    icon: gitlab,
  },
  {
    name: "Salesforce",
    icon: aws,
  },
 ]

const educations = [
  {
    school: "The Woodlands High School",
    date: "August 2017 - May 2021",
    major: "N/A",
    minor: "N/A",
    icon: twhs,
    iconBg: '#E6DEDD',
    points: [
      "Graduated 4th in a class out of 1026",
      "SAT: 1480",
      "ACT: 33",
    ],
  },
  {
    school: "The University of Texas at Austin",
    date: "August 2021 - May 2025",
    major: "Computer Science",
    minor: "Business",
    icon: ut,
    iconBg: '#383E56',
    points: [
      "Recipient of the Texas Excellence scholarship",
    ],

  }
]


 const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Applied Research Laboratories",
    icon: arl,
    iconBg: "#383E56", // don't know what this does
    date: "May 2022 - August 2022",
    points: [
      "Led the software development of a novel Unmanned Underwater Vehicle (UUV) sound controller and sound controller User Interface.",
      "Integrated novel, Python-based UUV sound controller application with existing Linux-based UUV system architecture.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed RHEL and Debian Linux command-line skills",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "The University of Texas at Austin - Bioinformatics Lab",
    icon: ut,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - January 2022",
    points: [
      "Worked with the Big Data in Biology research stream to perform statistical tests through computation and to determine biological indicators in high-risk patient",
      "Conducted various classification tests on genes through SKLearn to classify and identify differential genes.",
      "Wrote a 5-step pipeline for analyzing Multiple Myeloma patient RNA data to determine risk-prone biological markers",
      "Created filterable visualizations for RNA samples to determine concentrations of Copy Number Variants",
    ],
  },
  {
    title: "Connected and Automated Vehicle Team Member",
    company_name: "EcoCar EV Challenge",
    icon: ecocar,
    iconBg: "#383E56",
    date: "Dec 2022 - Present",
    points: [
      "Used Tensorflow and OpenCV to create a model that identifies driver's faces and to provide an attentiveness value to determine intrusiveness of ADAS systems",
      "Worked with a small team to research and estimate computational and energy needs of a fully autonomous vehicle",
      "Collaborated with Propulsion, Controls, and modeling team to ensure consistent expectations and to plan out implementation of large systems",
    ],
  },
  {
    title: "Forge Nonprofits Software Engineer",
    company_name: "Texas Convergent",
    icon: convergent,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Accepted into Forge program which has a less than 10% acceptance rate",
      "Developed a full-stack application for Meals On Wheels - Austin for volunteers to track food deliveries and provide wellness checks to clients",
      "Utilized a React-Native front-end and a Salesforce back-end for development",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Paycom",
    icon: paycom,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
      "TBD"
    ],
  },
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
    name: "PintOS",
    description:
    "A lightweight operating system that features a functional priority-based threading system, demand paging/virtual memory, system calls/privilege escalations, and file system",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Class-Project",
        color: "green-text-gradient",
      },
      {
        name: "Systems",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
  },
  {
    name: "Organization Point Database",
    description:
      "Python-based project built for large high-school organizations to track hundreds of club member's activity and to provide statistics of engagement",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
      {
        name: "Personal-project",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    // source_code_link: "https://github.com/",
  },
  {
    name: "CityScoop",
    description:
      "A comprehensive travel companion website that scrapes 3 APIs to give user's information on nearby hotels, attractions, and restaurants. Uses React and bootstrap for front-end and flask for the backend",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "School-Project",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "Cityscoop.me",
  },
];

export { services, technologies, experiences, testimonials, projects, devops, educations };