"use client";

import {
    ArrowLeft, BookOpen, GraduationCap,
    FileText, FileCheck, FolderOpen,
    ExternalLink, Search, ChevronRight, Home,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { resourceData } from "@/data";
import type { CategoryKey, Course } from "@/data";
import { subjectMeta } from "../../SubjectClient";

/* ── Default icon mapping for common resource types ──────── */
const getResourceIcon = (key: string): React.ElementType => {
    const iconMap: Record<string, React.ElementType> = {
        notes: BookOpen,
        tutorials: GraduationCap,
        icas: FileCheck,
        pastpapers: FileText,
    };
    return iconMap[key.toLowerCase()] || BookOpen;
};

/* ── Resource Page Component ─────────────────────────────── */
export default function SubjectSemClient({
    subjectId, yearId, semId,
}: { subjectId: string; yearId: string; semId: string }) {

    const router = useRouter();
    const [activeCat,    setActiveCat   ] = useState<string>("");
    const [searchQuery,  setSearchQuery ] = useState("");
    const [activeCourse, setActiveCourse] = useState<Course | null>(null);

    const meta         = subjectMeta[subjectId];
    const subjectYears = resourceData[subjectId];
    const year         = subjectYears?.[yearId];
    const sem          = year?.semesters[semId];

    // Get available resource categories from the active course
    const availableCategories = activeCourse?.resources || [];
    
    // Set initial active category when course changes
    useEffect(() => {
        if (activeCourse && availableCategories.length > 0) {
            const currentCatExists = availableCategories.find(c => c.key === activeCat);
            if (!activeCat || !currentCatExists) {
                setActiveCat(availableCategories[0].key);
            }
        } else if (!activeCourse) {
            setActiveCat("");
        }
    }, [activeCourse, availableCategories, activeCat]);

    if (!meta || !year || !sem) {
        return (
            <div className="res-not-found">
                <p>Page not found.</p>
                <button onClick={() => router.push("/")} className="res-back-btn">← Home</button>
            </div>
        );
    }

    const SubjectIcon = meta.icon;
    const currentCat  = availableCategories.find((c) => c.key === activeCat) || availableCategories[0];

    const filteredCourses = searchQuery.trim()
        ? sem.courses.filter((c) =>
            c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : sem.courses;

    /* Render a resource card for the active course + category */
    const renderResourceCard = (course: Course) => {
        const resource = course.resources.find(r => r.key === activeCat);
        const url      = resource?.url || "#";
        const isSoon   = !url || url === "#" || url === "";
        return (
            <a
                href={!isSoon ? url : undefined}
                target={!isSoon ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`res-drive-card${isSoon ? " res-drive-card--soon" : ""}`}
                onClick={isSoon ? (e) => e.preventDefault() : undefined}
            >
                <div className="res-drive-icon" style={{ background: meta.color }}>
                    <FolderOpen size={36} strokeWidth={1.2} />
                </div>
                <div className="res-drive-info">
                    <span className="res-drive-label">{course.code} — {resource?.label || activeCat}</span>
                    <span className="res-drive-sub">
                        {isSoon ? "Coming Soon" : "Google Drive →"}
                    </span>
                </div>
                {!isSoon && <ExternalLink size={20} className="res-drive-arrow" />}
            </a>
        );
    };

    return (
        <div className="res-shell">
            {/* ── Top Bar ───────────────────────── */}
            <header className="res-topbar">
                <button className="res-back-btn" onClick={() => router.push(`/subject/${subjectId}`)}>
                    <ArrowLeft size={16} /> {meta.name}
                </button>

                <div className="res-search-wrap">
                    <Search size={16} className="res-search-icon" />
                    <input
                        type="text"
                        placeholder="Search subjects…"
                        className="res-search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="res-subject-badge"
                    style={{ background: meta.color, boxShadow: `0 4px 16px ${meta.glow}` }}>
                    <SubjectIcon size={15} strokeWidth={1.8} />
                    <span>{meta.shortName}</span>
                </div>
            </header>

            <div className="res-body">
                {/* ── Sidebar ───────────────────── */}
                <aside className="res-sidebar">
                    <div className="res-sidebar-subject">
                        <div className="res-sidebar-subject-icon"
                            style={{ background: meta.color, boxShadow: `0 6px 18px ${meta.glow}` }}>
                            <SubjectIcon size={22} strokeWidth={1.5} />
                        </div>
                        <div>
                            <p className="res-sidebar-subject-name">{meta.name}</p>
                            <p className="res-sidebar-subject-tag">{year.label} · {sem.label}</p>
                        </div>
                    </div>

                    {/* Resource nav — only visible once a course is selected */}
                    {activeCourse ? (
                        <>
                            <h2 className="res-sidebar-title">RESOURCES</h2>
                            <nav className="res-sidebar-nav">
                                {availableCategories.map((cat) => {
                                    const CatIcon = getResourceIcon(cat.key);
                                    return (
                                        <button
                                            key={cat.key}
                                            id={`nav-${cat.key}`}
                                            className={`res-nav-item${activeCat === cat.key ? " res-nav-item--active" : ""}`}
                                            onClick={() => setActiveCat(cat.key)}
                                        >
                                            <CatIcon size={17} strokeWidth={1.7} />
                                            {cat.label}
                                        </button>
                                    );
                                })}
                            </nav>

                            {/* Drive folder shortcut — only when available */}
                            {sem.driveFolder && sem.driveFolder !== "#" && (
                                <>
                                    <h2 className="res-sidebar-title" style={{ marginTop: "1rem" }}>FOLDER</h2>
                                    <a
                                        href={sem.driveFolder}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="res-nav-item res-nav-folder-link"
                                    >
                                        <FolderOpen size={17} strokeWidth={1.7} />
                                        All Notes
                                        <ExternalLink size={12} style={{ marginLeft: "auto" }} />
                                    </a>
                                </>
                            )}
                        </>
                    ) : (
                        /* Prompt shown before any course is chosen */
                        <p className="res-sidebar-hint">
                            Select a subject to view its resources
                        </p>
                    )}
                </aside>

                {/* ── Main ─────────────────────── */}
                <main className="res-main">

                    {/* Breadcrumb */}
                    <nav className="res-breadcrumb" aria-label="Breadcrumb">
                        <span onClick={() => router.push("/")} className="res-bc-link">
                            <Home size={12} style={{ display: "inline", marginRight: 3 }} />Home
                        </span>
                        <ChevronRight size={14} className="res-bc-sep" />
                        <span onClick={() => router.push(`/subject/${subjectId}`)} className="res-bc-link">
                            {meta.name}
                        </span>
                        <ChevronRight size={14} className="res-bc-sep" />
                        <span className="res-bc-link">{year.label}</span>
                        <ChevronRight size={14} className="res-bc-sep" />
                        <span className="res-bc-link">{sem.label}</span>
                        <ChevronRight size={14} className="res-bc-sep" />
                        {activeCourse ? (
                            <span className="res-bc-current">{activeCourse.code}</span>
                        ) : (
                            <span className="res-bc-current">Subjects</span>
                        )}
                    </nav>

                    {/* ── Single-course resource view ── */}
                    {activeCourse ? (
                        <>
                            <button
                                className="subj-back-to-courses"
                                onClick={() => setActiveCourse(null)}
                            >
                                <ArrowLeft size={14} /> Back to subjects
                            </button>

                            <h1 className="res-main-title">{activeCourse.code}</h1>
                            <p className="res-main-sem-tag">{activeCourse.name}</p>

                            {/* Resource type tabs */}
                            <div className="subj-cat-tabs">
                                {availableCategories.map((cat) => {
                                    const CatIcon = getResourceIcon(cat.key);
                                    return (
                                        <button
                                            key={cat.key}
                                            className={`subj-cat-tab${activeCat === cat.key ? " subj-cat-tab--active" : ""}`}
                                            onClick={() => setActiveCat(cat.key)}
                                            style={activeCat === cat.key
                                                ? { background: meta.color, borderColor: "transparent" }
                                                : undefined}
                                        >
                                            <CatIcon size={15} strokeWidth={1.8} />
                                            {cat.label}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="res-card-grid" style={{ gridTemplateColumns: "1fr" }}>
                                {renderResourceCard(activeCourse)}
                            </div>
                        </>
                    ) : (
                        /* ── Course list view ─────────── */
                        <>
                            <h1 className="res-main-title">
                                {year.label} — {sem.label}
                            </h1>

                            {/* Semester Toggle */}
                            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                                {Object.entries(year.semesters).map(([semKey, semester]) => (
                                    <button
                                        key={semKey}
                                        onClick={() => router.push(`/subject/${subjectId}/${yearId}/${semKey}`)}
                                        style={{
                                            padding: "0.5rem 1rem",
                                            borderRadius: "0.5rem",
                                            border: semKey === semId ? "2px solid" : "1px solid rgba(255,255,255,0.1)",
                                            borderColor: semKey === semId ? meta.color : undefined,
                                            background: semKey === semId ? `${meta.color}15` : "rgba(255,255,255,0.02)",
                                            color: semKey === semId ? meta.color : "rgba(255,255,255,0.6)",
                                            cursor: "pointer",
                                            fontSize: "0.875rem",
                                            fontWeight: semKey === semId ? "600" : "400",
                                            transition: "all 0.2s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (semKey !== semId) {
                                                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (semKey !== semId) {
                                                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                            }
                                        }}
                                    >
                                        {semester.label}
                                    </button>
                                ))}
                            </div>

                            <p className="res-main-sem-tag">
                                {filteredCourses.length} subject{filteredCourses.length !== 1 ? "s" : ""} · select a subject to view its resources
                            </p>

                            {filteredCourses.length === 0 ? (
                                <div className="subj-empty">
                                    <p>No subjects available yet — check back soon!</p>
                                </div>
                            ) : (
                                <div className="subj-course-grid">
                                    {filteredCourses.map((course) => (
                                        <button
                                            key={course.code}
                                            className="subj-course-card"
                                            style={{ "--card-glow": meta.glow } as React.CSSProperties}
                                            onClick={() => setActiveCourse(course)}
                                        >
                                            <div className="subj-course-icon"
                                                style={{ background: meta.color, boxShadow: `0 6px 18px ${meta.glow}` }}>
                                                <SubjectIcon size={26} strokeWidth={1.4} />
                                            </div>

                                            <div className="subj-course-info">
                                                <span className="subj-course-code">{course.code}</span>
                                                <span className="subj-course-name">{course.name}</span>
                                                <div className="subj-course-pills">
                                                    {course.resources.map((resource) => {
                                                        const CatIcon = getResourceIcon(resource.key);
                                                        const active  = resource.url && resource.url !== "#" && resource.url !== "";
                                                        return (
                                                            <span
                                                                key={resource.key}
                                                                className={`subj-course-pill${active ? " subj-course-pill--active" : ""}`}
                                                            >
                                                                <CatIcon size={10} strokeWidth={2} />
                                                                {resource.label}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            <ChevronRight size={18} className="subj-course-arrow" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </main>
            </div>
        </div>
    );
}
