import { Calendar, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function QuickINfo() {
  return (
    <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Contact Us</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Our Location</h3>
                <p className="text-muted-foreground">Salempur Khadar, Delhi</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">School Hours</h3>
                <p className="text-muted-foreground">Mon-Sat: 8:00 AM - 2:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
