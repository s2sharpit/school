import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description?: string;
  badge: string;
  imageSrc?: string;
  children?: React.ReactNode;
}

export function HeroSection({
  title,
  description,
  badge,
  imageSrc = "/img/school_building.jpg",
  children,
}: HeroSectionProps) {
  return (
    <section className="relative w-full py-12 md:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-black/50 mix-blend-multiply"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium mb-2">
            {badge}
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
