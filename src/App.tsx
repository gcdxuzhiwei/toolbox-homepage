import { useState, useEffect } from "react";
import { tools, ToolItem } from "./tools";
import "./App.css";

/* ─── Icon Map ─── */
function ToolIcon({ icon }: { icon: string }) {
  const icons: Record<string, JSX.Element> = {
    shop: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l1.5-5h15L21 9" />
        <path d="M3 9h18v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9z" />
        <circle cx="8.5" cy="14" r="1.5" />
        <circle cx="15.5" cy="14" r="1.5" />
      </svg>
    ),
    image: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    code: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    palette: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12" r="0.5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1 0 1.5-0.5 1.5-1.2 0-0.3-0.1-0.6-0.3-0.9-0.2-0.3-0.3-0.6-0.3-0.9 0-1 0.8-1.7 1.7-1.7H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.3-10-9.3z" />
      </svg>
    ),
    qr: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="3" height="3" />
        <rect x="18" y="18" width="3" height="3" />
        <rect x="18" y="14" width="3" height="3" />
        <rect x="14" y="18" width="3" height="3" />
      </svg>
    ),
    diff: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v18" />
        <path d="M3 12h6" />
        <path d="M15 9h6" />
        <path d="M15 15h6" />
        <path d="M3 6h6" />
        <path d="M3 18h6" />
      </svg>
    ),
    regex: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h6v6H4z" />
        <path d="M14 4h6v6h-6z" />
        <path d="M4 14h6v6H4z" />
        <circle cx="17" cy="17" r="3" />
      </svg>
    ),
    clock: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  };
  return icons[icon] || icons.code;
}

/* ─── Tool Card ─── */
function ToolCard({ tool, index }: { tool: ToolItem; index: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 60 + index * 70);
    return () => clearTimeout(timer);
  }, [index]);

  const handleClick = () => {
    window.open(tool.url, "_blank");
  };

  return (
    <div
      className={`tool-card ${visible ? "tool-card--visible" : ""}`}
      onClick={handleClick}
      style={{ "--card-color": tool.color } as React.CSSProperties}
    >
      <div className="tool-card__icon">
        <ToolIcon icon={tool.icon} />
      </div>
      <div className="tool-card__body">
        <div className="tool-card__header">
          <h3 className="tool-card__title">{tool.title}</h3>
          {tool.tag && <span className="tool-card__tag">{tool.tag}</span>}
        </div>
        <p className="tool-card__desc">{tool.description}</p>
      </div>
      <div className="tool-card__arrow">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </div>
  );
}

/* ─── App ─── */
export default function App() {
  const [query, setQuery] = useState("");

  const filtered = tools.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="app">
      {/* Grain overlay */}
      <div className="grain" aria-hidden="true" />

      <header className="header">
        <div className="header__inner">
          <div className="header__brand">
            <div className="header__logo" aria-hidden="true">
              <svg viewBox="0 0 28 28" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="10"
                  height="10"
                  rx="3"
                  fill="var(--accent)"
                />
                <rect
                  x="16"
                  y="2"
                  width="10"
                  height="10"
                  rx="3"
                  fill="var(--indigo)"
                  opacity="0.6"
                />
                <rect
                  x="2"
                  y="16"
                  width="10"
                  height="10"
                  rx="3"
                  fill="var(--indigo)"
                  opacity="0.4"
                />
                <rect
                  x="16"
                  y="16"
                  width="10"
                  height="10"
                  rx="3"
                  fill="var(--accent)"
                  opacity="0.5"
                />
              </svg>
            </div>
            <span className="header__name">工具箱</span>
          </div>
          <div className="header__count">
            <span className="header__count-num">{tools.length}</span>
            <span className="header__count-label">款工具</span>
          </div>
        </div>
      </header>

      <main className="main">
        {/* Hero */}
        <section className="hero">
          <h1 className="hero__title">
            效率<span className="hero__accent">工具</span>箱
          </h1>
          <p className="hero__subtitle">
            精选实用在线工具，即开即用，助你高效完成各类任务
          </p>
        </section>

        {/* Search */}
        <div className="search-wrap">
          <svg
            className="search-wrap__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            className="search-wrap__input"
            type="text"
            placeholder="搜索工具..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="search-wrap__clear" onClick={() => setQuery("")}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Tool list */}
        <section className="tools">
          {filtered.length === 0 && (
            <div className="tools__empty">
              <p>没有找到匹配的工具</p>
            </div>
          )}
          {filtered.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} 效率工具箱 · 持续更新中</p>
      </footer>
    </div>
  );
}
