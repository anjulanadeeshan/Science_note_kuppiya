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
            code: "CHE101G2",
            name: "General Chemistry",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHE102G2",
            name: "Foundations of Physical Chemistry",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHE103G1",
            name: "Chemistry of Periodic Elements",
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
            code: "CHE104G3",
            name: "Organic Chemistry I",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHE105G1",
            name: "Inorganic Chemistry Laboratory I",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHE106G1",
            name: "Organic and Physical Chemistry Laboratory I",
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
            code: "CHE201G2",
            name: "Coordination and Organometallic Chemistry",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHE202G3",
            name: "Quantum Mechanical Approach to Atomic and Molecular Structure and Molecular Spectroscopy",
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
            code: "CHE203G2",
            name: "Organic Chemistry II",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHE204G3",
            name: "Inorganic and Organic Chemistry Laboratory II",
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
            code: "CHE301G3",
            name: "Analytical Chemistry & Industrial Chemistry",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHE302G3",
            name: "Electrochemistry, Chemical Kinetics and Surface Chemistry",
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
            code: "CHE303G3",
            name: "Organic Chemistry III",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CHE304G3",
            name: "Physical, Inorganic and Organic Laboratory III",
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
