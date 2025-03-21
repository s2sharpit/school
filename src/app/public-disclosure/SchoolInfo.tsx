import React from 'react'

export default function SchoolInfo() {
  return (
    <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              School Information
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Basic Details</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">School Details</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-muted-foreground text-sm">School Name</span>
                    <span className="font-medium text-gray-900">B. S. Sr. Sec. School</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Address</span>
                    <span className="font-medium text-gray-900">Salempur Khadar, Delhi, India</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Phone</span>
                    <span className="font-medium text-gray-900">+91 98765 43210</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Email</span>
                    <span className="font-medium text-gray-900">info@bsschool.edu</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">Affiliation Details</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-muted-foreground text-sm">CBSE Affiliation Number</span>
                    <span className="font-medium text-gray-900">2730XXX</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-muted-foreground text-sm">School Code</span>
                    <span className="font-medium text-gray-900">65XXX</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Affiliation Status</span>
                    <span className="font-medium text-gray-900">Senior Secondary</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-muted-foreground text-sm">Affiliation Period</span>
                    <span className="font-medium text-gray-900">2020-2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
