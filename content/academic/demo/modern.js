// @ts-check
// Fictional professor for the Modern Profile demo. Every person, project, talk and DOI here is
// invented; DOIs use the 10.5555 prefix, which is reserved for examples.

/** @type {import('@/types/academic').AcademicProfile} */
const profile = {
  slug: 'rajesh-bhandari',
  name: 'Prof. Rajesh Bhandari',
  title: 'Professor of Practice',
  department: 'School of Infrastructure and Planning',
  institution: 'Aravalli Institute of Technology',
  location: 'Jaipur, Rajasthan',
  photo: '/academic/demo/rajesh-bhandari.jpg',
  email: 'rajesh.bhandari@example.edu',
  links: {
    linkedin: 'https://www.linkedin.com/',
    scholar: 'https://scholar.google.com/',
  },
  shortBio: 'Twenty-five years of building highways, metros and water systems, now teaching the next generation how infrastructure gets delivered.',
  bio: `I spent twenty-five years in infrastructure consulting before joining academia, most of it leading the planning and delivery of large public projects: expressways, metro corridors and city water systems.

As a Professor of Practice, I teach what I wish I had been taught: how projects are really financed, why most of them run late, and how engineers can work with governments, contractors and communities without losing sight of the public interest.

I still advise state governments and development banks on project structuring, and I speak regularly on public–private partnerships and infrastructure governance.`,
  researchAreas: [
    'Public–private partnerships',
    'Infrastructure project finance',
    'Delivery of large public projects',
    'Urban water systems',
    'Infrastructure governance and procurement',
  ],
  education: [
    { degree: 'M.Tech, Construction Technology and Management', institution: 'IIT Delhi', year: '1999' },
    { degree: 'B.E., Civil Engineering', institution: 'MNIT Jaipur', year: '1997' },
  ],
  // Oldest first: the Modern Profile template draws this as a career timeline. Firm names are fictional.
  experience: [
    { role: 'Graduate Engineer', org: 'Northgate Highways Ltd.', years: '1999–2003' },
    { role: 'Project Manager, Highways', org: 'Sethu Consulting Engineers, New Delhi', years: '2003–2010' },
    { role: 'Director, Transport Advisory', org: 'Halden Engineering Group, India practice', years: '2010–2018' },
    { role: 'Partner, Infrastructure & PPP', org: 'Tarang Infrastructure Advisors', years: '2018–2024' },
    { role: 'Professor of Practice', org: 'Aravalli Institute of Technology', years: '2024–present' },
  ],
  projects: [
    {
      title: 'Structuring a 180 km expressway as a hybrid annuity project',
      summary: 'Led the financial and risk structure that let a state road agency attract private bidders without a guaranteed traffic return.',
      years: '2019–2021',
    },
    {
      title: 'Metro corridor feasibility for a tier-2 city',
      summary: 'Ridership, cost and phasing study that recommended a smaller first phase, cutting the initial capital need by a third.',
      years: '2016–2017',
    },
    {
      title: '24×7 water supply for a city of 1.2 million',
      summary: 'Advised the city on moving from intermittent to continuous supply, including tariff design and a performance-based operator contract.',
      years: '2012–2015',
    },
  ],
  publications: [
    {
      title: 'Why Indian infrastructure projects run late: evidence from 400 contracts',
      authors: 'R. Bhandari, P. Sharma',
      venue: 'Journal of Infrastructure Development',
      year: 2025,
      link: 'https://doi.org/10.5555/jid.2025.0114',
      highlight: true,
    },
    {
      title: 'Hybrid annuity models after a decade: what worked',
      authors: 'R. Bhandari',
      venue: 'Economic and Political Weekly',
      year: 2024,
      link: 'https://doi.org/10.5555/epw.2024.0332',
      highlight: true,
    },
  ],
  talks: [
    { title: 'What a decade of hybrid annuity roads taught us', event: 'Talk, National Infrastructure Summit, New Delhi', year: '2026' },
    { title: 'Teaching project delivery to engineers', event: 'Keynote, Indian Society for Technical Education convention', year: '2025' },
    { title: 'Getting private capital into city water', event: 'Panel, Urban Water Forum', year: '2025' },
    { title: 'Why our projects run late, and what to do about it', event: 'Podcast interview, The Infra Conversation', year: '2024' },
  ],
  teaching: [
    { title: 'Infrastructure Finance and PPPs', semester: 'Odd semester' },
    { title: 'Managing Large Projects', semester: 'Even semester' },
  ],
  awards: [
    { title: 'Distinguished Alumnus Award, MNIT Jaipur', year: '2022' },
  ],
}

export default profile
