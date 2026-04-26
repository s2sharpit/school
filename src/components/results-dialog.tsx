"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { resultsData } from "@/data/results"
import { StudentResultCard } from "@/components/student-result-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ResultsDialog() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Only show on home page, and if not previously dismissed in this session
    const dismissed = sessionStorage.getItem("results-dialog-dismissed") === "true"
    if (!dismissed) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      sessionStorage.setItem("results-dialog-dismissed", "true")
    }
  }

  // Get data
  const class2026Results = resultsData.find(
    (data) => data.year === 2026 && data.classLevel === "10th"
  )
  const students = class2026Results?.students || []
  const sortedStudents = [...students].sort((a, b) => b.percentage - a.percentage)

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col p-0 gap-0 border-0 shadow-2xl">
        <DialogHeader className="p-6 md:p-8 pb-4 space-y-3 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent text-center border-b">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-2">
            <span className="text-3xl block animate-bounce">🎉</span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Class of 2026 Board Results
          </DialogTitle>
          <DialogDescription className="text-base md:text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            We are immensely proud to announce the outstanding performance of our 10th Class students!
          </DialogDescription>
        </DialogHeader>
        
        {/* Scrollable Area for Students */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/20">
          {sortedStudents.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
              {sortedStudents.map((student) => (
                <StudentResultCard key={student.id} student={student} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground bg-muted/10 rounded-lg border border-dashed">
              <p>Results data is currently being updated. Please check back soon.</p>
            </div>
          )}
        </div>
        
        {/* Footer with Call to Action */}
        <div className="p-4 md:p-6 border-t bg-background flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm font-medium">
            {class2026Results?.stats ? (
              <>
                <div><span className="text-muted-foreground">Total:</span> <span className="text-foreground text-base">{class2026Results.stats.totalStudents}</span></div>
                <div className="hidden sm:block text-muted-foreground/40">|</div>
                <div><span className="text-muted-foreground">Highest:</span> <span className="text-foreground text-base text-primary">{class2026Results.stats.highestScore}%</span></div>
                <div className="hidden sm:block text-muted-foreground/40">|</div>
                <div><span className="text-muted-foreground">&gt;80%:</span> <span className="text-foreground text-base">{class2026Results.stats.above80}</span></div>
                <div className="hidden sm:block text-muted-foreground/40">|</div>
                <div><span className="text-muted-foreground">&gt;70%:</span> <span className="text-foreground text-base">{class2026Results.stats.above70}</span></div>
              </>
            ) : (
              <div><span className="text-muted-foreground">Students listed:</span> <span className="text-foreground text-base">{students.length}</span></div>
            )}
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
             <Button variant="outline" className="flex-1 sm:flex-none" onClick={() => handleOpenChange(false)}>
               Close
             </Button>
             <Link href="/results" className="flex-1 sm:flex-none w-full" onClick={() => handleOpenChange(false)}>
               <Button className="w-full">View Full Page</Button>
             </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
