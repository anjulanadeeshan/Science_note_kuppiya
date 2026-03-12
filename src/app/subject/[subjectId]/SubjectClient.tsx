"use client";

import {
    ArrowLeft, Users, BookOpen, BarChart2,
    GraduationCap, Monitor, Zap, FlaskConical,
    Atom, Leaf, ChevronRight, X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    "pure-mathematics":    { name: "Pure Mathematics",    shortName: "PM",   color: "linear-gradient(135deg,#0891b2,#06b6d4)", glow: "rgba(8,145,178,.35)",   icon: BookOpen      },
    "applied-mathematics": { name: "Applied Mathematics", shortName: "AM",   color: "linear-gradient(135deg,#d97706,#f59e0b)", glow: "rgba(217,119,6,.35)",   icon: Zap           },
    "chemistry":           { name: "Chemistry",           shortName: "CHEM", color: "linear-gradient(135deg,#059669,#10b981)", glow: "rgba(5,150,105,.35)",   icon: FlaskConical  },
    "physics":             { name: "Physics",             shortName: "PHY",  color: "linear-gradient(135deg,#e11d48,#f43f5e)", glow: "rgba(225,29,72,.35)",   icon: Atom          },
    "biology":             { name: "Biology",             shortName: "BIO",  color: "linear-gradient(135deg,#16a34a,#4ade80)", glow: "rgba(22,163,74,.35)",   icon: Leaf          },
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

/* ── Component ────────────────────────────────────────────── */
export default function SubjectClient({ subjectId }: { subjectId: string }) {
    const router = useRouter();
    const [activeYear, setActiveYear] = useState<YearDef | null>(null);
    const [modalOpen,  setModalOpen ] = useState(false);

    const meta = subjectMeta[subjectId];

    if (!meta) {
        return (
            <div className="res-not-found">
                <p>Subject not found.</p>
                <button onClick={() => router.push("/")} className="res-back-btn">← Back to Home</button>
            </div>
        );
    }

    const SubjectIcon = meta.icon;

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
                <h1 className="home-title">{meta.name}</h1>
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
