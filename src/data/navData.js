const navData = [
    { li: "admission" },
    {
        li: "infrastructure",
        nested: [
            {
                name: "library & labs",
                ls: "library_&_labs",
            },
            {
                name: "sports",
                ls: "sports_firstAid_transport",
            },
        ]
    },
    {
        li: "academics",
        nested: [
            {
                name: "Fee Structure",
                ls: "fee_structure",
            },
            {
                name: "Student Strength",
                ls: "student_strength",
            },
            {
                name: "Parent's Teacher Meeting",
                ls: "ptm",
            },]
    },
    { li: "faculty" },
]

export default navData;