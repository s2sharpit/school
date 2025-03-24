import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  imageSrc?: string;
  link?: {
    text: string;
    href: string;
  };
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  imageSrc,
  link,
}: FeatureCardProps) {
  return (
    <Card className={`${imageSrc && " pt-0 overflow-hidden"}`}>
      {imageSrc && (
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <CardContent>
        {Icon && <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {link && (
          <Link
            href={link.href}
            className="text-primary font-medium inline-flex items-center"
          >
            {link.text} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
