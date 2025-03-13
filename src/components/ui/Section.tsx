import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn(className)} {...props} />;
}

function Summary({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("text-lg text-pretty md:text-balance text-center", className)} {...props} />;
}

function Accent({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("text-blue-900 font-semibold", className)} {...props} />;
}

function SectionNote({ className, children, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-muted-foreground font-medium text-center", className)} {...props}>
      📢 {children}
    </p>
  );
}

export { Section as default, Summary, Accent, SectionNote };
