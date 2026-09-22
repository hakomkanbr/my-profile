import { PresentationSession } from '@/types';

export const SESSION_06: PresentationSession = {
  id: 'session-06',
  number: 6,
  slug: 'session-06',
  title: {
    ar: 'HTML + CSS: الأساس المتين لبناء صفحات ويب سريعة ومرنة',
    en: 'HTML + CSS Foundations: Resilient, Semantic & Responsive Layouts',
  },
  subtitle: {
    ar: 'بناء الهيكل الدلالي للمشروع وتطبيق أنظمة التنسيق الحديثة (Flexbox & Grid) دون نظريات جافة',
    en: 'Constructing project semantic skeletons and modern responsive layouts without boring theory',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين الطالب من صياغة هيكل HTML دلالي عالي الجودة متوافق مع معايير الوصولية وSEO، وبناء تخطيطات CSS متجاوبة بالكامل لصفحة هبوط مشروعه.',
    en: 'Master semantic HTML for accessibility and SEO, and engineer fully responsive CSS layouts (Flexbox/Grid) for the capstone landing page.',
  },
  prerequisites: [
    { ar: 'إكمال الجلسة 05 واعتماد خطة التنفيذ المعمارية', en: 'Completion of Session 05 with approved implementation plan' },
  ],
  objectives: [
    { ar: 'إتقان استخدام وسوم HTML5 الدلالية (<header>, <main>, <section>, <article>, <footer>) بدل الفوضى في استخدام <div>', en: 'Master HTML5 semantic elements over generic div soups' },
    { ar: 'فهم نموذج الصندوق (Box Model) والتحكم الدقيق في الهوامش والحواشي (Padding & Margin)', en: 'Master the CSS Box Model and spatial control' },
    { ar: 'تطبيق Flexbox لمحاذاة العناصر في بعد واحد و Grid لإنشاء شبكات المنتجات والأقسام', en: 'Command Flexbox for 1D alignment and Grid for 2D responsive cards' },
    { ar: 'استخدام الذكاء الاصطناعي لفحص كود الـ HTML وتدقيق الوصولية (Accessibility Audit)', en: 'Leverage AI to audit semantic markup and WCAG accessibility standards' },
  ],
  timeline: [
    { timeRange: '00:00 – 00:10', durationMinutes: 10, label: { ar: 'مقدمة: لماذا يهم الـ Semantic HTML محركات البحث ومستخدمي الهواتف؟', en: 'Why Semantic HTML matters for SEO & Mobile' }, type: 'context' },
    { timeRange: '00:10 – 00:25', durationMinutes: 15, label: { ar: 'الهيكل الدلالي: تفكيك قسم Hero وقسم القائمة كودياً', en: 'Semantic Skeleton: Hero & Product Grid Markup' }, type: 'concept' },
    { timeRange: '00:25 – 00:45', durationMinutes: 20, label: { ar: 'تطبيق حي: بناء شبكة الوجبات المتجاوبة بـ CSS Grid و Flexbox', en: 'Live Demo: Responsive Menu Grid via CSS Grid/Flex' }, type: 'demo' },
    { timeRange: '00:45 – 01:00', durationMinutes: 15, label: { ar: 'تدقيق الذكاء الاصطناعي: مراجعة الكود لمعايير الوصولية والـ SEO', en: 'AI Accessibility & Semantics Code Audit' }, type: 'ai' },
    { timeRange: '01:00 – 01:20', durationMinutes: 20, label: { ar: 'تحدي الطلاب: بناء وتنسيق بطاقات مشروعهم واختبارها على الهاتف', en: 'Student Challenge: Build & Style Responsive Cards' }, type: 'practice' },
    { timeRange: '01:20 – 01:25', durationMinutes: 5, label: { ar: 'مراجعة شاشات الطلاب والتأكد من التجاوب على 375px', en: 'Review student mobile responsiveness at 375px' }, type: 'review' },
    { timeRange: '01:25 – 01:30', durationMinutes: 5, label: { ar: 'الخلاصة والتجهيز لجلسة التفاعل بـ JavaScript (Session 07)', en: 'Takeaways & Prep for JavaScript (Session 07)' }, type: 'takeaway' },
  ],
  projectMilestone: {
    ar: 'بناء كود HTML و CSS الكامل لقسم Hero وشبكة الخدمات أو المنتجات لمشروع التخرج.',
    en: 'Implement fully semantic HTML and responsive CSS for Hero and Service Grid sections.',
  },
  aiRole: {
    ar: 'مدقق وصولية (Accessibility Auditor) يفحص معايير WCAG وتناسق الـ Semantic Tags.',
    en: 'Accessibility and semantics auditor reviewing DOM markup against WCAG AA standards.',
  },
  marketConnection: {
    ar: 'المواقع ذات الهيكل الدلالي النظيف تتصدر نتائج بحث Google بنسبة أسرع بـ 3 أضعاف مقارنة بالمواقع المبنية بفوضى الـ divs.',
    en: 'Semantic markup indexes 3x faster on Google search algorithms than unstructured div soup.',
  },
  startScreen: {
    badge: 'SESSION 06 / 12 • WEB FOUNDATIONS',
    headline: {
      ar: 'HTML + CSS: الأساس المتين الذي تُبنى عليه أرقى مواقع العالم',
      en: 'HTML + CSS Foundations: Building the Resilient Modern Web Bedrock',
    },
    description: {
      ar: 'لا نظريات جافة أو حفظ دوال؛ سنبني أقسام مشروعك الحقيقي فوراً ونتعلم التجاوب والوصولية والمعمارية البصرية من خلال الكود الحي.',
      en: 'Zero boring theory: build real project sections immediately and master responsive layout mechanics through live code.',
    },
    sessionGoal: {
      ar: 'بناء الهيكل الدلالي وتخطيطات CSS المتجاوبة لقسمي البداية والشبكة في مشروعك.',
      en: 'Construct semantic HTML and responsive CSS layouts for your Hero and Product/Service grid.',
    },
  },
  endScreen: {
    headline: {
      ar: 'مذهل! مشروعك الآن يملك هيكلاً دلالياً نظيفاً وتخطيطاً فائق التجاوب',
      en: 'Superb! Your Project Now Commands Clean Semantic Markup & Responsive Flow',
    },
    keyRecap: [
      {
        ar: 'الوسوم الدلالية (Semantic HTML) تمنح موقعك معنى تفهمه خوارزميات محركات البحث وقارئات الشاشة.',
        en: 'Semantic elements give structural meaning understood by search crawlers and screen readers.',
      },
      {
        ar: 'استخدم Flexbox للمحاذاة في اتجاه واحد، واستخدم Grid لإنشاء شبكات البطاقات ثنائية الأبعاد.',
        en: 'Deploy Flexbox for 1D linear alignment; deploy CSS Grid for 2D card matrices.',
      },
      {
        ar: 'التجاوب يبدأ من الهاتف (Mobile-First) لضمان تجربة سلسة على جميع الأجهزة والشاشات.',
        en: 'Responsive design starts with mobile-first constraints, scaling up gracefully to desktop.',
      },
    ],
    nextSessionNumber: '07',
    nextSessionTitle: {
      ar: 'JavaScript: بث الحياة والتفاعل في الموقع (Events, DOM & APIs)',
      en: 'JavaScript: Bringing the Web Alive with Dynamic Interaction & APIs',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's06-slide-01',
      sessionNumber: 6,
      slideNumber: 1,
      totalSlides: 16,
      type: 'title',
      title: { ar: 'HTML + CSS: الأساس المتين للويب', en: 'HTML + CSS: The Web Bedrock' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح الجلسة وربطها المباشر بتنفيذ خطة المشروع المعتمدة في الجلسة 05.', en: 'Open session: executing the audited implementation plan in raw code.' },
      speakerNotes: { ar: 'رحب بالطلاب: "اليوم نبدأ بناء الأكواد التأسيسية. كل وسم HTML وكل فئة CSS سنكتبها اليوم تذهب مباشرة إلى ملفات مشروعك!".', en: 'Welcome learners: "Today we build real markup and styles feeding directly into your project repo!"' },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '06',
          kicker: { ar: 'البناء الهندسي التأسيسي', en: 'Foundational Web Construction' },
          headline: { ar: 'HTML + CSS FOUNDATIONS', en: 'HTML + CSS FOUNDATIONS' },
          subheadline: { ar: 'هندسة الهيكل الدلالي وبناء التخطيطات المتجاوبة بـ Flexbox و Grid', en: 'Architecting semantic markup and responsive layouts with Flexbox and Grid' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['Semantic HTML', 'CSS Box Model', 'Flexbox & Grid', 'Accessibility Audit'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's06-slide-02',
      sessionNumber: 6,
      slideNumber: 2,
      totalSlides: 16,
      type: 'context',
      title: { ar: 'فوضى الـ Div Soup مقابل الهيكل الدلالي (Semantic HTML)', en: 'Div Soup Chaos vs Semantic Order' },
      subtitle: { ar: 'لماذا تدفع الشركات الكبرى آلاف الدولارات لإعادة هيكلة أكوادها بطريقة دلالية؟', en: 'Why top tech companies invest heavily in semantic markup over generic nested divs' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'إيضاح الضرر الفادح لاستبدال وسوم HTML الدلالية بآلاف الـ divs العشوائية.', en: 'Expose the architectural, SEO, and accessibility costs of mindless nested div soups.' },
      speakerNotes: { ar: 'اعرض الفارق: عندما تكتب <section> يعرف المتصفح ومحرك البحث أن هذا قسم مستقل. عندما تكتب <div> فهو مجرد وعاء بلا معنى.', en: 'Explain: <section> has structural meaning for search crawlers; <div> is just a dumb semantic-free box.' },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'محركات البحث الحديثة تعاقب المواقع المليئة بفوضى الـ divs وتكافئ المواقع ذات الهيكل الدلالي النظيف بترتيب أعلى وسرعة أرشفة مضاعفة.',
            en: 'Search algorithms penalize div soups and grant top index priority to clean semantic DOM trees.',
          },
          realWorldProblem: {
            ar: 'المواقع غير الدلالية تصبح مستحيلة القراءة لـ 1.3 مليار مستخدم حول العالم يعتمدون على تقنيات الوصولية وقارئات الشاشة.',
            en: 'Non-semantic sites exclude 1.3 billion users globally reliant on screen readers and accessibility tools.',
          },
          whyItMatters: {
            ar: 'كتابة HTML دلالي من البداية يجعلك تبني كوداً يتصدر محركات البحث ويخدم جميع المستخدمين دون الحاجة لإعادة كتابته.',
            en: 'Writing semantic HTML from day one ensures maximum SEO visibility and zero refactor overhead.',
          },
        },
      },
    },

    // Slide 3: Concept (Semantic HTML Map)
    {
      id: 's06-slide-03',
      sessionNumber: 6,
      slideNumber: 3,
      totalSlides: 16,
      type: 'concept',
      title: { ar: 'خريطة الوسوم الدلالية الأساسية لصفحة الهبوط', en: 'The Core Semantic Elements Map' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'حفظ خريطة الوسوم الستة الأساسية وموضع كل منها في الواجهة.', en: 'Map the 6 essential semantic structural elements to their exact page roles.' },
      speakerNotes: { ar: 'استعرض الوسوم: header للترويسة، nav للقوائم، main للمحتوى الأساسي، section للأقسام الرئيسية، article للبطاقات المستقلة، footer للتذييل.', en: 'Walk through: <header>, <nav>, <main>, <section>, <article>, and <footer>. Every element has an unambiguous job.' },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'كل جزء من الصفحة له وسم دلالي صريح خلقه معيار W3C؛ استخدم الوسم المناسب في مكانه الصحيح.',
            en: 'Every section of a web page has an explicit W3C semantic element; use each in its intended role.',
          },
          tagline: { ar: 'SEMANTIC CLARITY OVER GENERIC BOXES', en: 'SEMANTIC CLARITY OVER GENERIC BOXES' },
          explanation: {
            ar: 'بدل الاعتماد على <div className="header">، نستخدم <header> الأصيل. هذا يقلل حجم الكود ويزيد من سهولة صيانته وفهمه بواسطة خوارزميات الذكاء الاصطناعي.',
            en: 'Instead of <div className="header">, deploy native <header>. This shrinks DOM weight and eases AI parsing.',
          },
          bulletPoints: [
            { ar: '<header> و <nav>: ترويسة الموقع وعناصر التنقل والروابط الرئيسية', en: '<header> & <nav>: Site branding and primary navigational links' },
            { ar: '<main>: المحتوى الفريد والأساسي للصفحة الحالية (يوجد واحد فقط لكل صفحة)', en: '<main>: The singular primary content payload of the document' },
            { ar: '<section>: الأقسام الموضوعية الكبرى (Hero, Menu, Story, Contact)', en: '<section>: Thematic document groupings with heading anchors' },
            { ar: '<article>: الوحدات المستقلة ذات المحتوى القائم بذاته كوجبة طعام أو تدوينة', en: '<article>: Self-contained standalone items (menu dishes, reviews)' },
          ],
          architecturalRule: {
            ar: 'قاعدة ذهبية: لا تستخدم <div> إلا إذا كان الغرض الوحيد منه هو التنسيق الجمالي أو التجميع البصري فقط.',
            en: 'Golden Rule: Only deploy <div> when its sole, pure purpose is visual grouping or styling layout.',
          },
        },
      },
    },

    // Slide 4: Comparison (Flexbox vs CSS Grid)
    {
      id: 's06-slide-04',
      sessionNumber: 6,
      slideNumber: 4,
      totalSlides: 16,
      type: 'comparison',
      title: { ar: 'معمارية التنسيق الحديث: Flexbox مقابل CSS Grid', en: 'Modern Layout: Flexbox vs CSS Grid' },
      subtitle: { ar: 'متى تستخدم التنسيق الأحادي (1D) ومتى تستخدم التنسيق الثنائي (2D)؟', en: 'When to deploy 1D linear alignment vs 2D spatial matrices' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'القضاء التام على حيرة الطلاب بين Flexbox و Grid بقاعدة معمارية واضحة.', en: 'Eliminate confusion between Flexbox and Grid with a permanent mental model.' },
      speakerNotes: { ar: 'لخص القاعدة في جملة واحدة: "إذا كانت العناصر في صف واحد أو عمود واحد، استخدم Flexbox. إذا كانت العناصر في صفوف وأعمدة متقاطعة (شبكة)، استخدم Grid".', en: 'One sentence: "Items in a single line or column = Flexbox. Items in cross rows and columns = Grid".' },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: { ar: 'CSS Flexbox (التنسيق الأحادي 1D)', en: 'CSS Flexbox (1D Direction)' },
          rightHeader: { ar: 'CSS Grid (التنسيق الثنائي 2D)', en: 'CSS Grid (2D Matrix)' },
          dimensions: [
            {
              dimension: { ar: 'محور العمل الأساسي', en: 'Primary Axis' },
              left: { ar: 'محور واحد في كل مرة (صف أفقي أو عمود رأسي)', en: 'Single axis at a time (row or column)' },
              right: { ar: 'محوران متزامنان في نفس الوقت (صفوف وأعمدة معاً)', en: 'Dual axes simultaneously (rows and columns together)' },
            },
            {
              dimension: { ar: 'حالات الاستخدام المثالية', en: 'Ideal Use Cases' },
              left: { ar: 'أشرطة التنقل (Navbar)، أزرار الإجراءات، وتوسيط العناصر', en: 'Navbars, button groups, badge rows, center alignment' },
              right: { ar: 'شبكات المنتجات (Card Grids)، معارض الصور، وهيكل الصفحة', en: 'Product matrices, photo galleries, dashboard layouts' },
            },
            {
              dimension: { ar: 'التحكم في المسافات المتساوية', en: 'Harmonic Gap Control' },
              left: { ar: 'توزيع مرن يعتمد على حجم محتوى كل عنصر', en: 'Content-driven flexible wrapping and spacing' },
              right: { ar: 'تقسيم هندسي دقيق بالأعمدة (grid-template-columns: repeat(...))', en: 'Explicit spatial tracks (repeat(auto-fit, minmax(...)))' },
            },
            {
              dimension: { ar: 'سلوك الهواتف المحمولة', en: 'Mobile Adaptation' },
              left: { ar: 'التحول السلس من flex-row إلى flex-col', en: 'Trivial toggle from flex-row to flex-col on mobile' },
              right: { ar: 'تغيير عدد الأعمدة تلقائياً من 1 إلى 3 بحسب عرض الشاشة', en: 'Auto-adapting column count from 1 to 3 tracks' },
            },
          ],
          balancedVerdict: {
            ar: 'المواقع الاحترافية تجمع الاثنين معاً: تستخدم Grid لتخطيط الشبكة الكبرى، وتستخدم Flexbox داخل كل بطاقة لمحاذاة أزرارها ونصوصها.',
            en: 'Professional architectures combine both: Grid for the outer card matrix, Flexbox inside each card for alignment.',
          },
        },
      },
    },

    // Slide 5: Code (Semantic Menu Grid Component)
    {
      id: 's06-slide-05',
      sessionNumber: 6,
      slideNumber: 5,
      totalSlides: 16,
      type: 'code',
      title: { ar: 'الكود كأثر بصري: شبكة بطاقات المنتجات بـ Grid و Flex', en: 'Code Artifact: Semantic Card Grid' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'عرض كود تطبيقي يجمع بين Semantic HTML و CSS Grid و Flexbox بطريقة نظيفة ومحكمة.', en: 'Showcase production component fusing semantic elements, Grid, and Flexbox.' },
      speakerNotes: { ar: 'اشرح استخدام <section> للقسم الخارجي، و <article> لكل وجبة، و CSS Grid للشبكة الخارجية، و Flexbox لأسفل البطاقة.', en: 'Point out: <section> wraps the feature, <article> wraps each card, Grid arranges cards, Flexbox aligns price and button.' },
      payload: {
        type: 'code',
        data: {
          language: 'tsx',
          codeSnippet: `// Trattoria Roma — Responsive Semantic Menu Grid
export function MenuGrid() {
  return (
    <section aria-labelledby="menu-heading" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-3 mb-12">
        <h2 id="menu-heading" className="text-3xl sm:text-4xl font-extrabold text-[#140905]">
          Signature Pasta Specialties
        </h2>
        <p className="text-neutral-600 max-w-xl mx-auto">Handcrafted fresh each morning with DOP ingredients.</p>
      </div>

      {/* 2D CSS Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <article 
            key={dish.id} 
            className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#140905]">{dish.name}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{dish.description}</p>
            </div>

            {/* 1D Flexbox: Price on left, Action button on right */}
            <div className="flex items-center justify-between pt-6 border-t border-neutral-100 mt-6">
              <span className="text-lg font-mono font-bold text-[#641a01]">\${dish.price}</span>
              <button className="px-4 py-2 rounded-xl bg-[#641a01] text-white text-xs font-bold hover:opacity-90">
                Order Table
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}`,
          what: { ar: 'مكون شبكة وجبات دلالي يستخدم <section> و <article> وشبكة Grid ثلاثية الأعمدة.', en: 'Semantic menu grid utilizing <section>, <article>, and 3-column responsive Grid tracks.' },
          why: { ar: 'الجمع بين Grid للهيكل الخارجي و Flexbox للمحاذاة الداخلية يعطي تصميماً ثابتاً لا ينكسر على الهواتف.', en: 'Combining outer Grid with inner Flexbox creates rock-solid responsive card integrity.' },
          when: { ar: 'النمط المعماري المعتمد لكل شبكات الخدمات، المنتجات، والأسعار في مشاريع التخرج.', en: 'Standard architectural pattern for service matrices, product catalogs, and pricing tiers.' },
        },
      },
    },

    // Slide 6: AI (The Accessibility & Semantics Audit Prompt)
    {
      id: 's06-slide-06',
      sessionNumber: 6,
      slideNumber: 6,
      totalSlides: 16,
      type: 'ai',
      title: { ar: 'فحص الذكاء الاصطناعي: تدقيق الوصولية والـ Semantic HTML', en: 'AI Audit: Accessibility & Semantic Compliance' },
      subtitle: { ar: 'كيف تستخدم الذكاء الاصطناعي كفاحص محترف يكشف الثغرات الدلالية والتباين اللوني؟', en: 'Directing AI as a ruthless accessibility auditor verifying WCAG contrast and ARIA contracts' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'تدريب الطلاب على استخدام الذكاء الاصطناعي كمراجع ومدقق للكود بدلاً من مجرد كاتب كود.', en: 'Train learners to deploy AI as a rigorous auditor verifying code quality and accessibility.' },
      speakerNotes: { ar: 'انسخ هذا البرومبت واطلب من الطلاب اختباره. وضح كيف يكشف الذكاء الاصطناعي الصور التي تنقصها نصوص alt أو الأزرار الخالية من التسمية.', en: 'Show how this audit prompt flags missing image alt attributes and unlabeled icon buttons.' },
      payload: {
        type: 'ai',
        data: {
          role: 'Senior Accessibility Auditor and W3C Semantic HTML Compliance Specialist.',
          context: 'Reviewing our responsive landing page component code for production release.',
          task: 'Perform an exhaustive audit on this JSX/HTML code for semantics, accessibility (WCAG 2.1 AA), and SEO structure.',
          constraints: 'Do not compliment the code. Focus strictly on identifying violations and providing corrected snippets.',
          output: `Return:
1. Identified Semantic Violations (e.g. nested divs instead of semantic tags)
2. Accessibility Issues (Missing ARIA labels, contrast, missing button types)
3. SEO Heading Hierarchy Check (Correct h1 -> h2 -> h3 nesting)
4. Clean Refactored Component Snippet`,
          acceptanceCriteria: [
            'Every interactive button verified for accessible name or aria-label',
            'Zero missing alt attributes on images',
            'Logical sequential heading hierarchy validated',
          ],
          iterationTip: {
            ar: 'طبق هذا الفحص على كل مكون تنتهي من كتابته قبل دمجه في المشروع.',
            en: 'Execute this audit on every component before committing to the main repository.',
          },
        },
      },
    },

    // Slide 7: Challenge (Student Card Building Lab)
    {
      id: 's06-slide-07',
      sessionNumber: 6,
      slideNumber: 16,
      totalSlides: 16,
      type: 'challenge',
      title: { ar: 'تحدي الطلاب: بناء وتنسيق شبكة بطاقات مشروعك', en: 'Student Challenge: Build Your Project Responsive Grid' },
      estimatedMinutes: 8,
      teachingGoal: { ar: 'قيام كل طالب بكتابة وتنسيق شبكة البطاقات لمشروعه بـ CSS Grid والتحقق من تجاوبها على 375px.', en: 'Every student constructs a 3-card responsive Grid for their domain and validates on 375px mobile.' },
      speakerNotes: { ar: 'أطلق مؤقت الـ 5 دقائق. اطلب منهم كتابة مكون شبكة البطاقات لمشروعهم (أطباق المطعم، خدمات العيادة، باقات الجيم).', en: 'Start 5-minute timer. Instruct students to code their 3-card grid component in their editor.' },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'بناء شبكة بطاقات دلالية متجاوبة (3 بطاقات على الأقل) باستخدام <article> و CSS Grid لمشروعك.',
            en: 'Build a responsive semantic card grid (at least 3 items) using <article> and CSS Grid.',
          },
          durationMinutes: 5,
          objective: {
            ar: 'تطبيق التفكير الدلالي وشبكات الـ Grid والـ Flexbox عملياً على مشروع التخرج.',
            en: 'Materialize semantic markup, Grid tracks, and Flexbox alignment in your live capstone repo.',
          },
          instructions: [
            { ar: 'أنشئ المكون داخل مجلد components لمشروعك (مثال: ServiceGrid.tsx)', en: 'Create the component in src/components (e.g. ServiceGrid.tsx)' },
            { ar: 'استخدم <section> للقسم الخارجي مع وسم aria-labelledby وعنوان h2 مناسب', en: 'Use <section> with aria-labelledby and a clear h2 heading' },
            { ar: 'استخدم CSS Grid بحيث تظهر بطاقة واحدة على الهاتف (grid-cols-1) و 3 على الشاشات الكبيرة (lg:grid-cols-3)', en: 'Enforce grid-cols-1 on mobile and lg:grid-cols-3 on desktop' },
            { ar: 'استخدم <article> لكل بطاقة مع Flexbox لمحاذاة الزر والسعر بالأسفل', en: 'Wrap each card in <article> and use Flexbox to align button and price' },
          ],
          starterPromptOrCode: '<section className="py-16"><div className="grid grid-cols-1 lg:grid-cols-3 gap-6">...</div></section>',
          deliverable: {
            ar: 'مكون شبكة بطاقات متجاوب دلالياً مدمج في صفحة مشروعك الرئيسية.',
            en: 'Live responsive card grid component wired into your capstone project page.',
          },
        },
      },
    },

    // Slide 8: Project (Milestone 06)
    {
      id: 's06-slide-08',
      sessionNumber: 6,
      slideNumber: 16,
      totalSlides: 16,
      type: 'project',
      title: { ar: 'محطة المشروع: الهيكل الدلالي والتخطيط المتجاوب', en: 'Project Milestone: Semantic Layout Live' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تأكيد اكتمال قسمي الـ Hero والـ Services كودياً في مشروع التخرج.', en: 'Confirm live completion of Hero and Service Grid components in capstone repo.' },
      speakerNotes: { ar: 'هنئ الطلاب: "الآن مشروعك يملك صفحة هبوط ذات بنية دلالية وتخطيطات متجاوبة حقيقية تظهر بشكل رائع على الهاتف والكمبيوتر!".', en: 'Congratulate students: "Your project now boasts real responsive layouts looking stellar on mobile and desktop!"' },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 06: أساسات الـ HTML الدلالي و CSS المتجاوب', en: 'Phase 06: Semantic HTML & Responsive CSS Live' },
          stepNumber: '06',
          whatWeBuildNow: {
            ar: 'اكتمال بناء وتنسيق الواجهة الأساسية وقسم شبكة المنتجات أو الخدمات لمشروع التخرج.',
            en: 'Complete markup and responsive styling for the Hero and Service Grid features.',
          },
          deliverables: [
            { ar: 'مكون ترويسة وبداية (Hero) مبني بالكامل بوسوم دلالية', en: 'Semantic Hero component with conversion callout' },
            { ar: 'شبكة بطاقات خدمات أو منتجات متجاوبة بـ CSS Grid', en: 'Responsive 3-column service card grid using CSS Grid' },
            { ar: 'اجتياز فحص التدقيق الدلالي والوصولية بالذكاء الاصطناعي', en: 'Passing AI accessibility and semantic validation audit' },
          ],
          connectionToFinalProject: {
            ar: 'هذا الهيكل البصري المتين هو الذي سنبث فيه الحياة بالحركات والتفاعل في الجلسة 07 باستخدام JavaScript.',
            en: 'This visual skeleton is what we will animate and make interactive with JavaScript in Session 07.',
          },
        },
      },
    },

    // Slide 9: Takeaway
    {
      id: 's06-slide-09',
      sessionNumber: 6,
      slideNumber: 16,
      totalSlides: 16,
      type: 'takeaway',
      title: { ar: 'الخلاصة الهندسية للجلسة السادسة', en: 'Session 06 Engineering Takeaways' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت مبادئ الـ Semantic HTML والتكامل بين Flexbox و Grid.', en: 'Solidify semantic markup ethics and Flexbox/Grid synergy.' },
      speakerNotes: { ar: 'اقرأ النقاط الثلاث. أكد: "الموقع السريع ذو البنية الدلالية النظيفة هو الأساس الذي تبنى عليه كل تقنيات الـ React و Next.js القادمة".', en: 'Review takeaways: Semantic HTML is the unshakeable foundation powering React and Next.js.' },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'الدلالة قبل التنسيق (Semantics First)', en: 'Semantics Precedes Styling' },
              description: {
                ar: 'اختر الوسم المناسب لمعنى المحتوى أولاً، ثم طبق عليه التنسيقات؛ هذا هو جوهر الوصولية وقوة الـ SEO.',
                en: 'Select elements based on content meaning first, then layer styling; this unlocks elite SEO and accessibility.',
              },
            },
            {
              number: '02',
              title: { ar: 'التكامل بين Flexbox و Grid', en: 'Synergy of Flexbox & Grid' },
              description: {
                ar: 'استخدم Grid لترتيب الشبكات الكبرى وتوزيع البطاقات، واستخدم Flexbox داخل كل بطاقة لمحاذاة عناصرها.',
                en: 'Harness Grid for macroeconomic page card tracks; employ Flexbox inside components for alignment.',
              },
            },
            {
              number: '03',
              title: { ar: 'الهاتف أولاً دائماً (Mobile-First)', en: 'Mobile-First Always' },
              description: {
                ar: 'أكثر من 70% من زوار موقعك سيتصفحونه من هواتفهم؛ صمم واختبر على شاشة 375px قبل التفكير في الشاشات الكبيرة.',
                en: 'Over 70% of web traffic originates from phones; design and test at 375px before desktop viewports.',
              },
            },
          ],
          coreMotto: {
            ar: 'الأساس المتين للـ HTML و CSS هو ما يجعل موقعك سريعاً، ثابتاً، وسهل الصيانة للأبد.',
            en: 'Resilient HTML and CSS foundations ensure your web products stay fast, robust, and timeless.',
          },
        },
      },
    },

    // Slide 10: Next
    {
      id: 's06-slide-10',
      sessionNumber: 6,
      slideNumber: 16,
      totalSlides: 16,
      type: 'next',
      title: { ar: 'المحطة القادمة: JavaScript — بث الحياة والتفاعل في الموقع', en: 'Next Waypoint: JavaScript — Making the Web Alive' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'تشويق الطلاب للجلسة 07 لتحويل موقعهم من مجرد شاشة ساكنة إلى تطبيق تفاعلي حي.', en: 'Build excitement for Session 07: turning static layouts into dynamic interactive experiences.' },
      speakerNotes: { ar: 'اختم الجلسة: "في الجلسة 07 سنعطي موقعنا روحاً: قوائم هاتف تفتح بسلاسة، نماذج حجز تتفاعل، وبيانات حية تُجلب عبر الـ APIs!".', en: 'Closing: "In Session 07 we breathe life into our site: responsive drawers, dynamic modals, and live API fetch!"' },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '07',
          nextSessionTitle: {
            ar: 'JavaScript: بث الحياة والتفاعل في الموقع (Events, DOM & APIs)',
            en: 'JavaScript: Bringing the Web Alive with Dynamic Interaction & APIs',
          },
          teaser: {
            ar: 'سنتعلم كيف نتحكم في شجرة الصفحة (DOM)، نستمع للنقرات (Events)، وندير النوافذ المنبثقة وقوائم الهواتف، ونجلب البيانات عبر Fetch.',
            en: 'Learn DOM manipulation, event dispatching, mobile drawer toggles, and live API fetching to power real interactions.',
          },
          preparationHint: {
            ar: 'تأكد من أن كود الواجهة الذي بنيته اليوم محفوظ ويعمل دون أخطاء في المتصفح.',
            en: 'Confirm your current markup and stylesheet build cleanly in your local browser.',
          },
        },
      },
    },
  ],
};
