import type { IconType } from "react-icons";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaHome, FaUbuntu } from "react-icons/fa";
import { LiaInfinitySolid } from "react-icons/lia";
import { MdWeb } from "react-icons/md";
import {
	SiAmazonaws,
	SiApacheecharts,
	SiCesium,
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
	SiKotlin,
	SiMongodb,
	SiMui,
	SiMysql,
	SiNextdotjs,
	SiNginx,
	SiNodedotjs,
	SiPostgresql,
	SiPython,
	SiReact,
	SiRedux,
	SiSass,
	SiSequelize,
	SiServerless,
	SiStyledcomponents,
	SiTailwindcss,
	SiTypescript,
	SiWebpack,
} from "react-icons/si";
import { TbApi, TbBrandKotlin } from "react-icons/tb";

export type TechStackType =
	| "JavaScript"
	| "TypeScript"
	| "React"
	| "Redux"
	| "Next.js"
	| "Jest"
	| "i18next"
	| "CSS"
	| "HTML"
	| "Styled-components"
	| "Tailwind CSS"
	| "Sass"
	| "MUI"
	| "RWD"
	| "Webpack"
	| "Flutter"
	| "Dart"
	| "Node.js"
	| "Express"
	| "Restful API"
	| "PostgreSQL"
	| "NoSQL"
	| "Microservices"
	| "Serverless"
	| "Nginx"
	| "GCP (Google Cloud Platform)"
	| "AWS"
	| "Linux"
	| "Docker"
	| "CI/CD"
	| "Git"
	| "Apache Echarts"
	| "Cesium"
	| "Sequelize"
	| "MySQL"
	| "tailwindcss"
	| "Astro.js"
	| "Inertia.js"
	| "CSS Modules"
	| "Sass"
	| "Framer Motion"
	| "GraphQL"
	| "React Query"
	| "Next-Auth"
	| "Vercel"
	| "React Hook Form";

export type LinkButton = {
	name: string;
	link: string;
};
export interface ProjectData {
	title: string;
	coverImage: string;
	images: string[];
	shortDescription: string;
	techStack: TechStackType[];
	description: string;
	roles: string[];
	link?: LinkButton[];
}

export interface Skills {
	name: string;
	icon: IconType;
	color?: string;
}

export const frontEndSkills: Skills[] = [
	{ name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
	{ name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
	{ name: "React", icon: SiReact, color: "#00d8ff" },
	{ name: "Redux", icon: SiRedux, color: "#764abc" },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Jest", icon: SiJest, color: "#18df16" },
	{ name: "i18next", icon: SiI18Next, color: "#26a69a" },
	{ name: "Sass", icon: SiSass, color: "#c69" },
	{ name: "CSS", icon: SiCss3 },
	{ name: "HTML", icon: SiHtml5 },
	{ name: "Styled-components", icon: SiStyledcomponents, color: "#bf4f74" },
	{ name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
	{ name: "MUI (Material-UI)", icon: SiMui },
	{ name: "RWD (Responsive Web Design)", icon: MdWeb },
	{ name: "Webpack", icon: SiWebpack },
	{ name: "Flutter", icon: SiFlutter, color: "#54c5f8" },
	{ name: "Dart", icon: SiDart, color: "#01579b" },
];

export const backEndSkills: Skills[] = [
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "Express", icon: SiExpress },
	{ name: "Restful API", icon: TbApi },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "MySQL", icon: SiMysql, color: "#00758f" },
	{ name: "NoSQL", icon: SiMongodb },
	{ name: "Sequelize", icon: SiSequelize, color: "#3b76c3" },
	{ name: "Microservices", icon: AiOutlineCloudServer },
	{ name: "Serverless", icon: SiServerless, color: "#fd5750" },
	{ name: "Nginx", icon: SiNginx },
	{ name: "Python", icon: SiPython },
	{ name: "Kotlin", icon: TbBrandKotlin },
];

export const cloudSkills: Skills[] = [
	{
		name: "GCP (Google Cloud Platform)",
		icon: SiGooglecloud,
		color: "#4285F4",
	},
	{ name: "AWS (Amazon Web Services)", icon: SiAmazonaws },
	{ name: "Linux", icon: FaUbuntu },
	{ name: "Docker", icon: SiDocker, color: "#0db7ed" },
	{
		name: "CI/CD",
		icon: LiaInfinitySolid,
	},
	{ name: "Git", icon: SiGit },
];

export const smartHomeSkills: Skills[] = [
	{ name: "Google Smart Home", icon: SiGooglehome },
	{ name: "Matter", icon: FaHome },
];

const otherSkills: Skills[] = [
	{ name: "Apache Echarts", icon: SiApacheecharts, color: "#F72C5B" },
	{ name: "Cesium", icon: SiCesium, color: "#1a6a71" },
];

export const allSKills: Skills[] = [
	...frontEndSkills,
	...backEndSkills,
	...cloudSkills,
	...smartHomeSkills,
	...otherSkills,
];

export const jobsData = [
	{
		jobTitle: "Developer Programs Engineer",
		employmentType: "Contract via Virtusa",
		duration: "10/2022 ~ 04/2024",
		company: "Google",
		desc: [
			"• Developed Android UI Automation tools using Python and Kotlin to streamline QA processes and improve efficiency.",
			"• Coached over 400 developers worldwide in the Google Smart Home and Matter development through Google Issue Tracker, resolving more than 100 issues per quarter and reducing 85% response time by implementing service level objectives.",
			"• Enhanced workflow efficiency by integrating new tools, saving 15% of time on routine tasks.",
			"• Troubleshoot web development, OAuth, and smart home skill issues, utilizing Docker, CLI tools, and Node.js.",
			"• Reported and tracked bugs, bridging communication gaps between internal team engineers and third-party developers.",
			"• Contributed to developer tools and public documentation on Google Home Developer Center.",
			"• Collaborated with cross-functional international teams to identify and solve complex problems.",
		],
		image: "/google-company-logo.svg",
		companyLink: "https://www.virtusa.com/",
	},
	{
		jobTitle: "Frontend Web Developer",
		employmentType: "Part-time",
		duration: "10/2022 ~ now",
		company: "ValleyDeer.com",
		desc: [
			"• Achieved 20 times faster loading speed, implemented SEO best practices and integrating CRM solutions for official websites.",
			"• Developed an international real-time payment platform and management system, increasing monthly transaction counts by 70% within 10 months. More than 120 streamers have subscribed to our SaaS service.",
			"• Contributed 30% of frontend codebase across various projects, utilizing the latest technologies such as React and Typescript.",
			"• Engineered dashboards for live stream donation data, enabling data-driven decisions through advanced data visualization.",
			"• Leveraged Google Cloud Platform for scalable serverless backend services and storage.",
			"• Created a Discord bot to boost streamer-fan interaction.",
			"• Played a key role in optimizing frontend and backend architecture and database design.",
		],
		image: "/valleydeer-company-logo.webp",
		companyLink: "https://deerdonate.herokuapp.com/",
	},
	{
		jobTitle: "Frontend Web Developer",
		employmentType: "Full-time",
		duration: "01/2022 ~ 10/2022",
		company: "NADI system",
		desc: [
			"• Developed internationalization membership platform services and 3D web GIS applications using React, Next.js, Redux, TypeScript, and WebGL libraries.",
			"• Utilized AGILE methodology and actively participated in SCRUM meetings, helping the team meet sprint goals.",
			"• Collaborated with senior engineers to conduct thorough code reviews to ensure code quality and maintainability.",
			"• Ensured code quality by implementing unit testing using Jest, React Testing Library and Mock Service Worker.",
			"• Migrated legacy projects to Next.js, MUI and Docker, resulting in faster page load times and an enhanced user experience.",
			"• Implemented pre-commit hooks (Prettier, commitlint) for consistent code style and enhanced collaboration within the team.",
		],
		image: "/nadi-company-logo.webp",
		companyLink: "string",
	},
];

export const projects: ProjectData[] = [
	{
		title: "ValleyDeer Survey System",
		coverImage: "/valley-deer-survey-sys.webp",

		shortDescription:
			"Flexible Surveys, AI-Powered Reports 📊, and lightning-fast user experience — all in one seamless platform.",
		description: `Reimagining surveys with elegance, speed, and intelligence! 🚀

    Highlights ✨:

    💡 AI-Driven Reports: Instantly transform survey responses into actionable insights.

    🎨 Dynamic Theming: Flexible design system that adapts to your brand's style.

    ⚡ Next.js Edge Performance: Ultra-fast response times for both admins and public participants.

    🔐 Secure Access: Auth.js (Next-Auth) ensures robust authentication for every role.

    📝 Smooth Form Handling: React Hook Form + Zod validation = error-free submissions.

    📱 Beautiful & Intuitive UI: Powered by MUI with seamless layouts and responsive design.
    
    🌐 Deployed on Vercel for global speed and reliability. 🌈
  `,
		techStack: [
			"React",
			"Next.js",
			"MUI",
			"React Query",
			"TypeScript",
			"Next-Auth",
			"Vercel",
			"React Hook Form",
		],
		roles: ["Frontend"],
		images: [
			"valley-deer-survey-sys-1.webp",
			"valley-deer-survey-sys-2.webp",
			"valley-deer-survey-sys-3.webp",
			"valley-deer-survey-sys-4.webp",
			"valley-deer-survey-sys.webp",
		],
		link: [
			{
				name: "View Project",
				link: "https://valleydeer-survey-sys",
			},
		],
	},
	{
		title: "Mr. Watt Official Website",
		coverImage: "/mrwatt-1.webp",
		shortDescription:
			"Taiwan’s green energy pioneer: sleek design, smooth animations 🎨⚡, and powerful SSR-driven experiences.",
		description: `Powering a sustainable future with style and tech synergy! 🌱🚀

    Highlights ✨:

    🎯 Seamless SSR: Integrated with Inertia.js for fast, server-side rendered magic.

    🎞️ Motion Mastery: Framer Motion brings buttery-smooth animations, from parallax video scrolls to SVG path artistry.

    🖌️ Strong Design DNA: Modern layouts with CSS Modules + Sass for maintainable, scalable styling.

    🔄 GraphQL Power: Dynamic data queries & mutations, perfectly tuned for a rich content experience.

    🌏 Green Energy Leadership: Showcasing Mr. Watt — Taiwan’s first company dedicated to selling renewable energy and bridging the green electricity market.
  `,
		techStack: [
			"React",
			"Inertia.js",
			"CSS Modules",
			"Sass",
			"Framer Motion",
			"GraphQL",
		],
		roles: ["Frontend Development"],
		images: ["mrwatt.webp", "mrwatt-1.webp", "mrwatt-2.webp"],
		link: [
			{
				name: "View Project",
				link: "https://mrwatt.com.tw",
			},
		],
	},
	{
		title: "Valleydeer Official Website",
		coverImage: "/valleydeer-official.webp",
		shortDescription:
			"Blazing-fast ⚡, SEO-friendly 🌐, and ready to scale 🚀—boosting brand visibility and user delight.",
		techStack: ["React", "Astro.js", "tailwindcss"],
		roles: ["Full Stack Development"],
		description: `Delivering speed, scalability, and style all in one package!

      Features:
      ⚡ Lightning Load Times: Powered by Astro.js for an ultra-fast, smooth browsing experience that keeps visitors engaged.
      📈 SEO Optimized: Built with performance and search visibility in mind, helping the brand reach a wider audience.
      📝 Easy Content Management: Integrated with a CMS so updating pages, blogs, or media is a breeze.
      🏗️ Scalable Architecture: Designed to handle high traffic volumes without breaking a sweat.
      🎯 Robust User Experience: Every click, scroll, and interaction fine-tuned for clarity and delight.

      Impact:
      The site’s high-speed performance and SEO optimization have boosted brand discoverability, drawing in more visitors and strengthening Valleydeer’s online presence.`,
		images: [
			"valleydeer-official.webp",
			"valleydeer-official-1.webp",
			"valleydeer-official-2.webp",
			"valleydeer-official-3.webp",
		],
		link: [{ name: "Visit website", link: "https://valleydeer.com" }],
	},

	{
		title: "Deer Donate",
		coverImage: "/deerdonate-donate.gif",
		shortDescription:
			"Leveling up livestreams! 🚀💰 Real-time donations, transactions without the headache, and gamified interactions 🎮🎁.",
		techStack: [
			"React",
			"TypeScript",
			"Styled-components",
			"GCP (Google Cloud Platform)",
		],
		roles: ["Full Stack Development", "DevOps"],
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
			"deerdonate-gift.webp",
			"deerdonate-donate.gif",
			"deerdonate-notification.webp",
			"deerdonate-demo1.webp",
			"deerdonate-demo2.gif",
			"deerdonate-feature1.webp",
		],
		link: [{ name: "View Project", link: "https://deerdonate.herokuapp.com/" }],
	},
	{
		title: "ValleyDeer management system",
		coverImage: "/sakut-console-behavior2.gif",
		shortDescription:
			"Live Stream Insights: Fan donations, dynamic charts 📈, stats, game settings ⚙️, and custom notifications 📬, all in one platform.",
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
			"React",
			"TypeScript",
			"Styled-components",
			"Serverless",
			"Apache Echarts",
			"i18next",
		],
		roles: ["Full Stack Development", "DevOps"],
		images: [
			"sakut-console-login.webp",
			"sakut-console-behavior1.gif",
			"sakut-console-behavior2.gif",
			"sakut-console-table2.gif",
		],
		link: [
			{
				name: "View Project",
				link: "https://sakut-console.herokuapp.com/Login",
			},
		],
	},
	{
		title: "NADI Membership platform",
		coverImage: "/nadi-soc1.webp",
		shortDescription:
			"An internationalization membership platform 🌍 designed to integrate diverse SaaS services ☁️ and ordering systems.",
		techStack: [
			"Next.js",
			"React",
			"Redux",
			"TypeScript",
			"Tailwind CSS",
			"i18next",
			"Jest",
			"Docker",
		],
		roles: ["Frontend Development", "DevOps"],
		images: ["nadi-soc1.webp", "nadi-soc2.webp", "nadi-soc3.webp"],
		description: `An advanced membership platform, seamlessly integrating diverse SaaS services and sophisticated ordering systems. 🚀

🌍 Unified Services: Unite Geographic Information Application and Building Information Modeling Platforms in one digital hub.
💼 Effortless Efficiency: Streamline service procurement, offering unparalleled convenience and global accessibility.
🗣️ Internationalization: Enhances user experience, ensures cultural relevance.
🔧 Cutting-Edge Tech: Crafted with Next.js, Redux, and Typescript for dynamic interfaces and robust data management.
✅ Flawless Performance: Rigorous Jest unit testing ensures seamless component functionality.
🚢 Agile Deployment: Docker containerization enables swift deployment across environments.
⚙️ Smart Development: Incorporate Mock Service Workers for efficient development cycles.

Note: This project is currently deprecated due to external factors. `,
	},
	{
		title: "Geography Information Application Platform",
		coverImage: "/giap-demo1.webp",
		shortDescription:
			"Blending geo-info 🗺️, 3D models 🏬, and visuals into an intuitive platform that gives you a city or global scope at your fingertips. 🌍",
		techStack: [
			"React",
			"Redux",
			"TypeScript",
			"Sass",
			"Tailwind CSS",
			"Cesium",
			"Jest",
		],
		roles: ["Frontend Development"],
		description: `Dive into the Geography Information Application Platform (GIAP) – your passport to a dynamic fusion of geo-info, 3D models, and visuals, all at your fingertips! 🗺️

    🏙️ 3D Urban Exploration: Immerse yourself in cities like never before. Walk through 3D model buildings, unravel architecture, and capture the vibe of bustling streets – all from your screen!
    
    🛰️ InSAR Technology: Harness the power of Interferometric Synthetic Aperture Radar (InSAR) for pinpoint precision. Monitor landscapes, detect ground shifts, and ensure structural stability – a game-changer for geophysics and engineering. 📡
    
    📊 Geo Stats Simplified: Need specific area insights? Our user-friendly interface lets you order detailed geo statistical information with ease.
    
    🔧 Tech Specs: GIAP is built with React for a responsive interface, and Cesium.js, a powerful WebGL library, for captivating 3D landscapes.
    
    Note: This project is currently deprecated due to external factors. 
    `,
		images: ["giap-demo1.webp", "GIAP.gif"],
	},
	{
		title: "Meal Time",
		coverImage: "/meal-time-demo.webp",
		shortDescription:
			"Turning surplus into supper! 🍽️ A platform gives excess food a comeback, serving meals over waste. 🌱",
		techStack: [
			"React",
			"Redux",
			"JavaScript",
			"Styled-components",
			"Express",
			"Sequelize",
			"MySQL",
		],
		roles: ["Full Stack Development"],
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
			"meal-time-demo.webp",
			"meal-time-demo3.webp",
			"meal-time-demo2.webp",
			"meal-time-demo1.webp",
			"meal-time-demo4.webp",
			"meal-time-demo5.webp",
			"meal-time-demo6.webp",
			"meal-time-demo7.webp",
			"meal-time-demo8.webp",
		],
		link: [
			{ name: "GitHub (FE)", link: "https://github.com/pcchen95/meal-time" },
			{
				name: "GitHub (BE)",
				link: "https://github.com/pcchen95/meal-time-backend",
			},
		],
	},
	{
		title: "WhiskerSoothe",
		coverImage: "/WhiskerSoothe-demo.gif",
		shortDescription:
			"📱 Your go-to mobile app for tranquility. 🐾 3D animal models + 🌿 relaxing white noise = ultimate unwinding. 🌅",
		techStack: ["Flutter", "Dart"],
		roles: ["Mobile Development", "UI/UX Design"],
		description: `Introducing WhiskerSoothe: Your Pocket Relaxation Oasis

🐾 Discover Tranquility: Immerse in a world of interactive 3D animal models and soothing white noise sounds with WhiskerSoothe, the ultimate relaxation app.

🐼 Virtual Companions: Engage with cute animals – from cuddly pandas to playful kittens – for an adorable, stress-relieving experience.

🎶 Serene Soundscapes: Enjoy a variety of high-quality white noise sounds like raindrops and ocean waves, designed to promote relaxation.

📱 Cross-Platform: Built with Flutter, WhiskerSoothe runs smoothly on iOS and Android, ensuring access to serenity for all.

💫 Why WhiskerSoothe?: Elevate well-being effortlessly. Whether for a moment's escape or leisure, find solace in digital serenity.

🚀 Powered by Flutter: Cutting-edge technology meets relaxation, offering a seamless, immersive experience.
    `,
		images: ["/WhiskerSoothe-demo.gif"],
		link: [
			{
				name: "View Project",
				link: "https://github.com/hati8haha/healing-animal-sounds",
			},
		],
	},
];
