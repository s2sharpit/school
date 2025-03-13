import Title from '@/components/ui/Title'
import { CheckCircle, ListChecks } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card";

const features = [
    { title: "Activity-Based Learning", description: "Interactive and hands-on learning experiences." },
    { title: "Balanced Approach", description: "A mix of theory, practicals, and real-world applications." },
    { title: "Skill Development", description: "Encourages independent thinking, teamwork, and leadership." },
    { title: "Career-Oriented Education", description: "Prepares students for competitive exams and careers." }
  ];
  
export default function KeyFeatures() {
  return (
    <section className="space-y-8">
    <Title className="flex items-center justify-center gap-3">
      <ListChecks className="w-8 h-8 text-blue-600" />
      Key Features of Our Curriculum
    </Title>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <Card key={index}>
        <CardContent className="flex max-sm:flex-col max-sm:items-center max-sm:text-center gap-4 md:gap-6">
        <CheckCircle className="w-10 sm:w-6 h-10 sm:h-6 mt-2 text-green-600 flex-shrink-0" />
        <div>
          <strong className="text-lg text-blue-900">
            {feature.title}
          </strong>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
        </CardContent>
      </Card>
      ))}
    </ul>
  </section>

  )
}
