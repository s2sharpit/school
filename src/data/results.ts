export interface StudentResult {
  id: string;
  name: string;
  percentage: number;
  photoUrl: string;
}

export interface ClassResult {
  year: number;
  classLevel: string; // e.g., "10th", "12th"
  students: StudentResult[];
  stats?: {
    label: string;
    value: string | number;
  }[];
}

export const resultsData: ClassResult[] = [
  {
    year: 2026,
    classLevel: "10th",
    stats: [
      { label: "Total Students", value: 50 },
      { label: "Highest Score", value: "95%" },
      { label: "Above 80%", value: 18 },
      { label: "Above 70%", value: 15 }
    ],
    students: [
      { id: "khushi-saini", name: "Khushi Saini", percentage: 95, photoUrl: "/images/results/2026/10th/khushi.jpg" },
      { id: "bhavika", name: "Bhavika", percentage: 88, photoUrl: "/images/results/2026/10th/bhavika.jpg" },
      { id: "ishika", name: "Ishika", percentage: 87.8, photoUrl: "/images/results/2026/10th/ishika.jpg" },
      { id: "rashi", name: "Rashi", percentage: 86.6, photoUrl: "/images/results/2026/10th/rashi.jpg" },
      { id: "vaibhav", name: "Vaibhav Sharma", percentage: 86.6, photoUrl: "/images/results/2026/10th/vaibhav.jpg" },
      { id: "aashifa", name: "Aashifa", percentage: 86.4, photoUrl: "/images/results/2026/10th/aashifa.jpg" },
      { id: "rishabh", name: "Rishabh", percentage: 86.2, photoUrl: "/images/results/2026/10th/rishabh.jpg" },
      { id: "yashika", name: "Yashika", percentage: 84.8, photoUrl: "/images/results/2026/10th/yashika.jpg" },
      { id: "yashpreet", name: "Yashpreet Bhatti", percentage: 84.4, photoUrl: "/images/results/2026/10th/yashpreet.jpg" },
      { id: "aarushi", name: "Aarushi", percentage: 84, photoUrl: "/images/results/2026/10th/aarushi.jpg" },
      { id: "taniya", name: "Taniya", percentage: 83.6, photoUrl: "/images/results/2026/10th/taniya.jpg" },
      { id: "devanshi", name: "Devanshi Kapoor", percentage: 83.4, photoUrl: "/images/results/2026/10th/devanshi.jpg" },
      { id: "ekta", name: "Ekta", percentage: 82.8, photoUrl: "/images/results/2026/10th/ekta.jpg" },
      { id: "bhawna", name: "Bhawna", percentage: 82.6, photoUrl: "/images/results/2026/10th/bhawna.jpg" },
      { id: "jainish", name: "Jainish", percentage: 81.8, photoUrl: "/images/results/2026/10th/jainish.jpg" },
      { id: "mannat", name: "Mannat", percentage: 81.8, photoUrl: "/images/results/2026/10th/mannat.jpg" },
      { id: "riya", name: "Riya", percentage: 81.2, photoUrl: "/images/results/2026/10th/riya.jpg" },
      { id: "aditi", name: "Aditi Chaudhary", percentage: 80.6, photoUrl: "/images/results/2026/10th/aditi.jpg" },
      { id: "jatin", name: "Jatin", percentage: 78, photoUrl: "/images/results/2026/10th/jatin.jpg" },
      { id: "vaishali", name: "Vaishali", percentage: 77.4, photoUrl: "/images/results/2026/10th/vaishali.jpg" },
      { id: "keshav", name: "Keshav", percentage: 77.4, photoUrl: "/images/results/2026/10th/keshav.jpg" },
      { id: "bhavna-77", name: "Bhavna", percentage: 77.2, photoUrl: "/images/results/2026/10th/bhavna.jpg" },
      { id: "dakshu", name: "Dakshu Gatiyan", percentage: 76.2, photoUrl: "/images/results/2026/10th/dakshu.jpg" },
      { id: "sidharath", name: "Sidharath", percentage: 75.4, photoUrl: "/images/results/2026/10th/sidharath.jpg" },
      { id: "anshmaan", name: "Anshumaan", percentage: 73.6, photoUrl: "/images/results/2026/10th/anshumaan.jpg" },
      { id: "harshit", name: "Harshit", percentage: 70.6, photoUrl: "/images/results/2026/10th/harshit.jpg" },
      { id: "varun", name: "Varun Saini", percentage: 70.2, photoUrl: "/images/results/2026/10th/varun.jpg" },
      { id: "harshita", name: "Harshita", percentage: 70.2, photoUrl: "/images/results/2026/10th/harshita.jpg" },
      { id: "vaishnavi", name: "Vaishnavi", percentage: 70, photoUrl: "/images/results/2026/10th/vaishnavi.jpg" },
      { id: "yug", name: "Yug", percentage: 70, photoUrl: "/images/results/2026/10th/yug.jpg" }
    ]
  },
  {
    year: 2026,
    classLevel: "12th",
    // stats: { totalStudents: 0, highestScore: 0, above80: 0, above70: 0 },
    students: [
      // Add 12th class students here when results are announced
    ]
  }
];
