/**
 * PURE MATHEMATICS — resource data
 * Replace "#" with the Google Drive sharing URL for each resource.
 */

import type { SubjectData } from "../types";

const pureMathematics: SubjectData = {
  "1st-year": {
    label: "1st Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PM101",
            name: "Calculus I",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PM102",
            name: "Linear Algebra",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PM103",
            name: "Calculus II",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PM104",
            name: "Vector Calculus",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
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
            code: "PM201",
            name: "Real Analysis",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PM202",
            name: "Group Theory",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PM203",
            name: "Abstract Algebra",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PM204",
            name: "Number Theory",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
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
            code: "PM301",
            name: "Topology",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PM302",
            name: "Functional Analysis",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PM303",
            name: "Complex Analysis",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PM304",
            name: "Differential Geometry",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
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
