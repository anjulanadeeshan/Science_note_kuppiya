/**
 * COMPUTER SCIENCE — resource data
 *
 * HOW TO ADD A GOOGLE DRIVE LINK
 * ───────────────────────────────
 * 1. Find the correct year  → "1st-year" / "2nd-year" / "3rd-year" / "4th-year"
 * 2. Find the correct semester → "sem1" / "sem2"
 * 3. Find (or add) the Course object with the right `code`
 * 4. Add or update resources in the `resources` array:
 *    - Each resource has: key (unique identifier), label (display name), url (Google Drive link)
 *    - Common keys: "notes", "tutorials", "icas", "pastpapers"
 *    - You can add custom categories like "graphics", "laravel", "projects", etc.
 *    - Use "#" or "" for any resource that is not ready yet — it will show "Coming Soon"
 *
 * FLEXIBLE RESOURCES:
 * Each course can have different resource types. Not all courses need all categories.
 * Example: Some courses may have only "notes" and "pastpapers", others might add "graphics"
 */

import type { SubjectData } from "../types";

const computerScience: SubjectData = {
  /* ── 1st Year ─────────────────────────────────────────── */
  "1st-year": {
    label: "1st Year",
    semesters: {
      sem1: {
        label: "1st Semester",
        driveFolder:
          "https://drive.google.com/drive/folders/1BSMiy5btPiGfFpif2tpShrUQS1QaupR8?usp=drive_link", // ← replace with the Sem-1 top-level Drive folder URL
        courses: [
          {
            code: "CSC101S3",
            name: "Foundations of Computer Science",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1ATBCtYXADi1vhsAGz89H3r_z5i4GE5gN?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1zlaerCGuXSHmUUWM4kGcuHa6Rn0MHEyE?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1Wc63JDr6n4g1GRhpJanUdZdBgi09If6m?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1qZTNnifweJZyoR38R5BkoYWwDey7QCwW?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC102S3",
            name: "Computer Programming I",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/19QEn8cJ91BUrNK2XCXOEuFeW_n6Vyf_e?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1tXRbGElr8tphiebzCLBDIBRF0AzuHn5v?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1KBff6S2cXc3WPeDJNkLI2ENcrwy5_3T4?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1J9S0XB8PJFUNJU4U1HlKZiB6QMLY-KuE?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC103S3",
            name: "Introduction to Computer Systems",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1Kgor7uDFpqEnTKokACk_E34USuVPznaF?usp=drive_link",
              },
              { key: "tutorials", label: "Tutorials", url: "" },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1fORtBhPNx7vgp3O6flKIJtkEg_EwsZvH?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1V81hy5BFnDNz0X-Zl1FT2mcYyW-by4UH?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC104S2",
            name: "Mathematics for Computing I",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1x2xs-u0AUq6DIuwzFKiUiQuM0RRcPzaa?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1rcgDfCX6KpE97Pwf1j6Ln1I-ibL_BXB_?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/file/d/1EC_VHGD9H9tXtTCxoouqnRbRTRgCyyfp/view?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1e-KpbhGGY9k9sjNrR0jWEQ8riWDbPxdV?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC105S3",
            name: "Statistics for Computing I",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/file/d/1mWzbmsYJaUNNEaMnCRz0WjthMxz6VSnj/view?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1pbdh8tY8wdgK7yJ7E3Ig9I7MIi69ghKm?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1pbdh8tY8wdgK7yJ7E3Ig9I7MIi69ghKm?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1kMEPG8Cmy0G4YMgGjBWFUZ5ydvtTxy76?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC107S2",
            name: "Multimedia Technologies",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/17RGq99vF2AMgQ1Tz2alRnWdx8-K5PujW?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1Vkx4AaP7QoXmkfbWejPGuWxlQxmjD0uJ?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1e---e3xCWp0Cuc8PExSmBw1fbw0W84Ao?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1eTlPyWu3d-rFQOXkSnW-jXgd4hOwH5dm?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC110S2",
            name: "Organisational Behaviour",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1Br0Cc5zReQm7O4sW5QRd_UFF1CZj6vOg?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1kP4vdv1zgwuiCez43Em7yJDXTZ6r-IE7?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/file/d/1RNkjRNKaDsVPV8tdkHPt4wj95N3X4iR7/view?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1tiqx2Z19Gyo_LyqI90oPbxpQvDOXwkcG?usp=drive_link",
              },
            ],
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder:
          "https://drive.google.com/drive/folders/1WPKXy4Y59QoBy-GvuXbj41OcmTLVeGzE?usp=drive_link",
        courses: [
          {
            code: "CSC102S3",
            name: "Computer Programming I",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1MxvUCD_gKEp63E0o1qonccqxcjtgWiRY?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/18t5ANwwhLhRX8Wy92kvaa-h8Ov9Y1hnf?usp=drive_link",
              },
              { key: "icas", label: "ICAs", url: "#" },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1PkZ4rrL5yjQ0GI1mjSLjLrlrabkJltLy?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC106S3",
            name: "Human Computer Interaction",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1l4vyscs6j_113DOMa64SzGQeKXM-ZxIS?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1YbjK8FpwGfhKj4wNqBLThCp92eGKAjUl?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1CfxzM1PcuekCC40EpTKP-oh1Vd3Dbh3B?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1-N1O6xTrjqX37heXC-pcxTd-T47p5kg-?usp=drive_link",
              },
            ],
          },

          {
            code: "CSC108S2",
            name: "Design of Algorithms",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1OVYoRTn7oSnxgAaKCrQYKHs7ZWbbgX-j?usp=drive_link",
              },
              { key: "tutorials", label: "Tutorials", url: "#" },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1_Wk3IchpJpjmMcwwglPD9aegPWam82zf?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/file/d/1jrms_syb-kkhIG1c89_zSjdygHt3ULRw/view?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC109S2",
            name: "Introduction to Computer Security and Cryptography",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1HgJ7DKxe4QtDFAGKV4D9C7YAQNY1NaMJ?usp=drive_link",
              },
              { key: "tutorials", label: "Tutorials", url: "#" },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1Sz40tC9l_gQVHspQWP8xCsRPAACGcEuO?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1P5nIqeBMbr2oAecVHNkHr0P19ksUIwdg?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC111S2",
            name: "Mathematics for Computing II",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1DO34WeMferLz9evcjCEOzH3e4FXpO8iR?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/file/d/1aRFLozMcFIfU6nB-R7TrjVRJcrPdO67k/view?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1pj03TV1oQVX0F0HqaHeD6DEmEKQaS5Ht?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1wtfGp8v_iDLona5zNkkqlgurzUtIvxzD?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC112S3",
            name: "Statistics for Computing II",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1V-osattll_w1g7MGHbFG9olkl_wXJKVa?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1BF4dyJZQZkXO5UenU1k0zh6r5fXzteIU?usp=drive_link",
              },
              { key: "icas", label: "ICAs", url: "#" },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/17a2M8w5KMYR-DMOmfQ4uo5bJv4deNJGn?usp=drive_link",
              },
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
        driveFolder:
          "https://drive.google.com/drive/folders/1NSrVXpM-RljSDkDHHnArt41iHeoGjMYw?usp=drive_link",
        courses: [
          {
            code: "CSC201S2",
            name: "Database Systems Concepts and Design",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/14iHKLbBOwjaqT_s4bNvUFVxZ2xXKaZuk?usp=drive_link",
              },
              { key: "tutorials", label: "Tutorials", url: "#" },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1No9yEcPBG16kVZeN3-JzlU1Ub6M8yv1w?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1yr--b5SXJ1DEJf9uGaE9ZSzXBIECoOrg?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC202S2",
            name: "Computer Programming II",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/17V4-ugsyVcKwia2SNUPqpCclie3b132e?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1ENEWZWQe_Vhmpk8pPVXPxvtRqje-8IJE?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1gSxudPOLPhm6tASsOmNzgJlmmdfnZDZZ?usp=drive_link",
              },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC205S2",
            name: "Software Engineering",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1xInm5JI7xtQtxINVLgcoyQNBbrHbuKTE?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1BnKF5_YfvjBGKokF5p0jDrmKAp8WbrfE?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1b0csE70mJTOSOJGv_pvYCQksCrac54vZ?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/159qdKw5MHj1cZ9KQ7wudwE_lXFey7_W1?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC206S4",
            name: "Mathematics for Computing III",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1CQTbVvCGBvSkS3J-_DMOSdGjTqWcRcGR?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/14rhQ-rVvKB4OALM7s3sPAyn_C_xKBvfZ?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/13emqrNu6Ebde2qvBmAYiPeQK2NcYYiXW?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/16h4womaRCzVGQI6GKCWEWmX7VueauieE?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC207S3",
            name: "Computer Architecture",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1-Zg3loUpbfZhQbCIEBLONRzE3RW6dxq1?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1AghwVmMDzVp9-eZs1qWZpfJsOiyd73kq?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1CQmTy68WaOwt-AsxrPo8Egd6NH8-FWvU?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1n3PQFuhhaEHKeDdhWXdBqcrPFJNg8PgC?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC208S3",
            name: "Concepts of Programming Languages",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1A3Fe8wh3sK_lhtqCyxxWhjwmfqbyLOZ1?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1n02uLb6f5eEz9KiBiKNaUu_B8myESSOT?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/file/d/13jHrO1inZlN-scUhdaeD98rDjG02Lj_g/view?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/18LmE6exnSaOK_z-g1e9Y4myJG0xmxt6M?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC211S2",
            name: "Emerging Trends in Computer Science",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1A3Fe8wh3sK_lhtqCyxxWhjwmfqbyLOZ1?usp=drive_link",
              },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder:
          "https://drive.google.com/drive/folders/1ccmacoX1YqoNNsxPiWnRTJzwAckXNoxN?usp=drive_link",
        courses: [
          {
            code: "CSC202S2",
            name: "Computer Programming II",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1CYbn4sZDalm2XMch91u3y85a6O0vsQsy?usp=drive_link",
              },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1kvSKr1TXoS2EWS1BD9ySdi2KauX9jpeB?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC203S2",
            name: "Operating Systems",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1RyIOySEbTPF62pJPSL8qJOzr_N5rWVIa?usp=drive_link",
              },
              { key: "tutorials", label: "Tutorials", url: "#" },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1WrC8cH5J-STUWm8vNfSWwKgRF4XKh0zD?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1jenZ3CJNaYlfiNipMqWVf7nRRYs8Ek8v?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC204S2",
            name: "Data Structures & Algorithms",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/13tPglGlVweMTREXE22P9CMPSv8bynNwN?usp=drive_link",
              },
              { key: "tutorials", label: "Tutorials", url: "#" },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1cWVcBsMmBbzneHGMZjxkSbSBsxDTSufI?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1TRyZ_xmaeyeeIzyeu4RLVb4AUnaBzKIg?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC209S3",
            name: "Bioinformatics",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1RYF4ZwMI6W00stMpjjKWQcYgKSP6HKNp?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1NmEvO1UuTbmjj1XTGS2SH18pnZ5uqEga?usp=drive_link",
              },
              { key: "icas", label: "ICAs", url: "#" },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1lUvh1K-y7oRe47cGsATMnY6_xsVJMh-5?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC210S3",
            name: "Web Technologies",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1tI5DvSYj5Cb0ltW4ntbZbyKAl-8qssH5?usp=drive_link",
              },
              {
                key: "tutorials",
                label: "Tutorials",
                url: "https://drive.google.com/drive/folders/1ftfF2O-od6Gi17AktNnVwdHbLAmeXrNk?usp=drive_link",
              },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/15h0uxifX-Mi9fCJr1_ObdxRH7-8KAZcl?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/1iccvj1qtQfPFoExeukkuQ1UcXo_Xje4_?usp=drive_link",
              },
            ],
          },
          {
            code: "CSC211S2",
            name: "Emerging Trends in Computer Science",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1ow98rETt6vvTNeCSMRprMofwg5Yc5g5W?usp=drive_link",
              },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC212S2",
            name: "Professional Practice",
            resources: [
              {
                key: "notes",
                label: "Notes",
                url: "https://drive.google.com/drive/folders/1igR34aCD3qybUScZ_0dnDdqx0040ZKGC?usp=drive_link",
              },
              { key: "tutorials", label: "Tutorials", url: "#" },
              {
                key: "icas",
                label: "ICAs",
                url: "https://drive.google.com/drive/folders/1aSQb462McPUb3APs-srjPP2380K0x6xV?usp=drive_link",
              },
              {
                key: "pastpapers",
                label: "Past Papers",
                url: "https://drive.google.com/drive/folders/12RyJOC8VkLZZs4MpEgShnL0PT1gRPmHe?usp=drive_link",
              },
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
        driveFolder: "#",
        courses: [
          {
            code: "CSC301S3",
            name: "Rapid Application Development",
            resources: [
              { key: "full_resources", label: "Full Resourses", url: "https://drive.google.com/drive/folders/1otBsLnKUsmXVyhguCNRmlQDncTJPQZSq?usp=drive_link" },
              { key: "lecture_notes", label: "Lecture notes", url: "https://drive.google.com/drive/folders/1Bm49aoOYMjtpM4fcftecGL6bVKskoWFu?usp=drive_link" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1J1VsvOVR-kEsySxVJCQA0OwAMLNvAdx1?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1IlwLfsOYTKKm_neQN9FS4kGARvGArp7I?usp=drive_link" },
            ],
          },  
          {
            code: "CSC302S2",
            name: "Computer Programming III",
            resources: [
              { key: "full_resources", label: "Full Resourses", url: "https://drive.google.com/drive/folders/1kELBATBeOYzAs42OfutFSxYgZS3HKOLE?usp=drive_link" },
              { key: "graphics", label: "Computer Graphics", url: "https://drive.google.com/drive/folders/1tb2PQuJioFD7K562T3Hl-2rmoI3fzXfm?usp=drive_link" },
              { key: "laravel", label: "Laravel", url: "https://drive.google.com/drive/folders/1y7Uel_JQKKeJEqB7TELdwTIbwAcONMsX?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC303S2",
            name: "Data Communication and Computer Networks",
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/17GP0bQ4IsltYDj4R1a9WCeEUZvHy-aho?usp=drive_link" },
              { key: "hand_written", label: "Hand written notes", url: "https://drive.google.com/drive/folders/1VaP5QxZmtO02fTcvuFgBG-Pl8ibdw6Rg?usp=drive_link" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1HovEYwgr_vysGgVfZo1oZINjiPPbvrN_?usp=drive_link" },
               { key: "additional", label: "Additional resourses", url: "https://drive.google.com/drive/folders/1VaP5QxZmtO02fTcvuFgBG-Pl8ibdw6Rg?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC305S2",
            name: "Graphics and Visual Computing",
            resources: [
              { key: "full_resources", label: "Full Resourses", url: "https://drive.google.com/drive/folders/1LYe9JGIA8yqkI8lIWx6acZFSoX3EtBDH?usp=drive_link" },
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1C_Tzy5zwInM9jbSdKI9qzThL80iYcnbw?usp=drive_link" },
              { key: "hand_written", label: "Hand written notes", url: "#" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1l6qdhOe-aQg41e2wEd3n21qxjsAcxWQG?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC307S3",
            name: "Advanced Topics in Computer Networks",
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1pEZrCTxISG4BPYhrYMOgX6tw2sgJthxf?usp=drive_link" },
              { key: "hand_written", label: "Hand written notes", url: "https://drive.google.com/drive/folders/1b7tFovc2KR0A6CBalloZmlbNik_YZUl1?usp=drive_link" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1x4i0k03oewEJnRXpoTj1BlSWjsvwVfJe?usp=drive_link" },
              { key: "additional", label: "Additional resourses", url: "https://drive.google.com/drive/folders/1b7tFovc2KR0A6CBalloZmlbNik_YZUl1?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC310S3",
            name: "Image Processing and Computer Vision",
            resources: [
              { key: "notes", label: "Notes", url: "https://drive.google.com/drive/folders/1RFVG4gM91KBxB1j0GeyOoIyoYvijF7PK?usp=drive_link" },
              { key: "practicals", label: "MatLab", url: "https://drive.google.com/drive/folders/10Jgz51J8NS18mPW5zMnEWxbxJwoXE0n7?usp=drive_link" },
              { key: "icas", label: "ICAs", url: "https://drive.google.com/drive/folders/1spYUVeAnfztj_wXoPuu-XLScAtByGGZ5?usp=drive_link" },
              { key: "pastpapers", label: "Past Papers", url: "https://drive.google.com/drive/folders/1S7PBEj-k14JZVjj7hUG1VaQqBVid3oHS?usp=drive_link" },
            ],
          },
          {
            code: "CSC311S3",
            name: "Machine Learning",
            resources: [
              { key: "notes", label: "Notes chapter 1&2", url: "https://drive.google.com/drive/folders/10ZkagC9xb5XDYLS4It2J-GRnJfw5Ad-x?usp=drive_link" },
              { key: "hand_written_notes", label: "Hand written notes", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          }
        ],
      },
      sem2: {
        label: "2nd Semester",
        driveFolder: "#",
        courses: [
          {
            code: "CSC311S3",
            name: "Machine Learning",
            resources: [
              { key: "notes", label: "Notes chapter 1&2", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC312S3",
            name: "Mobile Computing",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC308S3",
            name: "Artificial Intelligence",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC309S3",
            name: "High Performance Computing",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC306S3",
            name: "Advanced Database Design and Systems",
            resources: [
              { key: "notes", label: "Notes", url: "#" },
              { key: "tutorials", label: "Tutorials", url: "#" },
              { key: "icas", label: "ICAs", url: "#" },
              { key: "pastpapers", label: "Past Papers", url: "#" },
            ],
          },
          {
            code: "CSC304S3",
            name: "Team Software Project",
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
