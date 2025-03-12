import * as React from "react";
import { cn } from "@/lib/utils";

function Main({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      className={cn(
        "my-8 max-w-5xl w-11/12 mx-auto sm:my-20 mt-16 sm:mt-28 grid gap-12 md:gap-20",
        className
      )}
      {...props}
    />
  );
}

export default Main;
