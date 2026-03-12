/**
 * COMPUTER SCIENCE — resource data
 *
 * HOW TO ADD A GOOGLE DRIVE LINK
 * ───────────────────────────────
 * 1. Find the correct year  → "1st-year" / "2nd-year" / "3rd-year" / "4th-year"
 * 2. Find the correct semester → "sem1" / "sem2"
 * 3. Find (or add) the Course object with the right `code`
 * 4. Replace the "#" in `resources.notes` / `.tutorials` / `.icas` / `.pastpapers`
 *    with the full Google Drive sharing URL.
 *
 * Leave "#" for any category that is not ready yet — it will show "Coming Soon".
 */

import type { SubjectData } from "../types";

const computerScience: SubjectData = {
  /* ── 1st Year ─────────────────────────────────────────── */
  "1st-year": {
    label: "1st Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",   // ← replace with the Sem-1 top-level Drive folder URL
        courses: [
          {
            code: "CS101",
            name: "Introduction to Computing",
            resources: {
              notes:      "#",  // ← Google Drive URL
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
          {
            code: "CS102",
            name: "Programming Fundamentals",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "CS103",
            name: "Data Structures",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
          {
            code: "CS104",
            name: "Discrete Mathematics",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
        ],
      },
    },
  },

  /* ── 2nd Year ─────────────────────────────────────────── */
  "2nd-year": {
    label: "2nd Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "CS201",
            name: "Algorithms",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
          {
            code: "CS202",
            name: "Database Systems",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "CS203",
            name: "Operating Systems",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
          {
            code: "CS204",
            name: "Computer Networks",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
        ],
      },
    },
  },

  /* ── 3rd Year ─────────────────────────────────────────── */
  "3rd-year": {
    label: "3rd Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "#",
        courses: [
          {
            code: "CS301",
            name: "Software Engineering",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
          {
            code: "CS302",
            name: "Machine Learning",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "CS303",
            name: "Computer Graphics",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
          {
            code: "CS304",
            name: "Compiler Design",
            resources: {
              notes:      "#",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
        ],
      },
    },
  },

  /* ── 4th Year ─────────────────────────────────────────── */
  "4th-year": {
    label: "4th Year",
    semesters: {
      sem1: { label: "1st Semester", courses: [] },
      sem2: { label: "2nd Semester", courses: [] },
    },
  },
};

export default computerScience;
