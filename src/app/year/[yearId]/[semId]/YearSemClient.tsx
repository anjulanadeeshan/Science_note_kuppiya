"use client";

import {
    ArrowLeft, Search, User, FileText,
    GraduationCap, FolderOpen, BookOpen,
    ChevronRight, ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

/* ── Types ───────────────────────────────────────────────── */
type CategoryKey = "notes";

type Subject = {
    code: string;   // e.g. "STA101G3"
    name: string;   // e.g. "Mr. A. Laheetharan"
    url: string;    // individual subject folder URL (use "#" if not available yet)
};

type SemData = {
    label: string;
    categories: Record<CategoryKey, string>;  // top-level folder URL per category
    subjects?: Subject[];                     // individual subject cards (1st & 2nd year only)
};

type YearConfig = {
    label: string;
    semesters: Record<string, SemData>;
};

/* ── Data ────────────────────────────────────────────────── */
export const yearData: Record<string, YearConfig> = {
    "1st-year": {
        label: "1st Year",
        semesters: {
            sem1: {
                label: "1st Semester",
                categories: {
                    notes: "https://drive.google.com/drive/folders/1ZiMd0UkCuDmet7Xr_13JMXfqMf4YPk_z?usp=drive_link"
                },
                subjects: [
                    { code: "STA101G3", name: "Mr. A. Laheetharan", url: "https://drive.google.com/drive/folders/1rBrJGdC_rvnkbM4bUV3LTibSg_jEid7W?usp=sharing" },
                    { code: "STA102G2", name: "Dr. S. Arumairajan", url: "https://drive.google.com/drive/folders/1VBFNsp0KNyO33wSNg9wOviv57PdOQHU1?usp=sharing" },
                ],
            },
            sem2: {
                label: "2nd Semester",
                categories: {
                    notes: "https://drive.google.com/drive/folders/12FNzLCvz__iLxB-DH2IaVmVpz0DzKTdn?usp=drive_link"
                },
                subjects: [
                    { code: "STA103G3", name: "Dr. S. Arivalzahan", url: "https://drive.google.com/drive/folders/1PDVPo_sW__zAsMO5sHtm0R1hmdh2OQLQ?usp=sharing" },
                    { code: "STA104G2", name: "Mrs. N.Sathkunanathan", url: "https://drive.google.com/drive/folders/1MC0TFghRw4dw0TnrfR1Ye2-6R5j5tCf4?usp=sharing" },
                ],
            },
        },
    },
    "2nd-year": {
        label: "2nd Year",
        semesters: {
            sem1: {
                label: "1st Semester",
                categories: {
                    notes: "https://drive.google.com/drive/folders/1wJVHmwQCUdGpJQXpC0XgbqXcLbAt12Ds?usp=sharing"
                },
                subjects: [
                    // Add 2nd Year subjects here once you have them
                    { code: "STA201G3", name: "Mrs. N. Sathkunanathan", url: "https://drive.google.com/drive/folders/1kZQW5_VVMit7TZUzDLYx6vzt5vvwkRI4?usp=sharing" },
                    { code: "STA202G2", name: "Mrs. J. Duwarakan", url: "https://drive.google.com/drive/folders/1Ucg5wVPyH4zm0A8Qs2Tt_GcRdGWdJbSX?usp=sharing" },
                ]
            },
            sem2: {
                label: "2nd Semester",
                categories: {
                    notes: "https://drive.google.com/drive/folders/19046d9nFFsi3YCmVmT2dRiIF2xsYrhNS?usp=sharing"
                },
                subjects: [
                    // Add 2nd Year 2nd Semester subjects here
                    { code: "STA2xx", name: "Subject Name", url: "#" },
                ],
            },
        },
    },
    "3rd-year": {
        label: "3rd Year",
        semesters: {
            sem1: {
                label: "1st Semester",
                categories: {
                    notes: "https://drive.google.com/drive/folders/1VAeEkGtQ946344uHuRhGAokj68-J1GLS?usp=drive_link"
                },
                // No subjects array → 3rd year just shows the folder card
            }
        },
    },
};

export const navCategories: { key: CategoryKey; label: string; icon: React.ElementType }[] = [
    { key: "notes", label: "Notes", icon: BookOpen }
];

/* ── Client Component ────────────────────────────────────── */
export default function YearSemClient({
    yearId,
    semId,
}: {
    yearId: string;
    semId: string;
}) {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState<CategoryKey>("notes");
    const [searchQuery, setSearchQuery] = useState("");

    const year = yearData[yearId];
    const sem = year?.semesters[semId];

    if (!year || !sem) {
        return (
            <div className="res-not-found">
                <p>Page not found.</p>
                <button onClick={() => router.push("/")} className="res-back-btn">
                    ← Back to Home
                </button>
            </div>
        );
    }

    const currentUrl = sem.categories[activeCategory];
    const currentNav = navCategories.find((n) => n.key === activeCategory)!;

    // Filter subjects by search query (only when subjects exist)
    const subjects = sem.subjects ?? [];
    const filteredSubjects = searchQuery.trim()
        ? subjects.filter(
            (s) =>
                s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : subjects;

    return (
        <div className="res-shell">
            {/* ── Top Bar ──────────────────────── */}
            <header className="res-topbar">
                <button className="res-back-btn" onClick={() => router.push("/")}>
                    <ArrowLeft size={16} />
                    Back to Home
                </button>

                <div className="res-search-wrap">
                    <Search size={16} className="res-search-icon" />
                    <input
                        type="text"
                        placeholder="Search for notes, topics, files..."
                        className="res-search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <button className="res-profile-btn" aria-label="Profile">
                    <User size={20} />
                </button>
            </header>

            <div className="res-body">
                {/* ── Sidebar ────────────────────── */}
                <aside className="res-sidebar">
                    <h2 className="res-sidebar-title">{year.label} Resources</h2>
                    <nav className="res-sidebar-nav">
                        {navCategories.map((cat) => (
                            <button
                                key={cat.key}
                                className={`res-nav-item${activeCategory === cat.key ? " res-nav-item--active" : ""}`}
                                onClick={() => setActiveCategory(cat.key)}
                            >
                                <cat.icon size={18} strokeWidth={1.7} />
                                {cat.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* ── Main ───────────────────────── */}
                <main className="res-main">
                    <nav className="res-breadcrumb" aria-label="Breadcrumb">
                        <span onClick={() => router.push("/")} className="res-bc-link">Home</span>
                        <ChevronRight size={14} className="res-bc-sep" />
                        <span className="res-bc-link">{year.label}</span>
                        <ChevronRight size={14} className="res-bc-sep" />
                        <span className="res-bc-link">{sem.label}</span>
                        <ChevronRight size={14} className="res-bc-sep" />
                        <span className="res-bc-current">{currentNav.label}</span>
                    </nav>

                    <h1 className="res-main-title">
                        {year.label} &ndash; {currentNav.label}
                    </h1>
                    <p className="res-main-sem-tag">{sem.label}</p>

                    <div className="res-card-grid">
                        {/* Primary Google Drive folder card */}
                        <a
                            href={currentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="res-drive-card"
                        >
                            <div className="res-drive-icon">
                                <FolderOpen size={48} strokeWidth={1.2} />
                            </div>
                            <div className="res-drive-info">
                                <span className="res-drive-label">Open {currentNav.label} Folder</span>
                                <span className="res-drive-sub">Google Drive &rarr;</span>
                            </div>
                            <ExternalLink size={20} className="res-drive-arrow" />
                        </a>

                        {/* Subject cards — shown for years that have subjects defined */}
                        {filteredSubjects.length > 0 && filteredSubjects.map((subject) => (
                            <a
                                key={subject.code}
                                href={subject.url !== "#" ? subject.url : undefined}
                                target={subject.url !== "#" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className={`res-placeholder-card res-subject-item${subject.url === "#" ? " res-subject-item--soon" : ""}`}
                                onClick={subject.url === "#" ? (e) => e.preventDefault() : undefined}
                            >
                                <div className="res-placeholder-icon">
                                    <currentNav.icon size={36} strokeWidth={1.2} />
                                </div>
                                <div className="res-subject-text">
                                    <span className="res-subject-code-tag">{subject.code}</span>
                                    <span className="res-placeholder-label">{subject.name}</span>
                                    {subject.url === "#"
                                        ? <span className="res-subject-soon-pill">Coming Soon</span>
                                        : <span className="res-subject-open-pill">Open in Drive <ExternalLink size={10} /></span>
                                    }
                                </div>
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
