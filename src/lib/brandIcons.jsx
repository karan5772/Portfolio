import {
  siGithub, siX, siHashnode,
  siReact, siNodedotjs, siTypescript, siJavascript,
  siExpress, siMongodb, siPostgresql, siDocker,
  siGit, siPython, siLangchain,
  siGooglegemini, siHuggingface, siQdrant,
} from 'simple-icons'

// LinkedIn removed from simple-icons for licensing — hardcoded path
const LINKEDIN = {
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  hex: '0A66C2',
}

// OpenAI not in simple-icons — official brand path
const OPENAI = {
  path: 'M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.775.775 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.12 14.03A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.369 2.02-1.168a.076.076 0 0 1 .071 0l4.783 2.758a4.494 4.494 0 0 1-.676 8.108v-5.677a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.775.775 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z',
  hex: '412991',
}

export function BrandSvg({ icon, size = 20, colored = false, style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={colored ? `#${icon.hex}` : 'currentColor'}
      style={style}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  )
}

export const SOCIAL_ICONS = {
  github:   { icon: siGithub,  label: 'GitHub'   },
  linkedin: { icon: LINKEDIN,  label: 'LinkedIn'  },
  twitter:  { icon: siX,       label: 'X'         },
  hashnode: { icon: siHashnode, label: 'Hashnode' },
}

export const TECH_LOGOS = [
  // Frontend
  { icon: siReact,        name: 'React.js',    group: 'frontend' },
  { icon: siTypescript,   name: 'TypeScript',  group: 'frontend' },
  { icon: siJavascript,   name: 'JavaScript',  group: 'frontend' },
  // Backend
  { icon: siNodedotjs,    name: 'Node.js',     group: 'backend'  },
  { icon: siExpress,      name: 'Express.js',  group: 'backend'  },
  // AI / GenAI
  { icon: OPENAI,         name: 'OpenAI',      group: 'ai'       },
  { icon: siLangchain,    name: 'LangChain',   group: 'ai'       },
  { icon: siGooglegemini, name: 'Gemini',      group: 'ai'       },
  { icon: siHuggingface,  name: 'Hugging Face',group: 'ai'       },
  // Database / Infra
  { icon: siMongodb,      name: 'MongoDB',     group: 'db'       },
  { icon: siPostgresql,   name: 'PostgreSQL',  group: 'db'       },
  { icon: siQdrant,       name: 'Qdrant',      group: 'db'       },
  { icon: siDocker,       name: 'Docker',      group: 'tools'    },
  { icon: siPython,       name: 'Python',      group: 'tools'    },
  { icon: siGit,          name: 'Git',         group: 'tools'    },
]
