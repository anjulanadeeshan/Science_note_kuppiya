"use client";

import {
  Monitor, BarChart2, BookOpen, Zap,
  FlaskConical, Atom, Leaf, Plus,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

type Subject = {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  color: string;
  glow: string;
  disabled?: boolean;
};

const subjects: Subject[] = [
  {
    id: "computer-science",
    name: "Computer Science",
    shortName: "CS",
    icon: Monitor,
    color: "linear-gradient(135deg, #1e90ff 0%, #00cfff 100%)",
    glow: "rgba(30, 144, 255, 0.3)",
  },
  {
    id: "statistics",
    name: "Statistics",
    shortName: "STAT",
    icon: BarChart2,
    color: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    glow: "rgba(124, 58, 237, 0.3)",
  },
  {
    id: "pure-mathematics",
    name: "Pure Mathematics",
    shortName: "PM",
    icon: BookOpen,
    color: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
    glow: "rgba(8, 145, 178, 0.3)",
  },
  {
    id: "applied-mathematics",
    name: "Applied Mathematics",
    shortName: "AM",
    icon: Zap,
    color: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    glow: "rgba(217, 119, 6, 0.3)",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    shortName: "CHEM",
    icon: FlaskConical,
    color: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    glow: "rgba(5, 150, 105, 0.3)",
  },
  {
    id: "physics",
    name: "Physics",
    shortName: "PHY",
    icon: Atom,
    color: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
    glow: "rgba(225, 29, 72, 0.3)",
  },
  {
    id: "biology",
    name: "Biology",
    shortName: "BIO",
    icon: Leaf,
    color: "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)",
    glow: "rgba(22, 163, 74, 0.3)",
  },
];

export default function Home() {
  const router = useRouter();

  const handleSubjectClick = (subject: Subject) => {
    if (subject.disabled) return;
    router.push(`/subject/${subject.id}`);
  };

  return (
    <div className="home-page">
      {/* ── Hero ─────────────────────────────── */}
      <section className="home-hero">
        <div className="home-badge">48th Batch · UOJ Science</div>
        <h1 className="home-title">Edu Kuppi</h1>
        <p className="home-subtitle">
          Student guides for Statistics, Computing, and Science notes.
          <br />
          <span className="home-subtitle-creator">Created by 48th Batch UOJ Science</span>
        </p>

        <div className="home-quote">
          <p className="home-quote-text">
            &ldquo;If you can&apos;t explain it simply, you don&apos;t understand it well enough.&rdquo;
          </p>
          <span className="home-quote-author">— ALBERT EINSTEIN</span>
          <div className="home-quote-bar" />
        </div>
      </section>

      {/* ── Subject Section ──────────────────── */}
      <section className="home-subject-section">
        <div className="home-section-header">
          <h2 className="home-section-title">Select Your Subject</h2>
          <p className="home-section-desc">
            Access comprehensive notes, tutorials, ICAs, and past papers for your degree program.
          </p>
        </div>

        <div className="home-subject-grid">
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <button
                key={subject.id}
                id={`subject-${subject.id}`}
                onClick={() => handleSubjectClick(subject)}
                className={`home-subject-card${subject.disabled ? " home-subject-card--disabled" : ""}`}
                style={{ "--card-glow": subject.glow } as React.CSSProperties}
                disabled={subject.disabled}
              >
                {subject.disabled && (
                  <span className="home-coming-soon">COMING SOON</span>
                )}
                <div
                  className="home-subject-icon"
                  style={{ background: subject.color, boxShadow: `0 8px 24px ${subject.glow}` }}
                >
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <span className="home-subject-name">{subject.name}</span>
                <span className="home-subject-tag">{subject.shortName}</span>
                <div className="home-subject-arrow">
                  <ArrowRight size={16} />
                </div>
              </button>
            );
          })}

          {/* More Subjects placeholder */}
          <div className="home-subject-card home-subject-card--more">
            <div className="home-subject-icon home-subject-icon--more">
              <Plus size={28} strokeWidth={1.5} />
            </div>
            <span className="home-subject-name home-subject-name--muted">More Subjects</span>
            <span className="home-coming-soon home-coming-soon--inline">COMING SOON</span>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────── */}
      <footer className="home-footer">
        <p className="home-footer-disclaimer">
          This platform is dedicated strictly to educational purposes. Our mission is to provide
          students with seamless access to study materials and resources.
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
