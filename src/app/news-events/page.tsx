import Hero from "@/components/Hero";
import CalendarSection from "./CalendarSection";
import NewsEvents from "./NewsEvents";
import Newsletter from "./Newsletter";

export default function NewsEventsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        title="News & Events"
        desc="Stay updated with the latest happenings, announcements, and upcoming events at B. S. Sr. Sec. School."
        imgSrc="/img/school_building.jpg"
      />

      <NewsEvents />
      <CalendarSection />
      <Newsletter />
    </div>
  );
}
