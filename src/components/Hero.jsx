import { motion } from "framer-motion";
import { BrandSvg, SOCIAL_ICONS } from "../lib/brandIcons";
import { data } from "../data/portfolio";

const up = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="px"
      style={{
        background: "#FFFFFF",
        paddingTop: "6.5rem",
        paddingBottom: "4rem",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="wrap w-full">
        <div className="hero-grid">
          {/* Left: text */}
          <div>
            <motion.h1
              {...up(0.15)}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
                color: "#1A1410",
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                marginBottom: "1rem",
              }}
            >
              Karan
              <span style={{ color: "#2A6049" }}> Kumar</span>
            </motion.h1>

            <motion.p
              {...up(0.25)}
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "#6B5E52",
                marginBottom: "1.25rem",
              }}
            >
              Software Engineer | MERN Stack & Generative AI
            </motion.p>

            <motion.p
              {...up(0.33)}
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "#5E5248",
                maxWidth: "48ch",
                marginBottom: "2rem",
              }}
            >
              {/* Full-stack developer building at the intersection of modern web
              technology and generative AI. <br /> Google Student Ambassador for
              Gemini — 3 internships and 5+ shipped projects. */}
              Full-stack developer with experience building scalable web
              applications and delivering scalable architecture.
            </motion.p>

            <motion.div
              {...up(0.41)}
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginBottom: "1.75rem",
              }}
            >
              <a href={`mailto:${data.email}`} className="btn-sage">
                Get in Touch
              </a>
              <a
                href={data.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Resume
              </a>
            </motion.div>

            {/* Social — brand SVG icons */}
            <motion.div
              {...up(0.48)}
              style={{ display: "flex", gap: "0.5rem" }}
            >
              {data.social.map(({ platform, url, icon }) => {
                const entry = SOCIAL_ICONS[icon];
                if (!entry) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={entry.label}
                    className="soc"
                  >
                    <BrandSvg icon={entry.icon} size={16} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div
            className="hero-portrait-col"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-portrait">
              <img src={data.profileImage} alt={data.name} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
