import { PresentationSession } from '@/types';

export const SESSION_12: PresentationSession = {
  id: 'session-12',
  number: 12,
  slug: 'session-12',
  title: {
    ar: 'المشروع النهائي: خطوات التنفيذ، الفحص، والتسليم',
    en: 'Final Project: Execution, Inspection & Submission',
  },
  subtitle: {
    ar: 'مراجعة شاملة لما تعلمناه، عرض المشاريع النهائية الحية، وتسليم العمل المكتمل عبر واتساب (المدة: 90 دقيقة)',
    en: 'Comprehensive review, live final project presentations, and submitting completed work via WhatsApp (90 mins)',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من مراجعة مشروعه النهائي وفق المعايير الخمسة، تقديمه بثقة في 3 دقائق أمام المجموعة، وتسليمه عبر واتساب (+905382015072)، مع وضع خطة عملية للاستمرار بعد التخرج.',
    en: 'Enable trainees to verify their final project against the 5 criteria, present it live in 3 minutes, submit it via WhatsApp, and follow a clear post-course roadmap.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 11 ونشر الموقع برابط حي على منصة Vercel',
      en: 'Completion of Session 11 with a live deployed URL on Vercel',
    },
  ],
  objectives: [
    {
      ar: 'مراجعة المنهجية الكاملة التي تعلمناها من تخطيط الفكرة إلى النشر الحي على الإنترنت',
      en: 'Review the complete workflow from planning an idea to live deployment',
    },
    {
      ar: 'التأكد من استيفاء المشروع النهائي للمعايير الخمسة المعتمدة للتخرج',
      en: 'Verify the final project meets all 5 graduation criteria',
    },
    {
      ar: 'تقديم عرض مباشر لمدة 3 دقائق للمشروع الحي أمام المدرب وزملاء المجموعة',
      en: 'Deliver a structured 3-minute live demo of the published website',
    },
    {
      ar: 'إرسال رابط المشروع النهائي للتقييم عبر واتساب (+905382015072) ووضع خطة بناء المعرض الشخصي',
      en: 'Submit the final project link via WhatsApp (+905382015072) and plan the next portfolio projects',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:20',
      durationMinutes: 20,
      label: { ar: 'مراجعة الرحلة الكاملة من الفكرة إلى الموقع المنشور والمعايير الـ 5 للمشروع', en: 'Reviewing the full journey & the 5 final project criteria' },
      type: 'context',
    },
    {
      timeRange: '00:20 – 00:35',
      durationMinutes: 15,
      label: { ar: 'كيف تعرض مشروعك في 3 دقائق وكيف تسلمه عبر واتساب (+905382015072)؟', en: 'How to present in 3 minutes & submit via WhatsApp' },
      type: 'demo',
    },
    {
      timeRange: '00:35 – 01:15',
      durationMinutes: 40,
      label: { ar: 'عروض مشاريع المتدربين الحية وملاحظات المدرب البناءة', en: 'Live trainee project demos & constructive instructor feedback' },
      type: 'practice',
    },
    {
      timeRange: '01:15 – 01:30',
      durationMinutes: 15,
      label: { ar: 'ماذا بعد التخرج؟ خارطة طريقك لبناء معرض أعمالك القادم', en: 'What after graduation? Your roadmap for building your portfolio' },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'عرض المشروع النهائي المكتمل وتسليم رابطه الحي عبر واتساب (+905382015072).',
    en: 'Present the completed final project live and submit its URL via WhatsApp (+905382015072).',
  },
  aiRole: {
    ar: 'شريكك المستمر في بناء مشاريعك القادمة بنفس المنهجية المنظمة التي أتقنتها.',
    en: 'Your ongoing partner in building future projects using the structured workflow you mastered.',
  },
  marketConnection: {
    ar: 'مشروعك المنشور اليوم هو أول عمل حقيقي في معرض أعمالك الذي ستعرضه للعملاء وأصحاب المشاريع.',
    en: 'Your published project today is the first real case study in your client portfolio.',
  },
  startScreen: {
    badge: 'الدرس 12 من 12 • المشروع النهائي والتخرج (90 دقيقة)',
    headline: {
      ar: 'المشروع النهائي: خطوات التنفيذ، الفحص، والتسليم',
      en: 'Final Project: Execution, Inspection & Submission',
    },
    description: {
      ar: 'في هذا الدرس الختامي (ساعة ونصف) نراجع معايير المشروع النهائي، ونستعرض مشاريعكم الحية المنشورة على الإنترنت، ونسلم الروابط عبر واتساب، ونضع خطة واضحة لخطوتكم القادمة.',
      en: 'In this final 90-minute lesson, review final criteria, showcase live projects, submit via WhatsApp, and map out your next steps.',
    },
    sessionGoal: {
      ar: 'عرض مشروعك النهائي الحي بثقة وتسليمه رسمياً عبر واتساب.',
      en: 'Present your live final project with confidence and submit it officially via WhatsApp.',
    },
  },
  endScreen: {
    headline: {
      ar: 'مبارك تخرجكم من WEB CREATOR AI وإتمام مشاريعكم بنجاح!',
      en: 'Congratulations on Graduating from WEB CREATOR AI!',
    },
    keyRecap: [
      {
        ar: 'أنت اليوم قادر على تحويل أي فكرة واضحة إلى موقع حي منشور على الإنترنت يخدم زواره بفعالية.',
        en: 'You can now turn any clear idea into a live published website that serves visitors effectively.',
      },
      {
        ar: 'الذكاء الاصطناعي أداة مساعدة قوية بين يديك، لكن تخطيطك وتوجيهك ومراجعتك هي ما يصنع الجودة الحقيقية.',
        en: 'AI is a powerful assistant in your hands, while your planning, guidance, and review create true quality.',
      },
      {
        ar: 'كل موقع جديد تبنيه سيكون أسرع وأسهل من سابقه — استمر في التجربة وبناء معرض أعمالك.',
        en: 'Every new site you build will be faster and easier than the last—keep building your portfolio.',
      },
    ],
    nextSessionNumber: '01',
    nextSessionTitle: {
      ar: 'العودة إلى فهرس الدروس والمشاريع',
      en: 'Return to Course Hub & Projects',
    },
  },
  slides: [
    {
      id: 's12-slide-01',
      sessionNumber: 12,
      slideNumber: 1,
      totalSlides: 8,
      type: 'title',
      title: {
        ar: 'المشروع النهائي: التنفيذ، الفحص، والتسليم',
        en: 'Final Project: Execution, Inspection & Submission',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'الاحتفاء بإنجاز المتدربين وتنظيم عملية العرض والتسليم النهائي.',
        en: 'Celebrate trainee achievements and structure the final presentation and submission flow.',
      },
      speakerNotes: {
        ar: 'رحب بالمتدربين بحماس؛ هذا الدرس هو تتويج لجهدهم طوال البرنامج التدريبي.',
        en: 'Welcome trainees warmly; this lesson crowns their work across all 12 lessons.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '12',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'الدرس الثاني عشر والأخير • استعراض المشاريع والتخرج',
            en: 'Lesson 12 • Final Project Showcase & Graduation',
          },
          headline: {
            ar: 'عرض مشاريعكم الحية، مراجعة المعايير النهائية، والانطلاق في بناء أعمالكم القادمة',
            en: 'Showcasing Your Live Projects, Final Review & Launching Your Next Work',
          },
          subheadline: {
            ar: 'اليوم نحتفل بتحويل أفكاركم إلى مواقع حقيقية منشورة على الإنترنت ونستعرضها معاً.',
            en: 'Today we celebrate turning your ideas into real websites published on the internet.',
          },
          tags: ['معايير المشروع النهائي', 'عرض حي 3 دقائق', 'تسليم عبر واتساب', 'خارطة ما بعد التخرج'],
        },
      },
    },
    {
      id: 's12-slide-02',
      sessionNumber: 12,
      slideNumber: 2,
      totalSlides: 8,
      type: 'visual',
      title: {
        ar: 'رحلتنا الكاملة في WEB CREATOR AI: كيف بنينا مواقعنا خطوة بخطوة؟',
        en: 'Our Complete Journey in WEB CREATOR AI: Step by Step',
      },
      subtitle: {
        ar: 'النظام المتكامل الذي تعلمت تطبيقه لبناء أي موقع مستقبلاً:',
        en: 'The repeatable 4-phase system you learned to build any future website:',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'ترسيخ المنهجية الكاملة في ذهن المتدرب ليكررها في أي مشروع جديد.',
        en: 'Cement the complete 4-phase methodology so trainees can repeat it on any future project.',
      },
      speakerNotes: {
        ar: 'ذكّر المتدربين بأن هذه المراحل الأربع تصلح لبناء موقع ثانٍ وثالث وعاشر بنفس السهولة والترتيب.',
        en: 'Remind trainees that these exact 4 phases work for their 2nd, 3rd, and 10th websites.',
      },
      payload: {
        type: 'visual',
        data: {
          diagramType: 'flow',
          caption: {
            ar: 'لم تتعلم مجرد أداة مؤقتة، بل تعلمت طريقة عمل منظمة تبني بها أي موقع من الفكرة إلى الإطلاق.',
            en: 'You did not just learn a tool; you learned a structured workflow from idea to launch.',
          },
          nodes: [
            {
              id: 'journey-1',
              stepNumber: '01',
              title: { ar: '1. التخطيط وتحديد الفكرة', en: '1. Planning & Idea' },
              description: { ar: 'تحديد الهدف والجمهور ورسم خريطة الأقسام الـ 5 قبل الكود', en: 'Define goal, audience, and 5-section map before code' },
            },
            {
              id: 'journey-2',
              stepNumber: '02',
              title: { ar: '2. التوجيه الذكي والتنظيم', en: '2. Clear AI Prompting' },
              description: { ar: 'كتابة طلبات واضحة لقسم واحد في كل مرة وتنظيم مجلدات المشروع', en: 'Prompt one section at a time and organize project folders' },
            },
            {
              id: 'journey-3',
              stepNumber: '03',
              title: { ar: '3. البناء والتفاعل والتجاوب', en: '3. Build & Interactivity' },
              description: { ar: 'تنسيق البطاقات للهاتف والكمبيوتر وإضافة التصفية والطلب عبر واتساب', en: 'Responsive layout, category filtering, and WhatsApp ordering' },
            },
            {
              id: 'journey-4',
              stepNumber: '04',
              title: { ar: '4. الفحص والنشر الحي', en: '4. Inspection & Launch' },
              description: { ar: 'إعداد معاينة الرابط، الفحص الشامل، والنشر على GitHub و Vercel', en: 'SEO preview, 4-part check, and live Vercel deployment' },
            },
          ],
        },
      },
    },
    {
      id: 's12-slide-03',
      sessionNumber: 12,
      slideNumber: 3,
      totalSlides: 8,
      type: 'concept',
      title: {
        ar: 'المعايير الـ 5 للمشروع النهائي المكتمل',
        en: 'The 5 Criteria for a Complete Final Project',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'توضيح معايير قبول المشروع النهائي بدقة.',
        en: 'Clarify the 5 final project requirements clearly.',
      },
      speakerNotes: {
        ar: 'هذه المعايير الخمسة واضحة وعملية وتضمن أن كل مشروع يصلح لوضعه في معرض أعمال المتدرب فوراً.',
        en: 'These 5 practical criteria ensure every trainee project is portfolio-ready.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'معايير التسليم النهائي', en: 'Final Submission Criteria' },
          principle: {
            ar: 'تأكد من توفر هذه النقاط الخمس في موقعك قبل إرساله للتسليم',
            en: 'Verify These 5 Points in Your Website Before Submitting',
          },
          explanation: {
            ar: 'كل مشروع نهائي في البرنامج يُقيّم بناءً على هذه الركائز العملية الخمس:',
            en: 'Every final project in the program is evaluated across these five practical pillars:',
          },
          bulletPoints: [
            {
              ar: '1. وضوح الرسالة في القسم الأول (Hero): عنوان ووصف يشرحان ماذا يقدم الموقع ولمن في 5 ثوانٍ، مع زر إجراء واضح.',
              en: '1. Clear Hero Message: Headline and subtitle explaining what the site offers and for whom within 5 seconds.',
            },
            {
              ar: '2. هيكل متكامل ومنظم: 4 إلى 5 أقسام مرتبة منطقياً مع بيانات عربية حقيقية وصور واضحة.',
              en: '2. Complete Section Structure: 4 to 5 logical sections with real Arabic copy and clear visuals.',
            },
            {
              ar: '3. تفاعل عملي يخدم الزائر: ميزة تفاعلية شغالة (مثل تصفية البطاقات حسب التصنيف أو قائمة أسئلة شائعة).',
              en: '3. Working Visitor Interactivity: Functional interactive feature such as category filtering.',
            },
            {
              ar: '4. تواصل وطلب مباشر عبر واتساب: أزرار طلب وتواصل تفتح محادثة واتساب برسالة جاهزة ومرتبة.',
              en: '4. Direct WhatsApp Ordering: Action buttons opening WhatsApp with a pre-filled formatted message.',
            },
            {
              ar: '5. توافق مع الهاتف ورابط حي: تصميم مريح على شاشة الهاتف ومنشور برابط يعمل على منصة Vercel.',
              en: '5. Mobile-Friendly & Live URL: Clean mobile layout deployed on a working Vercel URL.',
            },
          ],
          architecturalRule: {
            ar: 'المشروع الذي يستوفي هذه النقاط الخمس هو مشروع حقيقي جاهز للعرض على أي عميل.',
            en: 'A project meeting all five points is a real product ready to show any client.',
          },
        },
      },
    },
    {
      id: 's12-slide-04',
      sessionNumber: 12,
      slideNumber: 4,
      totalSlides: 8,
      type: 'reveal',
      title: {
        ar: 'كيف تعرض مشروعك اليوم في 3 دقائق؟',
        en: 'How to Present Your Project Today in 3 Minutes',
      },
      estimatedMinutes: 7,
      teachingGoal: {
        ar: 'تنظيم عروض المتدربين بطريقة مهنية ومختصرة.',
        en: 'Structure trainee demos into a clear, confident 3-minute format.',
      },
      speakerNotes: {
        ar: 'اعرض هذه النقاط الثلاث واتركها أمام المتدربين أثناء تقديم عروضهم.',
        en: 'Keep these 3 steps visible to guide trainees during their live presentations.',
      },
      payload: {
        type: 'reveal',
        data: {
          premise: {
            ar: 'خطة بسيطة من 3 دقائق لعرض موقعك أمام المجموعة (أو أمام أي عميل مستقبلاً):',
            en: 'A simple 3-minute plan for presenting your website to the group or future clients:',
          },
          steps: [
            {
              number: '01',
              title: { ar: 'الدقيقة الأولى: فكرة المشروع والجمهور المستهدف', en: 'Minute 1: Project Idea & Target Audience' },
              description: {
                ar: 'اذكر اسم الموقع، لمن صممته، وما هي الفائدة الأساسية التي يقدمها للزائر.',
                en: 'State the site name, who it is designed for, and the main benefit it offers visitors.',
              },
            },
            {
              number: '02',
              title: { ar: 'الدقيقة الثانية: جولة حية في أقسام الموقع والتفاعل', en: 'Minute 2: Live Tour of Sections & Interactivity' },
              description: {
                ar: 'شارك شاشتك، استعرض الأقسام من الأعلى للأسفل، وجرّب أزرار التصفية وزر الطلب عبر واتساب.',
                en: 'Share your screen, scroll through the sections, and test category filters and WhatsApp ordering.',
              },
            },
            {
              number: '03',
              title: { ar: 'الدقيقة الثالثة: أهم درس تعلمته أثناء البناء', en: 'Minute 3: Key Lesson Learned While Building' },
              description: {
                ar: 'شارك تحدياً واجهك أثناء التخطيط أو التعديل مع المساعد الذكي وكيف تغلبت عليه.',
                en: 'Share one challenge you faced during planning or AI refinement and how you solved it.',
              },
            },
          ],
        },
      },
    },
    {
      id: 's12-slide-05',
      sessionNumber: 12,
      slideNumber: 5,
      totalSlides: 8,
      type: 'demo',
      title: {
        ar: 'تطبيق مباشر: كيف تسلم مشروعك النهائي عبر واتساب؟',
        en: 'Live Demo: How to Submit Your Final Project via WhatsApp',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'توضيح آلية التسليم النهائي خطوة بخطوة عبر واتساب (+905382015072).',
        en: 'Demonstrate the exact WhatsApp submission workflow (+905382015072).',
      },
      speakerNotes: {
        ar: 'أظهر للمتدربين نموذج التسليم في الموقع وكيف يفتح محادثة واتساب بالرسالة المنسقة جاهزة للإرسال إلى +905382015072.',
        en: 'Show trainees the submission form on the site and how it formats the WhatsApp message to +905382015072.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'إرسال بيانات المشروع والرابط الحي للمراجعة والتقييم عبر واتساب (+905382015072).',
            en: 'Submit project details and live URL via WhatsApp (+905382015072).',
          },
          instructorSteps: [
            {
              ar: '1. افتح صفحة الجلسة الثانية عشرة أو نموذج تسليم المشروع في مسار WEB CREATOR AI.',
              en: '1. Open the Session 12 page or project submission form in WEB CREATOR AI.',
            },
            {
              ar: '2. اكتب اسمك، اسم المشروع وفكرته، رابط الموقع الحي على Vercel، ورابط مستودع GitHub.',
              en: '2. Enter your name, project concept, live Vercel URL, and GitHub repository link.',
            },
            {
              ar: '3. اضغط على زر «إرسال عبر واتساب» ليتم تجهيز رسالتك المنسقة وإرسالها مباشرة إلى المدرب على الرقم `+905382015072`.',
              en: '3. Click "Send via WhatsApp" to open a formatted message directly to `+905382015072`.',
            },
          ],
          expectedOutput: {
            ar: 'وصول جميع بيانات المشروع والروابط في رسالة واتساب واحدة منظمة وواضحة.',
            en: 'All project details and links arrive in one clean, structured WhatsApp message.',
          },
        },
      },
    },
    {
      id: 's12-slide-06',
      sessionNumber: 12,
      slideNumber: 6,
      totalSlides: 8,
      type: 'challenge',
      title: {
        ar: 'عروض المشاريع والتسليم المباشر (40 دقيقة)',
        en: 'Live Project Presentations & Direct Submission (40 Mins)',
      },
      estimatedMinutes: 40,
      teachingGoal: {
        ar: 'إتمام العروض النهائية للمتدربين وتسليم الروابط الحية.',
        en: 'Complete live trainee project presentations and WhatsApp submissions.',
      },
      speakerNotes: {
        ar: 'استمع لكل متدرب باهتمام، وأعطه ملاحظة إيجابية محددة حول ما أتقنه في موقعه وملاحظة تطويرية واحدة.',
        en: 'Give each trainee specific positive feedback on what they did well plus one constructive tip.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'استعراض أعمالكم الحية وإرسال التسليم النهائي',
            en: 'Showcase Your Live Projects & Send Final Submission',
          },
          durationMinutes: 40,
          objective: {
            ar: 'تقديم عرض مباشر لمدة 3 دقائق لموقعك الحي على Vercel وإرسال رابط التسليم عبر واتساب.',
            en: 'Deliver a 3-minute live demo of your Vercel site and submit the link via WhatsApp.',
          },
          instructions: [
            {
              ar: '1. جهّز رابط موقعك الحي على Vercel مفتوحاً في المتصفح.',
              en: '1. Have your live Vercel URL open and ready in your browser.',
            },
            {
              ar: '2. عند دورك، شارك شاشتك وقدم مشروعك في 3 دقائق (الفكرة، الجولة الحية، والدرس المستفاد).',
              en: '2. When it is your turn, share your screen and present your project in 3 minutes.',
            },
            {
              ar: '3. أرسل رابط مشروعك النهائي وملخصه عبر زر التسليم إلى واتساب (`+905382015072`).',
              en: '3. Send your final project link and summary via WhatsApp (`+905382015072`).',
            },
          ],
          deliverable: {
            ar: 'عرض المشروع أمام المجموعة وإرسال رسالة التسليم النهائية عبر واتساب.',
            en: 'Present the project live to the group and submit the final WhatsApp message.',
          },
        },
      },
    },
    {
      id: 's12-slide-07',
      sessionNumber: 12,
      slideNumber: 7,
      totalSlides: 8,
      type: 'concept',
      title: {
        ar: 'ماذا بعد التخرج من البرنامج؟ خارطة طريقك العملية',
        en: 'What After Graduation? Your Practical Roadmap Ahead',
      },
      estimatedMinutes: 7,
      teachingGoal: {
        ar: 'إعطاء المتدرب خطة واضحة للاستمرار وبناء معرض أعمال قوي بعد انتهاء الجلسات.',
        en: 'Provide a clear actionable plan for building a portfolio after the course.',
      },
      speakerNotes: {
        ar: 'شجع المتدربين على البدء بمشروعهم الثاني خلال هذا الأسبوع بينما المعلومات والخطوات حاضرة في أذهانهم.',
        en: 'Encourage trainees to start their second project this week while the workflow is fresh.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'الخطوة القادمة بعد التخرج', en: 'Your Next Step After Graduation' },
          principle: {
            ar: 'حول مهارتك الجديدة إلى معرض أعمال من 3 مشاريع متنوعة',
            en: 'Turn Your New Skill into a 3-Project Portfolio',
          },
          explanation: {
            ar: 'لكي تثبت هذه المهارة وتبدأ بتقديم خدماتك بثقة، اتبع هذه الخطوات الثلاث خلال الشهر القادم:',
            en: 'To solidify your skill and start offering your services with confidence, follow these three steps:',
          },
          bulletPoints: [
            {
              ar: '1. ابنِ مشروعين إضافيين في مجالات مختلفة: أضف إلى مشروعك الحالي موقعين آخرين (مثلاً: مطعم أو مقهى، عيادة أو خدمة محلية، وصفحة شخصية لمستقل) لتكوين معرض أعمال من 3 مشاريع حية.',
              en: '1. Build 2 additional projects in different niches (e.g., café, local clinic, freelancer page) to form a 3-project live portfolio.',
            },
            {
              ar: '2. بادر ببناء موقع لمشروع حقيقي قريب منك: اعرض على صاحب متجر أو خدمة تعرفه تصميم موقع واضح يربط طلباته بواتساب، واستخدمه كقصة نجاح حقيقية.',
              en: '2. Build a site for a real business near you: offer a local shop or service a clean website connected to WhatsApp.',
            },
            {
              ar: '3. التزم بنفس العادة المنظمة: خطط على الورق أولاً، وجّه الذكاء الاصطناعي لقسم واحد في كل مرة، وافحص الهاتف قبل النشر.',
              en: '3. Stick to the same structured habit: plan on paper first, prompt one section at a time, and inspect mobile before publishing.',
            },
          ],
          architecturalRule: {
            ar: 'الممارسة العملية في بناء مشاريع حقيقية هي أسرع طريق للإتقان.',
            en: 'Hands-on practice building real projects is the fastest path to mastery.',
          },
        },
      },
    },
    {
      id: 's12-slide-08',
      sessionNumber: 12,
      slideNumber: 8,
      totalSlides: 8,
      type: 'takeaway',
      title: {
        ar: 'ختام البرنامج: أهم ما تملكه اليوم',
        en: 'Program Conclusion: What You Own Today',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'اختتام البرنامج التدريبي بروح إيجابية ودافعة للعمل.',
        en: 'Close the program on an encouraging, action-oriented note.',
      },
      speakerNotes: {
        ar: 'اختم البرنامج بكلمة شكر وتقدير لالتزام المتدربين وتفاعلهم طوال الجلسات الـ 12.',
        en: 'Thank trainees for their commitment and active participation across all 12 lessons.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'التخطيط والوضوح قبل الكود', en: 'Planning & Clarity Before Code' },
              description: {
                ar: 'أي موقع ناجح يبدأ بفهم الزائر وتحديد الهدف وترتيب الأقسام بوضوح قبل فتح محرر الكود.',
                en: 'Every successful website starts with understanding the visitor and ordering sections clearly.',
              },
            },
            {
              number: '02',
              title: { ar: 'أنت القائد والذكاء الاصطناعي مساعدك', en: 'You Lead, AI Assists' },
              description: {
                ar: 'توجيهك الواضح ومراجعتك الدقيقة للنصوص والتصميم والهاتف هي ما يصنع الجودة الحقيقية.',
                en: 'Your clear direction and careful review of copy, layout, and mobile view create real quality.',
              },
            },
            {
              number: '03',
              title: { ar: 'البناء التراكمي المستمر', en: 'Continuous Step-by-Step Building' },
              description: {
                ar: 'كل موقع جديد تبنيه وتنشره على الإنترنت سيزيد من ثقتك وسرعتك وخبرتك العملية.',
                en: 'Every new website you build and publish online grows your confidence, speed, and portfolio.',
              },
            },
          ],
          coreMotto: {
            ar: 'تواصلوا دائماً عبر واتساب (+905382015072) لمشاركة أعمالكم ومشاريعكم الجديدة — بالتوفيق لكم جميعاً!',
            en: 'Stay in touch via WhatsApp (+905382015072) to share your new projects—wishing you all the best!',
          },
        },
      },
    },
  ],
};
