import React from 'react'

export default function AdditionalInfo() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Additional Information
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Infrastructure & Facilities</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-6 text-gray-900 border-b pb-2">Infrastructure</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Campus Area</span>
                    <span className="font-medium text-gray-900">2.5 Acres</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Built-up Area</span>
                    <span className="font-medium text-gray-900">15,000 sq. ft.</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Playground Area</span>
                    <span className="font-medium text-gray-900">1 Acre</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Number of Classrooms</span>
                    <span className="font-medium text-gray-900">40</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Number of Labs</span>
                    <span className="font-medium text-gray-900">6</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-6 text-gray-900 border-b pb-2">Staff Details</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Teaching Staff</span>
                    <span className="font-medium text-gray-900">45</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">Non-Teaching Staff</span>
                    <span className="font-medium text-gray-900">20</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">PGT Teachers</span>
                    <span className="font-medium text-gray-900">15</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">TGT Teachers</span>
                    <span className="font-medium text-gray-900">20</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-muted-foreground">PRT Teachers</span>
                    <span className="font-medium text-gray-900">10</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-6 text-gray-900 border-b pb-2">Facilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-muted/30 p-4 rounded-lg text-center hover:bg-muted/50 transition-colors">
                  <span className="font-medium text-gray-900">Science Labs</span>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center hover:bg-muted/50 transition-colors">
                  <span className="font-medium text-gray-900">Computer Lab</span>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center hover:bg-muted/50 transition-colors">
                  <span className="font-medium text-gray-900">Library</span>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center hover:bg-muted/50 transition-colors">
                  <span className="font-medium text-gray-900">Sports Facilities</span>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center hover:bg-muted/50 transition-colors">
                  <span className="font-medium text-gray-900">Smart Classrooms</span>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg text-center hover:bg-muted/50 transition-colors">
                  <span className="font-medium text-gray-900">Auditorium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
