// @ts-check
// Copy for the /academic showcase page. Prices live in ./pricing.js, not here.

export const contact = {
  email: 'karankumar8239@gmail.com',
  whatsapp: 'https://wa.me/916350320901',
  whatsappText: 'Hi Karan, I saw your academic website templates and would like to know more.',
  emailSubject: 'Academic website enquiry',
  budgetText: 'Hi Karan, I would like an academic website. My budget is ₹',
  location: 'Based in Pilani. Happy to meet in person.',
}

/** Template showcase order follows the price list; `demo` is the public demo route */
export const templates = {
  minimal: { demo: '/academic/demo/minimal/', shot: '/academic/shots/minimal.dea4f9f9.jpg', highlight: 'A publication list typeset like a proper bibliography, with your name in bold.' },
  modern: { demo: '/academic/demo/modern/', shot: '/academic/shots/modern.81525aa0.jpg', highlight: 'A large portrait and one clear line about what you do, then your career, talks and work.' },
  lab: { demo: '/academic/demo/lab/', shot: '/academic/shots/lab.d7679263.jpg', highlight: 'Projects with their funders, your team, and a “Join the lab” section that tells students exactly how to apply.' },
}

export const included = [
  { title: 'Your own domain, set up for you', text: 'You buy a domain like yourname.in in your own name, and I help you pick it and connect it. The address stays yours, and it is easy to put on a slide or a CV.' },
  { title: 'Works on phones', text: 'Many visitors, including prospective PhD students, will open your site on a phone. Every template is designed for small screens first.' },
  { title: 'Google Scholar and ORCID links', text: 'Your research profiles sit one click away, alongside ResearchGate, LinkedIn or GitHub if you use them.' },
  { title: 'A proper publication list', text: 'Papers grouped by year, with authors, venues and DOI links, and your own name in bold.' },
  { title: 'Fast to load', text: 'Pages are plain and light, so they open quickly on campus Wi-Fi and slow mobile connections.' },
  { title: 'Updates handled for you', text: 'Send a new paper, student or piece of news on WhatsApp and I add it. You never log in to anything.' },
]

export const steps = [
  { title: 'Pick a template', text: 'Look through the three live demos and choose the one that fits how you want to come across.' },
  { title: 'Send your CV or profile link', text: 'A CV, your university profile page or your Google Scholar link is enough to start.' },
  { title: 'Review a preview', text: 'Within a few days you get a preview of your site to check. Tell me what to change.' },
  { title: 'Go live on your domain', text: 'You buy your domain (I will tell you exactly which one and where), and the site goes live on it.' },
]

export const faqs = [
  {
    q: 'My college already has a profile page for me. Why do I need this?',
    a: 'College profile pages are hard to update and show only what their template allows. This site is yours: it can show all your publications, students, projects and news, and it stays current because I update it when you send me changes.',
  },
  {
    q: 'Do I need to do anything technical?',
    a: 'No. You send your CV or profile link, look at the preview, and tell me what to change. The only thing you do yourself is buy the domain, and I walk you through that. I handle the setup, hosting and every update.',
  },
  {
    q: 'How do updates work?',
    a: 'Send me the new paper, student, talk or news item on WhatsApp or email, and I add it to the site. The yearly updates plan covers this along with hosting.',
  },
  {
    q: 'Can I move the site later?',
    a: 'Yes. You own the domain and the content. If you ever want to move it somewhere else, I hand everything over.',
  },
  {
    q: 'How long does it take?',
    a: 'You see a preview within a few days of sending your CV. After that, going live depends mainly on how quickly you review it and confirm the domain.',
  },
]

/** "Why not build it yourself, or with AI?" Honest reasons, not a hard sell */
export const whyMe = {
  intro: 'You can. Google Sites, WordPress and AI website builders are cheap or free, and they work. Here is what you get by handing it to me instead.',
  reasons: [
    { title: 'Your time stays on research', text: 'A site that looks right takes a weekend or two to build, and then more time every time you add a paper. I do that part.' },
    { title: 'It stays current', text: 'Most self-built faculty sites stop being updated after a semester. You send a WhatsApp message and I make the change, so your site never says “2022”.' },
    { title: 'Built for academics, not shops', text: 'AI and drag-and-drop builders produce generic landing pages. You get a real publication list: grouped by year, DOI links, your name in bold, Scholar and ORCID one click away.' },
    { title: 'Found by the right people', text: 'Proper titles, descriptions and structured data, so a PhD applicant searching your name finds your site, and a link shared on WhatsApp or email shows a clean preview.' },
    { title: 'No ads, no builder branding', text: 'Free plans often add their own logo, banners or slow scripts. Your site shows only your work, loads fast on phones, and meets accessibility basics.' },
    { title: 'Someone to ask', text: 'If something looks wrong or breaks, you message one person who already knows your site, instead of searching help forums.' },
  ],
}

export const budget = {
  title: 'Have a different budget?',
  text: 'Tell me what you can spend and what you need, and I will tell you honestly what I can build for it. Many sites start small and grow later.',
}
