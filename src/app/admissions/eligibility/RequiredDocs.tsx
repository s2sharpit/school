import FeatCard from "@/components/FeatCard";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { FileText } from "lucide-react";

const data = [
  { content: "Birth Certificate (for Nursery - Class I)" },
  { content: "Previous School Report Card (for Classes II - XII)" },
  { content: "Transfer Certificate (TC) from the previous school" },
  { content: "Passport-size Photographs (4 copies)" },
  { content: "Aadhar Card of the student and parents" },
  { content: "Caste Certificate (if applicable)" },
  { content: "Medical Certificate (for students with special medical needs)" },
];

export default function RequiredDocs() {
  return (
    <Section>
      {/* Section Title */}
      <Title className="flex items-center justify-center gap-3">
        <FileText className="w-8 h-8 text-yellow-500" />
        Required Documents for Admission
      </Title>

      {/* Document List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {data.map((item, index) => (
          <FeatCard variant={'list'} key={index} index={index} {...item} />
        ))}
      </div>
    </Section>
  );
}
