"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { JSX } from "react";

interface MissionCardProps {
  index: number;
  title: string;
  desc: string;
  icon: JSX.Element;
  iconColor?: string; // Color for icons
}
export default function MissionCard({
  index,
  title,
  desc,
  icon,
  iconColor,
}: MissionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="h-full">
        <CardContent className="flex flex-col items-center">
          <div className={`${iconColor} mt-4 scale-150`}>{icon}</div>
          <CardTitle className="text-xl mt-2">{title}</CardTitle>
          <CardDescription>
            <p className="text-center">{desc}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
