import type { SubjectData } from "../types";

const defaultResources = [
  { key: "notes", label: "Notes", url: "#" },
  { key: "tutorials", label: "Tutorials", url: "#" },
  { key: "icas", label: "ICAs", url: "#" },
  { key: "pastpapers", label: "Past Papers", url: "#" },
];

const pureMathematics: SubjectData = {
  "1st-year": {
    label: "1st Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PMM101G3",
            name: "Foundations of Mathematics",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/17zVofcFQX-EZ_-e9SivAJtma2W6kTi95?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/17XsSScztS2FTX-n9lrHfG1U3ErQQ36Ul?usp=drive_link",
              },
              {
                key: "additional",
                label: "Additional Resources",
                url: "https://drive.google.com/drive/folders/151U6ouPf4PBbpzrWVHag-HsFUChCel62?usp=drive_link",
              },
              { key: "icas", label: "ICAs", url: "#" },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1jUFU1UgU5zD2MJQ89guNj7yma4I6P0sY?usp=drive_link",
              },
            ],
          },
          {
            code: "PMM102G2",
            name: "Limit Process",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1wNrN4Iv4S15Mx9n504R-rWIVledKkvPM?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1e1w157aE3OQThnn82C0yo9wis0fF3eDe?usp=drive_link",
              },
              {
                key: "additional",
                label: "Additional Resources",
                url: "https://drive.google.com/drive/folders/1g-uOVs_rsYTmXkiLL5HP6VhpTtjuLI0H?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1-m3rMdEZmlLFL6mB_bXTtmMv7fLiWQlD?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1_N7Bjj4WxuQ1Nz1b91lLdwYWDAZDZ3x9?usp=drive_link",
              },
            ],
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PMM103G3",
            name: "Algebra and Number Theory",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "additional", label: "Additional Resources", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "PMM104G2",
            name: "Calculus",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "additional", label: "Additional Resources", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
        ],
      },
    },
  },
  "2nd-year": {
    label: "2nd Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PMM201G3",
            name: "Linear Algebra",
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/18IUAPjq1yQ-3XO-iqFb2fxEOm3isljvX?usp=drive_link" },
              { key: "tutorials", label: "Tutorials", url: "https://drive.google.com/drive/folders/1J4O8Mn_rIfahLeH7ab3FYt-WNgqdBIO6?usp=drive_link" },
              { key: "additional", label: "Additional Resources", url: "https://drive.google.com/drive/folders/1Ek6tYgi7wRuA8L5stFRqvZVuv2Cu6A8P?usp=drive_link" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1jb7NZTHQyI63B6-w6dbvHj9w4nzrOuyc?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1KR5GyIsOuVLOzsRjYRPAcIHugbapJ7hj?usp=drive_link" },
            ],
          },
          {
            code: "PMM202G2",
            name: "Advanced Calculus",
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1eW9OxdX56r2RlyxBvDrx0GkWPBwdK7ZR?usp=drive_link" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "additional", label: "Additional Resources", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/13sEHT4lyN1wwRPYU9MX_7kWj0OyG4Fb6?usp=drive_link" },
            ],
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PMM203G3",
            name: "Analysis",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "additional", label: "Additional Resources", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "PMM204G2",
            name: "Linear Algebra and Analytic Geometry",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "additional", label: "Additional Resources", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
        ],
      },
    },
  },
  "3rd-year": {
    label: "3rd Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PMM301G3",
            name: "Abstract Algebra",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "additional", label: "Additional Resources", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "PMM302G3",
            name: "Complex Analysis",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "additional", label: "Additional Resources", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PMM303G3",
            name: "Discrete and Combinatorial Mathematics",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "additional", label: "Additional Resources", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "PMM304G3",
            name: "Geometry",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "additional", label: "Additional Resources", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
        ],
      },
    },
  },
  "4th-year": {
    label: "4th Year",
    semesters: {
      sem1: { label: "1st Semester", courses: [] },
      sem2: { label: "2nd Semester", courses: [] },
    },
  },
};

export default pureMathematics;
