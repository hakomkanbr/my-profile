import { PresentationSession } from '@/types';

export const SESSION_05: PresentationSession = {
  id: 'session-05',
  number: 5,
  slug: 'session-05',
  title: {
    ar: 'Antigravity: حلل المعمارية قبل التعديل أو البرمجة',
    en: 'Antigravity: Analyze Architecture Before Modifying or Building',
  },
  subtitle: {
    ar: 'القاعدة الذهبية التي تفصل المحترفين عن الهواة: كيف تجعل الذكاء الاصطناعي يفحص المشروع ويضع خطة محكمة قبل لمس الملفات؟',
    en: 'The golden rule of professional AI pairing: deep architectural analysis and planning before modifying any source code',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تعليم الطالب بروتوكول العمل الاحترافي مع Antigravity: التحليل الشامل (Do Not Modify Files) ← خطة التطوير (Implementation Plan) ← التنفيذ المنضبط ← المراجعة.',
    en: 'Master the professional Antigravity protocol: Full Analysis (Do Not Modify Files) → Implementation Plan → Disciplined Execution → Verification.',
  },
  prerequisites: [
    { ar: 'إكمال الجلسة 04 وتأسيس هيكل المشروع البرمجي', en: 'Completion of Session 04 with active repository workspace' },
  ],
  objectives: [
    { ar: 'إدراك الكارثة البرمجية الناتجة عن إعطاء أوامر عشوائية للـ AI في مشروع قائم دون تحليل مسبق', en: 'Understand the destructive fallout of blind prompting on existing repositories without prior analysis' },
    { ar: 'إتقان صياغة برومبت التحليل الشامل الصارم (The Analysis-First Prompt)', en: 'Master the rigorous Analysis-First Prompt commanding zero file modification' },
    { ar: 'قراءة تقرير المعمارية والمخاطر المحتملة (Potential Issues) المستخرج من Antigravity', en: 'Interpret architectural diagnostics, dependency trees, and risk audits produced by Antigravity' },
    { ar: 'اعتماد خطة التطوير البرمجية (Implementation Plan) قبل الانتقال للتنفيذ', en: 'Formally approve an implementation blueprint before executing modifications' },
  ],
  timeline: [
    { timeRange: '00:00 – 00:10', durationMinutes: 10, label: { ar: 'مقدمة: لماذا يكسر الهواة مشاريعهم عند استخدام AI؟', en: 'Why blind prompting breaks existing projects' }, type: 'context' },
    { timeRange: '00:10 – 00:25', durationMinutes: 15, label: { ar: 'بروتوكول التحليل: ANALYZE ← UNDERSTAND ← PLAN ← IMPLEMENT', en: 'Protocol: Analyze → Understand → Plan → Implement' }, type: 'concept' },
    { timeRange: '00:25 – 00:45', durationMinutes: 20, label: { ar: 'تطبيق حي: تشغيل برومبت التحليل الشامل على مشروع المطعم', en: 'Live Demo: Running Full Architectural Analysis' }, type: 'demo' },
    { timeRange: '00:45 – 01:00', durationMinutes: 15, label: { ar: 'مقارنة الأوامر: الساذج ("Build this") مقابل المحترف ("Analyze first")', en: 'Command Comparison: Bad vs Better vs Master' }, type: 'comparison' },
    { timeRange: '01:00 – 01:20', durationMinutes: 20, label: { ar: 'تحدي الطلاب: جعل Antigravity يحلل مشروعهم ويستخرج خطته', en: 'Student Challenge: Run Analysis on Capstone Repo' }, type: 'practice' },
    { timeRange: '01:20 – 01:25', durationMinutes: 5, label: { ar: 'مراجعة تقارير التحليل المكتشفة في الشات', en: 'Review discovered architecture reports' }, type: 'review' },
    { timeRange: '01:25 – 01:30', durationMinutes: 5, label: { ar: 'الخلاصة والتجهيز لأساسيات HTML و CSS (Session 06)', en: 'Takeaways & Prep for HTML/CSS Foundations' }, type: 'takeaway' },
  ],
  projectMilestone: {
    ar: 'إنتاج وثيقة التحليل المعماري وخطة التنفيذ المعتمدة لمشروع التخرج.',
    en: 'Produce approved architectural analysis and implementation plan for the capstone project.',
  },
  aiRole: {
    ar: 'مهندس فحص وتدقيق (Auditor) يقرأ شجرة الملفات ويشرح الاعتماديات دون تعديل أي ملف.',
    en: 'Lead architectural auditor parsing repository tree, dependencies, and risks without modifying files.',
  },
  marketConnection: {
    ar: 'المهندس الذي يفهم المشاريع القائمة قبل التعديل يمنع الأعطال الكارثية في بيئات الإنتاج الحية.',
    en: 'Engineers who analyze legacy code before altering files prevent multi-thousand-dollar production outages.',
  },
  startScreen: {
    badge: 'SESSION 05 / 12 • ARCHITECTURAL AUDITING',
    headline: {
      ar: 'Antigravity: حلل وافهم المشروع قبل أن تغير حرفاً واحداً',
      en: 'Antigravity: Analyze Before You Build — The Auditor Mindset',
    },
    description: {
      ar: 'تعلم كيف تتعامل مع الذكاء الاصطناعي داخل مستودع كود حقيقي كمهندس مسؤول يطلب التحليل والتخطيط قبل التنفيذ.',
      en: 'Learn to pair with AI inside real repositories as a responsible lead engineer demanding analysis before code changes.',
    },
    sessionGoal: {
      ar: 'تنفيذ بروتوكول التحليل المعماري الكامل على مشروعك واستخراج خطة التنفيذ المعتمدة.',
      en: 'Execute the complete architectural analysis protocol on your repo and approve the development plan.',
    },
  },
  endScreen: {
    headline: {
      ar: 'عظيم! تمتلك الآن خارطة طريق هندسية دقيقة ومعتمدة لمشروعك',
      en: 'Outstanding! You Command an Audited Architectural Roadmap for Your Project',
    },
    keyRecap: [
      {
        ar: 'القاعدة الصارمة: اطلب التحليل أولاً وأكّد صراحة: "Do not modify files".',
        en: 'Strict Rule: Command analysis first and explicitly enforce: "Do not modify files".',
      },
      {
        ar: 'خطة التنفيذ (Implementation Plan) تجعل كل خطوة برمجية متوقعة ومدروسة المخاطر.',
        en: 'A structured implementation plan makes every code modification deterministic and risk-aware.',
      },
      {
        ar: 'الذكاء الاصطناعي شريك فحص وتدقيق ممتاز إذا ألزمته بفهم السياق قبل البرمجة.',
        en: 'AI is a world-class code reviewer when forced to comprehend context before executing.',
      },
    ],
    nextSessionNumber: '06',
    nextSessionTitle: {
      ar: 'HTML + CSS: الأساس المتين لبناء صفحات ويب سريعة ومرنة',
      en: 'HTML + CSS Foundations: Building Resilient, Semantic & Responsive Web Layouts',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's05-slide-01',
      sessionNumber: 5,
      slideNumber: 1,
      totalSlides: 16,
      type: 'title',
      title: { ar: 'Antigravity: حلل قبل أن تبني', en: 'Antigravity: Analyze Before Build' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح أهم جلسة في بروتوكول العمل مع الذكاء الاصطناعي في بيئات المشاريع الحقيقية.', en: 'Open the hallmark session on disciplined AI collaboration in real repositories.' },
      speakerNotes: { ar: 'أكد للطلاب: "هذه الجلسة هي التي تفصل من يستخدم AI كأداة ألعاب ومن يستخدمه كمهندس محترف يدير أنظمة بملايين الدولارات".', en: 'State: "This session separates casual AI toys from enterprise engineers managing multi-million-dollar systems".' },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '05',
          kicker: { ar: 'بروتوكول التدقيق الهندسي الصارم', en: 'Rigorous Architectural Auditing' },
          headline: { ar: 'ANALYZE BEFORE BUILD', en: 'ANALYZE BEFORE BUILD' },
          subheadline: { ar: 'كيف تفحص المشروع القائم وتفهم معمارية ملفاته قبل كتابة سطر كود واحد؟', en: 'Auditing existing repository trees and dependencies before editing a single line of code' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['Antigravity', 'Zero-Change Audit', 'Architecture Review', 'Implementation Plan'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's05-slide-02',
      sessionNumber: 5,
      slideNumber: 2,
      totalSlides: 16,
      type: 'context',
      title: { ar: 'الكارثة البرمجية: ماذا يحدث عندما تقول للـ AI "Build this"؟', en: 'The Disaster of Blind Prompting' },
      subtitle: { ar: 'كيف يدمّر التسرع المعمارية المنظمة للمشروع ويستبدلها بحزم عشوائية متضاربة؟', en: 'How hasty prompting dismantles clean architectures and injects conflicting dependencies' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'توضيح المخاطر الكارثية للتعديل المباشر دون فحص السياق والاعتماديات.', en: 'Illustrate the catastrophic regressions caused by modifying files without prior contextual audit.' },
      speakerNotes: { ar: 'اشرح سيناريو الفشل الشهير: مطور يطلب تعديل زر، فيقوم الذكاء الاصطناعي بتثبيت مكتبة قديمة وإعادة كتابة ملف التكوين وكسر التطبيق بالكامل.', en: 'Describe the classic failure: developer asks for a button, AI rewrites configs, installs legacy packages, and bricks the build.' },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'أدوات الذكاء الاصطناعي قادرة على قراءة مئات الملفات في ثوانٍ، لكنها إذا لم تمنعها صراحة من التعديل فستبدأ بالتغيير الفوري.',
            en: 'AI models can parse entire codebases in seconds; without explicit negative constraints, they mutate files blindly.',
          },
          realWorldProblem: {
            ar: 'أغلب مشاريع الشركات تنهار بسبب قيام المطورين بتعديل أكواد دون فهم تأثيرها على بقية المكونات (Regression Bugs).',
            en: 'Most production outages occur when developers alter code without tracing upstream architectural dependencies.',
          },
          whyItMatters: {
            ar: 'إلزام الذكاء الاصطناعي بالتحليل أولاً يجعله يكشف لك نقاط الضعف والمشاكل المحتملة قبل أن تحدث.',
            en: 'Enforcing analysis first transforms AI into a protective audit scanner detecting risks in advance.',
          },
        },
      },
    },

    // Slide 3: Visual (The 4-Step Antigravity Protocol)
    {
      id: 's05-slide-03',
      sessionNumber: 5,
      slideNumber: 3,
      totalSlides: 16,
      type: 'visual',
      title: { ar: 'بروتوكول Antigravity للعمل الهندسي المنضبط', en: 'The 4-Phase Antigravity Protocol' },
      subtitle: { ar: 'المسار الإلزامي الأبدي: حلل ← افهم ← خطط ← نفذ وراجع', en: 'The inviolable cycle: Analyze → Understand → Plan → Implement & Audit' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'ترسيخ المراحل الأربع كبروتوكول تشغيل قياسي (SOP) للطلاب.', en: 'Cement the 4 phases as our course Standard Operating Procedure (SOP).' },
      speakerNotes: { ar: 'أكد: "لا نقفز للمرحلة 4 (التنفيذ) قبل المرور بـ 1 و 2 و 3 واعتماد الخطة. هذه هي علامة المهندس المحترف".', en: 'Stress: "Never jump to implementation without completing steps 1, 2, and 3. That is the mark of senior engineering".' },
      payload: {
        type: 'visual',
        data: {
          caption: { ar: 'بروتوكول العمل الهندسي يضمن بقاء المشروع قابلاً للصيانة وخالياً من المفاجآت.', en: 'The architectural protocol guarantees zero regressions and predictable delivery.' },
          diagramType: 'pipeline',
          nodes: [
            { id: 'a1', stepNumber: '01', title: { ar: 'التحليل الشامل', en: 'Deep Analysis' }, badge: 'Read-Only' },
            { id: 'a2', stepNumber: '02', title: { ar: 'فهم المعمارية', en: 'Architecture Map' }, badge: 'Cognition' },
            { id: 'a3', stepNumber: '03', title: { ar: 'خطة التنفيذ', en: 'Implementation Plan' }, badge: 'Approval' },
            { id: 'a4', stepNumber: '04', title: { ar: 'التنفيذ الجراحي', en: 'Surgical Build' }, badge: 'Action' },
            { id: 'a5', stepNumber: '05', title: { ar: 'التدقيق والاختبار', en: 'Verification Audit' }, badge: 'Ship' },
          ],
        },
      },
    },

    // Slide 4: AI (The Canonical Analysis Prompt)
    {
      id: 's05-slide-04',
      sessionNumber: 5,
      slideNumber: 4,
      totalSlides: 16,
      type: 'ai',
      title: { ar: 'برومبت التحليل الشامل الصارم (The Analysis Prompt)', en: 'The Canonical Analysis-First Prompt' },
      subtitle: { ar: 'البرومبت المعياري الذي يلزم Antigravity بالقراءة والتحليل دون المساس بأي ملف', en: 'The mandatory specification commanding thorough audit with zero file mutation' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'حفظ هذا البرومبت في ذاكرة الطلاب كأداة عمل دائمة.', en: 'Equip every student with this reusable, zero-risk analysis prompt artifact.' },
      speakerNotes: { ar: 'اقرأ شرط "Do not modify files" بنبرة واضحة. هذا هو الشرط الذي يحمي مشاريعك من التدمير والتخبيط العشوائي.', en: 'Emphasize "Do not modify files". This single constraint saves hundreds of hours of catastrophic reversions.' },
      payload: {
        type: 'ai',
        data: {
          role: 'Principal Software Architect and Senior Code Reviewer.',
          context: 'This is an existing web repository for our capstone commercial web project.',
          task: 'Analyze the entire project architecture thoroughly before making or proposing any code changes.',
          constraints: 'DO NOT MODIFY ANY FILES. Do not create new files. Read and inspect only.',
          output: `Return a structured architectural audit containing:
1. Framework & Core Dependencies
2. Application Routes & Entrypoints
3. Component Hierarchy & Separation of Concerns
4. Styling System & Design Tokens
5. Static Assets & Fonts
6. Potential Architectural Risks or Missing Configurations
7. Step-by-Step Recommended Implementation Plan`,
          acceptanceCriteria: [
            'No files touched or mutated in the working tree',
            'Clear diagnosis of current repository readiness',
            'Executable, phased implementation roadmap proposed for human review',
          ],
          iterationTip: {
            ar: 'إذا كان المشروع ضخماً، اطلب منه تحليل مجلد معين (مثل src/components أو src/app) في برومبت مركز.',
            en: 'In large repositories, target specific subtrees like src/components for surgical analysis.',
          },
        },
      },
    },

    // Slide 5: Comparison (Bad vs Better Prompting)
    {
      id: 's05-slide-05',
      sessionNumber: 5,
      slideNumber: 5,
      totalSlides: 16,
      type: 'comparison',
      title: { ar: 'مقارنة الأوامر: الساذج مقابل المحترف', en: 'Prompting Styles: Naive vs Senior Architect' },
      subtitle: { ar: 'كيف تتغير نتائج وسلوك الذكاء الاصطناعي بتغير نبرة ودقة طلبك؟', en: 'How AI behavior radically shifts based on architectural authority in your prompt' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'المقارنة بين طريقة المبتدئ العشوائية وطريقة المهندس القيادية.', en: 'Contrast naive begging with authoritative architectural leadership.' },
      speakerNotes: { ar: 'وضح كيف أن المهندس لا يستجدي الـ AI، بل يحدد له قواعد الاشتباك بدقة كأنه يدير فريقاً من المهندسين المساعدين.', en: 'Show that senior engineers do not beg; they issue authoritative rules of engagement.' },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: { ar: 'أسلوب الهواة العفوي (Naive Prompting)', en: 'Naive / Hasty Prompting' },
          rightHeader: { ar: 'أسلوب المهندس المعماري (Architectural Protocol)', en: 'Architectural Protocol' },
          dimensions: [
            {
              dimension: { ar: 'الطلب المباشر', en: 'First Command' },
              left: { ar: '"ابنِ لي الواجهة وعدل الملفات بسرعة"', en: '"Build this UI and edit the files right away"' },
              right: { ar: '"حلل المشروع أولاً. لا تعدل أي ملف. اشرح المعمارية"', en: '"Analyze repo first. Do not modify files. Explain architecture"' },
            },
            {
              dimension: { ar: 'خطر كسر الكود (Regressions)', en: 'Regression Risk' },
              left: { ar: 'مرتفع جداً (حذف ملفات، استبدال حزم، أخطاء غير مرئية)', en: 'Severe (file overwrites, broken imports, silent breaks)' },
              right: { ar: 'صفر (لأنه في وضع القراءة فقط حتى تعتمد الخطة)', en: 'Zero (read-only until plan is verified and approved)' },
            },
            {
              dimension: { ar: 'وضوح الخطوات القادمة', en: 'Roadmap Clarity' },
              left: { ar: 'مجهولة (تنتظر ما سيفعله النموذج وتتفاجأ بالنتيجة)', en: 'Unknown (surprised by random model edits)' },
              right: { ar: 'خطة واضحة خطوة بخطوة مكتوبة وموثقة أمامك', en: 'Documented, phased roadmap approved by you' },
            },
            {
              dimension: { ar: 'التحكم في جودة المشروع', en: 'Quality Ownership' },
              left: { ar: 'المستخدم تابع لما ينتجه الذكاء الاصطناعي', en: 'User is hostage to whatever the model vomited' },
              right: { ar: 'المهندس يقود ويوجه والذكاء الاصطناعي ينفذ بأمر مدروس', en: 'Engineer directs, AI executes surgical scoped tasks' },
            },
          ],
          balancedVerdict: {
            ar: 'المهندس المحترف يطلب التشخيص والتخطيط أولاً؛ الهواة يندفعون نحو التعديل فيقعون في فخ الأخطاء.',
            en: 'Senior engineers mandate diagnosis and planning first; amateurs rush to edit and drown in regressions.',
          },
        },
      },
    },

    // Slide 6: Demo (Live Antigravity Analysis Run)
    {
      id: 's05-slide-06',
      sessionNumber: 5,
      slideNumber: 6,
      totalSlides: 16,
      type: 'demo',
      title: { ar: 'تطبيق حي: تشغيل فحص Antigravity على مشروع المطعم', en: 'Live Demo: Running Full Architecture Audit' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'مشاهدة تقرير التحليل يتولد عملياً أمام الطلاب ومناقشة ما كشفه الفحص.', en: 'Observe live architectural scan and audit findings in real time.' },
      speakerNotes: { ar: 'افتح Antigravity، أدخل برومبت التحليل الشامل، وأظهر كيف يستعرض شجرة الملفات والـ tokens ومسارات الصفحات دون لمس الكود.', en: 'Launch Antigravity, submit the analysis prompt, and review the file tree diagnosis live on Zoom.' },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'فحص شجرة ملفات المشروع القائم واستخراج تقرير المعمارية وخطة التنفيذ المعتمدة.',
            en: 'Scan existing repository tree and extract structural audit with proposed development plan.',
          },
          promptToUse: `Analyze this existing web project before modifying any files.
DO NOT MODIFY ANY FILES.
Provide:
1. Detected Framework & Next.js version
2. Component boundaries and styling tokens setup
3. Missing accessibility configurations
4. Recommended 4-phase implementation plan for completing the landing page`,
          instructorSteps: [
            { ar: 'تشغيل أداة الفحص والتأكد من عدم وجود أي تعديل على الملفات (git status)', en: 'Run audit and verify zero uncommitted diffs via git status' },
            { ar: 'مراجعة أقسام التقرير: Framework, Routes, Components, Tokens', en: 'Review generated diagnostic sections on screen' },
            { ar: 'قراءة المخاطر المكتشفة ومناقشتها مع الطلاب في الشات', en: 'Discuss flagged architectural risks with students in chat' },
            { ar: 'اعتماد الخطة المقترحة (Approve Implementation Plan)', en: 'Formally approve the proposed implementation plan' },
          ],
          expectedOutput: {
            ar: 'تقرير فحص متكامل يحدد جاهزية المشروع ويضع خطة من 4 مراحل دقيقة للتطوير.',
            en: 'Comprehensive diagnostic report confirming zero mutations and outlining a phased roadmap.',
          },
        },
      },
    },

    // Slide 7: Challenge (Student Analysis Lab)
    {
      id: 's05-slide-07',
      sessionNumber: 5,
      slideNumber: 16,
      totalSlides: 16,
      type: 'challenge',
      title: { ar: 'تحدي الطلاب: اجعل Antigravity يحلل مشروعك الآن', en: 'Student Challenge: Run Analysis on Your Codebase' },
      estimatedMinutes: 8,
      teachingGoal: { ar: 'تشغيل كل طالب لبرومبت التحليل الشامل على مجلد مشروعه واستخراج خطته.', en: 'Every student commands Antigravity to audit their capstone repository without mutating files.' },
      speakerNotes: { ar: 'شغل مؤقت الـ 5 دقائق. اطلب منهم إرسال برومبت التحليل الشامل ومشاركة نقطة واحدة كشفها لهم التحليل في الشات.', en: 'Start 5-minute timer. Instruct students to run the analysis prompt and share 1 insight in chat.' },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'تشغيل برومبت التحليل الشامل على مشروعك البرمجي واستخراج خطة التنفيذ المعتمدة.',
            en: 'Execute the zero-change analysis prompt on your repository and extract an approved roadmap.',
          },
          durationMinutes: 5,
          objective: {
            ar: 'التعود العملي على طلب الفحص والتشخيص قبل البدء في أي خطوة برمجية في مشاريعك.',
            en: 'Inculcate the muscle memory of mandating audit before implementation in every project.',
          },
          instructions: [
            { ar: 'انسخ برومبت التحليل الشامل وأدخله في Antigravity على مشروعك', en: 'Feed the analysis prompt to Antigravity on your workspace' },
            { ar: 'تأكد من أن الأداة لم تعدل أو تنشئ أي ملف جديد دون إذنك', en: 'Verify that zero files were mutated in your repository' },
            { ar: 'اقرأ قسم "المخاطر المحتملة" (Potential Issues) في التقرير', en: 'Inspect the Potential Issues section of the diagnosis' },
            { ar: 'شارك في شات Zoom معلومة واحدة لفتت نظرك في تقرير الفحص', en: 'Drop one surprising insight from your audit into Zoom chat' },
          ],
          starterPromptOrCode: 'Analyze this project first. Do not modify files. Explain: 1. Architecture, 2. Components, 3. Risks, 4. Plan.',
          deliverable: {
            ar: 'وثيقة خطة التنفيذ المعتمدة (Implementation Plan) الخاصة بمشروع تخرجك.',
            en: 'Approved implementation roadmap artifact anchoring all future coding sessions.',
          },
        },
      },
    },

    // Slide 8: Project (Milestone 05)
    {
      id: 's05-slide-08',
      sessionNumber: 5,
      slideNumber: 16,
      totalSlides: 16,
      type: 'project',
      title: { ar: 'محطة المشروع: خطة التنفيذ المعتمدة (The Plan)', en: 'Project Milestone: Approved Implementation Plan' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'ربط خطة التحليل بالمحطات البرمجية القادمة (HTML, CSS, JS, React).', en: 'Tie the approved implementation plan to forthcoming coding sessions.' },
      speakerNotes: { ar: 'أكد للطلاب: "من الجلسة القادمة (الجلسة 06) سنبدأ بتنفيذ هذه الخطة خطوة بخطوة: سنبني الأساسات بـ HTML و CSS ثم Interaction ثم React!".', en: 'Tell learners: From Session 06 onwards we execute this plan step-by-step: HTML/CSS, JS, React, Next.js!' },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 05: التدقيق المعماري وخطة التنفيذ', en: 'Phase 05: Architectural Audit & Approved Roadmap' },
          stepNumber: '05',
          whatWeBuildNow: {
            ar: 'تثبيت وثيقة خطة التنفيذ المعمارية التي ستقود جميع التعديلات البرمجية في الجلسات القادمة.',
            en: 'Establish the approved engineering blueprint governing all subsequent code milestones.',
          },
          deliverables: [
            { ar: 'تقرير الفحص المعماري الكامل لشجرة المشروع', en: 'Complete architectural diagnostics report' },
            { ar: 'خطة التنفيذ المعتمدة مقسمة إلى 4 مراحل واضحة', en: 'Phased implementation plan with explicit acceptance criteria' },
            { ar: 'قائمة بالمكونات المستهدفة للتطوير في الجلسة 06', en: 'Target component inventory slated for Session 06 HTML/CSS construction' },
          ],
          connectionToFinalProject: {
            ar: 'هذه الخطة تحميك من التشتت وتضمن أن كل سطر كود تكتبه يخدم الهدف النهائي لمشروع التخرج.',
            en: 'This roadmap insulates you from scope drift and guarantees intentional engineering progress.',
          },
        },
      },
    },

    // Slide 9: Takeaway
    {
      id: 's05-slide-09',
      sessionNumber: 5,
      slideNumber: 16,
      totalSlides: 16,
      type: 'takeaway',
      title: { ar: 'الخلاصة الهندسية للجلسة الخامسة', en: 'Session 05 Engineering Takeaways' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت مبدأ "حلل أولاً، لا تعدل الملفات" كقاعدة حديدية في مسيرة الطالب المهنية.', en: 'Cement "Analyze first, zero mutations" as an ironclad career principle.' },
      speakerNotes: { ar: 'اقرأ الركائز الثلاث بتركيز: التحليل أولاً، الخطة قبل الكود، والتحقق الصارم. هذه العقلية هي التي تصنع مهندساً يثق فيه الجميع.', en: 'Review takeaways: Analysis first, planning before coding, strict validation. This builds executive engineering trust.' },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'التشخيص قبل العلاج (Analyze First)', en: 'Diagnosis Precedes Treatment' },
              description: {
                ar: 'لا تسمح للذكاء الاصطناعي بتعديل أي ملف حتى يشرح لك ما فهمه عن المشروع ويعطيك خطة مكتوبة.',
                en: 'Never permit AI to alter files until it demonstrates architectural comprehension and submits a plan.',
              },
            },
            {
              number: '02',
              title: { ar: 'قوة أمر "Do Not Modify Files"', en: 'The Shield of Zero Mutation' },
              description: {
                ar: 'هذا القيد البسيط يحميك من كسر الكود، ويتيح لك مراجعة اقتراحات الذكاء الاصطناعي في بيئة آمنة تماماً.',
                en: 'This simple constraint shields against regressions and lets you evaluate proposals with zero risk.',
              },
            },
            {
              number: '03',
              title: { ar: 'الخطة المعتمدة هي بوصلتك الهندسية', en: 'The Approved Plan is Your Compass' },
              description: {
                ar: 'عندما تملك خطة تنفيذ مقسمة إلى خطوات صغيرة، يصبح بناء أكبر المواقع سهلاً ومدروساً وقابلاً للتسليم.',
                en: 'When equipped with a phased, audited plan, building complex web systems becomes calm and methodical.',
              },
            },
          ],
          coreMotto: {
            ar: 'المهندس الحقيقي لا يخاف من المشاريع المعقدة؛ المهندس الحقيقي يحللها قبل أن يلمسها.',
            en: 'True engineers never fear complex codebases; true engineers analyze them before touching them.',
          },
        },
      },
    },

    // Slide 10: Next
    {
      id: 's05-slide-10',
      sessionNumber: 5,
      slideNumber: 16,
      totalSlides: 16,
      type: 'next',
      title: { ar: 'المحطة القادمة: HTML + CSS — أساسيات الويب المتينة', en: 'Next Waypoint: HTML + CSS — The Core Foundation' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'تهيئة الطلاب للبدء الفعلي في بناء كود الـ HTML و CSS في الجلسة 06 وفق خطتنا المعتمدة.', en: 'Prepare learners to execute their audited plan in Session 06 HTML/CSS foundations.' },
      speakerNotes: { ar: 'اختم الجلسة: "في الجلسة 06 سننزل إلى الميدان البرمجي: سنبني كود HTML دلالي ونظام CSS متجاوب ومرن يجسد واجهة مشروعنا بالكامل!".', en: 'Closing: "In Session 06 we materialize our plan: semantic HTML and responsive CSS bringing our project alive!"' },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '06',
          nextSessionTitle: {
            ar: 'HTML + CSS: الأساس المتين لبناء صفحات ويب سريعة ومرنة',
            en: 'HTML + CSS Foundations: Building Resilient, Semantic & Responsive Web Layouts',
          },
          teaser: {
            ar: 'سنبدأ بتنفيذ الخطة المعتمدة: بناء كود HTML دلالي (Semantic HTML) يحبه محرك Google، ونظام CSS متجاوب (Flexbox & Grid) يعمل بسلاسة على جميع الشاشات.',
            en: 'We execute our approved roadmap: semantic HTML favored by search crawlers and responsive CSS (Flexbox & Grid) across all devices.',
          },
          preparationHint: {
            ar: 'احفظ وثيقة خطة التنفيذ المعتمدة التي أنشأتها اليوم لتكون مرجعنا البرمجي في الجلسة 06.',
            en: 'Keep your approved implementation plan handy as our live roadmap in Session 06.',
          },
        },
      },
    },
  ],
};
