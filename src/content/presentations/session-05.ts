import { PresentationSession } from '@/types';

export const SESSION_05: PresentationSession = {
  id: 'session-05',
  number: 5,
  slug: 'session-05',
  title: {
    ar: 'تقسيم الصفحة إلى أجزاء منظمة وتجهيز ملفات المشروع',
    en: 'Breaking the Page into Organized Parts & Setting Up Project Files',
  },
  subtitle: {
    ar: 'كيف نفكك الصفحة الكبيرة إلى أقسام صغيرة يسهل بناؤها، ونرتب مجلدات مشروعنا بوضوح؟',
    en: 'How to break a big webpage into small easy-to-build pieces and organize project folders cleanly',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من قراءة تصميم أي صفحة وتقسيمها إلى أجزاء واضحة (شريط علوي، ترحيب، بطاقات، تذييل) وفهم كيف تُرتب ملفات المشروع الحقيقي ببساطة.',
    en: 'Enable trainees to break any page design into clear parts (Header, Hero, Cards, Footer) and understand simple project folder organization.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 04 وامتلاك تصور واضح للصفحة الرئيسية وأقسامها',
      en: 'Completion of Session 04 with a clear homepage layout plan',
    },
  ],
  objectives: [
    {
      ar: 'فهم لماذا نقسم الصفحة الكبيرة إلى أجزاء صغيرة مستقلة (أقسام ومكونات)',
      en: 'Understand why we split a large page into small independent parts (sections & components)',
    },
    {
      ar: 'التمييز بين القسم الكبير (مثل قسم القائمة) والقطعة المتكررة داخله (مثل بطاقة المشروب)',
      en: 'Distinguish between a full section (Menu Section) and a repeated piece inside it (Drink Card)',
    },
    {
      ar: 'معرفة المجلدات الثلاثة الأساسية في أي مشروع ويب حديث بلغة مبسطة (الصفحات، الأجزاء، الصور)',
      en: 'Learn the 3 core folders in a modern web project simply (Pages, Components, Images)',
    },
    {
      ar: 'تجهيز خريطة أجزاء المشروع وتسميتها بأسماء واضحة تمهيدًا لبنائها',
      en: 'Prepare and name your project parts clearly before building them',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:15',
      durationMinutes: 15,
      label: { ar: 'لماذا نقسم الصفحة الكبيرة إلى قطع صغيرة؟ (مثال قطع الليغو)', en: 'Why break a big page into small Lego-like pieces?' },
      type: 'context',
    },
    {
      timeRange: '00:15 – 00:35',
      durationMinutes: 20,
      label: { ar: 'الأقسام الكبيرة مقابل القطع المتكررة (البطاقات والأزرار)', en: 'Full sections vs. repeated pieces (Cards & Buttons)' },
      type: 'concept',
    },
    {
      timeRange: '00:35 – 00:50',
      durationMinutes: 15,
      label: { ar: 'كيف نرتب ملفات ومجلدات الموقع كخزانة مرتبة؟', en: 'How to organize website files like a neat cabinet' },
      type: 'concept',
    },
    {
      timeRange: '00:50 – 01:05',
      durationMinutes: 15,
      label: { ar: 'تطبيق عملي: تقسيم صفحة المقهى وتجهيز مجلدات المشروع', en: 'Live Demo: Splitting the Café page & setting up folders' },
      type: 'demo',
    },
    {
      timeRange: '01:05 – 01:20',
      durationMinutes: 15,
      label: { ar: 'نشاط المتدرب: تقسيم صفحته إلى 4 أقسام وتحديد البطاقة المتكررة', en: 'Trainee Activity: Split your page into 4 sections & 1 card' },
      type: 'practice',
    },
    {
      timeRange: '01:20 – 01:30',
      durationMinutes: 10,
      label: { ar: 'مراجعة تقسيمات المتدربين وخلاصة الجلسة الخامسة', en: 'Review trainee breakdowns & Session 05 summary' },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'تقسيم واجهة المشروع إلى أقسام وقطع واضحة الأسماء وتجهيز هيكل مجلدات المشروع.',
    en: 'Break the project interface into clearly named sections/pieces and set up project folders.',
  },
  aiRole: {
    ar: 'مساعد تنظيم يرتب كل قسم من الصفحة في ملف مستقل ونظيف يسهل الوصول إليه وتعديله.',
    en: 'Organization assistant placing each page section in its own clean, easy-to-edit file.',
  },
  marketConnection: {
    ar: 'الموقع المقسم إلى أجزاء مرتبة يسهل تطويره وإضافة ميزات جديدة له في دقائق دون تعقيد.',
    en: 'A website organized into clean parts is easy to update and expand in minutes.',
  },
  startScreen: {
    badge: 'الجلسة 05 من 12 • بناء الموقع وتحسينه (1)',
    headline: {
      ar: 'تقسيم الصفحة إلى أجزاء منظمة وتجهيز المشروع',
      en: 'Breaking the Page into Organized Parts & Project Setup',
    },
    description: {
      ar: 'نبدأ اليوم المرحلة الرابعة (بناء الموقع وتحسينه): سنتعلم كيف نفكك أي صفحة إلى قطع صغيرة بسيطة ونرتب ملفاتها بوضوح.',
      en: 'Start Phase 4 (Building & Improving): learn how to break any page into simple pieces and organize its files.',
    },
    sessionGoal: {
      ar: 'تقسيم صفحتك الرئيسية إلى أجزاء واضحة وفهم مكان كل ملف في مشروعك.',
      en: 'Divide your homepage into clear parts and understand where each file lives in your project.',
    },
  },
  endScreen: {
    headline: {
      ar: 'أحسنت! أصبح مشروعك مقسمًا ومنظمًا وجاهزًا للبناء',
      en: 'Well Done! Your Project Is Now Organized and Ready to Build',
    },
    keyRecap: [
      {
        ar: 'بناء موقع كبير يصبح سهلًا جدًا عندما نقسمه إلى 4 أقسام صغيرة نبنيها واحدًا تلو الآخر.',
        en: 'Building a website becomes very easy when divided into 4 small sections built one by one.',
      },
      {
        ar: 'كل عنصر يتكرر في الصفحة (مثل بطاقة المنتج أو زر الطلب) نصنعه كقالب واحد موحد.',
        en: 'Any repeated element (like a product card or button) is made as one unified template.',
      },
      {
        ar: 'ترتيب المجلدات (مجلد للصفحات، ومجلد للأجزاء، ومجلد للصور) يجعل تعديل الموقع مريحًا دائمًا.',
        en: 'Organizing folders (Pages, Parts, Images) keeps editing your site effortless.',
      },
    ],
    nextSessionNumber: '06',
    nextSessionTitle: {
      ar: 'بناء الصفحة الأساسية وتنسيقها للهاتف والكمبيوتر (HTML & CSS)',
      en: 'Building the Core Page & Styling It for Phone and Desktop (HTML & CSS)',
    },
  },
  slides: [
    {
      id: 's05-slide-01',
      sessionNumber: 5,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      visualType: 'components-lego',
      realWorldExample: {
        ar: 'مثل تركيب نموذج من قطع الليغو (Lego): بدل نحت مجسم كامل من قطعة واحدة صعبة، نركب قطعًا صغيرة واضحة معًا.',
        en: 'Like building with Lego bricks: instead of carving one giant block, we snap small clear pieces together.',
      },
      title: {
        ar: 'تقسيم الصفحة وتجهيز المشروع',
        en: 'Breaking Down the Page & Setting Up the Project',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'إدخال المتدرب إلى المرحلة الرابعة (بناء الموقع) عبر فكرة «التقسيم إلى أجزاء صغيرة يسهل التحكم بها».',
        en: 'Introduce Phase 4 (Building the Website) through breaking pages into small manageable parts.',
      },
      speakerNotes: {
        ar: 'نفّذ: رحب بالمتدربين في المرحلة الرابعة (بناء الموقع وتحسينه). اشرح تشبيه قطع الليغو في الرسم: أي موقع كبير في العالم هو في الحقيقة مجموعة من الأجزاء الصغيرة المرتبة فوق بعضها.\nاسأل: أيهما أسهل في التعديل: صفحة واحدة طولها ألف سطر متشابك، أم 4 أجزاء صغيرة لكل جزء اسم واضح؟\nتحقق: الأجزاء الصغيرة الواضحة أسهل دائمًا للمتدرب وللذكاء الاصطناعي معًا!',
        en: 'Welcome trainees to Phase 4 and explain the Lego building blocks analogy.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '05',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'المرحلة الرابعة • بناء الموقع وتحسينه (الجزء الأول)',
            en: 'Phase 4 • Building & Improving the Website (Part 1)',
          },
          headline: {
            ar: 'كيف نقسّم الصفحة إلى أجزاء بسيطة ونرتب ملفات المشروع؟',
            en: 'How Do We Break a Page into Simple Parts and Organize Files?',
          },
          subheadline: {
            ar: 'نتعلم كيف نحول تصميم الصفحة إلى أقسام وبطاقات منظمة يسهل بناؤها وتعديلها خطوة بخطوة.',
            en: 'Learn how to turn a page design into organized sections and cards that are easy to build and edit.',
          },
          tags: ['تقسيم الصفحة', 'الأقسام والبطاقات', 'ترتيب المجلدات', 'بناء منظم'],
        },
      },
    },
    {
      id: 's05-slide-02',
      sessionNumber: 5,
      slideNumber: 2,
      totalSlides: 10,
      type: 'concept',
      visualType: 'page-anatomy',
      realWorldExample: {
        ar: 'في موقع المقهى: الشريط العلوي قطعة، والقسم الترحيبي قطعة، وقسم المشروبات قطعة، والتذييل قطعة مستقلة.',
        en: 'In our café site: the Header is one part, the Hero is one part, the Drinks Menu is one part, and the Footer is one part.',
      },
      title: {
        ar: 'الفرق بين «القسم الكبير» و«القطعة المتكررة» داخله',
        en: 'The Difference Between a "Page Section" and a "Repeated Card"',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'تبسيط مفهومي (Section) و(Component) للمبتدئ دون تعقيد برمجي.',
        en: 'Simplify the concepts of Sections and Components for beginners without jargon.',
      },
      speakerNotes: {
        ar: 'نفّذ: أشر إلى الرسم التوضيحي. في البرمجة نسمي العرض الكامل على الشاشة «قسمًا (Section)»، ونسمي البطاقة أو الزر الذي يتكرر بنفس الشكل «مكونًا أو قالبًا (Component)».\nاسأل: في قسم قائمة المشروبات الذي يحتوي على 6 مشروبات، ما هي القطعة التي تتكرر 6 مرات؟ (بطاقة المشروب!).\nتحقق: تأكد أن الجميع يميز بين القسم الكامل والبطاقة المتكررة داخله.',
        en: 'Point to the diagram and explain full-width Sections vs. repeated Card components.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'الأقسام والقوالب المتكررة', en: 'Sections & Repeated Templates' },
          principle: {
            ar: 'الصفحة تتكون من أقسام أفقية، وداخل كل قسم قطع صغيرة متشابهة',
            en: 'A Page Has Horizontal Sections, and Inside Each Section Are Repeated Pieces',
          },
          explanation: {
            ar: 'عندما ننظر إلى أي صفحة ويب، نقسمها في ذهننا إلى نوعين من الأجزاء البسيطة:',
            en: 'When looking at any webpage, we divide it into two simple kinds of parts:',
          },
          bulletPoints: [
            {
              ar: '1. الأقسام الرئيسية (Sections): الطبقات الأفقية للصفحة مثل (القسم الترحيبي، قسم القائمة، التذييل).',
              en: '1. Main Sections: Horizontal layers of the page (Hero, Menu Section, Footer).',
            },
            {
              ar: '2. القطع المتكررة (Components): مثل «بطاقة المشروب» أو «زر واتساب» الذي يتكرر بنفس الشكل مع تغير النص فقط.',
              en: '2. Repeated Pieces (Components): Like a "Drink Card" or "WhatsApp Button" repeated with different text.',
            },
            {
              ar: '3. الفائدة لك: إذا أردت تعديل شكل بطاقة المنتج، تعدل القالب مرة واحدة فيتحدث شكل جميع البطاقات تلقائيًا!',
              en: '3. Your Benefit: Edit the card template once and all cards update automatically!',
            },
          ],
          architecturalRule: {
            ar: 'كل عنصر يتكرر أكثر من مرة في صفحتك يستحق أن يكون قالبًا موحدًا.',
            en: 'Anything that repeats more than once on your page deserves a single reusable template.',
          },
        },
      },
    },
    {
      id: 's05-slide-03',
      sessionNumber: 5,
      slideNumber: 3,
      totalSlides: 10,
      type: 'visual',
      visualType: 'components-lego',
      title: {
        ar: 'كيف نرتب مجلدات المشروع مثل خزانة ملابس منظمة؟',
        en: 'How Do We Organize Project Folders Like a Neat Closet?',
      },
      subtitle: {
        ar: 'ثلاثة أماكن رئيسية فقط تحتاج لمعرفتها داخل أي مشروع ويب',
        en: 'Only three main places you need to know inside any web project',
      },
      estimatedMinutes: 9,
      teachingGoal: {
        ar: 'إزالة رهبة شجرة الملفات لدى المبتدئ عبر تلخيصها في 3 مجلدات واضحة الوظيفة.',
        en: 'Remove beginner fear of file trees by summarizing them into 3 clear folders.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح للمتدربين أنه عندما ينشئون مشروعًا حديثًا (مثل Next.js)، سيجدون مجلدات جاهزة. لا يحتاج المبتدئ لحفظ كل ملف صغير، بل يكفيه معرفة هذه الأماكن الثلاثة الأساسية.\nاسأل: لو أردنا تغيير صورة القهوة، في أي مجلد نضع الصورة الجديدة؟ (في مجلد الصور `public`).\nتحقق: هذا الوضوح يجعل المتدرب يعرف أين يبحث وكيف يوجه الذكاء الاصطناعي.',
        en: 'Explain the 3 main folders: public (images), components (page parts), and app (pages).',
      },
      payload: {
        type: 'visual',
        data: {
          diagramType: 'grid',
          caption: {
            ar: 'معرفة مكان كل جزء تجعلك تطلب التعديلات من الذكاء الاصطناعي بدقة وسرعة.',
            en: 'Knowing where each part lives helps you request edits from AI quickly and accurately.',
          },
          nodes: [
            {
              id: 'folder-1',
              stepNumber: '01',
              badge: 'app/',
              title: { ar: 'مجلد الصفحات (Pages)', en: 'Pages Folder (app/)' },
              description: {
                ar: 'يحتوي على الصفحة الرئيسية للموقع وأي صفحات إضافية مثل «من نحن».',
                en: 'Holds the main homepage and any extra pages like "About Us".',
              },
            },
            {
              id: 'folder-2',
              stepNumber: '02',
              badge: 'components/',
              title: { ar: 'مجلد أجزاء الصفحة (Components)', en: 'Page Parts Folder (components/)' },
              description: {
                ar: 'نضع فيه الأقسام والقطع المرتبة مثل الشريط العلوي وبطاقة المنتج.',
                en: 'Holds organized sections and pieces like Header and ProductCard.',
              },
            },
            {
              id: 'folder-3',
              stepNumber: '03',
              badge: 'public/',
              title: { ar: 'مجلد الصور والشعار (Assets)', en: 'Images & Logo Folder (public/)' },
              description: {
                ar: 'نضع فيه شعار الموقع وصور المنتجات لتظهر بسرعة في الصفحة.',
                en: 'Holds the site logo and product photos so they load cleanly.',
              },
            },
          ],
        },
      },
    },
    {
      id: 's05-slide-04',
      sessionNumber: 5,
      slideNumber: 4,
      totalSlides: 10,
      type: 'comparison',
      visualType: 'cluttered-vs-clean',
      title: {
        ar: 'مقارنة: وضع الموقع كله في ملف واحد مقابل تقسيمه إلى أجزاء',
        en: 'Comparison: One Giant File vs. Clean Organized Parts',
      },
      subtitle: {
        ar: 'لماذا نحرص على فصل كل قسم في ملف واضح الاسم؟',
        en: 'Why we keep each section in its own clearly named file',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'إقناع المتدرب بأهمية تقسيم الصفحة إلى ملفات صغيرة واضحة الأسماء.',
        en: 'Show why splitting a page into small named files makes life much easier.',
      },
      speakerNotes: {
        ar: 'نفّذ: قارن بين العمودين. عندما نضع كل قسم في ملف واضح الاسم (مثل `HeroSection` للترحيب، و`MenuSection` للقائمة)، يصبح تعديل أي قسم آمنًا جدًا.\nاسأل: إذا أردت تعديل أوقات العمل في التذييل، أيهما أسهل: البحث وسط 800 سطر أم فتح ملف التذييل الصغير؟\nتحقق: التقسيم المنظم يحمي الموقع من الأخطاء.',
        en: 'Compare a single 800-line file with 4 clean, separate section files.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'مشروع مقسم إلى أجزاء واضحة (طريقتنا)',
            en: 'Project Divided into Clear Parts (Our Way)',
          },
          rightHeader: {
            ar: 'مشروع مكدس في ملف واحد طويل (طريقة عشوائية)',
            en: 'Everything Stuffed in One Long File (Messy Way)',
          },
          dimensions: [
            {
              dimension: { ar: 'معرفة مكان كل قسم', en: 'Finding a Section' },
              left: {
                ar: 'كل قسم له اسم واضح مباشر (الترحيب، القائمة، التذييل)',
                en: 'Every section has a clear direct name (Hero, Menu, Footer)',
              },
              right: {
                ar: 'تبحث طويلًا وسط مئات الأسطر المتداخلة لتجد عنوانًا واحدًا',
                en: 'Endless scrolling through hundreds of lines to find one title',
              },
            },
            {
              dimension: { ar: 'طلب التعديل من الذكاء الاصطناعي', en: 'Asking AI for Edits' },
              left: {
                ar: 'تقول له ببساطة: «عدّل قسم القائمة فقط» فينجزه في ثوانٍ',
                en: 'Simply say "Update the Menu section only" and it finishes in seconds',
              },
              right: {
                ar: 'يضطر الذكاء الاصطناعي لقراءة وإعادة كتابة الصفحة كلها في كل مرة',
                en: 'AI has to reread and rewrite the entire page every single time',
              },
            },
            {
              dimension: { ar: 'الأمان من الأخطاء', en: 'Safety from Bugs' },
              left: {
                ar: 'تعديل قسم البطاقات لا يمكن أن يفسد الشريط العلوي لأن كلًا منهما مستقل',
                en: 'Editing cards cannot break the header because they are separate',
              },
              right: {
                ar: 'أي خطأ صغير قد يوقف الصفحة كاملة عن العمل',
                en: 'One small mistake can break the entire page',
              },
            },
          ],
          balancedVerdict: {
            ar: 'تقسيم الصفحة إلى 4 أو 5 أجزاء واضحة الأسماء يجعل بناء الموقع وتعديله متعة حقيقية.',
            en: 'Splitting the page into 4–5 clearly named parts makes building and editing a breeze.',
          },
        },
      },
    },
    {
      id: 's05-slide-05',
      sessionNumber: 5,
      slideNumber: 5,
      totalSlides: 10,
      type: 'reveal',
      visualType: 'page-anatomy',
      title: {
        ar: 'كيف نسمي أجزاء صفحتنا بطريقة يفهمها الجميع؟',
        en: 'How Do We Name Our Page Parts Clearly?',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'تعليم المتدرب الأسماء القياسية الأربعة لأجزاء الصفحة التي يفهمها أي مصمم أو أداة ذكاء اصطناعي فورًا.',
        en: 'Teach the 4 standard section names that every designer and AI tool understands immediately.',
      },
      speakerNotes: {
        ar: 'نفّذ: استعرض الأسماء الأربعة مع المتدربين. عندما يستخدم المتدرب هذه الكلمات الأربع مع أي أداة ذكاء اصطناعي، يفهمه الذكاء الاصطناعي بدقة 100%.\nاسأل: ماذا نسمي الجزء العلوي الذي يحتوي على الشعار وزر التواصل السريع؟ (`Navbar` أو الشريط العلوي).\nتحقق: تأكد من ربط كل اسم بمكانه في رسم الصفحة على اليسار.',
        en: 'Walk through the 4 universal section names: Navbar/Header, HeroSection, Cards/MenuSection, Footer.',
      },
      payload: {
        type: 'reveal',
        data: {
          premise: {
            ar: 'هذه الأسماء الأربعة البسيطة هي اللغة المشتركة لبناء أي صفحة ويب حديثة:',
            en: 'These 4 simple names are the shared language for building any modern webpage:',
          },
          steps: [
            {
              number: '01',
              title: { ar: 'الشريط العلوي (Navbar / Header)', en: 'Top Bar (Navbar / Header)' },
              description: {
                ar: 'يظهر في أعلى الصفحة ويحمل اسم الموقع وروابط الأقسام وزر تواصل سريع.',
                en: 'Sits at the top with the site name, section links, and a quick contact button.',
              },
            },
            {
              number: '02',
              title: { ar: 'القسم الترحيبي (Hero Section)', en: 'Welcome Banner (Hero Section)' },
              description: {
                ar: 'أول قسم كبير يراه الزائر، وفيه العنوان الرئيسي ووصف الفائدة وزر الطلب الأساسي.',
                en: 'The first big section visitors see, holding the main headline, benefit, and primary button.',
              },
            },
            {
              number: '03',
              title: { ar: 'قسم البطاقات والعرض (Cards / Services Section)', en: 'Cards & Offer Section' },
              description: {
                ar: 'القسم الذي يعرض المنتجات أو الخدمات مرتبة باستخدام قالب «بطاقة العنصر».',
                en: 'Displays products or services neatly using a reusable Card template.',
              },
            },
            {
              number: '04',
              title: { ar: 'التذييل ومعلومات التواصل (Footer)', en: 'Bottom Info Bar (Footer)' },
              description: {
                ar: 'خاتمة الصفحة في الأسفل وتضم العنوان وساعات العمل ورابط واتساب المباشر.',
                en: 'Closes the page at the bottom with address, working hours, and WhatsApp link.',
              },
            },
          ],
        },
      },
    },
    {
      id: 's05-slide-06',
      sessionNumber: 5,
      slideNumber: 6,
      totalSlides: 10,
      type: 'question',
      visualType: 'components-lego',
      title: {
        ar: 'سؤال تفاعلي: كم قالب بطاقة نحتاج؟',
        en: 'Interactive Question: How Many Card Templates Do We Need?',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'التأكد من فهم المتدرب لفكرة «قالب واحد يعرض بيانات متعددة».',
        en: 'Verify that trainees grasp the "one template, multiple items" concept.',
      },
      speakerNotes: {
        ar: 'نفّذ: اطرح السؤال في الشات.\nاسأل: لو كان لدى متجر عطور 12 عطرًا يريد عرضها في الصفحة، هل نصمم 12 قالب بطاقة مختلفًا أم قالب بطاقة واحد نكرره بالبيانات؟\nتحقق: قالب واحد موحد (`ProductCard`) يعرض الـ 12 عطرًا بتناسق وأناقة!',
        en: 'Ask whether a store with 12 perfumes needs 12 different card designs or 1 reusable card template.',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'إذا كان موقعك يعرض 6 خدمات أو منتجات، كم «قالب بطاقة» تحتاج أن تصمم؟',
            en: 'If your website displays 6 services or products, how many "card templates" do you need to design?',
          },
          contextHint: {
            ar: 'انظر إلى الرسم التوضيحي على اليسار وفكر في سهولة التعديل.',
            en: 'Look at the illustration on the left and think about ease of editing.',
          },
          promptToClass: {
            ar: 'اكتب إجابتك في شات Zoom 💬',
            en: 'Type your answer in Zoom chat 💬',
          },
          expectedAnswers: [
            {
              ar: 'قالب بطاقة واحد فقط! نصممه مرة واحدة ثم نعرض داخله بيانات المنتجات الستة.',
              en: 'Just ONE card template! Design it once and display the 6 products inside it.',
            },
            {
              ar: 'بهذه الطريقة نضمن أن جميع البطاقات لها نفس الحجم والأناقة على الهاتف والكمبيوتر.',
              en: 'This guarantees all cards have the exact same clean look on phone and desktop.',
            },
          ],
        },
      },
    },
    {
      id: 's05-slide-07',
      sessionNumber: 5,
      slideNumber: 7,
      totalSlides: 10,
      type: 'demo',
      visualType: 'components-lego',
      title: {
        ar: 'تطبيق عملي: تقسيم موقع المقهى إلى 4 أقسام وقالب بطاقة موحد',
        en: 'Live Demo: Organizing the Café Site into 4 Sections & 1 Card Template',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'عرض عملي لكيفية طلب تقسيم الصفحة من الذكاء الاصطناعي إلى أجزاء مرتبة وواضحة.',
        en: 'Demonstrate asking AI to structure the café homepage into clean, separate section components.',
      },
      speakerNotes: {
        ar: 'نفّذ: اعرض أمام المتدربين كيف نطلب من المساعد الذكي تنظيم صفحة المقهى في 4 أقسام واضحة مع قالب بطاقة مشروب موحد.\nاسأل: انظروا كيف أصبح كل قسم مرتبًا وواضحًا؛ لو أردنا الآن تغيير سعر مشروب أو إضافة مشروب سابع، كم ثانية سيستغرق الأمر؟\nتحقق: ثوانٍ معدودة لأن البيانات مفصولة ومرتبة!',
        en: 'Show how clean the project becomes when organized into 4 sections and 1 drink card template.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'تنظيم الصفحة الرئيسية للمقهى في أجزاء واضحة يسهل تطويرها',
            en: 'Organize the café homepage into clean, easy-to-maintain parts',
          },
          instructorSteps: [
            {
              ar: 'نحدد الأقسام الأربعة: الشريط العلوي، القسم الترحيبي، قسم قائمة المشروبات، والتذييل.',
              en: 'Identify the 4 sections: Header, Hero, Drinks Menu, and Footer.',
            },
            {
              ar: 'نحدد القالب المتكرر: «بطاقة المشروب» التي تستقبل (الاسم، الوصف القصير، السعر).',
              en: 'Define the reusable template: "Drink Card" receiving (Name, Short Description, Price).',
            },
            {
              ar: 'نطلب من الذكاء الاصطناعي ترتيب الصفحة بهذه الهيكلة النظيفة دون تغيير الشكل البصري.',
              en: 'Ask AI to structure the page with these clean parts while preserving the visual look.',
            },
          ],
          promptToUse:
            'نظّم الصفحة الرئيسية للمقهى بحيث تتكون من 4 أقسام واضحة ومرتبة (الشريط العلوي، القسم الترحيبي، قسم قائمة المشروبات، والتذييل)، واستخدم قالب بطاقة موحد لعرض المشروبات الستة مع الحفاظ على التصميم والألوان الحالية.',
          expectedOutput: {
            ar: 'مشروع منظم ونظيف يسهل قراءته وتعديل أي قسم فيه بسرعة وأمان.',
            en: 'A clean, organized project where any section can be edited quickly and safely.',
          },
        },
      },
    },
    {
      id: 's05-slide-08',
      sessionNumber: 5,
      slideNumber: 8,
      totalSlides: 10,
      type: 'challenge',
      visualType: 'page-anatomy',
      title: {
        ar: 'نشاطك العملي: قسّم صفحتك وحدد قالب البطاقة المتكرر فيها',
        en: 'Your Activity: Split Your Page & Define Your Reusable Card Template',
      },
      estimatedMinutes: 18,
      teachingGoal: {
        ar: 'تمكين المتدرب من كتابة قائمة الأقسام الأربعة لموقعه وتحديد الحقول الثلاثة لبطاقته المتكررة.',
        en: 'Have each trainee list their 4 page sections and define the 3 fields of their repeated card.',
      },
      speakerNotes: {
        ar: 'نفّذ: شغّل المؤقت لمدة 18 دقيقة. اطلب من كل متدرب تسمية الأقسام الأربعة لموقعه وتحديد ماذا سيظهر داخل البطاقة الواحدة المتكررة (مثلاً في عيادة: اسم الخدمة + مدة الجلسة + زر احجز عبر واتساب).\nاسأل: ما المعلومات الثلاث التي ستظهر داخل كل بطاقة في موقعك؟\nتحقق: راجع إجابات المتدربين في الشات وشجعهم.',
        en: 'Run the 18-minute timer and review trainee section and card breakdowns.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'اكتب تقسيم صفحتك الرئيسية ومحتوى قالب البطاقة الموحد',
            en: 'Write Your Homepage Breakdown and Reusable Card Fields',
          },
          durationMinutes: 18,
          objective: {
            ar: 'تجهيز الهيكل المنظم لموقعك قبل البدء ببناء وتنسيق الأقسام في الجلسة القادمة.',
            en: 'Prepare the organized structure of your website before building sections in Session 06.',
          },
          instructions: [
            {
              ar: '1. اكتب أسماء الأقسام الأربعة في صفحتك الرئيسية بالترتيب.',
              en: '1. List the names of the 4 sections on your homepage in order.',
            },
            {
              ar: '2. حدد ما هي «البطاقة المتكررة» في موقعك (بطاقة منتج، بطاقة خدمة، أم بطاقة عمل سابق؟).',
              en: '2. Identify the repeated card on your site (product card, service card, or portfolio card).',
            },
            {
              ar: '3. اكتب العناصر الثلاثة التي ستظهر داخل كل بطاقة (مثل: العنوان + السعر + زر الطلب).',
              en: '3. List the 3 items shown inside each card (e.g., Title + Price + Order button).',
            },
          ],
          deliverable: {
            ar: 'شارك تقسيم صفحتك ومحتوى البطاقة في شات Zoom أو أرسله عبر واتساب من صفحة الجلسة.',
            en: 'Share your page breakdown and card fields in Zoom chat or via WhatsApp.',
          },
        },
      },
    },
    {
      id: 's05-slide-09',
      sessionNumber: 5,
      slideNumber: 9,
      totalSlides: 10,
      type: 'project',
      visualType: 'components-lego',
      title: {
        ar: 'الخطوة الخامسة في مشروعك: هيكل أجزاء الموقع المنظم',
        en: 'Step 5 in Your Project: Organized Website Parts Structure',
      },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'ربط تقسيم الأجزاء بالبناء العملي لصفحة HTML/CSS في الجلسة السادسة.',
        en: 'Connect today’s component breakdown to building HTML/CSS in Session 06.',
      },
      speakerNotes: {
        ar: 'نفّذ: وضح للمتدربين أن مشروعهم أصبح الآن مرتبًا كخريطة بناء هندسية واضحة وبسيطة.\nاسأل: هل أنتم مستعدون لرؤية كيف تُبنى هذه الأقسام وتُنسق للهاتف والكمبيوتر في الجلسة القادمة؟\nتحقق: هذا ما سنفعله في الجلسة السادسة!',
        en: 'Show how this structure sets up Session 06 HTML/CSS layout building.',
      },
      payload: {
        type: 'project',
        data: {
          stepNumber: '05',
          phaseName: {
            ar: 'المرحلة الرابعة: تقسيم الصفحة وتجهيز المشروع',
            en: 'Phase 4: Page Breakdown & Project Setup',
          },
          whatWeBuildNow: {
            ar: 'هيكل الأقسام الأربعة + قالب البطاقة الموحد للمشروع',
            en: '4-Section Page Structure + Unified Card Template',
          },
          deliverables: [
            {
              ar: 'تقسيم الصفحة الرئيسية إلى 4 أقسام مستقلة وواضحة',
              en: 'Homepage divided into 4 clear, independent sections',
            },
            {
              ar: 'تحديد قالب البطاقة الموحد والحقول التي يعرضها',
              en: 'Defined reusable card template and its display fields',
            },
            {
              ar: 'تنظيم مجلد الصور والملفات الأساسية للمشروع',
              en: 'Organized images folder and core project files',
            },
          ],
          connectionToFinalProject: {
            ar: 'هذا التنظيم النظيف سيجعل بناء التنسيق في الجلسة القادمة وإضافة التفاعل لاحقًا سهلًا ومباشرًا.',
            en: 'This clean organization makes styling in Session 06 and adding interactivity later effortless.',
          },
        },
      },
    },
    {
      id: 's05-slide-10',
      sessionNumber: 5,
      slideNumber: 10,
      totalSlides: 10,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الجلسة الخامسة في 3 نقاط',
        en: 'Session 05 Summary in 3 Points',
      },
      estimatedMinutes: 3,
      teachingGoal: {
        ar: 'تثبيت مفاهيم التقسيم والتنظيم والتمهيد للجلسة السادسة.',
        en: 'Reinforce page decomposition and folder organization and preview Session 06.',
      },
      speakerNotes: {
        ar: 'نفّذ: اختم الجلسة بمراجعة النقاط الثلاث وتذكير المتدربين بإرسال النشاط عبر واتساب.\nاسأل: ما الفائدة الأكبر من تصميم قالب بطاقة واحد للعناصر المتكررة؟\nتحقق: توفير الوقت وضمان تناسق الشكل في كل الموقع.',
        en: 'Review the 3 takeaways and preview Session 06.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: {
                ar: 'فكّك الصفحة الكبيرة إلى أقسام صغيرة',
                en: 'Break Big Pages into Small Sections',
              },
              description: {
                ar: 'التعامل مع 4 أقسام واضحة أسهل وأضمن بكثير من التعامل مع صفحة واحدة ضخمة.',
                en: 'Working with 4 clear sections is much easier and safer than one giant page.',
              },
            },
            {
              number: '02',
              title: {
                ar: 'اصنع قالبًا واحدًا للعناصر المتكررة',
                en: 'Create One Template for Repeated Items',
              },
              description: {
                ar: 'بطاقة المنتج أو الخدمة تُصمم مرة واحدة ثم تُملأ بالبيانات المختلفة.',
                en: 'A product or service card is designed once and filled with different items.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'ضع كل شيء في مجلده المناسب',
                en: 'Keep Everything in Its Right Folder',
              },
              description: {
                ar: 'الصفحات في مجلد الصفحات، والأجزاء في مجلد الأجزاء، والصور في مجلد الصور.',
                en: 'Pages in the pages folder, parts in components, and images in public.',
              },
            },
          ],
          coreMotto: {
            ar: 'الخطوة القادمة في الجلسة 06: كيف نبني الصفحة الأساسية وننسقها لتعمل بجمال على الهاتف والكمبيوتر؟',
            en: 'Up Next in Session 06: How to build and style the core page for both phone and desktop.',
          },
        },
      },
    },
  ],
};
