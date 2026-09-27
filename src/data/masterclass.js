// Content for the /ai-masterclass/ landing page.
// Instructor facts are pulled from ./portfolio so the two pages never drift apart.
import { data } from './portfolio'

export const SITE_URL = 'https://karanchoudhary.dev'
export const PAGE_URL = `${SITE_URL}/ai-masterclass/`

export const masterclass = {
  programs: [
    {
      key: 'students',
      short: 'College students',
      label: 'For College Students',
      name: 'AI Webinar for College Students',
      formats: [{ name: 'Webinar', duration: '60–90 min', mode: 'Online' }],
      title: 'Use AI for coursework, projects and placements.',
      points: [
        'Turn lecture notes and PDFs into flashcards and practice tests before semester exams',
        'Research papers faster and check every AI claim against the real source',
        'Plan and debug minor and major projects with AI, and explain every line in your viva',
        'Write lab reports, assignments and presentations within your college rules on AI',
        'Prepare for placements and internships: resumes, mock interviews and aptitude practice',
      ],
    },
    {
      key: 'faculty',
      short: 'Faculty',
      label: 'For College Faculty',
      name: 'AI Webinar for Faculty',
      formats: [{ name: 'Webinar', duration: '60–90 min', mode: 'Online' }],
      title: 'Cut the hours spent on lecture prep, question papers and documentation.',
      points: [
        'Draft lecture plans, slides and tutorial sheets from your own syllabus',
        "Build question papers and MCQ banks mapped to course outcomes and Bloom's levels",
        'Write rubrics for projects, lab records and internal assessments',
        'Speed up literature reviews and research writing, with citations you can verify',
        'Set an AI-use policy for assignments that students can follow and you can enforce',
      ],
      featured: true,
    },
  ],

  curriculum: [
    {
      title: 'AI foundations & prompting',
      summary: 'What large language models are, why they sound confident when they are wrong, and a simple, repeatable way to write prompts that get useful results.',
      topics: ['LLMs in plain language', 'Hallucinations & limits', 'Role · Context · Task · Format'],
    },
    {
      title: 'AI for teaching & learning',
      summary: 'Faculty build lecture plans, question papers and rubrics from their own syllabus. Students turn lecture notes into practice tests and use AI as a tutor that asks questions back.',
      topics: ['Lecture plans & question papers', 'CO-mapped MCQ banks', 'Notes → practice tests', 'AI as a Socratic tutor'],
    },
    {
      title: 'Research, integrity & responsible AI',
      summary: 'Literature reviews, paper summaries and fact-checking without handing your thinking over to a chatbot. Covers plagiarism, citing AI use, privacy, and a practical AI policy for your department.',
      topics: ['Literature reviews', 'Plagiarism & citing AI', 'Student data & privacy', 'Department AI-use policy'],
    },
    {
      title: 'Build your own AI assistant',
      summary: 'No code needed. Set up an assistant grounded in your course material, lab manuals or department documents, and share it with a batch.',
      topics: ['Custom GPTs & Gemini Gems', 'NotebookLM for a course', 'Sharing with a batch'],
    },
  ],

  fields: [
    'Engineering (B.Tech, M.Tech)',
    'Computer Applications (BCA, MCA)',
    'Sciences (B.Sc, M.Sc)',
    'Commerce & Management (B.Com, BBA, MBA)',
    'Arts & Humanities',
    'Pharmacy & Life Sciences',
    'Law',
    'PhD scholars',
  ],

  tools: [
    { name: 'ChatGPT', icon: 'openai' },
    { name: 'Gemini', icon: 'gemini' },
    { name: 'NotebookLM', icon: 'notebooklm' },
    { name: 'Claude', icon: 'claude' },
  ],

  takeaways: [
    { title: 'A prompt playbook', text: 'Ready-to-use prompts for your subject and role, yours to keep after the session.' },
    { title: 'Work you made in the session', text: 'The lecture plans, question banks, study sets or assistants you built during the session, ready to use the next day.' },
    { title: 'Guidance on what to avoid', text: 'Where AI fails, what not to share with it, and how to stay within academic-integrity rules.' },
    { title: 'Follow-up Q&A', text: 'A way to ask questions after the session, once you have tried things with your own classes.' },
  ],

  steps: [
    { title: 'Tell me about your group', text: 'Which department and year, how many people, how comfortable they are with tech, and what you want them to leave with.' },
    { title: 'I plan the agenda', text: 'You get a session outline planned around your field, with examples from your own syllabus.' },
    { title: 'We run it live', text: 'Online, on Google Meet, Zoom or your college’s own platform. Mostly hands-on, with demos, exercises and plenty of time for questions.' },
    { title: 'You keep the resources', text: 'Prompt playbooks, templates and follow-up support so what participants learned gets used.' },
  ],

  // Portfolio projects that show the instructor builds with AI in education
  relevantWork: [
    { title: 'MyTute AI', text: 'An AI tutor that answers questions from your own PDFs and YouTube lectures (RAG with OpenAI + Qdrant).', url: 'https://github.com/karan5772/mytute' },
    { title: 'QuizApp', text: 'A coding and MCQ quiz platform with analytics for students and educators.', url: 'https://github.com/karan5772/quizApp' },
    { title: 'BKBIHE College Website', text: 'An institutional website with a Google Gemini-powered admission enquiry assistant.', url: 'https://bkbihe.vercel.app' },
    { title: 'Repo Review', text: 'An LLM-powered code reviewer that gives actionable feedback on GitHub repositories.', url: 'https://github.com/karan5772/ai-revierer' },
  ],

  faqs: [
    {
      q: 'Do participants need a technical background?',
      a: 'No. The sessions for faculty and non-CS students assume no coding knowledge at all. If you can use email and a browser, you can follow along. Engineering and CS groups get a more technical track.',
    },
    {
      q: 'Where are the sessions held?',
      a: 'All sessions are live and online, on Google Meet, Zoom or your college’s own platform. Participants can join from a lab, a seminar hall or their own laptops.',
    },
    {
      q: 'Which AI tools do you cover? Are they free?',
      a: 'Mainly ChatGPT, Google Gemini, NotebookLM and Claude, with others added depending on the field. Everything taught works on the free tiers, and I point out when a paid plan is actually worth it.',
    },
    {
      q: "Won't this just help students cheat?",
      a: 'Academic integrity is part of every session. Students learn to use AI to understand material, not to outsource it, and faculty learn to design assignments, vivas and policies that hold up when AI is available.',
    },
    {
      q: 'Can the session be customised for our department or syllabus?',
      a: 'Yes, and it is recommended. Before the session I ask for your subjects and a few topics from the syllabus so every demo uses material your faculty actually teach or your students actually study.',
    },
    {
      q: 'How much does it cost?',
      a: 'It depends on the program, session length and group size. Send your details through the form below and I will reply with a quote and a draft agenda, usually within 24 hours.',
    },
  ],
}

export const instructor = {
  name: data.name,
  image: data.profileImage,
  email: data.email,
  phone: data.phone,
  social: data.social,
  experience: data.experience,
  certifications: data.achievements,
  education: data.education[0],
}
