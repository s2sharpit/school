"use client";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface FeatCardProps {
  index: number
  title: string;
  desc: string;
}

export default function FeatCard({
  index,
  title,
  desc,
}: FeatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="h-full">
        <CardContent className="flex max-sm:flex-col max-sm:items-center max-sm:text-center gap-4 md:gap-6">
          <CheckCircle className="w-10 sm:w-6 h-10 sm:h-6 mt-2 text-green-600 flex-shrink-0" />
          <div>
            <strong className="text-lg text-blue-900">{title}</strong>
            <p className="text-muted-foreground">{desc}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
