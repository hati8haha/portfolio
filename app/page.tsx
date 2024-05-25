import OnScrollInViewAnimation from "@/components/motion/OnScrollInViewAnimation";
import Hero from "@/components/sections/Hero";
import Experience from "../components/sections/Experience";
import ExperienceCard from "../components/sections/ExperienceCard";
import PortfolioSection from "@/components/sections/PortfolioSection";
import SkillSection from "@/components/sections/SkillsSection";
import CommunitySection from "@/components/sections/CommunitySection";
import Head from "next/head";
import { jobsData } from "@/components/sections/data";

export default function Home() {
  const meta = {
    title: "Frontend Developer Portfolio",
    description: "Welcome to Haoting Cheng's personal portfolio website!",
    image: "/head-img.png",
    url: `https://haoting-cheng.vercel.app/`,
  };

  return (
    <main className="flex flex-col dark:bg-opacity-10 items-center justify-between p-8 xl:p-24 dark:bg-bunker-950 bg-bunker-100 bg-opacity-20 backdrop-blur-lg relative">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Hero />
      <PortfolioSection />
      <CommunitySection />
      <Experience>
        {jobsData.map((job, i) => (
          <OnScrollInViewAnimation
            key={i}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ExperienceCard key={i} {...job} />
          </OnScrollInViewAnimation>
        ))}
      </Experience>
      <SkillSection />
    </main>
  );
}
