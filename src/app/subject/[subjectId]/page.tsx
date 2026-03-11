import SubjectClient from "./SubjectClient";

export function generateStaticParams() {
    return [
        { subjectId: "computer-science" },
        { subjectId: "statistics" },
        { subjectId: "pure-mathematics" },
        { subjectId: "applied-mathematics" },
        { subjectId: "chemistry" },
        { subjectId: "physics" },
        { subjectId: "biology" },
    ];
}

type Props = {
    params: Promise<{ subjectId: string }>;
};

export default async function SubjectPage({ params }: Props) {
    const { subjectId } = await params;
    return <SubjectClient subjectId={subjectId} />;
}
