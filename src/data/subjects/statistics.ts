/**
 * STATISTICS — resource data
 *
 * HOW TO ADD A GOOGLE DRIVE LINK
 * ───────────────────────────────
 * Replace "#" with the full Google Drive sharing URL for that category.
 * Leave "#" if the resource is not ready yet (shows "Coming Soon").
 */

import type { SubjectData } from "../types";

const statistics: SubjectData = {
  /* ── 1st Year ─────────────────────────────────────────── */
  "1st-year": {
    label: "1st Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder: "https://drive.google.com/drive/folders/1ZiMd0UkCuDmet7Xr_13JMXfqMf4YPk_z?usp=drive_link",
        courses: [
          {
            code: "STA101G3",
            name: "Mr. A. Laheetharan",
            resources: {
              notes:      "https://drive.google.com/drive/folders/1rBrJGdC_rvnkbM4bUV3LTibSg_jEid7W?usp=sharing",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
          {
            code: "STA102G2",
            name: "Dr. S. Arumairajan",
            resources: {
              notes:      "https://drive.google.com/drive/folders/1VBFNsp0KNyO33wSNg9wOviv57PdOQHU1?usp=sharing",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "https://drive.google.com/drive/folders/12FNzLCvz__iLxB-DH2IaVmVpz0DzKTdn?usp=drive_link",
        courses: [
          {
            code: "STA103G3",
            name: "Dr. S. Arivalzahan",
            resources: {
              notes:      "https://drive.google.com/drive/folders/1PDVPo_sW__zAsMO5sHtm0R1hmdh2OQLQ?usp=sharing",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
          {
            code: "STA104G2",
            name: "Mrs. N. Sathkunanathan",
            resources: {
              notes:      "https://drive.google.com/drive/folders/1MC0TFghRw4dw0TnrfR1Ye2-6R5j5tCf4?usp=sharing",
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
        driveFolder: "https://drive.google.com/drive/folders/1wJVHmwQCUdGpJQXpC0XgbqXcLbAt12Ds?usp=sharing",
        courses: [
          {
            code: "STA201G3",
            name: "Mrs. N. Sathkunanathan",
            resources: {
              notes:      "https://drive.google.com/drive/folders/1kZQW5_VVMit7TZUzDLYx6vzt5vvwkRI4?usp=sharing",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
          {
            code: "STA202G2",
            name: "Mrs. J. Duwarakan",
            resources: {
              notes:      "https://drive.google.com/drive/folders/1Ucg5wVPyH4zm0A8Qs2Tt_GcRdGWdJbSX?usp=sharing",
              tutorials:  "#",
              icas:       "#",
              pastpapers: "#",
            },
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "https://drive.google.com/drive/folders/19046d9nFFsi3YCmVmT2dRiIF2xsYrhNS?usp=sharing",
        courses: [
          {
            code: "STA2xx",
            name: "Subject Name",          // ← update when confirmed
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
        driveFolder: "https://drive.google.com/drive/folders/1VAeEkGtQ946344uHuRhGAokj68-J1GLS?usp=drive_link",
        courses: [
          // Add courses once module codes are confirmed
          // {
          //   code: "STA301",
          //   name: "Lecturer Name",
          //   resources: { notes: "#", tutorials: "#", icas: "#", pastpapers: "#" },
          // },
        ],
      },
      sem2: {
        label: "2nd Semester",
        courses: [],
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

export default statistics;
