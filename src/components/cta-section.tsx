import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  imageSrc?: string;
}

export function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  imageSrc = "/img/campus.jpg",
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {title}
              </h2>
              <p className="text-white/80">{description}</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href={primaryAction.href}>{primaryAction.text}</Link>
                </Button>
                {secondaryAction && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Link href={secondaryAction.href}>
                      {secondaryAction.text}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt="CTA Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
