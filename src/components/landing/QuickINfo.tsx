import { Calendar, MapPin, Phone } from "lucide-react";

const info = [
  { label: "Contact Us", value: "+91 98765 43210", Icon: Phone },
  {
    label: "Our Location",
    value: "Salempur Khadar, Yamunanagar",
    Icon: MapPin,
  },
  {
    label: "School Hours",
    value: "Mon-Sat: 8:00 AM - 2:30 PM",
    Icon: Calendar,
  },
];
export default function QuickINfo() {
  return (
    <section className="bg-primary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {info.map(({ label, value, Icon }) => (
            <div key={label} className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{label}</h3>
                <p className="text-muted-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
