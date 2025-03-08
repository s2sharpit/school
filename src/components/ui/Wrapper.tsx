import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const wrapperVariants = cva(
  "mt-16 mx-auto gap-6 gap-x-8 md:gap-x-16 justify-center w-full",
  {
    variants: {
      variant: {
        default: "grid grid-cols-1 place-items-center",
        flex: "flex flex-wrap md:gap-8",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Wrapper({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof wrapperVariants>) {
  return (
    <div {...props} className={cn(wrapperVariants({ variant, className }))}>
      {children}
    </div>
  );
}

export default Wrapper;
