import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function FacultyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Faculty"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <div className="mx-auto max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Faculty & Staff</h1>
            <p className="mx-auto max-w-[700px] text-lg">
              Meet the dedicated professionals who make B. S. Sr. Sec. School a center of excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Experienced Educators, Passionate Mentors
              </h2>
              <p className="text-muted-foreground text-lg">
                At B. S. Sr. Sec. School, we take pride in our exceptional faculty and staff who are not just educators
                but mentors, guides, and role models for our students. Our team comprises highly qualified professionals
                with extensive experience in their respective fields.
              </p>
              <p className="text-muted-foreground text-lg">
                Our teachers are committed to providing a nurturing and stimulating learning environment where each
                student can thrive. They employ innovative teaching methodologies that make learning engaging and
                effective, helping students develop critical thinking skills and a love for learning.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Faculty Group" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              School Leadership
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Administrative Team</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Meet the leaders who guide our institution towards excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-80 w-full">
                <Image src="/placeholder.svg?height=400&width=300" alt="Principal" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Dr. Rajiv Sharma</h3>
                <p className="text-primary font-medium mb-3">Principal</p>
                <p className="text-muted-foreground mb-4">
                  Ph.D. in Education with over 25 years of experience in educational leadership. Dr. Sharma is dedicated
                  to fostering academic excellence and holistic development.
                </p>
                <div className="flex space-x-3">
                  <Link href="#" className="text-gray-400 hover:text-primary">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-primary">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-80 w-full">
                <Image src="/placeholder.svg?height=400&width=300" alt="Vice Principal" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mrs. Anita Gupta</h3>
                <p className="text-primary font-medium mb-3">Vice Principal</p>
                <p className="text-muted-foreground mb-4">
                  M.Ed. with 20 years of teaching and administrative experience. Mrs. Gupta oversees academic affairs
                  and ensures the highest standards of teaching and learning.
                </p>
                <div className="flex space-x-3">
                  <Link href="#" className="text-gray-400 hover:text-primary">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-primary">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Administrative Officer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mr. Sunil Verma</h3>
                <p className="text-primary font-medium mb-3">Administrative Officer</p>
                <p className="text-muted-foreground mb-4">
                  MBA with 15 years of experience in educational administration. Mr. Verma manages the administrative
                  functions of the school, ensuring smooth operations.
                </p>
                <div className="flex space-x-3">
                  <Link href="#" className="text-gray-400 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-primary">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-primary">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Heads Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Academic Leaders
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Department Heads</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Meet the experienced educators who lead our academic departments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Science Department Head"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Dr. Priya Mehta</h3>
              <p className="text-primary font-medium mb-2">Head of Science</p>
              <p className="text-muted-foreground text-sm">
                Ph.D. in Physics with 18 years of teaching experience. Specializes in making complex scientific concepts
                accessible and engaging.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Mathematics Department Head"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Mr. Arun Kumar</h3>
              <p className="text-primary font-medium mb-2">Head of Mathematics</p>
              <p className="text-muted-foreground text-sm">
                M.Sc. in Mathematics with 15 years of teaching experience. Known for his innovative approach to teaching
                mathematical concepts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Languages Department Head"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Mrs. Sunita Patel</h3>
              <p className="text-primary font-medium mb-2">Head of Languages</p>
              <p className="text-muted-foreground text-sm">
                M.A. in English Literature with 20 years of teaching experience. Passionate about fostering effective
                communication skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-48 w-full mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Social Sciences Department Head"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Mr. Vikram Singh</h3>
              <p className="text-primary font-medium mb-2">Head of Social Sciences</p>
              <p className="text-muted-foreground text-sm">
                M.A. in History with 16 years of teaching experience. Specializes in making history and social studies
                relevant and engaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Our Educators
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Teaching Faculty</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              Meet our dedicated teachers who inspire and guide our students every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Teacher ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">{`Teacher ${i + 1}`}</h3>
                <p className="text-primary font-medium mb-2">{`Subject Teacher`}</p>
                <p className="text-muted-foreground text-sm">
                  Experienced educator with a passion for teaching and mentoring students.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/faculty/all">
                View All Faculty Members <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
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

      {/* Join Us Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
                <p className="text-white/80">
                  We're always looking for passionate educators and support staff to join our team. If you're interested
                  in making a difference in students' lives, we'd love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/careers">View Current Openings</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Link href="/contact">Contact HR Department</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Teachers in Classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

