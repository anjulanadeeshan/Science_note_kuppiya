"use client";

import {
    ArrowLeft, Users, BookOpen, BarChart2,
    GraduationCap, Monitor, Zap, FlaskConical,
    Atom, Leaf, Fish, ChevronRight, X, Search,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { resourceData } from "@/data";

/* ── Subject meta (name / colour / icon) ─────────────────── */
export const subjectMeta: Record<string, {
    name: string;
    shortName: string;
    color: string;
    glow: string;
    icon: React.ElementType;
}> = {
    "computer-science":    { name: "Computer Science",    shortName: "CS",   color: "linear-gradient(135deg,#1e90ff,#00cfff)", glow: "rgba(30,144,255,.35)",  icon: Monitor      },
    "statistics":          { name: "Statistics",          shortName: "STAT", color: "linear-gradient(135deg,#7c3aed,#a855f7)", glow: "rgba(124,58,237,.35)",  icon: BarChart2     },
    "pure-mathematics":    { name: "Pure Mathematics",    shortName: "PMM",   color: "linear-gradient(135deg,#0891b2,#06b6d4)", glow: "rgba(8,145,178,.35)",   icon: BookOpen      },
    "applied-mathematics": { name: "Applied Mathematics", shortName: "AMM",   color: "linear-gradient(135deg,#d97706,#f59e0b)", glow: "rgba(217,119,6,.35)",   icon: Zap           },
    "physics":             { name: "Physics",             shortName: "PHY",  color: "linear-gradient(135deg,#e11d48,#f43f5e)", glow: "rgba(225,29,72,.35)",   icon: Atom          },
    "chemistry":           { name: "Chemistry",           shortName: "CHE", color: "linear-gradient(135deg,#059669,#10b981)", glow: "rgba(5,150,105,.35)",   icon: FlaskConical  },
    "boteny":              { name: "Boteny",              shortName: "BOT",  color: "linear-gradient(135deg,#16a34a,#4ade80)", glow: "rgba(22,163,74,.35)",   icon: Leaf          },
    "fisheries":           { name: "Fisheries",           shortName: "FIS",  color: "linear-gradient(135deg,#0284c7,#38bdf8)", glow: "rgba(2,132,199,.35)",    icon: Fish          },
};

/* ── Year / semester definitions (same for all subjects) ──── */
type YearDef = {
    id: string;
    label: string;
    icon: React.ElementType;
    semesters: { id: string; label: string }[];
    disabled?: boolean;
};

const years: YearDef[] = [
    { id: "1st-year", label: "1st Year", icon: Users,          semesters: [{ id: "sem1", label: "1st Semester" }, { id: "sem2", label: "2nd Semester" }] },
    { id: "2nd-year", label: "2nd Year", icon: BookOpen,       semesters: [{ id: "sem1", label: "1st Semester" }, { id: "sem2", label: "2nd Semester" }] },
    { id: "3rd-year", label: "3rd Year", icon: BarChart2,      semesters: [{ id: "sem1", label: "1st Semester" }, { id: "sem2", label: "2nd Semester" }] },
    { id: "4th-year", label: "4th Year", icon: GraduationCap,  semesters: [{ id: "sem1", label: "1st Semester" }, { id: "sem2", label: "2nd Semester" }], disabled: true },
];

const hasAvailableResource = (url?: string) => !!url && url !== "#";

/* ── Component ────────────────────────────────────────────── */
export default function SubjectClient({ subjectId }: { subjectId: string }) {
    const router = useRouter();
    const [activeYear, setActiveYear] = useState<YearDef | null>(null);
    const [modalOpen,  setModalOpen ] = useState(false);

    const meta = subjectMeta[subjectId];
    const subjectYears = resourceData[subjectId];

    if (!meta) {
        return (
            <div className="res-not-found">
                <p>Subject not found.</p>
                <button onClick={() => router.push("/")} className="res-back-btn">← Back to Home</button>
            </div>
        );
    }

    const SubjectIcon = meta.icon;

    const availabilityByYear = years.map((yearDef) => {
        const yearData = subjectYears?.[yearDef.id];

        const semesters = yearDef.semesters.map((semDef) => {
            const semesterData = yearData?.semesters?.[semDef.id];
            const courses = semesterData?.courses ?? [];
            const availableCourses = courses.filter((course) =>
                course.resources.some((resource) => hasAvailableResource(resource.url))
            );

            return {
                id: semDef.id,
                label: semDef.label,
                total: courses.length,
                available: availableCourses.length,
                codes: availableCourses.map((course) => course.code),
            };
        });

        const totalSubjects = semesters.reduce((sum, sem) => sum + sem.total, 0);
        const availableSubjects = semesters.reduce((sum, sem) => sum + sem.available, 0);

        return {
            id: yearDef.id,
            label: yearDef.label,
            totalSubjects,
            availableSubjects,
            semesters,
        };
    });

    const openModal = (year: YearDef) => {
        if (year.disabled) return;
        setActiveYear(year);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setTimeout(() => setActiveYear(null), 300);
    };

    const goToSem = (semId: string) => {
        if (!activeYear) return;
        closeModal();
        router.push(`/subject/${subjectId}/${activeYear.id}/${semId}`);
    };

    return (
        <div className="home-page subj-year-page">

            {/* ── Top bar ──────────────────────── */}
            <header className="subj-topbar">
                <button className="res-back-btn" onClick={() => router.push("/")}>
                    <ArrowLeft size={16} /> Back to Home
                </button>
                <div className="subj-topbar-badge"
                    style={{ background: meta.color, boxShadow: `0 4px 16px ${meta.glow}` }}>
                    <SubjectIcon size={15} strokeWidth={1.8} />
                    <span>{meta.shortName}</span>
                </div>
            </header>

            {/* ── Hero ─────────────────────────── */}
            <section className="home-hero subj-hero">
                <div
                    className="subj-hero-icon"
                    style={{ background: meta.color, boxShadow: `0 12px 36px ${meta.glow}` }}
                >
                    <SubjectIcon size={42} strokeWidth={1.3} />
                </div>
                <h1 className="home-title" style={{ background: meta.color, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{meta.name}</h1>
                <p className="home-subtitle">Select your academic year to access resources</p>
            </section>

            {/* ── Year grid ────────────────────── */}
            <section className="home-subject-section">
                <div className="home-section-header">
                    <h2 className="home-section-title">Select Your Year</h2>
                    <p className="home-section-desc">Choose your year to browse semester resources</p>
                </div>

                <div className="subj-year-grid">
                    {years.map((year) => {
                        const YearIcon = year.icon;
                        return (
                            <button
                                key={year.id}
                                id={`year-${year.id}`}
                                onClick={() => openModal(year)}
                                disabled={year.disabled}
                                className={`home-subject-card subj-year-card${year.disabled ? " home-subject-card--disabled" : ""}`}
                                style={{ "--card-glow": meta.glow } as React.CSSProperties}
                            >
                                {year.disabled && <span className="home-coming-soon">COMING SOON</span>}
                                <div
                                    className="home-subject-icon"
                                    style={{ background: meta.color, boxShadow: `0 8px 24px ${meta.glow}` }}
                                >
                                    <YearIcon size={32} strokeWidth={1.5} />
                                </div>
                                <span className="home-subject-name">{year.label}</span>
                                <span className="home-subject-tag">
                                    {year.semesters.length} Semesters
                                </span>
                                <ChevronRight size={16} className="home-subject-arrow" />
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* ── Availability overview ── */}
            <section className="subj-availability-section">
                <div className="home-section-header">
                    <h2 className="home-section-title">Resource Availability Overview</h2>
                    <p className="home-section-desc">
                        Quick preview of which subject resources are currently available in each semester.
                    </p>
                </div>

                <div className="subj-availability-grid">
                    {availabilityByYear.map((yearInfo) => (
                        <article key={yearInfo.id} className="subj-availability-card">
                            <div className="subj-availability-head">
                                <h3>{yearInfo.label}</h3>
                                <span className="subj-availability-count">
                                    {yearInfo.availableSubjects}/{yearInfo.totalSubjects || 0} Available
                                </span>
                            </div>

                            <div className="subj-availability-semesters">
                                {yearInfo.semesters.map((semInfo) => (
                                    <div key={semInfo.id} className="subj-availability-sem-item">
                                        <div className="subj-availability-sem-top">
                                            <span>{semInfo.label}</span>
                                            <span className="subj-availability-sem-count">
                                                {semInfo.available}/{semInfo.total || 0}
                                            </span>
                                        </div>

                                        {semInfo.codes.length > 0 ? (
                                            <div className="subj-availability-codes">
                                                {semInfo.codes.map((code) => (
                                                    <span key={code} className="subj-availability-code-pill">{code}</span>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="subj-availability-empty">No resources published yet</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ── Semester modal ───────────────── */}
            {modalOpen && activeYear && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-card modal-open" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal} aria-label="Close">
                            <X size={18} />
                        </button>

                        <div className="modal-icon-wrapper"
                            style={{ background: meta.color, boxShadow: `0 10px 28px ${meta.glow}` }}>
                            {(() => { const YI = activeYear.icon; return <YI size={30} strokeWidth={1.5} />; })()}
                        </div>
                        <h2 className="modal-title">{activeYear.label}</h2>
                        <p className="modal-subtitle">Select your semester</p>

                        <div className="semester-grid">
                            {activeYear.semesters.map((sem) => (
                                <button
                                    key={sem.id}
                                    className="semester-btn"
                                    onClick={() => goToSem(sem.id)}
                                >
                                    <span className="sem-label">{sem.label}</span>
                                    <ChevronRight size={18} className="sem-arrow" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* ── Footer ───────────────────────── */}
            <footer className="home-footer">
                <p className="home-footer-disclaimer">
                    This platform is dedicated strictly to educational purposes.
                </p>
                <div className="home-footer-brand">
                    <p className="home-footer-dev">DEVELOPED BY</p>
                    <p className="home-footer-team">TEAM ASGARD</p>
                    <p className="home-footer-batch">48TH BATCH UOJ SCIENCE</p>
                </div>
            </footer>
        </div>
    );
}
