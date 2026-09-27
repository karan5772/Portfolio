// @ts-check
// Starter for a prospect preview. Copy this file to <slug>.js (e.g. firstname-lastname.js), fill in the
// professor's PUBLIC details, then open:
//   /academic/preview/<slug>/?t=minimal&k=<PREVIEW_KEY>      (t = minimal | lab | modern)
// or capture screenshots with: npm run shot -- <slug> <template>
// Check the file with: npm run check:academic
//
// Rules:
// - Only use information the professor has published (university page, Google Scholar, CV).
// - Leave `photo` out unless you have their permission; the templates show initials instead.
// - Optional fields can be deleted entirely; their sections disappear cleanly.
//
// Everything below is fictional.

/** @type {import('@/types/academic').AcademicProfile} */
const profile = {
  slug: '_example',
  name: 'Dr. Kavita Rao',
  title: 'Assistant Professor',
  department: 'Department of Chemistry',
  institution: 'Example Institute of Technology',
  location: 'Pilani, Rajasthan',
  // photo: '/academic/prospects/kavita-rao.jpg',   // optional, only with permission
  email: 'kavita.rao@example.edu',
  office: 'Room 118, Chemistry Block', // optional
  links: {
    // all optional; each one that is set appears as a link
    scholar: 'https://scholar.google.com/',
    orcid: 'https://orcid.org/',
  },
  shortBio: 'I design catalysts that turn agricultural waste into useful chemicals.',
  bio: `I am an Assistant Professor of Chemistry. My group develops low-cost catalysts for converting crop residue into platform chemicals.

Separate paragraphs with a blank line, like this.`,
  researchAreas: ['Heterogeneous catalysis', 'Biomass conversion', 'Green chemistry'],
  education: [
    { degree: 'PhD, Chemistry', institution: 'Example University', year: '2018' },
    { degree: 'M.Sc., Chemistry', institution: 'Example University', year: '2013' },
  ],
  experience: [ // optional; Modern Profile draws this as a timeline, oldest first
    { role: 'Postdoctoral Fellow', org: 'Example Research Centre', years: '2018–2021' },
    { role: 'Assistant Professor', org: 'Example Institute of Technology', years: '2021–present' },
  ],
  publications: [
    {
      title: 'A reusable catalyst for converting rice straw to levulinic acid',
      authors: 'K. Rao, A. Sharma, P. Gupta', // the owner's own name is bolded automatically
      venue: 'Green Chemistry',
      year: 2025,
      link: 'https://doi.org/10.5555/example.2025.001', // optional: DOI or PDF
      highlight: true, // optional: include in "Selected publications"
    },
  ],
  teaching: [{ code: 'CHEM 211', title: 'Physical Chemistry', semester: 'Odd semester' }], // optional
  awards: [{ title: 'Early Career Research Award', year: '2024' }], // optional
  // Research Lab template only (all optional):
  // lab: { name: 'Catalysis for Sustainability Lab', mission: 'One line about what the lab does.' },
  // projects: [{ title: '', summary: '', funder: '', years: '' }],
  // team: [{ name: '', role: 'PhD scholar' }],
  // alumni: [{ name: '', role: 'PhD 2024, now at …' }],
  // news: [{ date: '2026-01-15', text: '' }],
  // openings: 'First paragraph is the intro.\n\nPhD (1 position): details.\n\nHow to apply.',
  // Modern Profile only (optional):
  // talks: [{ title: '', event: '', year: '2025' }],
}

export default profile
