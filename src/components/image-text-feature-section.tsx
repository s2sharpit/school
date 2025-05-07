import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
}

interface ImageTextFeatureProps {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  features: Feature[];
}


const FeatureItemCard = ({ title, description }: Feature) => (
  <div className="space-y-2">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);


export const ImageTextFeatureSection: React.FC<ImageTextFeatureProps> = ({
  badge,
  title,
  description,
  imageSrc,
  features,
}) => (
  <section className="py-16 md:py-24 odd:bg-muted/50">
    <div className="container mx-auto px-4">
      <SectionHeader badge={badge} title={title} description={description} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
        <div className="space-y-6">
          {features.map((feature) => (
            <FeatureItemCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
