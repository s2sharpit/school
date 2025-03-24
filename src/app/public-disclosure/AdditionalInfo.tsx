import React from 'react';

export function InfrastructureSection() {
  const infrastructureData = [
    { label: 'Total Campus Area', value: '2.5 Acres' },
    { label: 'Built-up Area', value: '15,000 sq. ft.' },
    { label: 'Playground Area', value: '1 Acre' },
    { label: 'Number of Classrooms', value: '40' },
    { label: 'Number of Labs', value: '6' }
  ];

  const staffDetails = [
    { label: 'Teaching Staff', value: '45' },
    { label: 'Non-Teaching Staff', value: '20' },
    { label: 'PGT Teachers', value: '15' },
    { label: 'TGT Teachers', value: '20' },
    { label: 'PRT Teachers', value: '10' }
  ];

  const facilities = [
    'Science Labs',
    'Computer Lab',
    'Library',
    'Sports Facilities',
    'Smart Classrooms',
    'Auditorium'
  ];

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
                {infrastructureData.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-gray-900">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900 border-b pb-2">Staff Details</h3>
              <ul className="space-y-4">
                {staffDetails.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-gray-900">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-6 text-gray-900 border-b pb-2">Facilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-muted/30 p-4 rounded-lg text-center hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}