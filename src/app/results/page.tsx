import { Metadata } from "next"
import { resultsData } from "@/data/results"
import { StudentResultCard } from "@/components/student-result-card"
import { HeroSection } from "@/components"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Academic Results",
  description: "Outstanding academic performance of our students in the Board Exams.",
}

export default function ResultsPage() {
  const class10Results = resultsData.find(data => data.classLevel === "10th")
  // const class12Results = resultsData.find(data => data.classLevel === "12th")

  const students10 = class10Results?.students || []
  const sortedStudents10 = [...students10].sort((a, b) => b.percentage - a.percentage)

  // const students12 = class12Results?.students || []
  // const sortedStudents12 = [...students12].sort((a, b) => b.percentage - a.percentage)

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Academic Results"
        description="Celebrating the outstanding achievements of our students. A tradition of excellence and dedication continues."
        badge="🎉 Board Examination Results"
      />

      <section className="container mx-auto px-4 md:px-6 py-16 max-w-7xl">
        {/*
        <Tabs defaultValue="10th" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-14 p-1 bg-muted/50 border border-border/50 rounded-lg">
              <TabsTrigger value="10th" className="text-base font-semibold rounded-md data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all">Class 10th</TabsTrigger>
              <TabsTrigger value="12th" className="text-base font-semibold rounded-md data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all">Class 12th</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="10th" className="mt-0">
            <ResultGrid resultData={class10Results} students={sortedStudents10} />
          </TabsContent>

          <TabsContent value="12th" className="mt-0">
            <ResultGrid resultData={class12Results} students={sortedStudents12} />
          </TabsContent>
        </Tabs>
        */}

        {/* Temporary direct rendering until 12th results are out */}
        <ResultGrid resultData={class10Results} students={sortedStudents10} />
      </section>
    </div>
  )
}

function ResultGrid({ resultData, students }: { resultData: any, students: any[] }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Class 10th - Our Brilliant Students</h2>
        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full opacity-80 mb-8"></div>

        {/* Stats Summary */}
        {resultData?.stats && resultData.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {resultData.stats.map((stat: { label: string; value: string | number }, idx: number) => (
              <div key={idx} className="bg-primary/5 rounded-lg p-3 sm:p-4 border border-primary/10">
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {students.length > 0 && (
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We are immensely proud of all our students for their hard work and perseverance throughout the academic year.
          </p>
        )}
      </div>

      {students.length > 0 ? (
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
          {students.map((student) => (
            <StudentResultCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-muted-foreground bg-muted/20 rounded-xl border border-dashed">
          <p className="text-lg">Results will be announced soon. Please check back later!</p>
        </div>
      )}
    </div>
  )
}
