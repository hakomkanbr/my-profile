import { PresentationSession } from '@/types';

export const SESSION_08: PresentationSession = {
  id: 'session-08',
  number: 8,
  slug: 'session-08',
  title: {
    ar: 'React: التفكير المعماري بالمكونات (Think in Components)',
    en: 'React: Thinking in Components, Props & Declarative UI State',
  },
  subtitle: {
    ar: 'كيف تنتقل من كتابة كود عشوائي إلى بناء نظام واجهات متكامل يعتمد على المكونات القابلة لإعادة الاستخدام؟',
    en: 'Elevating from ad-hoc scripting to building scalable, reusable component systems',
  },
  durationMinutes: 90,
  goal: {
    ar: 'ترسيخ النموذج العقلي لـ React (React Mental Model): فهم كيفية تقسيم الواجهة إلى مكونات نقية، تمرير البيانات عبر الـ Props، وإدارة الحالة التصريحية (Declarative State).',
    en: 'Master the React mental model: decomposing UI into pure modular components, passing props, and managing declarative state.',
  },
  prerequisites: [
    { ar: 'إكمال الجلسة 07 وفهم التفاعل والأحداث بـ JavaScript', en: 'Completion of Session 07 with JS event understanding' },
  ],
  objectives: [
    { ar: 'فهم الفلسفة المعمارية لـ React: لماذا غيرت طريقة بناء الواجهات حول العالم؟', en: 'Understand the architectural philosophy of React and why it powers the modern web' },
    { ar: 'إتقان تمرير البيانات عبر الخصائص (Props) وتحديد أنواعها بدقة (TypeScript Interfaces)', en: 'Master unidirectional data flow via typed component Props' },
    { ar: 'تطبيق التركيب المعماري (Component Composition) وبناء مكونات قابلة لإعادة الاستخدام كـ Button و Card', en: 'Implement component composition to author universal reusable primitives (Button, Card, Badge)' },
    { ar: 'إعادة هيكلة مشروع التخرج ليصبح نظام React متكامل يتكون من مكونات معزولة ونظيفة', en: 'Refactor capstone project into an orchestrated tree of isolated React components' },
  ],
  timeline: [
    { timeRange: '00:00 – 00:10', durationMinutes: 10, label: { ar: 'مقدمة: ما هو React Mental Model ولماذا نهتم به؟', en: 'Intro: What is the React Mental Model?' }, type: 'context' },
    { timeRange: '00:10 – 00:25', durationMinutes: 15, label: { ar: 'المكونات والخصائص (Components & Props): تدفق البيانات في اتجاه واحد', en: 'Components & Props: One-way data flow' }, type: 'concept' },
    { timeRange: '00:25 – 00:45', durationMinutes: 20, label: { ar: 'تطبيق حي: بناء مكون Card ومكون Button موحد لمشروع المطعم', en: 'Live Demo: Building Reusable Button & Card Primitives' }, type: 'demo' },
    { timeRange: '00:45 – 01:00', durationMinutes: 15, label: { ar: 'العرض الشرطي والتكرار (Lists & Conditional Rendering)', en: 'Conditional Rendering & List Mapping' }, type: 'concept' },
    { timeRange: '01:00 – 01:20', durationMinutes: 20, label: { ar: 'تحدي الطلاب: تحويل أجزاء من مشروعهم إلى مكونات React نقية', en: 'Student Challenge: Refactor Project Into Clean Components' }, type: 'practice' },
    { timeRange: '01:20 – 01:25', durationMinutes: 5, label: { ar: 'مراجعة المكونات والتحقق من تعريف الـ Props', en: 'Review student component props interfaces' }, type: 'review' },
    { timeRange: '01:25 – 01:30', durationMinutes: 5, label: { ar: 'الخلاصة والتجهيز لـ Next.js والـ SEO (Session 09)', en: 'Takeaways & Prep for Next.js & SEO (Session 09)' }, type: 'takeaway' },
  ],
  projectMilestone: {
    ar: 'تحويل كامل أجزاء صفحة الهبوط لمشروع التخرج إلى مكونات React نقية وقابلة لإعادة الاستخدام.',
    en: 'Refactor entire capstone landing page into pure, reusable, typed React components.',
  },
  aiRole: {
    ar: 'مساعد في تفكيك المكونات الكبيرة واقتراح واجهات الـ TypeScript Props الدقيقة.',
    en: 'Refactoring co-pilot extracting atomic components and drafting typed TypeScript props schemas.',
  },
  marketConnection: {
    ar: 'تظهر React كثيراً ضمن أدوات تطوير الواجهات؛ تعلّم المبادئ التي تساعدك على بناء مكونات قابلة لإعادة الاستخدام.',
    en: 'React remains the #1 sought-after frontend framework, frequently requested in frontend developer job openings.',
  },
  startScreen: {
    badge: 'SESSION 08 / 12 • REACT ARCHITECTURE',
    headline: {
      ar: 'React: كيف تفكر بالمكونات مثل كبار مهندسي الواجهات؟',
      en: 'React: Thinking in Components Like a Senior Frontend Architect',
    },
    description: {
      ar: 'تعلم الفلسفة المعمارية التي تجعل كودك أنيقاً، قابلاً لإعادة الاستخدام، وسهل الاختبار، من خلال تفكيك الواجهات إلى مكونات نقية.',
      en: 'Master the declarative architectural philosophy that makes your code reusable, testable, and deeply satisfying to maintain.',
    },
    sessionGoal: {
      ar: 'إعادة بناء أقسام مشروع تخرجك كنظام مكونات React منضبط مع تمرير الخصائص (Props).',
      en: 'Re-architect your capstone project sections into a clean React component hierarchy with typed props.',
    },
  },
  endScreen: {
    headline: {
      ar: 'ممتاز! أصبحت الآن تفكر بعقلية React وتبني مكونات احترافية',
      en: 'Bravo! You Now Possess the React Mental Model and Component Mastery',
    },
    keyRecap: [
      {
        ar: 'المكون (Component) هو لبنة بناء مستقلة تستقبل مدخلات (Props) وتعيد واجهة بصرية (JSX).',
        en: 'A Component is a self-contained unit receiving inputs (Props) and returning visual UI (JSX).',
      },
      {
        ar: 'فصل البيانات عن التنسيق يجعل المكون قادراً على عرض أي عنصر دون تكرار الكود.',
        en: 'Decoupling data from styling enables components to render any dynamic payload without duplication.',
      },
      {
        ar: 'التركيب المعماري (Composition) يتفوق على بناء مكونات عملاقة ومعقدة مليئة بالشروط.',
        en: 'Component composition vastly outperforms bloated monolithic components riddled with flags.',
      },
    ],
    nextSessionNumber: '09',
    nextSessionTitle: {
      ar: 'Next.js + SEO: بناء مواقع ويب فائقة السرعة وجاهزة للإنتاج',
      en: 'Next.js + SEO: Building Blazing-Fast, Production-Ready Web Platforms',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's08-slide-01',
      sessionNumber: 8,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      title: { ar: "React — التفكير بالمكونات", en: "React — Think in Components" },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح الجلسة وإعلان الوصول إلى قلب هندسة الواجهات الحديثة.', en: 'Open session: entering the core of modern component engineering.' },
      speakerNotes: { ar: "نفّذ: رحب بالطلاب: \"اليوم نتعلم React ليس بمجرد حفظ دوال، بل باكتساب العقلية التي تبني بها كبرى شركات التقنية واجهاتها!\".\nاسأل: ما الهدف الذي تتوقع تحقيقه في جلسة «React — التفكير بالمكونات»؟\nتحقق: افتتاح الجلسة وإعلان الوصول إلى قلب هندسة الواجهات الحديثة.", en: "Cue: Welcome students: \"Today we master React not by rote syntax, but by adopting the senior component mental model!\"\nAsk: What outcome do you expect from “React — Think in Components”?\nCheck: Open session: entering the core of modern component engineering." },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '08',
          kicker: { ar: 'النموذج العقلي الحديث', en: 'The Modern Mental Model' },
          headline: { ar: 'REACT COMPONENT ARCHITECTURE', en: 'REACT COMPONENT ARCHITECTURE' },
          subheadline: { ar: 'كيف تفكك الواجهات وتبني مكونات نقية وقابلة لإعادة الاستخدام؟', en: 'How to decompose interfaces and build reusable, pure component primitives' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['React 19', 'Components & Props', 'Component Composition', 'Clean Interfaces'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's08-slide-02',
      sessionNumber: 8,
      slideNumber: 2,
      totalSlides: 10,
      type: 'context',
      title: { ar: "لماذا غير React عالم تطوير الويب للأبد؟", en: "Why React Revolutionized the Web" },
      subtitle: { ar: 'من أسلوب التعديل اليدوي المرهق (Imperative) إلى الأسلوب التصريحي الأنيق (Declarative)', en: 'From painful imperative DOM manipulation to elegant declarative state' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'شرح الفارق الجوهري بين البرمجة الإجرائية والبرمجة التصريحية في React.', en: 'Demonstrate the leap from imperative step-by-step DOM scripts to declarative UI states.' },
      speakerNotes: { ar: "نفّذ: وضح: قديماً كنت تأمر المتصفح: \"ابحث عن هذا الزر، غيّر لونه، أضف هذا النص\". في React تصف ما تريده فقط بناءً على البيانات، و React يتكفل بالباقي.\nاسأل: ما المشكلة التي توضّحها «لماذا غير React عالم تطوير الويب للأبد؟»؟\nتحقق: عندما يكبر السكربت وتتداخل مسؤولياته، يصبح تتبع الأخطاء أصعب.", en: "Cue: Imperative: find button, change class, append child. Declarative: you declare the target UI for given data.\nAsk: What problem does “Why React Revolutionized the Web” point to?\nCheck: As scripts grow and responsibilities overlap, debugging becomes harder." },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'الانتقال من التعديل اليدوي لكل وسم في المتصفح إلى كتابة مكونات تعبر عن شكل الشاشة بناءً على البيانات المتوفرة.',
            en: 'Transitioning from manual DOM mutations to declarative components declaring UI as a function of data.',
          },
          realWorldProblem: {
            ar: 'عندما يكبر السكربت وتتداخل مسؤولياته، يصبح تتبع الأخطاء أصعب.',
            en: 'As scripts grow and responsibilities overlap, debugging becomes harder.',
          },
          whyItMatters: {
            ar: 'مع React، يمكنك إعادة استخدام المكون نفسه مع بيانات مختلفة، مع ضمان عزل كل مكون عن الآخر تماماً.',
            en: 'With React, you craft a single component primitive and reuse it with different data across your platform.',
          },
        },
      },
    },

    // Slide 3: Concept (Props & Unidirectional Data Flow)
    {
      id: 's08-slide-03',
      sessionNumber: 8,
      slideNumber: 3,
      totalSlides: 10,
      type: 'concept',
      title: { ar: "الخصائص (Props) — تمرير البيانات في اتجاه واحد", en: "Props — Unidirectional Data Flow" },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'شرح مفهوم الـ Props كمعاملات دالة (Function Arguments) تتحكم في شكل وسلوك المكون.', en: 'Anchor Props as typed function parameters governing component presentation and behavior.' },
      speakerNotes: { ar: "نفّذ: وضح: المكون هو دالة عادية تستقبل كائن اسمه Props. عندما تمرر له title=\"Pizza\" يعرض البيتزا، وعندما تمرر title=\"Pasta\" يعرض الباستا.\nاسأل: كيف تطبّق هذا المبدأ: المكونات النقية تستقبل الخصائص (Props) وتعرضها دون أن تغير قيمتها الأصلية.؟\nتحقق: قاعدة ذهبية: لا تعدل قيمة الـ Props داخل المكون أبداً؛ الخصائص للقراءة فقط (Read-Only).", en: "Cue: A component is a pure function taking a Props object. Pass title=\"Pizza\", it renders Pizza cleanly.\nAsk: How would you apply this principle: Pure components receive props and render UI deterministically without mutating inputs.?\nCheck: Golden Rule: Never mutate props inside a child component; props are strictly immutable and read-only." },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'المكونات النقية تستقبل الخصائص (Props) وتعرضها دون أن تغير قيمتها الأصلية.',
            en: 'Pure components receive props and render UI deterministically without mutating inputs.',
          },
          tagline: { ar: 'ONE-WAY DATA FLOW CONTRACT', en: 'ONE-WAY DATA FLOW CONTRACT' },
          explanation: {
            ar: 'في React، تتدفق البيانات دائماً من الأعلى إلى الأسفل (Parent to Child). المكون الأب يملك البيانات ويمررها لأبنائه عبر الـ Props، مما يجعل تتبع حركة البيانات سهلاً ومتوقعاً.',
            en: 'In React, data flows strictly top-down (Parent to Child). Parents hold domain data and dispatch attributes downstream via props, ensuring predictable tracking.',
          },
          bulletPoints: [
            { ar: 'Props كعقد برمجي: نحدد نوع كل خاصية بـ TypeScript Interface لمنع الأخطاء', en: 'Props as a contract: Strictly typed via TypeScript interfaces to eliminate runtime flaws' },
            { ar: 'إعادة الاستخدام المطلقة: مكون Card واحد يمكنه عرض وجبة، مقال، أو منتج متجر', en: 'Universal reuse: A single Card primitive renders dishes, articles, or services' },
            { ar: 'الأبناء كعنصر خاص (children prop): تتيح وضع أي محتوى داخل المكون بمرونة فائقة', en: 'The children prop: Unlocks supreme composition by slotting custom markup inside containers' },
            { ar: 'القيم الافتراضية (Default Props): توفير قيم احتياطية في حال لم يمرر الأب معلومة معينة', en: 'Default fallback values: Providing robust defaults when optional props are omitted' },
          ],
          architecturalRule: {
            ar: 'قاعدة ذهبية: لا تعدل قيمة الـ Props داخل المكون أبداً؛ الخصائص للقراءة فقط (Read-Only).',
            en: 'Golden Rule: Never mutate props inside a child component; props are strictly immutable and read-only.',
          },
        },
      },
    },

    // Slide 4: Code (Universal Button & Card Primitives)
    {
      id: 's08-slide-04',
      sessionNumber: 8,
      slideNumber: 4,
      totalSlides: 10,
      type: 'code',
      title: { ar: "بناء مكون Button موحد مع Typed Props", en: "Code Artifact — Universal Button Primitive" },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'إظهار كيفية كتابة مكون زر موحد يقبل variants مختلفة بدلاً من تكرار كود الأزرار في كل ملف.', en: 'Demonstrate writing a universal typed Button primitive replacing duplicated button styles.' },
      speakerNotes: { ar: "نفّذ: اشرح interface ButtonProps: يقبل variant: primary أو outline، ويقبل children. هذا المكون نستخدمه في كل مكان بالمشروع.\nاسأل: ما وظيفة المثال في «بناء مكون Button موحد مع Typed Props»؟\nتحقق: مكون زر موحد ومُنمذج بـ TypeScript يقبل أشكالاً وأحجاماً مختلفة ويعاد استخدامه في كامل المشروع. يسمح مكوّن الزر المشترك بتعديل الشكل في مكان واحد بدلاً من تكرار التغيير في كل موضع.", en: "Cue: Explain typed interface: variant can be primary or outline. We reuse this exact button everywhere.\nAsk: What does the example in “Code Artifact — Universal Button Primitive” do?\nCheck: Universal typed button primitive accepting polymorphic variants and sizes. A shared button component lets you update styling in one place instead of editing repeated markup." },
      payload: {
        type: 'code',
        data: {
          language: 'tsx',
          codeSnippet: `// src/components/ui/Button.tsx — Universal Reusable Button
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-bold transition-all cursor-pointer';
  
  const variants = {
    primary: 'bg-[#641a01] text-white hover:opacity-95 shadow-sm',
    outline: 'border-2 border-[#641a01] text-[#641a01] hover:bg-[#641a01]/10',
    ghost: 'text-neutral-700 hover:bg-neutral-100',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  };

  return (
    <button 
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
          what: { ar: 'مكون زر موحد ومُنمذج بـ TypeScript يقبل أشكالاً وأحجاماً مختلفة ويعاد استخدامه في كامل المشروع.', en: 'Universal typed button primitive accepting polymorphic variants and sizes.' },
          why: { ar: 'يسمح مكوّن الزر المشترك بتعديل الشكل في مكان واحد بدلاً من تكرار التغيير في كل موضع.', en: 'A shared button component lets you update styling in one place instead of editing repeated markup.' },
          when: { ar: 'اللبنة الأساسية الأولى التي يبنيها مهندس الواجهات في أي نظام تصميم (Design System).', en: 'The quintessential initial UI primitive crafted in any professional design system.' },
        },
      },
    },

    // Slide 5: Concept (Component Composition over Inheritance)
    {
      id: 's08-slide-05',
      sessionNumber: 8,
      slideNumber: 5,
      totalSlides: 10,
      type: 'concept',
      title: { ar: "تركيب المكونات", en: "Component Composition" },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'تعليم الطلاب كيف يركبون المكونات كقطع الليجو بدلاً من كتابة مكونات عملاقة ومعقدة.', en: 'Teach students to compose small components like Lego bricks over massive monolithic cards.' },
      speakerNotes: { ar: "نفّذ: أكد: بدل أن تبني مكون DishCard معقد، ابنِ Card عام وضعه داخله Card.Header و Card.Body و Card.Footer.\nاسأل: كيف تطبّق هذا المبدأ: المكونات الصغيرة البسيطة التي تركب معاً أفضل بـ 100 مرة من مكون ضخم واحد مليء بالشروط المعقدة.؟\nتحقق: التركيب (Composition) يعني أن تبني مكونات عامة مثل <Card> و <Badge> و <Button>، ثم تركبها معاً لصناعة بطاقة منتج، بطاقة مقال، أو بطاقة تعليق، دون تكرار سطر CSS واحد.", en: "Cue: Instead of an inflexible monolithic card, compose Card, Card.Image, and Card.Footer.\nAsk: How would you apply this principle: Small composable components assembled like Lego bricks vastly outperform complex monolithic beasts.?\nCheck: Composition empowers you to build universal building blocks (<Card>, <Badge>, <Button>) and snap them together to form dishes, reviews, or team profiles without duplicating layout CSS." },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'المكونات الصغيرة البسيطة التي تركب معاً أفضل بـ 100 مرة من مكون ضخم واحد مليء بالشروط المعقدة.',
            en: 'Small composable components assembled like Lego bricks vastly outperform complex monolithic beasts.',
          },
          tagline: { ar: 'COMPOSE LIKE LEGO BRICKS', en: 'COMPOSE LIKE LEGO BRICKS' },
          explanation: {
            ar: 'التركيب (Composition) يعني أن تبني مكونات عامة مثل <Card> و <Badge> و <Button>، ثم تركبها معاً لصناعة بطاقة منتج، بطاقة مقال، أو بطاقة تعليق، دون تكرار سطر CSS واحد.',
            en: 'Composition empowers you to build universal building blocks (<Card>, <Badge>, <Button>) and snap them together to form dishes, reviews, or team profiles without duplicating layout CSS.',
          },
          bulletPoints: [
            { ar: 'استخدام خاصية children لتمرير أي محتوى بحرية تامة داخل الحاوية', en: 'Leveraging the children prop to slot custom content into containers freely' },
            { ar: 'سهولة الاختبار: فحص مكون Button الصغير أسهل وأسرع بكثير من فحص صفحة كاملة', en: 'Trivial testing: Validating a tiny Button primitive takes seconds compared to full pages' },
            { ar: 'تسهيل العمل مع الذكاء الاصطناعي: تطلب من AI تعديل مكون واحد دون خطر تخريب البقية', en: 'Frictionless AI pairing: Instructing AI to refactor a single atomic component carries zero risk' },
            { ar: 'سرعة بناء الميزات الجديدة: تركيب المكونات الموجودة يسرّع بناء الميزات عند إعادة استخدام المكونات', en: 'Instant feature velocity: Recombining existing primitives can speed up feature delivery by reusing existing primitives' },
          ],
        },
      },
    },

    // Slide 6: Demo (Live Component Refactoring)
    {
      id: 's08-slide-06',
      sessionNumber: 8,
      slideNumber: 6,
      totalSlides: 10,
      type: 'demo',
      title: { ar: "تفكيك بطاقة وجبة إلى مكونات React مستقلة", en: "Live Demo — Deconstructing Dish Card into Pure Components" },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'إظهار عملية الـ Refactoring عملياً أمام الطلاب: تحويل كود مكرر إلى مكون قابل لإعادة الاستخدام.', en: 'Demonstrate live refactoring: turning duplicated markup into a clean typed component.' },
      speakerNotes: { ar: "نفّذ: خذ كود البطاقة من الجلسة 06، استخرج منه مكون DishCard.tsx وضع له interface DishCardProps. استبدل التكرار بـ dishes.map.\nاسأل: إعادة هيكلة بطاقات القائمة إلى مكون DishCard مستقل ومُنمذج بـ TypeScript.\nتحقق: كود منظم ونظيف يستدعي المكونات بأسلوب أنيق وبأقل عدد أسطر ممكن.", en: "Cue: Extract DishCard component from Session 06, add typed interface, replace duplication with clean map.\nAsk: Refactor menu items into an isolated, strongly-typed DishCard component primitive.\nCheck: Immaculate component abstraction with zero repetitive markup and strong type safety." },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'إعادة هيكلة بطاقات القائمة إلى مكون DishCard مستقل ومُنمذج بـ TypeScript.',
            en: 'Refactor menu items into an isolated, strongly-typed DishCard component primitive.',
          },
          promptToUse: `Refactor this duplicated card markup into an isolated DishCard component in React 19:
1. Define TypeScript interface DishCardProps with id, name, price, description, and onOrder handler.
2. Replace hardcoded buttons with our reusable Button component.
3. Export cleanly for ingestion in MenuGrid.tsx.`,
          instructorSteps: [
            { ar: 'إنشاء ملف src/components/DishCard.tsx وتحديد interface الخصائص', en: 'Create src/components/DishCard.tsx and declare typed props interface' },
            { ar: 'نقل كود الـ JSX الخاص بالبطاقة إلى المكون الجديد واستخدام الـ Props', en: 'Migrate card JSX into new component and wire props variables' },
            { ar: 'استبدال الكود المكرر في MenuGrid.tsx باستدعاء <DishCard key={...} />', en: 'Clean up MenuGrid.tsx by mapping clean <DishCard key={dish.id} {...dish} />' },
            { ar: 'التأكد من أن الصفحة تظهر بنفس الجمال في المتصفح بكود أكثر تنظيماً', en: 'Verify identical visual fidelity with a cleaner, more modular codebase' },
          ],
          expectedOutput: {
            ar: 'كود منظم ونظيف يستدعي المكونات بأسلوب أنيق وبأقل عدد أسطر ممكن.',
            en: 'Immaculate component abstraction with zero repetitive markup and strong type safety.',
          },
        },
      },
    },

    // Slide 7: Challenge (Student Component Refactoring Lab)
    {
      id: 's08-slide-07',
      sessionNumber: 8,
      slideNumber: 7,
      totalSlides: 10,
      type: 'challenge',
      title: { ar: "استخراج مكونين قابلين لإعادة الاستخدام", en: "Student Challenge — Extract 2 Reusable React Primitives" },
      estimatedMinutes: 8,
      teachingGoal: { ar: 'استخراج كل طالب لمكون Button ومكون Card لمشروعه وتطبيقهما في صفحته.', en: 'Every student extracts a reusable Button and Card component in their project repo.' },
      speakerNotes: { ar: "نفّذ: أطلق مؤقت الـ 5 دقائق. اطلب منهم استخراج مكون Button أو Card في مجلد منفصل واستدعائه في صفحتهم.\nاسأل: ما الناتج الذي ستسلّمه؟ استخراج مكون Button موحد أو بطاقة قابلة لإعادة الاستخدام في مشروعك وتمرير البيانات عبر Props.\nتحقق: مكونان نظيفان قابلان لإعادة الاستخدام مدمجان بنجاح في مشروع تخرجك.", en: "Cue: Launch 5-minute timer. Instruct students to extract a clean Button or Card primitive with typed props.\nAsk: What will you submit? Extract a universal Button primitive or reusable Card in your project and pass data via typed Props.\nCheck: Two production-grade reusable React primitives wired into your capstone project." },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'استخراج مكون Button موحد أو بطاقة قابلة لإعادة الاستخدام في مشروعك وتمرير البيانات عبر Props.',
            en: 'Extract a universal Button primitive or reusable Card in your project and pass data via typed Props.',
          },
          durationMinutes: 5,
          objective: {
            ar: 'ممارسة التفكير المعماري لـ React والتخلص من تكرار الأكواد في مشروع التخرج.',
            en: 'Exercise the React component mental model and eradicate repetitive markup in your capstone repo.',
          },
          instructions: [
            { ar: 'أنشئ ملف src/components/ui/Button.tsx أو ملف بطاقتك الخاصة', en: 'Create src/components/ui/Button.tsx or your custom Card primitive' },
            { ar: 'حدد interface يحتوي على الخصائص المطلوبة (العنوان، السعر، أو الـ variant)', en: 'Declare a TypeScript interface with required props' },
            { ar: 'استبدل كود الأزرار أو البطاقات القديمة في مشروعك بالمكون الجديد', en: 'Replace old hardcoded markup with your new reusable component' },
            { ar: 'تأكد من عمل الصفحة بسلاسة دون أي أخطاء في الـ Terminal أو المتصفح', en: 'Confirm clean compile and error-free rendering in your browser' },
          ],
          starterPromptOrCode: 'interface CardProps { title: string; desc: string; price: number; } export function Card(props: CardProps) {...}',
          deliverable: {
            ar: 'مكونان نظيفان قابلان لإعادة الاستخدام مدمجان بنجاح في مشروع تخرجك.',
            en: 'Two production-grade reusable React primitives wired into your capstone project.',
          },
        },
      },
    },

    // Slide 8: Project (Milestone 08)
    {
      id: 's08-slide-08',
      sessionNumber: 8,
      slideNumber: 8,
      totalSlides: 10,
      type: 'project',
      title: { ar: "معمارية React المكتملة", en: "Project Milestone — Pure React Component Architecture" },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت اكتمال تحويل المشروع بالكامل إلى شجرة مكونات React نقية.', en: 'Confirm capstone project is now a textbook modular React component tree.' },
      speakerNotes: { ar: "نفّذ: هنئ الطلاب: \"مشروعك الآن يستخدم مكونات مستقلة قابلة لإعادة الاستخدام؛ إنها طريقة تساعد على تنظيم الواجهة وصيانتها.\".\nاسأل: أي مخرج من هذه المرحلة يحتاج إلى استكمال؟\nتحقق: مكونات أساسية موحدة (Button و Card) قابلة لإعادة الاستخدام؛ فصل بيانات النصوص والأطباق في مصفوفات مستقلة؛ هيكل مشروع نظيف يقتصر فيه ملف الصفحة الرئيسية على تركيب المكونات", en: "Cue: Congratulate learners: \"Your project now uses independent reusable components, helping organize and maintain its interface.\"\nAsk: Which deliverable from this phase still needs work?\nCheck: Reusable core UI primitives (Button, Card, Badge); Decoupled domain data arrays cleanly fed into components; A clean page.tsx orchestrator focused on composing components" },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 08: بناء نظام المكونات المعيارية بـ React', en: 'Phase 08: Modular React Component System' },
          stepNumber: '08',
          whatWeBuildNow: {
            ar: 'تحويل كامل أقسام صفحة الهبوط إلى مكونات React نقية تعتمد على Props وتفصل البيانات.',
            en: 'Refactor all landing page features into pure React components leveraging typed props.',
          },
          deliverables: [
            { ar: 'مكونات أساسية موحدة (Button و Card) قابلة لإعادة الاستخدام', en: 'Reusable core UI primitives (Button, Card, Badge)' },
            { ar: 'فصل بيانات النصوص والأطباق في مصفوفات مستقلة', en: 'Decoupled domain data arrays cleanly fed into components' },
            { ar: 'هيكل مشروع نظيف يقتصر فيه ملف الصفحة الرئيسية على تركيب المكونات', en: 'A clean page.tsx orchestrator focused on composing components' },
          ],
          connectionToFinalProject: {
            ar: 'في الجلسة 09 سنأخذ هذه المكونات ونضعها في قمة الإنتاجية: محرك Next.js 16 مع دعم الـ SEO الخارق والأداء العالي.',
            en: 'In Session 09 we propel these components to production mastery: Next.js 16 with extreme SEO and speed.',
          },
        },
      },
    },

    // Slide 9: Takeaway
    {
      id: 's08-slide-09',
      sessionNumber: 8,
      slideNumber: 9,
      totalSlides: 10,
      type: 'takeaway',
      title: { ar: "خلاصة: React", en: "Recap: React" },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت ركائز نموذج React العقلي وقوة التركيب المعماري.', en: 'Cement the React mental model and compositional architecture.' },
      speakerNotes: { ar: "نفّذ: اقرأ النقاط الثلاث. أكد: \"البرمجة بـ React ليست مجرد syntax؛ إنها طريقة تفكير تفصل المسؤوليات وتجعل الكود قابلاً للتوسع\".\nاسأل: أي مبدأ من «خلاصة: React» ستستخدمه في مشروعك؟\nتحقق: المكونات النظيفة هي العملة الحقيقية لمهندس الواجهات الحديث.", en: "Cue: Review takeaways: React is an architectural discipline of decoupling responsibilities and composing primitives.\nAsk: Which principle from “Recap: React” will you use in your project?\nCheck: Clean, composable components are the true currency of the modern frontend engineer." },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'فكر في المكون كدالة نقية (Pure Function)', en: 'Components as Pure Functions' },
              description: {
                ar: 'المكون الممتاز هو الذي يستقبل Props ويعيد JSX، ولا يحدث أي آثار جانبية عشوائية في بقية المشروع.',
                en: 'Premier components receive props and return JSX deterministically with zero collateral side-effects.',
              },
            },
            {
              number: '02',
              title: { ar: 'التركيب يتفوق على التعقيد (Composition Wins)', en: 'Composition Trumps Complexity' },
              description: {
                ar: 'ابنِ مكونات صغيرة بسيطة وركّبها معاً كقطع الليجو؛ هذا يسهل صيانة الكود وتوجيه الذكاء الاصطناعي بدقة.',
                en: 'Assemble small Lego-like primitives together; this makes debugging trivial and AI prompting surgical.',
              },
            },
            {
              number: '03',
              title: { ar: 'الأنواع بـ TypeScript تحميك من الأخطاء', en: 'TypeScript Props Protect Your Build' },
              description: {
                ar: 'تحديد interface الخصائص يجعل محرر الكود والذكاء الاصطناعي ينبهانك لأي نقص في البيانات قبل تشغيل الموقع.',
                en: 'Defining typed props interfaces catches missing attributes at compile time before deployment.',
              },
            },
          ],
          coreMotto: {
            ar: 'المكونات النظيفة هي العملة الحقيقية لمهندس الواجهات الحديث.',
            en: 'Clean, composable components are the true currency of the modern frontend engineer.',
          },
        },
      },
    },

    // Slide 10: Next
    {
      id: 's08-slide-10',
      sessionNumber: 8,
      slideNumber: 10,
      totalSlides: 10,
      type: 'next',
      title: { ar: "التالي: Next.js وSEO", en: "Next: Next.js & SEO" },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'تشويق الطلاب للجلسة 09 حيث سنحول مكونات React إلى موقع إنتاجي حقيقي يتصدر محركات البحث.', en: 'Build anticipation for Session 09: elevating React components into a production Next.js powerhouse.' },
      speakerNotes: { ar: "نفّذ: اختم الجلسة: \"في الجلسة 09 سننتقل إلى Next.js: سنتعلم كيف تجعل موقعك يفتح في رمشة عين، وكيف يتصدر الصفحة الأولى في Google عبر الـ SEO!\".\nاسأل: ما الذي ستجهزه قبل الجلسة القادمة؟\nتحقق: تأكد من أن مشروعك مبني بنظام المكونات النظيفة لندخل به مباشرة في تحسينات Next.js.", en: "Cue: Closing: \"In Session 09 we enter Next.js: blazing performance, server layouts, and top-tier SEO auditing!\"\nAsk: What will you prepare before the next session?\nCheck: Confirm your component refactoring is committed and clean ahead of Session 09." },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '09',
          nextSessionTitle: {
            ar: 'Next.js + SEO: بناء مواقع ويب فائقة السرعة وجاهزة للإنتاج',
            en: 'Next.js + SEO: Building Blazing-Fast, Production-Ready Web Platforms',
          },
          teaser: {
            ar: 'سنتعلم App Router وميزات Server Components، ضبط بيانات الـ Metadata لمحركات البحث، تحسين سرعة الصور، واستخدام AI لتدقيق الـ SEO والأداء.',
            en: 'Master Next.js App Router layouts, search metadata, image optimization budgets, and AI-powered SEO audits.',
          },
          preparationHint: {
            ar: 'تأكد من أن مشروعك مبني بنظام المكونات النظيفة لندخل به مباشرة في تحسينات Next.js.',
            en: 'Confirm your component refactoring is committed and clean ahead of Session 09.',
          },
        },
      },
    },
  ],
};
