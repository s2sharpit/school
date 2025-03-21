import React from 'react'

export default function SupportStaff() {
  return (
    <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
          Behind the Scenes
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Support Staff</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Meet the dedicated professionals who ensure the smooth functioning of our school.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">Administrative Staff</h3>
          <p className="text-muted-foreground mb-4">
            Our administrative staff handles admissions, records, communications, and other administrative
            functions, ensuring smooth operations of the school.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">IT Support Team</h3>
          <p className="text-muted-foreground mb-4">
            Our IT team maintains the school's technology infrastructure, providing technical support to faculty,
            staff, and students.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">Maintenance Staff</h3>
          <p className="text-muted-foreground mb-4">
            Our maintenance team ensures that the school facilities are well-maintained, clean, and safe for all.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">Library Staff</h3>
          <p className="text-muted-foreground mb-4">
            Our librarians help students and faculty access resources, promote reading, and maintain our extensive
            collection of books and digital resources.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">Health Services</h3>
          <p className="text-muted-foreground mb-4">
            Our school nurse and health services team provide first aid, health education, and ensure the well-being
            of our students.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-2">Transportation Staff</h3>
          <p className="text-muted-foreground mb-4">
            Our transportation team ensures safe and timely transportation for students who use the school bus
            service.
          </p>
        </div>
      </div>
    </div>
  </section>

  )
}
