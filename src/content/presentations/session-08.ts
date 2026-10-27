import { PresentationSession } from '@/types';

export const SESSION_08: PresentationSession = {
  id: 'session-08',
  number: 8,
  slug: 'session-08',
  title: {
    ar: 'تنظيم الموقع في قوالب وقطع قابلة لإعادة الاستخدام (React Components)',
    en: 'Organizing the Website into Reusable Templates (React Components)',
  },
  subtitle: {
    ar: 'بدل نسخ البطاقة وتكرارها يدويًا، كيف نصنع قالبًا ذكيًا واحدًا ونمرر له بيانات المنتجات بسهولة؟',
    en: 'Instead of copying cards manually, how to create one smart template and pass product data cleanly',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من فهم فكرة المكونات القابلة لإعادة الاستخدام في React وتمرير البيانات إليها (Props)، وفصل قائمة بيانات الموقع عن تصميم البطاقة لسهولة التحديث.',
    en: 'Understand reusable React components and props, separating product data lists from card design for effortless updates.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 07 وبناء قسم البطاقات التفاعلي',
      en: 'Completion of Session 07 with interactive cards',
    },
  ],
  objectives: [
    {
      ar: 'فهم فكرة المكون (Component) في React كقالب ذكي نصنعه مرة واحدة ونستخدمه في أي مكان',
      en: 'Understand a React Component as a smart template built once and used anywhere',
    },
    {
      ar: 'فهم فكرة المدخلات (Props): كيف نعطي القالب الواحد اسمًا وسعرًا مختلفًا لكل منتج',
      en: 'Understand Props: how we feed a single template different names and prices per item',
    },
    {
      ar: 'فصل قائمة المنتجات أو الخدمات في قائمة واضحة يسهل تعديلها دون لمس كود التصميم',
      en: 'Separate products/services into a clean data list easy to edit without touching design code',
    },
    {
      ar: 'إضافة منتج أو خدمة جديدة للموقع في سطر واحد ومشاهدتها تظهر تلقائيًا بنفس التصميم',
      en: 'Add a new product or service in one line and watch it appear automatically with the same design',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:15',
      durationMinutes: 15,
      label: { ar: 'مشكلة النسخ واللصق المتكرر وكيف تحلها قوالب React الذكية', en: 'The copy-paste problem & how React templates solve it' },
      type: 'comparison',
    },
    {
      timeRange: '00:15 – 00:35',
      durationMinutes: 20,
      label: { ar: 'كيف يعمل القالب (Component) والمدخلات (Props) معًا؟', en: 'How Components and Props work together' },
      type: 'concept',
    },
    {
      timeRange: '00:35 – 00:55',
      durationMinutes: 20,
      label: { ar: 'تطبيق عملي: فصل قائمة مشروبات المقهى عن قالب البطاقة وإضافة صنف جديد', en: 'Live Demo: Separating Café menu data from the card template' },
      type: 'demo',
    },
    {
      timeRange: '00:55 – 01:20',
      durationMinutes: 25,
      label: { ar: 'نشاط المتدرب: تنظيم بيانات موقعه في قائمة نظيفة وتجربة إضافة عنصر جديد', en: 'Trainee Activity: Organize your site data list & add a new item' },
      type: 'practice',
    },
    {
      timeRange: '01:20 – 01:30',
      durationMinutes: 10,
      label: { ar: 'مراجعة قوائم المتدربين وخلاصة الجلسة الثامنة', en: 'Review trainee data lists & Session 08 summary' },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'تحويل بطاقات المشروع إلى مكون React موحد يقرأ بياناته من قائمة واضحة ومفصولة.',
    en: 'Convert project cards into a unified React component reading from a clean, separate data list.',
  },
  aiRole: {
    ar: 'مساعد تنظيم يفصل البيانات (الأسماء والأسعار) عن كود الشكل البصري ليجعل تحديث الموقع سهلًا جدًا.',
    en: 'Structuring assistant separating data (names & prices) from visual UI code for easy updates.',
  },
  marketConnection: {
    ar: 'أصحاب المواقع يريدون تعديل الأسعار أو إضافة منتج جديد بسرعة؛ وفصل البيانات عن القالب يجعل ذلك ممكنًا في ثوانٍ.',
    en: 'Business owners need to update prices or add products quickly; separating data from templates makes it instant.',
  },
  startScreen: {
    badge: 'الجلسة 08 من 12 • بناء الموقع وتحسينه (4)',
    headline: {
      ar: 'تنظيم الموقع في قوالب قابلة لإعادة الاستخدام (React)',
      en: 'Organizing the Website into Reusable Templates (React)',
    },
    description: {
      ar: 'نتعلم اليوم الفكرة الذكية التي جعلت React أشهر أداة لبناء المواقع في العالم: كيف نصنع قالب البطاقة مرة واحدة ونغذيه بقائمة بيانات بسيطة.',
      en: 'Learn the core idea behind React: build a card template once and feed it a simple list of data.',
    },
    sessionGoal: {
      ar: 'فصل بيانات منتجات أو خدمات موقعك في قائمة واضحة وعرضها عبر قالب بطاقة موحد.',
      en: 'Separate your website product/service data into a clean list and display it via one card template.',
    },
  },
  endScreen: {
    headline: {
      ar: 'ممتاز! أصبح موقعك منظمًا بقوالب React الذكية وسهل التحديث',
      en: 'Excellent! Your Website Is Now Powered by Clean Reusable React Templates',
    },
    keyRecap: [
      {
        ar: 'المكون (Component) هو قالب تصميم موحد نصنعه مرة واحدة فلا نضطر لنسخ الكود وتكراره.',
        en: 'A Component is a unified design template built once so we never copy-paste repeated code.',
      },
      {
        ar: 'المدخلات (Props) هي البيانات المتغيرة (الاسم، السعر، الوصف) التي نمررها للقالب في كل بطاقة.',
        en: 'Props are the changing details (title, price, description) passed into each card template.',
      },
      {
        ar: 'فصل قائمة البيانات عن تصميم البطاقة يتيح لك إضافة أو تعديل أي منتج في ثوانٍ.',
        en: 'Separating your data list from the card design lets you add or update any item in seconds.',
      },
    ],
    nextSessionNumber: '09',
    nextSessionTitle: {
      ar: 'ربط الصفحات وتسريع الموقع وتجهيزه لمحركات البحث (Next.js & SEO)',
      en: 'Connecting Pages, Speeding Up the Site & Search Optimization (Next.js & SEO)',
    },
  },
  slides: [
    {
      id: 's08-slide-01',
      sessionNumber: 8,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      visualType: 'components-lego',
      realWorldExample: {
        ar: 'مثل قالب بطاقة الهوية في الشركة: تصميم البطاقة واحد للجميع، فقط يتغير الاسم والصورة والمسمى الوظيفي لكل موظف.',
        en: 'Like a company ID badge template: the badge design is the same for everyone; only the name, photo, and title change.',
      },
      title: {
        ar: 'التفكير بالقوالب القابلة لإعادة الاستخدام (React)',
        en: 'Thinking in Reusable Templates (React)',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'توضيح الفكرة الأساسية لمكتبة React بلغة الحياة اليومية البسيطة (القالب والبيانات).',
        en: 'Explain the core idea of React using the everyday ID badge / template analogy.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح تشبيه بطاقة الهوية أو ختم القالب. في الجلسات السابقة صممنا البطاقة، واليوم سنتعلم كيف نجعل React يطبع لنا 6 أو 20 بطاقة تلقائيًا من قالب واحد فقط!\nاسأل: لو كان لديك 20 منتجًا ونسخت كود البطاقة 20 مرة، ثم أردت تغيير لون زر الطلب، كم مرة ستضطر للتعديل؟ (20 مرة!). أما مع قالب React؟ (مرة واحدة فقط!).\nتحقق: هذه الفائدة العملية المباشرة تجعل المبتدئ يحب فكرة React فورًا.',
        en: 'Use the ID badge analogy to show why 1 React template beats copying code 20 times.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '08',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'المرحلة الرابعة • بناء الموقع وتحسينه (الجزء الرابع)',
            en: 'Phase 4 • Building & Improving the Website (Part 4)',
          },
          headline: {
            ar: 'كيف نصنع قالب البطاقة مرة واحدة ونستخدمه في كل الموقع؟',
            en: 'How Do We Build a Card Template Once and Use It Everywhere?',
          },
          subheadline: {
            ar: 'نتعرف ببساطة على فكرة القوالب (Components) والبيانات (Props) في React لتنظيم موقعنا بذكاء.',
            en: 'Simply learn React Components and Props to organize and update your website effortlessly.',
          },
          tags: ['قالب موحد Component', 'بيانات البطاقة Props', 'بدون تكرار', 'تحديث سريع'],
        },
      },
    },
    {
      id: 's08-slide-02',
      sessionNumber: 8,
      slideNumber: 2,
      totalSlides: 10,
      type: 'comparison',
      visualType: 'components-lego',
      title: {
        ar: 'مقارنة: تكرار الكود يدويًا مقابل استخدام قالب موحد (React)',
        en: 'Comparison: Manual Copy-Paste vs. One Reusable Template (React)',
      },
      subtitle: {
        ar: 'لماذا تعتمد جميع المواقع الحديثة على القوالب الموحدة؟',
        en: 'Why modern websites rely on reusable component templates',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'إظهار التوفير الكبير في الوقت والجهد عند استخدام مكونات React بدل النسخ واللصق.',
        en: 'Show the huge time and accuracy savings of reusable components over copy-paste.',
      },
      speakerNotes: {
        ar: 'نفّذ: قارن بين العمودين مع المتدربين. عندما نفصل التصميم في قالب واحد، ونضع الأسعار والأسماء في قائمة بسيطة، يصبح الموقع نظيفًا جدًا.\nاسأل: أيهما أقل عرضة للخطأ عند تحديث الأسعار؟\nتحقق: القائمة المنظمة مع القالب الموحد تحميك من نسيان تعديل بطاقة من البطاقات.',
        en: 'Compare manual copy-paste with a single reusable React component.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'قالب موحد + قائمة بيانات (طريقة React)',
            en: 'One Template + Data List (React Way)',
          },
          rightHeader: {
            ar: 'نسخ ولصق البطاقة عدة مرات (طريقة قديمة)',
            en: 'Copying & Pasting Each Card (Old Way)',
          },
          dimensions: [
            {
              dimension: { ar: 'تعديل تصميم البطاقة', en: 'Updating Card Design' },
              left: {
                ar: 'نعدل القالب مرة واحدة فقط فتتحدث جميع البطاقات في الموقع فورًا',
                en: 'Edit the template once and every card on the site updates instantly',
              },
              right: {
                ar: 'نضطر لتعديل كل بطاقة يدويًا واحدة تلو الأخرى',
                en: 'Forced to edit every single card manually one by one',
              },
            },
            {
              dimension: { ar: 'إضافة منتج أو خدمة جديدة', en: 'Adding a New Product/Service' },
              left: {
                ar: 'نضيف سطرًا واحدًا يحتوي على (الاسم والسعر) في قائمة البيانات',
                en: 'Add a single line with (Name & Price) to the data list',
              },
              right: {
                ar: 'ننسخ عشرات الأسطر من الكود ونحاول تعديل النصوص وسطها',
                en: 'Copy dozens of code lines and hunt for text inside them',
              },
            },
            {
              dimension: { ar: 'ترتيب الصفحة ونظافتها', en: 'Page Cleanliness' },
              left: {
                ar: 'صفحة قصيرة ومرتبة يسهل قراءتها وفحصها',
                en: 'Short, clean page that is easy to read and inspect',
              },
              right: {
                ar: 'صفحة طويلة جدًا مليئة بالتكرار الممل',
                en: 'Very long cluttered file full of repetitive code',
              },
            },
          ],
          balancedVerdict: {
            ar: 'اصنع القالب مرة واحدة، وضع بياناتك في قائمة مرتبة؛ هذه هي خلاصة التفكير الذكي في React.',
            en: 'Build the template once and keep your data in a clean list—that is the heart of React.',
          },
        },
      },
    },
    {
      id: 's08-slide-03',
      sessionNumber: 8,
      slideNumber: 3,
      totalSlides: 10,
      type: 'concept',
      visualType: 'components-lego',
      realWorldExample: {
        ar: 'ماكينة القهوة هي «القالب (Component)»، ونوع البن والحليب الذي تضعه فيها هو «المدخلات (Props)»، والكوب الجاهز هو البطاقة التي يراها الزائر!',
        en: 'The coffee machine is the Component, the beans and milk you put in are the Props, and the finished cup is the card visitors see!',
      },
      title: {
        ar: 'كلمتان فقط تحتاج لفهمهما في React: القالب والمدخلات',
        en: 'Only Two Words You Need to Know in React: Component & Props',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'شرح مصطلحي `Component` و `Props` بأبسط صورة ممكنة للمبتدئ.',
        en: 'Explain "Component" and "Props" in the simplest possible terms for beginners.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح المصطلحين بهدوء: لا نريد للمتدرب أن يشعر بالرهبة إذا سمع كلمة `Component` أو `Props`. الأولى تعني «قالب الجزء»، والثانية تعني «البيانات التي نمررها للقالب».\nاسأل: في قالب بطاقة المشروب، ما هي الـ Props (البيانات المتغيرة من مشروب لآخر)؟\nتحقق: الاسم، الوصف، السعر، والفئة (ساخن/بارد)!',
        en: 'Explain Component (the template) and Props (the data fields passed into it).',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'تبسيط المصطلحات التقنية', en: 'Technical Terms Made Simple' },
          principle: {
            ar: 'القالب (Component) يرسم الشكل، والمدخلات (Props) تملؤه بالمعلومة',
            en: 'The Component Draws the Shape, and Props Fill It with Information',
          },
          explanation: {
            ar: 'عندما تتحدث مع الذكاء الاصطناعي لبناء موقع حديث، ستلاحظ هذين المفهومين البسيطين:',
            en: 'When working with AI to build a modern website, you will see these two simple concepts:',
          },
          bulletPoints: [
            {
              ar: '1. المكون أو القالب (Component): هو التصميم الثابت للقطعة (مثل إطار البطاقة ولون الزر ومكان السعر).',
              en: '1. Component (Template): The fixed visual design (card border, button color, price placement).',
            },
            {
              ar: '2. الخصائص أو المدخلات (Props): هي المعلومات التي تتغير من بطاقة لأخرى (اسم الصنف، السعر، الفئة).',
              en: '2. Props (Inputs): The details that change from card to card (item name, price, category).',
            },
            {
              ar: '3. قائمة البيانات (Data Array): جدول بسيط نكتب فيه جميع أصنافنا ليقوم القالب بعرضها تلقائيًا.',
              en: '3. Data List (Array): A simple list of all our items that the template displays automatically.',
            },
          ],
          architecturalRule: {
            ar: 'افصل دائمًا بين «بيانات موقعك» وبين «تصميم البطاقة» لتتمكن من تحديث موقعك في أي لحظة.',
            en: 'Always separate your website data from the card design so updates take seconds.',
          },
        },
      },
    },
    {
      id: 's08-slide-04',
      sessionNumber: 8,
      slideNumber: 4,
      totalSlides: 10,
      type: 'code',
      visualType: 'components-lego',
      title: {
        ar: 'كيف تبدو قائمة بيانات المشروبات المفصولة بوضوح؟',
        en: 'What Does a Clean Separated Drinks Data List Look Like?',
      },
      estimatedMinutes: 9,
      teachingGoal: {
        ar: 'إظهار كيف تبدو قائمة البيانات البسيطة التي يستطيع أي مبتدئ تعديل الأسعار أو الأسماء داخلها بسهولة.',
        en: 'Show how readable a clean data list is so any beginner can update prices or items easily.',
      },
      speakerNotes: {
        ar: 'نفّذ: اعرض قائمة المشروبات الثلاثة على الشاشة. لاحظ كم هي واضحة ومرتبة بالعربية! أي صاحب مقهى أو متدرب مبتدئ يستطيع قراءة هذه الأسطر وتغيير السعر أو إضافة مشروب رابع بسهولة.\nاسأل: لو أردنا إضافة «موكا بارد بسعر 21 ر.س»، ماذا نفعل؟\nتحقق: ننسخ سطرًا واحدًا ونكتب فيه الاسم والسعر الجديدين فيظهر في الموقع فورًا!',
        en: 'Show the simple `DRINKS` list and ask how easy it is to change a price or add a drink.',
      },
      payload: {
        type: 'code',
        data: {
          language: 'TypeScript Data List',
          codeSnippet: `const DRINKS = [
  { id: 1, name: 'قهوة لاتيه', category: 'ساخن', price: '18 ر.س' },
  { id: 2, name: 'كابتشينو إيطالي', category: 'ساخن', price: '20 ر.س' },
  { id: 3, name: 'ماتشا لاتيه بارد', category: 'بارد', price: '22 ر.س' },
];

// القالب الموحد يعرض القائمة كاملة تلقائياً:
{DRINKS.map((drink) => (
  <DrinkCard key={drink.id} name={drink.name} price={drink.price} />
))}`,
          what: {
            ar: 'قائمة واضحة تحتوي على المشروبات وأسعارها، متبوعة بسطر واحد يطلب من قالب (DrinkCard) عرض كل مشروب.',
            en: 'A clean list of drinks and prices, followed by one line telling DrinkCard to display each item.',
          },
          why: {
            ar: 'لأنك عندما تريد تعديل الأسعار أو إضافة صنف جديد، لن تبحث داخل كود التصميم، بل ستعدل هذه القائمة البسيطة فقط.',
            en: 'When updating prices or adding items, you only edit this simple list without touching layout code.',
          },
          when: {
            ar: 'نستخدم هذه الطريقة مع أي قائمة عناصر في الموقع (منتجات، خدمات، آراء عملاء، أو أسئلة شائعة).',
            en: 'Use this pattern for any list on your site (products, services, reviews, or FAQs).',
          },
        },
      },
    },
    {
      id: 's08-slide-05',
      sessionNumber: 8,
      slideNumber: 5,
      totalSlides: 10,
      type: 'reveal',
      visualType: 'components-lego',
      title: {
        ar: '3 قوالب أساسية تكفي لبناء معظم مواقع الويب',
        en: '3 Core Templates Enough to Build Most Websites',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'توضيح أهم 3 قوالب متكررة في أي موقع: قالب البطاقة، قالب الزر الموحد، وقالب عنوان القسم.',
        en: 'Highlight the 3 most useful reusable templates: Card, Action Button, and Section Header.',
      },
      speakerNotes: {
        ar: 'نفّذ: استعرض القوالب الثلاثة. عندما نلتزم بهذه القوالب الثلاثة في موقعنا، يصبح الموقع كله متناسقًا كأنه من تصميم شركة عالمية.\nاسأل: لماذا نوحد قالب «زر واتساب» في الموقع؟\nتحقق: حتى يظهر بنفس اللون والأيقونة والوضوح في أعلى الصفحة وداخل البطاقات وفي أسفل الصفحة.',
        en: 'Walk through the 3 core reusable templates: Product/Service Card, WhatsApp Action Button, and Section Title.',
      },
      payload: {
        type: 'reveal',
        data: {
          premise: {
            ar: 'لتجعل موقعك متناسقًا بالكامل، اطلب من الذكاء الاصطناعي توحيد هذه القوالب الثلاثة:',
            en: 'To make your website completely consistent, ask AI to unify these 3 templates:',
          },
          steps: [
            {
              number: '01',
              title: { ar: 'قالب بطاقة العرض (Product / Service Card)', en: '1. Offer Card Template' },
              description: {
                ar: 'يعرض الصورة أو الأيقونة، العنوان، الوصف المختصر، السعر، وزر الطلب بتصميم موحد.',
                en: 'Displays the icon/photo, title, short description, price, and order button consistently.',
              },
            },
            {
              number: '02',
              title: { ar: 'قالب زر التواصل والطلب (WhatsApp Button)', en: '2. WhatsApp Action Button Template' },
              description: {
                ar: 'زر موحد الشكل واللون يفتح محادثة واتساب مع الرسالة المناسبة أينما وُضع في الموقع.',
                en: 'A unified button style that opens WhatsApp with the right message wherever placed.',
              },
            },
            {
              number: '03',
              title: { ar: 'قالب عنوان القسم (Section Header)', en: '3. Section Header Template' },
              description: {
                ar: 'يجعل عناوين جميع الأقسام (خدماتنا، لماذا نحن، آراء العملاء) متناسقة في الحجم والمسافات.',
                en: 'Keeps all section titles consistent in font size and spacing across the page.',
              },
            },
          ],
        },
      },
    },
    {
      id: 's08-slide-06',
      sessionNumber: 8,
      slideNumber: 6,
      totalSlides: 10,
      type: 'question',
      visualType: 'components-lego',
      title: {
        ar: 'سؤال تفاعلي: أين نعدل السعر؟',
        en: 'Interactive Question: Where Do We Update the Price?',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'التأكد من فهم المتدرب للفرق بين تعديل البيانات وتعديل شكل القالب.',
        en: 'Verify that trainees distinguish between editing the data list vs. editing the template.',
      },
      speakerNotes: {
        ar: 'نفّذ: اطرح السؤال في شات Zoom.\nاسأل: إذا أراد صاحب المقهى إضافة مشروب جديد أو تعديل سعر الكابتشينو، هل يفتح ملف تصميم البطاقة أم يفتح قائمة البيانات؟\nتحقق: يفتح قائمة البيانات فقط!',
        en: 'Ask whether adding a new drink requires editing the card design or the data list.',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'بعد تنظيم موقعك بقوالب React، أردت تغيير سعر منتج وإضافة منتج جديد. أين تجري هذا التعديل؟',
            en: 'After organizing your site with React templates, you want to change a price and add a new item. Where do you edit?',
          },
          contextHint: {
            ar: 'تذكر الفرق بين «قائمة البيانات» و«قالب التصميم».',
            en: 'Remember the difference between the Data List and the Design Template.',
          },
          promptToClass: {
            ar: 'اكتب إجابتك في شات Zoom 💬',
            en: 'Type your answer in Zoom chat 💬',
          },
          expectedAnswers: [
            {
              ar: 'نعدل في «قائمة البيانات» فقط دون الحاجة للمس كود تصميم البطاقة أبدًا.',
              en: 'Edit the "Data List" only without touching the card design code.',
            },
            {
              ar: 'بمجرد إضافة السطر الجديد في القائمة، يتكفل القالب برسم البطاقة الجديدة تلقائيًا.',
              en: 'As soon as we add the new line to the list, the template draws the new card automatically.',
            },
          ],
        },
      },
    },
    {
      id: 's08-slide-07',
      sessionNumber: 8,
      slideNumber: 7,
      totalSlides: 10,
      type: 'demo',
      visualType: 'components-lego',
      title: {
        ar: 'تطبيق عملي: فصل بيانات المقهى وإضافة صنف جديد في 10 ثوانٍ',
        en: 'Live Demo: Separating Café Data & Adding a New Item in 10 Seconds',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'عرض عملي حي لفصل قائمة المشروبات عن قالب البطاقة وتجربة إضافة مشروب جديد مباشرة أمام المتدربين.',
        en: 'Live demonstration separating the drinks data array and adding a new drink in seconds.',
      },
      speakerNotes: {
        ar: 'نفّذ: اعرض أمام المتدربين كيف نطلب من الذكاء الاصطناعي فصل بيانات المشروبات في قائمة واضحة، ثم أضف مشروبًا سابعًا أمامهم في سطر واحد وافتح المتصفح ليروا البطاقة السابعة وقد ظهرت بنفس التصميم وزر واتساب تلقائيًا!\nاسأل: هل رأيتم كم أصبح تحديث الموقع سهلًا وممتعًا؟\nتحقق: هذا يمنح المتدرب قدرة حقيقية على إدارة محتوى موقعه بنفسه.',
        en: 'Add a 7th drink live on Zoom so trainees see the card render automatically.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'تحويل بطاقات المقهى إلى قالب React موحد يقرأ من قائمة بيانات واضحة',
            en: 'Convert café cards into a unified React component reading from a clean data list',
          },
          instructorSteps: [
            {
              ar: 'نطلب من الذكاء الاصطناعي وضع بيانات المشروبات (الاسم، الفئة، الوصف، السعر) في قائمة واضحة أعلى الملف أو في ملف بيانات مستقل.',
              en: 'Ask AI to place drink details (name, category, description, price) in a clean data list.',
            },
            {
              ar: 'نجعل قالب البطاقة الموحد يعرض عناصر هذه القائمة تلقائيًا.',
              en: 'Make the unified card component render the items from this list automatically.',
            },
            {
              ar: 'نضيف مشروبًا جديدًا في القائمة أمامكم ونشاهد ظهوره الفوري في الصفحة.',
              en: 'Add a new drink to the list live and watch it appear immediately on the page.',
            },
          ],
          promptToUse:
            'افصل بيانات المشروبات في قائمة واضحة ومرتبة تحتوي على (الاسم، الفئة، الوصف القصير، السعر)، واجعل قسم القائمة يعرضها باستخدام قالب بطاقة React موحد، بحيث يمكنني إضافة أو تعديل أي مشروب من القائمة بسهولة.',
          expectedOutput: {
            ar: 'قائمة بيانات نظيفة باللغة العربية يسهل تعديلها وإضافة أصناف جديدة إليها في ثوانٍ.',
            en: 'A clean Arabic data list that is effortless to edit and expand in seconds.',
          },
        },
      },
    },
    {
      id: 's08-slide-08',
      sessionNumber: 8,
      slideNumber: 8,
      totalSlides: 10,
      type: 'challenge',
      visualType: 'components-lego',
      title: {
        ar: 'نشاطك العملي: نظّم بيانات موقعك في قائمة وأضف عنصرًا جديدًا',
        en: 'Your Activity: Organize Your Site Data List & Add a New Item',
      },
      estimatedMinutes: 20,
      teachingGoal: {
        ar: 'تمكين كل متدرب من فصل بيانات منتجاته/خدماته في قائمة واضحة وتجربة إضافة عنصر جديد بنفسه.',
        en: 'Have each trainee separate their product/service data into a clean list and add a new item.',
      },
      speakerNotes: {
        ar: 'نفّذ: شغّل المؤقت لمدة 20 دقيقة. ساعد المتدربين على فصل بيانات بطاقاتهم وتجربة تعديل سعر أو إضافة خدمة جديدة.\nاسأل: من نجح في إضافة عنصر جديد لموقعه من خلال قائمة البيانات؟\nتحقق: شجع المتدربين على مشاركة العنصر الجديد الذي أضافوه في شات Zoom.',
        en: 'Run the 20-minute timer and help trainees test adding a new item to their data list.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'افصل بيانات بطاقات موقعك في قائمة منظمة وأضف إليها عنصرًا جديدًا',
            en: 'Separate Your Card Data into a Clean List and Add One New Item',
          },
          durationMinutes: 20,
          objective: {
            ar: 'جعل موقعك سهل التحديث والتطوير عبر قوالب React القابلة لإعادة الاستخدام.',
            en: 'Make your website easy to update and expand using reusable React templates.',
          },
          instructions: [
            {
              ar: '1. اطلب من الذكاء الاصطناعي فصل بيانات خدماتك أو منتجاتك في قائمة واضحة واستخدام قالب بطاقة موحد لعرضها.',
              en: '1. Ask AI to separate your services/products into a clean list and render them with one card template.',
            },
            {
              ar: '2. افتح قائمة البيانات وأضف عنصرًا جديدًا (منتجًا أو خدمة إضافية) بكتابة اسمه وسعره ووصفه.',
              en: '2. Open the data list and add a new item by writing its name, price, and description.',
            },
            {
              ar: '3. عاين الصفحة وتأكد أن العنصر الجديد ظهر بنفس التصميم الأنيق وأن زر واتساب يعمل فيه.',
              en: '3. Preview the page and verify the new item appears cleanly with a working WhatsApp button.',
            },
          ],
          deliverable: {
            ar: 'شارك اسم العنصر الجديد الذي أضفته في شات Zoom أو أرسله عبر واتساب من صفحة الجلسة.',
            en: 'Share the new item you added in Zoom chat or send it via WhatsApp.',
          },
        },
      },
    },
    {
      id: 's08-slide-09',
      sessionNumber: 8,
      slideNumber: 9,
      totalSlides: 10,
      type: 'project',
      visualType: 'components-lego',
      title: {
        ar: 'الخطوة الثامنة في مشروعك: موقع منظم بقوالب ذكية وبيانات واضحة',
        en: 'Step 8 in Your Project: Smart Templates & Clean Data',
      },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'ربط تنظيم قوالب React بالخطوة القادمة في الجلسة التاسعة (Next.js والسرعة ومشاركة الروابط).',
        en: 'Connect today’s React template milestone to Session 09 Next.js speed and link previews.',
      },
      speakerNotes: {
        ar: 'نفّذ: وضح للمتدربين أن موقعهم الآن مبني بنفس الطريقة الاحترافية التي تُبنى بها المواقع الحديثة.\nاسأل: ماذا يحدث عندما نشارك رابط موقعنا الآن في واتساب أو يبحث عنه شخص في Google؟\nتحقق: هذا ما سنتعلم ضبطه وإتقانه في الجلسة التاسعة القادمة (Next.js & SEO)!',
        en: 'Show how clean React components lead into Session 09 Next.js & SEO.',
      },
      payload: {
        type: 'project',
        data: {
          stepNumber: '08',
          phaseName: {
            ar: 'المرحلة الرابعة: التنظيم بالقوالب القابلة لإعادة الاستخدام (React)',
            en: 'Phase 4: Organizing with Reusable Templates (React)',
          },
          whatWeBuildNow: {
            ar: 'قالب البطاقة الموحد + قائمة بيانات المنتجات والخدمات المفصولة بوضوح',
            en: 'Unified Card Component + Clean Separated Product/Service Data List',
          },
          deliverables: [
            {
              ar: 'قالب بطاقة موحد يضمن تناسق جميع العناصر في الموقع',
              en: 'Unified card template ensuring visual consistency across all items',
            },
            {
              ar: 'قائمة بيانات مرتبة يسهل تعديل الأسعار أو إضافة أصناف جديدة فيها',
              en: 'Clean data list making price edits or new item additions effortless',
            },
            {
              ar: 'ربط تلقائي بين بيانات كل بطاقة ورسالة الطلب عبر واتساب',
              en: 'Automatic connection between each card’s data and its WhatsApp order message',
            },
          ],
          connectionToFinalProject: {
            ar: 'هذا التنظيم يجعل موقعك قابلًا للنمو والتحديث بسهولة حتى بعد إطلاقه وتسليمه للعميل.',
            en: 'This structure makes your website easy to grow and update even after launch.',
          },
        },
      },
    },
    {
      id: 's08-slide-10',
      sessionNumber: 8,
      slideNumber: 10,
      totalSlides: 10,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الجلسة الثامنة في 3 نقاط',
        en: 'Session 08 Summary in 3 Points',
      },
      estimatedMinutes: 3,
      teachingGoal: {
        ar: 'تثبيت مفاهيم القالب والبيانات والتمهيد للجلسة التاسعة.',
        en: 'Reinforce Component and Props concepts and preview Session 09.',
      },
      speakerNotes: {
        ar: 'نفّذ: لخص النقاط الثلاث واشكر المتدربين.\nاسأل: بكلمتين بسيطتين، ما الفرق بين Component و Props؟ (القالب والمدخلات!).\nتحقق: ذكّرهم بإرسال نشاط الجلسة عبر واتساب.',
        en: 'Summarize the 3 points and preview Session 09.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: {
                ar: 'اصنع القالب مرة واحدة واستخدمه في كل مكان',
                en: 'Build the Template Once, Use It Everywhere',
              },
              description: {
                ar: 'قالب البطاقة الموحد يوفر وقتك ويحفظ تناسق موقعك بالكامل.',
                en: 'A single card template saves time and keeps your whole site consistent.',
              },
            },
            {
              number: '02',
              title: {
                ar: 'افصل البيانات عن التصميم دائمًا',
                en: 'Always Separate Data from Design',
              },
              description: {
                ar: 'وضع الأسماء والأسعار في قائمة واضحة يجعل تعديل المحتوى سهلًا وآمنًا.',
                en: 'Keeping names and prices in a clean list makes updating content safe and easy.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'المدخلات (Props) هي ما يميز كل بطاقة',
                en: 'Props Are What Make Each Card Unique',
              },
              description: {
                ar: 'نفس القالب الأنيق يعرض عشرات المنتجات المختلفة بتمرير الاسم والسعر لكل بطاقة.',
                en: 'The same clean template displays dozens of items by passing name and price.',
              },
            },
          ],
          coreMotto: {
            ar: 'الخطوة القادمة في الجلسة 09: كيف نسرّع الموقع ونجهز بطاقة ظهوره في بحث Google ومشاركات واتساب؟',
            en: 'Up Next in Session 09: How to speed up your site and prepare its Google & WhatsApp preview card.',
          },
        },
      },
    },
  ],
};
