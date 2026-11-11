"use client";
import { MotionConfig } from "framer-motion";
import { ScrollProvider } from "@/context/ScrollProvider";

// App-wide client providers. reducedMotion="user" makes every Framer Motion
// animation honour the visitor's prefers-reduced-motion setting.
export default function Providers({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProvider>{children}</ScrollProvider>
    </MotionConfig>
  );
}
