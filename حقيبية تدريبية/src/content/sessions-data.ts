import { EducationalSession } from '@/types';

export const INITIAL_EDUCATIONAL_SESSIONS: EducationalSession[] = [
  {
    id: 'session-01',
    number: 1,
    slug: 'session-01',
    title: {
      ar: 'المبتكر الجديد للويب: كيف يغير الذكاء الاصطناعي تطوير المواقع؟',
      en: 'The New Web Creator: How AI is Transforming Web Development',
    },
    subtitle: {
      ar: 'فهم التحول المعماري، متطلبات سوق العمل، والفرق الجوهري بين هندسة البرمجيات والـ Vibe Coding',
      en: 'Understanding architectural shift, market demand, and Engineering vs Vibe Coding',
    },
    description: {
      ar: 'جلسة التأسيس والانطلاق: كيف تتحول من متلقٍ للأوامر إلى صانع ويب يقود أدوات الذكاء الاصطناعي بعقلية هندسية منضبطة.',
      en: 'Foundational kickoff: turning into a web creator who orchestrates AI with rigorous engineering judgment.',
    },
    status: 'active',
    scheduledDate: 'اليوم • 06:00 مساءً',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: {
        ar: 'عبد الحكيم قنبر',
        en: 'Abdulhakim Kanbr',
      },
      role: {
        ar: 'كبير مهندسي البرمجيات ومدرب الدورة',
        en: 'Lead Software Engineer & Instructor',
      },
    },
    targetStageNumber: '01',
    targetModuleName: {
      ar: 'المرحلة 01: التفكير والتخطيط المعماري (THINK)',
      en: 'Stage 01: Architectural Thinking & Planning (THINK)',
    },
    objectives: [
      {
        ar: 'إدراك أثر أدوات الذكاء الاصطناعي على سرعة التطوير مع الحفاظ على الأصول الهندسية الصارمة',
        en: 'Understand AI impact on dev speed while upholding engineering principles',
      },
      {
        ar: 'التمييز العملي بين منهجية هندسة البرمجيات وأسلوب الـ Vibe Coding السطحي',
        en: 'Differentiate Software Engineering discipline from superficial Vibe Coding',
      },
      {
        ar: 'تفكيك طلب عميل واقعي واستخراج المتطلبات التقنية والتجارية قبل كتابة أول سطر أو برومبت',
        en: 'Deconstruct a real client brief into technical requirements before writing prompts',
      },
    ],
    students: [
      {
        id: 'std-01',
        name: 'سارة المنصور',
        email: 'sara@example.com',
        status: 'active',
        progressPercent: 75,
        completedActivities: ['s01-act-01', 's01-act-02'],
        lastActiveAt: 'منذ 10 دقائق',
      },
      {
        id: 'std-02',
        name: 'فيصل العتيبي',
        email: 'faisal@example.com',
        status: 'active',
        progressPercent: 100,
        completedActivities: ['s01-act-01', 's01-act-02', 's01-act-03'],
        lastActiveAt: 'منذ 3 دقائق',
      },
      {
        id: 'std-03',
        name: 'نورة الحربي',
        email: 'noura@example.com',
        status: 'needs_help',
        progressPercent: 33,
        completedActivities: ['s01-act-01'],
        notes: 'تواجه صعوبة في تحديد الإجراء الأساسي للزائر (CTA)',
        lastActiveAt: 'منذ 25 دقيقة',
      },
      {
        id: 'std-04',
        name: 'خالد السالم',
        email: 'khaled@example.com',
        status: 'active',
        progressPercent: 66,
        completedActivities: ['s01-act-01', 's01-act-02'],
        lastActiveAt: 'منذ 8 دقائق',
      },
    ],
    activities: [
      {
        id: 's01-act-01',
        order: 1,
        type: 'task',
        title: {
          ar: 'النشاط 01: تفكيك فكرة مشروعك واستخراج متطلبات العميل',
          en: 'Activity 01: Deconstruct Project Idea & Client Requirements',
        },
        durationMinutes: 20,
        studentContent: {
          headline: {
            ar: 'حدد هوية موقعك، قطاع النشاط، والهدف التجاري الأول قبل كتابة أي سطر كود',
            en: 'Define site identity, domain niche, and primary conversion metric before code',
          },
          whatAmIDoing: {
            ar: 'أحدد بدقة ما هو المشروع الذي سأبنيه خلال هذه الحقيبة (مثلاً: مطعم، متجر متخصص، منصة استشارات)، ومن هو العميل المستهدف وما هو الإجراء الأساسي الذي أريد من الزائر تنفيذه (Call to Action).',
            en: 'Defining my core project niche, audience profile, and primary call-to-action.',
          },
          whyAmIDoingIt: {
            ar: 'أكبر خطأ يقع فيه المبتدئون هو القفز مباشرة لتوليد الكود بالذكاء الاصطناعي دون معرفة الهدف، مما ينتج مواقع عشوائية عديمة الفائدة لصاحب العمل.',
            en: 'Direct code generation without explicit business goals produces generic, unusable sites.',
          },
          howDoIDoIt: [
            {
              ar: 'اختر مجالاً واقعياً: مطعم بيتزا محلي، متجر عطور فاخرة، عيادة أسنان، أو منصة مصمم مستقل.',
              en: 'Pick a concrete business domain: e.g. local pizzeria, luxury perfume, boutique clinic.',
            },
            {
              ar: 'حدد من هو الزائر المتوقع وما هي مشكلته التي يحلها موقعك.',
              en: 'Pinpoint the primary visitor persona and their core pain point.',
            },
            {
              ar: 'حدد زر الإجراء الأساسي (CTA) في صفحة الهبوط: "اطلب الآن"، "احجز موعداً"، أو "تواصل معنا".',
              en: 'Define the single primary CTA: e.g. Order Now, Book Consultation, Request Quote.',
            },
            {
              ar: 'اكتب هذه النقاط في صندوق الإجابة أدناه واضغط على "تسليم وإكمال النشاط".',
              en: 'Write your specifications in the submission box below and submit.',
            },
          ],
          expectedResult: {
            ar: 'ملخص واضح من 4 أسطر يحدد اسم المشروع، نشاطه، جمهوره، والإجراء الأساسي المطلوب من الزائر.',
            en: 'A concise 4-line project brief containing name, niche, audience, and CTA.',
          },
          hints: [
            {
              ar: '💡 اختر مشروعاً يسهل تخيله وله منتجات أو خدمات واضحة (مثل الأطعمة أو الملابس أو الاستشارات).',
              en: 'Choose a project domain with tangible products or services for intuitive modeling.',
            },
            {
              ar: '💡 لا تشتت موقعك بعدة أهداف، ركز على هدف تجاري رئيسي واحد ليكون الموقع ناجحاً.',
              en: 'Focus on one primary commercial objective to maximize conversion clarity.',
            },
          ],
          starterSnippet: `اسم المشروع:
قطاع النشاط:
الجمهور المستهدف:
الإجراء الأساسي للزائر (CTA):`,
          exampleSnippet: `اسم المشروع: برجر زون (BurgerZone)
قطاع النشاط: مطعم وجبات سريعة فاخرة
الجمهور المستهدف: الشباب والعائلات في المدينة الباحثون عن وجبات سريعة بجودة عالية
الإجراء الأساسي للزائر (CTA): "اطلب وجبتك الآن واستلمها خلال 20 دقيقة"`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'ترسيخ مبدأ أن "الهندسة تبدأ بالفهم التجاري": كسر عادة البدء في توليد الأكواد فوراً، وتعليم الطلاب استخراج المتطلبات.',
            en: 'Instill the principle that engineering begins with business understanding, breaking the urge to prompt blindly.',
          },
          whatToExplain: [
            {
              ar: 'اشرح للطلاب أن الذكاء الاصطناعي لا يعرف نية العميل، بل ينفذ ما يُطلب منه حرفياً، وضعف المدخلات يعني ضعف المخرجات (Garbage In, Garbage Out).',
              en: 'Explain that AI cannot guess customer intent; vague prompts yield useless generic prototypes.',
            },
            {
              ar: 'وضّح كيف يفرق العميل بين المبرمج العادي وصانع الويب المبتكر: صانع الويب يناقش أهداف العمل ويزيد مبيعات العميل.',
              en: 'Clarify how clients distinguish mere coders from Web Creators: Creators understand commercial conversion.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'يا شباب، إذا جاءك صاحب مطعم وقال "أريد موقعاً جميلاً"، ما هو أول سؤال تسأله له؟',
              en: 'If a restaurant owner says "make me a pretty website", what is your very first question?',
            },
            {
              ar: 'ما الفرق بين موقع يعرض قائمة الطعام كصورة PDF، وموقع تفاعلي يتيح الطلب السريع بنقرة واحدة؟',
              en: 'What is the difference between a static PDF menu and a 1-click interactive ordering flow?',
            },
          ],
          example: {
            ar: 'اعرض شاشة مطعم Shake Shack أو Five Guys وقارنها بموقع مطعم متواضع لا يملك زراً واضحاً للطلب.',
            en: 'Demonstrate Shake Shack landing page vs an unoptimized site lacking a clear CTA.',
          },
          commonMistakes: [
            {
              ar: 'اختيار فكرة ضخمة جداً مثل "أمازون جديد" بدلاً من البدء بمنتج واضح وقابل للإنجاز.',
              en: 'Picking an overwhelming idea like "a new Amazon" instead of a tightly scoped MVP.',
            },
            {
              ar: 'نسيان تحديد الـ Call to Action، مما يجعل الموقع مجرد مجلة للقراءة بدون أثر تجاري.',
              en: 'Forgetting the CTA, turning the site into a passive brochure instead of a conversion tool.',
            },
          ],
          hints: [
            {
              ar: 'تلميح 1: شجع الطلاب المترددين على اختيار مجال يحبونه شخصياً.',
              en: 'Hint 1: Encourage hesitant students to choose a hobby or favorite local shop.',
            },
            {
              ar: 'تلميح 2: ذكرهم أن هذا المشروع سيستمر معهم ليكون جزءاً من معرض أعمالهم (Portfolio).',
              en: 'Hint 2: Remind them this will become their capstone portfolio showcase.',
            },
          ],
          challenge: {
            ar: 'للطلاب المتقدمين: اطلب منهم تحديد ميزتين تنافسيتين (Unique Value Propositions) تفرقان موقعهم عن المنافسين.',
            en: 'For advanced students: Define 2 unique value propositions that differentiate them from rivals.',
          },
          ifStudentIsStuck: {
            ar: 'إذا رأيت طالباً عالقاً، اكتب له في الشات: "اختر مطعم شاورما في حارتك واكتب اسمه وثلاث وجبات يقدمها".',
            en: 'If a student is stuck, prompt them: "Pick a local shawarma spot, write its name and 3 top dishes."',
          },
          extension: {
            ar: 'للطلاب الذين ينهون بسرعة: اطلب منهم كتابة مسار العميل من أول نقرة في Google وحتى تأكيد الطلب (User Journey).',
            en: 'For early finishers: Map the complete 4-step user journey from Google search to checkout.',
          },
          teachingNotes: {
            ar: 'احرص على ألا يستغرق هذا النشاط أكثر من 15 دقيقة في الشرح، واترك 5 دقائق للطلاب لكتابة إجاباتهم في صندوق الإرسال وقراءة 3 أمثلة حية في الشات لتشجيع الجميع.',
            en: 'Limit lecture to 15m; allocate 5m for student submissions and review 3 live examples on Zoom.',
          },
          discussionIdeas: [
            {
              ar: 'هل يكفي أن يكون الموقع جميلاً إذا لم يكن يحقق مبيعات لصاحب العمل؟',
              en: 'Is a beautiful site valuable if it generates zero sales for the business owner?',
            },
            {
              ar: 'كيف يساعدنا الذكاء الاصطناعي في صياغة نصوص ترويجية مقنعة للمطعم؟',
              en: 'How can LLMs help craft high-converting promotional copy for the restaurant?',
            },
          ],
        },
      },
      {
        id: 's01-act-02',
        order: 2,
        type: 'task',
        title: {
          ar: 'النشاط 02: تفكيك طلب العميل إلى أقسام وصفحات رئيسية',
          en: 'Activity 02: Decomposing Client Brief into Core Pages & Sections',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'حول الفكرة إلى هيكل صفحات وأقسام واضحة (Sitemap & Wireframe Breakdown)',
            en: 'Convert the concept into concrete pages and section blocks',
          },
          whatAmIDoing: {
            ar: 'أحدد ما هي الأقسام الأساسية التي يجب أن توجد في الصفحة الرئيسية لموقعي، وما هو ترتيبها المنطقي للزائر.',
            en: 'Outlining essential homepage sections and logical visual hierarchy.',
          },
          whyAmIDoingIt: {
            ar: 'الموقع الناجح يقود الزائر في رحلة إقناع مدروسة: تعريف بالعلامة ← عرض القيمة ← استعراض المنتجات ← آراء العملاء ← زر الحجز أو الشراء.',
            en: 'High-converting websites guide visitors through a deliberate narrative flow.',
          },
          howDoIDoIt: [
            {
              ar: 'قسم الهيدر (Header): الشعار وروابط التنقل السريع وزر الإجراء.',
              en: 'Header: Logo, navigation anchor links, and quick CTA.',
            },
            {
              ar: 'قسم البطل (Hero Section): العنوان الجذاب، الوصف المختصر، صورة المنتج البارزة، وزر الشراء.',
              en: 'Hero: Catchy headline, punchy value prop, hero visual, and primary CTA.',
            },
            {
              ar: 'قسم المميزات أو المنتجات (Features/Products): كروت تعرض أبرز ما يقدمه الموقع مع الأسعار.',
              en: 'Products/Features: Grid showing top items with clear pricing badges.',
            },
            {
              ar: 'قسم التقييمات وآراء العملاء (Social Proof): آراء وتجارب واقعية لبناء الثقة.',
              en: 'Social Proof: Customer reviews and ratings to instill trust.',
            },
            {
              ar: 'التذييل (Footer): روابط التواصل، ساعات العمل، وسجل الحقوق.',
              en: 'Footer: Contact links, operating hours, and copyright.',
            },
          ],
          expectedResult: {
            ar: 'قائمة مرتبة بالأقسام الخمسة الرئيسية مع وصف موجز لما يحتويه كل قسم في موقعك.',
            en: 'A 5-section wireframe breakdown describing content inside each block.',
          },
          hints: [
            {
              ar: '💡 لا تزد عدد الأقسام عن 5 إلى 6 في الصفحة الأولى حتى لا يتشتت الزائر.',
              en: 'Limit homepage sections to 5-6 to avoid cognitive overload.',
            },
          ],
          starterSnippet: `1. الهيدر (Header):
2. البطل (Hero Section):
3. قائمة المنتجات (Featured Menu):
4. آراء العملاء (Reviews):
5. التذييل (Footer):`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'تعليم الطلاب فن "الترتيب البصري" (Visual Hierarchy) وكيفية بناء هيكل متناسق للموقع.',
            en: 'Teach visual hierarchy and structuring balanced section layout narrative.',
          },
          whatToExplain: [
            {
              ar: 'لماذا نضع زر الشراء في قسم الـ Hero وفي نهاية الصفحة أيضاً؟ (قاعدة التكرار الذكي).',
              en: 'Why repeating the CTA in Hero and Footer drives conversion.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'إذا فتح الزائر موقعك على الجوال، ما الذي يجب أن يظهر له في أول 3 ثوانٍ دون الحاجة للتمرير؟ (Above the fold).',
              en: 'What must appear above the fold on mobile within the first 3 seconds?',
            },
          ],
          example: {
            ar: 'افتح صفحة Stripe أو Apple واستعرض كيف تتسلسل الأقسام بإيقاع مريح ومقنع.',
            en: 'Inspect Stripe or Apple landing page to showcase narrative rhythm.',
          },
          commonMistakes: [
            {
              ar: 'حشو الصفحة الأولى بنصوص طويلة جداً لا يقرؤها أحد.',
              en: 'Overloading sections with wall of text nobody reads.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'تحديد قسم تفاعلي خاص (مثل حاسبة أسعار أو منتقي وجبات تفاعلي).',
            en: 'Design an interactive utility block like a live pricing or meal customizer.',
          },
          ifStudentIsStuck: {
            ar: 'اعتمد له الهيكل القياسي الخماسي الموضح في القالب.',
            en: 'Direct him to apply the standard 5-part template.',
          },
          extension: {
            ar: 'رسم سكتش بسيط بالقلم على ورقة وتصويره أو تخيله برمجياً.',
            en: 'Sketch a quick low-fi wireframe box layout on paper.',
          },
          teachingNotes: {
            ar: 'شجع الطلاب على مشاركة أسماء أقسامهم في الشات وتأكد من فهم الجميع لمعنى Hero Section.',
            en: 'Validate comprehension of Above-The-Fold and Hero Section terminology.',
          },
          discussionIdeas: [
            {
              ar: 'كيف يؤثر ترتيب الأقسام على معدل تحويل الزائر إلى عميل حقيقي؟',
              en: 'How section order dictates visitor-to-paying-customer conversion.',
            },
          ],
        },
      },
      {
        id: 's01-act-03',
        order: 3,
        type: 'code',
        title: {
          ar: 'النشاط 03: صياغة البرومبت الهندسي الأول لتوليد الواجهة',
          en: 'Activity 03: Authoring First Technical Prompt for UI Generation',
        },
        durationMinutes: 30,
        studentContent: {
          headline: {
            ar: 'صغ موجهك الأول بأسلوب المهندسين المحترفين بدقة وتفاصيل تمنع العشوائية',
            en: 'Compose your first structured engineering prompt avoiding generic output',
          },
          whatAmIDoing: {
            ar: 'أكتب برومبت احترافي يوجه الذكاء الاصطناعي لبناء قسم الـ Hero لموقعي متضمناً الألوان، العناصر، دعم اللغة العربية، وأحدث تقنيات الويب.',
            en: 'Writing an engineered prompt for the Hero Section specifying constraints.',
          },
          whyAmIDoingIt: {
            ar: 'البرومبت البسيط مثل "اعمل لي موقع مطعم" يعطيك كوداً رديئاً وغير متجاوب. بينما البرومبت الهندسي يعطيك كوداً احترافياً قابلاً للاستخدام مباشرة.',
            en: 'Engineered prompts eliminate hallucinations and yield production-grade components.',
          },
          howDoIDoIt: [
            {
              ar: 'حدد دور الذكاء الاصطناعي: "أنت مهندس واجهات أمامية متخصص في Next.js و Tailwind CSS".',
              en: 'Set role: Senior Frontend Engineer in Next.js & Tailwind.',
            },
            {
              ar: 'حدد تفاصيل المشروع واللغة: "الموقع يدعم اللغة العربية مع اتجاه dir=\"rtl\"".',
              en: 'Set context: Arabic UI with RTL direction.',
            },
            {
              ar: 'حدد المحتوى بدقة: عنوان رئيسي، عنوان فرعي، زران (الطلب الرئيسي + استعراض القائمة).',
              en: 'Specify elements: Headline, subtitle, dual CTAs.',
            },
            {
              ar: 'حدد القيود التقنية: "استخدم كلاسات Tailwind v4 فقط، واجعل التصميم متجاوباً تماماً على الهواتف".',
              en: 'Specify constraints: Tailwind utilities only, full mobile responsiveness.',
            },
          ],
          expectedResult: {
            ar: 'نص برومبت هندسي محكم جاهز للتطبيق في محرر الكود أو في مختبر الذكاء الاصطناعي.',
            en: 'A battle-tested technical prompt ready to feed into AI assistants.',
          },
          hints: [
            {
              ar: '💡 لا تطلب الصفحة كاملة في برومبت واحد، اطلب منه بناء مكون الـ Hero أولاً لتتأكد من جودة النتيجة.',
              en: 'Tip: Never request the entire site at once; request the Hero component first.',
            },
          ],
          starterSnippet: `الهدف: توليد واجهة Hero Section
الدور: Senior Web Engineer
التقنية: React + Tailwind CSS
المشروع: [اسم مشروعك]
المتطلبات الأساسية:
1. عنوان رئيسي جذاب باللغة العربية
2. زر أساسي للطلب وزر ثانوي للاستعراض
3. دعم كامل لاتجاه RTL والتجاوب مع شاشات الجوال
القيود التقنية:
- استخدام ألوان متناسقة وظلال ناعمة
- استخدام أيقونات Lucide المناسبة`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'إتقان منهجية هندسة البرومبت الصارمة وتجربة الفرق بين التوجيه العام والتوجيه الهندسي الدقيق.',
            en: 'Master rigid prompt engineering and observe the delta between vague vs engineered prompts.',
          },
          whatToExplain: [
            {
              ar: 'اشرح نموذج الأركان الخمسة للبرومبت الاحترافي (Role, Context, Task, Constraints, Output).',
              en: 'Explain the 5 pillars: Role, Context, Task, Constraints, Output Format.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'إذا لم تذكر للذكاء الاصطناعي أنه يجب دعم شاشات الجوال، ما الذي سيفترضه تلقائياً؟',
              en: 'If you fail to specify mobile responsiveness, what will the model assume?',
            },
          ],
          example: {
            ar: 'اعرض نتيجة برومبت ضعيف ونتيجة البرومبت الهندسي وقارن بينهما على الشاشة مباشرة.',
            en: 'Side-by-side comparison on screen: naive prompt vs engineered prompt output.',
          },
          commonMistakes: [
            {
              ar: 'طلب موقع كامل ضخم يحتوي على قاعدة بيانات ودفع إلكتروني في برومبت واحد دون تقسيم معماري.',
              en: 'Requesting auth, payments, database and 10 pages in a single monolithic prompt.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'اطلب من الطلاب إضافة معيار قيود إمكانية الوصول (Accessibility a11y) في البرومبت.',
            en: 'Add strict accessibility (a11y) criteria into prompt constraints.',
          },
          ifStudentIsStuck: {
            ar: 'أعطه قالب البرومبت الجاهز واطلب منه تعديل اسم مشروعه وقائمته فقط.',
            en: 'Provide the turnkey prompt scaffold and instruct him to swap parameters.',
          },
          extension: {
            ar: 'تجربة البرومبت فوراً في مختبر الذكاء الاصطناعي AI Lab ومشاهدة النتيجة.',
            en: 'Test the prompt immediately in AI Lab and evaluate code quality.',
          },
          teachingNotes: {
            ar: 'هذا التمرين هو تتويج الجلسة الأولى، احرص على إعطاء تغذية راجعة على إجابات الطلاب وإبراز أفضل صياغة.',
            en: 'This is the capstone challenge for Session 01; spotlight top student submissions live.',
          },
          discussionIdeas: [
            {
              ar: 'لماذا يعتبر فهم الكود المولد بالذكاء الاصطناعي أهم من القدرة على توليده؟',
              en: 'Why is code comprehension more critical than generative volume?',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-02',
    number: 2,
    slug: 'session-02',
    title: {
      ar: 'هندسة البرومبت لتطوير الويب: صياغة التعليمات البرمجية الدقيقة',
      en: 'Prompt Engineering for Web Development: Crafting Rigid Technical Instructions',
    },
    subtitle: {
      ar: 'أطر العمل المتقدمة، تفادي الهلوسة، وهيكلة واجهات المستخدم باستخدام أحدث نماذج الذكاء الاصطناعي',
      en: 'Advanced frameworks, hallucination mitigation, and UI architecture with LLMs',
    },
    description: {
      ar: 'كيف تنتقل من مستخدم عادي للذكاء الاصطناعي إلى مهندس يوجه النماذج لبناء كود قابل للإنتاج والصيانة.',
      en: 'Elevating from casual prompter to prompt architect commanding LLMs for production code.',
    },
    status: 'scheduled',
    scheduledDate: 'الأحد القادم • 06:00 مساءً',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: {
        ar: 'عبد الحكيم قنبر',
        en: 'Abdulhakim Kanbr',
      },
      role: {
        ar: 'كبير مهندسي البرمجيات ومدرب الدورة',
        en: 'Lead Software Engineer & Instructor',
      },
    },
    targetStageNumber: '02',
    targetModuleName: {
      ar: 'المرحلة 02: التصميم وهندسة التوجيه (DESIGN)',
      en: 'Stage 02: Design & Prompt Architecture (DESIGN)',
    },
    objectives: [
      {
        ar: 'إتقان إطار عمل RCTCO لكتابة موجهات برمجية خالية من الغموض',
        en: 'Master RCTCO framework for unambiguous technical prompts',
      },
      {
        ar: 'تقنيات ضبط مخرجات الكود لتتوافق مع معايير TypeScript و Tailwind',
        en: 'Constrain code outputs to strict TypeScript & Tailwind conventions',
      },
    ],
    students: [],
    activities: [
      {
        id: 's02-act-01',
        order: 1,
        type: 'concept',
        title: {
          ar: 'النشاط 01: تشريح الموجه الهندسي — مكونات البرومبت الخالي من الهلوسة',
          en: 'Activity 01: Anatomy of Technical Prompts',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'تعلم كيف تبني سياقاً تقنياً محكماً يمنع الذكاء الاصطناعي من توليد أكواد قديمة أو خاطئة',
            en: 'Construct airtight technical context that prevents obsolete code generation',
          },
          whatAmIDoing: {
            ar: 'أحدد إصدارات المكتبات والمعايير الدقيقة التي يجب أن يلتزم بها الذكاء الاصطناعي أثناء كتابة الكود.',
            en: 'Specifying exact library versions and constraints for the LLM.',
          },
          whyAmIDoingIt: {
            ar: 'النماذج تتدرب على أكواد قديمة وحديثة، وبدون تحديد الإصدار قد تعطيك أكواداً منسقة بأنظمة قديمة لا تعمل في 2026.',
            en: 'Without version pinning, models frequently default to deprecated legacy patterns.',
          },
          howDoIDoIt: [
            {
              ar: 'حدد بيئة العمل: Next.js 15+ App Router و React 19.',
              en: 'Pin environment: Next.js App Router and modern React.',
            },
            {
              ar: 'اشترط استخدام Tailwind CSS v4 للمظهر دون كتابة ملفات CSS منفصلة.',
              en: 'Require Tailwind utility classes without scattered CSS.',
            },
            {
              ar: 'اشترط استخدام مكتبة Lucide Icons للأيقونات.',
              en: 'Mandate Lucide Icons for iconography.',
            },
          ],
          expectedResult: {
            ar: 'مجموعة معايير تقنية جاهزة لإرفاقها في مقدمة كل محادثة برمجية مع المساعد الذكي.',
            en: 'A reusable system prompt preamble pinning technical constraints.',
          },
          hints: [
            {
              ar: '💡 احتفظ بهذه الديباجة في ملف نصي سريع لتلصقها في بداية أي محادثة برمجية.',
              en: 'Keep this preamble handy to paste at the start of any new chat session.',
            },
          ],
          starterSnippet: `[Technical Stack & Constraints]
- Framework: Next.js 15+ (App Router)
- Language: TypeScript with strict typing
- Styling: Tailwind CSS v4
- Icons: lucide-react
- Direction: RTL support with dir="rtl"
- Principles: Clean components, accessible buttons, no inline styles`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'إدراك أهمية "تثبيت البيئة التقنية" (Environment Pinning) في كل برومبت.',
            en: 'Highlight environment pinning importance to eliminate version drift.',
          },
          whatToExplain: [
            {
              ar: 'لماذا تولد النماذج أحياناً Pages Router بدلاً من App Router إذا لم يتم توجيهها بدقة.',
              en: 'Why models generate Pages Router unless explicitly instructed for App Router.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ماذا تفعل إذا أعطاك الذكاء الاصطناعي دالة ملغاة في React 19؟',
              en: 'What do you do when an LLM suggests a deprecated React lifecycle?',
            },
          ],
          example: {
            ar: 'عرض خطأ شائع يحدث عند استيراد مكتبة قديمة غير متوافقة.',
            en: 'Demonstrate real import failure from outdated library generation.',
          },
          commonMistakes: [
            {
              ar: 'افتراض أن الذكاء الاصطناعي يعرف تلقائياً ما هي المكتبات المثبتة في جهازك.',
              en: 'Assuming the model knows your local node_modules configuration.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'كتابة System Prompt متكامل لحساب Claude أو ChatGPT كمهندس واجهات أمامية.',
            en: 'Write a comprehensive Custom Instruction profile for frontend workflows.',
          },
          ifStudentIsStuck: {
            ar: 'مساعدته بنسخ القالب النموذجي المجهز في الدورة.',
            en: 'Guide him to paste the bundled course preamble template.',
          },
          extension: {
            ar: 'إعداد ملف Cursor Rules أو AGENTS.md لتثبيت القواعد في محرر الكود.',
            en: 'Create a local AGENTS.md rule file in the editor.',
          },
          teachingNotes: {
            ar: 'ركز على الجانب العملي وافتح المحرر لمقارنة الأكواد القديمة والجديدة.',
            en: 'Open VS Code live to demonstrate old vs modern React syntax differences.',
          },
          discussionIdeas: [
            {
              ar: 'كيف يؤثر سياق المحادثة الطويلة (Context Window) على دقة إجابات المساعد؟',
              en: 'How context window pollution degrades code generation fidelity.',
            },
          ],
        },
      },
      {
        id: 's02-act-02',
        order: 2,
        type: 'code',
        title: {
          ar: 'النشاط 02: صياغة برومبت RCTCO لبناء قسم آراء العملاء',
          en: 'Activity 02: Crafting RCTCO Prompt for Testimonials Section',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'طبق إطار عمل RCTCO عملياً لتوليد قسم تقييمات متجاوب مع نجوم التقييم',
            en: 'Apply RCTCO framework to prompt a responsive reviews grid with star ratings',
          },
          whatAmIDoing: {
            ar: 'أصيغ برومبت كامل يحدد الدور (Role)، السياق (Context)، المهمة (Task)، القيود (Constraints)، وشكل المخرج (Output) لإنشاء قسم آراء العملاء.',
            en: 'Writing an RCTCO structured prompt to generate a reviews section.',
          },
          whyAmIDoingIt: {
            ar: 'تحديد القيود وشكل المخرج يمنع الذكاء الاصطناعي من توليد أكواد غير مكتملة أو استخدام مكتبات غير مثبتة.',
            en: 'Strict constraints prevent half-baked answers and unexpected package dependencies.',
          },
          howDoIDoIt: [
            {
              ar: 'الدور (Role): خبير React و Tailwind.',
              en: 'Role: Senior React UI Developer.',
            },
            {
              ar: 'المهمة (Task): بناء مكون TestimonialsSection يحتوي على 3 كروت تقييم.',
              en: 'Task: Build TestimonialsSection with 3 review cards.',
            },
            {
              ar: 'القيود (Constraints): دعم RTL، نجوم ذهبية باستخدام أيقونة Star من Lucide، وشبكة عمود واحد بالجوال و 3 أعمدة بالشاشات الكبيرة.',
              en: 'Constraints: RTL, Lucide Star icon, 1-col mobile & 3-col desktop.',
            },
          ],
          expectedResult: {
            ar: 'برومبت متكامل جاهز للتنفيذ ينتج مكون React يعمل بدون أي أخطاء.',
            en: 'A complete prompt that outputs a production-ready React component.',
          },
          hints: [
            {
              ar: '💡 اطلب من المودل تضمين بيانات تجريبية (Mock Data) للأشخاص داخل المكون لتشاهده فوراً.',
              en: 'Ask the model to include inline mock data so the component renders immediately.',
            },
          ],
          starterSnippet: `### Role:
Senior Frontend Developer

### Context:
مشروع متجر الكتروني محلي باللغة العربية

### Task:
أنشئ مكون React لمراجعات العملاء (TestimonialsSection)

### Constraints:
- استخدام Tailwind CSS v4
- 3 كروت تقييم تتضمن اسم العميل، التقييم (5 نجوم صفراء)، وتعليق قصير
- متجاوب (grid-cols-1 md:grid-cols-3)
- دعم اتجاه dir="rtl"

### Output Format:
كود React TypeScript كامل في ملف واحد جاهز للنسخ`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'إتقان صياغة إطار عمل RCTCO ومقارنة المخرجات المتولدة.',
            en: 'Master RCTCO framework execution and evaluate output accuracy.',
          },
          whatToExplain: [
            {
              ar: 'كيف أن تحديد شكل المخرج (Output Format) يمنع المودل من الشرح النظري الطويل.',
              en: 'How Output Format constraints eliminate verbose conversational filler.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ماذا يحدث إذا لم نطلب تضمين Mock Data في المكون؟',
              en: 'What happens if we forget to request mock data fixtures?',
            },
          ],
          example: {
            ar: 'توليد مكون في ChatGPT مع البرومبت وبدونه لإبراز الفرق الهائل.',
            en: 'Live generation test comparing naive prompt vs RCTCO prompt.',
          },
          commonMistakes: [
            {
              ar: 'عدم تحديد حجم الصور أو الأيقونات مما ينتج عناصر ضخمة تشوه التصميم.',
              en: 'Omitting icon or avatar dimensions resulting in layout blowout.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة فلترة للتقييمات أو شريط تقليب Carousel بالبرومبت.',
            en: 'Extend prompt to include rating filter chips or slider carousel.',
          },
          ifStudentIsStuck: {
            ar: 'تزويده بالقالب المرفق في النشاط.',
            en: 'Point him to the starter scaffold in the activity card.',
          },
          extension: {
            ar: 'نسخ الكود المتولد وتجربته محلياً.',
            en: 'Copy generated code directly into a local component to preview.',
          },
          teachingNotes: {
            ar: 'شجع الطلاب على تجربة البرومبت في Claude أو ChatGPT ومشاركة النتائج.',
            en: 'Encourage students to run their prompt live and paste screenshots.',
          },
          discussionIdeas: [
            {
              ar: 'هل يمكن أتمتة كتابة البرومبتات الهندسية بواسطة الذكاء الاصطناعي نفسه؟ (Meta-Prompting).',
              en: 'Can we use LLMs to meta-engineer our technical prompts?',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-03',
    number: 3,
    slug: 'session-03',
    title: {
      ar: 'أساسيات الويب الحديث: HTML5 الدلالي و CSS المعاصر',
      en: 'Modern Web Fundamentals: Semantic HTML5 & Modern CSS',
    },
    subtitle: {
      ar: 'كيف تفهم بنية الصفحات وتحكم جودة الكود المولد بالذكاء الاصطناعي',
      en: 'Understanding DOM structure to validate and debug AI-generated markup',
    },
    description: {
      ar: 'تعلم كيف تقرأ وتعدل كود الـ HTML و CSS بثقة وتضمن توافقه مع معايير السرعة ومحركات البحث.',
      en: 'Master reading and editing HTML/CSS markup for speed, SEO, and accessibility.',
    },
    status: 'scheduled',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: { ar: 'عبد الحكيم قنبر', en: 'Abdulhakim Kanbr' },
      role: { ar: 'كبير مهندسي البرمجيات ومدرب الدورة', en: 'Lead Software Engineer' },
    },
    targetStageNumber: '03',
    targetModuleName: { ar: 'المرحلة 03: البناء الأساسي (BUILD)', en: 'Stage 03: Core Building (BUILD)' },
    objectives: [
      { ar: 'إتقان الوسوم الدلالية: header, nav, main, section, article, footer', en: 'Master semantic tags' },
      { ar: 'فهم الفليكس بوكس (Flexbox) والغريد (CSS Grid) للتحكم في تموضع العناصر', en: 'Flexbox and Grid layout mastery' },
    ],
    students: [],
    activities: [
      {
        id: 's03-act-01',
        order: 1,
        type: 'task',
        title: {
          ar: 'النشاط 01: بناء الهيكل الدلالي لصفحة الهبوط (Semantic HTML5)',
          en: 'Activity 01: Crafting Semantic HTML5 Page Structure',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'رتب أقسام موقعك باستخدام الوسوم الدلالية بدلاً من عناصر div العشوائية',
            en: 'Structure your landing page using semantic elements instead of div soup',
          },
          whatAmIDoing: {
            ar: 'أكتب هيكل HTML5 صحيح يحتوي على header و nav و main و section و footer مع تحديد العناوين h1 و h2 بصورة منطقية.',
            en: 'Writing semantic HTML5 skeleton with header, nav, main, section, footer and proper headings.',
          },
          whyAmIDoingIt: {
            ar: 'محركات البحث وقارئات الشاشة للمكفوفين تعتمد كلياً على الوسوم الدلالية لفهم محتوى موقعك وترتيبه في Google.',
            en: 'Search engines and screen readers rely on semantic tags to parse site architecture.',
          },
          howDoIDoIt: [
            {
              ar: 'استخدم <header> لقسم الرأس وشريط التنقل <nav>.',
              en: 'Wrap branding and navbar inside <header> and <nav>.',
            },
            {
              ar: 'ضع المحتوى الأساسي داخل <main> وافصل كل قسم بوسم <section>.',
              en: 'Place primary content inside <main> and encapsulate blocks in <section>.',
            },
            {
              ar: 'استخدم عنواناً واحداً رئيسياً <h1> في صفحة الهبوط ثم <h2> للأقسام الفرعية.',
              en: 'Enforce a single <h1> heading per page, followed by sequential <h2> tags.',
            },
          ],
          expectedResult: {
            ar: 'هيكل HTML5 دلالي نظيف ومرتب وخالٍ من أخطاء الـ Div Soup.',
            en: 'A pristine semantic skeleton devoid of div-soup clutter.',
          },
          hints: [
            {
              ar: '💡 لا تضع أكثر من وسم h1 واحد في الصفحة أبداً لضمان تصدر محركات البحث.',
              en: 'Never use more than one <h1> tag per page to maintain strict SEO compliance.',
            },
          ],
          starterSnippet: `<header>
  <nav>
    <a href="/">شعار الموقع</a>
    <!-- روابط التنقل -->
  </nav>
</header>

<main>
  <section id="hero">
    <h1>العنوان الرئيسي البارز</h1>
    <p>الوصف القصير</p>
  </section>

  <section id="products">
    <h2>أبرز المنتجات</h2>
  </section>
</main>

<footer>
  <p>جميع الحقوق محفوظة &copy; 2026</p>
</footer>`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'ترسيخ الفروقات الجوهرية بين الوسوم الدلالية والـ Generic Containers.',
            en: 'Solidify semantic tags vs generic container element differences.',
          },
          whatToExplain: [
            {
              ar: 'أثر الوسوم الدلالية على نتائج محركات البحث SEO وتقييم Lighthouse.',
              en: 'Impact of semantics on Google SEO rankings and Lighthouse accessibility scores.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'لماذا يعتبر استخدام <div> في كل مكان ممارسة سيئة برمجياً؟',
              en: 'Why is excessive div soup considered bad frontend practice?',
            },
          ],
          example: {
            ar: 'فحص شفرة صفحة ويكيبيديا أو موقع شهير بمحرر Elements في المتصفح.',
            en: 'Inspect element tree of a major semantic website in Chrome DevTools.',
          },
          commonMistakes: [
            {
              ar: 'تكرار وسم h1 في عدة أقسام بالصفحة الواحدة.',
              en: 'Scattering multiple h1 tags across the same document.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة وسوم aria-label لتحسين إمكانية الوصول لقارئات الشاشة.',
            en: 'Inject accessible aria-label attributes for screen readers.',
          },
          ifStudentIsStuck: {
            ar: 'مساعدته بنسخ القالب الدلالي المرفق وتعديل العناوين.',
            en: 'Guide student to adopt the starter semantic skeleton.',
          },
          extension: {
            ar: 'تجربة تشغيل قارئ شاشة صوتي لمعاينة كيف يقرأ الموقع.',
            en: 'Run a screen reader to audit auditory document navigation.',
          },
          teachingNotes: {
            ar: 'تأكد أن كل طالب يفهم أن الوسوم الدلالية ليست للمظهر بل للبنية والمعنى.',
            en: 'Stress that semantics represent structure and meaning, not visual styling.',
          },
          discussionIdeas: [
            {
              ar: 'كيف يؤثر الذكاء الاصطناعي على جودة كتابة الـ HTML الدلالي؟',
              en: 'Does AI default to clean semantic markup or div soup if unprompted?',
            },
          ],
        },
      },
      {
        id: 's03-act-02',
        order: 2,
        type: 'code',
        title: {
          ar: 'النشاط 02: توزيع العناصر بمحاذاة Flexbox و CSS Grid',
          en: 'Activity 02: Layout Mastery with Flexbox & CSS Grid',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'تحكم في تموضع وتوزيع العناصر أفقياً وعمودياً مع مرونة تامة على شاشات الجوال',
            en: 'Master horizontal & vertical layout alignment with responsive flexibility',
          },
          whatAmIDoing: {
            ar: 'أبني شريط تنقل يوزع الشعار في اليمين والأزرار في اليسار بـ Flexbox، وشبكة كروت منتجات بـ CSS Grid.',
            en: 'Build flex-aligned navbar and a multi-column CSS grid for cards.',
          },
          whyAmIDoingIt: {
            ar: 'الفهم العملي للـ Flexbox و Grid هو السلاح الأساسي لتصحيح أي خطأ في محاذاة عناصر الموقع.',
            en: 'Flexbox and Grid are foundational tools for troubleshooting visual layout regressions.',
          },
          howDoIDoIt: [
            {
              ar: 'استخدم flex مع justify-between و items-center لمحاذاة الهيدر.',
              en: 'Use flex with justify-between and items-center for header layout.',
            },
            {
              ar: 'استخدم grid مع grid-cols-1 md:grid-cols-3 و gap-6 لشبكة الكروت.',
              en: 'Use grid with responsive cols and gap-6 for card layout.',
            },
          ],
          expectedResult: {
            ar: 'كود سليم لمحاذاة الهيدر وشبكة الكروت متجاوب مع كافة أحجام الشاشات.',
            en: 'Responsive layout snippet aligning header and card grid seamlessly.',
          },
          hints: [
            {
              ar: '💡 تذكر: Flexbox مثالي للاتجاه الواحد (سطر أو عمود)، بينما Grid مثالي للاتجاهين (شبكة كاملة).',
              en: 'Rule of thumb: Flexbox for 1D rows/columns, CSS Grid for 2D grids.',
            },
          ],
          starterSnippet: `/* Navbar Layout */
<nav className="flex items-center justify-between px-6 py-4">
  <div>الشعار</div>
  <div className="flex items-center gap-4">
    <a href="#">الرئيسية</a>
    <a href="#">المنتجات</a>
    <button>تسجيل الدخول</button>
  </div>
</nav>

/* Products Grid Layout */
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {/* كروت المنتجات */}
</div>`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'التمييز البديهي بين متى نستخدم Flexbox ومتى نستخدم CSS Grid.',
            en: 'Instill intuitive mastery of when to reach for Flexbox vs CSS Grid.',
          },
          whatToExplain: [
            {
              ar: 'محاذاة المحاور: justify-content (المحور الرئيسي) مقابل align-items (المحور المعاكس).',
              en: 'Main axis vs cross axis alignment properties.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'إذا أردت وضع زرين بجانب بعضهما، فهل تستخدم Flexbox أم Grid؟',
              en: 'If placing 2 buttons side-by-side, which layout mode do you use?',
            },
          ],
          example: {
            ar: 'تجربة تعديل justify-between إلى justify-center ومشاهدة الأثر الفوري.',
            en: 'Live toggling between justify-between and justify-center in browser inspector.',
          },
          commonMistakes: [
            {
              ar: 'نسيان إضافة gap بين العناصر واستخدام هوامش margin متضاربة بدلاً منها.',
              en: 'Scattering conflicting margins instead of leveraging modern gap property.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'جعل أحد الكروت يمتد على عمودين باستخدام col-span-2.',
            en: 'Feature a card spanning two columns with col-span-2.',
          },
          ifStudentIsStuck: {
            ar: 'تذكيره بقاعدة flex items-center justify-between البسيطة.',
            en: 'Reiterate the standard flex items-center justify-between recipe.',
          },
          extension: {
            ar: 'بناء تخطيط لوحة تحكم Dashboard باستخدام Grid.',
            en: 'Design a full 3-pane dashboard grid wireframe.',
          },
          teachingNotes: {
            ar: 'اعرض كيف تطبق كلاسات Tailwind هذه القواعد بسلاسة.',
            en: 'Demonstrate how Tailwind classes map 1:1 to pure CSS Flex/Grid.',
          },
          discussionIdeas: [
            {
              ar: 'كيف غيرت خاصية gap في Flexbox طريقة بناء الواجهات الحديثة؟',
              en: 'How native flex gap revolutionized modern CSS spacing.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-04',
    number: 4,
    slug: 'session-04',
    title: {
      ar: 'تصميم واجهات المستخدم السريعة باستخدام Tailwind CSS',
      en: 'Rapid UI Styling with Modern Tailwind CSS',
    },
    subtitle: {
      ar: 'بناء واجهات عصرية متجاوبة ومتناسقة بسرعة فائقة',
      en: 'Crafting responsive, cohesive modern user interfaces at lightning speed',
    },
    description: {
      ar: 'إتقان كلاسات Tailwind وكيفية تعديل الألوان، المسافات، الخطوط، وتأثيرات التفاعل Hover و Focus.',
      en: 'Mastering Tailwind utility classes, design tokens, typography, and interactive micro-states.',
    },
    status: 'scheduled',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: { ar: 'عبد الحكيم قنبر', en: 'Abdulhakim Kanbr' },
      role: { ar: 'كبير مهندسي البرمجيات', en: 'Lead Software Engineer' },
    },
    targetStageNumber: '03',
    targetModuleName: { ar: 'المرحلة 03: البناء الأساسي (BUILD)', en: 'Stage 03: Core Building (BUILD)' },
    objectives: [
      { ar: 'بناء كروت المنتجات والقوائم المتجاوبة على الجوال والشاشات الكبيرة', en: 'Build responsive cards and mobile navigation' },
    ],
    students: [],
    activities: [
      {
        id: 's04-act-01',
        order: 1,
        type: 'code',
        title: {
          ar: 'النشاط 01: بناء بطاقة منتج متجاوبة (Product Card) مع شارة السعر',
          en: 'Activity 01: Crafting Modern Responsive Product Card',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'صمم كرت طعام أو منتج أنيق مع صورة وعنوان وسعر وزر إضافة للسلة',
            en: 'Style a modern food or ecommerce card with image, price badge, and add-to-cart button',
          },
          whatAmIDoing: {
            ar: 'أستخدم كلاسات Tailwind لتنسيق الكرت مع إضافة حواف دائرية، ظلال ناعمة، وتأثير حركة عند مرور الفأرة (hover).',
            en: 'Styling a card with rounded corners, subtle shadows, and hover micro-animations.',
          },
          whyAmIDoingIt: {
            ar: 'بطاقة المنتج هي العنصر التجاري الأكثر أهمية في أي متجر أو موقع خدمي ويجب أن تكون جذابة وسريعة التفاعل.',
            en: 'Product cards are the core conversion vehicle in ecommerce and SaaS platforms.',
          },
          howDoIDoIt: [
            {
              ar: 'استخدم rounded-2xl مع border و bg-white/surface لإطار الكرت.',
              en: 'Use rounded-2xl, border, and surface background for card container.',
            },
            {
              ar: 'أضف صورة بارزة مع aspect-video أو aspect-square وكلاس object-cover.',
              en: 'Incorporate hero image with aspect ratio and object-cover.',
            },
            {
              ar: 'أضف شارة السعر وزر الطلب بلون أساسي جذاب مع hover:scale-105.',
              en: 'Attach pricing badge and high-contrast CTA with hover scale effect.',
            },
          ],
          expectedResult: {
            ar: 'مكون بطاقة منتج متناسق واحترافي جاهز للعرض في متجرك.',
            en: 'A polished, cohesive product card ready for production catalog.',
          },
          hints: [
            {
              ar: '💡 استخدم overflow-hidden في الحاوية الرئيسية لضمان عدم خروج الصورة عن الحواف الدائرية.',
              en: 'Apply overflow-hidden to the card container so image respects border-radius.',
            },
          ],
          starterSnippet: `<div className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all">
  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-3">
    {/* صورة المنتج */}
    <span className="absolute top-2 end-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
      45 ر.س
    </span>
  </div>
  <h3 className="font-bold text-base text-slate-800">برجر كلاسيك فاخر</h3>
  <p className="text-xs text-slate-500 line-clamp-2 my-2">شريحة لحم بلاك أنجوس مع صوص خاص وخضار طازجة</p>
  <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors">
    إضافة إلى السلة +
  </button>
</div>`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'تعليم الطلاب كيفية استخدام نظام التصميم Design Tokens في Tailwind لخلق واجهات متناسقة.',
            en: 'Demonstrate design tokens and spacing hierarchy in modern Tailwind workflows.',
          },
          whatToExplain: [
            {
              ar: 'أهمية تأثيرات التفاعل Micro-interactions مثل hover و active في إشعار المستخدم بالحياة في الموقع.',
              en: 'Micro-interactions and subtle hover state importance for perceived quality.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'كيف نجعل الكرت يتنقل بنعومة عند مرور الفأرة بدلاً من القفز المفاجئ؟',
              en: 'How does transition-all smooth out hover state transformations?',
            },
          ],
          example: {
            ar: 'مقارنة كرت بدائي بدون Tailwind وكرت مبني بكلاسات Utility.',
            en: 'Side-by-side comparison of raw markup vs utility-first styled card.',
          },
          commonMistakes: [
            {
              ar: 'استخدام ألوان عشوائية لا تتطابق مع لوحة ألوان الموقع.',
              en: 'Using discordant colors outside the project design palette.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة زر مفضلة على شكل قلب في أعلى الكرت.',
            en: 'Add a floating wishlist heart button with toggle state.',
          },
          ifStudentIsStuck: {
            ar: 'تزويده بالقالب النموذجي وتشجيعه على تعديل النصوص والأسعار.',
            en: 'Provide starter card and prompt to customize title and pricing.',
          },
          extension: {
            ar: 'إضافة شارة خصم (خصم 20%) مع شطب السعر القديم.',
            en: 'Implement discount badge and strike-through original price.',
          },
          teachingNotes: {
            ar: 'أكد على الطلاب أهمية تجنب كتابة أرقام ثابتة عشوائية والاعتماد على تدريجات Tailwind (4, 6, 8...).',
            en: 'Emphasize Tailwind 4px spacing rhythm over arbitrary pixel values.',
          },
          discussionIdeas: [
            {
              ar: 'لماذا فضلت أغلب شركات التقنية العالمية Tailwind على الـ CSS التقليدي؟',
              en: 'Why utility-first CSS won the modern frontend development ecosystem.',
            },
          ],
        },
      },
      {
        id: 's04-act-02',
        order: 2,
        type: 'task',
        title: {
          ar: 'النشاط 02: تطبيق نقاط التجاوب التلقائي على شاشات الهواتف (Responsive)',
          en: 'Activity 02: Responsive Breakpoints & Mobile Optimization',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'تأكد أن موقعك يظهر بشكل مريح ومثالي على شاشات الهواتف المحمولة',
            en: 'Ensure your interface renders flawlessly across small smartphone screens',
          },
          whatAmIDoing: {
            ar: 'أستخدم بادئات التجاوب في Tailwind مثل sm: و md: و lg: لجعل شبكة المنتجات عموداً واحداً بالجوال وثلاثة أعمدة بالحاسوب.',
            en: 'Applying Tailwind responsive prefixes for single-column mobile and multi-column desktop.',
          },
          whyAmIDoingIt: {
            ar: 'أكثر من 75% من زوار المتاجر والمطاعم يتصفحون عبر هواتفهم الذكية، والموقع غير المتجاوب يفقد 3 من كل 4 عملاء.',
            en: 'Over 75% of web traffic originates from mobile devices; mobile-first design is paramount.',
          },
          howDoIDoIt: [
            {
              ar: 'ابدأ بالجوال أولاً: grid-cols-1 هو الأساس.',
              en: 'Embrace mobile-first defaults: grid-cols-1 by default.',
            },
            {
              ar: 'وسع العرض تدريجياً: sm:grid-cols-2 للشاشات المتوسطة، و lg:grid-cols-3 للشاشات الكبيرة.',
              en: 'Scale up at breakpoints: sm:grid-cols-2 and lg:grid-cols-3.',
            },
            {
              ar: 'اضبط هوامش الحشو: px-4 في الجوال و px-8 في الحاسوب.',
              en: 'Adjust container padding: px-4 on mobile, px-8 on desktop.',
            },
          ],
          expectedResult: {
            ar: 'شبكة منتجات تعيد تنظيم نفسها تلقائياً عند تغيير حجم نافذة المتصفح.',
            en: 'A fluid product grid that re-arranges automatically on screen resize.',
          },
          hints: [
            {
              ar: '💡 افتح نافذة Inspect في متصفحك واضغط على أيقونة الجوال لمعاينة التجاوب الحي.',
              en: 'Toggle Device Toolbar in Chrome DevTools to inspect responsive breakpoints live.',
            },
          ],
          starterSnippet: `<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {/* تكرار كروت المنتجات هنا */}
  </div>
</section>`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'ترسيخ مبدأ Mobile-First وتطبيق نقاط التوقف Breakpoints بمهارة.',
            en: 'Cement Mobile-First methodology and breakpoint fluency.',
          },
          whatToExplain: [
            {
              ar: 'كيف تقرأ كلاسات التجاوب: الكلاس بدون بادئة يطبق على الجوال، والبادئة تحدد ما يحدث عند التوسع.',
              en: 'How unprefixed utilities target mobile while prefixed ones kick in at min-width.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ماذا يحدث إذا وضعت كلاس md:grid-cols-3 دون تحديد grid-cols-1 في البداية؟',
              en: 'What occurs if you omit the base grid-cols-1 fallback on mobile?',
            },
          ],
          example: {
            ar: 'سحب طرف المتصفح لتصغيره وتكبيره وتوضيح لحظة تغير عدد الأعمدة.',
            en: 'Dragging browser window width live to illustrate breakpoint trigger points.',
          },
          commonMistakes: [
            {
              ar: 'تحديد عرض ثابت بـ البكسل مثل w-[500px] مما يكسر التجاوب في الجوال.',
              en: 'Hardcoding rigid pixel widths (e.g. w-[500px]) causing horizontal scrollbars.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إخفاء عنصر معين في الجوال وإظهاره فقط في الحاسوب (hidden md:block).',
            en: 'Toggle visibility across breakpoints with hidden md:block.',
          },
          ifStudentIsStuck: {
            ar: 'التحقق من أنه لم يضع عناصر ذات عرض ثابت.',
            en: 'Audit code for fixed width declarations causing overflow.',
          },
          extension: {
            ar: 'بناء قائمة تنقل همبرغر Mobile Drawer للجوال.',
            en: 'Implement a mobile offcanvas slide drawer.',
          },
          teachingNotes: {
            ar: 'تأكد أن الطلاب يجربون فحص الجوال في Chrome DevTools بأنفسهم.',
            en: 'Have students toggle Chrome DevTools responsive emulator themselves.',
          },
          discussionIdeas: [
            {
              ar: 'لماذا تبدأ هندسة الويب الحديثة من الجوال أولاً (Mobile First)؟',
              en: 'Why Mobile First has become the universal industry engineering standard.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-05',
    number: 5,
    slug: 'session-05',
    title: {
      ar: 'مقدمة React 19: المكونات القابلة لإعادة الاستخدام والـ Props',
      en: 'React 19 Foundations: Modular Components & Props',
    },
    subtitle: {
      ar: 'تحويل عناصر الموقع إلى مكونات ذكية ومنظمة يسهل تطويرها وصيانتها',
      en: 'Decomposing sites into clean, maintainable, reusable building blocks',
    },
    description: {
      ar: 'فهم عقلية المكونات (Component-Driven Architecture) وكيف تمرر البيانات عبر الـ Props.',
      en: 'Component-driven mental models and unidirectional data flow via Props.',
    },
    status: 'scheduled',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: { ar: 'عبد الحكيم قنبر', en: 'Abdulhakim Kanbr' },
      role: { ar: 'كبير مهندسي البرمجيات', en: 'Lead Software Engineer' },
    },
    targetStageNumber: '04',
    targetModuleName: { ar: 'المرحلة 04: التطوير التفاعلي (DEVELOP)', en: 'Stage 04: Interactive Dev (DEVELOP)' },
    objectives: [
      { ar: 'إنشاء مكونات Button و Card و Badge مشتركة قابلة للتخصيص', en: 'Create reusable UI component library' },
    ],
    students: [],
    activities: [
      {
        id: 's05-act-01',
        order: 1,
        type: 'code',
        title: {
          ar: 'النشاط 01: تفكيك الواجهة إلى مكونات React مستقلة',
          en: 'Activity 01: Decomposing UI into Modular React Components',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'حول كود الزر والشارة إلى مكونات ذكية يمكن إعادة استخدامها في مئات الأماكن',
            en: 'Refactor button and badge markup into reusable component building blocks',
          },
          whatAmIDoing: {
            ar: 'أبني مكون Button يقبل خصائص مختلفة مثل الحجم واللون والنص والأيقونة.',
            en: 'Creating a customizable Button component accepting variant, size, and label.',
          },
          whyAmIDoingIt: {
            ar: 'في المشاريع الحقيقية، لا نكرر كتابة كود الزر في كل صفحة؛ بل نعدله في ملف واحد ليتحدث تلقائياً في كامل الموقع.',
            en: 'Component modularity enforces single source of truth and effortless maintenance.',
          },
          howDoIDoIt: [
            {
              ar: 'أنشئ ملف المكون وحدد واجهة الـ Props باستخدام TypeScript.',
              en: 'Create component file and define typed Props interface.',
            },
            {
              ar: 'مرر الأطفال (children) أو النص كـ Prop.',
              en: 'Pass children and variant modifiers through props.',
            },
            {
              ar: 'استخدم المكون المخصص داخل صفحتك واستدعِه 3 مرات بألوان مختلفة.',
              en: 'Invoke the component 3 times with different variants.',
            },
          ],
          expectedResult: {
            ar: 'مكون Button قابل للتخصيص وإعادة الاستخدام في كل أجزاء تطبيقك.',
            en: 'A flexible, typed Button component ready for platform-wide usage.',
          },
          hints: [
            {
              ar: '💡 استخدم قيمة افتراضية للخصائص مثل variant = "primary" لتسهيل الاستخدام.',
              en: 'Supply sensible defaults for props like variant = "primary".',
            },
          ],
          starterSnippet: `interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
}

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
}) => {
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
  };

  return (
    <button
      onClick={onClick}
      className={\`px-4 py-2 rounded-xl text-xs font-bold transition-all \${styles[variant]}\`}
    >
      {children}
    </button>
  );
};`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'ترسيخ التفكير القائم على المكونات (Component Thinking) ونظام تمرير الـ Props.',
            en: 'Instill component-driven thinking and unidirectional props flow.',
          },
          whatToExplain: [
            {
              ar: 'مفهوم الـ Props كمدخلات للدالة النقية (Pure Function) في React.',
              en: 'Props as function arguments adhering to pure component concepts.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ما الفائدة من كتابة مكون Button منفصل بدلاً من وسم button عادي؟',
              en: 'What makes a dedicated Button component superior to raw button tags?',
            },
          ],
          example: {
            ar: 'تعديل لون الزر الأساسي في ملف المكون وملاحظة تغيره في كل مكان فورياً.',
            en: 'Updating button primary token in one file and watching all instances update.',
          },
          commonMistakes: [
            {
              ar: 'نسيان دعم خاصية onClick في مكون الزر المخصص.',
              en: 'Forgetting to pass onClick handler through to the native button.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة خاصية isLoading تُظهر مؤشر دوران صغير عند الضغط على الزر.',
            en: 'Add an isLoading prop that renders a spinner and disables the button.',
          },
          ifStudentIsStuck: {
            ar: 'مساعدته بنسخ القالب المرفق واستدعائه في الصفحة.',
            en: 'Guide student through importing and invoking CustomButton.',
          },
          extension: {
            ar: 'بناء مكون Badge أو Card بنفس الأسلوب.',
            en: 'Build a companion Badge or Avatar component following same pattern.',
          },
          teachingNotes: {
            ar: 'ركز على توضيح كيف يوفر هذا المبدأ مئات الساعات في المشاريع الكبيرة.',
            en: 'Highlight how component libraries save hundreds of engineering hours.',
          },
          discussionIdeas: [
            {
              ar: 'كيف تستفيد فرق العمل الكبرى من مكتبات المكونات (Design Systems)؟',
              en: 'How enterprise tech teams leverage shared design system components.',
            },
          ],
        },
      },
      {
        id: 's05-act-02',
        order: 2,
        type: 'task',
        title: {
          ar: 'النشاط 02: تمرير بيانات المنتجات الديناميكية عبر كائن Props',
          en: 'Activity 02: Feeding Dynamic Product Data via Typed Props',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'اربط كرت المنتج ببيانات حقيقية قادمة من مصفوفة منتجات (Data Mapping)',
            en: 'Bind product card component to an array of items via map()',
          },
          whatAmIDoing: {
            ar: 'أعرف مصفوفة منتجات وأستخدم دالة products.map لعرض بطاقات متعددة دون تكرار الكود يدوياً.',
            en: 'Defining a product list and rendering dynamic cards using products.map().',
          },
          whyAmIDoingIt: {
            ar: 'في الواقع لا نكتب 20 كرت يدوي، بل نكتب كود الكرت مرة واحدة ونمرر له البيانات من قاعدة البيانات أو الـ API.',
            en: 'Production apps render data arrays dynamically rather than hardcoding markup.',
          },
          howDoIDoIt: [
            {
              ar: 'أنشئ مصفوفة تحتوي على 3 منتجات (العنوان، السعر، الصورة).',
              en: 'Create an array containing 3 product objects with titles and prices.',
            },
            {
              ar: 'استخدم products.map((item) => <ProductCard key={item.id} {...item} />).',
              en: 'Iterate with map() and assign a unique key prop to each card.',
            },
            {
              ar: 'تأكد من تمرير key فريد لكل عنصر لتفادي أخطاء React.',
              en: 'Verify unique key usage to prevent React reconciliation warnings.',
            },
          ],
          expectedResult: {
            ar: 'قائمة منتجات حية تُعرض ديناميكياً من مصفوفة بيانات موحدة.',
            en: 'A live dynamic catalog populated from structured data objects.',
          },
          hints: [
            {
              ar: '💡 لا تنسَ إضافة خاصية key={product.id} في العنصر الخارجي داخل الـ map.',
              en: 'Always provide key={product.id} on the outermost element inside map.',
            },
          ],
          starterSnippet: `const PRODUCTS = [
  { id: '1', title: 'بيتزا مارغريتا', price: 38, image: '/pizza.jpg' },
  { id: '2', title: 'برجر كلاسيك', price: 42, image: '/burger.jpg' },
  { id: '3', title: 'بطاطس مقرمشة', price: 15, image: '/fries.jpg' },
];

export default function MenuSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {PRODUCTS.map((product) => (
        <div key={product.id} className="p-4 border rounded-xl">
          <h4>{product.title}</h4>
          <p>{product.price} ر.س</p>
        </div>
      ))}
    </div>
  );
}`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'إتقان تحويل المصفوفات (Arrays) إلى عناصر واجهة تفاعلية عبر دالة map.',
            en: 'Master array-to-JSX transformation using map() and reconciliation keys.',
          },
          whatToExplain: [
            {
              ar: 'لماذا تطلب React مفتاح key فريد لكل عنصر وماذا يحدث في الكواليس (Reconciliation).',
              en: 'Why React mandates unique keys for DOM diffing and virtual tree reconciler.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ماذا سيحدث إذا استخدمنا index كمفتاح وحذفنا عنصراً من المنتصف؟',
              en: 'What bugs emerge when using array index as key upon list mutations?',
            },
          ],
          example: {
            ar: 'إضافة منتج رابع في المصفوفة ومشاهدة ظهوره التلقائي على الشاشة.',
            en: 'Pushing a new object to array and witnessing instantaneous UI sync.',
          },
          commonMistakes: [
            {
              ar: 'نسيان وضع return داخل دالة الـ map عند استخدام الأقواس المعقوفة.',
              en: 'Omitting return statement when using curly braces in arrow functions.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة فلترة تظهر فقط المنتجات التي سعرها أقل من 40 ريالاً.',
            en: 'Chain array filter() to show only items priced under 40 SAR.',
          },
          ifStudentIsStuck: {
            ar: 'مساعدته في التأكد من إغلاق دالة الـ map بشكل سليم.',
            en: 'Inspect syntax to ensure correct JSX return inside map expression.',
          },
          extension: {
            ar: 'فرز المنتجات حسب السعر من الأقل إلى الأعلى (sort).',
            en: 'Sort products by price ascending before rendering.',
          },
          teachingNotes: {
            ar: 'هذا النشاط هو الجسر الأساسي بين البيانات الثابتة وتطبيقات الويب الحقيقية.',
            en: 'This activity bridges static hardcoded templates to data-driven web apps.',
          },
          discussionIdeas: [
            {
              ar: 'كيف تتدفق البيانات من السيرفر إلى شاشة المستخدم في مواقع التجارة الإلكترونية؟',
              en: 'How product data flows from database through API to customer devices.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-06',
    number: 6,
    slug: 'session-06',
    title: {
      ar: 'التفاعل وحالة التطبيق: State Management و Hooks في React',
      en: 'Interactivity & State Management: React Hooks & Stores',
    },
    subtitle: {
      ar: 'إضافة سلة المشتريات، القوائم المنبثقة، وتفاعل المستخدم الحي',
      en: 'Building shopping carts, modals, and reactive user feedback loops',
    },
    description: {
      ar: 'استخدام useState و useEffect و Zustand لإدارة بيانات التطبيق وسلة التسوق محلياً.',
      en: 'Stateful reactive management with useState, useEffect, and Zustand.',
    },
    status: 'scheduled',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: { ar: 'عبد الحكيم قنبر', en: 'Abdulhakim Kanbr' },
      role: { ar: 'كبير مهندسي البرمجيات', en: 'Lead Software Engineer' },
    },
    targetStageNumber: '04',
    targetModuleName: { ar: 'المرحلة 04: التطوير التفاعلي (DEVELOP)', en: 'Stage 04: Interactive Dev (DEVELOP)' },
    objectives: [
      { ar: 'بناء سلة مشتريات تعمل بالكامل مع إضافة وحذف المنتجات وحساب الإجمالي', en: 'Build interactive cart with real-time totals' },
    ],
    students: [],
    activities: [
      {
        id: 's06-act-01',
        order: 1,
        type: 'code',
        title: {
          ar: 'النشاط 01: بناء سلة المشتريات التفاعلية باستخدام useState',
          en: 'Activity 01: Interactive Cart State with useState',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'أضف إمكانية النقر على "إضافة للسلة" وتحديث عدد العناصر والإجمالي فورياً',
            en: 'Wire up Add to Cart clicks to update item count and total price in real time',
          },
          whatAmIDoing: {
            ar: 'أستخدم React useState لإنشاء مصفوفة عناصر السلة ودوال addToCart و removeFromCart.',
            en: 'Using useState hook to manage cart items array and helper mutators.',
          },
          whyAmIDoingIt: {
            ar: 'المواقع الحديثة لا تعيد تحميل الصفحة عند إضافة منتج للسلة، بل تحدث الواجهة لحظياً لتقديم تجربة تسوق سلسة.',
            en: 'Modern reactive UX updates carts instantaneously without disruptive page reloads.',
          },
          howDoIDoIt: [
            {
              ar: 'أنشئ الحالة: const [cart, setCart] = useState<CartItem[]>([]).',
              en: 'Declare state hook: const [cart, setCart] = useState<CartItem[]>([]).',
            },
            {
              ar: 'اكتب دالة addToCart التي تضيف المنتج أو تزيد كميته.',
              en: 'Implement addToCart checking for existing IDs to bump quantity.',
            },
            {
              ar: 'احسب إجمالي السعر: cart.reduce((sum, item) => sum + item.price * item.quantity, 0).',
              en: 'Derive grand total via cart.reduce().',
            },
          ],
          expectedResult: {
            ar: 'سلة مشتريات حية تتفاعل مع نقرات الزائر وتحدث الإجمالي بدقة.',
            en: 'A live reactive shopping cart that tallies orders accurately.',
          },
          hints: [
            {
              ar: '💡 في React لا تعدل المصفوفة مباشرة (لا تستخدم push)، بل استخدم مصفوفة جديدة [...cart, newItem].',
              en: 'Never mutate state directly; always create new arrays with spread operator.',
            },
          ],
          starterSnippet: `export function useCart() {
  const [items, setItems] = useState([]);

  const addItem = (product) => {
    setItems((prev) => [...prev, product]);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return { items, addItem, removeItem, total };
}`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'فهم دورة حياة الحالة (State Immutability) والتحديث التفاعلي في React.',
            en: 'Master state immutability principles and reactive re-renders in React.',
          },
          whatToExplain: [
            {
              ar: 'لماذا تعديل المتغير العادي let count = 0 لا يحدث الواجهة، بينما useState يعيد رسم الشاشة.',
              en: 'Why mutating standard variables fails to trigger React component re-renders.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ماذا سيحدث إذا كتبنا cart.push(item) بدلاً من setCart؟',
              en: 'What occurs under the hood if you call cart.push() directly?',
            },
          ],
          example: {
            ar: 'إضافة منتجات متتالية وملاحظة تغير العداد في أعلى الصفحة لحظياً.',
            en: 'Adding multiple items and watching the navbar cart counter tick up live.',
          },
          commonMistakes: [
            {
              ar: 'تعديل الحالة السابقة مباشرة دون استخدام دالة التحديث prev => [...prev, item].',
              en: 'Mutating previous state directly instead of utilizing functional updates.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة خاصية زيادة ونقصان كمية المنتج الواحد (Quantity Increment/Decrement).',
            en: 'Add item quantity controls allowing increment and decrement.',
          },
          ifStudentIsStuck: {
            ar: 'تبسيط الأمر له بالبدء بإضافة عنصر واحد بسيط للتحقق من عمل الزر.',
            en: 'Simplify to adding a single mock item first to verify click handling.',
          },
          extension: {
            ar: 'عرض إشعار Toast أخضر يظهر لثانيتين "تمت إضافة المنتج بنجاح".',
            en: 'Trigger a timed 2-second success toast notification on item add.',
          },
          teachingNotes: {
            ar: 'تأكد أن كل طالب يفهم مفهوم الـ Immutability لأنه أهم قاعدة في React.',
            en: 'Ensure every student grasps immutability as fundamental React concept.',
          },
          discussionIdeas: [
            {
              ar: 'متى نحتاج لمكتبات إدارة الحالة العامة مثل Zustand أو Redux ومتى يكفي useState؟',
              en: 'When global stores (Zustand/Redux) are necessary vs local component useState.',
            },
          ],
        },
      },
      {
        id: 's06-act-02',
        order: 2,
        type: 'task',
        title: {
          ar: 'النشاط 02: الحفظ التلقائي في LocalStorage لمنع ضياع المشتريات',
          en: 'Activity 02: Persisting Cart to LocalStorage with useEffect',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'اجعل سلة المشتريات تبقى محفوظة حتى لو قام الزائر بتحديث الصفحة أو إغلاق المتصفح',
            en: 'Save cart items into browser localStorage so orders survive page reloads',
          },
          whatAmIDoing: {
            ar: 'أستخدم useEffect لحفظ مصفوفة السلة في localStorage عند كل تحديث، واسترجاعها عند فتح الموقع.',
            en: 'Synchronizing cart state with localStorage across mount and mutations.',
          },
          whyAmIDoingIt: {
            ar: 'لا يوجد أسوأ من أن يجمع العميل 5 وجبات في السلة ثم يضغط تحديث بالخطأ فيضيع كل شيء ويغادر الموقع غاضباً.',
            en: 'Losing shopping cart contents on refresh is a catastrophic UX failure causing lost sales.',
          },
          howDoIDoIt: [
            {
              ar: 'عند التحميل (Mount): اقرأ القيمة المخزنة من localStorage.getItem("cart").',
              en: 'On mount: read and parse stored payload via localStorage.getItem.',
            },
            {
              ar: 'عند التعديل: اكتب localStorage.setItem("cart", JSON.stringify(cart)).',
              en: 'On change: serialize items array into localStorage via JSON.stringify.',
            },
          ],
          expectedResult: {
            ar: 'سلة مشتريات لا تختفي إطلاقاً عند الضغط على زر Refresh في المتصفح.',
            en: 'Persistent cart surviving full page reloads and browser restarts.',
          },
          hints: [
            {
              ar: '💡 تحقق دائماً من typeof window !== "undefined" في Next.js لتفادي أخطاء السيرفر.',
              en: 'Always guard window checks (typeof window !== "undefined") in Next.js.',
            },
          ],
          starterSnippet: `// قراءة السلة المحفوظة عند بدء التشغيل
useEffect(() => {
  const saved = localStorage.getItem('shopping_cart');
  if (saved) {
    try {
      setCart(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }
}, []);

// حفظ السلة تلقائياً عند أي تغيير
useEffect(() => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
}, [cart]);`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'فهم الـ Side Effects والتعامل الآمن مع واجهات المتصفح في بيئة SSR.',
            en: 'Mastering side effects with useEffect and safe browser storage in SSR.',
          },
          whatToExplain: [
            {
              ar: 'لماذا يحدث خطأ "window is not defined" في Next.js إذا لم نستخدم useEffect أو فحص window.',
              en: 'Why direct window access errors in Next.js Server Components and hydration.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'أين تُحفظ بيانات localStorage: في جهاز العميل أم في خادم الموقع؟',
              en: 'Where does localStorage reside: on the client device or web server?',
            },
          ],
          example: {
            ar: 'إضافة منتجات ثم عمل Reload كامل للصفحة وإظهار بقاء المنتجات في السلة.',
            en: 'Adding items and performing hard browser refresh demonstrating persistence.',
          },
          commonMistakes: [
            {
              ar: 'نسيان مصفوفة الاعتماديات dependency array مما يسبب تكرار الحفظ في حلقة لا نهائية.',
              en: 'Omitting dependency array causing infinite re-render storage loops.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة زر "تفريغ السلة" ينظف الحالة ويمسح القيمة من localStorage.',
            en: 'Add a Clear Cart action button resetting state and clearing storage key.',
          },
          ifStudentIsStuck: {
            ar: 'التأكد من أنه وضع كود القراءة في useEffect منفصل بمصفوفة اعتماديات فارغة [].',
            en: 'Verify read effect has empty dependency array to run only once on mount.',
          },
          extension: {
            ar: 'حفظ كود الخصم (Coupon Code) المطبق في التخزين أيضاً.',
            en: 'Persist active promo code coupon alongside order items.',
          },
          teachingNotes: {
            ar: 'هذا النشاط هو التطبيق العملي المباشر لما سأل عنه الطلاب لحفظ تقدمهم الشخصي أيضاً.',
            en: 'Highlight how this exact pattern powers persistent student progress stores.',
          },
          discussionIdeas: [
            {
              ar: 'ما الفرق بين LocalStorage و SessionStorage و Cookies ومتى نختار كلاً منها؟',
              en: 'Comparing LocalStorage vs SessionStorage vs Cookies storage boundaries.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-07',
    number: 7,
    slug: 'session-07',
    title: {
      ar: 'معمارية Next.js App Router والصفحات الديناميكية',
      en: 'Next.js App Router Architecture & Dynamic Routes',
    },
    subtitle: {
      ar: 'بناء مسارات الصفحات، الروابط السريعة، والتوليد المسبق SSG',
      en: 'Routing conventions, layout nesting, and pre-rendering strategies',
    },
    description: {
      ar: 'كيف تبني صفحات المنتجات الديناميكية [slug] وصفحة التفاصيل ولوحة التحكم بكفاءة متناهية.',
      en: 'Dynamic page parameters, nested layouts, and server/client boundaries.',
    },
    status: 'scheduled',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: { ar: 'عبد الحكيم قنبر', en: 'Abdulhakim Kanbr' },
      role: { ar: 'كبير مهندسي البرمجيات', en: 'Lead Software Engineer' },
    },
    targetStageNumber: '04',
    targetModuleName: { ar: 'المرحلة 04: التطوير التفاعلي (DEVELOP)', en: 'Stage 04: Interactive Dev (DEVELOP)' },
    objectives: [
      { ar: 'ربط صفحات المنتجات والتنقل السريع بين أقسام الموقع دون إعادة تحميل', en: 'Dynamic product routing without page reloads' },
    ],
    students: [],
    activities: [
      {
        id: 's07-act-01',
        order: 1,
        type: 'code',
        title: {
          ar: 'النشاط 01: إنشاء مسار صفحة المنتج الديناميكية app/products/[slug]',
          en: 'Activity 01: Building Dynamic Product Routes [slug]',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'أنشئ صفحة واحدة ذكية تعرض أي منتج ينقر عليه العميل بناءً على رابطه في المتصفح',
            en: 'Build a dynamic route template that renders individual product detail pages',
          },
          whatAmIDoing: {
            ar: 'أتعلم هيكلة المجلدات في Next.js لإنشاء مسار ديناميكي وقراءة params.slug لعرض تفاصيل الوجبة أو المنتج.',
            en: 'Creating folder structure for dynamic route and consuming params.slug.',
          },
          whyAmIDoingIt: {
            ar: 'لا ننشئ صفحة منفصلة لكل منتج إذا كان لدينا 1000 منتج، بل ننشئ قالباً ديناميكياً واحداً يستقبل معرّف المنتج ويعرضه.',
            en: 'Dynamic routing scales single templates across thousands of catalog items.',
          },
          howDoIDoIt: [
            {
              ar: 'أنشئ المسار: app/products/[slug]/page.tsx.',
              en: 'Create directory path: app/products/[slug]/page.tsx.',
            },
            {
              ar: 'استقبل params في دالة الصفحة: ({ params }: { params: { slug: string } }).',
              en: 'Consume params parameter in the page component.',
            },
            {
              ar: 'ابحث عن المنتج المطابق للـ slug واعرض اسمه وسعره ووصفه المفصل.',
              en: 'Query matching product object by slug and display rich details.',
            },
          ],
          expectedResult: {
            ar: 'صفحة تفاصيل تفتح عند زيارة /products/burger أو /products/pizza وتعرض بيانات المنتج المطابق.',
            en: 'A working detail view rendering correct product for matching URL slug.',
          },
          hints: [
            {
              ar: '💡 استخدم مكون Link من next/link للتنقل الفوري بين الصفحات دون وميض إعادة التحميل.',
              en: 'Always use next/link for client-side prefetching and instantaneous page transitions.',
            },
          ],
          starterSnippet: `// app/products/[slug]/page.tsx
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">تفاصيل المنتج: {slug}</h1>
      <p className="text-slate-600">هنا تظهر كافة مواصفات ومكونات المنتج وصوره وسعره.</p>
    </div>
  );
}`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'فهم نظام التوجيه القائم على الملفات (File-system based Routing) في Next.js App Router.',
            en: 'Master Next.js App Router file-system convention and dynamic segments.',
          },
          whatToExplain: [
            {
              ar: 'كيف تحول الأقواس المربعة [slug] المجلد إلى متغير ديناميكي يمرر لمكون الصفحة.',
              en: 'How bracket notation turns directory names into dynamic parameter segments.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ما الفرق بين التنقل بوسم <a> العادي والتنقل بمكون <Link> في Next.js؟',
              en: 'Difference between native <a> hard reloads vs Next.js <Link> SPA navigation.',
            },
          ],
          example: {
            ar: 'تغيير الرابط في شريط عنوان المتصفح وملاحظة تغير المحتوى تلقائياً.',
            en: 'Toggling browser URL slug live and watching page content re-evaluate.',
          },
          commonMistakes: [
            {
              ar: 'نسيان أن params في إصدارات Next.js 15+ أصبحت Promise تتطلب await.',
              en: 'Forgetting that Next.js 15+ params are async Promises requiring await.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'عرض رسالة "المنتج غير متوفر" بواسطة دالة notFound() إذا كان الـ slug غير موجود.',
            en: 'Trigger Next.js notFound() 404 page if slug does not exist in dataset.',
          },
          ifStudentIsStuck: {
            ar: 'مراجعة مسار المجلدات بدقة والتأكد من وجود الأقواس المربعة [slug].',
            en: 'Audit directory tree naming to ensure exact [slug] bracket syntax.',
          },
          extension: {
            ar: 'إضافة دالة generateStaticParams لتوليد كل صفحات المنتجات مسبقاً أثناء الـ Build.',
            en: 'Implement generateStaticParams for full static pre-rendering (SSG).',
          },
          teachingNotes: {
            ar: 'أكد على الطلاب أن Next.js يجمع بين سرعة المواقع الثابتة وقوة التطبيقات التفاعلية.',
            en: 'Highlight how Next.js unifies SSG performance with dynamic routing power.',
          },
          discussionIdeas: [
            {
              ar: 'كيف يؤثر التوليد المسبق للصفحات (SSG) على سرعة فتح الموقع وتجربة المستخدم؟',
              en: 'How static generation directly impacts Core Web Vitals and TTFB.',
            },
          ],
        },
      },
      {
        id: 's07-act-02',
        order: 2,
        type: 'task',
        title: {
          ar: 'النشاط 02: بناء مسار التنقل التفاعلي (Breadcrumbs)',
          en: 'Activity 02: Constructing Accessible Breadcrumb Navigation',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'أضف شريط مسار يوضح للزائر أين يقف الآن: الرئيسية ← القائمة ← اسم الوجبة',
            en: 'Build breadcrumb path helping visitors orient themselves within product hierarchy',
          },
          whatAmIDoing: {
            ar: 'أبني مكون Breadcrumbs أنيق بأيقونات أسهم يسهل العودة للوراء بنقرة واحدة.',
            en: 'Creating a breadcrumbs navigation component with chevrons and return links.',
          },
          whyAmIDoingIt: {
            ar: 'المسار الدلالي Breadcrumbs يحسن تجربة المستخدم ويزيد من تقييم محركات البحث في Google.',
            en: 'Breadcrumbs improve navigation usability and provide rich snippets in Google search results.',
          },
          howDoIDoIt: [
            {
              ar: 'استخدم قائمة دلالية <nav aria-label="breadcrumb">.',
              en: 'Wrap breadcrumbs inside semantic <nav aria-label="breadcrumb">.',
            },
            {
              ar: 'أضف أيقونة سهم ChevronLeft أو ChevronRight بين كل رابط.',
              en: 'Insert directional arrow icons between step items.',
            },
            {
              ar: 'اجعل العنصر الأخير غير قابل للنقر وبلون مميز ليدل على الصفحة الحالية.',
              en: 'Mute and disable the last item to designate current page state.',
            },
          ],
          expectedResult: {
            ar: 'شريط مسار تنقل متجاوب وأنيق في أعلى صفحة تفاصيل المنتج.',
            en: 'Polished breadcrumb component sitting atop product detail pages.',
          },
          hints: [
            {
              ar: '💡 استخدم أيقونة المنزل Home للرابط الأول ليكون مألوفاً وسهل التعرف.',
              en: 'Include a home icon for the root breadcrumb item.',
            },
          ],
          starterSnippet: `<nav className="flex items-center gap-2 text-xs text-slate-500 my-4">
  <Link href="/" className="hover:text-blue-600 transition-colors">الرئيسية</Link>
  <span>/</span>
  <Link href="/products" className="hover:text-blue-600 transition-colors">قائمة الطعام</Link>
  <span>/</span>
  <span className="font-bold text-slate-900">{productTitle}</span>
</nav>`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'تعليم الطلاب فن التوجيه المكاني للزائر (Wayfinding UX).',
            en: 'Teach digital wayfinding and spatial hierarchy in web applications.',
          },
          whatToExplain: [
            {
              ar: 'أهمية الـ Breadcrumbs في المتاجر الكبيرة لتقليل نسبة الارتداد (Bounce Rate).',
              en: 'How breadcrumbs significantly lower ecommerce bounce rates.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ما هو السلوك المفضل للزائر: استخدام زر الرجوع بالمتصفح أم نقرة واحدة على قسم القائمة بالمسار؟',
              en: 'Why do users prefer in-app breadcrumb navigation over browser back buttons?',
            },
          ],
          example: {
            ar: 'استعراض الـ Breadcrumbs في متجر أمازون أو Noon.',
            en: 'Inspect live multi-tier breadcrumb hierarchy on Amazon or Noon.',
          },
          commonMistakes: [
            {
              ar: 'جعل الصفحة الحالية رابطاً قابلاً للنقر يعيد تحميل نفس الصفحة دون داعٍ.',
              en: 'Leaving the active page breadcrumb as an active self-referential link.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة Schema.org BreadcrumbList في الميتا داتا لجعل الروابط تظهر داخل Google.',
            en: 'Inject Schema.org BreadcrumbList JSON-LD for rich search engine result snippets.',
          },
          ifStudentIsStuck: {
            ar: 'تذكيره بأن المسار عبارة عن flex أفقية بسيطة مع فواصل نصية.',
            en: 'Remind student it is essentially a horizontal flex container with slashes.',
          },
          extension: {
            ar: 'توليد الـ Breadcrumbs تلقائياً من الـ pathname عبر usePathname().',
            en: 'Auto-generate breadcrumbs dynamically by parsing usePathname() segments.',
          },
          teachingNotes: {
            ar: 'شجع الطلاب على جعل تفاصيل الـ UI دقيقة ونظيفة لأنها تصنع الفرق المهني.',
            en: 'Remind students that micro-details separate junior developers from pros.',
          },
          discussionIdeas: [
            {
              ar: 'كيف تقرأ خوارزميات Google الـ Breadcrumbs لتنظيم نتائج البحث؟',
              en: 'How Google crawlers ingest breadcrumbs to construct search result subheadings.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-08',
    number: 8,
    slug: 'session-08',
    title: {
      ar: 'ربط البيانات والواجهات البرمجية APIs و النماذج التفاعلية',
      en: 'API Integration, Data Fetching & Interactive Forms',
    },
    subtitle: {
      ar: 'استقبال طلبات العملاء، إرسال الإشعارات، والتحقق من صحة المدخلات',
      en: 'Submitting client orders, form validation, and external service webhooks',
    },
    description: {
      ar: 'بناء نماذج الحجز وطلب الوجبات مع التحقق من صحة المدخلات وإرسال بريد تأكيدي لصاحب العمل.',
      en: 'Form validation, error boundaries, and webhook/email notifications.',
    },
    status: 'scheduled',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: { ar: 'عبد الحكيم قنبر', en: 'Abdulhakim Kanbr' },
      role: { ar: 'كبير مهندسي البرمجيات', en: 'Lead Software Engineer' },
    },
    targetStageNumber: '05',
    targetModuleName: { ar: 'المرحلة 05: التحسين والربط (ENHANCE)', en: 'Stage 05: Enhancement & API (ENHANCE)' },
    objectives: [
      { ar: 'ربط نموذج الطلب وإرسال إشعار فوري عبر WhatsApp أو Email', en: 'Connect order forms to instant notifications' },
    ],
    students: [],
    activities: [
      {
        id: 's08-act-01',
        order: 1,
        type: 'code',
        title: {
          ar: 'النشاط 01: بناء نموذج إتمام الطلب مع التحقق الصارم (Form Validation)',
          en: 'Activity 01: Checkout Form with Strict Input Validation',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'استقبل اسم العميل، رقم هاتفه، وعنوان التوصيل مع منع الأخطاء والمدخلات الفارغة',
            en: 'Collect customer name, phone, and delivery address with real-time validation guards',
          },
          whatAmIDoing: {
            ar: 'أبني نموذجاً يتحقق من أن رقم الهاتف يبدأ بالصيغة الصحيحة (مثل 05xxxxxxxx) وأن جميع الحقول المطلوبة مكتملة.',
            en: 'Building checkout form enforcing valid phone numbers and complete address fields.',
          },
          whyAmIDoingIt: {
            ar: 'الطلبات الخاطئة أو الأرقام الناقصة تكبد صاحب المتجر خسائر وتضيع وقت موظفي التوصيل.',
            en: 'Invalid customer contact details waste courier hours and cause lost delivery revenue.',
          },
          howDoIDoIt: [
            {
              ar: 'أنشئ حالة للنموذج formData وحالة للأخطاء errors.',
              en: 'Initialize state for formData and companion errors dictionary.',
            },
            {
              ar: 'اكتب دالة validateForm تتحقق من صحة كل حقل وتعرض تنبيهاً أحمر إن كان خاطئاً.',
              en: 'Implement validateForm checking regex rules and setting field error messages.',
            },
            {
              ar: 'امنع الإرسال e.preventDefault() إذا كانت هناك أخطاء.',
              en: 'Call e.preventDefault() and block submission if errors exist.',
            },
          ],
          expectedResult: {
            ar: 'نموذج طلب تفاعلي يوجه العميل برسائل واضحة ويمنع الإرسال الخاطئ.',
            en: 'A bulletproof checkout form with clear, helpful inline validation feedback.',
          },
          hints: [
            {
              ar: '💡 استخدم required و type="tel" في وسوم input كخط دفاع أول في المتصفح.',
              en: 'Pair HTML5 native input attributes (required, type="tel") with JS validation.',
            },
          ],
          starterSnippet: `export function CheckoutForm({ onSubmit }) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone.startsWith('05') || phone.length !== 10) {
      setError('يرجى إدخال رقم هاتف سعودي صحيح يبدأ بـ 05 ويتكون من 10 أرقام');
      return;
    }
    setError('');
    onSubmit({ phone });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-bold mb-1">رقم الجوال للتوصيل</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="05XXXXXXXX"
          className="w-full p-2.5 rounded-xl border border-slate-300 text-sm"
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
      <button type="submit" className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold">
        تأكيد الطلب الآن
      </button>
    </form>
  );
}`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'تعليم الطلاب أساسيات التحقق من البيانات (Client-side Validation).',
            en: 'Teach client-side validation, error states, and UX feedback loops.',
          },
          whatToExplain: [
            {
              ar: 'الفرق بين التحقق في الواجهة (Client Validation) والتحقق في السيرفر (Server Validation).',
              en: 'Difference between client validation for UX vs server validation for security.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'لماذا لا نكتفي بالتحقق في المتصفح فقط؟ (لأن أي شخص يمكنه تجاوز واجهة المستخدم).',
              en: 'Why client validation alone is insufficient for security audits.',
            },
          ],
          example: {
            ar: 'إدخال رقم هاتف قصير وملاحظة رسالة التنبيه الحمراء الفورية.',
            en: 'Typing an incomplete phone number and showing immediate inline error.',
          },
          commonMistakes: [
            {
              ar: 'عدم مسح رسالة الخطأ عند تصحيح المستخدم للبيانات.',
              en: 'Failing to reset error messages when user fixes the input.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة تحقق من البريد الإلكتروني باستخدام تعبير نمطي (Regex).',
            en: 'Validate email format using strict RFC regular expression.',
          },
          ifStudentIsStuck: {
            ar: 'التركيز على فحص حقل واحد أولاً حتى يستوعب فكرة التنبيه.',
            en: 'Scope down to validating phone field first before expanding.',
          },
          extension: {
            ar: 'دمج مكتبة مثل Zod أو React Hook Form للمشاريع الكبيرة.',
            en: 'Introduce Zod schema validation for type-safe form contracts.',
          },
          teachingNotes: {
            ar: 'أكد على أن وضوح رسائل الخطأ للعميل هو مفتاح نجاح أي متجر.',
            en: 'Emphasize that friendly error copy directly reduces checkout abandonment.',
          },
          discussionIdeas: [
            {
              ar: 'كيف تؤثر تعقيدات نماذج الدفع على نسبة إتمام الشراء (Checkout Abandonment)؟',
              en: 'How cumbersome checkout forms kill conversion rates.',
            },
          ],
        },
      },
      {
        id: 's08-act-02',
        order: 2,
        type: 'task',
        title: {
          ar: 'النشاط 02: إرسال الطلب عبر WhatsApp API أو إشعار فوري',
          en: 'Activity 02: Dispatching Orders to WhatsApp & Instant Alerts',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'اربط زر الطلب برقم واتساب المطعم مباشرة لتصل تفاصيل الفاتورة فوراً لصاحب العمل',
            en: 'Link checkout button to WhatsApp Click-to-Chat sending formatted order receipts',
          },
          whatAmIDoing: {
            ar: 'أتعلم كيف أجمع تفاصيل السلة وبيانات العميل في نص منسق وأفتح محادثة واتساب آلية بـ wa.me.',
            en: 'Composing order items and client details into a structured WhatsApp chat URL.',
          },
          whyAmIDoingIt: {
            ar: 'أكثر من 80% من المتاجر والمطاعم المحلية في الوطن العربي تستقبل طلباتها عبر واتساب دون الحاجة لدفع اشتراكات معقدة لبوابات الدفع.',
            en: 'WhatsApp order routing is the #1 preferred workflow for local Arab businesses.',
          },
          howDoIDoIt: [
            {
              ar: 'اجمع أسماء الوجبات وأسعارها وعنوان العميل في رسالة نصية واحدة.',
              en: 'Serialize cart items, prices, and address into a neat text receipt.',
            },
            {
              ar: 'استخدم encodeURIComponent لتشفير النص بحيث يقبله رابط الويب.',
              en: 'Pass the message string through encodeURIComponent().',
            },
            {
              ar: 'افتح الرابط: https://wa.me/[phone]?text=[encodedMessage].',
              en: 'Construct target URL: https://wa.me/[phone]?text=[encodedMessage].',
            },
          ],
          expectedResult: {
            ar: 'زر طلب يفتح محادثة واتساب مجهزة بفاتورة الطلب الجاهزة للإرسال بنقرة واحدة.',
            en: 'A 1-click checkout action that opens WhatsApp pre-populated with order receipt.',
          },
          hints: [
            {
              ar: '💡 لا تضع رمز + أو أصفاراً في رقم الهاتف داخل wa.me، ابدأ برمز الدولة مباشرة (مثال: 966500000000).',
              en: 'Omit + or prefixes in wa.me URLs; use country code digits directly.',
            },
          ],
          starterSnippet: [
            'function sendOrderToWhatsApp(cart, customer) {',
            "  const businessPhone = '966500000000';",
            "  const itemsText = cart.map(i => '- ' + i.title + ' (' + i.price + ' ر.س)').join('\\n');",
            "  const message = 'طلب جديد من الموقع! 🍔\\n' +",
            "    'الاسم: ' + customer.name + '\\n' +",
            "    'الجوال: ' + customer.phone + '\\n' +",
            "    'العنوان: ' + customer.address + '\\n\\n' +",
            "    'الطلبات:\\n' + itemsText + '\\n\\n' +",
            "    'الإجمالي: ' + customer.total + ' ر.س';",
            '',
            "  const url = 'https://wa.me/' + businessPhone + '?text=' + encodeURIComponent(message);",
            "  window.open(url, '_blank');",
            '}',
          ].join('\n'),
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'تعليم الطلاب حلول الربط العملية ذات القيمة الفورية لأصحاب الأعمال المحلية.',
            en: 'Demonstrate pragmatic integration strategies delivering instant commercial value.',
          },
          whatToExplain: [
            {
              ar: 'كيف يقنع هذا الحل البسيط صاحب مطعم محلي بدفع 2000-5000 ريال للحصول على هذا النظام.',
              en: 'How this simple WhatsApp bridge justifies $500-$1500 freelance client contracts.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'لماذا يفضل صاحب المطعم استلام الطلب على واتساب موظف الكاشير بدلاً من لوحة تحكم معقدة؟',
              en: 'Why local shop owners adore WhatsApp alerts over complex dashboard software.',
            },
          ],
          example: {
            ar: 'الضغط على زر الطلب وإظهار فتح تطبيق واتساب وتجهيز الفاتورة تلقائياً.',
            en: 'Clicking order button live and watching WhatsApp Web open pre-filled receipt.',
          },
          commonMistakes: [
            {
              ar: 'نسيان استخدام encodeURIComponent مما يقطع الرسالة عند المسافات والسطور الجديدة.',
              en: 'Forgetting encodeURIComponent causing message truncation on spaces or newlines.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة رقم مرجعي عشوائي للطلب (Order #1042) وموقع العميل على خرائط Google.',
            en: 'Attach random order confirmation code and Google Maps delivery pin link.',
          },
          ifStudentIsStuck: {
            ar: 'مساعدته بنسخ دالة sendOrderToWhatsApp والتأكد من صحة رقم الهاتف.',
            en: 'Verify phone number format without dashes or plus signs.',
          },
          extension: {
            ar: 'ربط إشعار إضافي عبر Telegram Bot API أو البريد الإلكتروني.',
            en: 'Trigger parallel Telegram Bot notification via webhook.',
          },
          teachingNotes: {
            ar: 'هذا النشاط من أكثر الأنشطة التي تثير حماس الطلاب لأنهم يرون أثراً تجارياً ملموساً فورياً.',
            en: 'Students love this feature because it delivers immediate tangible product utility.',
          },
          discussionIdeas: [
            {
              ar: 'ما هي الخطوة التالية عندما يكبر المطعم ليحتاج ربط نقاط البيع POS مع الموقع؟',
              en: 'How architecture evolves when scaling from WhatsApp to automated POS webhooks.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-09',
    number: 9,
    slug: 'session-09',
    title: {
      ar: 'الأداء الفائق وتحسين محركات البحث: Technical SEO & Speed',
      en: 'Peak Performance & Technical SEO: Core Web Vitals',
    },
    subtitle: {
      ar: 'كيف تجعل موقعك يفتح في أقل من ثانية ويتصدر الصفحة الأولى في Google',
      en: 'Sub-second load speeds, OpenGraph metadata, and Google search dominance',
    },
    description: {
      ar: 'ضغط الصور، تحسين وسوم الميتا، وتوليد خريطة الموقع sitemap.xml والبيانات المنظمة Schema.org.',
      en: 'Image optimization, semantic OpenGraph tags, sitemaps, and structured data.',
    },
    status: 'scheduled',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: { ar: 'عبد الحكيم قنبر', en: 'Abdulhakim Kanbr' },
      role: { ar: 'كبير مهندسي البرمجيات', en: 'Lead Software Engineer' },
    },
    targetStageNumber: '05',
    targetModuleName: { ar: 'المرحلة 05: التحسين والربط (ENHANCE)', en: 'Stage 05: Enhancement & API (ENHANCE)' },
    objectives: [
      { ar: 'تحقيق نتيجة 95+ في مؤشرات أداء Google Lighthouse', en: 'Achieve 95+ score on Google Lighthouse' },
    ],
    students: [],
    activities: [
      {
        id: 's09-act-01',
        order: 1,
        type: 'code',
        title: {
          ar: 'النشاط 01: إعداد وسوم الميتا ومشاركة السوشيال ميديا (Metadata & OpenGraph)',
          en: 'Activity 01: Configuring Metadata & Social Sharing OpenGraph',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'اجعل رابط موقعك يظهر بصورة جذابة وعنوان أنيق عند مشاركته في واتساب وتويتر ولينكد إن',
            en: 'Craft rich preview cards when sharing links on WhatsApp, Twitter, and LinkedIn',
          },
          whatAmIDoing: {
            ar: 'أكتب كائن metadata في Next.js متضمناً العنوان، الوصف، الكلمات المفتاحية، وصورة المعاينة openGraph image.',
            en: 'Authoring Next.js metadata export specifying titles, descriptions, and OpenGraph banners.',
          },
          whyAmIDoingIt: {
            ar: 'الروابط التي تظهر بدون صورة أو وصف تبدو كروابط مشبوهة ويتجاهلها الناس، بينما البطاقة الأنيقة تضاعف النقرات 5 أضعاف.',
            en: 'Rich preview cards yield up to 5x higher click-through rates on social platforms.',
          },
          howDoIDoIt: [
            {
              ar: 'صدّر كائن metadata في app/layout.tsx أو app/page.tsx.',
              en: 'Export metadata object in layout.tsx or individual page.tsx.',
            },
            {
              ar: 'حدد title جذاب ووصف description دقيق لا يتجاوز 160 حرفاً.',
              en: 'Draft punchy title and concise description under 160 characters.',
            },
            {
              ar: 'حدد openGraph مع رابط صورة مقاس 1200x630 بكسل.',
              en: 'Configure openGraph with a 1200x630px social banner asset.',
            },
          ],
          expectedResult: {
            ar: 'معاينة تواصل اجتماعي احترافية تظهر صورة وعنوان الموقع فور لصق الرابط.',
            en: 'Flawless social sharing card preview verified on test simulators.',
          },
          hints: [
            {
              ar: '💡 استخدم موقع opengraph.xyz لفحص بطاقة المعاينة والتأكد من ظهورها في كل الشبكات.',
              en: 'Validate your social preview on opengraph.xyz simulator.',
            },
          ],
          starterSnippet: `export const metadata: Metadata = {
  title: 'برجر زون | أفضل وجبات سريعة في المدينة',
  description: 'اطلب ألذ شطائر البرجر الطازجة مع توصيل سريع حتى باب بيتك خلال 20 دقيقة.',
  openGraph: {
    title: 'برجر زون | طعم لا يقاوم',
    description: 'خصم 20% على طلبك الأول عبر الموقع الرسمي.',
    url: 'https://burgerzone.dev',
    images: [{ url: '/banner.jpg', width: 1200, height: 630 }],
    locale: 'ar_SA',
  },
};`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'ترسيخ معايير الـ Technical SEO وكيف تستعرض محركات البحث والشبكات الروابط.',
            en: 'Establish Technical SEO standards and social crawler indexing mechanisms.',
          },
          whatToExplain: [
            {
              ar: 'كيف تقرأ برمجيات الـ Crawlers وسوم <meta property="og:image"> في كود الـ HTML.',
              en: 'How Facebook/WhatsApp crawler bots parse OpenGraph meta tags from server HTML.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'لماذا يجب أن تكون صورة الـ OpenGraph بمقاس 1200x630 تحديداً؟',
              en: 'Why is the 1200x630 ratio the universal cross-platform standard?',
            },
          ],
          example: {
            ar: 'إرسال رابط في واتساب وملاحظة ظهور الصورة المصغرة والعنوان فوراً.',
            en: 'Pasting a URL into WhatsApp chat to showcase instant rich card unfurling.',
          },
          commonMistakes: [
            {
              ar: 'استخدام مسار صورة نسبي /banner.jpg بدلاً من رابط كامل في بعض المنصات.',
              en: 'Omitting metadataBase causing relative image URLs to fail in external scrapers.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة خاصية metadataBase في layout.tsx لضمان صحة كافة الروابط النسبية.',
            en: 'Configure metadataBase in RootLayout for bulletproof absolute URL resolution.',
          },
          ifStudentIsStuck: {
            ar: 'التحقق من أنه وضع كائن metadata في ملف السيرفر وليس في مكون "use client".',
            en: 'Ensure metadata is exported from a Server Component, not a "use client" file.',
          },
          extension: {
            ar: 'توليد صور OpenGraph ديناميكية برمجياً باستخدام ImageResponse (OG Image Generation).',
            en: 'Introduce dynamic OG Image generation via @vercel/og ImageResponse.',
          },
          teachingNotes: {
            ar: 'نبه الطلاب أن ملفات "use client" لا تقبل تصدير metadata في Next.js App Router.',
            en: 'Crucial rule: metadata exports are strictly forbidden inside "use client" files.',
          },
          discussionIdeas: [
            {
              ar: 'ما الفرق بين الـ SEO التقني (Technical SEO) والـ SEO الخاص بالمحتوى (Content SEO)؟',
              en: 'Differentiating Technical SEO architecture from editorial content optimization.',
            },
          ],
        },
      },
      {
        id: 's09-act-02',
        order: 2,
        type: 'task',
        title: {
          ar: 'النشاط 02: توليد خريطة الموقع sitemap.ts والبيانات المنظمة Schema.org',
          en: 'Activity 02: Generating Dynamic Sitemap & Structured Data',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'قدم لموقعك بطاقة تعريف يفهمها Google فورياً لتتصدر نتائج البحث المحلية',
            en: 'Provide Google search crawlers with automated sitemaps and structured JSON-LD data',
          },
          whatAmIDoing: {
            ar: 'أنشئ ملف sitemap.ts لتوليد خريطة الموقع تلقائياً، وأضيف كود Schema.org بصيغة JSON-LD لتعريف المطعم وقائمته.',
            en: 'Creating sitemap.ts and injecting Schema.org Restaurant JSON-LD script.',
          },
          whyAmIDoingIt: {
            ar: 'بيانات Schema.org هي السبب في ظهور النجوم الصفراء، وساعات العمل، وقائمة الأسعار مباشرة في نتائج بحث Google.',
            en: 'Schema markup unlocks rich Google search snippets: review stars, prices, hours.',
          },
          howDoIDoIt: [
            {
              ar: 'أنشئ ملف app/sitemap.ts وأرجع مصفوفة الروابط وتاريخ آخر تعديل.',
              en: 'Create app/sitemap.ts returning an array of route URLs with change frequencies.',
            },
            {
              ar: 'أضف سكربت application/ld+json في layout.tsx يحتوي على نوع Restaurant أو LocalBusiness.',
              en: 'Inject application/ld+json script defining Restaurant/LocalBusiness entity.',
            },
          ],
          expectedResult: {
            ar: 'خريطة موقع تعمل على /sitemap.xml وبيانات منظمة معتمدة ومفحوصة.',
            en: 'Valid /sitemap.xml and schema markup passing Google Rich Results test.',
          },
          hints: [
            {
              ar: '💡 استخدم أداة "اختبار النتائج الغنية" (Google Rich Results Test) لفحص كودك والتأكد من خلوه من الأخطاء.',
              en: 'Test your structured JSON-LD with Google Rich Results Test tool.',
            },
          ],
          starterSnippet: `// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://burgerzone.dev', lastModified: new Date() },
    { url: 'https://burgerzone.dev/menu', lastModified: new Date() },
    { url: 'https://burgerzone.dev/contact', lastModified: new Date() },
  ];
}`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'تعليم الطلاب كيف تتواصل المواقع البرمجية الحديثة مع محركات البحث عبر المعايير المفتوحة.',
            en: 'Teach semantic web interoperability via open standards (sitemaps & JSON-LD).',
          },
          whatToExplain: [
            {
              ar: 'ما هي الـ Knowledge Graph في Google وكيف يبنيها من بيانات Schema.org.',
              en: 'How Google Knowledge Graph builds entity relationships from structured data.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'عندما تبحث في Google عن مطعم وتجد أسفل الرابط نجوم التقييم، من أين جاءت هذه النجوم؟',
              en: 'Where do search result star ratings originate from under Google links?',
            },
          ],
          example: {
            ar: 'فتح /sitemap.xml ومشاهدة ملف الـ XML الناتج برمجياً.',
            en: 'Navigating to /sitemap.xml and viewing the generated machine-readable XML feed.',
          },
          commonMistakes: [
            {
              ar: 'كتابة JSON غير صالح داخل سكربت ld+json مما يسبب تجاهل المحرك للبيانات.',
              en: 'Malformed JSON syntax inside script tags causing parser crashes.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إضافة قائمة الوجبات كاملة كعناصر Menu داخل كائن الـ Schema.',
            en: 'Nest complete menuItem schemas inside the restaurant entity.',
          },
          ifStudentIsStuck: {
            ar: 'البدء بنسخ قالب sitemap.ts البسيط المرفق.',
            en: 'Have student adopt the 3-route sitemap.ts scaffold first.',
          },
          extension: {
            ar: 'توليد sitemap ديناميكي يقرأ روابط المنتجات من قاعدة البيانات تلقائياً.',
            en: 'Dynamically query database items to populate hundreds of sitemap URLs.',
          },
          teachingNotes: {
            ar: 'وضّح للطلاب أن مهارة الـ SEO التقني تجعل سعر موقعهم عند البيع يتضاعف.',
            en: 'Remind students that Technical SEO expertise commands significant client price premiums.',
          },
          discussionIdeas: [
            {
              ar: 'كيف أثر ظهور الذكاء الاصطناعي ومحركات البحث التوليدية (Perplexity/ChatGPT) على الـ SEO؟',
              en: 'How Generative Search Engines (GEO) are reshaping traditional SEO architecture.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-10',
    number: 10,
    slug: 'session-10',
    title: {
      ar: 'إطلاق الموقع على الإنترنت: الدومين والاستضافة والسيرفرات السحابية',
      en: 'Production Deployment: Domains, SSL & Cloud Hosting',
    },
    subtitle: {
      ar: 'نشر مشروعك على Vercel وربط نطاق مخصص حقيقي وشهادة SSL مجانية',
      en: 'Deploying to global CDN with custom domains and automatic HTTPS',
    },
    description: {
      ar: 'خطوات نشر الموقع على السحابة وربط GitHub بالتحديث التلقائي المستمر CI/CD.',
      en: 'Cloud deployment, continuous integration, DNS propagation, and SSL.',
    },
    status: 'scheduled',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: { ar: 'عبد الحكيم قنبر', en: 'Abdulhakim Kanbr' },
      role: { ar: 'كبير مهندسي البرمجيات', en: 'Lead Software Engineer' },
    },
    targetStageNumber: '06',
    targetModuleName: { ar: 'المرحلة 06: الإطلاق السحابي (LAUNCH)', en: 'Stage 06: Cloud Launch (LAUNCH)' },
    objectives: [
      { ar: 'نشر رابط حقيقي للموقع يمكن لأي شخص في العالم فتحه على هاتفه', en: 'Publish live public URL accessible worldwide' },
    ],
    students: [],
    activities: [
      {
        id: 's10-act-01',
        order: 1,
        type: 'task',
        title: {
          ar: 'النشاط 01: اختبار جاهزية المشروع للإنتاج وتأكيد نجاح npm run build',
          en: 'Activity 01: Pre-flight Production Build Verification',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'تأكد من خلو مشروعك من أي أخطاء برمجية أو استيرادات مكسورة قبل نشره للعالم',
            en: 'Run comprehensive TypeScript and Next.js build checks before cloud deploy',
          },
          whatAmIDoing: {
            ar: 'أفتح سطر الأوامر وأشغل أمر npm run build وأتأكد من اكتمال كافة الصفحات وخروج الكود برمز نجاح (Code 0).',
            en: 'Running production build locally to catch lint or TypeScript regressions.',
          },
          whyAmIDoingIt: {
            ar: 'إذا رفعت كوداً يحتوي على خطأ في استيراد مكتبة أو خطأ في الـ Types، سيفشل النشر على السيرفر السحابي.',
            en: 'Uncaught local TypeScript errors instantly trigger failed deployments on cloud platforms.',
          },
          howDoIDoIt: [
            {
              ar: 'احفظ جميع الملفات المفتوحة في محرر الكود.',
              en: 'Save all modified files in your editor.',
            },
            {
              ar: 'شغل الأمر: npm run build.',
              en: 'Execute command: npm run build.',
            },
            {
              ar: 'تأكد من ظهور علامة ✓ Compiled successfully وتوليد المسارات دون أخطاء حمراء.',
              en: 'Verify green compiled checkmark and route generation list.',
            },
          ],
          expectedResult: {
            ar: 'بناء مكتمل للإنتاج بدون أي أخطاء برمجية، وجاهزية تامة للرفع.',
            en: 'Zero-error production artifact confirmed locally.',
          },
          hints: [
            {
              ar: '💡 إذا ظهر خطأ، اقرأ اسم الملف ورقم السطر المذكور في التيرمينال وتوجه إليه لإصلاحه فوراً.',
              en: 'Carefully parse terminal error logs to isolate exact file and line number.',
            },
          ],
          starterSnippet: `# تشغيل فحص البناء في التيرمينال
npm run build

# النتيجة المتوقعة:
# ✓ Compiled successfully
# ✓ Generating static pages`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'تعليم الطلاب عقلية فحص ما قبل الطيران (Pre-flight Verification).',
            en: 'Instill pre-flight verification rigor and debugging build failures.',
          },
          whatToExplain: [
            {
              ar: 'الفرق بين بيئة التطوير المحلية (next dev) وبيئة الإنتاج الصارمة (next build).',
              en: 'Why next dev is permissive with type errors while next build enforces strict compliance.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'لماذا قد يعمل الموقع في جهازك ولكن يفشل عند رفعه على السيرفر؟',
              en: 'Why can a project function in dev but fail entirely during production build?',
            },
          ],
          example: {
            ar: 'إحداث خطأ إملائي متعمد وتشغيل البناء لمشاهدة رسالة الخطأ وكيفية تصحيحها.',
            en: 'Deliberately introducing a type error to model diagnostic troubleshooting.',
          },
          commonMistakes: [
            {
              ar: 'رفع الكود دون تجربة npm run build محلياً، والتفاجؤ بفشل Vercel.',
              en: 'Pushing code to git without building locally first.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'تشغيل أمر npm run lint والتأكد من عدم وجود أي تحذيرات متبقية.',
            en: 'Execute npm run lint to achieve clean 0 warnings / 0 errors state.',
          },
          ifStudentIsStuck: {
            ar: 'مساعدته في قراءة الخطأ الشائع (مثل متغير غير مستخدم أو قوس مفقود).',
            en: 'Help isolate common syntax hiccups like unused vars or missing tags.',
          },
          extension: {
            ar: 'فحص حجم حزم الجافاسكربت (Bundle Size Analysis) لتقليص حجم الصفحات.',
            en: 'Inspect generated bundle sizes to optimize heavy chunks.',
          },
          teachingNotes: {
            ar: 'أكد للطلاب أن كل مبرمج كبير يواجه أخطاء Build، والمهارة تكمن في قراءة اللوغز بهدوء.',
            en: 'Normalize build errors as everyday engineering routine; teach calm log reading.',
          },
          discussionIdeas: [
            {
              ar: 'كيف تساعد خوادم الـ CI/CD في منع وصول الأكواد المعطوبة للمستخدمين؟',
              en: 'How automated CI/CD pipelines safeguard production reliability.',
            },
          ],
        },
      },
      {
        id: 's10-act-02',
        order: 2,
        type: 'task',
        title: {
          ar: 'النشاط 02: النشر السحابي على Vercel والحصول على رابط حي',
          en: 'Activity 02: Cloud Deployment on Vercel & Live URL Verification',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'انشر موقعك على الإنترنت واحصل على رابط عام فوري يفتح على أي هاتف في العالم',
            en: 'Deploy to global edge CDN and obtain a public live production URL',
          },
          whatAmIDoing: {
            ar: 'أرفع المشروع إلى GitHub وأربطه بمنصة Vercel للحصول على نشر تلقائي مع شهادة أمان SSL مجانية.',
            en: 'Connecting GitHub repo to Vercel for continuous deployment and automatic SSL.',
          },
          whyAmIDoingIt: {
            ar: 'الموقع غير المنشور لا يراه أحد؛ والعميل يقتنع فقط عندما ترسل له رابطاً حقيقياً يفتحه على هاتفه.',
            en: 'Clients only believe in working software when presented with a live URL on their phone.',
          },
          howDoIDoIt: [
            {
              ar: 'سجل دخولك في vercel.com بحساب GitHub الخاص بك.',
              en: 'Log in to vercel.com using your GitHub account.',
            },
            {
              ar: 'اضغط على Add New Project واختر مستودع موقعك.',
              en: 'Click Add New Project and import your repository.',
            },
            {
              ar: 'اضغط على Deploy وانتظر دقيقة واحدة حتى تكتمل عملية النشر.',
              en: 'Click Deploy and watch the global edge build process.',
            },
            {
              ar: 'انسخ الرابط المنشور (مثال: my-restaurant.vercel.app) وافتحه في هاتفك.',
              en: 'Copy your public live link and verify it immediately on mobile.',
            },
          ],
          expectedResult: {
            ar: 'رابط إنترنت حي حقيقي يعمل على مدار الساعة ومحمي بشهادة HTTPS.',
            en: 'A live production web application accessible worldwide 24/7.',
          },
          hints: [
            {
              ar: '💡 كل تحديث ترسله في GitHub (git push) ستقوم Vercel بنشره تلقائياً خلال ثوانٍ!',
              en: 'Every subsequent git push automatically triggers a fresh production deploy.',
            },
          ],
          starterSnippet: `# خطوات النشر والتحديث السريع
git add .
git commit -m "إطلاق الموقع للإنتاج"
git push origin main

# رابطك النهائي سيكون بصيغة:
# https://[your-project-name].vercel.app`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'الاحتفال بلحظة تحول الكود المحلي إلى منتج حي على الشبكة العالمية.',
            en: 'Celebrate the transformative milestone of taking code from localhost to the world.',
          },
          whatToExplain: [
            {
              ar: 'كيف تعمل شبكات توزيع المحتوى العالمية (Edge CDN) لتسريع الموقع في كل الدول.',
              en: 'How global edge CDN caching delivers sub-second load times worldwide.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ماذا يحدث عندما ترسل هذا الرابط لصاحب عمل على واتساب؟',
              en: 'What psychological impact occurs when a client taps your live link on WhatsApp?',
            },
          ],
          example: {
            ar: 'نشر موقع حي أمام الطلاب على الشاشة وتوليد QR Code ليمسحوه بهواتفهم.',
            en: 'Live deployment on screen followed by displaying a QR code for students to scan.',
          },
          commonMistakes: [
            {
              ar: 'نسيان إضافة متغيرات البيئة Environment Variables في إعدادات Vercel إن وجدت.',
              en: 'Forgetting to mirror environment variables in Vercel project settings.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'ربط نطاق مخصص حقيقي (مثل .com أو .sa) بالموقع عبر إعدادات DNS.',
            en: 'Connect custom domain (.com or .sa) by pointing DNS records.',
          },
          ifStudentIsStuck: {
            ar: 'مساعدته في ربط حساب GitHub بمنصة Vercel.',
            en: 'Guide student through granting GitHub repository access to Vercel.',
          },
          extension: {
            ar: 'فحص الموقع المنشور في Google PageSpeed Insights ومعاينة سرعته.',
            en: 'Benchmark live URL on Google PageSpeed Insights and admire the scores.',
          },
          teachingNotes: {
            ar: 'هذه لحظة فخر كبيرة في الدورة، اطلب من الطلاب كتابة روابطهم المنشورة في الشات.',
            en: 'Major milestone moment: prompt all students to share their live URLs in Zoom chat.',
          },
          discussionIdeas: [
            {
              ar: 'كيف غيرت منصات Serverless و Vercel تكلفة استضافة المواقع عالمياً؟',
              en: 'How serverless edge architectures eliminated traditional server maintenance costs.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-11',
    number: 11,
    slug: 'session-11',
    title: {
      ar: 'تسويق خدمات الويب واقتناص أول عميل تجاري Freelancing',
      en: 'Client Acquisition & Freelancing: Landing Your First Client',
    },
    subtitle: {
      ar: 'تسعير المشاريع، إعداد عروض الأسعار المقنعة، واستراتيجيات التواصل المباشر',
      en: 'Project pricing, high-converting proposals, and direct outreach strategies',
    },
    description: {
      ar: 'كيف تقدم نفسك كصانع حلول رقمية وليس مجرد كاتب كود، وتحدد سعر الموقع بطريقة مربحة وعادلة.',
      en: 'Positioning as a high-value solutions partner and calculating profitable project quotes.',
    },
    status: 'scheduled',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: { ar: 'عبد الحكيم قنبر', en: 'Abdulhakim Kanbr' },
      role: { ar: 'كبير مهندسي البرمجيات', en: 'Lead Software Engineer' },
    },
    targetStageNumber: '07',
    targetModuleName: { ar: 'المرحلة 07: النمو والتسويق (GROW)', en: 'Stage 07: Market Growth (GROW)' },
    objectives: [
      { ar: 'صياغة عرض سعر مقنع (Proposal) موجه لعميل محلي لإقناعه بتطوير موقعه', en: 'Draft a winning freelance proposal for local businesses' },
    ],
    students: [],
    activities: [
      {
        id: 's11-act-01',
        order: 1,
        type: 'task',
        title: {
          ar: 'النشاط 01: حساب تسعير المشروع التجاري وتحديد نطاق العمل (Scope & Pricing)',
          en: 'Activity 01: Scoping & Value-Based Project Pricing',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'تعلم كيف تحسب تكلفة موقع متكامل بطريقة احترافية تضمن ربحيتك ورضا العميل',
            en: 'Calculate comprehensive freelance project pricing balancing profitability and value',
          },
          whatAmIDoing: {
            ar: 'أفكك متطلبات المشروع إلى بنود واضحة (التصميم، البرمجة، التجاوب، ربط الـ WhatsApp، والدعم الفني) وأحدد سعراً مناسباً.',
            en: 'Deconstructing project scope into line items and establishing value pricing.',
          },
          whyAmIDoingIt: {
            ar: 'التسعير العشوائي أو الرخيص جداً يجعلك تعمل بجهد شاق دون عائد مادي ويقلل من قيمتك أمام العملاء الجادين.',
            en: 'Underpricing projects burns out developers and signals low quality to serious clients.',
          },
          howDoIDoIt: [
            {
              ar: 'حدد عدد الأقسام والصفحات المطلوبة بدقة (Scope).',
              en: 'Delineate exact page count and interactive feature requirements.',
            },
            {
              ar: 'حدد الميزات الإضافية (مثل ربط WhatsApp، دعم SEO، سرعة فائقة).',
              en: 'Quantify premium features: WhatsApp integration, technical SEO, speed.',
            },
            {
              ar: 'حدد باقة تشمل التطوير مع شهرين دعم فني مجاني لبناء الثقة.',
              en: 'Bundle delivery with 60 days of post-launch maintenance to win trust.',
            },
          ],
          expectedResult: {
            ar: 'جدول تسعير احترافي ومفصل لموقع مطعم أو متجر محلي يتراوح بين 2,000 إلى 5,000 ريال.',
            en: 'A structured project quote itemizing deliverables between 2,000 - 5,000 SAR.',
          },
          hints: [
            {
              ar: '💡 لا تسعر بعدد الساعات، بل سعر بالقيمة التجارية التي سيجلبها الموقع لصاحب العمل.',
              en: 'Price on value created (extra sales & bookings) rather than raw coding hours.',
            },
          ],
          starterSnippet: `بنود تسعير موقع مطعم متكامل:
1. التصميم والهوية البصرية المتجاوبة: 1,200 ر.س
2. تطوير الواجهة السريعة بـ Next.js و Tailwind: 1,500 ر.س
3. نظام سلة المشتريات وربط الطلب الفوري بالـ WhatsApp: 800 ر.س
4. تهيئة محركات البحث وضبط خريطة Google: 500 ر.س
5. استضافة سحابية ودعم فني وصيانة لمدة شهرين: مجاناً (عرض ترويجي)

الإجمالي المقترح: 4,000 ر.س`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'كسر حاجز الخوف من طلب مبالغ عادلة وتعليم الطلاب منهجية التسعير القائم على القيمة.',
            en: 'Demystify value-based pricing and eradicate imposter syndrome pricing traps.',
          },
          whatToExplain: [
            {
              ar: 'كيف يرى صاحب العمل الموقع كاستثمار يجلب له عملاء، وليس كمصروف مالي.',
              en: 'Framing development as an investment yielding revenue rather than an expense.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'إذا كان موقعك سيزيد مبيعات المطعم بـ 10 آلاف ريال شهرياً، فهل يعتبر سعر 4 آلاف ريال غالياً؟',
              en: 'If your site generates $3,000 in extra monthly sales, is a $1,000 fee expensive?',
            },
          ],
          example: {
            ar: 'مقارنة بين مطور يعرض "موقع بـ 300 ريال" ومهندس يعرض "نظام زيادة طلبات بـ 3500 ريال".',
            en: 'Comparing a race-to-the-bottom coder vs a high-value solutions consultant.',
          },
          commonMistakes: [
            {
              ar: 'البدء في العمل دون الحصول على دفعة أولى مقدمة (50% مقدماً على الأقل).',
              en: 'Commencing work without securing a 50% non-refundable upfront deposit.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إعداد خطة اشتراك شهري للصيانة الدورية (Retainer) بقيمة 300 ريال شهرياً.',
            en: 'Design a monthly maintenance retainer offering continuous support.',
          },
          ifStudentIsStuck: {
            ar: 'تزويده بجدول التسعير القياسي المرفق ليعتمده كنموذج أولي.',
            en: 'Direct him to apply the benchmark 4,000 SAR template.',
          },
          extension: {
            ar: 'إعداد عقد عمل تجاري مبسط لحماية حقوق الطرفين.',
            en: 'Draft a simple 1-page freelance client services agreement.',
          },
          teachingNotes: {
            ar: 'أكد على الطلاب أن مهارة التفاوض والتسعير هي الفارق بين المطور المتعثر والمطور الناجح.',
            en: 'Stress that commercial literacy and negotiation outshine pure coding acumen.',
          },
          discussionIdeas: [
            {
              ar: 'لماذا يفشل الكثير من المبرمجين الموهوبين في كسب المال من مهارتهم؟',
              en: 'Why brilliant engineers struggle commercially without sales fundamentals.',
            },
          ],
        },
      },
      {
        id: 's11-act-02',
        order: 2,
        type: 'task',
        title: {
          ar: 'النشاط 02: صياغة مقترح العرض التجاري (Client Proposal Draft)',
          en: 'Activity 02: Crafting a High-Converting Client Proposal',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'اكتب رسالة عرض مخصصة لصاحب عمل محلي تدعوه فيها لتحديث موقعه وزيادة مبيعاته',
            en: 'Write an irresistible cold outreach message proposing a website overhaul to a local business',
          },
          whatAmIDoing: {
            ar: 'أكتب رسالة تواصل احترافية توضح للعميل مشكلة قائمة في موقعه الحالي، وتقدم له الحل التجاري مع رابط معاينة حية.',
            en: 'Authoring a personalized client outreach proposal demonstrating live prototype.',
          },
          whyAmIDoingIt: {
            ar: 'الرسائل العامة يتم تجاهلها، بينما الرسالة التي تبين للعميل أنك فحصت نشاطه وبنيت له نموذجاً أولياً تجبره على الرد والتعاقد.',
            en: 'Customized proposals showing concrete prototypes convert at a 40%+ reply rate.',
          },
          howDoIDoIt: [
            {
              ar: 'ابدأ بمدح حقيقي لمطعمه أو متجره.',
              en: 'Begin with genuine compliments on their local food or brand.',
            },
            {
              ar: 'أشر بلطف إلى مشكلة: "لاحظت أن المنيو لديكم ملف PDF يصعب فتحه بالجوال".',
              en: 'Politely identify a friction point: e.g. awkward PDF menu on mobile screens.',
            },
            {
              ar: 'قدم الحل الجاهز: "بنيت لكم نموذجاً سريعاً يتيح الطلب عبر الواتساب بنقرة واحدة".',
              en: 'Present turnkey solution: live interactive demo with 1-click WhatsApp order.',
            },
            {
              ar: 'ضع رابط الموقع ودعوة قصيرة لمكالمة سريعة لمدة 10 دقائق.',
              en: 'Provide preview link and propose a casual 10-minute discovery call.',
            },
          ],
          expectedResult: {
            ar: 'رسالة مقترح مقنعة واحترافية جاهزة للإرسال لصاحب عمل حقيقي.',
            en: 'A high-converting client proposal draft ready to send on WhatsApp or LinkedIn.',
          },
          hints: [
            {
              ar: '💡 لا ترسل الرسالة بصيغة رسمية معقدة، اجعلها ودية ومهنية في آن واحد.',
              en: 'Keep tone approachable, respectful, concise, and focused on their business growth.',
            },
          ],
          starterSnippet: `السلام عليكم ورحمة الله أستاذ [اسم العميل]،
أنا [اسمك]، مهندس واجهات ويب.
أنا معجب جداً بجودة الأطباق التي تقدمونها في [اسم المطعم]، وزرت فرعكم مؤخراً!

لاحظت عند دخولي لموقعكم من الجوال أن قائمة الطعام معروضة كملف PDF يصعب تصفحه، مما قد يجعل بعض الزوار يترددون في إكمال الطلب.

لذلك قمت بإعداد نموذج أولي تفاعلي سريع وخاص بمطعمكم، يتيح للعميل استعراض الوجبات وإرسال الطلب فوراً عبر الواتساب:
[رابط موقعك المنشور على Vercel]

يسعدني أن نتحدث في اتصال سريع لمدة 10 دقائق لنناقش كيف يمكن لهذا الموقع أن يرفع طلباتكم اليومية.

تحياتي وتقديري،
[اسمك] - صانع حلول ويب`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'تمكين الطلاب من استراتيجية التواصل المباشر المربحة (Value-First Outreach).',
            en: 'Empower students with value-first client outreach strategies.',
          },
          whatToExplain: [
            {
              ar: 'لماذا يعتبر بناء نموذج أولي (Loom/Demo) أقوى طريقة لإقناع أي عميل في العالم.',
              en: 'Why presenting a functional prototype obliterates client skepticism.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'إذا استلم صاحب مطعم هذه الرسالة ورأى اسمه وصور وجباته في رابط حقيقي، كيف ستكون ردة فعله؟',
              en: 'How does a business owner react when seeing their own menu on a live link?',
            },
          ],
          example: {
            ar: 'قراءة قصة نجاح حقيقية لمتدرب اقتنص عميلاً في أول أسبوعين من تطبيق هذا الأسلوب.',
            en: 'Sharing a real-world case study of a graduate landing a contract in week 2.',
          },
          commonMistakes: [
            {
              ar: 'إرسال رسائل نسخ ولصق عامة دون تخصيص اسم المطعم ونشاطه.',
              en: 'Blasting generic spam templates without customizing client details.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'تسجيل فيديو قصير لمدة دقيقة (Loom) يستعرض الموقع بهاتفه وإرفاقه بالرسالة.',
            en: 'Record a 60-second screen capture walkthrough on phone to accompany message.',
          },
          ifStudentIsStuck: {
            ar: 'مساعدته في تعديل القالب المقترح ليناسب مشروعه الحالي.',
            en: 'Help personalize the template with their live Vercel domain.',
          },
          extension: {
            ar: 'تحديد قائمة بـ 5 أنشطة تجارية محلية في مدينته للتواصل معها هذا الأسبوع.',
            en: 'Compile a targeted prospect list of 5 local businesses to pitch this week.',
          },
          teachingNotes: {
            ar: 'شجع الطلاب وتخلص من خوفهم، فمعظم أصحاب الأعمال يبحثون عن حلول حقيقية.',
            en: 'Dismantle student hesitation; local business owners are starving for digital growth.',
          },
          discussionIdeas: [
            {
              ar: 'كيف تبني شبكة علاقات مهنية تجلب لك عملاء مستمرين بالتوصية (Referrals)؟',
              en: 'How delivering world-class client delight turns first clients into referral engines.',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'session-12',
    number: 12,
    slug: 'session-12',
    title: {
      ar: 'يوم التخرج واستعراض المشاريع النهائية: Demo Day',
      en: 'Graduation & Final Projects Showcase: Demo Day',
    },
    subtitle: {
      ar: 'عرض مشاريع التخرج الحية للطلاب، التقييم المهني، وتسليم شهادات الإنجاز',
      en: 'Live student capstone presentations, professional critique, and graduation',
    },
    description: {
      ar: 'الجلسة الختامية للاحتفال بإنجاز كل متدرب واستعراض المنتجات الرقمية الحقيقية المنشورة على الويب.',
      en: 'Final showcase celebrating fully deployed web products built across the course.',
    },
    status: 'scheduled',
    durationMinutes: 90,
    trainer: {
      id: 'trainer-abdulhakim',
      name: { ar: 'عبد الحكيم قنبر', en: 'Abdulhakim Kanbr' },
      role: { ar: 'كبير مهندسي البرمجيات', en: 'Lead Software Engineer' },
    },
    targetStageNumber: '07',
    targetModuleName: { ar: 'المرحلة 07: النمو والتسويق (GROW)', en: 'Stage 07: Market Growth (GROW)' },
    objectives: [
      { ar: 'تقديم عرض عملي مباشر لمدة 5 دقائق لموقعك النهائي وشرح قراراتك المعمارية', en: 'Deliver 5-minute live demo of your production project' },
    ],
    students: [],
    activities: [
      {
        id: 's12-act-01',
        order: 1,
        type: 'task',
        title: {
          ar: 'النشاط 01: صياغة ملخص العرض التقديمي للمشروع النهائي (Final Pitch)',
          en: 'Activity 01: Authoring 3-Minute Capstone Project Pitch',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'لخص مشروعك في 3 دقائق: ما هي المشكلة؟ كيف يحلها موقعك؟ ما هي التقنيات التي استخدمتها؟',
            en: 'Craft your 3-minute demo presentation: Problem, Solution, Tech Stack, Live Demo',
          },
          whatAmIDoing: {
            ar: 'أكتب نقاط الحديث لعرض مشروعي أمام زملائي والمدرب ولجنة التقييم في يوم التخرج Demo Day.',
            en: 'Outlining talk track for final capstone demo to instructors and peers.',
          },
          whyAmIDoingIt: {
            ar: 'القدرة على شرح قراراتك المعمارية وإقناع الآخرين بمنتجك هي نصف نجاح أي مهندس برمجيات محترف.',
            en: 'Articulating technical architecture and commercial impact defines senior engineering impact.',
          },
          howDoIDoIt: [
            {
              ar: 'الدقيقة 1: المشكلة والجمهور المستهدف والقيمة التجارية للموقع.',
              en: 'Minute 1: The problem, audience profile, and business value proposition.',
            },
            {
              ar: 'الدقيقة 2: استعراض حي للواجهة وسلة المشتريات والتجاوب وسرعة التحميل.',
              en: 'Minute 2: Live interactive demo: browsing, cart, and mobile responsiveness.',
            },
            {
              ar: 'الدقيقة 3: التقنيات المعمارية المستخدمة (Next.js, Tailwind, Vercel) والخطط المستقبلية.',
              en: 'Minute 3: Architecture choices, Next.js features utilized, and next milestones.',
            },
          ],
          expectedResult: {
            ar: 'ملخص عرض تقديمي منظم وواثق جاهز للإلقاء في جلسة التخرج.',
            en: 'A crisp, confident 3-minute pitch deck talk track ready for graduation stage.',
          },
          hints: [
            {
              ar: '💡 ابدأ العرض بفتح الموقع الحقيقي على الشاشة فوراً ولا تتحدث عن نظريات مجردة.',
              en: 'Open straight with the live production URL; show working software immediately.',
            },
          ],
          starterSnippet: `نقاط عرض مشروع التخرج (Demo Day):
1. اسم مشروعي وفكرته:
2. المشكلة التي يحلها لأصحاب الأعمال:
3. أبرز 3 ميزات تم بناؤها:
   - ...
   - ...
   - ...
4. التقنيات التي استخدمتها: Next.js 15, Tailwind CSS v4, Lucide, Vercel
5. رابط الموقع الحي للجمهور: [رابط موقعك]`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'صقل مهارات العرض والإلقاء وإبراز القيمة الهندسية لمنتجات الطلاب.',
            en: 'Hone presentation prowess and celebrate student technical maturity.',
          },
          whatToExplain: [
            {
              ar: 'كيف تدير عرضاً مباشراً بثقة وكيف تتعامل بهدوء إذا حدث أي طارئ تقني.',
              en: 'How to conduct confident live demos and gracefully handle edge cases.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ما هو أهم تحدٍ هندسي واجهته أثناء بناء هذا المشروع وكيف تغلبت عليه؟',
              en: 'What was your biggest architectural obstacle and how did you conquer it?',
            },
          ],
          example: {
            ar: 'تقديم نموذج عرض لمدة دقيقتين يوضح الإيقاع المطلوب ونبرة الثقة.',
            en: 'Delivering a model 2-minute pitch setting expected standard and cadence.',
          },
          commonMistakes: [
            {
              ar: 'قراءة الكود سطراً بسطر بدلاً من استعراض تجربة المستخدم والقيمة التجارية.',
              en: 'Droning through code lines rather than demonstrating live user experience.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'إجراء طلب شراء حقيقي مباشر على الشاشة وتلقي الإشعار على الواتساب أمام الجميع.',
            en: 'Execute an actual live order on stage showing the instant WhatsApp receipt alert.',
          },
          ifStudentIsStuck: {
            ar: 'تشجيعه والتركيز على إبراز ما أنجزه حتى لو لم يكتمل كل شيء.',
            en: 'Boost confidence; highlight what has been built regardless of missing edge items.',
          },
          extension: {
            ar: 'مشاركة الشاشة واستعراض نتائج Google Lighthouse أمام الجمهور.',
            en: 'Run live Google Lighthouse audit on screen showing green performance metrics.',
          },
          teachingNotes: {
            ar: 'قدم تغذية راجعة مشجعة لكل طالب واحتفل بالرحلة الاستثنائية التي خاضها الجميع.',
            en: 'Provide affirmative, empowering feedback celebrating the transformational journey.',
          },
          discussionIdeas: [
            {
              ar: 'كيف ستواصل مسيرتك المهنية بعد التخرج من هذه الحقيبة التدريبية؟',
              en: 'Strategic roadmap for lifelong engineering advancement post-bootcamp.',
            },
          ],
        },
      },
      {
        id: 's12-act-02',
        order: 2,
        type: 'task',
        title: {
          ar: 'النشاط 02: توثيق المشروع النهائي في المعرض الشخصي (Portfolio Showcase)',
          en: 'Activity 02: Documenting Capstone Project in Personal Portfolio',
        },
        durationMinutes: 25,
        studentContent: {
          headline: {
            ar: 'أضف مشروع تخرجك إلى معرض أعمالك الشخصي كدليل قاطع على مهارتك الهندسية',
            en: 'Publish your capstone case study into your personal developer portfolio',
          },
          whatAmIDoing: {
            ar: 'أوثق الرابط الحي للمشروع، لقطات الشاشة، التحديات الهندسية، وقرارات المعمارية في صفحتي الشخصية.',
            en: 'Writing an architectural case study with screenshots, live link, and takeaways.',
          },
          whyAmIDoingIt: {
            ar: 'أصحاب الشركات والعملاء لا يطلبون شهادات ورقية، بل يفتحون معرض أعمالك ليروا المشاريع الحقيقية التي بنتها يداك.',
            en: 'Employers and freelance clients evaluate working code and deployed case studies over resumes.',
          },
          howDoIDoIt: [
            {
              ar: 'التقط 3 لقطات شاشة واضحة (صفحة الهبوط، سلة المشتريات، وتجاوب الجوال).',
              en: 'Capture 3 crisp screenshots: Hero, Cart interaction, and Mobile view.',
            },
            {
              ar: 'اكتب نبذة عن المشروع: المشكلة، الحل، والتقنيات المستخدمة.',
              en: 'Write case study summary: Problem, Architectural Solution, and Stack.',
            },
            {
              ar: 'ضع رابط الموقع المنشور ورابط كود GitHub لإثبات الاحترافية.',
              en: 'Embed live deployment link and public GitHub repository.',
            },
          ],
          expectedResult: {
            ar: 'حالة دراسية كاملة موثقة في معرض أعمالك تفتح لك أبواب الفرص والوظائف.',
            en: 'A compelling portfolio case study demonstrating end-to-end engineering mastery.',
          },
          hints: [
            {
              ar: '💡 لا تذكر فقط ما فعلته، بل اذكر التحدي التقني الذي واجهك وكيف فكرت في حله.',
              en: 'Focus on technical decisions and trade-offs rather than basic feature lists.',
            },
          ],
          starterSnippet: `### دراسة حالة: مشروع [اسم مشروعك]
- الرابط الحي: [https://your-project.vercel.app]
- المستودع البرمجي: [https://github.com/your-name/project]
- التقنيات: Next.js 15, React 19, TypeScript, Tailwind CSS, LocalStorage, Vercel

الهدف من المشروع:
بناء واجهة تجارية تفاعلية متكاملة لمطعم محلي، تتيح للعملاء تصفح الوجبات وإتمام الطلب عبر WhatsApp بنقرة واحدة بسرعة فائقة دون إعادة تحميل الصفحة.

أبرز التحديات المعمارية وكيف حلتها:
1. التجاوب ودعم اللغة العربية RTL: تم اعتماد كلاسات Tailwind v4 لضمان محاذاة دقيقة على كل الشاشات.
2. الحفظ التلقائي: تم ربط سلة المشتريات بـ LocalStorage لحماية طلبات العميل من الضياع عند التحديث.
3. الأداء والـ SEO: تم توليد وسوم الميتا وخريطة Sitemap لتحقيق نتائج خضراء في Google Lighthouse.`,
        },
        trainerGuide: {
          teachingGoal: {
            ar: 'تتويج الدورة بتجهيز معرض أعمال مهني متكامل يرافق الطالب في سوق العمل.',
            en: 'Crown the curriculum by furnishing every student with a market-ready portfolio.',
          },
          whatToExplain: [
            {
              ar: 'كيف أن وجود مشروع واحد منشور وموثق بعناية أفضل من 10 مشاريع ناقصة أو غير منشورة.',
              en: 'Why one thoroughly documented, deployed case study outperforms ten unfinished toy apps.',
            },
          ],
          suggestedQuestions: [
            {
              ar: 'ما هو أول شيء سيفعله مسؤول التوظيف أو العميل عندما يفتح معرض أعمالك؟',
              en: 'What is the very first action a hiring manager takes when inspecting your portfolio?',
            },
          ],
          example: {
            ar: 'استعراض دراسة حالة هندسية لمهندس برمجيات كبير في Google أو Stripe.',
            en: 'Inspect an exemplary engineering case study from a senior software engineer.',
          },
          commonMistakes: [
            {
              ar: 'وضع روابط مشاريع لا تعمل (روابط 404) أو نسيان وضع صور للشاشات.',
              en: 'Publishing dead links (404s) or omitting visual media walkthroughs.',
            },
          ],
          hints: [],
          challenge: {
            ar: 'نشر رابط المشروع في LinkedIn مع تاق للدورة والمدرب لزيادة الظهور المهني.',
            en: 'Publish a LinkedIn launch post tagging course and peers for community reach.',
          },
          ifStudentIsStuck: {
            ar: 'مساعدته في تنظيم نص دراسة الحالة وفق القالب المرفق.',
            en: 'Provide structured review of their draft case study summary.',
          },
          extension: {
            ar: 'إضافة فيديو متحرك GIF يوضح حركة الشاشات داخل معرض الأعمال.',
            en: 'Embed an animated GIF/WebM showing live interaction in the case study.',
          },
          teachingNotes: {
            ar: 'اختم الجلسة بتهنئة الجميع وتسليم الشهادات وتشجيعهم على الانطلاق في عالم صناعة الويب.',
            en: 'Conclude with heartfelt congratulations and certificates, launching them into tech.',
          },
          discussionIdeas: [
            {
              ar: 'كيف يستمر مهندس البرمجيات في التعلم الذاتي ومواكبة ثورة الذكاء الاصطناعي المتسارعة؟',
              en: 'Strategies for continuous lifelong mastery in the fast-paced generative AI era.',
            },
          ],
        },
      },
    ],
  },
];
