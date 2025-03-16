"use client";
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
import { JSX } from "react";

interface ImageCardProps {
  index: number;
  title: string;
  desc?: string[] | string;
  imgSrc?: string;
  className?: string;
  icon?: JSX.Element | string;
}

function ImgCard({
  index,
  title,
  desc,
  imgSrc,
  icon,
  className,
}: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={className}
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
          <CardTitle className="text-lg/tight text-blue-900 flex gap-2 mb-1">
            {icon || <CheckCircle className="min-w-6 h-6 text-green-600 " />}{" "}
            {title}
          </CardTitle>
          <CardDescription className="text-base">
            {Array.isArray(desc) ? (
              <ul className="space-y-1">
                {desc.map((dsc, i) => (
                  <li key={i} className="flex gap-1">
                    <span>🔸</span>
                    {dsc}
                  </li>
                ))}
              </ul>
            ) : (
              desc
            )}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ImgCard;
