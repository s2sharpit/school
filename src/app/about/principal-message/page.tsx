import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Quote } from "lucide-react";
import Main from "@/components/ui/Main";
import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/Title";

export default function PrincipalMessagePage() {
  return (
    <Main className="">
      <Title className="justify-center flex items-center gap-3">
        <Quote className="w-10 h-10 text-yellow-400" />
        Principal’s Message
      </Title>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Principal's Image */}
        <section className="w-52 md:w-60 flex-shrink-0 relative">
          <AspectRatio
            ratio={1 / 1}
            className="rounded-full overflow-hidden shadow-lg border-4 border-yellow-400 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src="/img/principal.jpg" // Update with actual image path
              alt="Principal Mrs. Shashi Bala"
              fill
              className="object-cover"
            />
          </AspectRatio>
        </section>

        {/* Message Content */}
        <section className="space-y-6 max-w-2xl  text-justify">
          {/* Quote */}
          <p className="italic text-lg border-l-4 pl-4 border-yellow-400">
          &quot;Education is not just about learning facts, but about training
            young minds to think, innovate, and grow with integrity.&quot;
          </p>

          <p>
            Dear Students and Parents,
          </p>

          <p>
            Welcome to{" "}
            <strong>B. S. Senior Secondary School, Salempur Khadar!</strong>
            At our school, education goes beyond textbooks and classrooms. We
            focus on{" "}
            <strong>
              academic brilliance, ethical values, and a student-centered
              approach
            </strong>{" "}
            that nurtures future leaders, thinkers, and responsible individuals.
          </p>

          <p>
            Our teachers are not just educators but <strong>mentors</strong> who
            guide students to unlock their true potential. With a{" "}
            <strong>
              CBSE-aligned curriculum, state-of-the-art facilities, and
              co-curricular opportunities
            </strong>
            , we strive to empower students with{" "}
            <strong>knowledge, confidence, and creativity</strong>.
          </p>

          <p>
            We encourage{" "}
            <strong>
              active participation, self-discipline, and a love for lifelong
              learning
            </strong>
            . Together, let’s create an environment where education is an
            enjoyable and transformative journey!
          </p>

          {/* Principal's Signature */}
          <p className="font-bold text-lg text-blue-900 text-left">
            Best Regards,
            <br />
            <span className="text-xl text-yellow-600">Mrs. Shashi Bala</span>
            <br />
            Principal, B. S. Senior Secondary School
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 text-lg shadow-lg"
              asChild
            >
              <Link href="/about/faculty">Discover Our Faculty →</Link>
            </Button>
          </div>
        </section>
      </div>
    </Main>
  );
}
