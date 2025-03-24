import { HeroSection } from "@/components";
import CalendarSection from "./CalendarSection";
import NewsEvents from "./NewsEvents";
import Newsletter from "./Newsletter";

export default function NewsEventsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection
        title="News & Events"
        description="Stay updated with the latest happenings, announcements, and upcoming events at B. S. Sr. Sec. School."
        badge="Stay Updated"
      />

      <NewsEvents />
      <CalendarSection />
      <Newsletter />
    </div>
  );
}
