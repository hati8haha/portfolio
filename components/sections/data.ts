import { IconType } from 'react-icons'
import { AiOutlineCloudServer } from 'react-icons/ai'
import { FaHome, FaUbuntu } from 'react-icons/fa'
import { LiaInfinitySolid } from 'react-icons/lia'
import { MdWeb } from 'react-icons/md'
import {
  SiAmazonaws,
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiGit,
  SiGooglecloud,
  SiGooglehome,
  SiHtml5,
  SiI18Next,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiServerless,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiWebpack,
  SiApacheecharts,
  SiCesium,
  SiSass,
  SiMysql,
  SiSequelize
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

export type TechStackType =
  | 'JavaScript'
  | 'TypeScript'
  | 'React'
  | 'Redux'
  | 'Next.js'
  | 'Jest'
  | 'i18next'
  | 'CSS'
  | 'HTML'
  | 'Styled-components'
  | 'Tailwind CSS'
  | 'Sass'
  | 'MUI'
  | 'RWD'
  | 'Webpack'
  | 'Flutter'
  | 'Dart'
  | 'Node.js'
  | 'Express'
  | 'Restful API'
  | 'PostgreSQL'
  | 'NoSQL'
  | 'Microservices'
  | 'Serverless'
  | 'Nginx'
  | 'GCP (Google Cloud Platform)'
  | 'AWS'
  | 'Linux'
  | 'Docker'
  | 'CI/CD'
  | 'Git'
  | 'Apache Echarts'
  | 'Cesium'
  | 'Sequelize'
  | 'MySQL'

export type LinkButton = {
  name: string
  link: string
}
export interface ProjectData {
  title: string
  coverImage: string
  images: string[]
  shortDescription: string
  techStack: TechStackType[]
  description: string
  link?: LinkButton[]
}

export interface Skills {
  name: string
  icon: IconType
  color?: string
}

export const frontEndSkills: Skills[] = [
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'React', icon: SiReact, color: '#00d8ff' },
  { name: 'Redux', icon: SiRedux, color: '#764abc' },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Jest', icon: SiJest, color: '#18df16' },
  { name: 'i18next', icon: SiI18Next, color: '#26a69a' },
  { name: 'Sass', icon: SiSass, color: '#c69' },
  { name: 'CSS', icon: SiCss3 },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'Styled-components', icon: SiStyledcomponents, color: '#bf4f74' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
  { name: 'MUI (Material-UI)', icon: SiMui },
  { name: 'RWD (Responsive Web Design)', icon: MdWeb },
  { name: 'Webpack', icon: SiWebpack },
  { name: 'Flutter', icon: SiFlutter, color: '#54c5f8' },
  { name: 'Dart', icon: SiDart, color: '#01579b' }
]

export const backEndSkills: Skills[] = [
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Restful API', icon: TbApi },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql, color: '#00758f' },
  { name: 'NoSQL', icon: SiMongodb },
  { name: 'Sequelize', icon: SiSequelize, color: '#3b76c3' },
  { name: 'Microservices', icon: AiOutlineCloudServer },
  { name: 'Serverless', icon: SiServerless, color: '#fd5750' },
  { name: 'Nginx', icon: SiNginx }
]

export const cloudSkills: Skills[] = [
  {
    name: 'GCP (Google Cloud Platform)',
    icon: SiGooglecloud,
    color: '#4285F4'
  },
  { name: 'AWS (Amazon Web Services)', icon: SiAmazonaws },
  { name: 'Linux', icon: FaUbuntu },
  { name: 'Docker', icon: SiDocker, color: '#0db7ed' },
  {
    name: 'CI/CD',
    icon: LiaInfinitySolid
  },
  { name: 'Git', icon: SiGit }
]

export const smartHomeSkills: Skills[] = [
  { name: 'Google Smart Home', icon: SiGooglehome },
  { name: 'Matter', icon: FaHome }
]

const otherSkills: Skills[] = [
  { name: 'Apache Echarts', icon: SiApacheecharts, color: '#F72C5B' },
  { name: 'Cesium', icon: SiCesium, color: '#1a6a71' }
]

export const allSKills: Skills[] = [
  ...frontEndSkills,
  ...backEndSkills,
  ...cloudSkills,
  ...smartHomeSkills,
  ...otherSkills
]

export const jobsData = [
  {
    jobTitle: 'Developer Programs Engineer',
    employmentType: 'Contract via Virtusa',
    duration: '10/2022 ~ now',
    company: 'Google',
    desc: [
      '• Coached over 400 developers worldwide in the Google Smart Home and Matter development through Google Issue Tracker, resolving more than 100 issues each quarter.',
      '• Implemented Service Level Objectives (SLOs), leading to an 85% reduction in response time for the Issue Tracker.',
      '• Enhanced workflow efficiency by integrating new tools, saving 15% of time on routine tasks.',
      '• Reported and tracked bugs, bridging communication gaps between internal team engineers and third-party developers.',
      '• Contributed to enhancing developer tools and public documentation on Google Home Developer Center.',
      '• Supported Google Smart Home certification team in processing certificate requests, including cloud-to-cloud and Matter.'
    ],
    image: '/google-company-logo.svg',
    companyLink: 'https://www.virtusa.com/'
  },
  {
    jobTitle: 'Frontend Web Developer',
    employmentType: 'Part-time',
    duration: '10/2022 ~ now',
    company: 'ValleyDeer.com',
    desc: [
      '• Developed an international real-time payment platform and management system, increasing monthly transaction counts by 70% within 10 months. More than 120 streamers have subscribed to our SaaS service.',
      '• Contributed 30% of frontend codebase across various projects, utilizing the latest technologies such as React and Typescript.',
      '• Engineered dashboards for live stream donation data, enabling data-driven decisions through advanced data visualization.',
      '• Leveraged Google Cloud Platform for scalable serverless backend services and storage.',
      '• Created a Discord bot to boost streamer-fan interaction.',
      '• Played a key role in optimizing frontend and backend architecture and database design.'
    ],
    image: '/valleydeer-company-logo.png',
    companyLink: 'https://deerdonate.herokuapp.com/'
  },
  {
    jobTitle: 'Frontend Web Developer',
    employmentType: 'Full-time',
    duration: '01/2022 ~ 10/2022',
    company: 'NADI system',
    desc: [
      '• Developed internationalization membership platform services and 3D web GIS applications using React, Next.js, Redux, TypeScript, and WebGL libraries.',
      '• Utilized AGILE methodology and actively participated in SCRUM meetings, helping the team meet sprint goals.',
      '• Collaborated with senior engineers to conduct thorough code reviews to ensure code quality and maintainability.',
      '• Ensured code quality by implementing unit testing using Jest, React Testing Library and Mock Service Worker.',
      '• Migrated legacy projects to Next.js, MUI and Docker, resulting in faster page load times and an enhanced user experience.',
      '• Implemented pre-commit hooks (Prettier, commitlint) for consistent code style and enhanced collaboration within the team.'
    ],
    image: '/nadi-company-logo.png',
    companyLink: 'string'
  }
]

export const projects: ProjectData[] = [
  {
    title: 'Deer Donate',
    coverImage: '/deerdonate-donate.gif',
    shortDescription:
      'Leveling up livestreams! 🚀💰 Real-time donations, transactions without the headache, and gamified interactions 🎮🎁.',
    techStack: [
      'React',
      'TypeScript',
      'Styled-components',
      'GCP (Google Cloud Platform)'
    ],
    description: `Elevate your live streaming with a game-changing donation system!

      Features:
      🌟 Interactive Engagement: Transform fan donations into captivating on-screen animations and cuties, forging deeper bonds between creators and fans.
      🎨 Creator's Canvas  Personalized pages let creators express and engage uniquely.
      💳 Online Payment Global Support: Integrated with top payment processors like PayPal, ECPay, & OPay. Hello, overseas fans! 🌍
      ⚡ Exciting Notifications: Unleash a cascade of delights - auto progress bars, global accents, countdown robots, lotto thrills, and more!
      ✨ Donations with Flair: Fans donate with cuties, blending appreciation with fun.
      🎉 Gaming Alerts: From live countdowns to lottery roulettes, make every donation an event.

      Impact:
      By achieving a seamless blend of technology and creativity, this project increased monthly transaction counts by 70%, with 120+ streamers joining the party!`,
    images: [
      'deerdonate-gift.webp',
      'deerdonate-donate.gif',
      'deerdonate-notification.webp',
      'deerdonate-demo1.png',
      'deerdonate-demo2.gif',
      'deerdonate-feature1.png'
    ],
    link: [{ name: 'View Project', link: 'https://deerdonate.herokuapp.com/' }]
  },
  {
    title: 'ValleyDeer management system',
    coverImage: '/sakut-console-behavior2.gif',
    shortDescription:
      'Live Stream Insights: Fan donations, dynamic charts 📈, stats, game settings ⚙️, and custom notifications 📬, all in one platform.',
    description: `Elevating live streaming with tech innovation and AI insights!🚀

    Highlights ✨:

    🤖 AI-Fueled Fan Insights: Delve into fan sponsor patterns effortlessly.

    🎁 Boosted Engagement: Lock in fan preferences, target top supporters, and re-engage inactive fans.

    🎛️ Dashboard Magic: Empowering data-driven choices with live donation stats through stunning visuals.

    📊 Swift Data Export: Effortless Excel reports for streamlined analysis.

    ⚙️ All-in-One Management: Countdown bots, lucky roulettes, notifications, and more!
    
    🌐 Powered by Google Cloud for scalability, plus a Discord bot for amplified streamer-fan connections.🌈
    `,
    techStack: [
      'React',
      'TypeScript',
      'Styled-components',
      'Serverless',
      'Apache Echarts',
      'i18next'
    ],
    images: [
      'sakut-console-login.png',
      'sakut-console-behavior1.gif',
      'sakut-console-behavior2.gif',
      'sakut-console-table2.gif'
    ],
    link: [
      {
        name: 'View Project',
        link: 'https://sakut-console.herokuapp.com/Login'
      }
    ]
  },
  {
    title: 'NADI Membership platform',
    coverImage: '/nadi-soc1.png',
    shortDescription:
      'An internationalization membership platform 🌍 designed to integrate diverse SaaS services ☁️ and ordering systems.',
    techStack: [
      'Next.js',
      'React',
      'Redux',
      'TypeScript',
      'Tailwind CSS',
      'i18next',
      'Jest',
      'Docker'
    ],
    images: ['nadi-soc1.png', 'nadi-soc2.png', 'nadi-soc3.png'],
    description: `An advanced membership platform, seamlessly integrating diverse SaaS services and sophisticated ordering systems. 🚀

🌍 Unified Services: Unite Geographic Information Application and Building Information Modeling Platforms in one digital hub.
💼 Effortless Efficiency: Streamline service procurement, offering unparalleled convenience and global accessibility.
🗣️ Internationalization: Enhances user experience, ensures cultural relevance.
🔧 Cutting-Edge Tech: Crafted with Next.js, Redux, and Typescript for dynamic interfaces and robust data management.
✅ Flawless Performance: Rigorous Jest unit testing ensures seamless component functionality.
🚢 Agile Deployment: Docker containerization enables swift deployment across environments.
⚙️ Smart Development: Incorporate Mock Service Workers for efficient development cycles.

Note: This project is currently deprecated due to external factors. `
  },
  {
    title: 'Geography Information Application Platform',
    coverImage: '/giap-demo1.png',
    shortDescription:
      'Blending geo-info 🗺️, 3D models 🏬, and visuals into an intuitive platform that gives you a city or global scope at your fingertips. 🌍',
    techStack: [
      'React',
      'Redux',
      'TypeScript',
      'Sass',
      'Tailwind CSS',
      'Cesium',
      'Jest'
    ],
    description: `Dive into the Geography Information Application Platform (GIAP) – your passport to a dynamic fusion of geo-info, 3D models, and visuals, all at your fingertips! 🗺️

    🏙️ 3D Urban Exploration: Immerse yourself in cities like never before. Walk through 3D model buildings, unravel architecture, and capture the vibe of bustling streets – all from your screen!
    
    🛰️ InSAR Technology: Harness the power of Interferometric Synthetic Aperture Radar (InSAR) for pinpoint precision. Monitor landscapes, detect ground shifts, and ensure structural stability – a game-changer for geophysics and engineering. 📡
    
    📊 Geo Stats Simplified: Need specific area insights? Our user-friendly interface lets you order detailed geo statistical information with ease.
    
    🔧 Tech Specs: GIAP is built with React for a responsive interface, and Cesium.js, a powerful WebGL library, for captivating 3D landscapes.
    
    Note: This project is currently deprecated due to external factors. 
    `,
    images: ['giap-demo1.png', 'GIAP.gif']
  },
  {
    title: 'Meal Time',
    coverImage: '/meal-time-demo.png',
    shortDescription:
      'Turning surplus into supper! 🍽️ A platform gives excess food a comeback, serving meals over waste. 🌱',
    techStack: [
      'React',
      'Redux',
      'JavaScript',
      'Styled-components',
      'Express',
      'Sequelize',
      'MySQL'
    ],
    description: `Where food sharing meets advanced e-commerce. 🛒🍔🛍️

    Tech 🛠️: React + Redux Toolkit (Frontend) | Express + Sequelize (Backend)
    
    For Users 👥:
    🔍 Explore: Find fresh, affordable food instantly. 🍏🍕
    🛒 Shop : Effortlessly manage your cart and orders. 🛍️📦
    📝 Personalize : Update your info seamlessly. ✏️🔄
    🎛️ Control : Monitor and modify orders in real-time. 📊🕒
    🌍 Discover : Locate nearby food spots on the map. 🗺️📍
    
    For Sellers 👩‍🍳:
    📸 Showcase : Present offerings vividly. 🌟
    📊 Manage : Curate and update food listings easily. 🔄
    
    Join Meal Time's tech-driven movement for greener, efficient food sharing 🌱🚀🍽️`,
    images: [
      'meal-time-demo.png',
      'meal-time-demo3.png',
      'meal-time-demo2.png',
      'meal-time-demo1.png',
      'meal-time-demo4.png',
      'meal-time-demo5.png',
      'meal-time-demo6.png',
      'meal-time-demo7.png',
      'meal-time-demo8.png'
    ],
    link: [
      { name: 'GitHub (FE)', link: 'https://github.com/pcchen95/meal-time' },
      {
        name: 'GitHub (BE)',
        link: 'https://github.com/pcchen95/meal-time-backend'
      }
    ]
  },
  {
    title: 'WhiskerSoothe',
    coverImage: '/WhiskerSoothe-demo.gif',
    shortDescription:
      '📱 Your go-to mobile app for tranquility. 🐾 3D animal models + 🌿 relaxing white noise = ultimate unwinding. 🌅',
    techStack: ['Flutter', 'Dart'],
    description: `Introducing WhiskerSoothe: Your Pocket Relaxation Oasis

🐾 Discover Tranquility: Immerse in a world of interactive 3D animal models and soothing white noise sounds with WhiskerSoothe, the ultimate relaxation app.

🐼 Virtual Companions: Engage with cute animals – from cuddly pandas to playful kittens – for an adorable, stress-relieving experience.

🎶 Serene Soundscapes: Enjoy a variety of high-quality white noise sounds like raindrops and ocean waves, designed to promote relaxation.

📱 Cross-Platform: Built with Flutter, WhiskerSoothe runs smoothly on iOS and Android, ensuring access to serenity for all.

💫 Why WhiskerSoothe?: Elevate well-being effortlessly. Whether for a moment's escape or leisure, find solace in digital serenity.

🚀 Powered by Flutter: Cutting-edge technology meets relaxation, offering a seamless, immersive experience.
    `,
    images: ['/WhiskerSoothe-demo.gif'],
    link: [
      {
        name: 'View Project',
        link: 'https://github.com/hati8haha/healing-animal-sounds'
      }
    ]
  }
]
