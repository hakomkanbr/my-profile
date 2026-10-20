import { PresentationSession } from '@/types';

export const SESSION_12: PresentationSession = {
  id: 'session-12',
  number: 12,
  slug: 'session-12',
  title: {
    ar: 'المشروع النهائي: من الفكرة المجردة إلى الإطلاق والعرض الحي',
    en: 'Final Capstone Project: From Raw Concept to Production Launch & Showcase',
  },
  subtitle: {
    ar: 'تتويج الرحلة الكاملة (18 ساعة تدريبية): استعراض المسار الهندسي الكامل وتقديم عروض تخرج الطلاب',
    en: 'The 18-hour culmination: reviewing the end-to-end architectural flight path and student graduation showcase',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تتويج رحلة الدورة كاملة: استعراض كيف تحولت فكرة مجردة عبر الـ 12 جلسة إلى موقع ويب حي متكامل، وتقديم الطلاب لمشاريعهم بثقة واحترافية.',
    en: 'Celebrate the full 12-session curriculum arc: demonstrating how an abstract concept became a live production web service, and hosting the student showcase.',
  },
  prerequisites: [
    { ar: 'إكمال الجلسات من 01 إلى 11 وامتلاك مشروع التخرج المكتمل والموثق', en: 'Completion of Sessions 01 through 11 with finalized capstone repository' },
  ],
  objectives: [
    { ar: 'استعراض المسار الهندسي الكامل للـ 12 جلسة وتثبيت الرؤية الشاملة لـ Web Creator', en: 'Review the holistic 12-session architectural flight path and cement the Web Creator identity' },
    { ar: 'إتقان تقديم العرض الفني النهائي (The 10-Point Technical Pitch) أمام أصحاب المصلحة والعملاء', en: 'Master the 10-point technical graduation pitch in front of stakeholders and peers' },
    { ar: 'تقديم كل طالب لمشروعه المكتمل (الفكرة، التصميم، الكود، الـ SEO، والأثر التجاري)', en: 'Host live student graduation presentations covering idea, design, codebase, SEO, and business value' },
    { ar: 'وضع خطة التطور المهني المستمر لما بعد الدورة والانطلاق في سوق العمل الحر والتوظيف', en: 'Establish a concrete post-course career acceleration roadmap for freelancing and industry roles' },
  ],
  timeline: [
    { timeRange: '00:00 – 00:15', durationMinutes: 15, label: { ar: 'الافتتاح: استعراض رحلة الـ 18 ساعة والتحول الكبير لكل طالب', en: 'Opening: The 18-hour journey & individual transformation' }, type: 'context' },
    { timeRange: '00:15 – 00:30', durationMinutes: 15, label: { ar: 'المسار المعماري الكامل: من الفكرة إلى البرومبت والتصميم والكود والشحن', en: 'The Full Architectural Synthesis: Idea to Ship' }, type: 'concept' },
    { timeRange: '00:30 – 00:45', durationMinutes: 15, label: { ar: 'هيكل العرض التقديمي النموذجي (The 10-Point Capstone Pitch)', en: 'The 10-Point Technical Capstone Pitch Architecture' }, type: 'demo' },
    { timeRange: '00:45 – 01:15', durationMinutes: 30, label: { ar: 'عروض الطلاب الحية: استعراض مشاريع التخرج ونقدها احتفائياً', en: 'Live Student Graduation Presentations' }, type: 'practice' },
    { timeRange: '01:15 – 01:25', durationMinutes: 10, label: { ar: 'التقييم الشامل والشهادات التقديرية لمخرجات المشاريع', en: 'Comprehensive Evaluation & Milestone Recognition' }, type: 'review' },
    { timeRange: '01:25 – 01:30', durationMinutes: 5, label: { ar: 'الميثاق الهندسي الدائم والانطلاق نحو المستقبل', en: 'The Permanent Engineering Creed & Future Waypoints' }, type: 'takeaway' },
  ],
  projectMilestone: {
    ar: 'العرض النهائي وإطلاق مشروع التخرج المتكامل كخدمة رقمية حية في معرض أعمالك.',
    en: 'Live graduation showcase and deployment of your capstone web platform as an active portfolio piece.',
  },
  aiRole: {
    ar: 'شريك دائم ومساعد شخصي يرافقك في كافة مشاريعك المستقبلية كمهندس ومصمم ومراجع.',
    en: 'Permanent junior pair programmer and research multiplier accompanying your future career journey.',
  },
  marketConnection: {
    ar: 'امتلاك مشروع متكامل مبني ومختبر وموثق يجعلك مؤهلاً فورياً للتعاقد مع العملاء أو التوظيف في الشركات.',
    en: 'Possessing a deployed, tested, and documented capstone qualifies you immediately for client contracts and senior roles.',
  },
  startScreen: {
    badge: 'SESSION 12 / 12 • THE GRAND FINALE',
    headline: {
      ar: 'حفل التخرج والعرض النهائي: من الفكرة المجردة إلى الإطلاق الكامل',
      en: 'The Grand Finale: From Abstract Concept to Full Production Showcase',
    },
    description: {
      ar: 'اليوم تتوج 18 ساعة من العمل والتعلم الهندسي؛ ستعرض موقعك الحي وتثبت قدرتك كـ Web Creator متكامل يقود الذكاء الاصطناعي ويبني منتجات رقمية حقيقية.',
      en: 'Today crowns 18 hours of disciplined engineering; showcase your live platform and cement your standing as an autonomous Web Creator.',
    },
    sessionGoal: {
      ar: 'تقديم عرض مشروع تخرجك المكتمل والاحتفال بإتمام رحلة الـ 12 جلسة بنجاح باهر.',
      en: 'Deliver your final capstone graduation presentation and celebrate completing the 12-session curriculum.',
    },
  },
  endScreen: {
    headline: {
      ar: 'مبارك التخرج! أصبحت الآن صانع ويب متكاملاً (WEB CREATOR AI)',
      en: 'Graduation Complete! You are Now a Certified Autonomous Web Creator',
    },
    keyRecap: [
      {
        ar: 'لقد قطعت الرحلة كاملة: فكرت، صممت، أسست، برمجت، وثقت، وأطلقت منتجاً حقيقياً.',
        en: 'You conquered the full pipeline: conceived, prompted, designed, coded, tested, and shipped a real product.',
      },
      {
        ar: 'الذكاء الاصطناعي أداة معك للأبد، وعقلك الهندسي هو القائد الذي لا غنى عنه.',
        en: 'AI is your permanent execution lever; your human critical judgment remains the irreplaceable captain.',
      },
      {
        ar: 'هذه ليست نهاية الرحلة، بل هي بداية مسيرتك المهنية كصانع منتجات ويب رائدة.',
        en: 'This is not the destination, but the launchpad of your career building impactful web systems.',
      },
    ],
    nextSessionNumber: 'END',
    nextSessionTitle: {
      ar: 'انطلق إلى سوق العمل وابنِ موقعك القادم بثقة وهندسة رصينة!',
      en: 'Launch into the Market and Engineer Your Next Digital Product with Unshakable Confidence!',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's12-slide-01',
      sessionNumber: 12,
      slideNumber: 1,
      totalSlides: 9,
      type: 'title',
      title: { ar: "المشروع النهائي وحفل التخرج", en: "Final Project Capstone" },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح الجلسة الختامية بطاقة احتفالية وفخر كبير بإنجاز الطلاب.', en: 'Open the grand finale session with celebration, pride, and executive energy.' },
      speakerNotes: { ar: "نفّذ: رحب بالطلاب بحرارة بالغة: \"اليوم هو يوم التتويج! 12 جلسة، 18 ساعة، ومشاريع حقيقية حية بنيتموها بأيديكم وعقولكم!\".\nاسأل: ما الهدف الذي تتوقع تحقيقه في جلسة «المشروع النهائي وحفل التخرج»؟\nتحقق: افتتاح الجلسة الختامية بطاقة احتفالية وفخر كبير بإنجاز الطلاب.", en: "Cue: Give an inspiring opening: \"Today crowns 18 hours of dedicated craftsmanship: real live web products built by your hands!\"\nAsk: What outcome do you expect from “Final Project Capstone”?\nCheck: Open the grand finale session with celebration, pride, and executive energy." },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '12',
          kicker: { ar: 'جلسة التتويج والعرض الختامي', en: 'Graduation Showcase & Finale' },
          headline: { ar: 'THE CAPSTONE SHOWCASE', en: 'THE CAPSTONE SHOWCASE' },
          subheadline: { ar: 'من الفكرة المجردة إلى الإطلاق الكامل: عرض مشاريع الطلاب الحية', en: 'From raw concept to full production release: Live capstone student showcase' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['Grand Finale', 'Capstone Project', 'Live Demos', 'Graduation Showcase', 'Next Milestones'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's12-slide-02',
      sessionNumber: 12,
      slideNumber: 2,
      totalSlides: 9,
      type: 'context',
      title: { ar: "تأمل الرحلة — من أين بدأنا وأين نقف اليوم؟", en: "Reflecting on the 18-Hour Transformation" },
      subtitle: { ar: 'التحول المذهل من متلقٍ ومتردد أمام الكود إلى مهندس يقود الذكاء الاصطناعي باقتدار', en: 'The radical shift from passive coding hesitancy to confident, AI-augmented engineering leadership' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'مراجعة نقطة البداية في الجلسة 01 ومقارنتها بالمستوى المعماري الرفيع الذي وصل إليه الطلاب اليوم.', en: 'Compare the initial hesitancy of Session 01 with the formidable architectural confidence mastered today.' },
      speakerNotes: { ar: "نفّذ: ذكرهم بالجلسة الأولى عندما تساءلنا: \"ماذا يعني أن تكون مطور ويب اليوم؟\". اليوم يملك كل طالب الإجابة العملية في مشروعه.\nاسأل: ما المشكلة التي توضّحها «تأمل الرحلة — من أين بدأنا وأين نقف اليوم؟»؟\nتحقق: تنتهي هذه الدورة بمشروع حي يمكن عرضه ومراجعته؛ استخدمه لتوضيح ما تعلمته عملياً.", en: "Cue: Remind them of Session 01 question: \"What does it mean to be a web developer today?\" Today everyone holds the tangible answer in code.\nAsk: What problem does “Reflecting on the 18-Hour Transformation” point to?\nCheck: This course concludes with a live project learners can present and review as evidence of their work." },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'بدأت رحلتنا بمجرد فكرة نظرية، واليوم تمتلك مشروعاً برمجياً متكاملاً مبنياً بأحدث تقنيات الويب العالمية (Next.js 16 + React 19).',
            en: 'We started with a speculative idea; today you command an enterprise Next.js 16 web application.',
          },
          realWorldProblem: {
            ar: 'تنتهي هذه الدورة بمشروع حي يمكن عرضه ومراجعته؛ استخدمه لتوضيح ما تعلمته عملياً.',
            en: 'This course concludes with a live project learners can present and review as evidence of their work.',
          },
          whyItMatters: {
            ar: 'أصبحت تملك المنهجية الكاملة: لم تعد خائفاً من أي فكرة أو مشروع جديد، لأنك تعرف بالضبط كيف تفككه، تطلب من AI تحليله، وتبنيه باحتراف.',
            en: 'You now possess an immutable mental system: fearless in the face of any client brief, knowing exactly how to deconstruct, audit, and build.',
          },
        },
      },
    },

    // Slide 3: Visual (The Complete 12-Session Pipeline)
    {
      id: 's12-slide-03',
      sessionNumber: 12,
      slideNumber: 3,
      totalSlides: 9,
      type: 'visual',
      title: { ar: "رحلة المشروع من البداية للنهاية", en: "The Project Journey, Start to Finish" },
      subtitle: { ar: 'الرحلة المتصلة من الفكرة والبرومبت وحتى التصميم والكود والـ SEO والتسويق والإطلاق', en: 'The unbroken chain: Idea → Prompt → Stitch → Scaffolding → Antigravity → Foundations → JS → React → Next.js → SEO → Market' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'استعراض كل محطة في الرحلة كلوحة شرف تلخص المهارات المكتسبة.', en: 'Review every waypoint in the journey as a testament to mastered competencies.' },
      speakerNotes: { ar: "نفّذ: استعرض المحطات الاثنتي عشرة واطلب من الطلاب تذكر كيف أضافت كل جلسة قطعة جديدة لبناء مشروعهم.\nاسأل: اشرح ترتيب المراحل في «رحلة المشروع من البداية للنهاية» بصوتك.\nتحقق: الفكرة والمعمارية ← التصميم بـ Stitch ← تحليل Antigravity ← HTML + CSS ← مكونات React ← Next.js + SEO ← دراسة الحالة والتسويق ← الإطلاق والعرض الحي", en: "Cue: Walk through all 12 stations, highlighting how each session contributed an essential building block.\nAsk: Ask learners to walk through the stages in “The Project Journey, Start to Finish”.\nCheck: Idea & Mindset → UI Prototype → Analysis First → Semantic Core → React Tree → Production SEO → Case Study → Live Launch" },
      payload: {
        type: 'visual',
        data: {
          caption: { ar: 'هذه ليست مجرد دورة تعليمية؛ هذه رحلة تأسيس صانع ويب حقيقي قادر على المنافسة عالمياً.', en: 'This is the complete operational blueprint of an autonomous modern Web Creator.' },
          diagramType: 'pipeline',
          nodes: [
            { id: 'f1', stepNumber: '01', title: { ar: 'الفكرة والمعمارية', en: 'Idea & Mindset' }, badge: 'Think' },
            { id: 'f2', stepNumber: '03', title: { ar: 'التصميم بـ Stitch', en: 'UI Prototype' }, badge: 'Design' },
            { id: 'f3', stepNumber: '05', title: { ar: 'تحليل Antigravity', en: 'Analysis First' }, badge: 'Audit' },
            { id: 'f4', stepNumber: '06', title: { ar: 'HTML + CSS', en: 'Semantic Core' }, badge: 'Build' },
            { id: 'f5', stepNumber: '08', title: { ar: 'مكونات React', en: 'React Tree' }, badge: 'Develop' },
            { id: 'f6', stepNumber: '09', title: { ar: 'Next.js + SEO', en: 'Production SEO' }, badge: 'Enhance' },
            { id: 'f7', stepNumber: '11', title: { ar: 'دراسة الحالة والتسويق', en: 'Case Study' }, badge: 'Market' },
            { id: 'f8', stepNumber: '12', title: { ar: 'الإطلاق والعرض الحي', en: 'Live Launch' }, badge: 'Showcase' },
          ],
        },
      },
    },

    // Slide 4: Concept (The 10-Point Graduation Pitch)
    {
      id: 's12-slide-04',
      sessionNumber: 12,
      slideNumber: 4,
      totalSlides: 9,
      type: 'concept',
      title: { ar: "هيكل العرض التقديمي الختامي (The 10-Point Pitch)", en: "The 10-Point Capstone Pitch Structure" },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'تحديد النقاط الـ 10 التي يجب أن يغطيها كل طالب أثناء استعراض مشروعه أمام الزملاء.', en: 'Provide the structured 10-point roadmap for student graduation presentations.' },
      speakerNotes: { ar: "نفّذ: اشرح النقاط العشر التي سيتحدث فيها كل طالب خلال دقيقتين إلى 3 دقائق أثناء مشاركة شاشته في Zoom.\nاسأل: كيف تطبّق هذا المبدأ: العرض الهندسي المحترف يشرح: المشكلة، الفكرة، المعمارية، الكود الحي، والأثر التجاري في 3 دقائق.؟\nتحقق: قاعدة العرض: ابدأ دائماً بالمشكلة التي تحلها قبل أن تعرض أي سطر كود أو واجهة.", en: "Cue: Explain the 10 points students will present in their 2-3 minute live Zoom screen share.\nAsk: How would you apply this principle: Professional technical pitches articulate problem, architecture, live code, and business ROI in 3 minutes.?\nCheck: Presentation Rule: Always ground your presentation in the commercial problem before opening code." },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'العرض الهندسي المحترف يشرح: المشكلة، الفكرة، المعمارية، الكود الحي، والأثر التجاري في 3 دقائق.',
            en: 'Professional technical pitches articulate problem, architecture, live code, and business ROI in 3 minutes.',
          },
          tagline: { ar: 'THE 10-POINT EXECUTIVE SHOWCASE', en: 'THE 10-POINT EXECUTIVE SHOWCASE' },
          explanation: {
            ar: 'عندما تعرض مشروعك أمام عميل أو في مقابلة عمل، لا تفتح الكود عشوائياً. اتبع هذا التسلسل المنضبط لتأسر انتباه الحاضرين.',
            en: 'When presenting to clients or hiring managers, follow this rigorous 10-step sequence to captivate your audience.',
          },
          bulletPoints: [
            { ar: '1. المشكلة والنشاط التجاري | 2. الفكرة والقيمة المقدمة | 3. الجمهور المستهدف', en: '1. Problem Context | 2. Core Value Idea | 3. Target Persona' },
            { ar: '4. التصميم البصري والـ Tokens | 5. التقنيات المختارة ولماذا؟ | 6. المعمارية وتفكيك المكونات', en: '4. Visual Design & Tokens | 5. Tech Stack Rationale | 6. Component Architecture' },
            { ar: '7. مسار توظيف الذكاء الاصطناعي | 8. استعراض الموقع الحي والتجاوب | 9. إعدادات الـ SEO والأداء', en: '7. AI Pairing Workflow | 8. Live Responsive Demo | 9. Production SEO Setup' },
            { ar: '10. الدروس المستفادة والخطوة القادمة للمشروع', en: '10. Key Engineering Takeaways & Next Commercial Milestones' },
          ],
          architecturalRule: {
            ar: 'قاعدة العرض: ابدأ دائماً بالمشكلة التي تحلها قبل أن تعرض أي سطر كود أو واجهة.',
            en: 'Presentation Rule: Always ground your presentation in the commercial problem before opening code.',
          },
        },
      },
    },

    // Slide 5: Demo (Instructor Walkthrough of Trattoria Roma)
    {
      id: 's12-slide-05',
      sessionNumber: 12,
      slideNumber: 5,
      totalSlides: 9,
      type: 'demo',
      title: { ar: "عرض مشروع Trattoria Roma", en: "Trattoria Roma Walkthrough" },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'تقديم المدرب لعرض نموذجي يطبق النقاط الـ 10 أمام الطلاب قبل أن يبدأ دورهم.', en: 'Instructor models the 10-point showcase live as an inspirational benchmark for students.' },
      speakerNotes: { ar: "نفّذ: قم بعرض مشروع Trattoria Roma كاملاً في 3 دقائق: المشكلة، التصميم في Stitch، شجرة المكونات، تجاوب الموقع، وفحص الـ SEO.\nاسأل: نمذجة العرض الهندسي المكتمل في 3 دقائق ليكون دليلاً استرشادياً لعروض الطلاب.\nتحقق: عرض هندسي احترافي يربط الأكواد بالأثر التجاري ويثبت تمكن صانع الويب.", en: "Cue: Deliver a punchy 3-minute showcase of Trattoria Roma demonstrating problem, components, mobile responsiveness, and SEO.\nAsk: Model a punchy, senior-level 3-minute capstone showcase anchoring student presentations.\nCheck: Masterful 3-minute pitch fusing code elegance with tangible business value." },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'نمذجة العرض الهندسي المكتمل في 3 دقائق ليكون دليلاً استرشادياً لعروض الطلاب.',
            en: 'Model a punchy, senior-level 3-minute capstone showcase anchoring student presentations.',
          },
          promptToUse: `Capstone Project Summary: Trattoria Roma
- Domain: Artisan Italian Restaurant in Rome
- Problem Solved: Inefficient telephone bookings eliminated via 1-second mobile reservation engine
- Tech Stack: Next.js 16, React 19, Tailwind CSS v4, Semantic HTML5
- Lighthouse Score: 99 Performance, 100 SEO, 100 Accessibility`,
          instructorSteps: [
            { ar: 'استعراض صفحة الهبوط في المتصفح وتجربة حجز طاولة حي', en: 'Demonstrate live landing page and execute interactive reservation booking' },
            { ar: 'فتح محاكي الهاتف وإظهار التجاوب السلس لقائمة الطعام', en: 'Switch to 375px mobile viewport showing flawless card responsiveness' },
            { ar: 'إلقاء نظرة سريعة على كود المكونات النظيف في VS Code', en: 'Flash the clean component tree and typed interfaces in VS Code' },
            { ar: 'عرض نتيجة فحص الـ SEO والـ Metadata في أدوات المطورين', en: 'Inspect document metadata and Open Graph tags in DevTools' },
          ],
          expectedOutput: {
            ar: 'عرض هندسي احترافي يربط الأكواد بالأثر التجاري ويثبت تمكن صانع الويب.',
            en: 'Masterful 3-minute pitch fusing code elegance with tangible business value.',
          },
        },
      },
    },

    // Slide 6: Challenge (Student Live Presentations on Zoom)
    {
      id: 's12-slide-06',
      sessionNumber: 12,
      slideNumber: 6,
      totalSlides: 9,
      type: 'challenge',
      title: { ar: "منصة عروض الطلاب — استعراض مشاريع التخرج الحية", en: "Student Showcase Stage — Live Capstone Presentations" },
      estimatedMinutes: 30,
      teachingGoal: { ar: 'إتاحة الفرصة لكل طالب لمشاركة شاشته وتقديم مشروعه بثقة أمام زملائه والمدرب.', en: 'Facilitate live student screen shares and capstone pitches with celebratory constructive feedback.' },
      speakerNotes: { ar: "نفّذ: هذا هو الجزء الأهم في الجلسة. ادعُ الطلاب بالاسم لمشاركة شاشاتهم، واستمع باهتمام، واحتفِ بتميز كل مشروع ونقاط قوته.\nاسأل: ما الناتج الذي ستسلّمه؟ مشاركة شاشتك عبر Zoom وتقديم مشروع تخرجك في 3 دقائق وفق هيكل النقاط الـ 10.\nتحقق: تقديم عرض التخرج الفني لمشروعك واعتماده رسمياً في سجل خريجي WEB CREATOR AI.", en: "Cue: The heart of Session 12. Invite students to share screens, celebrate their wins, and applaud their milestones.\nAsk: What will you submit? Share your screen on Zoom and deliver your 3-minute capstone graduation presentation.\nCheck: Successful live graduation showcase and formal milestone certification as a Web Creator." },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'مشاركة شاشتك عبر Zoom وتقديم مشروع تخرجك في 3 دقائق وفق هيكل النقاط الـ 10.',
            en: 'Share your screen on Zoom and deliver your 3-minute capstone graduation presentation.'
          },
          durationMinutes: 15,
          objective: {
            ar: 'ترسيخ الثقة المهنية ومهارة الإلقاء والتحدث التقني أمام العملاء وأصحاب المصلحة.',
            en: 'Cement professional confidence, technical storytelling, and client presentation poise.'
          },
          instructions: [
            { ar: 'شارك شاشة متصفحك وافتح مشروعك المحلي أو المنشور', en: 'Share browser window displaying your live project' },
            { ar: 'اشرح مشكلة النشاط التجاري وكيف صممت الواجهة لحلها', en: 'Articulate the commercial problem and how your UI solves it' },
            { ar: 'أظهر التجاوب على شاشة الهاتف واشرح كيف وظفت الذكاء الاصطناعي في المسار', en: 'Demonstrate mobile responsiveness and explain your AI workflow' },
            { ar: 'اذكر أهم درس هندسي خرجت به من رحلة الـ 12 جلسة', en: 'Share your #1 engineering insight from this 12-session journey' },
          ],
          starterPromptOrCode: 'Pitch: 1. Business | 2. Problem | 3. Architecture | 4. Live Demo | 5. Results & Takeaway',
          deliverable: {
            ar: 'تقديم عرض التخرج الفني لمشروعك واعتماده رسمياً في سجل خريجي WEB CREATOR AI.',
            en: 'Successful live graduation showcase and formal milestone certification as a Web Creator.'
          },
        },
      },
    },

    // Slide 7: Project (Milestone 12 - Capstone Complete)
    {
      id: 's12-slide-07',
      sessionNumber: 12,
      slideNumber: 7,
      totalSlides: 9,
      type: 'project',
      title: { ar: "الإطلاق الكامل والاعتماد النهائي", en: "Project Milestone — Certified Capstone Deployment" },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'الاحتفال باكتمال المشروع ومراجعته لاعتماده في بورتفوليو كل طالب.', en: 'Formally review and celebrate the capstone built across all 12 modules.' },
      speakerNotes: { ar: "نفّذ: أكد للجميع: \"مشروعك الآن أصل رقمي حقيقي. ضعه في سيرتك الذاتية، انشره على لينكدإن، واستخدمه كدليل قاطع على قدرتك!\".\nاسأل: أي مخرج من هذه المرحلة يحتاج إلى استكمال؟\nتحقق: موقع ويب متكامل الميزات يعمل بأحدث معايير Next.js و React؛ معمارية دلالية مراجعة أمنياً ومحسنة لمحركات البحث وفق قائمة التحقق؛ دراسة حالة تجارية وعرض خدمات جاهز للتقديم للعملاء", en: "Cue: Remind learners: \"Your project is an authentic digital asset. Anchor it on your CV, LinkedIn, and portfolio!\"\nAsk: Which deliverable from this phase still needs work?\nCheck: Fully featured production web application built on Next.js 16; Semantic, hardened, SEO-optimized architecture; Documented case study and commercial proposal ready for client outreach" },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 12: تتويج المشروع النهائي والاعتماد', en: 'Phase 12: Final Capstone Certification & Launch' },
          stepNumber: '12',
          whatWeBuildNow: {
            ar: 'اكتمال واعتماد مشروع التخرج كأصل تجاري وبرمجي حي في معرض أعمالك.',
            en: 'Formal certification and launch of your flagship project as an active commercial portfolio asset.',
          },
          deliverables: [
            { ar: 'موقع ويب متكامل الميزات يعمل بأحدث معايير Next.js و React', en: 'Fully featured production web application built on Next.js 16' },
            { ar: 'معمارية دلالية مراجعة أمنياً ومحسنة لمحركات البحث وفق قائمة التحقق', en: 'Semantic, hardened, SEO-optimized architecture' },
            { ar: 'دراسة حالة تجارية وعرض خدمات جاهز للتقديم للعملاء', en: 'Documented case study and commercial proposal ready for client outreach' },
          ],
          connectionToFinalProject: {
            ar: 'هذا المشروع هو برهانك العملي الأول الذي سينطلق بك نحو مشاريع أكبر وعملاء دائمين في المستقبل.',
            en: 'This capstone is your undisputed proof of craftsmanship propelling you into major client contracts.',
          },
        },
      },
    },

    // Slide 8: Takeaway (The Permanent Creator Creed)
    {
      id: 's12-slide-08',
      sessionNumber: 12,
      slideNumber: 8,
      totalSlides: 9,
      type: 'takeaway',
      title: { ar: "ميثاق صانع الويب الدائم (The Creator Creed)", en: "The Web Creator Permanent Creed" },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت المبادئ الثلاثة الكبرى التي يجب أن ترافق الطالب طوال حياته المهنية.', en: 'Engrave the 3 supreme principles governing the student career indefinitely.' },
      speakerNotes: { ar: "نفّذ: اقرأ الميثاق بكل هيبة وثقة: \"1. الذكاء الاصطناعي أداتك وعقلك هو القائد، 2. ابنِ حلولاً تحل مشاكل حقيقية، 3. لا تتوقف عن التعلم والتجربة\".\nاسأل: أي مبدأ من «ميثاق صانع الويب الدائم (The Creator Creed)» ستستخدمه في مشروعك؟\nتحقق: فكر كمهندس، صمم كفنان، ابنِ بالذكاء الاصطناعي، وأطلق حلولاً تغير العالم الرقمي.", en: "Cue: Deliver the creed with profound conviction: AI is your instrument, build solutions that solve real problems, never stop growing.\nAsk: Which principle from “The Web Creator Permanent Creed” will you use in your project?\nCheck: Think like an architect, design like an artist, build with AI, and ship solutions that reshape the web." },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'أنت المهندس والقائد — والذكاء الاصطناعي أداتك', en: 'You are the Architect — AI is the Multiplier' },
              description: {
                ar: 'لا تكن مجرد مستهلك للأدوات؛ حافظ على عقلية التفكيك والتحليل والتدقيق الهندسي في كل سطر كود وكل برومبت.',
                en: 'Never degenerate into a passive prompt consumer; uphold engineering analysis, critical review, and architectural discipline.',
              },
            },
            {
              number: '02',
              title: { ar: 'ركز على القيمة الحقيقية للأعمال والناس', en: 'Focus on Concrete Human & Business Value' },
              description: {
                ar: 'أعظم المواقع هي التي تسهل حياة المستخدمين وتزيد من نجاح أصحاب الأعمال؛ اجعل القيمة هي بوصلتك الأولى.',
                en: 'Premier web systems simplify user lives and expand client prosperity; make genuine value your singular compass.',
              },
            },
            {
              number: '03',
              title: { ar: 'البناء المستمر والتطور الذي لا يتوقف', en: 'Continuous Iteration & Lifelong Craftsmanship' },
              description: {
                ar: 'عالم التقنية يتطور كل يوم؛ واصل بناء المشاريع، تجربة الأدوات الجديدة، وتطوير معرض أعمالك دون انقطاع.',
                en: 'The tech frontier expands daily; continue shipping projects, evaluating emerging tools, and honing your portfolio.',
              },
            },
          ],
          coreMotto: {
            ar: 'فكر كمهندس، صمم كفنان، ابنِ بالذكاء الاصطناعي، وأطلق حلولاً تغير العالم الرقمي.',
            en: 'Think like an architect, design like an artist, build with AI, and ship solutions that reshape the web.',
          },
        },
      },
    },

    // Slide 9: Next (Future Milestones)
    {
      id: 's12-slide-09',
      sessionNumber: 12,
      slideNumber: 9,
      totalSlides: 9,
      type: 'next',
      title: { ar: "إلى الأمام — انطلق وابنِ مشروعك القادم!", en: "Forward Waypoints — Build Your Next Great Web Asset" },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'ختام الدورة بتصفيق حار وتوجيه الطلاب نحو خطواتهم المهنية القادمة في سوق العمل.', en: 'Conclude curriculum with standing ovation and direct students toward active client freelancing.' },
      speakerNotes: { ar: "نفّذ: اختم الدورة بكلمة مؤثرة وتصفيق حار: \"أهنئكم جميعاً من أعماق قلبي! لقد أصبحتم اليوم صناع ويب معاصرين مؤهلين للريادة. انطلقوا واصنعوا المستقبل!\".\nاسأل: ما الذي ستجهزه قبل الجلسة القادمة؟\nتحقق: شارك شهادة إنجازك ورابط مشروعك على لينكدإن وابدأ بالتواصل مع أول 5 عملاء هذا الأسبوع!", en: "Cue: Final heartfelt words: \"Congratulations to every single creator! You conquered the journey. Step forward and shape the digital future!\"\nAsk: What will you prepare before the next session?\nCheck: Publish your capstone case study on LinkedIn and initiate your first client outreach dialogues this week!" },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '★',
          nextSessionTitle: {
            ar: 'انطلق في سوق العمل: عملاؤك ومشاريعك القادمة بانتظارك!',
            en: 'Step into the Market: Your Next Clients and Projects Await!',
          },
          teaser: {
            ar: 'لقد أكملت بنجاح 12 جلسة و 18 ساعة من التدريب الهندسي المكثف وأصبحت تمتلك كل الأدوات لصناعة وإطلاق مواقع ويب عالمية المستوى.',
            en: 'You have mastered 18 hours of intensive engineering training and now command all capabilities to design, scaffold, optimize, and ship world-class web systems.',
          },
          preparationHint: {
            ar: 'شارك شهادة إنجازك ورابط مشروعك على لينكدإن وابدأ بالتواصل مع أول 5 عملاء هذا الأسبوع!',
            en: 'Publish your capstone case study on LinkedIn and initiate your first client outreach dialogues this week!',
          },
        },
      },
    },
  ],
};
