"use client";

import { motion } from "framer-motion";
import { Card, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { JSX } from "react";
import Title from "@/components/ui/Title";

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface FeatureSectionProps {
  title: string;
  features: Feature[];
  iconColor: string; // Color for icons
  footerText?: string; // Optional footer message
}

export default function FeatureSection({
  title,
  features,
  iconColor,
  footerText,
}: FeatureSectionProps) {
  return (
    <section className="grid gap-6 md:gap-8">
      {/* Section Heading */}
      <Title>{title}</Title>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="min-h-full text-center">
              <CardContent className="flex flex-col items-center">
                <div className={`${iconColor} mt-4 scale-150`}>{feature.icon}</div>
                <CardTitle className="text-xl font-semibold mt-2">
                  {feature.title}
                </CardTitle>
              <CardDescription>
                <p className="text-sm">{feature.description}</p>
              </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Optional Footer Message */}
      {footerText && <p className="font-medium md:text-lg text-center">{footerText}</p>}
    </section>
  );
}
