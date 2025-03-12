'use client'
import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const titleVariants = cva("font-bold", {
  variants: {
    size: {
      default: "text-2xl md:text-3xl text-center text-primary",
      lg: "text-4xl sm:text-5xl lg:text-7xl",
      sm: "text-2xl md:text-3xl lg:text4xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

function Title({
  className,
  children,
  size,
}: React.ComponentProps<"h2"> & VariantProps<typeof titleVariants>) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(titleVariants({ size, className }))}
    >{children}</motion.h2>
  );
}

export default Title;
