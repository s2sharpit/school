import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const sectionVaraints = cva("my-8 max-w-7xl w-11/12 mx-auto sm:my-10");

function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section"> & VariantProps<typeof sectionVaraints>) {
  return (
    <section {...props} className={cn(sectionVaraints, className)}>
      {children}
    </section>
  );
}

export default Section;
