import { SectionHeader } from "@/components/ui/section-header";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Our Location"
          title="Visit Our Campus"
          description="We welcome you to visit our campus and experience our facilities firsthand. Our school is conveniently located in Salempur Khadar, Yamunanagar."
        />
        <div className="relative h-96 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.393252121848!2d77.37588311743946!3d30.282864532095566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f1d555c43260d%3A0x126c1c35443be638!2sB.S.Senior%20Secondary%20School%2C%20Salempur%20Khadar!5e0!3m2!1sen!2sin!4v1679299029221!5m2!1sen!2sin"
            allowFullScreen={true}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
