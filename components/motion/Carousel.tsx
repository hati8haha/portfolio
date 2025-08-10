import { wrap } from "@motionone/utils";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

interface CarouselProps {
	images: string[];
	draggable?: boolean;
	autoPlay?: boolean;
	autoPlayInterval?: number;
	imgClassName?: string;
}

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 560 : -560,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 560 : -560,
			opacity: 0,
		};
	},
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const Carousel: React.FC<CarouselProps> = ({
	images,
	draggable = true,
	autoPlay,
	autoPlayInterval,
	imgClassName,
}) => {
	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, images.length, page);

	const paginate = useCallback(
		(newDirection: number) => {
			setPage([page + newDirection, newDirection]);
		},
		[page],
	);

	const dragProps = draggable && {
		drag: "x" as "x",
		dragConstraints: { left: 0, right: 0 },
		dragElastic: 1,
		onDragEnd: (
			_e: MouseEvent | TouchEvent | PointerEvent,
			{ offset, velocity }: PanInfo,
		) => {
			const swipe = swipePower(offset.x, velocity.x);

			if (swipe < -swipeConfidenceThreshold) {
				paginate(1);
			} else if (swipe > swipeConfidenceThreshold) {
				paginate(-1);
			}
		},
	};

	useEffect(() => {
		let interval: NodeJS.Timer;
		if (autoPlay) {
			interval = setInterval(() => paginate(1), autoPlayInterval);
		}
		return () => clearInterval(interval);
	}, [autoPlay, autoPlayInterval, paginate]);

	return (
		<>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={page}
					className={`absolute h-full w-full ${imgClassName}`}
					src={images[imageIndex]}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					{...dragProps}
				/>
			</AnimatePresence>
			{draggable && (
				<>
					<button
						type="button"
						className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-50 bg-opacity-40 dark:bg-opacity-40 hover:bg-opacity-70 dark:hover:bg-opacity-70 dark:hover:bg-gray-600 transition-all rounded-full top-[calc(50%_-_20px)] absolute w-10 h-10 flex justify-center items-center select-none cursor-pointer font-[bold] text-lg z-[2] right-2.5"
						onClick={() => paginate(1)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								paginate(1);
							}
						}}
						aria-label="Next image"
					>
						<ImArrowRight2 />
					</button>
					<button
						type="button"
						className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-50 bg-opacity-40 dark:bg-opacity-40 hover:bg-opacity-70 dark:hover:bg-opacity-70 dark:hover:bg-gray-600 transition-all rounded-full top-[calc(50%_-_20px)] absolute w-10 h-10 flex justify-center items-center select-none cursor-pointer font-[bold] text-lg z-[2] left-2.5"
						onClick={() => paginate(-1)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								paginate(-1);
							}
						}}
						aria-label="Previous image"
					>
						<ImArrowLeft2 />
					</button>
				</>
			)}
		</>
	);
};

export default Carousel;
