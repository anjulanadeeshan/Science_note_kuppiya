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
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1vPhkiE-c6WOsHqSlm5PR_uWKPcbAMtXD?usp=drive_link" },
              { 
                key: "Additional-resources", 
                label: "Additional Resources", 
                url: "https://drive.google.com/file/d/1K87tkj2KOYRht5atRSnBDKiIwBe9U4t-/view?usp=drive_link",
                description: "This is only an additional resourse recommended by 48th Booster. This will only help to understand core concepts, don't depend only on this resourse."
              },
              { key: "tutorials", label: "Tutorials", url: "https://drive.google.com/drive/folders/1Jm2Y4se3tZ_svpqdlIUcw63uz41By_DN?usp=drive_link"},
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1ZlDqq50zSvViklTao1MjN3F_z_RbPiRj?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1DXI4LB5hyYqpsvobTZulK5ygpuOauCf_?usp=drive_link" },
            ],
          },
          {
            code: "STA102G2",
            name: "Dr. S. Arumairajan",
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1VBFNsp0KNyO33wSNg9wOviv57PdOQHU1?usp=sharing", description: "Currently we don't have notes for this subject. In the near future we will supply the notes" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1o1aRiInNEyrtLXOTJlSNqgSoFQqB9aPt?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1CUaRewDLaJqja9cBdIXn1DNvZO3046oE?usp=drive_link" },
              { key: "tutorials", label: "Tutorials", url: "https://drive.google.com/drive/folders/1K-5WLZSViSB2qIqvnUTsxOomWNIrYTb0?usp=drive_link" },
            ],
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
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1C61KAYhfGVxzq6ucC5x7g_Xi_Q3rQccu?usp=drive_link" },
              { key: "additional", label: "Additional", url: "https://drive.google.com/drive/folders/1CXZIKRIWpubFAP2DQgiOcJdI0Kdxwll7?usp=drive_link" },
              { key: "tutorials", label: "Tutorials", url: "https://drive.google.com/drive/folders/1EsjjW3UFxEH5Y7a4F7tqz6l2C7Bgya1S?usp=drive_link" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1Xa07Oyp6EcG6XijANgin4fVnA3q6bJbO?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1wZAs1NjA9XcMQgEhn3SD0smINszcKvuC?usp=drive_link" },
            ],
          },
          {
            code: "STA104G2",
            name: "Mrs. N. Sathkunanathan",
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1XLDhn3303vCbZQYglCmdCa62JZ9gNj8_?usp=drive_link" },
              { key: "tutorials", label: "Tutorials", url: "https://drive.google.com/drive/folders/1u9Le2_Ksq2jVOZ5R_5V_SqEpc40Iu0b6?usp=drive_link" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1G5GTRYufoza1op8ez9MJ8DiNxdwH98T4?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1Vn_f2EOhzkLYE4hryrIn-02H5BvlypmL?usp=drive_link" },
            ],
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
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1C7oT7ggKIYaPSXFmTOYUI5wU8izxfkY2?usp=drive_link" },
              { key: "tutorials", label: "Tutorials", url: "https://drive.google.com/drive/folders/1lUkvFms2Rx0r3iJOJGy4L4xneuwNnt7g?usp=drive_link" },
              { key: "additional", label: "Additional", url: "https://drive.google.com/drive/folders/1DyCcX-2vEfttOCamSxKprAuktbUcgYwQ?usp=drive_link" },
              { key: "ICAs", label: "ICAs", url: "https://drive.google.com/drive/folders/1-XxEmFM7jhoa9CMDBqZE5RcCgJ3hSGao?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1GXOOAHyc0rjPDY8jfJHQdwxZxoT67WDa?usp=drive_link" },
            ],
          },
          {
            code: "STA202G2",
            name: "Mrs. J. Duwarakan",
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1-VQoraViIYWW8KhicNAF4_WQY3ITCZEW?usp=drive_link" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1G-BVlCnMA8NZie5XRj-vX849tYmBXZQN?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1IyjqIyiaLF1rTKiWN8VC_6_BuWmG3ybX?usp=drive_link" },
            ],
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "https://drive.google.com/drive/folders/19046d9nFFsi3YCmVmT2dRiIF2xsYrhNS?usp=sharing",
        courses: [
          {
            code: "STA203G3",
            name: "Dr. R. Tharshan",          // ← update when confirmed
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1rLJzu_DfUTq2AvgkxbczojV7lLfRCQr6?usp=drive_link" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1eINXBvhj4wRktC1_2suS1vfVc48mNWrN?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1vsA2Kiz4GxVeKo5o-c4iF67MiqstVF7V?usp=drive_link" },
            ],
          },
          {
            code: "STA204G3",
            name: "Mr. A. Laheetharan",          // ← update when confirmed
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1pAaYtBvOGPy6QnAWRYqD2YkcMNEN14Bh?usp=drive_link" },
              { key: "tutorials", label: "Tutorials", url: "https://drive.google.com/drive/folders/1-PmKZ8eHApCq_U0kG2OBQxrtGq-NXHaO?usp=drive_link" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1yL1ZqMm3o8rJgH07Q0G_exAwG5uzWuHf?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1K6QMZpd9IQd9_00lsDUG9Fua4_N2rBjg?usp=drive_link" },
            ],
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
          //   resources: [
          //     { key: "notes", label: "Notes", url: "#" },
          //     { key: "tutorials", label: "Tutorials", url: "#" },
          //     { key: "icas", label: "ICAs", url: "#" },
          //     { key: "pastpapers", label: "Past Papers", url: "#" },
          //   ],
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
