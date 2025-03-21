import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface OverviewProps {
  title: string;
  para: string[];
  badgeText: string;
  imageUrl: string;
  primaryBtn?: {
    title: string;
    href: string;
  };
}

export default function Overview({
  title,
  para,
  badgeText,
  imageUrl,
  primaryBtn,
}: OverviewProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary" size={"lg"}>
              {badgeText}
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {title}
            </h2>
            {para.map((item, index) => (
              <p key={index} className="text-muted-foreground text-lg">
                {item}
              </p>
            ))}
            {primaryBtn && (
              <Button asChild className="mt-4">
                <Link href={primaryBtn.href}>
                  {primaryBtn.title} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt="Students Learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
