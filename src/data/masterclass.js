// Content for the /ai-masterclass/ landing page.
// Instructor facts are pulled from ./portfolio so the two pages never drift apart.
import { data } from './portfolio'

export const SITE_URL = 'https://karanchoudhary.dev'
export const PAGE_URL = `${SITE_URL}/ai-masterclass/`

export const masterclass = {
  eyebrow: 'AI Masterclass · Webinars & Workshops',

  audiences: [
    {
      key: 'teachers',
      label: 'For Teachers & Faculty',
      title: 'Spend less time on paperwork, more time teaching.',
      points: [
        'Draft lesson plans, worksheets and rubrics in minutes',
        'Generate quizzes and question banks with answer keys',
        'Adapt one lesson for different levels in the same class',
        'Give faster, more specific feedback on student work',
        'Set a fair classroom policy on AI use and academic honesty',
      ],
    },
    {
      key: 'students',
      label: 'For Students',
      title: 'Use AI as a study partner, not a shortcut.',
      points: [
        'Turn notes, PDFs and lectures into flashcards and practice tests',
        'Research faster and check AI answers against real sources',
        'Get unstuck on concepts with step-by-step explanations',
        'Use AI for projects, coding and presentations the right way',
        'Build a portfolio and prepare for interviews with AI',
      ],
    },
    {
      key: 'institutions',
      label: 'For Schools & Colleges',
      title: 'One programme for your whole campus.',
      points: [
        'Faculty Development Programmes (FDPs) on AI in education',
        'Student bootcamps run alongside clubs and tech fests',
        'Separate tracks per department: engineering, science, commerce, arts',
        'An agenda planned around your syllabus and academic calendar',
        'Help writing an AI-use policy for your institution',
      ],
    },
  ],

  formats: [
    {
      name: 'Webinar',
      duration: '60–90 min',
      mode: 'Online',
      best: 'Large groups getting started',
      detail: 'A live walkthrough of what AI can do in your field, with real demos and open Q&A at the end.',
    },
    {
      name: 'Masterclass',
      duration: '3 hours',
      mode: 'Online or on-campus',
      best: 'Hands-on learning',
      detail: 'Laptops open. Participants build real prompts, study aids and teaching material for their own subject during the session.',
      featured: true,
    },
    {
      name: 'Workshop series / FDP',
      duration: '2–5 days',
      mode: 'Online or on-campus',
      best: 'Institutions',
      detail: 'A structured multi-day programme with department tracks, take-home assignments and a final project.',
    },
  ],

  curriculum: [
    {
      title: 'How AI actually works',
      summary: 'What large language models are, why they sound confident when they are wrong, and where they are genuinely useful.',
      topics: ['LLMs in plain language', 'Hallucinations & limits', 'Picking the right tool'],
    },
    {
      title: 'Prompting that gets results',
      summary: 'A simple, repeatable way to write prompts: give context, a role, examples and constraints, then refine.',
      topics: ['Role · Context · Task · Format', 'Few-shot examples', 'Iterating on output'],
    },
    {
      title: 'AI for teaching',
      summary: 'Lesson plans, assessments, rubrics and differentiated material built live, using your own syllabus.',
      topics: ['Lesson & unit plans', 'Quizzes & question banks', 'Rubrics & feedback'],
    },
    {
      title: 'AI for learning',
      summary: 'Study methods that make students do more of the thinking: active recall, spaced practice and a tutor that asks questions back.',
      topics: ['Notes → flashcards', 'AI as a Socratic tutor', 'Exam preparation'],
    },
    {
      title: 'Research & writing with integrity',
      summary: 'Find sources, summarise papers and check claims without handing your thinking over to a chatbot.',
      topics: ['Source-grounded answers', 'Fact-checking AI output', 'Citing AI use honestly'],
    },
    {
      title: 'Build your own AI assistant',
      summary: 'No code needed. Set up a custom assistant grounded in your own notes, syllabus or department documents.',
      topics: ['Custom GPTs & Gemini Gems', 'NotebookLM notebooks', 'Sharing with a class'],
    },
    {
      title: 'Responsible & safe AI',
      summary: 'Privacy, bias, and what should never be pasted into a chatbot, plus a practical classroom AI policy.',
      topics: ['Student data & privacy', 'Bias & fairness', 'Writing an AI-use policy'],
    },
  ],

  fields: [
    'Computer Science & Engineering',
    'Science & Mathematics',
    'Commerce & Management',
    'Humanities & Languages',
    'Medical & Life Sciences',
    'School Teachers (K–12)',
    'Competitive-exam Aspirants',
    'Research Scholars',
  ],

  tools: [
    { name: 'ChatGPT', icon: 'openai' },
    { name: 'Gemini', icon: 'gemini' },
    { name: 'NotebookLM', icon: 'notebooklm' },
    { name: 'Claude', icon: 'claude' },
    { name: 'Perplexity', icon: 'perplexity' },
    { name: 'GitHub Copilot', icon: 'copilot' },
    { name: 'Google Classroom', icon: 'classroom' },
    { name: 'Google Colab', icon: 'colab' },
  ],

  takeaways: [
    { title: 'A prompt playbook', text: 'Ready-to-use prompts for your subject and role, yours to keep after the session.' },
    { title: 'Work you made in the session', text: 'The lesson plans, study sets or assistants you built during the session, ready to use the next day.' },
    { title: 'Guidance on what to avoid', text: 'Where AI fails, what not to share with it, and how to stay within academic-integrity rules.' },
    { title: 'Follow-up Q&A', text: 'A way to ask questions after the session, once you have tried things in your own classroom.' },
  ],

  steps: [
    { title: 'Tell me about your group', text: 'Who is attending, their subjects, how comfortable they are with tech, and what you want them to leave with.' },
    { title: 'I plan the agenda', text: 'You get a session outline planned around your field, with examples from your own syllabus.' },
    { title: 'We run it live', text: 'Online or on-campus. Mostly hands-on, with demos, exercises and plenty of time for questions.' },
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
      a: 'No. The sessions for teachers and non-CS students assume no coding knowledge at all. If you can use email and a browser, you can follow along. Engineering and CS groups get a more technical track.',
    },
    {
      q: 'Are the sessions online or in person?',
      a: 'Both. Webinars run online on Google Meet, Zoom or your own platform. Masterclasses and FDPs can be online or on-campus. I am based in Rajasthan, and travel elsewhere can be arranged.',
    },
    {
      q: 'Which AI tools do you cover? Are they free?',
      a: 'Mainly ChatGPT, Google Gemini, NotebookLM, Claude and Perplexity, with others added depending on the field. Everything taught works on the free tiers, and I point out when a paid plan is actually worth it.',
    },
    {
      q: "Won't this just help students cheat?",
      a: 'Academic integrity is part of every session. Students learn to use AI to understand material, not to outsource it, and teachers learn to design assignments and policies that hold up when AI is available.',
    },
    {
      q: 'Can the session be customised for our department or syllabus?',
      a: 'Yes, and it is recommended. Before the session I ask for your subjects and a few topics from the syllabus so every demo uses material your participants actually teach or study.',
    },
    {
      q: 'How much does it cost?',
      a: 'It depends on the format, duration, group size and whether it is on-campus. Send your details through the form below and I will reply with a quote and a draft agenda, usually within 24 hours.',
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
