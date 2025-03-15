'use client'
import { motion } from "motion/react";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface ShowcaseCardProps {
  title: string;
  desc: string;
  imgSrc?: string;
}

// Showcase Component
function Showcase({ items }: { items: ShowcaseCardProps[] }) {
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {items.map((item, index) => (
      <ShowcaseCard key={index} index={index} {...item} />
    ))}
  </div>
);
}

// Showcase Card Component
function ShowcaseCard({
  index,
  title,
  desc,
  imgSrc,
}: { index: number } & ShowcaseCardProps) {
  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
      <Card className="border-l-4 border-l-blue-600 h-full">
      {imgSrc && (
        <CardHeader>
          <Image
            src={imgSrc}
            alt={title}
            className="object-cover rounded-xl w-full h-52"
            width={600}
            height={400}
            loading="lazy"
          />
        </CardHeader>
      )}
      <CardContent>
        <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-green-600" /> {title}
        </CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
  );
}

export default Showcase;
