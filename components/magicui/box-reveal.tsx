"use client";

import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

interface BoxRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
  direction?: "left" | "right" | "top" | "bottom";
}

export const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor = "#5046e6",
  duration,
  direction = "bottom",
}: BoxRevealProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden:
            direction === "left"
              ? { opacity: 0, x: -75 }
              : direction === "right"
                ? { opacity: 0, x: 75 }
                : direction === "top"
                  ? { opacity: 0, y: -75 }
                  : { opacity: 0, y: 75 },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { x: 0, y: 0, opacity: 1 },
          visible:
            direction === "left"
              ? { x: "-100%", opacity: 0 }
              : direction === "right"
                ? { x: "100%", opacity: 0 }
                : direction === "top"
                  ? { y: "-100%", opacity: 0 }
                  : { y: "100%", opacity: 0 },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: duration ? duration : 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          background: boxColor,
        }}
      />
    </div>
  );
};
