import type { SubjectData } from "../types";

const defaultResources = [
  { key: "notes", label: "Notes", url: "#" },
  { key: "tutorials", label: "Tutorials", url: "#" },
  { key: "additional", label: "Additional Resources", url: "#" },
  { key: "icas", label: "ICAs", url: "#" },
  { key: "pastpapers", label: "Past Papers", url: "#" },
];

const appliedMathematics: SubjectData = {
  "1st-year": {
    label: "1st Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "AMM101G3",
            name: "Applied Methods I",
            resources: defaultResources,
          },
          {
            code: "AMM102G2",
            name: "Mechanics I",
            resources: defaultResources,
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "AMM103G3",
            name: "Applied Methods II",
            resources: defaultResources,
          },
          {
            code: "AMM104G2",
            name: "Mechanics II",
            resources: defaultResources,
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
            code: "AMM201G3",
            name: "Mathematical Methods",
            resources: defaultResources,
          },
          {
            code: "AMM202G2",
            name: "Fluid Dynamics",
            resources: defaultResources,
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "AMM203G3",
            name: "Linear Programming",
            resources: defaultResources,
          },
          {
            code: "AMM204G2",
            name: "Linear Algebra and Analytic Geometry",
            resources: defaultResources,
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
            code: "AMM301G3",
            name: "Mathematical Programming",
            resources: defaultResources,
          },
          {
            code: "AMM302G3",
            name: "Classical Mechanics",
            resources: defaultResources,
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "AMM303G2",
            name: "Numerical Methods",
            resources: defaultResources,
          },
          {
            code: "AMM304G2",
            name: "Fluid Dynamics II",
            resources: defaultResources,
          },
          {
            code: "AMM305G2",
            name: "Mathematical Modeling",
            resources: defaultResources,
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

export default appliedMathematics;
