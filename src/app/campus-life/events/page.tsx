import { Button } from "@/components/ui/button";
import { CalendarHeart, CheckCircle } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* Events Overview */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-900 flex items-center justify-center gap-3">
          <CalendarHeart className="w-10 h-10 text-yellow-500" />
          A Campus Filled with Learning & Celebrations
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We believe in **celebrating traditions, cultures, and creativity** through various events and competitions.  
          Our **Annual Function, Science Exhibitions, Festivals, and Cultural Events** provide students with a  
          platform to **showcase their talents and leadership skills**.
        </p>
      </section>

      {/* Major Events */}
      <section className="bg-blue-50 rounded-xl p-10 shadow-md">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">📌 Some of Our Major Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Annual Day Celebrations", description: "Grand performances, awards, and student showcases." },
            { title: "Science & Art Exhibitions", description: "Encouraging research, creativity, and innovation." },
            { title: "Independence Day & Republic Day", description: "Patriotism-filled cultural performances." },
            { title: "Inter-School Competitions", description: "Bringing out the best in music, dance, and debates." },
          ].map((event, index) => (
            <div key={index} className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md transition hover:shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" /> {event.title}
              </h3>
              <p className="text-gray-700 text-sm mt-2">{event.description}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 font-medium text-center mt-6">
          📢 Unleash your creativity and make **unforgettable memories**!
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-3 text-lg font-medium rounded-md transition shadow-lg">
          Explore Our Event Gallery →
        </Button>
      </div>
    </div>
  );
}
