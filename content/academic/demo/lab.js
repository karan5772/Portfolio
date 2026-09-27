// @ts-check
// Fictional professor and lab for the Research Lab demo. Every person, project, paper and DOI here
// is invented; DOIs use the 10.5555 prefix, which is reserved for examples.

/** @type {import('@/types/academic').AcademicProfile} */
const profile = {
  slug: 'arjun-menon',
  name: 'Dr. Arjun Menon',
  title: 'Associate Professor',
  department: 'Department of Civil Engineering',
  institution: 'Malabar Institute of Science and Technology',
  location: 'Kozhikode, Kerala',
  photo: '/academic/demo/lab/arjun-menon.jpg',
  email: 'arjun.menon@example.edu',
  office: 'Hydraulics Lab, Block C',
  links: {
    scholar: 'https://scholar.google.com/',
    orcid: 'https://orcid.org/',
    github: 'https://github.com/',
  },
  lab: {
    name: 'Hydroclimate & Risk Lab',
    mission: 'We forecast floods and droughts in a warming climate, and turn those forecasts into decisions that districts can act on.',
  },
  shortBio: 'I lead the Hydroclimate & Risk Lab, which studies extreme rainfall, floods and droughts across peninsular India.',
  bio: `I am an Associate Professor of Civil Engineering and head of the Hydroclimate & Risk Lab. My group combines hydrological models, satellite data and machine learning to understand how rainfall extremes are changing and what that means for flood risk and water supply.

Much of our work is done with district disaster management authorities and state water resources departments, so that our forecasts are used in practice rather than sitting in papers.

I did my PhD at IISc Bengaluru and a postdoc at the University of Bristol before joining MIST in 2018.`,
  researchAreas: [
    'Extreme rainfall and flash floods',
    'Drought monitoring from satellite data',
    'Reservoir operations under climate change',
    'Machine learning for streamflow forecasting',
    'Flood risk communication',
  ],
  education: [
    { degree: 'PhD, Civil Engineering (Water Resources)', institution: 'Indian Institute of Science, Bengaluru', year: '2015' },
    { degree: 'M.Tech, Hydraulics and Water Resources', institution: 'NIT Calicut', year: '2010' },
    { degree: 'B.Tech, Civil Engineering', institution: 'Government Engineering College, Thrissur', year: '2008' },
  ],
  experience: [
    { role: 'Associate Professor', org: 'Malabar Institute of Science and Technology', years: '2023–present' },
    { role: 'Assistant Professor', org: 'Malabar Institute of Science and Technology', years: '2018–2023' },
    { role: 'Postdoctoral Research Associate', org: 'University of Bristol', years: '2015–2018' },
  ],
  projects: [
    {
      title: 'Flash flood early warning for the Western Ghats',
      summary: 'A forecasting system that gives district officials a 24-hour warning of flash floods in steep catchments, tested with three districts in Kerala.',
      funder: 'DST-SERB Core Research Grant',
      years: '2024–2027',
    },
    {
      title: 'Satellite drought index for smallholder farms',
      summary: 'Combining soil moisture and vegetation data from satellites into a weekly drought index at village scale.',
      funder: 'ISRO RESPOND',
      years: '2023–2026',
    },
    {
      title: 'Reservoir rules for a changing monsoon',
      summary: 'Testing whether dam release rules written in the 1980s still work under current rainfall patterns, and proposing updated ones.',
      funder: 'Ministry of Earth Sciences',
      years: '2022–2025',
    },
    {
      title: 'Explaining ML streamflow forecasts',
      summary: 'Making machine learning flood forecasts interpretable enough that engineers can trust and question them.',
      funder: 'Institute seed grant',
      years: '2025–2026',
    },
  ],
  team: [
    { name: 'Dr. Kavya Nair', photo: '/academic/demo/lab/kavya-nair.jpg', role: 'Postdoctoral researcher' },
    { name: 'Rohan Pillai', photo: '/academic/demo/lab/rohan-pillai.jpg', role: 'PhD scholar, flash flood forecasting' },
    { name: 'Fathima Rasheed', photo: '/academic/demo/lab/fathima-rasheed.jpg', role: 'PhD scholar, satellite drought monitoring' },
    { name: 'Siddharth Rao', photo: '/academic/demo/lab/siddharth-rao.jpg', role: 'PhD scholar, reservoir operations' },
    { name: 'Ananya Varma', photo: '/academic/demo/lab/ananya-varma.jpg', role: 'M.Tech student' },
    { name: 'Joel Mathew', photo: '/academic/demo/lab/joel-mathew.jpg', role: 'M.Tech student' },
    { name: 'Nikhil Das', photo: '/academic/demo/lab/nikhil-das.jpg', role: 'Project associate' },
  ],
  alumni: [
    { name: 'Dr. Meghna Iyer', role: 'PhD 2024, now Assistant Professor at IIT Palakkad' },
    { name: 'Dr. Vivek Kurian', role: 'PhD 2023, now Scientist at a national hydrology agency' },
    { name: 'Aparna Suresh', role: 'M.Tech 2025, now flood modeller at an engineering consultancy' },
  ],
  publications: [
    {
      title: 'Twenty-four-hour flash flood forecasts for steep tropical catchments',
      authors: 'R. Pillai, K. Nair, A. Menon',
      venue: 'Water Resources Research',
      year: 2026,
      link: 'https://doi.org/10.5555/wrr.2026.0311',
      highlight: true,
    },
    {
      title: 'A village-scale drought index from satellite soil moisture',
      authors: 'F. Rasheed, A. Menon',
      venue: 'Remote Sensing of Environment',
      year: 2025,
      link: 'https://doi.org/10.5555/rse.2025.1142',
      highlight: true,
    },
    {
      title: 'Are 1980s reservoir rules fit for the current monsoon?',
      authors: 'S. Rao, M. Iyer, A. Menon',
      venue: 'Journal of Hydrology',
      year: 2025,
      link: 'https://doi.org/10.5555/jhydrol.2025.0764',
    },
    {
      title: 'Changing intensity of sub-daily rainfall extremes over the Western Ghats',
      authors: 'M. Iyer, A. Menon',
      venue: 'Geophysical Research Letters',
      year: 2024,
      link: 'https://doi.org/10.5555/grl.2024.0921',
      highlight: true,
    },
    {
      title: 'Interpretable LSTM streamflow forecasts for Indian river basins',
      authors: 'V. Kurian, A. Menon',
      venue: 'Hydrology and Earth System Sciences',
      year: 2023,
      link: 'https://doi.org/10.5555/hess.2023.0455',
    },
    {
      title: 'How district officials read flood forecasts: a survey from Kerala',
      authors: 'A. Menon, K. Nair, J. Thomas',
      venue: 'International Journal of Disaster Risk Reduction',
      year: 2022,
      link: 'https://doi.org/10.5555/ijdrr.2022.0198',
    },
  ],
  news: [
    { date: '2026-09-02', text: 'Rohan’s paper on flash flood forecasting is out in Water Resources Research.' },
    { date: '2026-07-18', text: 'Our flood warning system ran live for its first monsoon with three district authorities.' },
    { date: '2026-05-10', text: 'Fathima won the best poster award at the National Hydrology Symposium.' },
    { date: '2026-01-22', text: 'Welcome to Ananya and Joel, who joined the lab as M.Tech students.' },
  ],
  openings: `We are hiring for the 2027 intake.

PhD (1 position): flash flood forecasting with machine learning. You should have a master’s degree in civil, environmental or earth sciences, or a strong B.Tech with research experience, and be comfortable writing Python.

Project associate (1 position, 2 years): maintaining the forecasting system and working with district officials. Suits someone who likes both code and fieldwork.

To apply, email Dr. Menon a one-page statement of what you want to work on, your CV, and one piece of work you are proud of (a thesis, a paper, or a GitHub repository). We reply to every email within two weeks.`,
  awards: [
    { title: 'SERB Early Career Research Award', year: '2019' },
  ],
}

export default profile
