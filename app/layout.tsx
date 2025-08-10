import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Haoting Cheng — Full-Stack Developer Portfolio",
		template: "%s | Haoting Cheng",
	},
	description:
		"Experienced Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my interactive portfolio featuring innovative full-stack projects with cutting-edge UI/UX design.",
	keywords: [
		"Full-Stack Developer",
		"React Developer",
		"Next.js",
		"Node.js",
		"JavaScript",
		"TypeScript",
		"Web Development",
		"Backend Development",
		"Frontend Development",
		"UI/UX Design",
		"Portfolio",
		"Haoting Cheng",
		"Interactive Design",
		"Modern Web Apps",
		"Software Engineer",
	],
	authors: [{ name: "Haoting Cheng" }],
	creator: "Haoting Cheng",
	publisher: "Haoting Cheng",
	metadataBase: new URL("https://www.hao-ting.com"), // Update with your actual domain
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.hao-ting.com",
		title: "Haoting Cheng — Full-Stack Developer Portfolio",
		description:
			"Experienced Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my interactive portfolio featuring innovative projects.",
		siteName: "Haoting Cheng Portfolio",
		images: [
			{
				url: "/site-cover.webp",
				width: 1200,
				height: 630,
				alt: "Haoting Cheng - Full-Stack Developer Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Haoting Cheng — Full-Stack Developer Portfolio",
		description:
			"Experienced Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
		images: ["/site-cover.webp"],
		creator: "@your_twitter_handle", // Update with your actual Twitter handle
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code", // Add your Google Search Console verification code
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Haoting Cheng",
		jobTitle: "Full-Stack Developer",
		description:
			"Experienced Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
		url: "https://www.hao-ting.com",
		sameAs: [
			"https://github.com/hati8haha",
			"https://linkedin.com/in/haoting-cheng", // Update with your actual LinkedIn
			"https://twitter.com/your_twitter_handle", // Update with your actual Twitter
		],
		knowsAbout: [
			"Full-Stack Development",
			"Frontend Development",
			"Backend Development",
			"React",
			"Next.js",
			"Node.js",
			"JavaScript",
			"TypeScript",
			"Web Development",
			"UI/UX Design",
			"Software Engineering",
		],
	};

	return (
		<html lang="en">
			<head>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<script type="application/ld+json" suppressHydrationWarning>
					{JSON.stringify(structuredData)}
				</script>
			</head>
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
				>
					{children}
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
