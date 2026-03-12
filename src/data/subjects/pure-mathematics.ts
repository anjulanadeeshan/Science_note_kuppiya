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
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "PM102",
            name: "Linear Algebra",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
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
            code: "PM103",
            name: "Calculus II",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "PM104",
            name: "Vector Calculus",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
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
            code: "PM201",
            name: "Real Analysis",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "PM202",
            name: "Group Theory",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
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
            code: "PM203",
            name: "Abstract Algebra",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "PM204",
            name: "Number Theory",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
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
            code: "PM301",
            name: "Topology",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "PM302",
            name: "Functional Analysis",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
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
            code: "PM303",
            name: "Complex Analysis",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "PM304",
            name: "Differential Geometry",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
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
