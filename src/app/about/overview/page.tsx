import Main from "@/components/ui/Main";
import FeatureSection from "./FeatureSection";
import whyChooseUsFeatures from "@/data/whyChooseUsFeatures";
import missionFeatures from "@/data/missionFeatures";
import Title from "@/components/ui/Title";
import { Accent, Summary } from "@/components/ui/Section";

export default function OverviewPage() {
  return (
    <Main>
      {/* Vision Statement */}
      <section className="space-y-6">
        <Title>🌟 Our Vision</Title>
        <Summary className="text-xl md:text-2xl font-medium italic text-blue-800 md:leading-relaxed">
          &quot;To nurture future leaders, innovators, and responsible citizens
          by providing an education that balances academic excellence with
          ethical values, creativity, and leadership skills.&quot;
        </Summary>
      </section>

      {/* School Overview */}
      <section className="space-y-6">
        <Title>🏫 About Our School</Title>
        <Summary>
          <Accent>B. S. Senior Secondary School, Salempur Khadar</Accent> was
          established on <Accent>April 1, 2001</Accent>, with a vision to
          provide quality education to students from rural and urban areas. Over
          the years, the school has grown from a modest institution to a
          well-reputed senior secondary school affiliated with CBSE.
        </Summary>
        <Summary>
          The school has continuously upgraded its
          <Accent>infrastructure, faculty, and teaching methodologies </Accent>
          to keep pace with modern education standards. Our alumni have gone on
          to excel in various professional fields, making us proud of our
          legacy.
        </Summary>
      </section>

      {/* Our Mission Section */}
      <FeatureSection
        title="🚀 Our Mission"
        features={missionFeatures}
        iconColor="text-blue-600"
        footerText="Our mission is to build a generation of lifelong learners who will contribute positively to society!"
      />

      {/* Why Choose Us Section */}
      <FeatureSection
        title="🛡️ Why Choose Us?"
        features={whyChooseUsFeatures}
        iconColor="text-yellow-500"
        footerText="We believe in education that inspires young minds to think, innovate, and excel!"
      />
    </Main>
  );
}
