import { PresentationSession } from '@/types';

export const SESSION_03: PresentationSession = {
  id: 'session-03',
  number: 3,
  slug: 'session-03',
  title: {
    ar: 'كيف تصف فكرتك للذكاء الاصطناعي بوضوح؟ (صياغة الطلب خطوة بخطوة)',
    en: 'How to Describe Your Idea Clearly to AI (Step-by-Step Prompting)',
  },
  subtitle: {
    ar: 'الطريقة البسيطة لكتابة طلب واضح يفهمه الذكاء الاصطناعي وينفذه بدقة من أول مرة',
    en: 'A simple method to write clear requests that AI understands and builds accurately',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من كتابة وصف واضح ومرتب (برومبت) يطلب فيه من الذكاء الاصطناعي بناء صفحة أو قسم محدد وفق خطة الجلسة السابقة.',
    en: 'Enable trainees to write a clear, structured request (prompt) asking AI to build a specific page or section.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 02 وتجهيز ترتيب أقسام الصفحة الرئيسية',
      en: 'Completion of Session 02 with a homepage section plan',
    },
  ],
  objectives: [
    {
      ar: 'فهم لماذا تعطي الأوامر الغامضة القصيرة نتائج عشوائية وغير مفيدة',
      en: 'Understand why vague one-line prompts produce random, unhelpful results',
    },
    {
      ar: 'معرفة الأركان الأربعة لأي طلب واضح: الهدف + الجمهور + الأقسام + الشكل البصري',
      en: 'Learn the 4 building blocks of a clear request: Goal + Visitor + Sections + Visual Style',
    },
    {
      ar: 'التدرب على طلب قسم واحد محدد أو صفحة واضحة بدل طلب كل شيء دفعة واحدة',
      en: 'Practice requesting one clear page or section instead of everything at once',
    },
    {
      ar: 'كتابة الطلب الكامل لبناء الصفحة الرئيسية لمشروع المتدرب',
      en: 'Write the complete prompt to build the trainee homepage',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:15',
      durationMinutes: 15,
      label: { ar: 'مقارنة بصرية: الطلب الغامض مقابل الطلب الواضح والمرتب', en: 'Vague request vs. Clear structured request' },
      type: 'comparison',
    },
    {
      timeRange: '00:15 – 00:35',
      durationMinutes: 20,
      label: { ar: 'الأركان الأربعة للطلب الناجح: الهدف، الزائر، الأقسام، والشروط', en: 'The 4 pillars of a clear AI request' },
      type: 'concept',
    },
    {
      timeRange: '00:35 – 00:55',
      durationMinutes: 20,
      label: { ar: 'تطبيق حي: كتابة طلب بناء صفحة مقهى القهوة المختصة وتجربته', en: 'Live Demo: Writing & testing the Café page prompt' },
      type: 'demo',
    },
    {
      timeRange: '00:55 – 01:20',
      durationMinutes: 25,
      label: { ar: 'نشاط المتدرب: كتابة طلب واضح لبناء صفحته الرئيسية', en: 'Trainee Activity: Write your homepage prompt' },
      type: 'practice',
    },
    {
      timeRange: '01:20 – 01:30',
      durationMinutes: 10,
      label: { ar: 'مراجعة طلبات المتدربين وخلاصة الجلسة الثالثة', en: 'Review trainee prompts & Session 03 summary' },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'كتابة وثيقة الطلب الواضح (Prompt) الجاهزة لتوليد الصفحة الرئيسية للمشروع.',
    en: 'Write a clear, structured prompt ready to generate the project homepage.',
  },
  aiRole: {
    ar: 'منفذ ذكي يبني الصفحة بدقة بقدر وضوح التفاصيل والترتيب الذي نكتبه له.',
    en: 'A smart builder whose output quality matches the clarity of our instructions.',
  },
  marketConnection: {
    ar: 'القدرة على وصف المطلوب بوضوح للذكاء الاصطناعي تختصر أيامًا من العمل إلى دقائق معدودة.',
    en: 'Describing requirements clearly to AI turns days of work into minutes.',
  },
  startScreen: {
    badge: 'الجلسة 03 من 12 • العمل مع الذكاء الاصطناعي (1)',
    headline: {
      ar: 'كيف تصف فكرتك للذكاء الاصطناعي بوضوح؟',
      en: 'How to Describe Your Idea Clearly to AI',
    },
    description: {
      ar: 'الذكاء الاصطناعي لا يقرأ الأفكار غير المكتوبة؛ سنتعلم اليوم كيف نصيغ طلبًا بسيطًا ومرتبًا يعطينا النتيجة التي نريدها بالضبط.',
      en: 'AI cannot read unspoken thoughts; learn how to write a simple, structured request that gets the exact result you want.',
    },
    sessionGoal: {
      ar: 'كتابة طلب واضح من 4 أجزاء لبناء الصفحة الرئيسية لموقعك.',
      en: 'Write a clear 4-part request to build your website homepage.',
    },
  },
  endScreen: {
    headline: {
      ar: 'ممتاز! أصبحت تتقن لغة التخاطب الواضح مع الذكاء الاصطناعي',
      en: 'Excellent! You Now Master Clear Communication with AI',
    },
    keyRecap: [
      {
        ar: 'الطلب الغامض («اصنع لي موقعًا») يعطي نتيجة عشوائية، والطلب المحدد يعطي نتيجة احترافية.',
        en: 'A vague request gives random output; a specific request gives professional results.',
      },
      {
        ar: 'كل طلب ناجح يوضح 4 أشياء: نوع الموقع، الزائر، الأقسام بالترتيب، والشكل المطلوب.',
        en: 'Every clear request specifies 4 things: site type, visitor, ordered sections, and visual style.',
      },
      {
        ar: 'اطلب بناء الصفحة أو القسم خطوة بخطوة حتى يسهل عليك فحصه وتحسينه.',
        en: 'Request one page or section step by step so it is easy to review and refine.',
      },
    ],
    nextSessionNumber: '04',
    nextSessionTitle: {
      ar: 'مراجعة النتيجة وتحسينها خطوة بخطوة مع الذكاء الاصطناعي',
      en: 'Reviewing & Improving the Result Step by Step with AI',
    },
  },
  slides: [
    {
      id: 's03-slide-01',
      sessionNumber: 3,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      visualType: 'prompt-anatomy',
      realWorldExample: {
        ar: 'الفرق بين أن تقول للنجار «اصنع لي طاولة» فقط، وبين أن تخبره: «أريد طاولة طعام خشبية لـ 6 أشخاص بلون بني فاتح».',
        en: 'The difference between telling a carpenter "make a table" vs. "make a light oak dining table for 6 people".',
      },
      title: {
        ar: 'كيف نصف المطلوب للذكاء الاصطناعي؟',
        en: 'How Do We Describe What We Want to AI?',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'توضيح مفهوم البرومبت (Prompt) ببساطة شديدة: هو «رسالة وصف المطلوب» التي نرسلها للذكاء الاصطناعي.',
        en: 'Explain "Prompt" simply: it is the clear instruction message we give to AI.',
      },
      speakerNotes: {
        ar: 'نفّذ: طمئن المتدربين أن كلمة «هندسة البرومبت» ليست علمًا معقدًا، بل هي ببساطة «فن كتابة طلب واضح ومرتب».\nاسأل: لو طلبت من مطعم «أحضر لي طعامًا» دون تحديد، ماذا سيحدث؟\nتحقق: اربط التشبيه بالذكاء الاصطناعي: كلما حددت طلبك، حصلت على ما تريد.',
        en: 'Explain that prompt engineering is simply writing a clear, well-ordered request.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '03',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'المرحلة الثالثة • العمل مع الذكاء الاصطناعي (الجزء الأول)',
            en: 'Phase 3 • Working with AI (Part 1)',
          },
          headline: {
            ar: 'كيف تصف فكرتك للذكاء الاصطناعي بوضوح؟',
            en: 'How Do You Describe Your Idea Clearly to AI?',
          },
          subheadline: {
            ar: 'نتعلم القالب البسيط من 4 نقاط لتحويل خطة صفحتك إلى تعليمات واضحة يبنيها الذكاء الاصطناعي بدقة.',
            en: 'Learn the simple 4-point template to turn your page plan into clear instructions AI builds accurately.',
          },
          tags: ['وصف واضح', '4 نقاط أساسية', 'تجنب العشوائية', 'أمثلة عملية'],
        },
      },
    },
    {
      id: 's03-slide-02',
      sessionNumber: 3,
      slideNumber: 2,
      totalSlides: 10,
      type: 'comparison',
      visualType: 'cluttered-vs-clean',
      title: {
        ar: 'مقارنة: الطلب الغامض مقابل الطلب الواضح والمحدد',
        en: 'Comparison: Vague Request vs. Clear Specific Request',
      },
      subtitle: {
        ar: 'انظر كيف تغير بضعة أسطر مرتبة نتيجة الذكاء الاصطناعي بالكامل',
        en: 'See how a few organized lines completely transform AI output',
      },
      estimatedMinutes: 9,
      teachingGoal: {
        ar: 'إظهار الفرق العملي بين جملة عامة قصيرة وبين طلب مقسم إلى نقاط واضحة.',
        en: 'Show the practical difference between a vague sentence and a structured bulleted request.',
      },
      speakerNotes: {
        ar: 'نفّذ: اقرأ المثالين مع المتدربين. الطلب الغامض يجعل الذكاء الاصطناعي يخمن كل شيء عشوائيًا (اللغة، الأقسام، الألوان)، بينما الطلب الواضح يوجهه بدقة.\nاسأل: كم دقيقة إضافية يستغرق كتابة الطلب الواضح؟ (دقيقتان فقط، لكنه يوفر ساعات من الإحباط!).\nتحقق: تأكد أن الجميع يرى سهولة كتابة الطلب الواضح.',
        en: 'Compare the vague prompt and the structured prompt side by side.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'الطلب الواضح والمرتب (يعطي نتيجة ممتازة)',
            en: 'Clear Structured Request (Great Result)',
          },
          rightHeader: {
            ar: 'الطلب الغامض المستعجل (يعطي نتيجة عشوائية)',
            en: 'Vague Rushed Request (Random Result)',
          },
          dimensions: [
            {
              dimension: { ar: 'ماذا كتبنا للذكاء الاصطناعي؟', en: 'What We Wrote' },
              left: {
                ar: '«أنشئ صفحة رئيسية عربية لمقهى قهوة مختصة تتكون من 4 أقسام مع زر طلب عبر واتساب»',
                en: '"Create an Arabic homepage for a specialty café with 4 sections and a WhatsApp order button"',
              },
              right: {
                ar: '«اصنع لي موقع مقهى جميل» (بدون تحديد اللغة أو الأقسام أو الهدف)',
                en: '"Make me a nice café website" (no language, sections, or goal specified)',
              },
            },
            {
              dimension: { ar: 'الأقسام التي ستظهر', en: 'Generated Sections' },
              left: {
                ar: 'الأقسام الأربعة التي خططناها بالضبط وبنفس الترتيب المريح',
                en: 'The exact 4 sections we planned in the right order',
              },
              right: {
                ar: 'أقسام عشوائية ونصوص إنجليزية أو وهمية لا علاقة لها بمشروعك',
                en: 'Random sections and placeholder text unrelated to your business',
              },
            },
            {
              dimension: { ar: 'سهولة التعديل لاحقًا', en: 'Ease of Editing' },
              left: {
                ar: 'سهلة جدًا لأن كل قسم واضح ومحدد من البداية',
                en: 'Very easy because every section is clearly defined',
              },
              right: {
                ar: 'صعبة ومربكة وتضطر معها لإعادة العمل من الصفر',
                en: 'Confusing and forces you to start over from scratch',
              },
            },
          ],
          balancedVerdict: {
            ar: 'دقيقتان تقضيهما في ترتيب طلبك تمنحانك نتيجة واضحة من المحاولة الأولى.',
            en: 'Two minutes spent structuring your request gives you a clean result on the first try.',
          },
        },
      },
    },
    {
      id: 's03-slide-03',
      sessionNumber: 3,
      slideNumber: 3,
      totalSlides: 10,
      type: 'concept',
      visualType: 'prompt-anatomy',
      realWorldExample: {
        ar: 'تمامًا مثل بطاقة الدعوة: نذكر فيها (مناسبة الحفل + من المدعوون + فقرات الحفل + مكان الحضور).',
        en: 'Just like an event invitation: state the occasion, guests, schedule, and location.',
      },
      title: {
        ar: 'المكونات الأربعة لأي طلب واضح من الذكاء الاصطناعي',
        en: 'The 4 Building Blocks of Any Clear AI Request',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'تحويل الإطار التقني الطويل إلى 4 مكونات بسيطة يحفظها المبتدئ فورًا (الهدف، الزائر، الأقسام، الأسلوب).',
        en: 'Distill prompt engineering into 4 beginner-friendly blocks (Goal, Visitor, Sections, Style).',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح البطاقات الأربع في الرسم التوضيحي على اليسار. في المراجع المتقدمة قد نقسمها إلى 7 أو 8 عناصر تفصيلية (الدور، السياق، المهمة، القيود، المخرجات، معايير القبول)، لكنها كلها تتلخص في هذه الأسئلة الأربعة البسيطة.\nاسأل: لماذا نذكر «اتجاه الصفحة من اليمين لليسار RTL والهاتف» في المكون الرابع؟\nتحقق: حتى يضبط الذكاء الاصطناعي محاذاة النصوص العربية وشكل البطاقات على الجوال منذ البداية.',
        en: 'Explain the 4 prompt building blocks in the illustration.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'القالب الرباعي البسيط', en: 'The Simple 4-Part Template' },
          principle: {
            ar: 'اكتب طلبك في 4 نقاط قصيرة ومرتبة',
            en: 'Write Your Request in 4 Short, Ordered Points',
          },
          explanation: {
            ar: 'لا تحتاج إلى حفظ مصطلحات معقدة؛ فقط أجب عن هذه النقاط الأربع في رسالتك للذكاء الاصطناعي:',
            en: 'No need to memorize jargon; just include these 4 points in your message to AI:',
          },
          bulletPoints: [
            {
              ar: '1. الهدف ونوع الموقع: ما المشروع وبأي لغة؟ (مثال: موقع عربي لمقهى قهوة مختصة).',
              en: '1. Goal & Site Type: What is the project and in what language?',
            },
            {
              ar: '2. الزائر والزر الأساسي: لمن الموقع وماذا يفعل الزر الرئيسي؟ (طلب عبر واتساب).',
              en: '2. Visitor & Main Button: Who is it for and what does the main button do?',
            },
            {
              ar: '3. الأقسام والشكل: اذكر الأقسام الأربعة بالترتيب واطلب تصميمًا هادئًا متوافقًا مع الهاتف.',
              en: '3. Sections & Style: List the 4 sections in order and ask for a clean mobile-friendly layout.',
            },
          ],
          architecturalRule: {
            ar: 'كلما رقّمت الأقسام المطلوبة (1، 2، 3، 4)، التزم الذكاء الاصطناعي بترتيبها بدقة.',
            en: 'Numbering your requested sections (1, 2, 3, 4) makes AI follow your exact order.',
          },
        },
      },
    },
    {
      id: 's03-slide-04',
      sessionNumber: 3,
      slideNumber: 4,
      totalSlides: 10,
      type: 'ai',
      visualType: 'prompt-anatomy',
      title: {
        ar: 'مثال تطبيقي كامل لطلب بناء صفحة المقهى',
        en: 'Complete Example Prompt for Building the Café Page',
      },
      subtitle: {
        ar: 'انقر على كل جزء لترى كيف كتبناه بلغة عربية بسيطة وواضحة',
        en: 'Click each part to see how we wrote it in clear, simple Arabic',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'استعراض مثال كامل وجاهز للنسخ يوضح كيف تترجم الأجزاء إلى برومبت عملي متكامل.',
        en: 'Walk through a complete copyable prompt example for the specialty café.',
      },
      speakerNotes: {
        ar: 'نفّذ: تنقل بين التبويبات مع المتدربين (الدور، السياق، المهمة، القيود، المخرج، معايير القبول) واشرح كيف أن كل تبويب هو جملة عربية واضحة جدًا.\nاسأل: هل توجد أي كلمة صعبة في هذا الطلب؟\nتحقق: أرِهم زر «نسخ البرومبت كاملًا» وكيف يمكنهم تعديل الكلمات لتناسب مشروعهم الخاص.',
        en: 'Click through the prompt tabs and show how simple and readable each section is.',
      },
      payload: {
        type: 'ai',
        data: {
          role: 'أنت مصمم ومطور مواقع ويب محترف متخصص في بناء واجهات عربية واضحة وسهلة الاستخدام.',
          context:
            'نحن نبني الصفحة الرئيسية لموقع «مقهى القهوة المختصة» الموجه لمحبي القهوة الذين يتصفحون من هواتفهم ويريدون معرفة الأصناف والأسعار والطلب السريع.',
          task: 'أنشئ الصفحة الرئيسية الكاملة للمقهى مرتبة في 4 أقسام واضحة: 1. شريط علوي بسيط 2. قسم ترحيبي مع عنوان واضح وزر «اطلب عبر واتساب» 3. قسم قائمة المشروبات يحتوي على 6 بطاقات مع السعر 4. تذييل يحتوي على العنوان وساعات العمل.',
          constraints:
            'استخدم اللغة العربية الفصحى الواضحة، واتجاه اليمين لليسار (RTL)، وألواناً هادئة ومريحة للعين، وتأكد أن البطاقات والأزرار واضحة وكبيرة على شاشة الهاتف.',
          output:
            'صفحة ويب منظمة وكاملة تحتوي على الأقسام الأربعة بالترتيب مع نصوص واقعية ومقنعة للمقهى.',
          acceptanceCriteria: [
            'وجود عنوان ترحيبي واضح في أعلى الصفحة يشرح ما يقدمه المقهى فوراً.',
            'ظهور 6 بطاقات مشروبات مرتبة تحتوي كل منها على الاسم والوصف القصير والسعر.',
            'وجود زر واضح ومباشر للطلب عبر واتساب في القسم الترحيبي وفي أسفل الصفحة.',
            'تناسق العرض على شاشة الهاتف والكمبيوتر مع اتجاه عربي سليم (RTL).',
          ],
          iterationTip: {
            ar: 'ابدأ بطلب الصفحة الأساسية أولًا، وبعد أن تراها أمامك اطلب تعديل الألوان أو النصوص خطوة بخطوة.',
            en: 'Start by requesting the main page first, then refine colors or text step by step.',
          },
        },
      },
    },
    {
      id: 's03-slide-05',
      sessionNumber: 3,
      slideNumber: 5,
      totalSlides: 10,
      type: 'reveal',
      visualType: 'page-anatomy',
      title: {
        ar: 'كيف تطلب تعديل قسم واحد فقط دون إفساد باقي الصفحة؟',
        en: 'How to Request a Single Section Without Breaking the Rest',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'تعليم المتدرب مهارة تجزئة الطلب (طلب قسم محدد مثل قسم البطاقات أو الترحيب) بدل إعادة بناء الموقع كله.',
        en: 'Teach trainees how to request or update one specific section at a time.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح للمتدربين أننا أحيانًا نكون راضين عن الصفحة كلها ونريد فقط إضافة قسم جديد (مثل قسم آراء العملاء) أو تعديل قسم واحد.\nاسأل: كيف نخبر الذكاء الاصطناعي أن يعدل قسم المشروبات فقط ويترك الباقي كما هو؟\nتحقق: نحدد اسم القسم بوضوح ونكتب: «عدّل قسم قائمة المشروبات فقط مع الحفاظ على باقي الأقسام دون تغيير».',
        en: 'Show how to scope a request to a single section while keeping the rest untouched.',
      },
      payload: {
        type: 'reveal',
        data: {
          premise: {
            ar: 'عندما تريد إضافة قسم جديد أو تعديل جزء محدد، اتبع هذه الخطوات الثلاث:',
            en: 'When adding or editing one specific section, follow these 3 steps:',
          },
          steps: [
            {
              number: '01',
              title: { ar: 'سمِّ القسم المطلوب بدقة', en: 'Name the Exact Section' },
              description: {
                ar: 'مثال: «في قسم قائمة المشروبات (القسم الثالث في الصفحة)...»',
                en: 'Example: "In the drinks menu section (the third section on the page)..."',
              },
            },
            {
              number: '02',
              title: { ar: 'اذكر التعديل المحدد الذي تريده', en: 'State the Specific Change' },
              description: {
                ar: 'مثال: «أضف شارة السعر باللون الأخضر بجانب اسم كل مشروب».',
                en: 'Example: "Add a green price badge next to each drink name."',
              },
            },
            {
              number: '03',
              title: { ar: 'اطلب الحفاظ على باقي الصفحة', en: 'Ask to Preserve the Rest' },
              description: {
                ar: 'أضف جملة: «لا تغير الشريط العلوي أو القسم الترحيبي أو التذييل».',
                en: 'Add: "Do not change the header, hero section, or footer."',
              },
            },
          ],
        },
      },
    },
    {
      id: 's03-slide-06',
      sessionNumber: 3,
      slideNumber: 6,
      totalSlides: 10,
      type: 'question',
      visualType: 'prompt-anatomy',
      title: {
        ar: 'سؤال تفاعلي: ما الذي ينقص هذا الطلب؟',
        en: 'Interactive Question: What Is Missing in This Prompt?',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'تدريب المتدربين على اكتشاف النقص في برومبت ضعيف وإكماله بأنفسهم.',
        en: 'Train learners to spot what is missing in a weak prompt and fix it.',
      },
      speakerNotes: {
        ar: 'نفّذ: اعرض جملة السؤال واطلب من المتدربين اكتشاف الأشياء الناقصة في شات Zoom.\nاسأل: لو كتب متدرب: «أنشئ لي صفحة لعيادة أسنان»، ما الأشياء الثلاثة التي نسي ذكرها؟\nتحقق: نسي تحديد الأقسام المطلوبة، واللغة/الاتجاه، وزر الحجز عبر واتساب!',
        en: 'Have trainees spot the missing elements in "Create a dental clinic page".',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'كتب زميلك للذكاء الاصطناعي: «أنشئ لي صفحة لعيادة أسنان» فقط. ما الأشياء المهمة التي نسي تحديدها؟',
            en: 'A classmate wrote: "Create a dental clinic page." What important details did they forget?',
          },
          contextHint: {
            ar: 'تذكر المكونات الأربعة للطلب الواضح التي تعلمناها قبل قليل.',
            en: 'Remember the 4 building blocks of a clear request.',
          },
          promptToClass: {
            ar: 'اكتب في شات Zoom شيئًا واحدًا يجب إضافته لهذا الطلب 💬',
            en: 'Type one detail that should be added in Zoom chat 💬',
          },
          expectedAnswers: [
            {
              ar: 'تحديد الأقسام المطلوبة (مثل: الترحيب، خدمات العيادة، أوقات الدوام).',
              en: 'Specify required sections (Welcome, Clinic Services, Working Hours).',
            },
            {
              ar: 'تحديد زر الإجراء الأساسي (مثل: احجز موعدك الآن عبر واتساب).',
              en: 'Specify the main action button (e.g., Book Appointment via WhatsApp).',
            },
            {
              ar: 'تحديد اللغة العربية واتجاه اليمين لليسار (RTL) والتوافق مع الهاتف.',
              en: 'Specify Arabic language, RTL direction, and mobile responsiveness.',
            },
          ],
        },
      },
    },
    {
      id: 's03-slide-07',
      sessionNumber: 3,
      slideNumber: 7,
      totalSlides: 10,
      type: 'demo',
      visualType: 'ai-loop',
      title: {
        ar: 'تطبيق عملي: تجربة الطلب الواضح ومشاهدة النتيجة مباشرة',
        en: 'Live Walkthrough: Running the Clear Prompt & Inspecting the Result',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'إجراء تجربة حية أمام المتدربين لإرسال الطلب الواضح ومشاهدة كيف تخرج الصفحة مرتبة ومطابقة للخطة.',
        en: 'Run a live demonstration sending the structured prompt and inspecting the generated page.',
      },
      speakerNotes: {
        ar: 'نفّذ: انسخ الطلب المرتب للمقهى، وأرسله لأداة الذكاء الاصطناعي مباشرة على شاشة Zoom، واستعرض الصفحة الناتجة مع المتدربين قسمًا بقسم.\nاسأل: انظروا إلى الصفحة الناتجة: هل التزم الذكاء الاصطناعي بالأقسام الأربعة التي طلبناها؟\nتحقق: قارن بين الخطة المكتوبة والنتيجة الظاهرة على الشاشة لتعزيز ثقة المتدربين.',
        en: 'Paste the structured café prompt live on Zoom and inspect the 4 generated sections.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'إرسال طلب المقهى المرتب ومطابقة النتيجة مع النقاط الأربع',
            en: 'Send the structured café prompt and verify the 4 generated sections',
          },
          instructorSteps: [
            {
              ar: 'ننسخ الطلب المكون من الأركان الأربعة ونرسله للذكاء الاصطناعي.',
              en: 'Copy the 4-part prompt and send it to AI.',
            },
            {
              ar: 'نفحص الصفحة الناتجة من الأعلى للأسفل: هل العنوان واضح؟ هل البطاقات الست مرتبة؟',
              en: 'Check the generated page top to bottom: Is the headline clear? Are the 6 cards neat?',
            },
            {
              ar: 'نجرب زر «اطلب عبر واتساب» ونتأكد من وضوحه على الشاشة.',
              en: 'Test the "Order via WhatsApp" button and check its visibility.',
            },
          ],
          promptToUse:
            'أنشئ صفحة رئيسية عربية (RTL) لمقهى قهوة مختصة تتكون من 4 أقسام بالترتيب: 1. شريط علوي باسم المقهى وروابط سريعة 2. قسم ترحيبي بعنوان جذاب وزر «اطلب عبر واتساب» 3. قسم يعرض 6 مشروبات في بطاقات مرتبة مع السعر 4. تذييل بالعنوان وساعات العمل. اجعل التصميم هادئاً ومتجاوباً مع الهاتف.',
          expectedOutput: {
            ar: 'صفحة ويب عربية متكاملة ومرتبة تظهر فيها الأقسام الأربعة بوضوح من أول مرة.',
            en: 'A complete, well-ordered Arabic webpage showing all 4 sections clearly.',
          },
        },
      },
    },
    {
      id: 's03-slide-08',
      sessionNumber: 3,
      slideNumber: 8,
      totalSlides: 10,
      type: 'challenge',
      visualType: 'prompt-anatomy',
      title: {
        ar: 'نشاطك العملي: اكتب طلب بناء صفحتك الرئيسية',
        en: 'Your Practical Activity: Write Your Homepage Prompt',
      },
      estimatedMinutes: 20,
      teachingGoal: {
        ar: 'تمكين كل متدرب من صياغة طلبه الواضح الخاص بمشروعه ومشاركته للمراجعة.',
        en: 'Have each trainee write their own structured homepage prompt and share it.',
      },
      speakerNotes: {
        ar: 'نفّذ: شغّل المؤقت لمدة 20 دقيقة. اطلب من المتدربين استخدام قالب النقاط الأربع لكتابة برومبت مشروعهم.\nاسأل: من يشاركنا طلبه في الشات لنراجعه معًا ونجربه؟\nتحقق: اختر 2 أو 3 من طلبات المتدربين وأشد بوضوحها وترتيبها.',
        en: 'Start the 20-minute timer and review trainee prompts in Zoom chat.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'اكتب طلبًا واضحًا من 4 نقاط لبناء الصفحة الرئيسية لموقعك',
            en: 'Write a Clear 4-Point Prompt to Build Your Website Homepage',
          },
          durationMinutes: 20,
          objective: {
            ar: 'تحويل خطة أقسام موقعك من الجلسة السابقة إلى رسالة تعليمات واضحة للذكاء الاصطناعي.',
            en: 'Turn your section plan from Session 02 into a clear instruction message for AI.',
          },
          instructions: [
            {
              ar: '1. اكتب الهدف ونوع الموقع واللغة العربية (RTL).',
              en: '1. State the goal, website type, and Arabic language (RTL).',
            },
            {
              ar: '2. اكتب من هو الزائر وما هو نص زر واتساب الأساسي.',
              en: '2. State who the visitor is and the text of the main WhatsApp button.',
            },
            {
              ar: '3. رقّم الأقسام الأربعة المطلوبة في الصفحة (1، 2، 3، 4).',
              en: '3. Number the 4 required sections on the page (1, 2, 3, 4).',
            },
            {
              ar: '4. حدد الألوان المفضلة واطلب توافق الصفحة مع شاشة الهاتف.',
              en: '4. Specify preferred colors and mobile screen compatibility.',
            },
          ],
          deliverable: {
            ar: 'شارك نص طلبك في شات Zoom أو أرسله عبر زر واتساب في صفحة الجلسة.',
            en: 'Share your prompt text in Zoom chat or send it via WhatsApp.',
          },
        },
      },
    },
    {
      id: 's03-slide-09',
      sessionNumber: 3,
      slideNumber: 9,
      totalSlides: 10,
      type: 'project',
      visualType: 'idea-to-website',
      title: {
        ar: 'الخطوة الثالثة في مشروعك: وثيقة الطلب الجاهزة للتنفيذ',
        en: 'Step 3 in Your Project: Ready-to-Run Prompt Document',
      },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'ربط وثيقة البرومبت التي كتبها المتدرب بمرحلة التوليد والمراجعة في الجلسة القادمة.',
        en: 'Connect today’s prompt document to the generation and review stage in Session 04.',
      },
      speakerNotes: {
        ar: 'نفّذ: وضح للمتدربين أنهم يملكون الآن الفكرة + خريطة التصميم + رسالة الطلب الدقيقة.\nاسأل: ماذا نفعل بعد أن يعطينا الذكاء الاصطناعي النتيجة الأولى؟\nتحقق: هذا بالضبط موضوع الجلسة الرابعة: كيف نراجع النتيجة ونحسنها خطوة بخطوة.',
        en: 'Connect today’s prompt to Session 04 review and refinement.',
      },
      payload: {
        type: 'project',
        data: {
          stepNumber: '03',
          phaseName: {
            ar: 'المرحلة الثالثة: وصف المطلوب للذكاء الاصطناعي',
            en: 'Phase 3: Describing Requirements to AI',
          },
          whatWeBuildNow: {
            ar: 'رسالة الطلب الكاملة (Prompt) لبناء الصفحة الرئيسية للمشروع',
            en: 'Complete Homepage Generation Prompt for Your Project',
          },
          deliverables: [
            {
              ar: 'وصف واضح لهوية الموقع والزائر المستهدف',
              en: 'Clear description of site identity and target visitor',
            },
            {
              ar: 'قائمة مرقمة بالأقسام الأربعة ومحتوى كل قسم',
              en: 'Numbered list of the 4 sections and their content',
            },
            {
              ar: 'شروط الاتجاه العربي (RTL) والألوان الهادئة والتوافق مع الهاتف',
              en: 'Arabic RTL direction, calm colors, and mobile view rules',
            },
          ],
          connectionToFinalProject: {
            ar: 'بهذا الطلب الواضح ننتقل من مرحلة التخطيط على الورق إلى توليد أول نسخة حية من موقعنا.',
            en: 'With this clear prompt, we move from paper planning to generating the first live draft of our site.',
          },
        },
      },
    },
    {
      id: 's03-slide-10',
      sessionNumber: 3,
      slideNumber: 10,
      totalSlides: 10,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الجلسة الثالثة في 3 نقاط',
        en: 'Session 03 Summary in 3 Points',
      },
      estimatedMinutes: 3,
      teachingGoal: {
        ar: 'تثبيت قواعد كتابة الطلب الواضح والتمهيد للجلسة الرابعة.',
        en: 'Reinforce the rules of clear prompting and preview Session 04.',
      },
      speakerNotes: {
        ar: 'نفّذ: لخص النقاط الثلاث واشكر المتدربين على كتابة طلباتهم العملية.\nاسأل: هل شعرتم بالفرق بين الكتابة العشوائية والكتابة المرتبة في 4 نقاط؟\nتحقق: ذكّرهم بحفظ طلبهم لأننا سنراجعه ونطور نتيجته في الجلسة الرابعة.',
        en: 'Summarize the 3 points and remind trainees to save their prompt for Session 04.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: {
                ar: 'وضوح الطلب يصنع جودة النتيجة',
                en: 'Prompt Clarity Creates Output Quality',
              },
              description: {
                ar: 'الذكاء الاصطناعي يعطيك أفضل ما لديه عندما تكتب له الهدف والأقسام بترتيب واضح.',
                en: 'AI gives its best output when you state the goal and sections in clear order.',
              },
            },
            {
              number: '02',
              title: {
                ar: 'استخدم القالب الرباعي دائمًا',
                en: 'Always Use the 4-Part Template',
              },
              description: {
                ar: 'الهدف ونوع الموقع + الزائر وزر واتساب + الأقسام المرقمة + الشكل المتوافق مع الهاتف.',
                en: 'Goal & site type + Visitor & WhatsApp button + Numbered sections + Mobile-friendly style.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'اطلب التعديلات قسمًا بقسم',
                en: 'Request Edits One Section at a Time',
              },
              description: {
                ar: 'عندما تريد تعديل جزء صغير، سمِّ القسم بدقة واطلب الحفاظ على باقي الصفحة.',
                en: 'When editing a small part, name the section clearly and ask to keep the rest unchanged.',
              },
            },
          ],
          coreMotto: {
            ar: 'الخطوة القادمة في الجلسة 04: كيف نراجع النتيجة الأولى ونحسنها خطوة بخطوة بأمان؟',
            en: 'Up Next in Session 04: How to review the first draft and improve it safely step by step.',
          },
        },
      },
    },
  ],
};
