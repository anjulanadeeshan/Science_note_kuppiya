"use client";

import {
    ArrowLeft, BookOpen, GraduationCap,
    FileText, FileCheck, FolderOpen,
    ExternalLink, Search, ChevronRight, Home,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { resourceData } from "@/data";
import type { CategoryKey, Course } from "@/data";
import { subjectMeta } from "../../SubjectClient";

/* ── Category nav config ──────────────────────────────────── */
const navCategories: { key: CategoryKey; label: string; icon: React.ElementType }[] = [
    { key: "notes",      label: "Notes",       icon: BookOpen      },
    { key: "tutorials",  label: "Tutorials",   icon: GraduationCap },
    { key: "icas",       label: "ICAs",        icon: FileCheck     },
    { key: "pastpapers", label: "Past Papers", icon: FileText      },
];

/* ── Resource Page Component ─────────────────────────────── */
export default function SubjectSemClient({
    subjectId, yearId, semId,
}: { subjectId: string; yearId: string; semId: string }) {

    const router = useRouter();
    const [activeCat,    setActiveCat   ] = useState<CategoryKey>("notes");
    const [searchQuery,  setSearchQuery ] = useState("");
    const [activeCourse, setActiveCourse] = useState<Course | null>(null);

    const meta         = subjectMeta[subjectId];
    const subjectYears = resourceData[subjectId];
    const year         = subjectYears?.[yearId];
    const sem          = year?.semesters[semId];

    if (!meta || !year || !sem) {
        return (
            <div className="res-not-found">
                <p>Page not found.</p>
                <button onClick={() => router.push("/")} className="res-back-btn">← Home</button>
            </div>
        );
    }

    const SubjectIcon = meta.icon;
    const currentCat  = navCategories.find((c) => c.key === activeCat)!;

    const filteredCourses = searchQuery.trim()
        ? sem.courses.filter((c) =>
            c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : sem.courses;

    /* Render a resource card for the active course + category */
    const renderResourceCard = (course: Course) => {
        const url    = course.resources[activeCat];
        const isSoon = !url || url === "#";
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
                    <span className="res-drive-label">{course.code} — {currentCat.label}</span>
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

                    <h2 className="res-sidebar-title">RESOURCES</h2>
                    <nav className="res-sidebar-nav">
                        {navCategories.map((cat) => {
                            const CatIcon = cat.icon;
                            return (
                                <button
                                    key={cat.key}
                                    id={`nav-${cat.key}`}
                                    className={`res-nav-item${activeCat === cat.key ? " res-nav-item--active" : ""}`}
                                    onClick={() => { setActiveCat(cat.key); setActiveCourse(null); }}
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
                        {activeCourse ? (
                            <>
                                <ChevronRight size={14} className="res-bc-sep" />
                                <span className="res-bc-current">{activeCourse.code}</span>
                            </>
                        ) : (
                            <>
                                <ChevronRight size={14} className="res-bc-sep" />
                                <span className="res-bc-current">{currentCat.label}</span>
                            </>
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
                                {navCategories.map((cat) => {
                                    const CatIcon = cat.icon;
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
                            <p className="res-main-sem-tag">
                                {filteredCourses.length} subject{filteredCourses.length !== 1 ? "s" : ""} · select one to view {currentCat.label}
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
                                                    {navCategories.map((cat) => {
                                                        const CatIcon = cat.icon;
                                                        const url     = course.resources[cat.key];
                                                        const active  = url && url !== "#";
                                                        return (
                                                            <span
                                                                key={cat.key}
                                                                className={`subj-course-pill${active ? " subj-course-pill--active" : ""}`}
                                                            >
                                                                <CatIcon size={10} strokeWidth={2} />
                                                                {cat.label}
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
