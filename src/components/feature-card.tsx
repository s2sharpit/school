import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface FeatureCardProps {
  icon?: LucideIcon;
  iconNum?: string;
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
  iconNum,
  title,
  description,
  imageSrc,
  link,
  children
}: FeatureCardProps & React.ComponentProps<"div">) {
  return (
    <Card className={`${imageSrc && "pt-0"} overflow-hidden`}>
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
        {(Icon || iconNum) && <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
          {iconNum && <span className="text-primary font-bold text-lg">{iconNum}</span>}
          </div>}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {link && (
          <Link
            href={link.href}
            className="text-primary font-medium inline-flex items-center mt-4"
          >
            {link.text} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        )}
        {children}
      </CardContent>
    </Card>
  );
}
