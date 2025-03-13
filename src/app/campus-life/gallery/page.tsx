import { Camera } from "lucide-react";
import Main from "@/components/ui/Main";
import Title from "@/components/ui/Title";
import ImgGallery from "./ImgGallery";
import { Accent, Summary } from "@/components/ui/Section";

export default function GalleryPage() {
  return (
    <Main>
      {/* Gallery Overview */}
      <section className="space-y-6">
        <Title className="flex items-center justify-center gap-3">
          <Camera className="w-10 h-10 text-yellow-500" />A Visual Journey
          Through School Life
        </Title>
        <Summary>
          Browse through our <Accent>photo & video gallery</Accent> to relive
          the most <Accent>memorable moments</Accent> at{" "}
          <Accent>B. S. Senior Secondary School</Accent>.
        </Summary>

        <ImgGallery />
      </section>

      {/* <GallerySection /> */}

      {/* Justified Gallery */}
      {/* <section className="space-y-6">
        <Title>
          📸 School Moments
        </Title>
        <ImgGallery />
      </section> */}

      {/* Call to Action */}
      {/* <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          View Our Full Gallery →
        </Button>
      </div> */}
    </Main>
  );
}
