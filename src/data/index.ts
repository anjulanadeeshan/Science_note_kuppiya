/**
 * Central data registry
 *
 * Import subject data anywhere with:
 *   import { resourceData } from "@/data";
 *
 * To UPDATE a Google Drive link for a specific subject, open the
 * corresponding file in src/data/subjects/ and change the "#" to
 * the real URL.  No other files need to be touched.
 */

export type { CategoryKey, CourseResources, Course, Semester, AcademicYear, SubjectData } from "./types";

import computerScience    from "./subjects/computer-science";
import statistics         from "./subjects/statistics";
import pureMathematics    from "./subjects/pure-mathematics";
import appliedMathematics from "./subjects/applied-mathematics";
import chemistry          from "./subjects/chemistry";
import physics            from "./subjects/physics";
import biology            from "./subjects/biology";

import type { SubjectData } from "./types";

/** All subject resource data keyed by subject route ID */
export const resourceData: Record<string, SubjectData> = {
  "computer-science":    computerScience,
  "statistics":          statistics,
  "pure-mathematics":    pureMathematics,
  "applied-mathematics": appliedMathematics,
  "chemistry":           chemistry,
  "physics":             physics,
  "biology":             biology,
};
