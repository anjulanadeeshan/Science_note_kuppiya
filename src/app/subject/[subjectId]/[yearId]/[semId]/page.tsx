import SubjectSemClient from "./SubjectSemClient";

/* Pre-render every subject × year × semester combination */
export function generateStaticParams() {
    const subjects = [
        "computer-science", "statistics", "pure-mathematics",
        "applied-mathematics", "chemistry", "physics", "biology",
    ];
    const years = ["1st-year", "2nd-year", "3rd-year", "4th-year"];
    const sems  = ["sem1", "sem2"];

    const params: { subjectId: string; yearId: string; semId: string }[] = [];
    for (const subjectId of subjects)
        for (const yearId of years)
            for (const semId of sems)
                params.push({ subjectId, yearId, semId });
    return params;
}

type Props = {
    params: Promise<{ subjectId: string; yearId: string; semId: string }>;
};

export default async function SubjectSemPage({ params }: Props) {
    const { subjectId, yearId, semId } = await params;
    return <SubjectSemClient subjectId={subjectId} yearId={yearId} semId={semId} />;
}
