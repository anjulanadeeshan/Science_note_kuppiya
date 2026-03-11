"use client";

import {
  GraduationCap, BookOpen, BarChart, Users,
  X, FileText, GraduationCap as Tutorial, Folder,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

type SemesterData = {
  id: string;
  name: string;
};

type YearData = {
  id: string;
  name: string;
  icon: React.ElementType;
  semesters?: SemesterData[];
  disabled?: boolean;
};

export default function Home() {
  const router = useRouter();
  const [activeYear, setActiveYear] = useState<YearData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const years: YearData[] = [
    {
      id: "1st-year",
      name: "1st Year",
      icon: Users,
      semesters: [
        { id: "sem1", name: "1st Semester" },
        { id: "sem2", name: "2nd Semester" },
      ],
    },
    {
      id: "2nd-year",
      name: "2nd Year",
      icon: BookOpen,
      semesters: [
        { id: "sem1", name: "1st Semester" },
        { id: "sem2", name: "2nd Semester" },
      ],
    },
    {
      id: "3rd-year",
      name: "3rd Year",
      icon: BarChart,
      semesters: [
        { id: "sem1", name: "1st Semester" }
      ],
    },
    {
      id: "4th-year",
      name: "4th Year",
      icon: GraduationCap,
      disabled: true,
    },
  ];

  const quickLinks = [
    { label: "Past Papers", icon: FileText, href: "#" },
    { label: "Tutorials", icon: Tutorial, href: "#" },
    { label: "ICA Folders", icon: Folder, href: "#" },
  ];

  const handleYearClick = (year: YearData) => {
    if (year.disabled) return;
    if (year.semesters) {
      setActiveYear(year);
      setIsModalOpen(true);
    }
  };

  const handleSemesterSelect = (sem: SemesterData) => {
    if (!activeYear) return;
    closeModal();
    router.push(`/year/${activeYear.id}/${sem.id}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveYear(null), 300);
  };

  return (
    <div className="home-page">
      {/* ── Hero ─────────────────────────────── */}
      <section className="home-hero">
        <h1 className="home-title">Stat Kuppi</h1>
        <p className="home-subtitle">
          Student guides for Statistics notes, ICA, and Pastpapers.<br />
          Created by 48th Batch UOJ Science
        </p>

        <div className="home-quote">
          <p className="home-quote-text">
            &ldquo;If you can&apos;t explain it simply, you don&apos;t understand it well enough.&rdquo;
          </p>
          <span className="home-quote-author">— ALBERT EINSTEIN</span>
          <div className="home-quote-bar" />
        </div>
      </section>

      {/* ── Year Cards ───────────────────────── */}
      <div className="home-year-grid">
        {years.map((year) => (
          <button
            key={year.id}
            onClick={() => handleYearClick(year)}
            className={`home-year-card${year.disabled ? " home-year-card--disabled" : ""}`}
            disabled={year.disabled}
          >
            {year.disabled && (
              <span className="home-coming-soon">COMING SOON</span>
            )}
            <div className="home-year-icon">
              <year.icon size={36} strokeWidth={1.5} />
            </div>
            <span className="home-year-label">{year.name}</span>
          </button>
        ))}
      </div>

      {/* ── Quick Links ──────────────────────── */}
      <div className="home-quicklinks">
        <h3 className="home-quicklinks-title">Quick Links</h3>
        <div className="home-quicklinks-row">
          {quickLinks.map((link) => (
            <a key={link.label} href={link.href} className="home-ql-btn">
              <link.icon size={15} strokeWidth={1.8} />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Semester Modal ───────────────────── */}
      {isModalOpen && activeYear && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal-card modal-open`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal} aria-label="Close">
              <X size={18} />
            </button>

            <div className="modal-icon-wrapper">
              {activeYear.icon && <activeYear.icon size={30} strokeWidth={1.5} />}
            </div>
            <h2 className="modal-title">{activeYear.name}</h2>
            <p className="modal-subtitle">Select your semester</p>

            <div className="semester-grid">
              {activeYear.semesters?.map((sem) => (
                <button
                  key={sem.id}
                  className="semester-btn"
                  onClick={() => handleSemesterSelect(sem)}
                >
                  <span className="sem-label">{sem.name}</span>
                  <ChevronRight size={18} className="sem-arrow" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Footer ───────────────────────────── */}
      <footer className="home-footer">
        <p className="home-footer-disclaimer">
          This platform is dedicated strictly to educational purposes. Our mission is to provide
          students with seamless access to study materials and resources.
        </p>
        <div className="home-footer-brand">
          <p className="home-footer-dev">Developed by</p>
          <p className="home-footer-team">TEAM ASGARD</p>
          <p className="home-footer-batch">48TH BATCH</p>
        </div>
      </footer>
    </div>
  );
}
