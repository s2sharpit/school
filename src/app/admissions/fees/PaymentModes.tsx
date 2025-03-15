import { Card } from "@/components/ui/card";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { CheckCircle } from "lucide-react";

const data = [
  "Cash",
  "Online Payment (UPI)",
];

export default function PaymentModes() {
  return (
    <Section className="space-y-6">
      <Title>💳 Payment Modes Available</Title>
      <ul className="grid sm:grid-cols-2 gap-6 md:gap-12 max-w-3xl mx-auto">
        {data.map((method, index) => (
          <Card key={index} className="grid gap-3 place-items-center">
            <CheckCircle className="w-10 h-10 text-green-600 flex-shrink-0" />
            <p className="text-gray-700">{method}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
