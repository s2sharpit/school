import programsData from "@/data/programsData";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeader } from "@/components/ui/section-header";

export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Our Programs"
          title="Educational Offerings"
          description="Explore our diverse range of academic programs tailored to different age groups and learning needs."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programsData.map((value, index) => (
            <FeatureCard
              key={index}
              description={value.landingDescription}
              link={{ text: "Learn More", href: value.href }}
              {...value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
