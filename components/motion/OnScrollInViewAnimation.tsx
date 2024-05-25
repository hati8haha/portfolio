"use client";
import { AnimationProps, motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import { AiTwotonePropertySafety } from "react-icons/ai";

interface OnScrollFadeInProps {
  initial?: AnimationProps["initial"];
  animate?: AnimationProps["animate"];
  transition?: AnimationProps["transition"];
  className?: string;
}

const OnScrollInViewAnimation = ({
  children,
  initial = { opacity: 0, y: 60 },
  animate = { opacity: 1, y: 0 },
  transition = {
    type: "spring",
    damping: 10,
    stiffness: 60,
  },
  className = "",
}: PropsWithChildren<OnScrollFadeInProps>) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      initial={initial}
      transition={transition}
      animate={isInView && animate}
      ref={ref}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default OnScrollInViewAnimation;
