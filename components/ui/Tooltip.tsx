"use client";
import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";

interface TooltipProps {
	text: string;
	children: React.ReactNode;
}

const Tooltip = ({ text, children }: TooltipProps) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className="relative inline-block">
			<div
				className="inline-block"
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
			>
				{children}
			</div>
			{showTooltip && (
				<motion.span
					initial={{ opacity: 0, y: 16, x: "-50%" }}
					animate={{ opacity: 1, y: 0, x: "-50%" }}
					className={`absolute z-10 bg-opacity-90 text-white text-xs rounded p-1 -top-full left-1/2  bg-gray-900 dar:text-white whitespace-nowrap`}
				>
					{text}
				</motion.span>
			)}
		</div>
	);
};

export default Tooltip;
