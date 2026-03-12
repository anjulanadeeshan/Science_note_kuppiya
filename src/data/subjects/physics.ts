/**
 * PHYSICS — resource data
 * Replace "#" with the Google Drive sharing URL for each resource.
 */

import type { SubjectData } from "../types";

const physics: SubjectData = {
  "1st-year": {
    label: "1st Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PHY101",
            name: "Mechanics",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PHY102",
            name: "Waves & Oscillations",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PHY103",
            name: "Electromagnetism I",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PHY104",
            name: "Heat & Thermodynamics",
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
            code: "PHY201",
            name: "Electromagnetism II",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PHY202",
            name: "Optics",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PHY203",
            name: "Mathematical Physics",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PHY204",
            name: "Electronics",
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
            code: "PHY301",
            name: "Quantum Mechanics",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PHY302",
            name: "Statistical Mechanics",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "PHY303",
            name: "Solid State Physics",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "PHY304",
            name: "Nuclear Physics",
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

export default physics;
