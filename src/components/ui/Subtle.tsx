import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const subtleVariants = cva("", {
  variants: {
    variant: {
      default: "font-bold text-primary",
      special: "relative text-neutral-700 text-xl pl-14 md:pl-20 before:content-start before:absolute before:w-10 md:before:w-16 before:h-[1px] before:bg-muted-foreground before:left-0 before:top-3 md:before:top-4",
    },
    size: {
      default: "text-2xl", // mb-16
      lg: "text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-left font-semibold",
      sm: "text-lg",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

interface SubtleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof subtleVariants> {}

const Subtle = forwardRef<HTMLHeadingElement, SubtleProps>(
  ({ className, size, variant, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className={cn(subtleVariants({ size, variant, className }))}
      >
        {children}
      </h2>
    );
  }
);

Subtle.displayName = "Subtle";

export default Subtle;