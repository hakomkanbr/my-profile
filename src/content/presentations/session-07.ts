import { PresentationSession } from '@/types';

export const SESSION_07: PresentationSession = {
  id: 'session-07',
  number: 7,
  slug: 'session-07',
  title: {
    ar: 'JavaScript: بث الحياة والتفاعل في الموقع',
    en: 'JavaScript: Bringing the Web Alive with Dynamic Interaction & APIs',
  },
  subtitle: {
    ar: 'التحول من التصميم الساكن (Static) إلى التفاعل الحي (Interactive) وإدارة الأحداث والبيانات',
    en: 'Transitioning from static layout to live interactive state, event handling, and API integration',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين الطالب من استخدام JavaScript للتفاعل مع المستخدم: إدارة قوائم الهاتف، تصفية البيانات، النوافذ المنبثقة، وجلب البيانات الحية عبر Fetch/APIs.',
    en: 'Master core JavaScript interaction: mobile menu toggles, dynamic category filters, modals, and asynchronous API data fetching.',
  },
  prerequisites: [
    { ar: 'إكمال الجلسة 06 وامتلاك صفحة الهيكل الدلالي للمشروع', en: 'Completion of Session 06 with semantic layout' },
  ],
  objectives: [
    { ar: 'فهم شجرة الـ DOM وكيف يستمع المتصفح لنقرات المستخدم وأحداث الشاشة (Event Listeners)', en: 'Command DOM tree traversal and user event handling' },
    { ar: 'التعامل مع المصفوفات والكائنات (Arrays & Objects) لعرض وتصفية بيانات المشروع برمجياً', en: 'Manipulate arrays and objects for dynamic filtering and rendering' },
    { ar: 'بناء تفاعلات حقيقية في المشروع (قائمة الهاتف، نافذة الحجز، تصفية الفئات)', en: 'Build production interactions: mobile drawer, booking modal, category filter tabs' },
    { ar: 'إتقان مسار عمل الذكاء الاصطناعي البرمجي: المتطلب ← استشارة AI ← المراجعة ← التنفيذ ← الاختبار والتصحيح', en: 'Master AI workflow: Requirement → Approach Consultation → Review → Implement → Test → Debug' },
  ],
  timeline: [
    { timeRange: '00:00 – 00:10', durationMinutes: 10, label: { ar: 'مقدمة: كيف يحول JavaScript الكود الساكن إلى تجربة تفاعلية؟', en: 'How JS transforms static DOM into dynamic UX' }, type: 'context' },
    { timeRange: '00:10 – 00:25', durationMinutes: 15, label: { ar: 'الـ DOM والأحداث (Events): التقاط النقرات وتعديل الفئات', en: 'DOM & Events: Capturing clicks and mutating state' }, type: 'concept' },
    { timeRange: '00:25 – 00:45', durationMinutes: 20, label: { ar: 'تطبيق حي: برمجة قائمة الهاتف وتصفية أطباق المطعم بالفئات', en: 'Live Demo: Mobile Drawer & Category Filtering' }, type: 'demo' },
    { timeRange: '00:45 – 01:00', durationMinutes: 15, label: { ar: 'مسار عمل الـ AI: طلب النهج البرمجي ومراجعة منطق الكود قبل التنفيذ', en: 'AI Workflow: Consulting approach & code review' }, type: 'ai' },
    { timeRange: '01:00 – 01:20', durationMinutes: 20, label: { ar: 'تحدي الطلاب: بناء تبويبات تصفية حية (Filter Tabs) في مشروعهم', en: 'Student Challenge: Build Dynamic Filter Tabs' }, type: 'practice' },
    { timeRange: '01:20 – 01:25', durationMinutes: 5, label: { ar: 'مراجعة التفاعلات واختبار زر إغلاق النوافذ (Esc)', en: 'Review student interaction and Esc key handling' }, type: 'review' },
    { timeRange: '01:25 – 01:30', durationMinutes: 5, label: { ar: 'الخلاصة والتجهيز للتفكير بمكونات React (Session 08)', en: 'Takeaways & Prep for React Component Thinking' }, type: 'takeaway' },
  ],
  projectMilestone: {
    ar: 'تحويل صفحة هبوط المشروع إلى واجهة تفاعلية حية تستجيب لنقرات المستخدم وتصفي البيانات.',
    en: 'Transform project landing page into a dynamic application responding to clicks and data filters.',
  },
  aiRole: {
    ar: 'مستشار خوارزمي يقترح أساليب كتابة التفاعل (Architecture Options) ويساعد في تصحيح الأخطاء المنطقية.',
    en: 'Algorithmic advisor proposing interaction patterns and debugging asynchronous race conditions.',
  },
  marketConnection: {
    ar: 'المواقع التفاعلية السلسة تزيد من بقاء الزائر ومعدل التحويل (Conversion Rate) بنسبة تزيد عن 200%.',
    en: 'Frictionless client interactions and instant feedback elevate web conversion rates by over 200%.',
  },
  startScreen: {
    badge: 'SESSION 07 / 12 • INTERACTION & DOM',
    headline: {
      ar: 'JavaScript: بث الروح والحركة والتفاعل الذكي في موقعك',
      en: 'JavaScript: Breathing Dynamic Life & Smart Interaction Into Web UI',
    },
    description: {
      ar: 'تعلم كيف تحول واجهاتك من مجرد صفحات للقراءة إلى تطبيقات حية تتفاعل مع نقرات المستخدم وتدير النوافذ وتصفي البيانات فوراً.',
      en: 'Learn to transform static documents into living client applications with real-time UI state, modals, and filtering.',
    },
    sessionGoal: {
      ar: 'برمجة التفاعلات الحية لقائمة الهاتف وتبويبات التصفية في مشروع تخرجك.',
      en: 'Program interactive mobile drawer navigation and dynamic category filters in your capstone project.',
    },
  },
  endScreen: {
    headline: {
      ar: 'رائع! موقعك الآن ينبض بالحياة والتفاعل السلس مع الزوار',
      en: 'Superb! Your Project Now Pulses with Dynamic User Interaction',
    },
    keyRecap: [
      {
        ar: 'الـ DOM هو تمثيل حي لصفحتك في ذاكرة المتصفح؛ و JavaScript هو من يغيره في الوقت الفعلي.',
        en: 'The DOM is the live memory model of the document; JavaScript mutates it in real time.',
      },
      {
        ar: 'التفاعل الممتاز يراعي سهولة الوصول (Accessibility) مثل إغلاق النوافذ بمفتاح Esc.',
        en: 'Exemplary interaction honors accessibility contracts, such as closing modals via Escape key.',
      },
      {
        ar: 'مسار عمل الـ AI السليم: اطلب النهج والبدائل أولاً، راجعها بعقلك، ثم اطلب الكود المنفذ.',
        en: 'Healthy AI workflow: Request architectural approaches first, critique mentally, then implement.',
      },
    ],
    nextSessionNumber: '08',
    nextSessionTitle: {
      ar: 'React: كيف تفكر بالمكونات والحالة (Components, Props & State)',
      en: 'React: Thinking in Components, Props, and Declarative UI State',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's07-slide-01',
      sessionNumber: 7,
      slideNumber: 1,
      totalSlides: 16,
      type: 'title',
      title: { ar: 'JavaScript: بث الحياة في الموقع', en: 'JavaScript: Interactive Web' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح الجلسة وإعلان الانتقال من الواجهات الساكنة إلى عالم البرمجة التفاعلية الحية.', en: 'Open session: entering dynamic stateful client-side programming.' },
      speakerNotes: { ar: 'رحب بالطلاب: "اليوم يتحول موقعنا من مجرد مجلة للقراءة إلى تطبيق حي يسمع لنقرات الزائر ويستجيب له فوراً!".', en: 'Welcome learners: "Today our site transitions from a static flyer into a living app listening to user intent!"' },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '07',
          kicker: { ar: 'التفاعل وإدارة الحالة', en: 'Interaction & Dynamic State' },
          headline: { ar: 'JAVASCRIPT & INTERACTION', en: 'JAVASCRIPT & INTERACTION' },
          subheadline: { ar: 'برمجة الأحداث، إدارة الـ DOM، وجلب البيانات عبر الـ APIs', en: 'Programming events, DOM mutations, and live asynchronous API data fetching' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['DOM & Events', 'Array Methods', 'Fetch API', 'AI Debugging Workflow'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's07-slide-02',
      sessionNumber: 7,
      slideNumber: 2,
      totalSlides: 16,
      type: 'context',
      title: { ar: 'ما الذي يفعله JavaScript خلف الكواليس في المتصفح؟', en: 'What JS Does Behind the Browser Scenes' },
      subtitle: { ar: 'كيف يفهم المتصفح ضغطة الزر ويحولها إلى تعديل فوري في الشاشة؟', en: 'How the browser engine translates a click into millisecond DOM mutations' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'إيضاح دور JavaScript كمحرك سلوك (Behavior Engine) وليس مجرد أداة لتزيين النصوص.', en: 'Clarify JavaScript as the browser behavior engine orchestrating UX feedback.' },
      speakerNotes: { ar: 'اشرح التشبيه الشهير: HTML هو الهيكل العظمي، CSS هو الملابس والجمال، و JavaScript هو العضلات والجهاز العصبي الذي يحرك الكائن.', en: 'Classic analogy: HTML is the skeleton, CSS is the skin and attire, JS is the muscle and neural reflexes.' },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'مواقع الويب الحديثة لم تعد تعيد تحميل الصفحة بالكامل عند كل نقرة، بل تحدث الجزء المطلوب في أجزاء من الثانية.',
            en: 'Modern web applications never trigger full page reloads; they mutate localized DOM trees in milliseconds.',
          },
          realWorldProblem: {
            ar: 'المواقع البطيئة في الاستجابة لنقرات المستخدم تفقد الزائرين بنسبة 53% إذا تأخر التفاعل أكثر من 100 مللي ثانية.',
            en: 'Laggy interfaces shed 53% of users if interaction feedback delays exceed 100ms.',
          },
          whyItMatters: {
            ar: 'إتقان JavaScript يجعلك قادراً على بناء تجارب مستخدم تشبه تطبيقات الهاتف فائقة السرعة والسلاسة.',
            en: 'Mastering JavaScript enables you to craft app-like fluid web experiences that captivate users.',
          },
        },
      },
    },

    // Slide 3: Visual (The AI Interaction Workflow)
    {
      id: 's07-slide-03',
      sessionNumber: 7,
      slideNumber: 3,
      totalSlides: 16,
      type: 'visual',
      title: { ar: 'مسار عمل الذكاء الاصطناعي البرمجي (AI Workflow)', en: 'The Disciplined AI Interaction Workflow' },
      subtitle: { ar: 'كيف تطلب من الذكاء الاصطناعي بناء ميزة تفاعلية معقدة دون الوقوع في أخطاء المنطق؟', en: 'How to partner with AI on dynamic logic without inheriting subtle runtime bugs' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'تعليم مسار: المتطلب ← طلب النهج ← المراجعة ← التنفيذ ← الاختبار.', en: 'Instill the strict flow: Requirement → Ask Approach → Review → Implement → Test & Debug.' },
      speakerNotes: { ar: 'أكد: "لا تقل للـ AI اكتب لي كود JavaScript فوراً. اطلب منه أولاً: ما هي أفضل طريقة لمعالجة هذا الحدث؟ قارن البدائل ثم نفذ".', en: 'Do not demand raw code first. Ask AI: "What architectural approach handles this event best?"' },
      payload: {
        type: 'visual',
        data: {
          caption: { ar: 'المسار الهندسي يضمن فهمك لمنطق الكود البرمجي قبل اعتماده في مشروعك.', en: 'The structured workflow guarantees intellectual ownership before code commitment.' },
          diagramType: 'pipeline',
          nodes: [
            { id: 'j1', stepNumber: '01', title: { ar: 'المتطلب التفاعلي', en: 'Requirement' }, badge: 'User Need' },
            { id: 'j2', stepNumber: '02', title: { ar: 'طلب النهج والبدائل', en: 'Ask AI Approach' }, badge: 'Consult' },
            { id: 'j3', stepNumber: '03', title: { ar: 'المراجعة والتدقيق', en: 'Human Review' }, badge: 'Evaluate' },
            { id: 'j4', stepNumber: '04', title: { ar: 'التنفيذ البرمجي', en: 'Implement' }, badge: 'Code' },
            { id: 'j5', stepNumber: '05', title: { ar: 'الاختبار وتصحيح الأخطاء', en: 'Test & Debug' }, badge: 'Verify' },
          ],
        },
      },
    },

    // Slide 4: Concept (Events & State)
    {
      id: 's07-slide-04',
      sessionNumber: 7,
      slideNumber: 4,
      totalSlides: 16,
      type: 'concept',
      title: { ar: 'الأحداث والحالة (Events & State): قلب التفاعل', en: 'Events & State: The Dynamic Heart' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'شرح مفهوم الحالة (State) وعلاقتها بالحدث (Event) بشكل مبسط.', en: 'Demystify UI State as data in memory and Events as triggers that transform it.' },
      speakerNotes: { ar: 'وضح: الحالة هي الحقيقة (مثال: هل القائمة مفتوحة؟ true أو false). عندما ينقر المستخدم، يتغير الـ State ويعيد المتصفح رسم الشاشة.', en: 'State is data truth (isOpen: true/false). An event occurs, state flips, the UI reflects the change.' },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'الواجهة التفاعلية هي دالة تعتمد على الحالة: UI = f(State).',
            en: 'Every interactive UI is a predictable function of state: UI = f(State).',
          },
          tagline: { ar: 'STATE CONTROLS THE VIEWPORT', en: 'STATE CONTROLS THE VIEWPORT' },
          explanation: {
            ar: 'بدل تعديل كل عنصر في الصفحة يدوياً، نحتفظ بمتغير بسيط يعبر عن حالة الواجهة (مثال: الفئة المحددة حالياً "pastas")، وعندما ينقر المستخدم نغير هذا المتغير فقط.',
            en: 'Instead of hacking individual elements, we track state variables (e.g. activeCategory: "pastas"). User actions mutate state, which updates the view.',
          },
          bulletPoints: [
            { ar: 'الأحداث (Events): النقرات (Click)، الكتابة (Input)، وتمرير الفأرة (Scroll)', en: 'Events: User triggers (click, input, submit, keydown, scroll)' },
            { ar: 'الحالة (State): البيانات الحالية المخزنة في الذاكرة والتي تحدد شكل الواجهة', en: 'State: In-memory data dictating what is currently rendered' },
            { ar: 'دوال التصفية (Array.filter): اختيار العناصر التي تطابق شرط المستخدم فوراً', en: 'Array filtering: Instantly matching items to user criteria' },
            { ar: 'الوصولية التفاعلية: دعم مفاتيح لوحة المفاتيح كـ Esc و Tab للتنقل السلس', en: 'Accessible interactions: Supporting Escape to dismiss and Tab trapping' },
          ],
          architecturalRule: {
            ar: 'قاعدة ذهبية: لا تجعل كود التفاعل يعتمد على نصوص الشاشة؛ اعتمد على معرّفات البيانات (IDs & Data State).',
            en: 'Golden Rule: Never bind interaction logic to visible text; bind to immutable data IDs and state flags.',
          },
        },
      },
    },

    // Slide 5: Code (Interactive Category Filter Component)
    {
      id: 's07-slide-05',
      sessionNumber: 7,
      slideNumber: 5,
      totalSlides: 16,
      type: 'code',
      title: { ar: 'الكود كأثر بصري: تبويبات التصفية التفاعلية (Filter Tabs)', en: 'Code Artifact: Interactive Filter Tabs' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'عرض كود تطبيقي لتصفية قائمة العناصر برمجياً بناءً على نقرة المستخدم.', en: 'Inspect clean stateful filtering logic with real-time UI response.' },
      speakerNotes: { ar: 'اشرح كيف نستخدم Array.filter لتصفية الأطباق بحسب الفئة المحددة (All, Pastas, Desserts). هذا هو الكود الذي سيبنونه اليوم.', en: 'Point out Array.filter matching dish.category against selectedCategory state.' },
      payload: {
        type: 'code',
        data: {
          language: 'tsx',
          codeSnippet: `'use client';
import React, { useState } from 'react';

const CATEGORIES = ['all', 'pasta', 'pizza', 'dessert'] as const;

export function InteractiveMenu({ items }) {
  const [activeTab, setActiveTab] = useState('all');

  // Filter items dynamically based on selected tab state
  const filteredItems = activeTab === 'all' 
    ? items 
    : items.filter(dish => dish.category === activeTab);

  return (
    <div className="space-y-8">
      {/* Category Tab Buttons */}
      <div className="flex items-center justify-center gap-2" role="tablist">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeTab === cat}
            onClick={() => setActiveTab(cat)}
            className={\`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all \${
              activeTab === cat 
                ? 'bg-[#641a01] text-white shadow-md' 
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }\`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Render Filtered Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredItems.map(dish => (
          <article key={dish.id} className="p-5 rounded-2xl bg-white border border-neutral-200">
            <h3 className="font-bold text-lg">{dish.name}</h3>
            <span className="text-[#641a01] font-mono font-bold">\${dish.price}</span>
          </article>
        ))}
      </div>
    </div>
  );
}`,
          what: { ar: 'مكون تصفية وجبات يعتمد على useState لتغيير الفئة المحددة وإعادة تصفية القائمة فوراً.', en: 'Stateful menu filter using useState and Array.filter for instantaneous card updates.' },
          why: { ar: 'استخدام role="tab" و aria-selected يمنح التفاعل وصولية كاملة لذوي الاحتياجات الخاصة.', en: 'ARIA role="tab" and aria-selected ensure accessible keyboard and screen reader support.' },
          when: { ar: 'المعيار المعتمد لكل صفحات المنتجات والمشاريع ذات التصنيفات المتعددة.', en: 'Canonical standard for all multi-category catalogs, portfolios, and services.' },
        },
      },
    },

    // Slide 6: Demo (Live Menu Toggle & Filter)
    {
      id: 's07-slide-06',
      sessionNumber: 7,
      slideNumber: 6,
      totalSlides: 16,
      type: 'demo',
      title: { ar: 'تطبيق حي: تشغيل قائمة الهاتف والتصفية الحية في المتصفح', en: 'Live Demo: Mobile Drawer & Real-Time Filter' },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'مشاهدة التفاعل المباشر على الهاتف وتجربة النقر والتصفية مع الطلاب.', en: 'Observe live mobile drawer animation and category switching in real browser.' },
      speakerNotes: { ar: 'افتح محاكي الهاتف في Chrome DevTools. انقر على زر الهامبرغر، أظهر فتح القائمة وإغلاقها بزر X وبمفتاح Esc.', en: 'Open mobile viewport in DevTools. Demonstrate drawer toggle, clicking backdrop, and pressing Escape.' },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'تفعيل تفاعل فتح وإغلاق قائمة الهاتف المحمول وبرمجة تصفية الأطباق بالفئات.',
            en: 'Wire up accessible mobile drawer navigation and dynamic dish category filtering.',
          },
          promptToUse: `Implement interactive tab filtering in React 19:
1. When user clicks a category tab, filter the dishes array without page reload.
2. Ensure active tab has aria-selected="true" and primary brand background (#641a01).
3. If no dishes match, show an accessible empty state message.`,
          instructorSteps: [
            { ar: 'اختبار زر قائمة الهاتف على شاشة 375px', en: 'Test mobile drawer toggle on 375px viewport' },
            { ar: 'التأكد من إغلاق القائمة عند الضغط على مفتاح Esc في لوحة المفاتيح', en: 'Verify Escape key dismisses the mobile drawer cleanly' },
            { ar: 'النقر على تبويبات الفئات المختلفة وملاحظة التحديث الفوري للبطاقات', en: 'Click category tabs and observe instant card matrix updates' },
            { ar: 'فحص الـ Console في المتصفح والتأكد من عدم وجود أي تحذيرات أو أخطاء', en: 'Inspect DevTools console to confirm zero React warnings' },
          ],
          expectedOutput: {
            ar: 'تفاعل فوري سلس دون إعادة تحميل، وتصفية دقيقة للأطباق في أقل من 10 مللي ثانية.',
            en: 'Instantaneous UI feedback with zero page reloads and clean state transitions under 10ms.',
          },
        },
      },
    },

    // Slide 7: Challenge (Student Filter Lab)
    {
      id: 's07-slide-07',
      sessionNumber: 7,
      slideNumber: 16,
      totalSlides: 16,
      type: 'challenge',
      title: { ar: 'تحدي الطلاب: برمجة تبويبات التصفية في مشروعك', en: 'Student Challenge: Code Interactive Tabs in Your Project' },
      estimatedMinutes: 8,
      teachingGoal: { ar: 'قيام كل طالب بكتابة تفاعل التصفية أو قائمة الهاتف في مشروعه وتجربتها حياً.', en: 'Every student wires up interactive filter tabs or mobile menu in their workspace.' },
      speakerNotes: { ar: 'أطلق مؤقت الـ 5 دقائق. اطلب منهم إضافة زرين للتصفية (مثل: "الكل" و "الأكثر طلباً") واختبار النقر عليها.', en: 'Start 5-minute timer. Instruct students to code at least 2 filter tabs and test state updates.' },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'برمجة تبويبات تصفية تفاعلية (Filter Tabs) لقسم الخدمات أو المنتجات في مشروعك.',
            en: 'Code interactive category filter tabs for the service/product grid in your project.',
          },
          durationMinutes: 5,
          objective: {
            ar: 'إتقان استخدام الـ State والـ Events لتعديل واجهة مشروعك الحقيقي بالـ JavaScript.',
            en: 'Harness React State and DOM Events to drive interactive UX in your capstone project.',
          },
          instructions: [
            { ar: 'أضف ' + "'use client'" + ' في أعلى ملف المكون التفاعلي', en: 'Declare ' + "'use client'" + ' at the top of your interactive component file' },
            { ar: 'أنشئ حالة activeCategory باستخدام useState واجعل قيمتها الافتراضية "all"', en: 'Initialize activeCategory state with "all" as default' },
            { ar: 'استخدم Array.filter لتصفية عناصر المصفوفة المعروضة بناءً على الفئة النشطة', en: 'Deploy Array.filter to calculate filtered items based on active tab' },
            { ar: 'اختبر التفاعل في المتصفح وتأكد من تغير مظهر الزر النشط عند النقر عليه', en: 'Verify in browser that active button reflects brand styling upon click' },
          ],
          starterPromptOrCode: "const [filter, setFilter] = useState('all'); const filtered = items.filter(...);",
          deliverable: {
            ar: 'مكون خدمات أو منتجات تفاعلي يصفّي البيانات فورياً عند نقر المستخدم.',
            en: 'Live interactive catalog component filtering cards instantaneously upon user click.',
          },
        },
      },
    },

    // Slide 8: Project (Milestone 07)
    {
      id: 's07-slide-08',
      sessionNumber: 7,
      slideNumber: 16,
      totalSlides: 16,
      type: 'project',
      title: { ar: 'محطة المشروع: التفاعل الحي أصبح مكتملاً', en: 'Project Milestone: Dynamic Interaction Live' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت أن مشروع التخرج أصبح الآن موقعاً تفاعلياً حقيقياً وليس مجرد صفحة ساكنة.', en: 'Celebrate that the capstone repository is now a fully interactive web application.' },
      speakerNotes: { ar: 'هنئ الطلاب: "مشروعك الآن ليس مجرد تصميم جميل؛ أصبح تطبيقاً حقيقياً يستجيب للمستخدم، يفتح القوائم، ويصفّي المحتوى!".', en: 'Congratulate learners: "Your project is now a living dynamic app responding to real clicks!"' },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 07: التفاعل وإدارة الحالة بالـ JavaScript', en: 'Phase 07: Interactive State & Dynamic DOM Live' },
          stepNumber: '07',
          whatWeBuildNow: {
            ar: 'اكتمال تفاعلات قائمة الهواتف وتبويبات تصفية المنتجات في مشروع التخرج.',
            en: 'Complete live interaction for mobile navigation and dynamic catalog filtering.',
          },
          deliverables: [
            { ar: 'قائمة هاتف متجاوبة تفتح وتغلق بسلاسة مع دعم مفتاح Esc', en: 'Accessible mobile drawer with Escape key listener' },
            { ar: 'نظام تصفية فئات حي يعتمد على State ومصفوفات البيانات', en: 'Stateful category filter matrix updating cards in real time' },
            { ar: 'كود JavaScript نقي خالٍ من الأخطاء والتحذيرات في المتصفح', en: 'Clean JavaScript/TypeScript build with zero runtime console errors' },
          ],
          connectionToFinalProject: {
            ar: 'في الجلسة 08 سننتقل بهذا التفاعل إلى المستوى المعماري الأعلى: إعادة تنظيم كل شيء وفق فلسفة React Mental Model.',
            en: 'In Session 08 we elevate this interaction to higher architectural elegance: the React mental model.',
          },
        },
      },
    },

    // Slide 9: Takeaway
    {
      id: 's07-slide-09',
      sessionNumber: 7,
      slideNumber: 16,
      totalSlides: 16,
      type: 'takeaway',
      title: { ar: 'الخلاصة الهندسية للجلسة السابعة', en: 'Session 07 Engineering Takeaways' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت مبادئ الحالة (State) ومسار الاستشارة الواعية مع الذكاء الاصطناعي.', en: 'Solidify State principles and deliberate architectural consultation with AI.' },
      speakerNotes: { ar: 'اقرأ النقاط الثلاث. أكد: "التفاعل الممتاز هو الذي يشعر المستخدم بأنه طبيعي وسريع، ولا يعطل تجربة التصفح أبداً".', en: 'Review takeaways: Premium interaction feels natural, instantaneous, and accessible.' },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'الحالة تقود الواجهة (State Drives UI)', en: 'State Drives the Interface' },
              description: {
                ar: 'لا تغير عناصر الـ HTML يدوياً بسطور مبعثرة؛ غير الحالة (State)، ودع الواجهة تحدث نفسها تلقائياً وبشكل متوقع.',
                en: 'Never hack individual DOM nodes manually; mutate state and let the UI re-render predictably.',
              },
            },
            {
              number: '02',
              title: { ar: 'الوصولية التفاعلية حق لكل مستخدم', en: 'Accessible Interaction by Default' },
              description: {
                ar: 'أي قائمة أو نافذة تفتحها يجب أن تكون قابلة للإغلاق بمفتاح Esc ومن خلال النقر خارجها؛ هذا ما يميز المواقع الاحترافية.',
                en: 'Every modal or drawer must support Escape key dismissal and click-outside handling.',
              },
            },
            {
              number: '03',
              title: { ar: 'استشر AI في المعمارية قبل الكود', en: 'Consult AI on Approach First' },
              description: {
                ar: 'عند بناء تفاعل معقد، اطلب من الذكاء الاصطناعي البدائل والنهج المتبع أولاً، ثم اطلب الكود المنفذ بعد أن توافق.',
                en: 'When engineering complex interaction, demand architectural approaches first, verify, then implement.',
              },
            },
          ],
          coreMotto: {
            ar: 'التفاعل السلس هو اللمسة السحرية التي تحول الموقع من مجرد وثيقة إلى منتج رقمي متكامل.',
            en: 'Fluid interaction is the definitive touch transforming static documents into engaging digital products.',
          },
        },
      },
    },

    // Slide 10: Next
    {
      id: 's07-slide-10',
      sessionNumber: 7,
      slideNumber: 16,
      totalSlides: 16,
      type: 'next',
      title: { ar: 'المحطة القادمة: React — كيف تفكر بالمكونات؟', en: 'Next Waypoint: React — Think in Components' },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'تشويق الطلاب للجلسة 08 لدخول عالم React والـ Component Mental Model.', en: 'Build excitement for Session 08: mastering the React component mental model.' },
      speakerNotes: { ar: 'اختم الجلسة: "في الجلسة 08 سننتقل إلى المكتبة الأكثر طلباً في العالم: React! سنتعلم كيف نفكر بالمكونات ونعيد استخدامها باحترافية!".', en: 'Closing: "In Session 08 we master the most in-demand frontend library: React and declarative component thinking!"' },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '08',
          nextSessionTitle: {
            ar: 'React: كيف تفكر بالمكونات والحالة (Components, Props & State)',
            en: 'React: Thinking in Components, Props, and Declarative UI State',
          },
          teaser: {
            ar: 'سنتعلم العقلية المعمارية لـ React: كيف تبني مكونات قابلة لإعادة الاستخدام (Reusable Components)، تمرر البيانات عبر Props، وتدير الحالة عبر Hooks.',
            en: 'Master React component composition, unidirectional data flow with Props, and declarative state with modern Hooks.',
          },
          preparationHint: {
            ar: 'تأكد من أن كود التفاعل الذي كتبته اليوم يعمل بسلاسة في متصفحك.',
            en: 'Ensure your current interactive filtering code runs smoothly without errors in your local browser.',
          },
        },
      },
    },
  ],
};
