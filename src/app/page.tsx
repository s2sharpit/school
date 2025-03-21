import Hero from "@/components/landing/Hero";
import QuickINfo from "@/components/landing/QuickINfo";
import About from "@/components/landing/About";
import Programs from "@/components/landing/Programs";
import Testimonials from "@/components/landing/Testimonials";
import NewsEvents from "@/components/landing/NewsEvents";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <QuickINfo />
      <About />
      <Programs />
      <Testimonials />
      <NewsEvents />
      <CTA
        title="Ready to Join Our School?"
        desc="Take the first step towards providing your child with quality education. Apply for admission or
                  schedule a visit to our campus."
        secBtn={{ title: "Apply Now", href: "/admissions" }}
        outlineBtn={{ title: "Contact Us", href: "/contact" }}
        imageUrl="/img/campus.jpg"
      />
    </div>
  );
}
