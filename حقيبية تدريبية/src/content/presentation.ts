/**
 * WEB CREATOR AI — Unified Presentation Slides Catalog
 * The single source of truth for Presentation Mode (Trainer and Learner).
 * Covering Stages 01 THINK to 07 GROW with micro-interactions and presenter speaking notes.
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
      ar: 'المعمارية قبل الكود: كيف يفكر مهندس الويب؟',
      en: 'Architecture Before Code: Thinking Like a Web Engineer',
    },
    subtitle: {
      ar: 'تحويل الفكرة المجردة إلى نموذج اتصال ونظام عميل وخادم منضبط',
      en: 'Transforming abstract concepts into resilient client-server models',
    },
    keyConcept: {
      ar: 'كل ضغطة زر في المتصفح هي بداية لمحادثة بروتوكولية دقيقة ومحسوبة بالمللي ثانية بين العميل والخادم عبر DNS و TLS و HTTP.',
      en: 'Every browser interaction initiates a millisecond-precision protocol dialogue across DNS, cryptographic handshakes, and HTTP payloads.',
    },
    takeaways: [
      {
        ar: 'المتصفح هو مفسر للأكواد الرسومية والبرمجية وليس مجرد قارئ نصوص.',
        en: 'Browsers are compilation and rendering engines, not simple document readers.',
      },
      {
        ar: 'فهم دورة حياة الطلب (Request Lifecycle) يختصر 80% من مشاكل الأداء وتصحيح الأخطاء.',
        en: 'Understanding the request lifecycle eliminates 80% of latency and debugging headaches.',
      },
      {
        ar: 'التقسيم المعماري السليم للفكرة يحدد مصير المشروع قبل كتابة أول سطر كود.',
        en: 'A sound architectural breakdown dictates project success before writing a single line of code.',
      },
    ],
    interaction: {
      type: 'quiz',
      question: {
        ar: 'ماذا يحدث فعلياً عندما يكتب المستخدم عنوان موقع ويضغط Enter؟',
        en: 'What actually happens first when a user types a URL and presses Enter?',
      },
      options: [
        {
          ar: 'يقوم المتصفح برسم الواجهة مباشرة من الذاكرة العشوائية.',
          en: 'The browser renders the UI directly from local RAM.',
        },
        {
          ar: 'يقوم خادم DNS بترجمة النطاق إلى عنوان IP رقمي لإنشاء اتصال TCP/TLS مشفر.',
          en: 'The DNS server resolves the domain to an IP address to establish an encrypted TCP/TLS handshake.',
        },
        {
          ar: 'يقوم الخادم بتنفيذ كود الـ JavaScript أولاً قبل إرسال الـ HTML.',
          en: 'The server executes client-side JavaScript before dispatching HTML.',
        },
      ],
      correctAnswerIndex: 1,
      explanation: {
        ar: 'بالضبط! لا يستطيع المتصفح إرسال طلب HTTP إلا بعد معرفة عنوان IP الدقيق عبر DNS وبدء مصافحة TLS المشفرة.',
        en: 'Exactly! The browser cannot send an HTTP request until DNS resolves the IP address and establishes the encrypted TLS handshake.',
      },
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: افتح أدوات المطور (F12) وتبويب Network أمام الطلاب مباشرة على الزوم. اطلب من متدرب عشوائي ذكر موقع واعرض له الـ Status Code 200 وزمن الـ TTFB لترسيخ الفكرة.',
      en: 'Trainer Tip: Open DevTools Network tab live on Zoom. Pick a student suggestion, inspect the 200 OK status, and emphasize TTFB latency.',
    },
  },
  {
    id: 'slide-02-design',
    stageId: '02-design',
    stageCode: 'DESIGN',
    stageNumber: '02',
    slideNumber: 2,
    title: {
      ar: 'هندسة التجربة البصرية (UI/UX) والتسلسل الهرمي',
      en: 'UI/UX Engineering & Visual Hierarchy',
    },
    subtitle: {
      ar: 'بناء الثقة من الثانية الأولى عبر التيبوغرافي ونظام الألوان',
      en: 'Building immediate user trust through typography and token systems',
    },
    keyConcept: {
      ar: 'التصميم الجيد ليس إضافة ألوان وزينة، بل هو ترتيب الأولويات البصرية وتوجيه عين المستخدم نحو الهدف بأقل جهد إدراكي ممكن.',
      en: 'Great design is not decoration; it is structuring cognitive priorities and guiding the user with zero visual friction.',
    },
    takeaways: [
      {
        ar: 'استخدم خطوطاً محددة بأوزان متناغمة (Display, Heading, Body, Mono).',
        en: 'Rely on disciplined font pairings and intentional weights.',
      },
      {
        ar: 'التباين العالي ونظام Design Tokens يمنح الموقع هوية رقمية رصينة.',
        en: 'High contrast and semantic design tokens ensure authoritative identity.',
      },
      {
        ar: 'المساحات البيضاء (Whitespace) عنصر تصميمي أساسي وليست مساحة فارغة.',
        en: 'Whitespace is a core structural tool, not wasted canvas real estate.',
      },
    ],
    interaction: {
      type: 'checklist',
      title: {
        ar: 'قائمة تدقيق واجهة المستخدم قبل الانتقال للكود:',
        en: 'UI/UX Pre-Flight Checklist Before Writing Code:',
      },
      items: [
        {
          ar: 'هل التسلسل الهرمي واضح (عنوان رئيسي واحد، تباين نصوص مقروء)؟',
          en: 'Is the visual hierarchy clear (single H1, high text contrast)?',
        },
        {
          ar: 'هل تم تحديد لوحة ألوان دلالية (Primary, Secondary, Surface, Canvas)؟',
          en: 'Are semantic color tokens defined for light and dark surfaces?',
        },
        {
          ar: 'هل الإجراء الأساسي (Primary CTA) بارز ولا ينافسه أكثر من زر واحد ثانوي؟',
          en: 'Is the primary CTA distinct with clear secondary alternatives?',
        },
      ],
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: استعرض صفحة هبوط سيئة مليئة بالظلال الفاقعة والـ Gradients المزعجة، وقارنها بصفحة نظيفة من موقعنا لتوضيح قوة الانضباط البصري.',
      en: 'Trainer Tip: Contrast a cluttered website against our clean editorial design tokens to demonstrate visual discipline.',
    },
  },
  {
    id: 'slide-03-build',
    stageId: '03-build',
    stageCode: 'BUILD',
    stageNumber: '03',
    slideNumber: 3,
    title: {
      ar: 'العمود الفقري الدلالي (HTML5) وتنسيقات Tailwind CSS',
      en: 'Semantic HTML5 Architecture & Modern Tailwind CSS',
    },
    subtitle: {
      ar: 'بناء كود يمكن قراءته آلياً وصيانته وتوسيعه لسنوات',
      en: 'Crafting machine-readable, accessible code built to endure',
    },
    keyConcept: {
      ar: 'الوسوم الدلالية (main, header, nav, section, article) ليست كماليات، بل هي لغة التواصل مع محركات البحث، قارئات الشاشة، والأداء الفائق.',
      en: 'Semantic HTML tags are not optional formalities; they dictate accessibility, SEO ranking, and DOM parsing performance.',
    },
    takeaways: [
      {
        ar: 'تجنب فخ الـ (Div Soup) واستخدم الوسم المناسب لكل جزء في الواجهة.',
        en: 'Avoid div-soup by selecting semantic containers for every section.',
      },
      {
        ar: 'الـ Flexbox و CSS Grid يحلان معاً 100% من تحديات التجاوب على الهواتف.',
        en: 'Flexbox and CSS Grid resolve 100% of mobile responsive layout challenges.',
      },
      {
        ar: 'نظام Design Tokens مع Tailwind يوفر سرعة إنتاج مذهلة مع الحفاظ على التناسق.',
        en: 'Tailwind with custom CSS tokens guarantees rapid execution and absolute visual cohesion.',
      },
    ],
    interaction: {
      type: 'reveal',
      beforeLabel: {
        ar: 'الكود الشائع السيئ (Div Soup)',
        en: 'Anti-pattern: Div Soup',
      },
      beforeContent: {
        ar: '<div class="top-nav">\n  <div class="logo">App</div>\n  <div class="links">\n    <div class="item">Home</div>\n  </div>\n</div>',
        en: '<div class="top-nav">\n  <div class="logo">App</div>\n  <div class="links">\n    <div class="item">Home</div>\n  </div>\n</div>',
      },
      afterLabel: {
        ar: 'الكود الدلالي الاحترافي (Semantic Web)',
        en: 'Professional Semantic Architecture',
      },
      afterContent: {
        ar: '<header class="flex items-center justify-between">\n  <a href="/" class="font-bold">App</a>\n  <nav aria-label="Main Navigation">\n    <ul class="flex gap-4">\n      <li><a href="/">Home</a></li>\n    </ul>\n  </nav>\n</header>',
        en: '<header class="flex items-center justify-between">\n  <a href="/" class="font-bold">App</a>\n  <nav aria-label="Main Navigation">\n    <ul class="flex gap-4">\n      <li><a href="/">Home</a></li>\n    </ul>\n  </nav>\n</header>',
      },
      note: {
        ar: 'لاحظ كيف أصبح الكود مقروءاً لمحركات البحث وذوي الاحتياجات الخاصة فوراً بمجرد استخدام الوسوم المناسبة.',
        en: 'Notice how semantic tags instantly unlock accessibility and SEO indexing without extra code.',
      },
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: انقر على زر Reveal أمام الطلاب ليروا الفرق المباشر بين الكود الهاوي والكود الاحترافي. شدد على أهمية وسم nav و ul في تقييم محركات البحث.',
      en: 'Trainer Tip: Trigger the reveal toggle to show the difference between hobbyist code and engineering-grade semantic tags.',
    },
  },
  {
    id: 'slide-04-develop',
    stageId: '04-develop',
    stageCode: 'DEVELOP',
    stageNumber: '04',
    slideNumber: 4,
    title: {
      ar: 'المنطق والتطوير التفاعلي: من JavaScript إلى Next.js App Router',
      en: 'Dynamic Interactivity: Modern JS & Next.js Architecture',
    },
    subtitle: {
      ar: 'بث الحياة في الواجهات بمكونات React وإدارة الحالة الذكية',
      en: 'Breathing life into web systems with reactive components and state',
    },
    keyConcept: {
      ar: 'في Next.js الحديث، نجعل الواجهة سريعة وخفيفة عبر تشغيل الحسابات الثقيلة في السيرفر (Server Components) وقصر الـ Client Components على التفاعل الحقيقي فقط.',
      en: 'Modern Next.js achieves lightning performance by running work on the server by default and isolating client components strictly to user interactions.',
    },
    takeaways: [
      {
        ar: 'استخدم "use client" فقط عندما تحتاج تفاعل المستخدم (State, Event Listeners).',
        en: 'Reserve "use client" exclusively for components needing reactive state or DOM events.',
      },
      {
        ar: 'الـ TypeScript يحميك من 90% من أخطاء وقت التشغيل الشائعة في الـ JavaScript.',
        en: 'Strict TypeScript eradicates runtime bugs before code reaches the browser.',
      },
      {
        ar: 'بناء المكونات المستقلة والقابلة لإعادة الاستخدام يسرّع تطوير أي منتج إلى 3 أضعاف.',
        en: 'Modular, composable components triple your development speed on any serious product.',
      },
    ],
    interaction: {
      type: 'code',
      title: {
        ar: 'مكون تفاعلي حديث ومنضبط بنظام TypeScript و Hooks:',
        en: 'Modern Reactive Component with TypeScript & Custom State:',
      },
      language: 'tsx',
      code: `'use client';

import React, { useState } from 'react';

export const CounterToggle: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className="px-4 py-2 rounded-lg font-mono text-xs font-bold border transition-colors"
    >
      {active ? 'SYSTEM ACTIVE' : 'SYSTEM IDLE'}
    </button>
  );
};`,
      explanation: {
        ar: 'بنية بسيطة، خالية من التعقيد، واضحة الدلالة والأنواع.',
        en: 'A concise, robust component structure adhering to modern React paradigms.',
      },
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: اشرح للطلاب مفهوم تدفق البيانات أحادي الاتجاه (Unidirectional Data Flow) ولماذا لا نخلط بين منطق السيرفر وتفاعل المتصفح.',
      en: 'Trainer Tip: Emphasize unidirectional data flow and the performance benefits of keeping server logic decoupled from client interactivity.',
    },
  },
  {
    id: 'slide-05-enhance',
    stageId: '05-enhance',
    stageCode: 'ENHANCE',
    stageNumber: '05',
    slideNumber: 5,
    title: {
      ar: 'الذكاء الاصطناعي كمضاعف إنتاجي: الموجهات والتدقيق البرمجي',
      en: 'Applied AI as a Multiplier: Prompts & Code Auditing',
    },
    subtitle: {
      ar: 'كيف تكون المايسترو المعماري الذي يقود أدوات الـ AI باحتراف؟',
      en: 'Directing AI copilots as an architectural maestro rather than a passive consumer',
    },
    keyConcept: {
      ar: 'الذكاء الاصطناعي لا يكتب كوداً عظيماً بمفرده، بل يعكس دقة فهمك للمشكلة. المطور المحترف يزوّد النموذج بالسياق والمعايير لإنتاج حلول متينة.',
      en: 'AI models mirror your engineering clarity. Senior developers provide precise architecture context and constraints to generate production-grade code.',
    },
    takeaways: [
      {
        ar: 'حدد الدور، الهدف، القيود البرمجية، والمخرجات المطلوبة في كل Prompt.',
        en: 'Always define the persona, strict architectural constraints, and exact output format.',
      },
      {
        ar: 'لا تقبل كوداً لا تفهمه؛ استخدم الـ AI لتفسير المنطق وإيجاد الثغرات.',
        en: 'Never paste code you do not comprehend; use AI to audit performance and edge cases.',
      },
      {
        ar: 'دمج الـ AI مع الـ TypeScript يقلص وقت بناء النماذج الأولية من أيام إلى دقائق.',
        en: 'Pairing AI with TypeScript shrinks prototyping cycles from days to minutes.',
      },
    ],
    interaction: {
      type: 'checklist',
      title: {
        ar: 'المعادلة الذهبية لكتابة برومبت برمجي عالي الجودة:',
        en: 'The Golden Formula for High-Performance Code Prompts:',
      },
      items: [
        {
          ar: 'الدور والسياق: أنت مهندس برمجيات متخصص في Next.js 16 و TypeScript.',
          en: 'Role & Context: Senior Next.js 16 & TypeScript software engineer.',
        },
        {
          ar: 'القيود المعمارية: استخدم Tailwind v4 بدون ألوان مخصصة غير المعرفة في التصميم.',
          en: 'Constraints: Use Tailwind with strict design tokens, zero arbitrary colors.',
        },
        {
          ar: 'المخرجات: كود نظيف مكتمل الأنواع خالي من أي متغيرات غير مستخدمة.',
          en: 'Output: Clean, strictly-typed code with zero lint warnings or unused vars.',
        },
      ],
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: اطلب من أحد المتدربين كتابة Prompt سطحي (مثل: ابنِ لي موقعاً)، واعرض له كيف يفشل، ثم حوّله أمام الجميع إلى Prompt احترافي منظم.',
      en: 'Trainer Tip: Contrast a vague prompt against our 3-part engineering prompt structure live on screen.',
    },
  },
  {
    id: 'slide-06-launch',
    stageId: '06-launch',
    stageCode: 'LAUNCH',
    stageNumber: '06',
    slideNumber: 6,
    title: {
      ar: 'تدقيق الأداء، الـ SEO، والإطلاق الحي المستمر (CI/CD)',
      en: 'Core Web Vitals, Technical SEO & Production Deployment',
    },
    subtitle: {
      ar: 'إيصال موقعك للعالم الحقيقي بأعلى درجات السرعة والأمان',
      en: 'Shipping real-world applications with optimal search visibility and performance',
    },
    keyConcept: {
      ar: 'الموقع غير المحسّن لمحركات البحث والأداء يفقد 50% من زواره في أول 3 ثوانٍ. الإطلاق الحقيقي يبدأ بالتدقيق على Lighthouse والنشر السحابي التلقائي.',
      en: 'Unoptimized websites lose over 50% of visitors in under 3 seconds. True launch readiness demands Lighthouse 95+ scores and automated cloud deployment.',
    },
    takeaways: [
      {
        ar: 'احرص على أرقام خضراء في مقاييس LCP و FID و CLS.',
        en: 'Target green scores across Core Web Vitals (LCP, FID, CLS).',
      },
      {
        ar: 'أضف بيانات OpenGraph والـ Meta Tags لتظهر الروابط بشكل جذاب عند المشاركة.',
        en: 'Configure OpenGraph and JSON-LD schema for compelling social sharing.',
      },
      {
        ar: 'اربط مستودع GitHub بمنصة النشر (مثل Vercel) لتفعيل التحديث الفوري مع كل Push.',
        en: 'Link your git repository to cloud deployment for continuous integration on every commit.',
      },
    ],
    interaction: {
      type: 'quiz',
      question: {
        ar: 'أي من العناصر التالية له التأثير الأكبر على سرعة تحميل صفحة الويب؟',
        en: 'Which element typically has the biggest impact on initial page load speed?',
      },
      options: [
        {
          ar: 'حجم ونوع الصور والوسائط غير المضغوطة.',
          en: 'Unoptimized, heavy image and media assets.',
        },
        {
          ar: 'عدد أسطر ملفات الـ HTML النصية.',
          en: 'The number of lines in raw HTML documents.',
        },
        {
          ar: 'لون الخلفية المستخدم في ملف CSS.',
          en: 'The background hex color specified in CSS.',
        },
      ],
      correctAnswerIndex: 0,
      explanation: {
        ar: 'صحيح! تشكل الصور غير المضغوطة أكثر من 70% من وزن صفحات الويب. استخدام وسم next/image وصيغ WebP/AVIF هو الحل الأمثل.',
        en: 'Correct! Uncompressed images account for over 70% of page weight. Modern Next.js image optimization resolves this effortlessly.',
      },
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: شغل تدقيق Lighthouse حي على شاشة العرض لموقعنا وأظهر للطلاب كيف نحصل على 100/100 في معايير الأداء والـ Accessibility والـ SEO.',
      en: 'Trainer Tip: Run a live Lighthouse audit on our production build to demonstrate a real 100/100 score on Zoom.',
    },
  },
  {
    id: 'slide-07-grow',
    stageId: '07-grow',
    stageCode: 'GROW',
    stageNumber: '07',
    slideNumber: 7,
    title: {
      ar: 'بناء معرض الأعمال الشخصي واقتناص عقود العمل الحر',
      en: 'Authoritative Portfolio & Client Monetization Strategy',
    },
    subtitle: {
      ar: 'تحويل المعرفة البرمجية إلى منتجات وسجل إنجازات يفرض الاحترام',
      en: 'Transforming technical engineering competence into high-value client engagements',
    },
    keyConcept: {
      ar: 'العميل لا يشتري لغات برمجة، بل يشتري حلولاً لمشاكل تجارته وموقعاً يحقق له مبيعات وسمعة. معرض أعمالك هو الدليل القاطع على قدرتك على الإنجاز.',
      en: 'Clients do not purchase raw syntax; they invest in solutions that drive their revenue and prestige. Your portfolio is definitive proof of execution.',
    },
    takeaways: [
      {
        ar: 'اعرض دراسات حالة (Case Studies) توضح المشكلة والحل والنتيجة.',
        en: 'Present structured case studies detailing the challenge, engineering solution, and measurable outcome.',
      },
      {
        ar: 'سعّر على أساس القيمة والنتيجة (Value-Based Pricing) وليس على الساعات فقط.',
        en: 'Price based on the value delivered to the client, not purely hourly rates.',
      },
      {
        ar: 'استمر في التطوير وبناء المنتجات الحقيقية لتظل في مقدمة المنافسين.',
        en: 'Relentlessly build production products to maintain an insurmountable market edge.',
      },
    ],
    interaction: {
      type: 'checklist',
      title: {
        ar: 'أركان البورتفوليو الناجح لصانع الويب المحترف:',
        en: 'Core Elements of a High-Converting Developer Portfolio:',
      },
      items: [
        {
          ar: 'رسالة واضحة في البداية: ماذا أبني وكيف أساعد عملائي أو فريقي؟',
          en: 'Clear upfront value statement: What I build and the value I unlock.',
        },
        {
          ar: 'مشاريع حقيقية منشورة بروابط حية وكود مفتوح يمكن اختباره فوراً.',
          en: 'Real production projects with live demos and clean inspectable architecture.',
        },
        {
          ar: 'قنوات تواصل مباشرة وسهلة دون استمارات معقدة أو روابط معطلة.',
          en: 'Frictionless, direct communication channels for instant collaboration.',
        },
      ],
    },
    trainerNotes: {
      ar: 'نصيحة للمدرب: اختم العرض بدعوة الطلاب لتطبيق مشروعهم النهائي ومتابعة لوحة التقدم. ذكّرهم أن هذا البورتفوليو نفسه مبني بنفس الأصول التي درسوها.',
      en: 'Trainer Tip: Close the presentation by challenging students to complete their capstone project and highlight that this platform is built on these exact principles.',
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
