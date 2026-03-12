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
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "BIO102",
            name: "Botany I",
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
            code: "BIO103",
            name: "Genetics",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "BIO104",
            name: "Zoology I",
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
            code: "BIO201",
            name: "Biochemistry",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "BIO202",
            name: "Microbiology",
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
            code: "BIO203",
            name: "Ecology",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "BIO204",
            name: "Physiology",
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
            code: "BIO301",
            name: "Molecular Biology",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "BIO302",
            name: "Evolutionary Biology",
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
            code: "BIO303",
            name: "Biotechnology",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "BIO304",
            name: "Bioinformatics",
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

export default biology;
