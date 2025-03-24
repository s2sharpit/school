import type { LucideIcon } from "lucide-react"

interface TimelineItemProps {
  icon: LucideIcon
  title: string
  description: string
}

export function TimelineItem({ icon: Icon, title, description }: TimelineItemProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground pl-16">{description}</p>
    </div>
  )
}

