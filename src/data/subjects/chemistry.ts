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
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHM102",
            name: "Inorganic Chemistry I",
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
            code: "CHM103",
            name: "General Chemistry II",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHM104",
            name: "Organic Chemistry I",
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
            code: "CHM201",
            name: "Organic Chemistry II",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHM202",
            name: "Physical Chemistry I",
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
            code: "CHM203",
            name: "Inorganic Chemistry II",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHM204",
            name: "Analytical Chemistry",
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
            code: "CHM301",
            name: "Physical Chemistry II",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHM302",
            name: "Spectroscopy",
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
            code: "CHM303",
            name: "Biochemistry",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHM304",
            name: "Environmental Chemistry",
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

export default chemistry;
