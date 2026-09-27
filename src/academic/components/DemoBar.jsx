import styles from './DemoBar.module.css'

/** @param {{ background?: string }} props  background: colour of the page's footer, so the spacer below it blends in */
export default function DemoBar({ background }) {
  return (
    <>
      <div className={styles.spacer} style={background ? { background } : undefined} aria-hidden="true" />
      <aside className={styles.bar} aria-label="About this demo">
        <span className={styles.long}>This is a demo site by Karan.</span>
        <span className={styles.short}>Demo site by Karan.</span>
        <a className={styles.link} href="/academic/#pricing">Get one like this</a>
      </aside>
    </>
  )
}
