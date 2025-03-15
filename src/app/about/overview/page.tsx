import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import Section, { Accent } from "@/components/ui/Section";
import Mission from "./Mission";
import WhyChooseUs from "./WhyChooseUs";

export default function OverviewPage() {
  return (
    <Main>
      {/* Vision Statement */}
      <Section>
        <Title>🌟 Our Vision</Title>
        <Section.Summary className="text-xl md:text-2xl font-medium italic text-blue-800 md:leading-relaxed">
          &quot;To nurture future leaders, innovators, and responsible citizens
          by providing an education that balances academic excellence with
          ethical values, creativity, and leadership skills.&quot;
        </Section.Summary>
      </Section>

      {/* School Overview */}
      <Section>
        <Title>🏫 About Our School</Title>
        <Section.Summary>
          <Accent>B. S. Senior Secondary School, Salempur Khadar</Accent> was
          established on <Accent>April 1, 2001</Accent>, with a vision to
          provide quality education to students from rural and urban areas. Over
          the years, the school has grown from a modest institution to a
          well-reputed senior secondary school affiliated with CBSE.
        </Section.Summary>
        <Section.Summary>
          The school has continuously upgraded its{" "}
          <Accent>infrastructure, faculty, and teaching methodologies </Accent>
          to keep pace with modern education standards. Our alumni have gone on
          to excel in various professional fields, making us proud of our
          legacy.
        </Section.Summary>
      </Section>

      <Mission />
      <WhyChooseUs />
    </Main>
  );
}
