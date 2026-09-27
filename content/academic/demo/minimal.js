// @ts-check
// Fictional professor for the Minimal Scholar demo. Every person, paper and DOI here is invented;
// DOIs use the 10.5555 prefix, which is reserved for examples and never resolves to a real paper.

/** @type {import('@/types/academic').AcademicProfile} */
const profile = {
  slug: 'meera-kulkarni',
  name: 'Dr. Meera Kulkarni',
  title: 'Assistant Professor',
  department: 'Department of Civil Engineering',
  institution: 'Deccan Institute of Technology',
  location: 'Pune, Maharashtra',
  photo: '/academic/demo/meera-kulkarni.jpg',
  email: 'meera.kulkarni@example.edu',
  office: 'Room 214, Civil Engineering Block',
  links: {
    scholar: 'https://scholar.google.com/',
    orcid: 'https://orcid.org/',
    researchgate: 'https://www.researchgate.net/',
  },
  shortBio: 'I study how traffic moves on Indian roads, where cars, two-wheelers and autos share space without lanes.',
  bio: `I am an Assistant Professor in the Department of Civil Engineering at Deccan Institute of Technology. My research looks at traffic flow in mixed, lane-less conditions: how vehicles of very different sizes and speeds interact, and what that means for signal timing, capacity and safety.

Before joining DIT, I was a postdoctoral researcher at TU Delft, working on data-driven traffic state estimation. I completed my PhD at IIT Madras, where I built one of the first large trajectory datasets of Indian urban intersections.

I teach transportation engineering and traffic flow theory, and I work with city agencies in Maharashtra on signal retiming and pedestrian safety audits.`,
  researchAreas: [
    'Traffic flow in mixed, lane-less traffic',
    'Adaptive signal control',
    'Pedestrian and two-wheeler safety',
    'Trajectory data from drone and CCTV video',
    'Connected vehicles in developing cities',
  ],
  education: [
    { degree: 'PhD, Civil Engineering (Transportation)', institution: 'IIT Madras', year: '2019' },
    { degree: 'M.Tech, Transportation Systems Engineering', institution: 'IIT Bombay', year: '2014' },
    { degree: 'B.E., Civil Engineering', institution: 'College of Engineering Pune', year: '2012' },
  ],
  experience: [
    { role: 'Assistant Professor', org: 'Deccan Institute of Technology', years: '2021–present' },
    { role: 'Postdoctoral Researcher', org: 'TU Delft', years: '2019–2021' },
  ],
  publications: [
    {
      title: 'Lateral gap acceptance of two-wheelers in lane-less urban traffic',
      authors: 'M. Kulkarni, S. Deshpande, R. Iyer',
      venue: 'Transportation Research Part C: Emerging Technologies',
      year: 2026,
      link: 'https://doi.org/10.5555/trc.2026.0142',
      highlight: true,
    },
    {
      title: 'A trajectory dataset of 14 signalised intersections in Pune',
      authors: 'S. Deshpande, M. Kulkarni',
      venue: 'Scientific Data',
      year: 2025,
      link: 'https://doi.org/10.5555/sdata.2025.0087',
      highlight: true,
    },
    {
      title: 'Estimating saturation flow at mixed-traffic signals from CCTV video',
      authors: 'A. Patil, M. Kulkarni',
      venue: 'Transportation Research Record',
      year: 2025,
      link: 'https://doi.org/10.5555/trr.2025.1133',
    },
    {
      title: 'Pedestrian crossing behaviour at unsignalised midblock locations in Indian cities',
      authors: 'M. Kulkarni, N. Joshi, A. Patil',
      venue: 'Accident Analysis & Prevention',
      year: 2024,
      link: 'https://doi.org/10.5555/aap.2024.0409',
      highlight: true,
    },
    {
      title: 'Area-occupancy based capacity estimation for heterogeneous traffic',
      authors: 'M. Kulkarni, K. Raman',
      venue: 'Journal of Transportation Engineering, Part A: Systems',
      year: 2023,
      link: 'https://doi.org/10.5555/jte.2023.0611',
    },
    {
      title: 'Learning signal timing plans from sparse detector data',
      authors: 'L. van Dijk, M. Kulkarni, H. de Vries',
      venue: 'IEEE Transactions on Intelligent Transportation Systems',
      year: 2022,
      link: 'https://doi.org/10.5555/tits.2022.3318',
    },
    {
      title: 'Kalman-filter traffic state estimation with probe vehicle data',
      authors: 'M. Kulkarni, L. van Dijk',
      venue: 'Transportmetrica B: Transport Dynamics',
      year: 2021,
      link: 'https://doi.org/10.5555/ttrb.2021.0215',
    },
    {
      title: 'Vehicle interactions at urban intersections without lane discipline',
      authors: 'M. Kulkarni, K. Raman',
      venue: 'Transportation Research Part B: Methodological',
      year: 2020,
      link: 'https://doi.org/10.5555/trb.2020.0078',
      highlight: true,
    },
    {
      title: 'Automated extraction of vehicle trajectories from overhead video',
      authors: 'M. Kulkarni, K. Raman',
      venue: 'Proceedings of the Transportation Research Board Annual Meeting',
      year: 2019,
    },
  ],
  teaching: [
    { code: 'CE 342', title: 'Transportation Engineering', semester: 'Odd semester' },
    { code: 'CE 561', title: 'Traffic Flow Theory', semester: 'Even semester' },
    { code: 'CE 598', title: 'Traffic Data Analytics (lab)', semester: 'Even semester' },
  ],
  awards: [
    { title: 'Young Researcher Award, Indian Roads Congress', year: '2024' },
    { title: 'Best Paper, Conference of Transportation Research Group of India', year: '2023' },
  ],
  news: [
    { date: '2026-08-12', text: 'Our paper on two-wheeler gap acceptance is accepted in Transportation Research Part C.' },
    { date: '2026-03-04', text: 'Started a signal retiming study on 14 city corridors with the local traffic department.' },
  ],
  openings: 'I am looking for one PhD student in 2027 to work on traffic simulation for mixed traffic. Some Python and an interest in data from video are useful; a transportation background is not required.',
}

export default profile
