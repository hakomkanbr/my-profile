import { PresentationSession } from '@/types';

export const SESSION_06: PresentationSession = {
  id: 'session-06',
  number: 6,
  slug: 'session-06',
  title: {
    ar: 'بناء الصفحة الأساسية وتنسيقها للهاتف والكمبيوتر (HTML & CSS)',
    en: 'Building the Core Page & Styling It for Phone and Desktop (HTML & CSS)',
  },
  subtitle: {
    ar: 'كيف نبني هيكل الصفحة وعناوينها، وننسق ألوانها ومسافاتها لتظهر بشكل مريح على شاشة الهاتف والكمبيوتر؟',
    en: 'How to build the page structure and style its colors, spacing, and cards for mobile and desktop',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من فهم دور الهيكل (HTML) والتنسيق (CSS) ببساطة، وبناء قسم الترحيب وشبكة البطاقات المتجاوبة مع شاشة الهاتف والكمبيوتر.',
    en: 'Understand HTML structure and CSS styling simply, and build a responsive Hero and Card Grid for mobile and desktop.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 05 وتحديد الأقسام الأربعة وقالب البطاقة الموحد',
      en: 'Completion of Session 05 with 4 defined sections and a card template',
    },
  ],
  objectives: [
    {
      ar: 'فهم الفرق البسيط بين هيكل الصفحة (HTML) ومظهرها البصري (CSS)',
      en: 'Understand the simple difference between page structure (HTML) and visual styling (CSS)',
    },
    {
      ar: 'استخدام أسماء الأقسام الواضحة (رأس الصفحة، المحتوى الرئيسي، القسم، التذييل) لترتيب الموقع',
      en: 'Use clear semantic section tags (header, main, section, footer) to organize the site',
    },
    {
      ar: 'ضبط المسافات المريحة وترتيب البطاقات بجانب بعضها على الكمبيوتر وفوق بعضها على الهاتف',
      en: 'Set comfortable spacing and arrange cards side-by-side on desktop and stacked on mobile',
    },
    {
      ar: 'اختبار شكل الصفحة الرئيسية على مقاس شاشة الهاتف والتأكد من وضوح القراءة والأزرار',
      en: 'Test the homepage on mobile screen sizes and verify readable text and thumb-friendly buttons',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:15',
      durationMinutes: 15,
      label: { ar: 'تشبيه البناء: الهيكل الأساسي (HTML) مقابل الدهان والديكور (CSS)', en: 'Building analogy: Structure (HTML) vs. Paint & Decor (CSS)' },
      type: 'context',
    },
    {
      timeRange: '00:15 – 00:35',
      durationMinutes: 20,
      label: { ar: 'كيف نكتب أقسام الصفحة بوضوح وكيف نضبط المسافات المريحة؟', en: 'Clear page sections and comfortable spacing' },
      type: 'concept',
    },
    {
      timeRange: '00:35 – 00:50',
      durationMinutes: 15,
      label: { ar: 'التصميم المتجاوب: كيف تتكيف البطاقات بين شاشة الكمبيوتر وشاشة الهاتف؟', en: 'Responsive design: Adapting cards from desktop to phone' },
      type: 'concept',
    },
    {
      timeRange: '00:50 – 01:05',
      durationMinutes: 15,
      label: { ar: 'تطبيق عملي: بناء وتنسيق بطاقات مشروبات المقهى للهاتف والكمبيوتر', en: 'Live Demo: Building & styling responsive Café drink cards' },
      type: 'demo',
    },
    {
      timeRange: '01:05 – 01:20',
      durationMinutes: 15,
      label: { ar: 'نشاط المتدرب: بناء وتنسيق قسم البطاقات في موقعه واختباره على الهاتف', en: 'Trainee Activity: Build & test your responsive card section' },
      type: 'practice',
    },
    {
      timeRange: '01:20 – 01:30',
      durationMinutes: 10,
      label: { ar: 'مراجعة شاشات الهواتف للمتدربين وخلاصة الجلسة السادسة', en: 'Review mobile screens & Session 06 summary' },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'بناء وتنسيق القسم الترحيبي وشبكة البطاقات المتجاوبة مع شاشة الهاتف والكمبيوتر.',
    en: 'Build and style the responsive Hero section and Card Grid for phone and desktop.',
  },
  aiRole: {
    ar: 'منفذ ومراجع للتنسيق يضبط المسافات وتجاوب البطاقات على شاشات الهواتف بدقة.',
    en: 'Layout builder and reviewer ensuring clean spacing and mobile responsiveness.',
  },
  marketConnection: {
    ar: 'أكثر من 80% من الزوار يفتحون المواقع من هواتفهم؛ لذا فإن وضوح موقعك على الهاتف هو سر نجاحه.',
    en: 'Most visitors open websites on their phones; a clean mobile view is essential for success.',
  },
  startScreen: {
    badge: 'الجلسة 06 من 12 • بناء الموقع وتحسينه (2)',
    headline: {
      ar: 'بناء الصفحة الأساسية وتنسيقها للهاتف والكمبيوتر',
      en: 'Building the Core Page & Styling It for Phone and Desktop',
    },
    description: {
      ar: 'نتعرف اليوم ببساطة على اللغتين اللتين تُبنى بهما كل صفحة ويب في العالم (HTML و CSS)، وكيف نجعل موقعنا مريحًا على الكمبيوتر والهاتف.',
      en: 'Understand HTML and CSS simply and learn how to make your website look great on both desktop and phone screens.',
    },
    sessionGoal: {
      ar: 'بناء وتنسيق القسم الترحيبي وقسم البطاقات في موقعك والتأكد من تجاوبهما مع الهاتف.',
      en: 'Build and style your Hero and Card Grid sections and verify their mobile responsiveness.',
    },
  },
  endScreen: {
    headline: {
      ar: 'ممتاز! أصبحت صفحتك الأساسية مبنية ومتناسقة على الهاتف والكمبيوتر',
      en: 'Excellent! Your Core Page Is Now Built and Responsive on All Devices',
    },
    keyRecap: [
      {
        ar: 'HTML يحدد عناصر الصفحة (العنوان، النص، الزر)، و CSS يمنحها الألوان والمسافات والترتيب.',
        en: 'HTML defines page elements (headline, text, button); CSS gives them colors, spacing, and layout.',
      },
      {
        ar: 'المسافات الداخلية والخارجية المريحة حول النصوص هي ما يجعل البطاقة سهلة القراءة.',
        en: 'Comfortable padding and spacing around text make cards easy and pleasant to read.',
      },
      {
        ar: 'التصميم المتجاوب يعرض 3 بطاقات في الصف على الكمبيوتر، وبطاقة واحدة واضحة في الصف على الهاتف.',
        en: 'Responsive design shows 3 cards per row on desktop and 1 clear card per row on mobile.',
      },
    ],
    nextSessionNumber: '07',
    nextSessionTitle: {
      ar: 'إضافة التفاعل الحي وتسهيل تجربة الزائر (JavaScript)',
      en: 'Adding Live Interaction & Making Visitor Experience Easier (JavaScript)',
    },
  },
  slides: [
    {
      id: 's06-slide-01',
      sessionNumber: 6,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      visualType: 'html-css-building',
      realWorldExample: {
        ar: 'عند بناء مقهى حقيقي: الجدران والأبواب والطاولات هي الهيكل (HTML)، أما لون الطلاء والإضاءة الدافئة وترتيب الكراسي فهو التنسيق (CSS).',
        en: 'When building a real café: walls and tables are the structure (HTML), while warm paint, lighting, and chair arrangement are styling (CSS).',
      },
      title: {
        ar: 'بناء الصفحة وتنسيقها للهاتف والكمبيوتر',
        en: 'Building & Styling the Page for Phone and Desktop',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'تقديم HTML و CSS للمبتدئ من خلال تشبيه البناء والديكور البسيط دون مصطلحات معقدة.',
        en: 'Introduce HTML and CSS using the simple building structure vs. interior design analogy.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح التشبيه الموجود في الرسم التوضيحي. لا نريد من المتدرب أن يحفظ مئات الأكواد غيبًا؛ نريد منه أن يفهم وظيفة كل جزء حتى يقود الذكاء الاصطناعي بوعي.\nاسأل: لو أردنا تغيير نص العنوان، هل نعدل في الهيكل (HTML) أم في التنسيق (CSS)؟ ولو أردنا تغيير لون الزر إلى الأخضر؟\nتحقق: النص في الهيكل (HTML)، واللون في التنسيق (CSS)!',
        en: 'Explain the structure (HTML) vs. appearance (CSS) analogy in the illustration.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '06',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'المرحلة الرابعة • بناء الموقع وتحسينه (الجزء الثاني)',
            en: 'Phase 4 • Building & Improving the Website (Part 2)',
          },
          headline: {
            ar: 'كيف نبني هيكل الصفحة وننسق مظهرها للهاتف والكمبيوتر؟',
            en: 'How Do We Build the Page Structure and Style It for Phone & Desktop?',
          },
          subheadline: {
            ar: 'نفهم ببساطة دور الهيكل (HTML) والتنسيق البصري (CSS)، ونتأكد من ظهور موقعنا بشكل مريح على كل الشاشات.',
            en: 'Simply understand HTML structure and CSS styling to make your website look great on every screen.',
          },
          tags: ['هيكل الصفحة HTML', 'تنسيق المظهر CSS', 'شاشة الهاتف والكمبيوتر', 'مسافات مريحة'],
        },
      },
    },
    {
      id: 's06-slide-02',
      sessionNumber: 6,
      slideNumber: 2,
      totalSlides: 10,
      type: 'concept',
      visualType: 'html-css-building',
      realWorldExample: {
        ar: 'وضع ملصق واضح على كل صندوق في المنزل (صندوق الكتب، صندوق الملابس) يساعد أي شخص على معرفة ما بداخله فورًا.',
        en: 'Labeling every box at home ("Books", "Clothes") helps anyone know what is inside immediately.',
      },
      title: {
        ar: 'كيف يرتب HTML أقسام الصفحة بأسماء واضحة؟',
        en: 'How HTML Organizes Page Sections with Clear Names',
      },
      estimatedMinutes: 9,
      teachingGoal: {
        ar: 'شرح الوسوم الدلالية الأربعة (`header`, `main`, `section`, `footer`) بلغة بسيطة بوصفها «بطاقات تعريف لأقسام الصفحة».',
        en: 'Explain semantic HTML tags (header, main, section, footer) simply as clear labels for page parts.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح للمتدربين أن محركات البحث مثل Google وقارئات الشاشة تفهم الصفحة بشكل أفضل عندما نضع كل قسم في صندوق يحمل اسمه الصحيح (`header` للشريط العلوي، `main` للمحتوى الرئيسي، `section` لكل قسم، `footer` للتذييل) بدل وضع كل شيء في صناديق مجهولة الاسم (`div`).\nاسأل: لماذا يحب محرك بحث Google الصفحات المرتبة بهذه الأسماء الواضحة؟\nتحقق: لأنها تخبره فورًا أين العنوان الرئيسي وأين محتوى الصفحة المهم!',
        en: 'Explain why clear tags like header, main, section, and footer help Google and screen readers.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'هيكل واضح ومرتب', en: 'Clear Organized Structure' },
          principle: {
            ar: 'نضع كل قسم من الصفحة داخل صندوق يحمل اسمه الحقيقي',
            en: 'Place Every Page Part Inside a Box with Its True Name',
          },
          explanation: {
            ar: 'عندما يكتب الذكاء الاصطناعي كود الصفحة، نتأكد أنه يستخدم الأسماء الواضحة للأقسام حتى يفهمها المتصفح ومحرك بحث Google بسهولة:',
            en: 'When AI writes page code, we make sure it uses clear section names so browsers and Google understand it:',
          },
          bulletPoints: [
            {
              ar: '1. رأس الصفحة (<header>): يضم الشعار والروابط العلوية.',
              en: '1. Page Header (<header>): Holds the logo and top links.',
            },
            {
              ar: '2. المحتوى والأقسام (<main> و <section>): يضم القسم الترحيبي وقسم البطاقات.',
              en: '2. Main Content & Sections (<main> & <section>): Holds the Hero and Card Grid.',
            },
            {
              ar: '3. تذييل الصفحة (<footer>): يضم العنوان وساعات العمل في أسفل الموقع.',
              en: '3. Page Footer (<footer>): Holds the address and hours at the bottom.',
            },
          ],
          architecturalRule: {
            ar: 'تسمية أقسام الصفحة بأسمائها الصحيحة تجعل موقعك صديقًا لمحركات البحث منذ اليوم الأول.',
            en: 'Using clear section tags makes your website search-engine friendly from day one.',
          },
        },
      },
    },
    {
      id: 's06-slide-03',
      sessionNumber: 6,
      slideNumber: 3,
      totalSlides: 10,
      type: 'code',
      visualType: 'html-css-building',
      title: {
        ar: 'نظرة بسيطة: كيف تبدو بطاقة المشروب في الكود؟',
        en: 'A Simple Look: What Does a Drink Card Look Like in Code?',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'كسر حاجز الرهبة من رؤية الكود عبر عرض 8 أسطر بسيطة جدًا وواضحة تمثل بطاقة مشروب واحدة.',
        en: 'Remove fear of code by showing an 8-line, crystal-clear snippet of a single drink card.',
      },
      speakerNotes: {
        ar: 'نفّذ: اعرض هذا المثال القصير جدًا وطمئن المتدربين: لا نطلب منكم كتابته حرفيًا من الصفر، بل نريدكم أن تنظروا إليه فتعرفوا أين عنوان المشروب وأين السعر وأين زر الطلب!\nاسأل: لو أردنا تغيير السعر من 18 ر.س إلى 20 ر.س في هذا الكود، هل يستطيع أي واحد منكم إيجاده في ثانية؟\nتحقق: هذا يمنح المتدرب ثقة كبيرة بأنه يفهم ما يكتبه الذكاء الاصطناعي.',
        en: 'Walk through the short snippet so trainees see how easy it is to read title, price, and button.',
      },
      payload: {
        type: 'code',
        data: {
          language: 'HTML + Tailwind CSS',
          codeSnippet: `<article class="p-6 rounded-2xl border bg-white shadow-sm">
  <h3 class="text-xl font-bold">قهوة لاتيه ساخنة</h3>
  <p class="text-sm text-gray-600 mt-2">اسبريسو غني مع حليب مبخر ناعم</p>
  <div class="mt-4 flex items-center justify-between">
    <span class="font-bold text-emerald-600">18 ر.س</span>
    <a href="https://wa.me/905382015072" class="px-4 py-2 rounded-xl bg-emerald-600 text-white">
      اطلب عبر واتساب
    </a>
  </div>
</article>`,
          what: {
            ar: 'بطاقة منتج واحدة تحتوي على: عنوان المشروب (h3)، وصف قصير (p)، السعر، وزر طلب يفتح واتساب.',
            en: 'A single product card holding the drink title (h3), short description (p), price, and WhatsApp button.',
          },
          why: {
            ar: 'كتابة البطاقة بهذا الوضوح تجعل قراءتها وتعديل النص أو السعر أو اللون سهلًا جدًا في أي وقت.',
            en: 'Writing the card this clearly makes reading and updating the text, price, or color effortless.',
          },
          when: {
            ar: 'نستخدم هذا الهيكل البسيط لكل بطاقة خدمة أو منتج في موقعنا.',
            en: 'We use this simple structure for every service or product card on our website.',
          },
        },
      },
    },
    {
      id: 's06-slide-04',
      sessionNumber: 6,
      slideNumber: 4,
      totalSlides: 10,
      type: 'visual',
      visualType: 'responsive-devices',
      title: {
        ar: 'التصميم المتجاوب: كيف يتكيف موقعك مع الكمبيوتر والهاتف؟',
        en: 'Responsive Design: How Your Site Adapts to Desktop & Phone',
      },
      subtitle: {
        ar: 'نفس البطاقات تترتب في 3 أعمدة على الشاشة الكبيرة، وفي عمود واحد مريح على شاشة الهاتف',
        en: 'The same cards arrange in 3 columns on large screens and 1 clean column on phones',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'توضيح مفهوم التجاوب (Responsive Grid) بصريًا للمبتدئ.',
        en: 'Visually explain responsive grid layouts across desktop and mobile.',
      },
      speakerNotes: {
        ar: 'نفّذ: أشر إلى الرسم التوضيحي المقارن بين شاشة الكمبيوتر وشاشة الهاتف. على الكمبيوتر لدينا مساحة عريضة فنضع 3 بطاقات بجانب بعضها (Grid)، أما على الهاتف فالشاشة ضيقة فنضع كل بطاقة في سطر كامل لوحدها حتى يبقى الخط كبيرًا ومقروءًا.\nاسأل: ماذا يحدث لو حاولنا حشر 3 بطاقات بجانب بعضها على شاشة هاتف صغير؟\nتحقق: سيصبح الخط صغيرًا جدًا ولا يمكن قراءته! لذلك نطلب دائمًا «تصميمًا متجاوبًا مع الهاتف أولًا».',
        en: 'Point to the desktop vs. mobile visual comparison and explain 3 columns vs. 1 column.',
      },
      payload: {
        type: 'visual',
        data: {
          diagramType: 'flow',
          caption: {
            ar: 'القاعدة الذهبية: افحص موقعك دائمًا على مقاس الهاتف لأن معظم زوارك يتصفحون من هواتفهم.',
            en: 'Golden Rule: Always check your website on mobile view because most visitors browse on phones.',
          },
          nodes: [
            {
              id: 'resp-1',
              stepNumber: '01',
              badge: 'الهاتف',
              title: { ar: 'شاشة الهاتف (بطاقة واحدة في الصف)', en: 'Phone Screen (1 Card per Row)' },
              description: { ar: 'تظهر البطاقات مرتبة فوق بعضها بخط واضح وزر كبير يسهل لمسه بالإبهام.', en: 'Cards stack cleanly with readable text and thumb-friendly buttons.' },
            },
            {
              id: 'resp-2',
              stepNumber: '02',
              badge: 'التابلت',
              title: { ar: 'الشاشة المتوسطة (بطاقتان في الصف)', en: 'Tablet Screen (2 Cards per Row)' },
              description: { ar: 'عندما تتسع الشاشة قليلًا، تصطف كل بطاقتين بجانب بعضهما تلقائيًا.', en: 'On medium screens, cards automatically arrange two per row.' },
            },
            {
              id: 'resp-3',
              stepNumber: '03',
              badge: 'الكمبيوتر',
              title: { ar: 'شاشة الكمبيوتر (3 بطاقات في الصف)', en: 'Desktop Screen (3 Cards per Row)' },
              description: { ar: 'تستفيد الصفحة من العرض الكبير لتعرض 3 بطاقات متجاورة بتناسق أنيق.', en: 'On wide screens, 3 cards sit side by side cleanly.' },
            },
          ],
        },
      },
    },
    {
      id: 's06-slide-05',
      sessionNumber: 6,
      slideNumber: 5,
      totalSlides: 10,
      type: 'comparison',
      visualType: 'before-after-ui',
      title: {
        ar: 'سر الأناقة البصرية: المسافات المريحة حول العناصر',
        en: 'The Secret of Visual Elegance: Comfortable Spacing',
      },
      subtitle: {
        ar: 'كيف تحول المسافات الداخلية والخارجية بطاقة عادية إلى بطاقة احترافية؟',
        en: 'How inner padding and outer spacing turn a plain card into a professional one',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'شرح فكرة الهوامش والمسافات (`Padding` و `Margin`) بلغة بصرية بسيطة.',
        en: 'Explain inner padding and outer spacing visually without dry CSS box-model jargon.',
      },
      speakerNotes: {
        ar: 'نفّذ: قارن بين البطاقة الضيقة والبطاقة المريحة. في CSS نسمي المسافة داخل إطار البطاقة (`Padding` أو التنفس الداخلي)، والمسافة بين بطاقة وأخرى (`Gap / Margin` أو التباعد الخارجي).\nاسأل: لماذا نشعر بالراحة عندما ندخل صالة واسعة ومرتبة الأثاث مقارنة بغرفة مكدسة؟\nتحقق: المسافات البيضاء المريحة هي ما يمنح الموقع المظهر الفاخر.',
        en: 'Explain inner breathing room (padding) and space between cards (gap/margin).',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'بطاقة بمسافات مريحة ومنظمة',
            en: 'Card with Comfortable Spacing',
          },
          rightHeader: {
            ar: 'بطاقة ضيقة وملتصقة الحواف',
            en: 'Cramped Card with Tight Edges',
          },
          dimensions: [
            {
              dimension: { ar: 'المسافة داخل البطاقة', en: 'Space Inside the Card' },
              left: {
                ar: 'مسافة مريحة تفصل النص والزر عن حدود البطاقة الخارجية',
                en: 'Comfortable breathing room separating text from card borders',
              },
              right: {
                ar: 'النص ملتصق بحافة الإطار مما يجعل القراءة متعبة للعين',
                en: 'Text touches the border edge, making reading tiring',
              },
            },
            {
              dimension: { ar: 'المسافة بين البطاقات', en: 'Space Between Cards' },
              left: {
                ar: 'فراغ واضح يفصل كل منتج عن المنتج المجاور له',
                en: 'Clear gap separating each product card from the next',
              },
              right: {
                ar: 'البطاقات متلاصقة ببعضها كأنها كتلة واحدة مزدحمة',
                en: 'Cards stuck together like one crowded block',
              },
            },
            {
              dimension: { ar: 'حجم زر الطلب', en: 'Order Button Size' },
              left: {
                ar: 'زر واسع ومريح يسهل لمسه بالإصبع على شاشة الهاتف',
                en: 'Generous button size easy to tap with a thumb on mobile',
              },
              right: {
                ar: 'زر صغير وضيق يصعب الضغط عليه من الجوال',
                en: 'Tiny cramped button hard to tap on phones',
              },
            },
          ],
          balancedVerdict: {
            ar: 'عندما تطلب من الذكاء الاصطناعي تحسين المظهر، اطلب منه دائمًا: «زد المسافات المريحة داخل البطاقات وبينها».',
            en: 'When asking AI to polish the look, always ask for comfortable spacing inside and between cards.',
          },
        },
      },
    },
    {
      id: 's06-slide-06',
      sessionNumber: 6,
      slideNumber: 6,
      totalSlides: 10,
      type: 'question',
      visualType: 'responsive-devices',
      title: {
        ar: 'سؤال تفاعلي: كيف تكتشف مشكلة التجاوب على الهاتف؟',
        en: 'Interactive Question: How Do You Spot a Mobile Layout Issue?',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'تعويد المتدرب على اختبار صفحته بتصغير نافذة المتصفح أو فتح وضع الهاتف.',
        en: 'Build the habit of testing pages by resizing the browser or using mobile preview.',
      },
      speakerNotes: {
        ar: 'نفّذ: اسأل المتدربين كيف يمكنهم رؤية شكل موقعهم على الهاتف وهم يعملون على الكمبيوتر.\nاسأل: ماذا نفعل في المتصفح لنرى كيف يظهر الموقع على شاشة جوال صغيرة؟\nتحقق: إما بتصغير عرض نافذة المتصفح بالماوس، أو بالضغط على زر معاينة الجوال في أدوات المتصفح (F12).',
        en: 'Show trainees how to resize the browser window or toggle mobile view in DevTools.',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'أثناء بناء موقعك على الكمبيوتر، كيف تتأكد في ثوانٍ أن البطاقات تظهر بشكل سليم على شاشة الهاتف؟',
            en: 'While building on your computer, how can you verify in seconds that cards look right on a phone?',
          },
          contextHint: {
            ar: 'لا تحتاج لإرسال الموقع إلى هاتفك في كل دقيقة؛ يمكنك تجربة ذلك من متصفح الكمبيوتر مباشرة.',
            en: 'You can test mobile view right inside your desktop browser.',
          },
          promptToClass: {
            ar: 'شارك طريقتك في شات Zoom 💬',
            en: 'Share your answer in Zoom chat 💬',
          },
          expectedAnswers: [
            {
              ar: 'نصغر عرض نافذة المتصفح بالماوس لنرى كيف تتحول البطاقات من 3 أعمدة إلى عمود واحد.',
              en: 'Narrow the browser window to see cards switch from 3 columns to 1 column.',
            },
            {
              ar: 'نستخدم أيقونة الهاتف في أدوات المطور بالمتصفح (F12) لمعاينة مقاس الجوال بدقة.',
              en: 'Use the phone icon in browser tools (F12) to preview exact mobile screen sizes.',
            },
          ],
        },
      },
    },
    {
      id: 's06-slide-07',
      sessionNumber: 6,
      slideNumber: 7,
      totalSlides: 10,
      type: 'demo',
      visualType: 'responsive-devices',
      title: {
        ar: 'تطبيق عملي: بناء شبكة مشروبات المقهى واختبارها على الهاتف',
        en: 'Live Demo: Building the Café Drinks Grid & Testing on Mobile',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'عرض حي لبناء قسم البطاقات المتجاوب وتجربة تصغير الشاشة أمام المتدربين.',
        en: 'Demonstrate building the responsive card grid and resizing the screen live on Zoom.',
      },
      speakerNotes: {
        ar: 'نفّذ: اعرض صفحة المقهى على شاشة Zoom، ثم صغّر عرض المتصفح ببطء ليرى المتدربون بأعينهم كيف تترتب البطاقات الست من 3 في الصف إلى 2 ثم إلى بطاقة واحدة واضحة على الهاتف.\nاسأل: هل لاحظتم كيف بقي زر «اطلب عبر واتساب» واضحًا وكبيرًا حتى على أصغر شاشة؟\nتحقق: انسخ نص البرومبت للمتدربين ليطبقوه على مشاريعهم.',
        en: 'Resize the browser live on Zoom so trainees see the 3 -> 2 -> 1 column transition.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'تنسيق شبكة بطاقات المقهى لتعمل بمرونة على الكمبيوتر والهاتف',
            en: 'Style the café card grid to adapt smoothly across desktop and phone',
          },
          instructorSteps: [
            {
              ar: 'نطلب من الذكاء الاصطناعي عرض بطاقات المشروبات في شبكة متجاوبة (3 في الصف للكمبيوتر، وبطاقة واحدة للهاتف).',
              en: 'Ask AI to display drink cards in a responsive grid (3 per row on desktop, 1 on mobile).',
            },
            {
              ar: 'نضبط المسافات الداخلية للبطاقة ونبرز السعر وزر الطلب عبر واتساب.',
              en: 'Set comfortable inner card padding and highlight the price and WhatsApp button.',
            },
            {
              ar: 'نصغر نافذة المتصفح أمامكم لنتأكد من سهولة القراءة وعدم خروج أي عنصر عن الشاشة.',
              en: 'Resize the browser window live to verify readability and zero horizontal overflow.',
            },
          ],
          promptToUse:
            'في قسم قائمة المشروبات، اعرض البطاقات في شبكة متجاوبة (3 أعمدة على الكمبيوتر، عمودين على التابلت، وعمود واحد كامل العرض على الهاتف)، مع مسافات مريحة داخل كل بطاقة وزر «اطلب عبر واتساب» واضح يسهل لمسه على الجوال.',
          expectedOutput: {
            ar: 'شبكة بطاقات أنيقة تتكيف تلقائيًا مع أي حجم شاشة يفتحه الزائر.',
            en: 'An elegant card grid that adapts automatically to any visitor screen size.',
          },
        },
      },
    },
    {
      id: 's06-slide-08',
      sessionNumber: 6,
      slideNumber: 8,
      totalSlides: 10,
      type: 'challenge',
      visualType: 'html-css-building',
      title: {
        ar: 'نشاطك العملي: ابنِ قسم البطاقات في موقعك واختبره على الهاتف',
        en: 'Your Activity: Build Your Card Section & Test It on Mobile',
      },
      estimatedMinutes: 20,
      teachingGoal: {
        ar: 'تمكين المتدرب من تنسيق قسم البطاقات الأساسي في مشروعه والتحقق من تجاوبه على الهاتف.',
        en: 'Have each trainee style their main card section and verify its mobile view.',
      },
      speakerNotes: {
        ar: 'نفّذ: شغّل المؤقت لمدة 20 دقيقة. ساعد المتدربين على تطبيق برومبت الشبكة المتجاوبة على مشاريعهم واختبارها بتصغير المتصفح.\nاسأل: كيف ظهرت البطاقات لديكم عندما صغرتم المتصفح لمقاس الهاتف؟\nتحقق: تأكد أن الجميع اختبر مقاس الهاتف وتأكد من وضوح زر واتساب.',
        en: 'Run the 20-minute timer and guide trainees as they test their mobile card layout.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'نسّق قسم الخدمات أو المنتجات في موقعك وتأكد من جماله على الهاتف',
            en: 'Style Your Services/Products Section and Verify It on Mobile',
          },
          durationMinutes: 20,
          objective: {
            ar: 'تحويل القسم الترحيبي وقسم البطاقات في مشروعك إلى واجهة متجاوبة ومريحة للقراءة.',
            en: 'Turn your Hero and Card sections into a responsive, easy-to-read interface.',
          },
          instructions: [
            {
              ar: '1. اطلب من الذكاء الاصطناعي تنسيق قسم البطاقات في موقعك ليعرض 3 بطاقات على الكمبيوتر وبطاقة واحدة على الهاتف.',
              en: '1. Ask AI to style your cards section as 3 columns on desktop and 1 column on mobile.',
            },
            {
              ar: '2. تأكد من وجود مسافة مريحة داخل كل بطاقة وبروز السعر أو الميزة الأساسية.',
              en: '2. Verify comfortable padding inside each card and clear price/benefit visibility.',
            },
            {
              ar: '3. صغّر نافذة المتصفح لمقاس الهاتف وتأكد أن جميع النصوص والأزرار واضحة ومريحة.',
              en: '3. Resize your browser to phone width and confirm all text and buttons look clean.',
            },
          ],
          deliverable: {
            ar: 'شارك نتيجة فحص موقعك على الهاتف في شات Zoom أو أرسلها عبر واتساب من صفحة الجلسة.',
            en: 'Share your mobile check result in Zoom chat or send it via WhatsApp.',
          },
        },
      },
    },
    {
      id: 's06-slide-09',
      sessionNumber: 6,
      slideNumber: 9,
      totalSlides: 10,
      type: 'project',
      visualType: 'responsive-devices',
      title: {
        ar: 'الخطوة السادسة في مشروعك: واجهة متجاوبة تعمل على كل الشاشات',
        en: 'Step 6 in Your Project: A Responsive Interface Across All Screens',
      },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'ربط إنجاز اليوم (الهيكل والتنسيق المتجاوب) بالخطوة القادمة (إضافة التفاعل الحي).',
        en: 'Connect today’s responsive layout milestone to Session 07 interactivity.',
      },
      speakerNotes: {
        ar: 'نفّذ: هنئ المتدربين؛ الآن أصبح موقعهم يظهر بشكل حقيقي وأنيق على الكمبيوتر والهاتف.\nاسأل: ماذا ينقص الصفحة الآن عندما نضغط على أزرار التصفية أو قائمة الهاتف؟\nتحقق: ينقصها التفاعل والحركة بـ JavaScript، وهو موضوع الجلسة السابعة!',
        en: 'Celebrate the responsive layout and preview Session 07 JavaScript interactivity.',
      },
      payload: {
        type: 'project',
        data: {
          stepNumber: '06',
          phaseName: {
            ar: 'المرحلة الرابعة: بناء وتنسيق الصفحة الأساسية (HTML & CSS)',
            en: 'Phase 4: Building & Styling the Core Page (HTML & CSS)',
          },
          whatWeBuildNow: {
            ar: 'القسم الترحيبي وشبكة البطاقات المتجاوبة بالكامل مع الهاتف والكمبيوتر',
            en: 'Fully Responsive Hero Section & Product/Service Card Grid',
          },
          deliverables: [
            {
              ar: 'هيكل صفحة مرتب بأسماء أقسام واضحة (header, main, section, footer)',
              en: 'Clean page structure using semantic tags (header, main, section, footer)',
            },
            {
              ar: 'شبكة بطاقات تتكيف تلقائيًا بين شاشة الكمبيوتر وشاشة الهاتف',
              en: 'Card grid adapting automatically between desktop and mobile screens',
            },
            {
              ar: 'مسافات مريحة وألوان متناسقة تبرز زر الطلب عبر واتساب',
              en: 'Comfortable spacing and balanced colors highlighting the WhatsApp button',
            },
          ],
          connectionToFinalProject: {
            ar: 'بعد أن اكتمل المظهر البصري المتجاوب، سنضيف له في الجلسة القادمة التفاعل الحي ليستجيب لنقرات الزائر.',
            en: 'With our responsive visual layout complete, we will add live click interactions next session.',
          },
        },
      },
    },
    {
      id: 's06-slide-10',
      sessionNumber: 6,
      slideNumber: 10,
      totalSlides: 10,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الجلسة السادسة في 3 نقاط',
        en: 'Session 06 Summary in 3 Points',
      },
      estimatedMinutes: 3,
      teachingGoal: {
        ar: 'تلخيص أهم 3 قواعد في بناء وتنسيق الصفحات للمبتدئين.',
        en: 'Summarize the 3 core rules of page structure and responsive styling.',
      },
      speakerNotes: {
        ar: 'نفّذ: راجع النقاط الثلاث مع المتدربين واشكرهم على تطبيقاتهم الرائعة.\nاسأل: ما أول شيء نفحصه بعد تنسيق أي قسم جديد؟ (شكله على شاشة الهاتف!).\nتحقق: ذكّرهم بحفظ تقدمهم وإرسال النشاط عبر واتساب.',
        en: 'Review the 3 takeaways and remind trainees to test on mobile.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: {
                ar: 'HTML للهيكل و CSS للمظهر والترتيب',
                en: 'HTML for Structure, CSS for Look & Layout',
              },
              description: {
                ar: 'الهيكل يضع العناوين والأزرار، والتنسيق يمنحها الألوان والمسافات المريحة.',
                en: 'Structure places headlines and buttons; styling gives them colors and spacing.',
              },
            },
            {
              number: '02',
              title: {
                ar: 'المسافات المريحة تمنح موقعك احترافية فورية',
                en: 'Comfortable Spacing Gives Instant Polish',
              },
              description: {
                ar: 'لا تترك النصوص ملتصقة بالحواف؛ امنح كل بطاقة مساحة داخلية وخارجية مريحة للعين.',
                en: 'Never leave text stuck to borders; give every card comfortable inner and outer space.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'صمّم للهاتف أولًا ثم للشاشات الكبيرة',
                en: 'Design for Phone Screens First',
              },
              description: {
                ar: 'بطاقة واحدة واضحة في الصف على الهاتف، و3 بطاقات متجاورة على شاشة الكمبيوتر.',
                en: 'One clear card per row on phones, and 3 side-by-side cards on desktop.',
              },
            },
          ],
          coreMotto: {
            ar: 'الخطوة القادمة في الجلسة 07: كيف نضيف التفاعل والحركة لصفحتنا باستخدام JavaScript؟',
            en: 'Up Next in Session 07: How to add live interactivity to our page with JavaScript.',
          },
        },
      },
    },
  ],
};
