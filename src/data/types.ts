/* ─────────────────────────────────────────────────────────
   Shared types for all subject resource data
   ───────────────────────────────────────────────────────── */

/** The four resource categories available for every course */
export type CategoryKey = "notes" | "tutorials" | "icas" | "pastpapers";

/**
 * Per-course resource URLs.
 * Use "#" for any category that is not yet available (shows "Coming Soon").
 */
export type CourseResources = {
  [K in CategoryKey]: string;
};

/**
 * A single module / paper within a semester.
 *
 *   code  – module code shown as the tag  e.g. "CS101"
 *   name  – lecturer name or module title e.g. "Introduction to Computing"
 *   resources – one Google Drive URL per category
 */
export type Course = {
  code: string;
  name: string;
  resources: CourseResources;
};

/**
 * One semester (Sem 1 or Sem 2) inside a year.
 *
 *   label       – human-readable label e.g. "1st Semester"
 *   driveFolder – optional link to the top-level Drive folder that
 *                 holds *all* notes for this semester. Shown in the
 *                 sidebar as a quick-access shortcut.
 *   courses     – ordered list of Course objects for this semester
 */
export type Semester = {
  label: string;
  driveFolder?: string;
  courses: Course[];
};

/**
 * One academic year.
 *
 *   label     – e.g. "1st Year"
 *   semesters – keyed by "sem1" | "sem2"
 */
export type AcademicYear = {
  label: string;
  semesters: Record<string, Semester>;
};

/**
 * Complete resource map for one subject.
 * Keys are year IDs: "1st-year" | "2nd-year" | "3rd-year" | "4th-year"
 */
export type SubjectData = Record<string, AcademicYear>;
