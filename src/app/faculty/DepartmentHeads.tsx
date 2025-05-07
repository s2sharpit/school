import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SectionHeader } from "@/components/ui/section-header";

const departmentHeads = [
  {
    name: "Mrs Khuswant Kaur",
    subject: "HOD English",
    image: "/faculty/khushwant.jpg",
  },
  {
    name: "Ms Shivani",
    subject: "HOD Mathematics",
    image: "/faculty/shivani.jpg",
  },
  {
    name: "Ms Monika",
    subject: "HOD Science",
    image: "/faculty/monika.jpg",
  },
  {
    name: "Mrs Nirmala Saini",
    subject: "Social Science",
    image: "/faculty/nirmala.jpg",
  },
  {
    name: "Mrs Rajinder Kaur",
    subject: "HOD Punjabi",
    image: "/faculty/rajinder.jpg",
  },
  {
    name: "Mrs Baby",
    subject: "HOD Hindi",
    image: "/faculty/baby.jpg",
  },
  {
    name: "Mr Rajender Kumar",
    subject: "HOD Sanksrit",
    image: "/faculty/rajender.jpg",
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

        <div className="overflow-x-auto">
          <Table className="max-w-3xl mx-auto border text-center">
            <TableHeader className="bg-muted">
              <TableRow>
                {["Name", "Subject"].map((item) => (
                  <TableHead key={item} className="text-center">
                    {item}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {departmentHeads.map((head, index) => (
                <TableRow key={index} className="odd:bg-card">
                  <TableCell className="font-medium">{head.name}</TableCell>
                  <TableCell>{head.subject}</TableCell>
                  {/* <TableCell>{teacher.experience}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departmentHeads.map((head, index) => (
            <Card key={index}>
              <CardContent>
                <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src={head.image}
                    alt={head.subject}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold">{head.name}</h3>
                <p className="text-primary font-medium mb2">{head.subject}</p>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
}
