import { SectionHeader } from "../ui/section-header";
import { FeatureCard } from "../feature-card";
import programsData from "@/data/programsData";


export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Academic Excellence"
          title="Comprehensive Educational Programs"
          description="We offer a wide range of programs designed to cater to diverse learning needs and interests."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programsData.map((value, index) => (
            <FeatureCard
              key={index}
              title={value.title}
              description={value.landingDescription}
              link={{ text: "Learn More", href: value.href }}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
