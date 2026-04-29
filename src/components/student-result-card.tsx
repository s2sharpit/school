import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StudentResult } from "@/data/results"
import { Award, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface StudentResultCardProps {
  student: StudentResult
}

export function StudentResultCard({ student }: StudentResultCardProps) {
  const isTopScorer = student.percentage >= 90;

  return (
    <Card className={`relative gap-4 overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1 backdrop-blur-sm ${isTopScorer
      ? 'border-amber-500/30 bg-linear-to-br from-amber-500/10 via-background to-background shadow-amber-500/5'
      : 'border-muted/50 bg-none bg-linear-to-br from-primary/5 via-transparent to-transparent'
      }`}>

      {isTopScorer && (
        <div className="absolute top-0 left-0 w-full flex justify-center z-20">
          <Badge className="bg-linear-to-r from-amber-500 to-yellow-500 text-white border-none shadow-sm flex gap-1 items-center px-3 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-t-none rounded-b-md">
            <Award className="h-3 w-3" />
            Top Scorer
          </Badge>
        </div>
      )}

      <div className={`absolute -top-10 -right-10 w-32 h-32 ${isTopScorer ? 'bg-amber-500/10 group-hover:bg-amber-500/20' : 'bg-linear-to-br from-primary/5 via-transparent to-transparent group-hover:bg-muted'} rounded-full blur-2xl transition-all`}></div>

      <CardHeader className="px-8">
        <Avatar className={`${isTopScorer ? 'border-amber-400' : 'border-background'} aspect-square h-max w-full border-2 sm:border-4 shadow-xl transition-all duration-300 group-hover:scale-105`}>
          <AvatarImage src={student.photoUrl || ""} alt={student.name} className="object-cover object-top" />
          <AvatarFallback className="text-xl font-bold">{student.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 items-center relative z-10">
        <CardTitle className={`text-center font-bold ${isTopScorer ? 'text-amber-700 dark:text-amber-400' : ''}`}>{student.name}</CardTitle>
        <div className="flex items-center gap-1.5">
          {isTopScorer && <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />}
          <CardDescription className={`font-bold ${isTopScorer ? 'text-amber-600 dark:text-amber-400 text-base' : 'text-foreground text-sm'}`}>
            {student.percentage}%
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}

