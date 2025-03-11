import * as React from "react";
import { cn } from "@/lib/utils";

function Main({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      className={cn(
        "my-8 max-w-6xl w-11/12 mx-auto sm:my-10 sm:mt-20 grid gap-6 md:gap-12",
        className
      )}
      {...props}
    />
  );
}

export default Main;
