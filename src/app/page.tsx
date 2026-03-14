"use client";

import {
  Monitor,
  BarChart2,
  BookOpen,
  Zap,
  FlaskConical,
  Atom,
  Leaf,
  Plus,
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
    shortName: "PMM",
    icon: BookOpen,
    color: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
    glow: "rgba(8, 145, 178, 0.3)",
  },
  {
    id: "applied-mathematics",
    name: "Applied Mathematics",
    shortName: "AMM",
    icon: Zap,
    color: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    glow: "rgba(217, 119, 6, 0.3)",
    disabled: true,
  },
  {
    id: "chemistry",
    name: "Chemistry",
    shortName: "CHEM",
    icon: FlaskConical,
    color: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    glow: "rgba(5, 150, 105, 0.3)",
    disabled: true,
  },
  {
    id: "physics",
    name: "Physics",
    shortName: "PHY",
    icon: Atom,
    color: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
    glow: "rgba(225, 29, 72, 0.3)",
    disabled: true,
  },
  {
    id: "biology",
    name: "Biology",
    shortName: "BIO",
    icon: Leaf,
    color: "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)",
    glow: "rgba(22, 163, 74, 0.3)",
    disabled: true,
  },
];

export default function Home() {
  const router = useRouter();
  const feedbackFormUrl = "https://forms.gle/qRAmQuf3377x7wAG6";

  const handleSubjectClick = (subject: Subject) => {
    if (subject.disabled) return;
    router.push(`/subject/${subject.id}`);
  };

  return (
    <div className="home-page">
      {/* ── Hero ─────────────────────────────── */}
      <section className="home-hero">
        <h1 className="home-title">Note Kuppi</h1>
        <p className="home-subtitle">
          <span className="home-subtitle-lang">සෑම සටහනක්ම එකම තැනක. | </span>
          <span className="home-subtitle-lang">
            ஒவ்வொரு குறிப்பும் ஒரே இடத்தில்..
          </span>
          <br />
          <span className="home-subtitle-creator">
            Created by 48th Batch UOJ Science
          </span>
        </p>

        <div className="home-quote">
          <p className="home-quote-text">
            &ldquo;If you can&apos;t explain it simply, you don&apos;t
            understand it well enough.&rdquo;
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
            Access comprehensive notes, tutorials, ICAs, and past papers for
            your degree program.
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
                  style={{
                    background: subject.color,
                    boxShadow: `0 8px 24px ${subject.glow}`,
                  }}
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
            <span className="home-subject-name home-subject-name--muted">
              More Subjects
            </span>
            <span className="home-coming-soon home-coming-soon--inline">
              COMING SOON
            </span>
          </div>
        </div>
      </section>

      {/* ── Announcements ───────────────────── */}
      <section
        className="home-announcement-section"
        aria-labelledby="home-announcement-title"
      >
        <div className="home-announcement-head">
          <h2 id="home-announcement-title" className="home-announcement-title">
            Website Announcement
          </h2>
          <span className="home-announcement-badge">Important Notice 🛑</span>
        </div>

        <div className="home-announcement-card">
          <p>
            Please note that some lecturers may prefer
            <strong> not to publicly share their lecture slides</strong> as
            their teaching materials and methods are unique. Kindly use the
            resources on this website responsibly and only for academic support.
          </p>

          <p>
            All rights to the lecture slides and past papers remain with the
            <strong> respective lecturers or creators</strong>. Please do not
            misuse these materials.
          </p>

          <p>
            We would greatly appreciate your <strong>valuable feedback</strong>{" "}
            to help us improve this website.
          </p>

          <a
            href={feedbackFormUrl}
            target="_blank"
            rel="noreferrer"
            className="home-feedback-btn"
            aria-label="Open feedback form in a new tab"
          >
            Share Your Feedback
          </a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────── */}
      <footer className="home-footer">
        <p className="home-footer-disclaimer">
          This platform is dedicated strictly to educational purposes. Our
          mission is to provide students with seamless access to study materials
          and resources.
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
