import { Badge } from "@/components/ui/badge";
import programsData from "@/data/programsData";
import { FeatureCard } from "@/components/feature-card";


export default function Programs() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            Our Programs
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Educational Offerings
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Explore our diverse range of academic programs tailored to different age groups and learning needs.
          </p>
        </div>
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
