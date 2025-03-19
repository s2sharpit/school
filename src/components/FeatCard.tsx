"use client";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

interface FeatCardProps {
  index: number
  title?: string;
  desc?: string;
  content?: string;
  icon?: React.JSX.Element;
  iconColor?: string;
}


const featCardVariants = cva(
  "flex text-center flex-col items-center",
  {
    variants: {
      variant: {
        default: "space-y-3",
        list: "sm:flex-row sm:items-start gap-4 md:gap-6 sm:text-left",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


export default function FeatCard({
  className,
  variant,
  index,
  title,
  desc,
  content,
  icon = <CheckCircle />,
  iconColor = "text-green-600"
}: React.ComponentProps<"div"> & FeatCardProps & VariantProps<typeof featCardVariants>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className={cn("h-full", className)}>
        <CardContent className={featCardVariants({variant})}>
          <div className={`mt-4 scale-150 ${variant == "list" && "sm:mt-0.5 sm:scale-100"} ${iconColor}`}>{icon}</div>
          <div>
            <CardTitle className="text-lg/tight text-blue-900">{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
            <p>{content}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
