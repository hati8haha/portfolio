"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

interface CarouselProps {
	images: string[];
	autoPlay?: boolean;
	interval?: number;
	className?: string;
}

// Optimized transition variants for better performance
const slideVariants = {
	enter: { opacity: 0 },
	center: { opacity: 1 },
	exit: { opacity: 0 },
};

const transition = {
	duration: 0.2,
	ease: "easeOut",
};

export default function OptimizedImageCarousel({
	images,
	autoPlay = false,
	interval = 5000,
	className = "",
}: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Memoize navigation functions
	const goToSlide = useCallback((index: number) => {
		setCurrentIndex(index);
	}, []);

	const goToPrevious = useCallback(() => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	}, [images.length]);

	const goToNext = useCallback(() => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	}, [images.length]);

	// Optimize autoplay
	useEffect(() => {
		if (!autoPlay || images.length <= 1) return;

		const timer = setInterval(goToNext, interval);
		return () => clearInterval(timer);
	}, [autoPlay, images.length, interval, goToNext]);

	// Memoize current image
	const currentImage = useMemo(
		() => images[currentIndex],
		[images, currentIndex],
	);

	if (images.length === 0) return null;

	return (
		<div className={`relative w-full h-full ${className}`}>
			{/* Main image container with optimized rendering */}
			<div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-900" style={{ contain: "layout style paint" }}>
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={transition}
						className="absolute inset-0"
						style={{ 
							willChange: "opacity", 
							contain: "layout style paint",
							transform: "translateZ(0)"
						}}
					>
						<Image
							src={currentImage}
							alt={`Project image ${currentIndex + 1}`}
							fill
							className="object-cover"
							priority={currentIndex === 0}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							quality={85}
						/>
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Navigation arrows - only show for multiple images */}
			{images.length > 1 && (
				<>
					<button
						onClick={goToPrevious}
						className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 text-white rounded-lg transition-colors duration-150 z-10 backdrop-blur-sm"
						aria-label="Previous image"
						type="button"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							aria-hidden="true"
						>
							<title>Previous</title>
							<polyline points="15,18 9,12 15,6"></polyline>
						</svg>
					</button>
					<button
						onClick={goToNext}
						className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 text-white rounded-lg transition-colors duration-150 z-10 backdrop-blur-sm"
						aria-label="Next image"
						type="button"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							aria-hidden="true"
						>
							<title>Next</title>
							<polyline points="9,18 15,12 9,6"></polyline>
						</svg>
					</button>
				</>
			)}

			{/* Optimized dots indicator */}
			{images.length > 1 && (
				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
					{images.map((image, index) => (
						<button
							key={`carousel-dot-${image.split("/").pop()?.split(".")[0] || index}`}
							onClick={() => goToSlide(index)}
							className={`w-2 h-2 rounded-full transition-all duration-200 ${
								index === currentIndex
									? "bg-white scale-125"
									: "bg-white/40 hover:bg-white/60"
							}`}
							aria-label={`Go to slide ${index + 1}`}
							type="button"
						/>
					))}
				</div>
			)}

			{/* Image counter */}
			{images.length > 1 && (
				<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 text-white text-sm z-10 rounded-lg">
					{currentIndex + 1} / {images.length}
				</div>
			)}
		</div>
	);
}
