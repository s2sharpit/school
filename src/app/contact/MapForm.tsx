import Image from "next/image";

export default function MapForm() {
  return (
    <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6 mb-8 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Location</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Visit Our Campus</h2>
          <p className="text-muted-foreground text-lg">
            We welcome you to visit our campus and experience our facilities firsthand. Our school is conveniently
            located in Salempur Khadar, Yamunanagar.
          </p>
        </div>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md">
          <Image src="/placeholder.svg?height=800&width=1200" alt="School Map" fill className="object-cover" />
        </div>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-xl mb-4 text-center">Contact Information</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold mb-2">Address</h4>
              <p className="text-muted-foreground">
                B. S. Sr. Sec. School
                <br />
                Salempur Khadar
                <br />
                Yamunanagar, India
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Phone</h4>
              <p className="text-muted-foreground">+91 89014 37877</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Email</h4>
              <p className="text-muted-foreground">info@bsschool.edu</p>
              <p className="text-muted-foreground">admissions@bsschool.edu</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h4 className="font-bold mb-2">School Hours</h4>
            <p className="text-muted-foreground">Monday to Saturday: 8:00 AM - 2:30 PM</p>
            <p className="text-muted-foreground">Office Hours: 8:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}
