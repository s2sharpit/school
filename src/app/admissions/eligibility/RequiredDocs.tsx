import ImgCard from "@/components/ImgCard";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { FileText } from "lucide-react";

const data = [
  { title: "Birth Certificate (for Nursery - Class I)" },
  { title: "Previous School Report Card (for Classes II - XII)" },
  { title: "Transfer Certificate (TC) from the previous school" },
  { title: "Passport-size Photographs (4 copies)" },
  { title: "Aadhar Card of the student and parents" },
  { title: "Caste Certificate (if applicable)" },
  { title: "Medical Certificate (for students with special medical needs)" },
];

export default function RequiredDocs() {
  return (
    <Section>
      {/* Section Title */}
      <Title className="flex items-center justify-center gap-3">
        <FileText className="w-10 h-10 text-yellow-500 animate-bounce" />
        Required Documents for Admission
      </Title>

      {/* Document List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {data.map((item, index) => (
          <ImgCard key={index} index={index} {...item} />
        ))}
      </div>
    </Section>
  );
}
