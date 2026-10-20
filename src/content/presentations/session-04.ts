import { PresentationSession } from '@/types';

export const SESSION_04: PresentationSession = {
  id: 'session-04',
  number: 4,
  slug: 'session-04',
  title: {
    ar: 'من التصميم إلى المشروع الحقيقي: تفكيك الواجهة وتأسيس الكود',
    en: 'From Design to Real Project: Deconstructing UI into Code Components',
  },
  subtitle: {
    ar: 'كيف تقرأ التصميم بعين المهندس البرمجي وتفككه إلى هيكل مشروع منظم ونظيف؟',
    en: 'How to read a visual design with engineering eyes and architect a clean modular repository',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين الطالب من قراءة أي تصميم وتحليله إلى مكونات (Components) وأقسام وملفات، وتأسيس مشروع Next.js حديث يبدأ فيه بناء مشروعه.',
    en: 'Empower students to analyze any visual layout, decompose it into modular components, and scaffold a production Next.js repository.',
  },
  prerequisites: [
    { ar: 'إكمال الجلسة 03 وامتلاك تصميم الواجهة ورموز التصميم (Tokens)', en: 'Completion of Session 03 with UI mockups & design tokens' },
  ],
  objectives: [
    { ar: 'إتقان تفكيك الواجهة البصرية إلى أقسام (Sections) ومكونات قابلة لإعادة الاستخدام (Components)', en: 'Deconstruct full UI pages into modular sections and reusable atomic components' },
    { ar: 'فهم هيكلية مجلدات المشاريع الحديثة (App Router Architecture)', en: 'Master modern repository architecture (src/app, components, styles, assets)' },
    { ar: 'تضمين رموز التصميم (Tokens) ومكتبة Tailwind CSS داخل المشروع', en: 'Inject design tokens and configured Tailwind utilities into the codebase' },
    { ar: 'كتابة خطة التنفيذ البرمجية خطوة بخطوة قبل لمس ملفات الكود', en: 'Formulate a structured implementation roadmap before editing files' },
  ],
  timeline: [
    { timeRange: '00:00 – 00:10', durationMinutes: 10, label: { ar: 'مراجعة التصاميم وتحدي قراءة الواجهة هندسياً', en: 'Review UI designs & layout reading challenge' }, type: 'context' },
    { timeRange: '00:10 – 00:25', durationMinutes: 15, label: { ar: 'معمارية التفكيك: DESIGN ← ANALYSIS ← COMPONENTS ← CODEBASE', en: 'Deconstruction Architecture: Design to Codebase' }, type: 'concept' },
    { timeRange: '00:25 – 00:45', durationMinutes: 20, label: { ar: 'تطبيق حي: تأسيس مشروع Next.js وضبط ملفات الـ Tokens', en: 'Live Demo: Scaffolding Repository & Configuring Tokens' }, type: 'demo' },
    { timeRange: '00:45 – 01:00', durationMinutes: 15, label: { ar: 'تسمية المكونات وتنظيم مسارات الملفات (Clean File Structure)', en: 'Component Naming & Predictable File Layout' }, type: 'concept' },
    { timeRange: '01:00 – 01:20', durationMinutes: 20, label: { ar: 'تحدي الطلاب: تقسيم تصميمهم إلى 4 مكونات وتأسيس مشروعهم', en: 'Student Challenge: Deconstruct UI & Setup Workspace' }, type: 'practice' },
    { timeRange: '01:20 – 01:25', durationMinutes: 5, label: { ar: 'مراجعة هيكل ملفات الطلاب في الشات', en: 'Review student project directory structures' }, type: 'review' },
    { timeRange: '01:25 – 01:30', durationMinutes: 5, label: { ar: 'الخلاصة والتجهيز لجلسة Antigravity التحليلية (Session 05)', en: 'Takeaways & Prep for Antigravity (Session 05)' }, type: 'takeaway' },
  ],
  projectMilestone: {
    ar: 'تأسيس مستودع الكود الحقيقي (Repository) وضبط نظام التصميم وهيكل المكونات.',
    en: 'Initialize real project repository, configure theme tokens, and scaffold component skeleton.',
  },
  aiRole: {
    ar: 'مساعد في اقتراح تقسيم المكونات ومراجعة تسمية الملفات وهيكلية المجلدات.',
    en: 'Architecture consultant suggesting modular component boundaries and directory conventions.',
  },
  marketConnection: {
    ar: 'الشركات البرمجية تدفع أعلى الرواتب للمطورين الذين ينظمون الأكواد في مكونات نظيفة وقابلة للصيانة.',
    en: 'Software companies reward developers who architect clean, modular, self-documenting codebases.',
  },
  startScreen: {
    badge: 'SESSION 04 / 12 • CODEBASE SETUP',
    headline: {
      ar: 'من التصميم إلى المشروع الحقيقي: تحويل الرسوم إلى أكواد منظمة',
      en: 'From Design to Real Project: Translating Visuals into Clean Architecture',
    },
    description: {
      ar: 'تعلم كيف تنتقل من شاشة التصميم إلى بيئة التطوير الحقيقية، وتؤسس مشروعك البرمجي وفق أفضل معايير الصناعة.',
      en: 'Bridge visual prototypes into real-world code repositories structured to scale effortlessly.',
    },
    sessionGoal: {
      ar: 'تفكيك واجهة مشروعك إلى مكونات برمجية وتأسيس مستودع الكود الحقيقي.',
      en: 'Decompose your project UI into reusable components and launch your live Next.js codebase.',
    },
  },
  endScreen: {
    headline: {
      ar: 'ممتاز! مشروعك البرمجي الحقيقي أصبح الآن حياً ومنظماً على جهازك',
      en: 'Awesome! Your Real Project Codebase is Now Live & Modular',
    },
    keyRecap: [
      {
        ar: 'المهندس يقسم الشاشة الكبيرة إلى مكونات صغيرة معزولة يسهل اختبارها وصيانتها.',
        en: 'Engineers break complex screens into isolated, easily-testable modular components.',
      },
      {
        ar: 'تضمين رموز التصميم في البداية يقلل تكرار التعديلات اليدوية لاحقاً في المشروع.',
        en: 'Configuring tokens upfront reduces repeated manual styling edits later.',
      },
      {
        ar: 'هيكل المجلدات المنظم هو أول مؤشر على احترافية المطور أمام أصحاب العمل.',
        en: 'A clean, predictable directory structure is the primary signal of professional engineering.',
      },
    ],
    nextSessionNumber: '05',
    nextSessionTitle: {
      ar: 'Antigravity: حلل المشروع وافهم المعمارية قبل التعديل أو البرمجة',
      en: 'Antigravity: Analyze Architecture Before Modifying or Building',
    },
  },
  slides: [
    // Slide 1: Title
    {
      id: 's04-slide-01',
      sessionNumber: 4,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      title: { ar: "من التصميم إلى المشروع الحقيقي", en: "From Design to Real Project" },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'افتتاح الجلسة وإعلان بدء مرحلة الكود والمشروع الفعلي.', en: 'Open session: crossing from prototyping into production code.' },
      speakerNotes: { ar: "نفّذ: رحب بالطلاب: \"اليوم نودع الرسومات المجردة ونفتح محرر الأكواد والـ Terminal لبناء هيكل المشروع الحقيقي!\".\nاسأل: ما الهدف الذي تتوقع تحقيقه في جلسة «من التصميم إلى المشروع الحقيقي»؟\nتحقق: افتتاح الجلسة وإعلان بدء مرحلة الكود والمشروع الفعلي.", en: "Cue: Welcome students: \"Today we leave flat mockups and enter the terminal to scaffold our real project!\"\nAsk: What outcome do you expect from “From Design to Real Project”?\nCheck: Open session: crossing from prototyping into production code." },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '04',
          kicker: { ar: 'هندسة هيكل الكود', en: 'Codebase Architecture' },
          headline: { ar: 'FROM DESIGN TO CODE', en: 'FROM DESIGN TO CODE' },
          subheadline: { ar: 'تفكيك الواجهة إلى مكونات معيارية وتأسيس بيئة التطوير الحديثة', en: 'Deconstructing UI into modular components and modern development workspace' },
          totalSessions: '12',
          durationMinutes: 90,
          tags: ['Component Thinking', 'App Router', 'Clean Architecture', 'Folder Structure'],
        },
      },
    },

    // Slide 2: Context
    {
      id: 's04-slide-02',
      sessionNumber: 4,
      slideNumber: 2,
      totalSlides: 10,
      type: 'context',
      title: { ar: "كيف يقرأ مهندس البرمجيات صفحة التصميم؟", en: "How Engineers Read UI Designs" },
      subtitle: { ar: 'الفرق بين النظر إلى الصفحة كصورة واحدة وبين رؤيتها كشجرة مكونات مترابطة', en: 'Viewing a page as a flat picture vs seeing an interactive component tree' },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تدريب عقول الطلاب على التفكير الشجري (Component Tree Thinking).', en: 'Train student minds to perceive layouts as a composable component tree.' },
      speakerNotes: { ar: "نفّذ: اعرض واجهة موقع واسأل: \"ما الذي تراه هنا؟\" المبتدئ يرى ألواناً ونصوصاً؛ المهندس يرى Header و Hero و CardList و Footer.\nاسأل: ما المشكلة التي توضّحها «كيف يقرأ مهندس البرمجيات صفحة التصميم؟»؟\nتحقق: نسخ الكود ولصقه دون تقسيم معماري يؤدي لكود يصعب تعديله، وكل تغيير في جزء منه يكسر بقية الأجزاء.", en: "Cue: Show a website screen: beginners see images; engineers see Header, Hero, CardList, and Footer.\nAsk: What problem does “How Engineers Read UI Designs” point to?\nCheck: Copy-pasting flat markup without component boundaries creates fragile, spaghetti code." },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'تطوير الويب الحديث لا يكتب صفحات ضخمة في ملف واحد (Monolithic HTML)، بل يجمع مكونات صغيرة قابلة لإعادة الاستخدام.',
            en: 'Modern frontend rejects monolithic 1,000-line HTML files in favor of composable micro-components.',
          },
          realWorldProblem: {
            ar: 'نسخ الكود ولصقه دون تقسيم معماري يؤدي لكود يصعب تعديله، وكل تغيير في جزء منه يكسر بقية الأجزاء.',
            en: 'Copy-pasting flat markup without component boundaries creates fragile, spaghetti code.',
          },
          whyItMatters: {
            ar: 'المكونات المنفصلة تتيح لك أن تطلب من الذكاء الاصطناعي تعديل زر معين أو قسم محدد دون أن يمس بقية المشروع.',
            en: 'Discrete components let you instruct AI to refactor one section safely without polluting the codebase.',
          },
        },
      },
    },

    // Slide 3: Visual (Component Decomposition)
    {
      id: 's04-slide-03',
      sessionNumber: 4,
      slideNumber: 3,
      totalSlides: 10,
      type: 'visual',
      title: { ar: "من الصفحة إلى المكونات", en: "From Page to Components" },
      subtitle: { ar: 'كيف تتحول الشاشة الواحدة إلى 5 ملفات كود مستقلة وسهلة الفحص', en: 'How a single viewport translates into 5 discrete, maintainable files' },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'رسم الشجرة المكونة بوضوح أمام الطلاب.', en: 'Visually diagram the component hierarchy from layout down to leaf buttons.' },
      speakerNotes: { ar: "نفّذ: استعرض الأقسام الخمسة: Navbar -> HeroSection -> MenuGrid -> StorySection -> SiteFooter.\nاسأل: اشرح ترتيب المراحل في «من الصفحة إلى المكونات» بصوتك.\nتحقق: Navbar & Mobile Menu ← Hero With Big CTA ← Signature Menu Grid ← About & Chef Story ← Reservation Booking ← Footer & Legal/Social", en: "Cue: Walk through: Navbar -> HeroSection -> MenuGrid -> StorySection -> SiteFooter.\nAsk: Ask learners to walk through the stages in “From Page to Components”.\nCheck: Navbar & Nav → Hero Section → Product Grid → Brand Story → Booking CTA → Site Footer" },
      payload: {
        type: 'visual',
        data: {
          caption: { ar: 'كل مستطيل في التصميم يصبح ملفاً مستقلاً في مجلد components/.', en: 'Every visual container becomes a dedicated component in components/.' },
          diagramType: 'pipeline',
          nodes: [
            { id: 'c1', stepNumber: '01', title: { ar: 'Navbar & Mobile Menu', en: 'Navbar & Nav' }, badge: 'Header' },
            { id: 'c2', stepNumber: '02', title: { ar: 'Hero With Big CTA', en: 'Hero Section' }, badge: 'Top-Fold' },
            { id: 'c3', stepNumber: '03', title: { ar: 'Signature Menu Grid', en: 'Product Grid' }, badge: 'Data List' },
            { id: 'c4', stepNumber: '04', title: { ar: 'About & Chef Story', en: 'Brand Story' }, badge: 'Editorial' },
            { id: 'c5', stepNumber: '05', title: { ar: 'Reservation Booking', en: 'Booking CTA' }, badge: 'Form' },
            { id: 'c6', stepNumber: '06', title: { ar: 'Footer & Legal/Social', en: 'Site Footer' }, badge: 'Bottom' },
          ],
        },
      },
    },

    // Slide 4: Concept (Clean Directory Structure)
    {
      id: 's04-slide-04',
      sessionNumber: 4,
      slideNumber: 4,
      totalSlides: 10,
      type: 'concept',
      title: { ar: "معمارية المجلدات في مشاريع الويب الاحترافية", en: "Professional Repository Architecture" },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'تعليم الطلاب بنية المجلدات القياسية وتفادي تسمية الملفات العشوائية.', en: 'Establish clean directory conventions (src/app, components, styles, lib).' },
      speakerNotes: { ar: "نفّذ: اشرح أهمية مجلد components ومجلد styles ومجلد content. هذا الترتيب يساعد أي مهندس يفتح المشروع على العثور على المكونات وفهم تنظيمها.\nاسأل: كيف تطبّق هذا المبدأ: هيكل الملفات المتوقع والنظيف يقلل وقت البحث والتعديل في المشروع.؟\nتحقق: قاعدة ذهبية: لا تضع أكواد المكونات داخل صفحة الـ page.tsx مباشرة؛ اجعل الصفحة منسقاً يجمع المكونات فقط.", en: "Cue: Explain the roles of src/app, components, styles, and content. Clean layout screams professionalism.\nAsk: How would you apply this principle: A predictable directory layout cuts search and cognitive load in half.?\nCheck: Golden Rule: Never bloat page.tsx; pages must serve as thin orchestrators of modular components." },
      payload: {
        type: 'concept',
        data: {
          principle: {
            ar: 'هيكل الملفات المتوقع والنظيف يقلل وقت البحث والتعديل في المشروع.',
            en: 'A predictable directory layout cuts search and cognitive load in half.',
          },
          tagline: { ar: 'PREDICTABLE CODEBASE TAXONOMY', en: 'PREDICTABLE CODEBASE TAXONOMY' },
          explanation: {
            ar: 'في مشاريع Next.js الحديثة، نفصل بين المسارات (App Router) وبين المكونات القابلة لإعادة الاستخدام، والأنماط، والمحتوى النصي.',
            en: 'In modern Next.js, we decouple routes (src/app), reusable UI components (src/components), design styles, and content layers.',
          },
          bulletPoints: [
            { ar: 'src/app: مسارات الصفحات (page.tsx, layout.tsx)', en: 'src/app: App Router pages and global layouts' },
            { ar: 'src/components: المكونات المعزولة (Hero.tsx, Navbar.tsx, Card.tsx)', en: 'src/components: Self-contained UI components' },
            { ar: 'src/styles: متغيرات التصميم والـ Tokens و Tailwind', en: 'src/styles: Theme tokens and utility styling' },
            { ar: 'src/content: البيانات والنصوص مفصولة عن كود الواجهة', en: 'src/content: Decoupled text copy and domain models' },
          ],
          architecturalRule: {
            ar: 'قاعدة ذهبية: لا تضع أكواد المكونات داخل صفحة الـ page.tsx مباشرة؛ اجعل الصفحة منسقاً يجمع المكونات فقط.',
            en: 'Golden Rule: Never bloat page.tsx; pages must serve as thin orchestrators of modular components.',
          },
        },
      },
    },

    // Slide 5: Code (Clean page.tsx Orchestration)
    {
      id: 's04-slide-05',
      sessionNumber: 4,
      slideNumber: 5,
      totalSlides: 10,
      type: 'code',
      title: { ar: "الكود كمنسق — كيف تبدو صفحة page.tsx النظيفة؟", en: "Orchestrator Pattern — The Clean page.tsx" },
      estimatedMinutes: 5,
      teachingGoal: { ar: 'إظهار كيف تكون صفحة الـ Page نظيفة وقصيرة جداً تستدعي المكونات فقط.', en: 'Demonstrate that high-quality pages are short orchestrators importing clean components.' },
      speakerNotes: { ar: "نفّذ: أظهر الكود ووضّح أن الملف الرئيسي يركّب المكونات فقط، وأن كل قسم يعيش في ملف مستقل. هذا يسهل صيانة الكود وتوجيه الـ AI.\nاسأل: ما وظيفة المثال في «الكود كمنسق — كيف تبدو صفحة page.tsx النظيفة؟»؟\nتحقق: صفحة رئيسية تقوم فقط بتركيب المكونات المعمارية بترتيب تدفق الزائر. فصل كل قسم في ملف مستقل يتيح تصحيح قسم واحد دون أي خوف من كسر بقية الصفحة.", en: "Cue: Show how page.tsx composes sections kept in separate files. This makes maintenance and AI-assisted changes more focused.\nAsk: What does the example in “Orchestrator Pattern — The Clean page.tsx” do?\nCheck: Root page cleanly composing modular sections in user flow sequence. Isolation allows modifying one section without risking collateral breakage." },
      payload: {
        type: 'code',
        data: {
          language: 'tsx',
          codeSnippet: `// src/app/page.tsx — High-Elegance Page Orchestrator
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { MenuGrid } from '@/components/MenuGrid';
import { StorySection } from '@/components/StorySection';
import { ReservationSection } from '@/components/ReservationSection';
import { SiteFooter } from '@/components/SiteFooter';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--pres-bg)] text-[var(--pres-text)]">
      <Navbar />
      <HeroSection />
      <MenuGrid />
      <StorySection />
      <ReservationSection />
      <SiteFooter />
    </main>
  );
}`,
          what: { ar: 'صفحة رئيسية تقوم فقط بتركيب المكونات المعمارية بترتيب تدفق الزائر.', en: 'Root page cleanly composing modular sections in user flow sequence.' },
          why: { ar: 'فصل كل قسم في ملف مستقل يتيح تصحيح قسم واحد دون أي خوف من كسر بقية الصفحة.', en: 'Isolation allows modifying one section without risking collateral breakage.' },
          when: { ar: 'المعيار الإلزامي لكل صفحات الهبوط في جميع مراحل الدورة.', en: 'Mandatory standard for all landing pages throughout the curriculum.' },
        },
      },
    },

    // Slide 6: Demo (Live Repository Scaffolding)
    {
      id: 's04-slide-06',
      sessionNumber: 4,
      slideNumber: 6,
      totalSlides: 10,
      type: 'demo',
      title: { ar: "تأسيس المشروع وهيكل المكونات في 5 دقائق", en: "Live Demo — Scaffolding Project & Folders in 5 Mins" },
      estimatedMinutes: 6,
      teachingGoal: { ar: 'إظهار سرعة إنشاء الهيكل وضبط ملف tokens.css عملياً أمام الطلاب.', en: 'Demonstrate live folder creation and tokens.css configuration in terminal.' },
      speakerNotes: { ar: "نفّذ: افتح الـ Terminal وأنشئ المجلدات: components, styles. انسخ الـ Tokens التي استخرجناها في الجلسة 03 وضعها في ملف CSS.\nاسأل: إنشاء مجلدات المشروع الحقيقية وحقن رموز تصميم Terracotta في ملف الأنماط.\nتحقق: مشروع يعمل بسرعة 0 أخطاء مع مكونات نظيفة ومستعدة لاستقبال الأكواد.", en: "Cue: Open terminal and create components and styles folders. Inject design tokens from Session 03.\nAsk: Create repository directory skeleton and inject brand tokens into stylesheets.\nCheck: Clean development server running at localhost with zero errors and modular stubs." },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'إنشاء مجلدات المشروع الحقيقية وحقن رموز تصميم Terracotta في ملف الأنماط.',
            en: 'Create repository directory skeleton and inject brand tokens into stylesheets.',
          },
          promptToUse: `Scaffold a clean Next.js 16 component directory structure:
1. Create src/components/Hero.tsx with typed props.
2. Create src/components/MenuGrid.tsx with a sample data array.
3. Configure :root design tokens in globals.css for primary: #641a01, canvas: #fff8f5.`,
          instructorSteps: [
            { ar: 'استعراض هيكل المجلدات النظيف على الشاشة', en: 'Display clean folder hierarchy in VS Code' },
            { ar: 'إنشاء ملفات المكونات الأربعة الفارغة مع تصديرها', en: 'Scaffold 4 component stubs with typed exports' },
            { ar: 'إضافة متغيرات الألوان إلى ملف globals.css', en: 'Inject color tokens into globals.css root' },
            { ar: 'تشغيل خادم التطوير (npm run dev) والتأكد من عدم وجود أخطاء', en: 'Run npm run dev and confirm clean zero-warning build' },
          ],
          expectedOutput: {
            ar: 'مشروع يعمل بسرعة 0 أخطاء مع مكونات نظيفة ومستعدة لاستقبال الأكواد.',
            en: 'Clean development server running at localhost with zero errors and modular stubs.'
          },
        },
      },
    },

    // Slide 7: Challenge (Student Setup Lab)
    {
      id: 's04-slide-07',
      sessionNumber: 4,
      slideNumber: 7,
      totalSlides: 10,
      type: 'challenge',
      title: { ar: "تفكيك واجهتك وتأسيس مجلدات مشروعك", en: "Student Challenge — Deconstruct UI & Scaffold Workspace" },
      estimatedMinutes: 8,
      teachingGoal: { ar: 'قيام كل طالب بتقسيم تصميمه وتأسيس 4 ملفات مكونات على جهازه.', en: 'Every student maps their design into 4 component files in their workspace.' },
      speakerNotes: { ar: "نفّذ: أطلق مؤقت الـ 5 دقائق. اطلب منهم كتابة أسماء المكونات الأربعة في الشات وتأسيس ملفاتها في مشروعهم.\nاسأل: ما الناتج الذي ستسلّمه؟ تفكيك تصميم صفحة الهبوط لمشروعك إلى 4 ملفات مكونات منفصلة وتسميتها بدقة.\nتحقق: هيكل مشروع حقيقي جاهز لاستقبال التحليل والبرمجة في الجلسات القادمة.", en: "Cue: Start 5-minute countdown. Instruct students to list their 4 component file names in chat.\nAsk: What will you submit? Deconstruct your project landing UI into 4 dedicated component files with clean naming.\nCheck: A live, cleanly partitioned project repository ready for architectural analysis in Session 05." },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'تفكيك تصميم صفحة الهبوط لمشروعك إلى 4 ملفات مكونات منفصلة وتسميتها بدقة.',
            en: 'Deconstruct your project landing UI into 4 dedicated component files with clean naming.',
          },
          durationMinutes: 5,
          objective: {
            ar: 'التعود على المعمارية المنضبطة قبل البدء في كتابة أو توليد أكواد الـ HTML والـ CSS.',
            en: 'Establish disciplined architectural boundaries before writing markup or CSS.',
          },
          instructions: [
            { ar: 'اختر 4 مكونات رئيسية لواجهتك (مثال: Hero, Services, Reviews, Footer)', en: 'Identify 4 core components for your landing page' },
            { ar: 'أنشئ المجلد src/components وضع فيه الملفات الأربعة بتسمية PascalCase', en: 'Create src/components folder and stub 4 PascalCase files' },
            { ar: 'تأكد من أن كل مكون يُصدر دالة React نظيفة (export function ...)', en: 'Ensure each file exports a clean React component stub' },
            { ar: 'شارك أسماء ملفاتك الأربعة في شات Zoom', en: 'Share your 4 component filenames in Zoom chat' },
          ],
          starterPromptOrCode: 'Components: 1. Header.tsx | 2. HeroSection.tsx | 3. ServiceGrid.tsx | 4. ContactSection.tsx',
          deliverable: {
            ar: 'هيكل مشروع حقيقي جاهز لاستقبال التحليل والبرمجة في الجلسات القادمة.',
            en: 'A live, cleanly partitioned project repository ready for architectural analysis in Session 05.',
          },
        },
      },
    },

    // Slide 8: Project (Milestone 04)
    {
      id: 's04-slide-08',
      sessionNumber: 4,
      slideNumber: 8,
      totalSlides: 10,
      type: 'project',
      title: { ar: "الهيكل المعماري المنضبط للمشروع", en: "Project Milestone — Codebase Scaffolding" },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'تثبيت أن المشروع الحقيقي قد بدأ برمجياً بالفعل على الأجهزة.', en: 'Celebrate that the capstone repository is now live and partitioned.' },
      speakerNotes: { ar: "نفّذ: هنئ الطلاب: \"الآن لم نعد في مرحلة الكلام النظري أو التصميم؛ الآن أصبح لديك مشروع كود حقيقي على جهازك!\".\nاسأل: أي مخرج من هذه المرحلة يحتاج إلى استكمال؟\nتحقق: مستودع كود Next.js يعمل دون أخطاء؛ مجلد مكونات منظم يحتوي أقسام الصفحة الرئيسية؛ ملف أنماط مركزي يضم رموز التصميم (Design Tokens)", en: "Cue: Congratulate learners: \"We are now live in code; your real capstone repo is born!\"\nAsk: Which deliverable from this phase still needs work?\nCheck: Next.js repository running with zero errors; Structured components folder containing page sections; Centralized tokens stylesheet integrated with layout" },
      payload: {
        type: 'project',
        data: {
          phaseName: { ar: 'المرحلة 04: تأسيس مستودع الكود الحقيقي', en: 'Phase 04: Live Codebase Scaffolding' },
          stepNumber: '04',
          whatWeBuildNow: {
            ar: 'تثبيت هيكل الملفات والمكونات ونظام الـ Tokens لمشروع التخرج.',
            en: 'Lock in component architecture and theme tokens for your capstone project.',
          },
          deliverables: [
            { ar: 'مستودع كود Next.js يعمل دون أخطاء', en: 'Next.js repository running with zero errors' },
            { ar: 'مجلد مكونات منظم يحتوي أقسام الصفحة الرئيسية', en: 'Structured components folder containing page sections' },
            { ar: 'ملف أنماط مركزي يضم رموز التصميم (Design Tokens)', en: 'Centralized tokens stylesheet integrated with layout' },
          ],
          connectionToFinalProject: {
            ar: 'هذا المشروع هو البيئة البرمجية التي سنعطيها في الجلسة القادمة لـ Antigravity ليحللها كمهندس فاحص.',
            en: 'This exact repository will be fed into Antigravity in Session 05 for architectural inspection.',
          },
        },
      },
    },

    // Slide 9: Takeaway
    {
      id: 's04-slide-09',
      sessionNumber: 4,
      slideNumber: 9,
      totalSlides: 10,
      type: 'takeaway',
      title: { ar: "خلاصة: معمارية المشروع", en: "Recap: Project Architecture" },
      estimatedMinutes: 4,
      teachingGoal: { ar: 'ترسيخ مبدأ التفكير المكوّناتي (Component Thinking) كقاعدة أبدية.', en: 'Solidify Component Thinking as a permanent engineering superpower.' },
      speakerNotes: { ar: "نفّذ: اقرأ النقاط الثلاث. أكد: \"بدلاً من جمع المسؤوليات في ملف واحد، وزّعها على ملفات ومكونات واضحة\".\nاسأل: أي مبدأ من «خلاصة: معمارية المشروع» ستستخدمه في مشروعك؟\nتحقق: الكود المنظم يعكس عقلية المهندس المنظم، وهو ما يبني ثقة العملاء وفِرق العمل.", en: "Cue: Amateur coders write 1,000-line monsters; senior architects compose ten 100-line modular gems.\nAsk: Which principle from “Recap: Project Architecture” will you use in your project?\nCheck: Disciplined code reflects a disciplined engineering mind, forging unwavering client trust." },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'فكر في المكونات وليس في الصفحات (Think in Components)', en: 'Think in Components, Not Pages' },
              description: {
                ar: 'أي واجهة ويب هي تجميع ذكي لمكونات صغيرة مستقلة، وتفكيكها هو المفتاح الأول للكود النظيف.',
                en: 'Every interface is an orchestration of atomic components; deconstruction is the prerequisite of clean code.',
              },
            },
            {
              number: '02',
              title: { ar: 'الصفحة منسق وليست مكباً للأكواد (Orchestrator Pattern)', en: 'Pages are Thin Orchestrators' },
              description: {
                ar: 'اجعل صفحة page.tsx قصيرة ونظيفة تستدعي المكونات فقط، واترك التفاصيل والتنسيقات داخل ملف كل مكون.',
                en: 'Keep page.tsx concise and declarative; isolate styling and markup within dedicated component modules.',
              },
            },
            {
              number: '03',
              title: { ar: 'المعمارية قبل البرمجة تمنع الفوضى', en: 'Structure Before Code Prevents Chaos' },
              description: {
                ar: 'تنظيم المجلدات وتسمية الملفات بدقة في البداية يقلل مشكلات التوسع ويسهل عمل الذكاء الاصطناعي معك.',
                en: 'Disciplined repository conventions upfront reduce scaling friction and supercharge AI collaboration.',
              },
            },
          ],
          coreMotto: {
            ar: 'الكود المنظم يعكس عقلية المهندس المنظم، وهو ما يبني ثقة العملاء وفِرق العمل.',
            en: 'Disciplined code reflects a disciplined engineering mind, forging unwavering client trust.',
          },
        },
      },
    },

    // Slide 10: Next
    {
      id: 's04-slide-10',
      sessionNumber: 4,
      slideNumber: 10,
      totalSlides: 10,
      type: 'next',
      title: { ar: "المحطة القادمة — Antigravity — حلل قبل أن تبني", en: "Next Waypoint — Antigravity — Analyze Before Build" },
      estimatedMinutes: 2,
      teachingGoal: { ar: 'تشويق الطلاب للجلسة 05 التي تعد من أهم جلسات الدورة مع أداة Antigravity.', en: 'Build intense anticipation for Session 05: architectural analysis with Antigravity.' },
      speakerNotes: { ar: "نفّذ: اختم الجلسة: \"في الجلسة 05 سنعلمكم القاعدة الذهبية التي تفصل المحترفين عن الهواة: كيف تطلب من AI أن يحلل مشروعك ويفهم كل أجزائه قبل أن يغير حرفاً واحداً!\".\nاسأل: ما الذي ستجهزه قبل الجلسة القادمة؟\nتحقق: احرص على أن يكون مشروعك الذي أسسته اليوم محفوظاً وجاهزاً للتحليل في الجلسة القادمة.", en: "Cue: Closing: \"In Session 05 we teach the golden rule: inspect and understand architecture before modifying a single file!\"\nAsk: What will you prepare before the next session?\nCheck: Ensure your project directory from today is saved and ready for deep architectural inspection in Session 05." },
      payload: {
        type: 'next',
        data: {
          nextSessionNumber: '05',
          nextSessionTitle: {
            ar: 'Antigravity: حلل المشروع وافهم المعمارية قبل التعديل أو البرمجة',
            en: 'Antigravity: Analyze Architecture Before Modifying or Building',
          },
          teaser: {
            ar: 'هذه جلسة محورية جداً: سنتعلم كيف نوجه Antigravity ليقرأ كامل المشروع، يفحص الاعتماديات، يشرح المعمارية، ويضع خطة تنفيذ محكمة قبل كتابة الكود.',
            en: 'A flagship session: instruct Antigravity to audit full repo trees, map dependencies, and draft an implementation plan before touching code.',
          },
          preparationHint: {
            ar: 'احرص على أن يكون مشروعك الذي أسسته اليوم محفوظاً وجاهزاً للتحليل في الجلسة القادمة.',
            en: 'Ensure your project directory from today is saved and ready for deep architectural inspection in Session 05.',
          },
        },
      },
    },
  ],
};
