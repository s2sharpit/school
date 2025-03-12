import Title from '@/components/ui/Title'
import { CheckCircle, ListChecks } from 'lucide-react'

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
        <li key={index} className="flex items-start gap-4">
          <CheckCircle className="mt-1 w-6 h-6 text-green-600 flex-shrink-0" />
          <div>
            <strong className="text-lg text-blue-900">{feature.title}</strong>
            <p className="text-sm">{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>

  )
}
