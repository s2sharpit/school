import React from "react";

interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="flex flex-col">
      <dt className="text-muted-foreground text-sm">{label}</dt>
      <dd className="font-medium text-gray-900">{value}</dd>
    </div>
  );
}

export function SchoolInfoSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            School Information
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Basic Details
          </h2>
        </div>

        {/* Information Container */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* School Details Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">
                School Details
              </h3>
              <dl className="space-y-4">
                <InfoItem label="School Name" value="B. S. Sr. Sec. School" />
                <InfoItem label="Address" value="Salempur Khadar, Yamunanagar, Haryana, India" />
                <InfoItem label="Phone" value="+91 89014 37877" />
                <InfoItem label="Email" value="bsmschoolsalempur@gmail.com" />
              </dl>
            </div>

            {/* Affiliation Details Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">
                Affiliation Details
              </h3>
              <dl className="space-y-4">
                <InfoItem label="CBSE Affiliation Number" value="531917" />
                <InfoItem label="School Code" value="41917" />
                <InfoItem label="Affiliation Status" value="Senior Secondary" />
                <InfoItem label="Affiliation Period" value="2020-2026" />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
