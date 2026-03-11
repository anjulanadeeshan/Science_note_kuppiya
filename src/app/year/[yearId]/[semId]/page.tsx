// Server component — no "use client" here so generateStaticParams works
import YearSemClient from "./YearSemClient";

/* All valid routes for static export */
export function generateStaticParams() {
    return [
        { yearId: "1st-year", semId: "sem1" },
        { yearId: "1st-year", semId: "sem2" },
        { yearId: "2nd-year", semId: "sem1" },
        { yearId: "2nd-year", semId: "sem2" },
        { yearId: "3rd-year", semId: "sem1" },
        { yearId: "3rd-year", semId: "sem2" },
    ];
}

type Props = {
    params: Promise<{ yearId: string; semId: string }>;
};

export default async function YearSemPage({ params }: Props) {
    const { yearId, semId } = await params;
    return <YearSemClient yearId={yearId} semId={semId} />;
}
