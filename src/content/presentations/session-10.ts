import { PresentationSession } from '@/types';

export const SESSION_10: PresentationSession = {
  id: 'session-10',
  number: 10,
  slug: 'session-10',
  title: {
    ar: 'فحص الموقع واختباره الشامل قبل الإطلاق (وضوح المحتوى، الروابط، الهواتف، والأمان)',
    en: 'Comprehensive Pre-Launch Website Inspection (Copy, Links, Mobile & Safety)',
  },
  subtitle: {
    ar: 'قائمة فحص عملية من 4 محطات للتأكد من جاهزية الموقع وخلوه من الأخطاء قبل إرساله لأي عميل (المدة: 90 دقيقة)',
    en: 'A practical 4-part checklist to verify your website is ready before sharing it with any client (90 mins)',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من مراجعة موقعه بعيون الزائر الحقيقي واختبار وضوح النصوص، عمل الأزرار وروابط واتساب، تناسق شاشة الهاتف، وأساسيات الأمان قبل النشر.',
    en: 'Enable trainees to review their website through a real visitor’s eyes across copy clarity, working links, mobile layout, and basic safety.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 09 وضبط عنوان الموقع ووصفه وصفحاته الأساسية',
      en: 'Completion of Session 09 with configured metadata and core pages',
    },
  ],
  objectives: [
    {
      ar: 'فحص وضوح النصوص والعناوين وحذف أي نصوص تجريبية أو أرقام افتراضية منسية',
      en: 'Check headline and copy clarity and remove any leftover placeholder text or numbers',
    },
    {
      ar: 'تجربة جميع الأزرار وروابط التنقل وأزرار الطلب عبر واتساب للتأكد من عملها',
      en: 'Test every navigation link, filter button, and WhatsApp action button',
    },
    {
      ar: 'فحص الموقع على مقاسات شاشات الهواتف المختلفة من داخل متصفح Google Chrome',
      en: 'Inspect the website across mobile screen sizes using Chrome DevTools',
    },
    {
      ar: 'تطبيق قواعد الأمان الأساسية ومراجعة تعديلات الذكاء الاصطناعي قبل اعتمادها',
      en: 'Apply basic safety rules and review AI changes before shipping',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:25',
      durationMinutes: 25,
      label: { ar: 'لماذا نختبر الموقع قبل الإطلاق؟ وقائمة الفحص الرباعية', en: 'Why test before launch & the 4-part checklist' },
      type: 'context',
    },
    {
      timeRange: '00:25 – 00:50',
      durationMinutes: 25,
      label: { ar: 'فحص النصوص والروابط وتجربة شاشة الهاتف من داخل المتصفح', en: 'Checking copy, links, and mobile screens in the browser' },
      type: 'demo',
    },
    {
      timeRange: '00:50 – 01:10',
      durationMinutes: 20,
      label: { ar: 'أساسيات الأمان وحماية البيانات ومراجعة كود الذكاء الاصطناعي', en: 'Basic security & reviewing AI code safely' },
      type: 'concept',
    },
    {
      timeRange: '01:10 – 01:30',
      durationMinutes: 20,
      label: { ar: 'نشاط عملي: فحص مشروع المتدرب واكتشاف وإصلاح 3 ملاحظات', en: 'Hands-on Activity: Inspect your project & fix 3 issues' },
      type: 'practice',
    },
  ],
  projectMilestone: {
    ar: 'موقع مكتمل ومفحوص في النصوص والروابط وشاشة الهاتف وجاهز للنشر الحي في الدرس القادم.',
    en: 'A fully inspected website verified across copy, links, and mobile view, ready for live deployment.',
  },
  aiRole: {
    ar: 'مساعد يصلح ملاحظات التجاوب على الهاتف والأخطاء البسيطة التي نكتشفها أثناء الفحص.',
    en: 'Assistant fixing specific mobile layout or link issues discovered during inspection.',
  },
  marketConnection: {
    ar: 'الفرق بين الهاوي والمحترف يظهر في التفاصيل: خلو الموقع من الأزرار المعطلة وتناسقه على الهاتف يبني ثقة العميل فوراً.',
    en: 'Attention to detail separates pros from beginners: working buttons and clean mobile views build instant client trust.',
  },
  startScreen: {
    badge: 'الدرس 10 من 12 • الفحص والمراجعة (90 دقيقة)',
    headline: {
      ar: 'فحص الموقع واختباره الشامل قبل الإطلاق',
      en: 'Comprehensive Website Testing & Pre-Launch Inspection',
    },
    description: {
      ar: 'في هذا الدرس (ساعة ونصف) نتعلم كيف نفحص موقعنا خطوة بخطوة قبل نشره: وضوح المحتوى، عمل الروابط وأزرار واتساب، تناسق شاشة الهاتف، وأساسيات الأمان.',
      en: 'In this 90-minute lesson, learn how to inspect your site step by step before launch: copy clarity, working links, mobile view, and safety.',
    },
    sessionGoal: {
      ar: 'تطبيق قائمة الفحص الرباعية على موقعك وإصلاح أي ملاحظات قبل نشره على الإنترنت.',
      en: 'Apply the 4-part inspection checklist to your site and fix any issues before publishing online.',
    },
  },
  endScreen: {
    headline: {
      ar: 'أحسنت! موقعك الآن مفحوص بعناية وجاهز للنشر على الإنترنت',
      en: 'Well Done! Your Website Is Thoroughly Inspected and Ready to Publish',
    },
    keyRecap: [
      {
        ar: 'الفحص المنظم (النصوص، الروابط، الهاتف، الأمان) هو ما يمنح موقعك الجودة والاحترافية.',
        en: 'Structured inspection (copy, links, mobile, safety) gives your website professional quality.',
      },
      {
        ar: 'استخدم أداة محاكاة الهاتف في المتصفح دائماً لأن أغلب زوار موقعك سيتصفحونه من هواتفهم.',
        en: 'Always test with the browser mobile simulator because most visitors browse on their phones.',
      },
      {
        ar: 'لا تترك أي زر معطل أو نص افتراضي، وجرّب الموقع بنفسك بعد كل تعديل.',
        en: 'Never leave broken buttons or placeholder text, and test the site yourself after every edit.',
      },
    ],
    nextSessionNumber: '11',
    nextSessionTitle: {
      ar: 'نشر الموقع على الإنترنت وعرضه للعملاء بطريقة مقنعة',
      en: 'Publishing the Website Online & Presenting It Convincingly to Clients',
    },
  },
  slides: [
    {
      id: 's10-slide-01',
      sessionNumber: 10,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      title: {
        ar: 'فحص الموقع واختباره الشامل قبل الإطلاق',
        en: 'Comprehensive Pre-Launch Website Inspection',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'تهيئة المتدرب لثقافة المراجعة والفحص قبل تسليم الموقع أو نشره.',
        en: 'Prepare trainees for the habit of structured inspection before publishing or delivering a site.',
      },
      speakerNotes: {
        ar: 'في هذا الدرس ننتقل من مرحلة البناء إلى مرحلة المراجعة المهنية قبل إطلاق الموقع على الإنترنت.',
        en: 'Transition from building to professional pre-launch quality inspection.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '10',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'الدرس العاشر • الفحص والمراجعة قبل النشر',
            en: 'Lesson 10 • Pre-Launch Quality Inspection',
          },
          headline: {
            ar: 'كيف تتأكد أن موقعك جاهز ويعمل بدون أخطاء قبل أن يراه العميل؟',
            en: 'How Do You Make Sure Your Website Works Flawlessly Before Clients See It?',
          },
          subheadline: {
            ar: 'قائمة فحص عملية من 4 محطات لمراجعة النصوص، الأزرار، شاشة الهاتف، وأساسيات الأمان.',
            en: 'A practical 4-part checklist to verify copy, buttons, mobile screens, and basic safety.',
          },
          tags: ['وضوح المحتوى', 'فحص الروابط', 'شاشة الهاتف', 'أساسيات الأمان'],
        },
      },
    },
    {
      id: 's10-slide-02',
      sessionNumber: 10,
      slideNumber: 2,
      totalSlides: 10,
      type: 'context',
      title: {
        ar: 'لماذا نحتاج إلى مراجعة الموقع قبل إطلاقه؟',
        en: 'Why Must We Inspect the Website Before Launch?',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'إقناع المتدرب بأن الفحص خطوة أساسية تحمي سمعته أمام العميل.',
        en: 'Show why pre-launch testing is essential to protect credibility with clients.',
      },
      speakerNotes: {
        ar: 'اذكر أمثلة واقعية لأخطاء شائعة يقع فيها المبتدئون عند الاستعجال في إرسال الموقع دون فحصه على الهاتف.',
        en: 'Share real examples of common beginner mistakes when rushing to send a site without testing.',
      },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'الموقع المكتمل ليس هو الموقع الذي انتهينا من كتابته، بل الموقع الذي جربناه وتأكدنا أنه يعمل بسلاسة على كل شاشة.',
            en: 'A finished website is not one we just finished coding, but one we tested and verified across screens.',
          },
          whyItMatters: {
            ar: 'الزائر الحقيقي لا يرى الكود؛ هو يلاحظ فقط إن كان العنوان واضحاً أم مبهماً، وإن كان الزر يعمل أم معطلاً. المراجعة المنظمة لمدة 20 دقيقة توفر عليك الإحراج وتجعل عملك يبدو متقناً من أول نظرة.',
            en: 'Real visitors do not see your code; they only notice whether the headline is clear and buttons work.',
          },
          realWorldProblem: {
            ar: 'أخطاء بسيطة مثل صورة مقطوعة على الهاتف أو رقم واتساب مكتوب بالخطأ قد تضيع ثقة العميل فوراً عند فتحه للرابط.',
            en: 'Small mistakes like a cut-off mobile image or a wrong WhatsApp number can instantly cost client trust.',
          },
        },
      },
    },
    {
      id: 's10-slide-03',
      sessionNumber: 10,
      slideNumber: 3,
      totalSlides: 10,
      type: 'visual',
      title: {
        ar: 'قائمة الفحص الرباعية قبل إطلاق أي موقع',
        en: 'The 4-Part Pre-Launch Inspection Checklist',
      },
      subtitle: {
        ar: 'أربع محطات نمرّ عليها بالترتيب قبل نشر الموقع:',
        en: 'Four stations we check in order before publishing:',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'إعطاء المتدرب إطار عمل واضح ومرتب للمراجعة من 4 محطات.',
        en: 'Provide a clear 4-step inspection workflow.',
      },
      speakerNotes: {
        ar: 'هذا المخطط هو الدليل الذي سيتبعه المتدرب في هذا الدرس وفي مشروعه النهائي.',
        en: 'Walk through the 4 inspection stations in order.',
      },
      payload: {
        type: 'visual',
        data: {
          diagramType: 'flow',
          caption: {
            ar: 'لا ننتقل إلى نشر الموقع على الإنترنت إلا بعد اجتياز هذه المحطات الأربع.',
            en: 'Only proceed to live deployment after passing all four inspection stations.',
          },
          nodes: [
            {
              id: 'check-1',
              stepNumber: '01',
              title: { ar: '1. وضوح المحتوى', en: '1. Copy Clarity' },
              description: { ar: 'عناوين مفهومة، أسعار صحيحة، وحذف أي نص تجريبي', en: 'Clear headings, accurate prices, zero placeholder text' },
            },
            {
              id: 'check-2',
              stepNumber: '02',
              title: { ar: '2. الأزرار والروابط', en: '2. Buttons & Links' },
              description: { ar: 'تجربة كل زر ورابط واتساب للتأكد أنه يفتح المحادثة الصحيحة', en: 'Test every button and WhatsApp link' },
            },
            {
              id: 'check-3',
              stepNumber: '03',
              title: { ar: '3. شاشة الهاتف', en: '3. Mobile Screen' },
              description: { ar: 'التأكد أن جميع الأقسام تقرأ بسهولة باليد الواحدة دون تزاحم', en: 'Verify comfortable one-hand mobile reading' },
            },
            {
              id: 'check-4',
              stepNumber: '04',
              title: { ar: '4. السرعة والأمان', en: '4. Speed & Safety' },
              description: { ar: 'صور خفيفة تفتح بسرعة، وعدم وجود بيانات سرية داخل الكود', en: 'Fast images and zero secrets in code' },
            },
          ],
        },
      },
    },
    {
      id: 's10-slide-04',
      sessionNumber: 10,
      slideNumber: 4,
      totalSlides: 10,
      type: 'concept',
      title: {
        ar: 'المحطة الأولى والثانية: فحص النصوص وتجربة جميع الأزرار',
        en: 'Stations 1 & 2: Checking Copy Clarity & Testing Every Button',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'تدريب المتدرب على تدقيق النصوص وتجربة كل زر ورابط بنفسه.',
        en: 'Train learners to proofread copy and click-test every button and link.',
      },
      speakerNotes: {
        ar: 'نبه المتدربين إلى أن الذكاء الاصطناعي قد يترك أحياناً أرقام هواتف افتراضية مثل 123456789 إذا لم ننتبه.',
        en: 'Remind trainees that AI may leave placeholder numbers like 123456789 unless checked.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'المحطة 1 و 2', en: 'Stations 1 & 2' },
          principle: {
            ar: 'اقرأ كل عنوان واضغط على كل زر بنفسك',
            en: 'Read Every Headline and Click Every Button Yourself',
          },
          explanation: {
            ar: 'لا تفترض أن الزر يعمل بمجرد أن شكله جميل؛ افتح الموقع في المتصفح وتحقق من النقاط التالية:',
            en: 'Never assume a button works just because it looks nice; test these items in the browser:',
          },
          bulletPoints: [
            {
              ar: '1. اختبار الـ 5 ثوانٍ للنصوص: هل يفهم الزائر من القسم الأول ماذا يقدم الموقع ولمن؟ وهل حذفت أي نص مؤقت مثل Lorem Ipsum؟',
              en: '1. The 5-Second Copy Test: Does the Hero clearly state what the site offers, with zero Lorem Ipsum?',
            },
            {
              ar: '2. روابط القائمة العلوية (Navbar): اضغط على كل كلمة في الشريط العلوي وتأكد أنها تنقلك للقسم الصحيح.',
              en: '2. Navbar Links: Click every item in the top menu to confirm it scrolls to the right section.',
            },
            {
              ar: '3. أزرار الطلب عبر واتساب: اضغط على زر الطلب في البطاقات وتأكد أن الرقم الصحيح (+905382015072 أو رقم العميل) والرسالة التلقائية يظهران بشكل سليم.',
              en: '3. WhatsApp Buttons: Click card order buttons and verify the phone number and pre-filled message.',
            },
          ],
          architecturalRule: {
            ar: 'زر واحد لا يعمل في الصفحة الرئيسية قد يجعل الزائر يظن أن الموقع كله متوقف.',
            en: 'A single dead button on the homepage can make visitors think the entire site is broken.',
          },
        },
      },
    },
    {
      id: 's10-slide-05',
      sessionNumber: 10,
      slideNumber: 5,
      totalSlides: 10,
      type: 'demo',
      title: {
        ar: 'تطبيق مباشر: كيف تفحص موقعك على شاشات الهواتف من داخل المتصفح؟',
        en: 'Live Demo: Inspecting Your Site on Mobile Screens in Chrome',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'تعليم المتدرب استخدام أداة محاكاة الهاتف في متصفح Google Chrome.',
        en: 'Teach trainees how to use Chrome DevTools Device Toolbar to test mobile screens.',
      },
      speakerNotes: {
        ar: 'افتح أداة الفحص أمام المتدربين وأظهر لهم كيف نكتشف عنصراً عريضاً يسبب خروج الصفحة عن شاشة الهاتف وكيف نصلحه.',
        en: 'Open Chrome DevTools live and show how to test iPhone and Android screen sizes.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'استخدام أداة محاكاة الهاتف (Device Toolbar) في Google Chrome لفحص تناسق الموقع على الشاشات الصغيرة.',
            en: 'Use the Mobile Device Toolbar in Google Chrome to verify mobile layout.',
          },
          instructorSteps: [
            {
              ar: '1. افتح موقعك في متصفح Google Chrome ثم اضغط بزر الفأرة الأيمن واختر Inspect (فحص).',
              en: '1. Open your site in Google Chrome, right-click anywhere, and select Inspect.',
            },
            {
              ar: '2. اضغط على أيقونة الهاتف والتابلت في أعلى نافذة الفحص (أو اختصار Ctrl + Shift + M).',
              en: '2. Click the phone/tablet Toggle Device Toolbar icon (or press Ctrl + Shift + M).',
            },
            {
              ar: '3. اختر مقاس شاشة هاتف شائع مثل iPhone 14 Pro أو Samsung Galaxy وتصفح الموقع من الأعلى للأسفل.',
              en: '3. Select a popular phone size like iPhone 14 Pro and scroll from top to bottom.',
            },
            {
              ar: '4. تأكد من عدم وجود شريط تمرير أفقي (Horizontal Scroll) أو نصوص تخرج خارج حدود الشاشة.',
              en: '4. Verify there is no unintended horizontal scrolling or text overflowing the screen.',
            },
          ],
          expectedOutput: {
            ar: 'قدرة كل متدرب على اختبار موقعه على 3 مقاسات هواتف مختلفة في دقيقة واحدة واكتشاف أي عنصر يحتاج إلى تعديل.',
            en: 'Every trainee can test their site across 3 phone sizes in under a minute.',
          },
        },
      },
    },
    {
      id: 's10-slide-06',
      sessionNumber: 10,
      slideNumber: 6,
      totalSlides: 10,
      type: 'concept',
      title: {
        ar: 'المحطة الرابعة: أساسيات الأمان ومراجعة كود الذكاء الاصطناعي',
        en: 'Station 4: Basic Security & Reviewing AI Code Before Shipping',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'غرس الوعي الأمني الأساسي لدى المتدرب المبتدئ عند التعامل مع الكود.',
        en: 'Instill essential beginner security habits when working with AI-generated code.',
      },
      speakerNotes: {
        ar: 'اشرح ببساطة لماذا لا نكتب أي كلمة مرور أو مفتاح سري داخل ملفات الواجهة الأمامية.',
        en: 'Explain simply why passwords and secret API keys must never be pasted into frontend files.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'المحطة 4 • الأمان والمراجعة', en: 'Station 4 • Safety & Review' },
          principle: {
            ar: '3 قواعد بسيطة تحمي موقعك وموقع عميلك',
            en: '3 Simple Rules That Protect Your Website and Your Client',
          },
          explanation: {
            ar: 'حتى في المواقع التعريفية والتجارية البسيطة، التزم دائماً بهذه القواعد الثلاث:',
            en: 'Even on simple business websites, always follow these three safety rules:',
          },
          bulletPoints: [
            {
              ar: '1. لا تضع كلمات مرور أو مفاتيح سرية داخل الكود: أي كود يُرسل للمتصفح يمكن للناس رؤيته، لذلك تُحفظ المفاتيح الخاصة في ملفات بيئة منفصلة (.env) لا تُرفع للعامة.',
              en: '1. Never put passwords or secret keys in code: keep private keys in `.env` files excluded from public repos.',
            },
            {
              ar: '2. استخدم روابط آمنة دائماً: تأكد أن جميع الروابط الخارجية تبدأ بـ `https://` وليس `http://` غير المشفر.',
              en: '2. Always use secure links: ensure external links start with `https://`.',
            },
            {
              ar: '3. راجع تعديلات الذكاء الاصطناعي قبل اعتمادها: لا تقبل تعديلاً كبيراً دون تجربة الصفحة بعده والتأكد أنه لم يحذف قسماً مهماً.',
              en: '3. Review AI edits before keeping them: test the page after every edit to ensure nothing was accidentally removed.',
            },
          ],
          architecturalRule: {
            ar: 'لا ترفع ملف `.env` أبداً إلى GitHub؛ تأكد أنه موجود داخل قائمة التجاهل `.gitignore`.',
            en: 'Never push `.env` files to GitHub; make sure `.env` is listed in `.gitignore`.',
          },
        },
      },
    },
    {
      id: 's10-slide-07',
      sessionNumber: 10,
      slideNumber: 7,
      totalSlides: 10,
      type: 'comparison',
      title: {
        ar: 'مقارنة: موقع تم فحصه بعناية مقابل موقع أُطلق باستعجال',
        en: 'Comparison: Carefully Inspected Site vs. Rushed Unchecked Site',
      },
      estimatedMinutes: 7,
      teachingGoal: {
        ar: 'توضيح القيمة العملية لقائمة الفحص في انطباع العميل.',
        en: 'Show the practical impact of pre-launch inspection on client impression.',
      },
      speakerNotes: {
        ar: 'اعرض المقارنة واطلب من المتدربين تقييم مشاريعهم الحالية بناءً عليها.',
        en: 'Compare both columns and ask trainees to evaluate their own projects.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'موقع بعد تطبيق قائمة الفحص الرباعية',
            en: 'Site After the 4-Part Inspection',
          },
          rightHeader: {
            ar: 'موقع أُطلق باستعجال دون مراجعة',
            en: 'Site Launched in a Rush Without Review',
          },
          dimensions: [
            {
              dimension: { ar: 'الأزرار والروابط', en: 'Buttons & Links' },
              left: {
                ar: 'كل زر ينقل الزائر للقسم الصحيح أو يفتح محادثة واتساب جاهزة',
                en: 'Every button scrolls to the right section or opens a pre-filled WhatsApp chat',
              },
              right: {
                ar: 'بعض الأزرار لا تفعل شيئاً عند الضغط عليها (`href="#"`)',
                en: 'Some buttons do nothing when clicked (`href="#"`)',
              },
            },
            {
              dimension: { ar: 'العرض على شاشة الهاتف', en: 'Mobile Screen Display' },
              left: {
                ar: 'بطاقات مرتبة في عمود واحد ونصوص واضحة وأزرار مريحة للضغط',
                en: 'Cards stacked cleanly in one column with readable text and tap-friendly buttons',
              },
              right: {
                ar: 'عناصر متداخلة أو جدول يخرج خارج حدود شاشة الهاتف',
                en: 'Overlapping elements or tables overflowing outside the phone screen',
              },
            },
            {
              dimension: { ar: 'بيانات التواصل والعناوين', en: 'Contact Info & Titles' },
              left: {
                ar: 'رقم واتساب موحد وصحيح وعنوان تبويب احترافي باسم المشروع',
                en: 'Consistent accurate WhatsApp number and branded browser tab title',
              },
              right: {
                ar: 'بقايا نصوص تجريبية أو أرقام هواتف افتراضية منسية',
                en: 'Leftover placeholder copy or forgotten dummy phone numbers',
              },
            },
          ],
          balancedVerdict: {
            ar: 'عشرون دقيقة من الفحص المنظم تحول مشروعك من تمرين تدريبي إلى منتج احترافي جاهز للعميل.',
            en: 'Twenty minutes of structured inspection turns your project into a client-ready product.',
          },
        },
      },
    },
    {
      id: 's10-slide-08',
      sessionNumber: 10,
      slideNumber: 8,
      totalSlides: 10,
      type: 'question',
      title: {
        ar: 'سؤال للنقاش: كيف تطلب إصلاح مشكلة ظهرت على شاشة الهاتف؟',
        en: 'Discussion Question: How Do You Ask AI to Fix a Mobile Layout Issue?',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'ربط مهارة الفحص بمهارة صياغة طلب الإصلاح الدقيق.',
        en: 'Connect inspection findings with clear, targeted AI fix prompts.',
      },
      speakerNotes: {
        ar: 'استمع لصياغات المتدربين وصحح الطلبات العامة مثل "أصلح الهاتف".',
        en: 'Listen to trainee prompts and refine vague requests like "fix mobile".',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'أثناء فحص موقعك على مقاس iPhone، لاحظت أن زرّين بجانب بعضهما يظهران مضغوطين جداً. كيف تطلب من المساعد الذكي إصلاح ذلك؟',
            en: 'While testing on an iPhone screen size, you notice two side-by-side buttons look cramped. How do you ask AI to fix it?',
          },
          contextHint: {
            ar: 'حدد الملف، وحدد أن التعديل لشاشة الهاتف فقط، مع الحفاظ على شكل الكمبيوتر.',
            en: 'Specify the file, state that the change is for mobile screens, and preserve desktop layout.',
          },
          promptToClass: {
            ar: 'مثال الصياغة الواضحة: «في ملف HeroSection.tsx، اجعل الزرين يظهران فوق بعضهما بعرض كامل (flex-col) على شاشة الهاتف، وبجانب بعضهما (sm:flex-row) على الكمبيوتر.»',
            en: '"In HeroSection.tsx, stack the two buttons vertically at full width (flex-col) on mobile, and keep them side by side (sm:flex-row) on desktop."',
          },
        },
      },
    },
    {
      id: 's10-slide-09',
      sessionNumber: 10,
      slideNumber: 9,
      totalSlides: 10,
      type: 'challenge',
      title: {
        ar: 'نشاط عملي (20 دقيقة): افحص مشروعك واكتشف 3 تحسينات',
        en: 'Hands-On Activity (20 Mins): Inspect Your Project & Fix 3 Improvements',
      },
      estimatedMinutes: 20,
      teachingGoal: {
        ar: 'ممارسة الفحص العملي وإصلاح الملاحظات الحقيقية على مشروع المتدرب.',
        en: 'Practice inspecting a real project and fixing 3 concrete improvements.',
      },
      speakerNotes: {
        ar: 'مرّ على المتدربين وساعدهم في اكتشاف التفاصيل التي تحتاج إلى تحسين في مشاريعهم.',
        en: 'Help trainees spot and fix 3 real improvements in their projects.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'تطبيق قائمة الفحص الرباعية على موقعك',
            en: 'Apply the 4-Part Inspection Checklist to Your Website',
          },
          durationMinutes: 20,
          objective: {
            ar: 'فحص النصوص والروابط وشاشة الهاتف في مشروعك واكتشاف وإصلاح 3 ملاحظات عملية.',
            en: 'Inspect copy, links, and mobile layout in your project and fix 3 issues.',
          },
          instructions: [
            {
              ar: '1. اقرأ جميع النصوص في موقعك وتأكد من عدم وجود أي نص افتراضي أو خطأ إملائي.',
              en: '1. Read all copy on your site and remove any placeholder text or typos.',
            },
            {
              ar: '2. اضغط على جميع أزرار الموقع وروابط واتساب وتأكد أنها تعمل وتفتح المحادثة الصحيحة.',
              en: '2. Click every button and WhatsApp link to verify they work properly.',
            },
            {
              ar: '3. افتح أداة محاكاة الهاتف في المتصفح وتصفح موقعك بالكامل، وسجّل 3 ملاحظات لتحسين الشكل أو المسافات.',
              en: '3. Open Chrome’s mobile simulator, scroll through your site, and note 3 layout improvements.',
            },
            {
              ar: '4. أصلح هذه الملاحظات الثلاث بمساعدة المساعد الذكي ثم أعد الفحص.',
              en: '4. Fix those 3 items with your AI assistant and re-verify.',
            },
          ],
          deliverable: {
            ar: 'مشاركة قائمة بالملاحظات الثلاث التي اكتشفتها في موقعك وكيف قمت بإصلاحها.',
            en: 'Share the 3 issues you found on your site and how you fixed them.',
          },
        },
      },
    },
    {
      id: 's10-slide-10',
      sessionNumber: 10,
      slideNumber: 10,
      totalSlides: 10,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الدرس العاشر',
        en: 'Lesson 10 Takeaways',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'تلخيص قواعد الفحص والتشويق لمرحلة النشر الحي في الدرس القادم.',
        en: 'Summarize inspection rules and preview live deployment in Lesson 11.',
      },
      speakerNotes: {
        ar: 'اختم الدرس بتشجيع المتدربين؛ في الدرس القادم سيحصل كل متدرب على رابط حي لموقعه يشاركه مع العالم.',
        en: 'Congratulate trainees; next lesson everyone will publish their site live online.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'الفحص المنظم يصنع الاحترافية', en: 'Structured Inspection Creates Quality' },
              description: {
                ar: 'مراجعة النصوص والروابط وشاشة الهاتف قبل التسليم تحميك من الأخطاء المحرجة أمام العميل.',
                en: 'Reviewing copy, links, and mobile screens before delivery prevents embarrassing mistakes.',
              },
            },
            {
              number: '02',
              title: { ar: 'اختبر على شاشة الهاتف أولاً', en: 'Test Mobile Screens First' },
              description: {
                ar: 'استخدم أداة محاكاة الهاتف في Google Chrome للتأكد من راحة القراءة والضغط باليد الواحدة.',
                en: 'Use Chrome’s mobile simulator to ensure comfortable reading and tapping.',
              },
            },
            {
              number: '03',
              title: { ar: 'احفظ البيانات السرية خارج الكود', en: 'Keep Secrets Out of Code' },
              description: {
                ar: 'لا تضع أي كلمات مرور أو مفاتيح خاصة داخل ملفات الواجهة، وتأكد من مراجعة تعديلات الذكاء الاصطناعي.',
                en: 'Never place passwords or private keys in frontend files, and always verify AI edits.',
              },
            },
          ],
          coreMotto: {
            ar: 'لا ترسل رابط موقعك لأي عميل قبل أن تضغط على كل زر فيه وتتصفحه من شاشة الهاتف.',
            en: 'Never send a website link to a client before clicking every button and testing it on mobile.',
          },
        },
      },
    },
  ],
};
