/**
 * APPLIED MATHEMATICS — resource data
 * Replace "#" with the Google Drive sharing URL for each resource.
 */

import type { SubjectData } from "../types";

const appliedMathematics: SubjectData = {
  "1st-year": {
    label: "1st Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "AM101",
            name: "Mechanics I",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "AM102",
            name: "Statics",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "AM103",
            name: "Mechanics II",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "AM104",
            name: "Dynamics",
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
            code: "AM201",
            name: "Ordinary Differential Equations",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "AM202",
            name: "Numerical Methods",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "AM203",
            name: "Partial Differential Equations",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "AM204",
            name: "Mathematical Modelling",
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
            code: "AM301",
            name: "Fluid Dynamics",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "AM302",
            name: "Continuum Mechanics",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "AM303",
            name: "Control Theory",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "AM304",
            name: "Operations Research",
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

export default appliedMathematics;
