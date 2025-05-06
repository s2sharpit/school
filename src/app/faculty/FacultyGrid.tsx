import { Badge } from "@/components/ui/badge";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserCircle } from "lucide-react";

export default function FacultyTable() {
  // Sample faculty data
  const facultyMembers = [
    {
      id: 1,
      name: "Teacher 1",
      subject: "Mathematics",
      experience: "10+ years",
    },
    { id: 2, name: "Teacher 2", subject: "Science", experience: "8 years" },
    { id: 3, name: "Teacher 3", subject: "English", experience: "12 years" },
    { id: 4, name: "Teacher 4", subject: "History", experience: "7 years" },
    {
      id: 5,
      name: "Teacher 5",
      subject: "Computer Science",
      experience: "9 years",
    },
    { id: 6, name: "Teacher 6", subject: "Art", experience: "5 years" },
    {
      id: 7,
      name: "Teacher 7",
      subject: "Physical Education",
      experience: "11 years",
    },
    { id: 8, name: "Teacher 8", subject: "Music", experience: "6 years" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary mb-4" size="lg">
            Our Educators
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Teaching Faculty
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
            Meet our dedicated teachers who inspire and guide our students every
            day.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table className=" w-3xl mx-auto border text-center">
            <TableHeader>
              <TableRow>
                {["Name", "Subject", "Experience"].map((item) => (
                  <TableHead key={item} className="text-center">
                    {item}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {facultyMembers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell className="font-medium">{teacher.name}</TableCell>
                  <TableCell>{teacher.subject}</TableCell>
                  <TableCell>{teacher.experience}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
