import { BrandSvg, SOCIAL_ICONS } from "../lib/brandIcons";
import { data } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="px"
      style={{ paddingTop: "7.5rem", paddingBottom: "4.5rem", minHeight: "85vh", display: "flex", alignItems: "center" }}
    >
      <div className="wrap w-full">
        <div className="hero-grid">
          <div>
            <h1
              className="serif"
              style={{ fontSize: "clamp(2.75rem, 6vw, 4.75rem)", color: "var(--ink)", lineHeight: 1.06, marginBottom: "0.9rem" }}
            >
              Karan <span style={{ color: "var(--sage)" }}>Kumar</span>
            </h1>

            <p style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--body)", marginBottom: "1.25rem" }}>
              Software engineer, MERN stack and generative AI
            </p>

            <p className="lead" style={{ maxWidth: "52ch", marginBottom: "2rem" }}>
              I build web apps and AI tools for startups, colleges and local businesses, from the first
              screen to deployment. Recent work includes a ticketing system for a college festival,
              GST invoicing for Indian freelancers, and an AI tutor that answers from your own notes.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
              <a href="#contact" className="btn btn-sage">Get in touch</a>
              <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Resume
              </a>
            </div>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              {data.social.map(({ platform, url, icon }) => {
                const entry = SOCIAL_ICONS[icon];
                if (!entry) return null;
                return (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer me" aria-label={entry.label} title={entry.label} className="soc">
                    <BrandSvg icon={entry.icon} size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hero-portrait-col" style={{ display: "flex", justifyContent: "center" }}>
            <div className="portrait">
              <img src={data.profileImage} alt={data.name} width="300" height="300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
