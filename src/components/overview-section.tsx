import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./ui/section-header";

interface OverviewSectionProps {
  title: string;
  para: string[];
  badge: string;
  imageSrc: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  highlights?: {
    value: string;
    label: string;
  }[];
}

export function OverviewSection({
  title,
  para,
  badge,
  imageSrc,
  primaryAction,
  highlights = [],
}: OverviewSectionProps) {
  // const isPdf = primaryAction?.href.split('?')[0].endsWith('.pdf');

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
        <SectionHeader badge={badge} title={title} centered={false} className="mb-6" />
        {para.map((item, index) => (
            <p key={index} className="text-muted-foreground text-lg">{item}</p>
          ))}
          {highlights.length > 0 && (
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map(({ value, label }, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">{value}</span>
                  <span className="text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          )}
          {primaryAction && (
            <Button asChild className="mt-4">
              <Link href={primaryAction.href}>
                {primaryAction.text} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image src={imageSrc} alt="Students Learning" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
