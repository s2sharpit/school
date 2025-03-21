import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function ContactInfo() {
  return (
    <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p className="text-muted-foreground mb-1">Main Office: +91 98765 43210</p>
          <p className="text-muted-foreground mb-1">Admissions: +91 98765 43211</p>
          <p className="text-muted-foreground">Principal's Office: +91 98765 43212</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-muted-foreground mb-1">General Inquiries: info@bsschool.edu</p>
          <p className="text-muted-foreground mb-1">Admissions: admissions@bsschool.edu</p>
          <p className="text-muted-foreground">Principal: principal@bsschool.edu</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Address</h3>
          <p className="text-muted-foreground">
            B. S. Sr. Sec. School
            <br />
            Salempur Khadar
            <br />
            Delhi, India
          </p>
        </div>
      </div>
    </div>
  </section>

  )
}
