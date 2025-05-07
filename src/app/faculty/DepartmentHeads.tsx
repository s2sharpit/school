import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";

const departmentHeads = [
  {
    name: "Mrs Khuswant Kaur",
    title: "HOD English",
    image: "/faculty/khushwant.jpg",
    alt: "English Department Head",
  },
  {
    name: "Ms Shivani",
    title: "HOD Mathematics",
    image: "/faculty/shivani.jpg",
    alt: "Mathematics Department Head",
  },
  {
    name: "Ms Monika",
    title: "HOD Science",
    image: "/faculty/monika.jpg",
    alt: "Science Department Head",
  },
  {
    name: "Mrs Nirmala Saini",
    title: "Social Science",
    image: "/faculty/nirmala.jpg",
    alt: "Social Science Department Head",
  },
  {
    name: "Mrs Rajinder Kaur",
    title: "HOD Punjabi",
    image: "/faculty/rajinder.jpg",
    alt: "Punjabi Department Head",
  },
  {
    name: "Mrs Baby",
    title: "HOD Hindi",
    image: "/faculty/baby.jpg",
    alt: "Hindi Department Head",
  },
  {
    name: "Mr Rajender Kumar",
    title: "HOD Sanksrit",
    image: "/faculty/rajender.jpg",
    alt: "Hindi Department Head",
  },
];

export default function DepartmentHeads() {
  return (
    <section className="py-16 md:py-24 odd:bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Academic Leaders"
          title="Department Heads"
          description="Meet the experienced educators who lead our academic departments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departmentHeads.map((head, index) => (
            <Card key={index}>
              <CardContent>
                <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src={head.image}
                    alt={head.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">{head.name}</h3>
                <p className="text-primary font-medium mb2">{head.title}</p>
                {/* <p className="text-muted-foreground text-sm">{head.description}</p> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
