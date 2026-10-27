/**
 * WEB CREATOR AI — Unified Presentation Slides Catalog
 * Clean, beginner-friendly overview slides for the 7 stages of WEB CREATOR AI.
 */

import { PresentationSlide } from '@/types';

export const ALL_PRESENTATION_SLIDES: PresentationSlide[] = [
  {
    id: 'slide-01-think',
    stageId: '01-think',
    stageCode: 'THINK',
    stageNumber: '01',
    slideNumber: 1,
    title: {
      ar: 'التخطيط قبل الكود: كيف تبدأ بناء موقع ناجح؟',
      en: 'Planning Before Code: How to Start a Successful Website',
    },
    subtitle: {
      ar: 'فهم كيف تطورت المواقع من الماضي إلى اليوم، وتحديد الفكرة والجمهور والأدوات الأساسية',
      en: 'Understanding how websites evolved, defining the idea, audience, and essential tools',
    },
    keyConcept: {
      ar: 'الموقع الناجح يبدأ بفكرة واضحة على الورق: لمن نبني هذا الموقع؟ ماذا نقدم له؟ وما هي الخطوة الواضحة التي نريد من الزائر القيام بها؟',
      en: 'A successful website starts with a clear plan: who is it for, what does it offer, and what action should the visitor take?',
    },
    takeaways: [
      {
        ar: 'المواقع اليوم تفاعلية وسريعة ومصممة لتعمل على الهاتف والكمبيوتر وتوجه الطلبات مباشرة.',
        en: 'Modern websites are interactive, fast, mobile-ready, and guide customer requests directly.',
      },
      {
        ar: 'كل موقع يتكون من 3 طبقات أساسية: الهيكل والمحتوى (HTML)، المظهر والألوان (CSS)، والتفاعل الحي (JavaScript).',
        en: 'Every website has 3 core layers: Structure (HTML), Visual Styling (CSS), and Live Interaction (JavaScript).',
      },
      {
        ar: 'تثبيت الأدوات الأساسية على جهازك (Chrome, VS Code/Antigravity, Node.js, Git) يجهزك للبناء خطوة بخطوة.',
        en: 'Installing the core tools on your computer prepares you for structured step-by-step building.',
      },
    ],
    interaction: {
      type: 'quiz',
      question: {
        ar: 'ما هي الخطوة الأولى الصحيحة قبل أن تطلب من الذكاء الاصطناعي كتابة كود الموقع؟',
        en: 'What is the right first step before asking AI to write website code?',
      },
      options: [
        {
          ar: 'طلب موقع كامل بجميع صفحاته في جملة واحدة عامة.',
          en: 'Requesting an entire website in a single vague sentence.',
        },
        {
          ar: 'تحديد هدف الموقع وجمهوره وأقسامه الـ 5 الأساسية بوضوح.',
          en: 'Clearly defining the site goal, target audience, and 5 core sections.',
        },
        {
          ar: 'اختيار تأثيرات حركية معقدة قبل كتابة النصوص.',
          en: 'Picking complex animations before writing any content.',
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        ar: 'صحيح! عندما تحدد الهدف والجمهور والأقسام أولاً، تصبح توجيهاتك للذكاء الاصطناعي واضحة وتخرج بنتيجة مرتبة ومقنعة.',
        en: 'Correct! Defining your goal, audience, and sections first makes your AI instructions clear and produces structured results.',
      },
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: قارن أمام المتدربين بين موقع قديم مزدحم بالنصوص وموقع حديث واضح يقود الزائر في 5 ثوانٍ إلى زر الطلب.',
      en: 'Trainer Tip: Compare an old cluttered website with a clean modern website that guides visitors to the CTA within 5 seconds.',
    },
  },
  {
    id: 'slide-02-design',
    stageId: '02-design',
    stageCode: 'DESIGN',
    stageNumber: '02',
    slideNumber: 2,
    title: {
      ar: 'تخطيط الصفحات وترتيب الأقسام وتصميم تجربة مريحة للزائر',
      en: 'Page Planning, Section Order & Visitor-Friendly Design',
    },
    subtitle: {
      ar: 'ترتيب أقسام الصفحة من الأعلى للأسفل بحيث يفهم الزائر العرض دون تشتت',
      en: 'Ordering page sections from top to bottom so visitors understand the offer effortlessly',
    },
    keyConcept: {
      ar: 'التصميم المريح لا يعني كثرة الألوان والزخارف، بل يعني ترتيب المعلومات حسب أهميتها للزائر وترك مساحات هادئة تريح العين.',
      en: 'Good design is not decoration; it is ordering information by importance and leaving calm breathing room.',
    },
    takeaways: [
      {
        ar: 'رتب الصفحة في 5 محطات منطقية: شريط علوي، قسم رئيسي (Hero)، الخدمات أو المنتجات، الثقة، والتواصل.',
        en: 'Order the page into 5 logical stations: Navbar, Hero, Products/Services, Trust, and Contact.',
      },
      {
        ar: 'استخدم لوناً أساسياً واحداً للأزرار المهمة وخطاً عربياً واضحاً ومقروءاً.',
        en: 'Use one primary color for main action buttons and a clear, readable Arabic font.',
      },
      {
        ar: 'حوّل مخططك المكتوب إلى تصور بصري أولي قبل البدء بكتابة الكود.',
        en: 'Turn your written plan into an initial visual layout before writing code.',
      },
    ],
    interaction: {
      type: 'checklist',
      title: {
        ar: 'قائمة مراجعة تخطيط الصفحة قبل البناء:',
        en: 'Page Planning Checklist Before Building:',
      },
      items: [
        {
          ar: 'هل يشرح القسم الأول (Hero) ماذا يقدم الموقع ولمن في 5 ثوانٍ؟',
          en: 'Does the Hero section explain what the site offers and for whom within 5 seconds?',
        },
        {
          ar: 'هل يوجد زر إجراء أساسي واضح واحد في بداية الصفحة ونهايتها؟',
          en: 'Is there one clear primary action button at the top and bottom of the page?',
        },
        {
          ar: 'هل حذفت العناصر الثانوية المشتتة مثل النوافذ المنبثقة المزعجة؟',
          en: 'Have distracting secondary elements like annoying popups been removed?',
        },
      ],
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: اعرض للمتدربين كيف نرسم خريطة الأقسام الـ 5 على الورق في 5 دقائق قبل فتح محرر الكود.',
      en: 'Trainer Tip: Show trainees how to sketch the 5-section map on paper in 5 minutes before opening the editor.',
    },
  },
  {
    id: 'slide-03-build',
    stageId: '03-build',
    stageCode: 'BUILD',
    stageNumber: '03',
    slideNumber: 3,
    title: {
      ar: 'بناء الهيكل الأساسي وتنسيق الموقع للهاتف والكمبيوتر (HTML & CSS)',
      en: 'Building Core Structure & Responsive Layout (HTML & CSS)',
    },
    subtitle: {
      ar: 'قراءة عناصر الصفحة الأساسية وضبط تناسق البطاقات على جميع الشاشات',
      en: 'Reading core page elements and aligning cards across mobile and desktop screens',
    },
    keyConcept: {
      ar: 'استخدام أسماء العناصر الصحيحة (header, main, section, footer) وتنسيق الشبكة المتجاوبة يجعل الموقع منظماً ومريحاً على الهاتف والكمبيوتر.',
      en: 'Using semantic HTML tags and responsive grids keeps your website organized and comfortable on both phone and desktop.',
    },
    takeaways: [
      {
        ar: 'لكل عنصر في الصفحة اسم واضح: h1 للعنوان الرئيسي، p للفقرة، و button للزر.',
        en: 'Every page element has a clear tag: h1 for main heading, p for paragraph, and button for actions.',
      },
      {
        ar: 'البطاقات التي تظهر في 3 أعمدة على الكمبيوتر يجب أن تتحول إلى عمود واحد مريح على الهاتف.',
        en: 'Cards shown in 3 columns on desktop should stack into a comfortable single column on mobile.',
      },
      {
        ar: 'المسافات الداخلية والحدود الهادئة هي سر المظهر المرتب والاحترافي.',
        en: 'Consistent padding and calm borders are the secret to a clean, professional look.',
      },
    ],
    interaction: {
      type: 'reveal',
      beforeLabel: {
        ar: 'كود عشوائي بصناديق عامة غير واضحة',
        en: 'Unstructured Generic Divs',
      },
      beforeContent: {
        ar: '<div class="top">\n  <div class="big-text">قهوة الصباح</div>\n  <div class="click-here">اطلب الآن</div>\n</div>',
        en: '<div class="top">\n  <div class="big-text">Morning Coffee</div>\n  <div class="click-here">Order Now</div>\n</div>',
      },
      afterLabel: {
        ar: 'كود منظم وواضح الدلالة (HTML & Tailwind)',
        en: 'Clean Semantic HTML & Tailwind',
      },
      afterContent: {
        ar: '<section class="p-8 bg-white rounded-2xl border">\n  <h1 class="text-3xl font-bold">قهوة الصباح المختصة</h1>\n  <a href="https://wa.me/905382015072" class="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl">اطلب عبر واتساب</a>\n</section>',
        en: '<section class="p-8 bg-white rounded-2xl border">\n  <h1 class="text-3xl font-bold">Specialty Morning Coffee</h1>\n  <a href="https://wa.me/905382015072" class="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl">Order via WhatsApp</a>\n</section>',
      },
      note: {
        ar: 'لاحظ كيف أصبح الكود واضح المعنى لأي شخص يقرؤه ولمحركات البحث أيضاً.',
        en: 'Notice how clear and readable the code becomes for both humans and search engines.',
      },
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: اضغط على زر المقارنة وأظهر للمتدربين أن قراءة HTML تشبه قراءة عناوين وفقرات مستند وورد منظم.',
      en: 'Trainer Tip: Toggle the comparison to show trainees how readable clean HTML is.',
    },
  },
  {
    id: 'slide-04-develop',
    stageId: '04-develop',
    stageCode: 'DEVELOP',
    stageNumber: '04',
    slideNumber: 4,
    title: {
      ar: 'التفاعل الحي والقوالب القابلة لإعادة الاستخدام (JavaScript & React)',
      en: 'Live Interactivity & Reusable Templates (JavaScript & React)',
    },
    subtitle: {
      ar: 'تصفية البطاقات، فتح القوائم، وربط كل عنصر برسالة طلب مخصصة عبر واتساب',
      en: 'Filtering cards, toggling menus, and linking items to custom WhatsApp order messages',
    },
    keyConcept: {
      ar: 'بدلاً من نسخ الكود عشرات المرات، نصمم قالب بطاقة واحداً في React ونمرر له بيانات المنتجات، ونضيف تفاعلاً يسهل على الزائر الاختيار والطلب.',
      en: 'Instead of copying code repeatedly, we design one React card template, pass it product data, and add smooth filtering and ordering.',
    },
    takeaways: [
      {
        ar: 'كل تفاعل في الموقع يتبع 3 خطوات: حدث من الزائر ← تحديث الاختيار ← تغير فوري في الشاشة.',
        en: 'Every interaction follows 3 steps: visitor action -> state update -> instant screen update.',
      },
      {
        ar: 'فصل قائمة البيانات (الأسماء والأسعار) عن قالب البطاقة يجعل تعديل الموقع سهلاً وسريعاً.',
        en: 'Separating data lists from the card template makes updating the website fast and safe.',
      },
      {
        ar: 'تجهيز رسالة واتساب تلقائية باسم المنتج المختار يختصر وقت الزائر وصاحب المشروع.',
        en: 'Pre-filling WhatsApp messages with the selected item name saves time for both visitor and owner.',
      },
    ],
    interaction: {
      type: 'code',
      title: {
        ar: 'مثال واضح لزر يغير التصنيف المختار في الصفحة:',
        en: 'Simple Example of a Category Filter State:',
      },
      language: 'tsx',
      code: `'use client';

import React, { useState } from 'react';

export const CategoryFilter: React.FC = () => {
  const [category, setCategory] = useState('الكل');

  return (
    <div className="flex gap-2">
      <button onClick={() => setCategory('الكل')} className="px-4 py-2 rounded-lg border">
        الكل ({category === 'الكل' ? 'نشط' : ''})
      </button>
      <button onClick={() => setCategory('مشروبات ساخنة')} className="px-4 py-2 rounded-lg border">
        مشروبات ساخنة ({category === 'مشروبات ساخنة' ? 'نشط' : ''})
      </button>
    </div>
  );
};`,
      explanation: {
        ar: 'عندما يضغط الزائر على الزر، يتغير التصنيف المحفوظ وتتحدث القائمة المعروضة فوراً.',
        en: 'When the visitor clicks a button, the saved category updates and the displayed list refreshes immediately.',
      },
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: اربط مفهوم الحالة (State) بذاكرة قصيرة تحفظ اختيار الزائر الحالي على الشاشة.',
      en: 'Trainer Tip: Explain State simply as short-term memory that remembers the visitor’s current selection.',
    },
  },
  {
    id: 'slide-05-enhance',
    stageId: '05-enhance',
    stageCode: 'ENHANCE',
    stageNumber: '05',
    slideNumber: 5,
    title: {
      ar: 'توجيه الذكاء الاصطناعي ومراجعة النتيجة خطوة بخطوة',
      en: 'Guiding AI Clearly & Reviewing Results Step by Step',
    },
    subtitle: {
      ar: 'كيف تصوغ طلباً واضحاً من 4 عناصر وتراجع كل قسم قبل الانتقال للتالي؟',
      en: 'How to write a 4-part prompt and inspect each section before moving on',
    },
    keyConcept: {
      ar: 'الذكاء الاصطناعي مساعد سريع، لكنه يحتاج إلى وصف دقيق للمهمة ومراجعة بشرية واعية للنصوص والتصميم وطريقة العمل على الهاتف.',
      en: 'AI is a fast assistant, but it requires clear task descriptions and human review of copy, layout, and mobile behavior.',
    },
    takeaways: [
      {
        ar: 'استخدم القالب الرباعي في كل طلب: السياق والهدف، المكان والملف، المحتوى المطلوب، وشروط المظهر.',
        en: 'Use the 4-part prompt template: Context, File/Location, Content, and Layout Rules.',
      },
      {
        ar: 'اطلب بناء أو تعديل قسم واحد فقط في كل مرة حتى تحافظ على ترتيب المشروع.',
        en: 'Request or edit one section at a time to keep your project clean and controlled.',
      },
      {
        ar: 'اطلب من المساعد الذكي في المحرر شرح خطته وتحديد الملفات المتأثرة قبل تنفيذ تعديلات كبيرة.',
        en: 'Ask the editor AI to explain its plan and affected files before applying large changes.',
      },
    ],
    interaction: {
      type: 'checklist',
      title: {
        ar: 'قائمة التحقق من جودة الطلب قبل إرساله للذكاء الاصطناعي:',
        en: 'Prompt Clarity Checklist Before Sending to AI:',
      },
      items: [
        {
          ar: 'هل حددت اسم الملف أو القسم المطلوب تعديله بدقة؟',
          en: 'Did you specify the exact file or section to create or edit?',
        },
        {
          ar: 'هل كتبت النصوص العربية الحقيقية التي تريد ظهورها بدلاً من تركه يخترع نصوصاً عامة؟',
          en: 'Did you provide the real Arabic copy instead of leaving AI to invent generic text?',
        },
        {
          ar: 'هل طلبت الحفاظ على باقي أقسام الصفحة دون تغيير؟',
          en: 'Did you instruct it to leave other sections of the page untouched?',
        },
      ],
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: اعرض أمام المتدربين طلب تعديل محدد في سطرين وكيف ينفذه المساعد الذكي بدقة دون تخريب باقي الصفحة.',
      en: 'Trainer Tip: Show a focused 2-line edit prompt and how cleanly the AI applies it without breaking the rest of the page.',
    },
  },
  {
    id: 'slide-06-launch',
    stageId: '06-launch',
    stageCode: 'LAUNCH',
    stageNumber: '06',
    slideNumber: 6,
    title: {
      ar: 'تهيئة محركات البحث، الفحص الشامل، والنشر الحي على الإنترنت',
      en: 'SEO, Pre-Launch Inspection & Live Cloud Deployment',
    },
    subtitle: {
      ar: 'تجهيز معاينة الرابط في واتساب وجوجل، فحص الهاتف، ونشر الموقع عبر GitHub و Vercel',
      en: 'Setting up WhatsApp/Google link previews, checking mobile, and deploying via GitHub & Vercel',
    },
    keyConcept: {
      ar: 'قبل إرسال رابط موقعك لأي عميل، نضبط عنوانه ووصفه وصورته الترحيبية، ونفحص كل زر على شاشة الهاتف، ثم ننشره برابط حي يعمل في كل مكان.',
      en: 'Before sharing your link, configure its title and preview card, test every button on mobile, and deploy it live.',
    },
    takeaways: [
      {
        ar: 'إعداد العنوان والوصف (Metadata & Open Graph) يجعل رابط موقعك يظهر كبطاقة أنيقة في واتساب.',
        en: 'Configuring Metadata and Open Graph makes your link appear as a clean preview card on WhatsApp.',
      },
      {
        ar: 'قائمة الفحص الرباعية (النصوص، الروابط، شاشة الهاتف، والأمان) تحميك من الأخطاء المحرجة.',
        en: 'The 4-part checklist (copy, links, mobile view, safety) prevents embarrassing launch mistakes.',
      },
      {
        ar: 'ربط GitHub بمنصة Vercel يمنحك رابطاً حياً (https://) يتحدث تلقائياً مع كل تعديل.',
        en: 'Connecting GitHub to Vercel gives you a live https:// link that updates automatically.',
      },
    ],
    interaction: {
      type: 'quiz',
      question: {
        ar: 'ما الذي يجعل رابط موقعك يظهر مع عنوان واضح وصورة جميلة عند إرساله في محادثة واتساب؟',
        en: 'What makes your website link show a clear title and image when shared on WhatsApp?',
      },
      options: [
        {
          ar: 'إعداد بيانات العنوان والوصف ومعاينة الرابط (Metadata & Open Graph) في ملف layout.tsx.',
          en: 'Setting Metadata and Open Graph tags in layout.tsx.',
        },
        {
          ar: 'زيادة حجم الخط في تذييل الموقع (Footer).',
          en: 'Increasing the font size in the website footer.',
        },
        {
          ar: 'تغيير لون الخلفية إلى اللون الأسود.',
          en: 'Changing the background color to black.',
        },
      ],
      correctAnswerIndex: 0,
      explanation: {
        ar: 'أحسنت! يقرأ واتساب وجوجل بيانات Metadata و Open Graph لعرض بطاقة تعريفية جذابة للموقع قبل فتحه.',
        en: 'Spot on! WhatsApp and Google read Metadata and Open Graph tags to display a rich preview card.',
      },
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: أرسل رابط أحد مشاريع المتدربين في واتساب أمامهم ليروا كيف تظهر البطاقة الترحيبية بعد ضبط الإعدادات.',
      en: 'Trainer Tip: Share a deployed student link on WhatsApp live so everyone sees the Open Graph preview card.',
    },
  },
  {
    id: 'slide-07-grow',
    stageId: '07-grow',
    stageCode: 'GROW',
    stageNumber: '07',
    slideNumber: 7,
    title: {
      ar: 'عرض أعمالك للعملاء بطريقة مقنعة وتسليم المشروع النهائي',
      en: 'Presenting Your Work to Clients & Delivering the Final Project',
    },
    subtitle: {
      ar: 'كيف تشرح فائدة الموقع لأصحاب المشاريع بوضوح وصدق وتبني معرض أعمالك؟',
      en: 'How to explain website value to business owners honestly and build your portfolio',
    },
    keyConcept: {
      ar: 'صاحب المشروع يهتم بالنتيجة العملية: كيف يسهل الموقع تصفح زبائنه ويوجه طلباتهم مباشرة إلى واتساب؟ اعرض عملك بلغة الفائدة وبأمثلة حية.',
      en: 'Business owners care about practical results: how the site helps their visitors and routes orders to WhatsApp.',
    },
    takeaways: [
      {
        ar: 'قدم كل مشروع في 3 نقاط واضحة: مشكلة العميل، الحل الذي قدمه الموقع، والفائدة العملية للزائر.',
        en: 'Present every project in 3 clear points: client problem, website solution, and visitor benefit.',
      },
      {
        ar: 'أرسل للعميل دائماً رابطاً حياً يجربه من هاتفه بدلاً من إرسال صور ثابتة فقط.',
        en: 'Always share a live link the client can test on their phone instead of static screenshots.',
      },
      {
        ar: 'ابنِ 3 مشاريع متنوعة ومنشورة لتكوين معرض أعمال قوي تبدأ به تقديم خدماتك بثقة.',
        en: 'Build 3 diverse live projects to form a strong portfolio and offer your services with confidence.',
      },
    ],
    interaction: {
      type: 'checklist',
      title: {
        ar: 'المعايير الخمسة لتسليم مشروعك النهائي في البرنامج:',
        en: 'The 5 Criteria for Submitting Your Final Project:',
      },
      items: [
        {
          ar: 'قسم رئيسي واضح يشرح فكرة الموقع وجمهوره من أول نظرة.',
          en: 'A clear Hero section explaining the site concept and audience at first glance.',
        },
        {
          ar: 'أقسام متكاملة مع تفاعل شغال وأزرار طلب مرتبطة بواتساب (+905382015072).',
          en: 'Complete sections with working interactivity and WhatsApp order buttons.',
        },
        {
          ar: 'تصميم متناسق على الهاتف ومنشور برابط حي يعمل على منصة Vercel.',
          en: 'Mobile-friendly layout deployed with a working live link on Vercel.',
        },
      ],
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: اختم العرض بتشجيع المتدربين على تسليم مشاريعهم عبر واتساب واستعراضها أمام المجموعة.',
      en: 'Trainer Tip: Close by encouraging trainees to submit their live projects via WhatsApp and present them to the group.',
    },
  },
];

export function getAllPresentationSlides(): PresentationSlide[] {
  return ALL_PRESENTATION_SLIDES;
}

export function getPresentationSlideByIndex(index: number): PresentationSlide {
  const boundedIndex = Math.max(0, Math.min(ALL_PRESENTATION_SLIDES.length - 1, index));
  return ALL_PRESENTATION_SLIDES[boundedIndex];
}

export function getPresentationSlideById(id: string): PresentationSlide | undefined {
  return ALL_PRESENTATION_SLIDES.find((s) => s.id === id);
}

export function getPresentationSlideByStageNumber(number: string): PresentationSlide | undefined {
  return ALL_PRESENTATION_SLIDES.find((s) => s.stageNumber === number);
}
