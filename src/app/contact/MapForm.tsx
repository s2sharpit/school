import SendMessage from "./SendMessage";
import { Badge } from "@/components/ui/badge";

export default function MapForm() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
            <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            Our Location
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Visit Our Campus
              </h2>
              <p className="text-muted-foreground text-lg">
                We welcome you to visit our campus and experience our facilities
                firsthand. Our school is conveniently located in Salempur
                Khadar, Delhi.
              </p>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5670.5437272638455!2d77.380131!3d30.282853000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f1d555c43260d%3A0x126c1c35443be638!2sB.%20S.%20Senior%20Secondary%20School%2C%20Salempur%20Khadar!5e1!3m2!1sen!2sin!4v1742641106119!5m2!1sen!2sin"
                width="500"
                height="300"
                loading="lazy"
                className="mxa rounded-lg"
              ></iframe>
            </div>
            <div className="mt-8">
              <h3 className="font-bold mb-2">School Hours</h3>
              <p className="text-muted-foreground mb-1">
                Monday to Saturday: 8:00 AM - 2:30 PM
              </p>
              <p className="text-muted-foreground">
                Office Hours: 8:00 AM - 4:00 PM
              </p>
            </div>
          </div>
          <SendMessage />
        </div>
      </div>
    </section>
  );
}
