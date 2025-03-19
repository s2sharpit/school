import FeatCard from "@/components/FeatCard";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";

const data = [{ content: "Cash" }, { content: "Online Payment (UPI)" }];

export default function PaymentModes() {
  return (
    <Section className="space-y-6">
      <Title>💳 Payment Modes Available</Title>
      <ul className="grid sm:grid-cols-2 gap-6 md:gap-12 max-w-3xl mx-auto">
        {data.map((items, index) => (
          <FeatCard key={index} index={index} {...items} />
        ))}
      </ul>
    </Section>
  );
}
