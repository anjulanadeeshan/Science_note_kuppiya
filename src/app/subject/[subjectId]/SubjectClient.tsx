"use client";

import {
    ArrowLeft, BookOpen, GraduationCap,
    FileText, FileCheck, FolderOpen,
    ExternalLink, Search, Monitor, BarChart2,
    Zap, FlaskConical, Atom, Leaf, ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

/* ── Types ───────────────────────────────────────────────── */
type CategoryKey = "notes" | "tutorials" | "icas" | "pastpapers";

type CategoryItem = {
    label: string;
    url: string;
    description?: string;
};

type SubjectCategory = {
    items: CategoryItem[];
};

type SubjectConfig = {
    name: string;
    shortName: string;
    color: string;
    glow: string;
    icon: React.ElementType;
    categories: Record<CategoryKey, SubjectCategory>;
};

/* ── Subject Data ─────────────────────────────────────────── */
export const subjectData: Record<string, SubjectConfig> = {
    "computer-science": {
        name: "Computer Science",
        shortName: "CS",
        color: "linear-gradient(135deg, #1e90ff 0%, #00cfff 100%)",
        glow: "rgba(30, 144, 255, 0.35)",
        icon: Monitor,
        categories: {
            notes: { items: [{ label: "View Notes Folder", url: "#", description: "Google Drive" }] },
            tutorials: { items: [{ label: "View Tutorials Folder", url: "#", description: "Google Drive" }] },
            icas: { items: [{ label: "View ICA Folder", url: "#", description: "Google Drive" }] },
            pastpapers: { items: [{ label: "View Past Papers Folder", url: "#", description: "Google Drive" }] },
        },
    },
    "statistics": {
        name: "Statistics",
        shortName: "STAT",
        color: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
        glow: "rgba(124, 58, 237, 0.35)",
        icon: BarChart2,
        categories: {
            notes: {
                items: [
                    { label: "1st Year — 1st Semester Notes", url: "https://drive.google.com/drive/folders/1ZiMd0UkCuDmet7Xr_13JMXfqMf4YPk_z?usp=drive_link", description: "Google Drive" },
                    { label: "1st Year — 2nd Semester Notes", url: "https://drive.google.com/drive/folders/12FNzLCvz__iLxB-DH2IaVmVpz0DzKTdn?usp=drive_link", description: "Google Drive" },
                    { label: "2nd Year — 1st Semester Notes", url: "https://drive.google.com/drive/folders/1wJVHmwQCUdGpJQXpC0XgbqXcLbAt12Ds?usp=sharing", description: "Google Drive" },
                    { label: "2nd Year — 2nd Semester Notes", url: "https://drive.google.com/drive/folders/19046d9nFFsi3YCmVmT2dRiIF2xsYrhNS?usp=sharing", description: "Google Drive" },
                    { label: "3rd Year — 1st Semester Notes", url: "https://drive.google.com/drive/folders/1VAeEkGtQ946344uHuRhGAokj68-J1GLS?usp=drive_link", description: "Google Drive" },
                ],
            },
            tutorials: { items: [{ label: "View Tutorials Folder", url: "#", description: "Google Drive" }] },
            icas: { items: [{ label: "View ICA Folder", url: "#", description: "Google Drive" }] },
            pastpapers: { items: [{ label: "View Past Papers Folder", url: "#", description: "Google Drive" }] },
        },
    },
    "pure-mathematics": {
        name: "Pure Mathematics",
        shortName: "PM",
        color: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
        glow: "rgba(8, 145, 178, 0.35)",
        icon: BookOpen,
        categories: {
            notes: { items: [{ label: "View Notes Folder", url: "#", description: "Google Drive" }] },
            tutorials: { items: [{ label: "View Tutorials Folder", url: "#", description: "Google Drive" }] },
            icas: { items: [{ label: "View ICA Folder", url: "#", description: "Google Drive" }] },
            pastpapers: { items: [{ label: "View Past Papers Folder", url: "#", description: "Google Drive" }] },
        },
    },
    "applied-mathematics": {
        name: "Applied Mathematics",
        shortName: "AM",
        color: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
        glow: "rgba(217, 119, 6, 0.35)",
        icon: Zap,
        categories: {
            notes: { items: [{ label: "View Notes Folder", url: "#", description: "Google Drive" }] },
            tutorials: { items: [{ label: "View Tutorials Folder", url: "#", description: "Google Drive" }] },
            icas: { items: [{ label: "View ICA Folder", url: "#", description: "Google Drive" }] },
            pastpapers: { items: [{ label: "View Past Papers Folder", url: "#", description: "Google Drive" }] },
        },
    },
    "chemistry": {
        name: "Chemistry",
        shortName: "CHEM",
        color: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        glow: "rgba(5, 150, 105, 0.35)",
        icon: FlaskConical,
        categories: {
            notes: { items: [{ label: "View Notes Folder", url: "#", description: "Google Drive" }] },
            tutorials: { items: [{ label: "View Tutorials Folder", url: "#", description: "Google Drive" }] },
            icas: { items: [{ label: "View ICA Folder", url: "#", description: "Google Drive" }] },
            pastpapers: { items: [{ label: "View Past Papers Folder", url: "#", description: "Google Drive" }] },
        },
    },
    "physics": {
        name: "Physics",
        shortName: "PHY",
        color: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
        glow: "rgba(225, 29, 72, 0.35)",
        icon: Atom,
        categories: {
            notes: { items: [{ label: "View Notes Folder", url: "#", description: "Google Drive" }] },
            tutorials: { items: [{ label: "View Tutorials Folder", url: "#", description: "Google Drive" }] },
            icas: { items: [{ label: "View ICA Folder", url: "#", description: "Google Drive" }] },
            pastpapers: { items: [{ label: "View Past Papers Folder", url: "#", description: "Google Drive" }] },
        },
    },
    "biology": {
        name: "Biology",
        shortName: "BIO",
        color: "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)",
        glow: "rgba(22, 163, 74, 0.35)",
        icon: Leaf,
        categories: {
            notes: { items: [{ label: "View Notes Folder", url: "#", description: "Google Drive" }] },
            tutorials: { items: [{ label: "View Tutorials Folder", url: "#", description: "Google Drive" }] },
            icas: { items: [{ label: "View ICA Folder", url: "#", description: "Google Drive" }] },
            pastpapers: { items: [{ label: "View Past Papers Folder", url: "#", description: "Google Drive" }] },
        },
    },
};

const navCategories: { key: CategoryKey; label: string; icon: React.ElementType }[] = [
    { key: "notes", label: "Notes", icon: BookOpen },
    { key: "tutorials", label: "Tutorials", icon: GraduationCap },
    { key: "icas", label: "ICAs", icon: FileCheck },
    { key: "pastpapers", label: "Past Papers", icon: FileText },
];

/* ── Client Component ─────────────────────────────────────── */
export default function SubjectClient({ subjectId }: { subjectId: string }) {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState<CategoryKey>("notes");
    const [searchQuery, setSearchQuery] = useState("");

    const subject = subjectData[subjectId];

    if (!subject) {
        return (
            <div className="res-not-found">
                <p>Subject not found.</p>
                <button onClick={() => router.push("/")} className="res-back-btn">
                    ← Back to Home
                </button>
            </div>
        );
    }

    const SubjectIcon = subject.icon;
    const currentCat = navCategories.find((c) => c.key === activeCategory)!;
    const currentItems = subject.categories[activeCategory].items;

    const filteredItems = searchQuery.trim()
        ? currentItems.filter((item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : currentItems;

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
                        placeholder={`Search in ${subject.name}...`}
                        className="res-search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Subject badge */}
                <div
                    className="res-subject-badge"
                    style={{ background: subject.color, boxShadow: `0 4px 16px ${subject.glow}` }}
                >
                    <SubjectIcon size={16} strokeWidth={1.7} />
                    <span>{subject.shortName}</span>
                </div>
            </header>

            <div className="res-body">
                {/* ── Sidebar ────────────────────── */}
                <aside className="res-sidebar">
                    {/* Subject header in sidebar */}
                    <div className="res-sidebar-subject">
                        <div
                            className="res-sidebar-subject-icon"
                            style={{ background: subject.color, boxShadow: `0 6px 18px ${subject.glow}` }}
                        >
                            <SubjectIcon size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <p className="res-sidebar-subject-name">{subject.name}</p>
                            <p className="res-sidebar-subject-tag">{subject.shortName}</p>
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
                                    className={`res-nav-item${activeCategory === cat.key ? " res-nav-item--active" : ""}`}
                                    onClick={() => setActiveCategory(cat.key)}
                                >
                                    <CatIcon size={18} strokeWidth={1.7} />
                                    {cat.label}
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* ── Main ───────────────────────── */}
                <main className="res-main">
                    <nav className="res-breadcrumb" aria-label="Breadcrumb">
                        <span onClick={() => router.push("/")} className="res-bc-link">Home</span>
                        <ChevronRight size={14} className="res-bc-sep" />
                        <span className="res-bc-link">{subject.name}</span>
                        <ChevronRight size={14} className="res-bc-sep" />
                        <span className="res-bc-current">{currentCat.label}</span>
                    </nav>

                    <h1 className="res-main-title">
                        {subject.name} — {currentCat.label}
                    </h1>
                    <p className="res-main-sem-tag">
                        {filteredItems.length} resource{filteredItems.length !== 1 ? "s" : ""} available
                    </p>

                    <div className="res-card-grid">
                        {filteredItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.url !== "#" ? item.url : undefined}
                                target={item.url !== "#" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className={`res-drive-card${item.url === "#" ? " res-drive-card--soon" : ""}`}
                                onClick={item.url === "#" ? (e) => e.preventDefault() : undefined}
                            >
                                <div className="res-drive-icon" style={{ background: subject.color }}>
                                    <FolderOpen size={36} strokeWidth={1.2} />
                                </div>
                                <div className="res-drive-info">
                                    <span className="res-drive-label">{item.label}</span>
                                    <span className="res-drive-sub">
                                        {item.url === "#" ? "Coming Soon" : `${item.description} →`}
                                    </span>
                                </div>
                                {item.url !== "#" && (
                                    <ExternalLink size={20} className="res-drive-arrow" />
                                )}
                            </a>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
