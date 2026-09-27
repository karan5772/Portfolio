// Academic template pages (public demos and private previews) bring their own fonts and styles,
// so they skip the portfolio stylesheet and load only a small reset.
import '@/src/academic/base.css'

export default function TemplatesLayout({ children }) {
  return children
}
