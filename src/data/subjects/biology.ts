/**
 * BIOLOGY — resource data
 * Replace "#" with the Google Drive sharing URL for each resource.
 */

import type { SubjectData } from "../types";

const biology: SubjectData = {
  "1st-year": {
    label: "1st Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "BIO101",
            name: "Cell Biology",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "BIO102",
            name: "Botany I",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "BIO103",
            name: "Genetics",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "BIO104",
            name: "Zoology I",
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
            code: "BIO201",
            name: "Biochemistry",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "BIO202",
            name: "Microbiology",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "BIO203",
            name: "Ecology",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "BIO204",
            name: "Physiology",
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
            code: "BIO301",
            name: "Molecular Biology",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "BIO302",
            name: "Evolutionary Biology",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "BIO303",
            name: "Biotechnology",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "BIO304",
            name: "Bioinformatics",
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

export default biology;
