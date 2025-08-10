"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorBlur() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isReduced] = useState(
		() =>
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches,
	);

	useEffect(() => {
		if (isReduced) return;

		const updateMousePosition = (e: MouseEvent) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, [isReduced]);

	if (isReduced) return null;

	return (
		<motion.div
			className="pointer-events-none fixed inset-0 z-0"
			style={{
				background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(123,231,255,0.06), transparent 40%)`,
			}}
			animate={{
				background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(123,231,255,0.06), transparent 40%)`,
			}}
			transition={{
				type: "spring",
				damping: 30,
				stiffness: 200,
				mass: 0.8,
			}}
		/>
	);
}
