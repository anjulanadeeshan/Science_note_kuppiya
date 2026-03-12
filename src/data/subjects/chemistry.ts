/**
 * CHEMISTRY — resource data
 * Replace "#" with the Google Drive sharing URL for each resource.
 */

import type { SubjectData } from "../types";

const chemistry: SubjectData = {
  "1st-year": {
    label: "1st Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "CHM101",
            name: "General Chemistry I",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "CHM102",
            name: "Inorganic Chemistry I",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "CHM103",
            name: "General Chemistry II",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "CHM104",
            name: "Organic Chemistry I",
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
            code: "CHM201",
            name: "Organic Chemistry II",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "CHM202",
            name: "Physical Chemistry I",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "CHM203",
            name: "Inorganic Chemistry II",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "CHM204",
            name: "Analytical Chemistry",
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
            code: "CHM301",
            name: "Physical Chemistry II",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "CHM302",
            name: "Spectroscopy",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "CHM303",
            name: "Biochemistry",
            resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          },
          {
            code: "CHM304",
            name: "Environmental Chemistry",
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

export default chemistry;
