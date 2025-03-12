import Main from "@/components/ui/Main";
import FeatureSection from "./FeatureSection";
import whyChooseUsFeatures from "@/data/whyChooseUsFeatures";
import missionFeatures from "@/data/missionFeatures";
import Title from "@/components/ui/Title";

export default function OverviewPage() {
  return (
    <Main>
      {/* Vision Statement */}
      <section className="max-w-3xl mx-auto text-center">
      <Title>🌟 Our Vision</Title>
        <p className="mt-2 md:mt-4 text-xl md:text-2xl font-medium italic text-blue-800 md:leading-relaxed">
          "To nurture future leaders, innovators, and responsible citizens by
          providing an education that balances academic excellence with ethical
          values, creativity, and leadership skills."
        </p>
      </section>

      {/* School Overview */}
      <section>
        <Title>🏫 About Our School</Title>
        <div className="max-w-4xl mx-auto">
          <p className="mt-2 md:mt-4 md:text-lg text-justify">
            <span className="text-blue-900 font-semibold">B. S. Senior Secondary School, Salempur Khadar</span> was
            established on <span className="text-blue-900 font-semibold">April 1, 2001</span>, with a vision to provide
            quality education to students from rural and urban areas. Over the
            years, the school has grown from a modest institution to a
            well-reputed senior secondary school affiliated with CBSE.
            <br />
            <br />
            The school has continuously upgraded its
            <span className="font-semibold text-blue-900"> infrastructure, faculty, and teaching methodologies</span> to
            keep pace with modern education standards. Our alumni have gone on
            to excel in various professional fields, making us proud of our
            legacy.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <FeatureSection
        title="🚀 Our Mission"
        features={missionFeatures}
        iconColor="text-blue-600"
        footerText="📢 Our mission is to build a generation of lifelong learners who will contribute positively to society!"
      />

      {/* Why Choose Us Section */}
      <FeatureSection
        title="🛡️ Why Choose Us?"
        features={whyChooseUsFeatures}
        iconColor="text-yellow-500"
        footerText="📢 We believe in education that inspires young minds to think, innovate, and excel!"
      />
    </Main>
  );
}
