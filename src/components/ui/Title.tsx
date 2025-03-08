import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva("text-primary font-bold", {
  variants: {
    size: {
      default: "text-3xl md:text-4xl text-center",
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
  size,
  children,
  ...props
}: React.ComponentProps<"h1"> & VariantProps<typeof titleVariants>) {
  return (
    <h1 {...props} className={cn(titleVariants({ size, className }))}>
      {children}
    </h1>
  );
}

export default Title;
