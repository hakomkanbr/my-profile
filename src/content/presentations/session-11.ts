import { PresentationSession } from '@/types';

export const SESSION_11: PresentationSession = {
  id: 'session-11',
  number: 11,
  slug: 'session-11',
  title: {
    ar: 'نشر الموقع على الإنترنت وعرضه للعملاء بطريقة مقنعة',
    en: 'Publishing the Website Online & Presenting It Convincingly to Clients',
  },
  subtitle: {
    ar: 'رفع المشروع على GitHub و Vercel للحصول على رابط حي وتجهيز عرض العمل للعملاء بوضوح وصدق (المدة: 90 دقيقة)',
    en: 'Deploying your project on GitHub and Vercel for a live link and presenting its value clearly (90 mins)',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من نشر موقعه على الإنترنت برابط حي مجاني وآمن عبر GitHub و Vercel، وتعلم كيف يشرح قيمة الموقع لأصحاب المشاريع بوضوح وصدق دون مبالغة.',
    en: 'Enable trainees to deploy their website live on GitHub and Vercel and explain its practical value to clients honestly.',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 10 وفحص الموقع بالكامل على الهاتف والكمبيوتر',
      en: 'Completion of Session 10 with a fully inspected website',
    },
  ],
  objectives: [
    {
      ar: 'فهم الفرق بين الرابط المحلي على جهازك (localhost) والرابط العالمي المنشور على الإنترنت',
      en: 'Understand the difference between local `localhost` and a public live internet URL',
    },
    {
      ar: 'رفع ملفات المشروع إلى حساب GitHub وربطه بمنصة Vercel للحصول على رابط حي (https://)',
      en: 'Push project files to GitHub and connect Vercel to get a live `https://` URL',
    },
    {
      ar: 'كتابة وصف واضح للمشروع من 3 نقاط (مشكلة العميل، الحل الذي قدمه الموقع، والفائدة العملية)',
      en: 'Write a clear 3-part project summary: Client Problem, Website Solution, and Practical Benefit',
    },
    {
      ar: 'تقديم العمل للعملاء بلغة الفائدة والتجربة الحية بعيداً عن المصطلحات التقنية المعقدة أو الوعود المبالغ فيها',
      en: 'Present work to clients using clear business benefits and live links without jargon or hype',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:25',
      durationMinutes: 25,
      label: { ar: 'كيف ينتقل الموقع من جهازك إلى الإنترنت؟ (دور GitHub و Vercel)', en: 'How a site moves from your computer to the internet (GitHub & Vercel)' },
      type: 'context',
    },
    {
      timeRange: '00:25 – 00:50',
      durationMinutes: 25,
      label: { ar: 'تطبيق مباشر: رفع المشروع على GitHub ونشره على Vercel خطوة بخطوة', en: 'Live Demo: Pushing to GitHub & deploying live on Vercel' },
      type: 'demo',
    },
    {
      timeRange: '00:50 – 01:10',
      durationMinutes: 20,
      label: { ar: 'كيف تعرض عملك للعميل؟ (المشكلة، الحل، الفائدة العملية) بوضوح وصدق', en: 'How to present your work to clients clearly and honestly' },
      type: 'concept',
    },
    {
      timeRange: '01:10 – 01:30',
      durationMinutes: 20,
      label: { ar: 'نشاط عملي: نشر مشروع المتدرب وكتابة ملخص عرضه للعميل', en: 'Hands-on Activity: Publish your site & write your project summary' },
      type: 'practice',
    },
  ],
  projectMilestone: {
    ar: 'رابط موقع حي على منصة Vercel يفتح على أي هاتف، مع ملخص واضح يشرح فكرة المشروع وفائدته.',
    en: 'A live Vercel URL accessible on any phone, paired with a clear 3-point project summary.',
  },
  aiRole: {
    ar: 'مساعد يساعدنا في حل أي رسالة خطأ قد تظهر أثناء تشغيل `npm run build` قبل النشر.',
    en: 'Assistant helping resolve any `npm run build` errors before deployment.',
  },
  marketConnection: {
    ar: 'العميل يقتنع عندما يفتح رابطاً حقيقياً على هاتفه ويجرب التصفح والطلب عبر واتساب بنفسه.',
    en: 'Clients are convinced when they open a real live link on their phone and test WhatsApp ordering themselves.',
  },
  startScreen: {
    badge: 'الدرس 11 من 12 • النشر الحي وعرض العمل (90 دقيقة)',
    headline: {
      ar: 'نشر الموقع على الإنترنت وعرضه للعملاء بطريقة مقنعة',
      en: 'Publishing Your Website Online & Presenting It to Clients',
    },
    description: {
      ar: 'في هذا الدرس (ساعة ونصف) ننقل مشاريعنا من أجهزتنا إلى الإنترنت الحقيقي عبر GitHub و Vercel، ونتعلم كيف نشرح قيمة أعمالنا للعملاء ببساطة وصدق.',
      en: 'In this 90-minute lesson, deploy your project live via GitHub and Vercel and learn how to present its value clearly to clients.',
    },
    sessionGoal: {
      ar: 'الحصول على رابط حي لموقعك على الإنترنت وكتابة ملخص واضح يعرض فائدته للعملاء.',
      en: 'Get a live public URL for your website and write a clear client-focused summary.',
    },
  },
  endScreen: {
    headline: {
      ar: 'مبارك! موقعك الآن منشور على الإنترنت برابط حي يعمل في كل مكان',
      en: 'Congratulations! Your Website Is Now Live Online Worldwide',
    },
    keyRecap: [
      {
        ar: 'منصة GitHub تحفظ كود موقعك بأمان، ومنصة Vercel تحوله إلى رابط حي يعمل على مدار الساعة.',
        en: 'GitHub safely stores your code, and Vercel turns it into a 24/7 live website link.',
      },
      {
        ar: 'تشغيل أمر `npm run build` قبل الرفع يضمن خلو المشروع من الأخطاء ونجاح النشر من أول مرة.',
        en: 'Running `npm run build` locally before pushing guarantees a smooth deployment.',
      },
      {
        ar: 'اشرح للعميل كيف يسهل الموقع تصفح زبائنه ويوجه طلباتهم إلى واتساب، وتجنب الوعود التسويقية المبالغ فيها.',
        en: 'Explain how the site helps visitors and routes orders to WhatsApp, avoiding exaggerated hype.',
      },
    ],
    nextSessionNumber: '12',
    nextSessionTitle: {
      ar: 'المشروع النهائي: خطوات التنفيذ، الفحص، والتسليم',
      en: 'Final Project: Execution, Inspection & Submission',
    },
  },
  slides: [
    {
      id: 's11-slide-01',
      sessionNumber: 11,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      title: {
        ar: 'نشر الموقع على الإنترنت وعرضه للعملاء',
        en: 'Publishing Your Website Online & Presenting It to Clients',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'إزالة رهبة النشر على الإنترنت وتوضيح خطواته البسيطة.',
        en: 'Demystify publishing a website online and outline its simple steps.',
      },
      speakerNotes: {
        ar: 'اليوم هو أحد أكثر الدروس متعة؛ سيرى المتدربون مواقعهم تعمل على الإنترنت الحقيقي ويفتحونها من هواتفهم.',
        en: 'Today trainees will see their websites live on the internet and open them on their phones.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '11',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'الدرس الحادي عشر • الإطلاق الحي وعرض الأعمال',
            en: 'Lesson 11 • Live Launch & Presenting Work',
          },
          headline: {
            ar: 'كيف تحول مشروعك من ملفات على جهازك إلى رابط حي يفتحه أي شخص في العالم؟',
            en: 'How Do You Turn Local Files into a Live Link Anyone in the World Can Open?',
          },
          subheadline: {
            ar: 'رفع المشروع على GitHub و Vercel خطوة بخطوة، وتعلم طريقة عرض العمل لأصحاب المشاريع بوضوح ومصداقية.',
            en: 'Step-by-step deployment on GitHub and Vercel, plus how to present your work clearly and honestly.',
          },
          tags: ['GitHub', 'Vercel', 'رابط حي https', 'عرض العمل للعميل'],
        },
      },
    },
    {
      id: 's11-slide-02',
      sessionNumber: 11,
      slideNumber: 2,
      totalSlides: 10,
      type: 'context',
      title: {
        ar: 'لماذا يعمل الموقع على جهازك فقط حتى الآن؟',
        en: 'Why Does Your Website Only Work on Your Computer So Far?',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'توضيح الفرق بين الرابط المحلي `localhost` والرابط العالمي على الإنترنت.',
        en: 'Clarify the difference between `localhost` and a hosted public website.',
      },
      speakerNotes: {
        ar: 'شبه localhost بملف محفوظ على سطح مكتبك، و Vercel بمعرض مفتوح للجمهور على مدار الساعة.',
        en: 'Compare localhost to a file on your desktop, and Vercel to a showroom open 24/7.',
      },
      payload: {
        type: 'context',
        data: {
          industryShift: {
            ar: 'الرابط `http://localhost:3000` يعمل داخل كمبيوترك أنت فقط؛ لكي يفتح عند أي شخص في العالم نحتاج إلى رفعه على خادم سحابي متصل بالإنترنت طوال اليوم.',
            en: 'The link `http://localhost:3000` only works on your computer; hosting it on a cloud server makes it accessible 24/7.',
          },
          whyItMatters: {
            ar: 'اليوم نوفر الاستضافة مجاناً وفي دقائق عبر ربط منصة GitHub (لحفظ الكود) بمنصة Vercel (لتشغيل الموقع وإعطائه رابط `https://`).',
            en: 'Today we host for free in minutes by connecting GitHub (code storage) with Vercel (live hosting).',
          },
          realWorldProblem: {
            ar: 'بمجرد ربط Vercel بحسابك في GitHub، أي تعديل ترفعه مستقبلاً يظهر على الموقع الحي تلقائياً خلال دقيقة.',
            en: 'Once Vercel is linked to GitHub, any future update you push goes live automatically within a minute.',
          },
        },
      },
    },
    {
      id: 's11-slide-03',
      sessionNumber: 11,
      slideNumber: 3,
      totalSlides: 10,
      type: 'visual',
      title: {
        ar: 'رحلة نشر الموقع في 3 خطوات واضحة',
        en: 'The 3-Step Website Publishing Journey',
      },
      subtitle: {
        ar: 'كيف ينتقل الكود من محرر الكود في جهازك إلى رابط حي على الإنترنت؟',
        en: 'How code moves from your editor to a live internet URL:',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'توضيح العلاقة بين الجهاز و GitHub و Vercel بصرياً.',
        en: 'Visualize the connection between the local computer, GitHub, and Vercel.',
      },
      speakerNotes: {
        ar: 'اشرح المحطات الثلاث ببساطة: جهازك -> GitHub -> Vercel.',
        en: 'Walk through the 3 steps: Your Computer -> GitHub -> Vercel.',
      },
      payload: {
        type: 'visual',
        data: {
          diagramType: 'flow',
          caption: {
            ar: 'كلما عدلت شيئاً على جهازك ورفعته إلى GitHub، تقوم Vercel بتحديث الرابط الحي تلقائياً.',
            en: 'Whenever you update code on your computer and push to GitHub, Vercel updates the live URL automatically.',
          },
          nodes: [
            {
              id: 'pub-1',
              stepNumber: '01',
              title: { ar: '1. جهازك (VS Code)', en: '1. Your Computer' },
              description: { ar: 'فحص جاهزية المشروع بأمر npm run build', en: 'Verify project build with npm run build' },
            },
            {
              id: 'pub-2',
              stepNumber: '02',
              title: { ar: '2. منصة GitHub', en: '2. GitHub' },
              description: { ar: 'حفظ نسخة سحابية منظمة وآمنة من ملفات المشروع', en: 'Store a safe, organized cloud copy of project files' },
            },
            {
              id: 'pub-3',
              stepNumber: '03',
              title: { ar: '3. منصة Vercel', en: '3. Vercel' },
              description: { ar: 'تشغيل الموقع ومنحك رابطاً حياً يبدأ بـ https://', en: 'Host the site and generate a live https:// link' },
            },
          ],
        },
      },
    },
    {
      id: 's11-slide-04',
      sessionNumber: 11,
      slideNumber: 4,
      totalSlides: 10,
      type: 'demo',
      title: {
        ar: 'تطبيق مباشر: رفع المشروع على GitHub ونشره على Vercel',
        en: 'Live Demo: Pushing to GitHub & Deploying on Vercel',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'تدريب المتدرب عملياً على خطوات النشر الحي.',
        en: 'Walk trainees step by step through live deployment.',
      },
      speakerNotes: {
        ar: 'نفذ العملية أمام المتدربين مباشرة، ثم أرسل الرابط الحي في محادثة الزوم ليفتحوه من هواتفهم.',
        en: 'Deploy live on screen and share the link in Zoom chat so trainees can open it on their phones.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'نشر مشروع كامل على GitHub و Vercel والحصول على رابط حي في 10 دقائق.',
            en: 'Deploy a complete project on GitHub and Vercel for a live URL in 10 minutes.',
          },
          instructorSteps: [
            {
              ar: '1. شغّل أمر `npm run build` في الطرفية (Terminal) للتأكد من خلو المشروع من أي أخطاء برمجية.',
              en: '1. Run `npm run build` in the terminal to confirm zero build errors.',
            },
            {
              ar: '2. ارفع المشروع إلى حسابك في GitHub (عبر أوامر `git add .` ثم `git commit -m "Initial launch"` ثم `git push`).',
              en: '2. Push the project to your GitHub account.',
            },
            {
              ar: '3. افتح موقع `vercel.com` وسجّل الدخول بحساب GitHub الخاص بك، ثم اضغط `Add New Project`.',
              en: '3. Open `vercel.com`, sign in with GitHub, and click `Add New Project`.',
            },
            {
              ar: '4. اختر مستودع مشروعك واضغط `Deploy`، وانتظر دقيقة واحدة حتى يظهر رابط موقعك الحي.',
              en: '4. Select your repository, click `Deploy`, and wait one minute for your live URL.',
            },
          ],
          expectedOutput: {
            ar: 'امتلاك رابط حي يعمل على الإنترنت مع شهادة أمان https:// ويفتح على الهواتف فوراً.',
            en: 'A working public https:// URL that opens immediately on phones.',
          },
        },
      },
    },
    {
      id: 's11-slide-05',
      sessionNumber: 11,
      slideNumber: 5,
      totalSlides: 10,
      type: 'concept',
      title: {
        ar: 'كيف تعرض عملك للعملاء بطريقة مقنعة وصادقة؟',
        en: 'How Do You Present Your Work Convincingly and Honestly to Clients?',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'تعليم المتدرب كيفية تقديم أعماله بلغة الفائدة الواضحة بعيداً عن التعقيد والمبالغة.',
        en: 'Teach trainees how to present their projects using clear client benefits without jargon or hype.',
      },
      speakerNotes: {
        ar: 'هذا المبدأ مهم جداً: العملاء يقدرون الشخص الصادق الذي يفهم احتياجهم التجاري ويشرحه ببساطة.',
        en: 'Clients value honest creators who understand their business needs and explain solutions simply.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'عرض القيمة بوضوح', en: 'Presenting Value Clearly' },
          principle: {
            ar: 'صاحب المشروع لا يشتري مصطلحات برمجية؛ هو يشتري حلاً يسهل عمله ويجذب زبائنه',
            en: 'Business Owners Do Not Buy Code Jargon; They Buy Solutions That Help Their Customers',
          },
          explanation: {
            ar: 'عندما تعرض موقعاً بنيته في معرض أعمالك أو في رسالة لعميل، اتبع هذه القواعد الثلاث:',
            en: 'When showcasing a website in your portfolio or pitching a client, follow these three rules:',
          },
          bulletPoints: [
            {
              ar: '1. تحدث بلغة الفائدة لا بلغة الكود: بدلاً من قول "بنيت الموقع بـ React و Props"، قل: "صممت موقعاً يفتح بسرعة على الهاتف ويعرض القائمة والأسعار بوضوح ويوجه الطلبات مباشرة إلى واتساب."',
              en: '1. Speak the language of benefit, not code: explain how the site loads fast on phones, displays prices clearly, and routes orders to WhatsApp.',
            },
            {
              ar: '2. اشرح المشروع في 3 نقاط (المشكلة، الحل، الفائدة): ماذا كان ينقص المشروع؟ كيف نظم الموقع العرض؟ وكيف سهّل على الزائر اتخاذ القرار؟',
              en: '2. Present the project in 3 points (Problem, Solution, Benefit): what was missing, how the site solved it, and how it helps visitors.',
            },
            {
              ar: '3. تجنب الوعود التسويقية المبالغ فيها: كن صادقاً وواقعياً فيما يقدمه الموقع؛ المصداقية والوضوح هما أساس بناء الثقة.',
              en: '3. Avoid exaggerated marketing claims: be honest and realistic about what the website delivers.',
            },
          ],
          architecturalRule: {
            ar: 'أرسل للعميل دائماً رابطاً حياً يجربه بنفسه على هاتفه بدلاً من الاكتفاء بصور ثابتة.',
            en: 'Always send clients a live link they can tap and test on their own phone instead of static images alone.',
          },
        },
      },
    },
    {
      id: 's11-slide-06',
      sessionNumber: 11,
      slideNumber: 6,
      totalSlides: 10,
      type: 'comparison',
      title: {
        ar: 'مقارنة: عرض يركز على الفائدة مقابل عرض تقني معقد أو مبالغ فيه',
        en: 'Comparison: Benefit-Focused Presentation vs. Jargon or Hype',
      },
      estimatedMinutes: 10,
      teachingGoal: {
        ar: 'تدريب المتدرب على صياغة وصف أعماله بأسلوب إنساني ومقنع.',
        en: 'Train learners to write human, convincing project descriptions.',
      },
      speakerNotes: {
        ar: 'قارن بين الصياغتين؛ الصياغة اليمنى تجعل صاحب المقهى أو العيادة يهتم فوراً ويرغب في تجربة الرابط.',
        en: 'Compare both styles; the benefit-focused style immediately resonates with business owners.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'عرض واضح يركز على فائدة العميل (مقنع وصادق)',
            en: 'Clear Benefit-Focused Presentation (Convincing & Honest)',
          },
          rightHeader: {
            ar: 'عرض تقني معقد أو مبالغ فيه (ينفّر العميل)',
            en: 'Jargon-Heavy or Exaggerated Pitch (Turns Clients Away)',
          },
          dimensions: [
            {
              dimension: { ar: 'كيف تصف الموقع؟', en: 'How You Describe the Site' },
              left: {
                ar: '«موقع لمقهى مختص يتيح للزائر تصفح المشروبات حسب النوع والطلب عبر واتساب بضغطة واحدة.»',
                en: '"A specialty café website where visitors filter drinks by category and order via WhatsApp in one tap."',
              },
              right: {
                ar: '«تطبيق مبني بـ React State و Array Filter مع Tailwind Grid.»',
                en: '"An app built with React State, Array Filter, and Tailwind Grid."',
              },
            },
            {
              dimension: { ar: 'طريقة استعراض العمل', en: 'How You Show the Work' },
              left: {
                ar: 'رابط حي يفتحه العميل على هاتفه ويجرب التصفح والضغط بنفسه',
                en: 'A live link the client opens on their phone to test browsing and tapping firsthand',
              },
              right: {
                ar: 'لقطة شاشة صغيرة للكود أو كلام نظري بدون رابط يعمل',
                en: 'A small screenshot of code or abstract talk with no working link',
              },
            },
            {
              dimension: { ar: 'نبرة الحديث والوعود', en: 'Tone & Promises' },
              left: {
                ar: 'يشرح بوضوح كيف يرتب الموقع العرض ويوفر وقت الرد على الأسئلة المتكررة',
                en: 'Clearly explains how the site organizes offerings and saves time answering repeated questions',
              },
              right: {
                ar: 'عبارات مبالغ فيها مثل «موقع خارق سيضاعف أرباحك 10 مرات فوراً»',
                en: 'Exaggerated claims like "a revolutionary site that will 10x your profits overnight"',
              },
            },
          ],
          balancedVerdict: {
            ar: 'الوضوح والصدق مع نموذج حي يعمل أمام عين العميل هو أقوى أسلوب للإقناع.',
            en: 'Clarity and honesty paired with a working live demo is the strongest way to convince any client.',
          },
        },
      },
    },
    {
      id: 's11-slide-07',
      sessionNumber: 11,
      slideNumber: 7,
      totalSlides: 10,
      type: 'question',
      title: {
        ar: 'سؤال للنقاش: ماذا تفعل إذا ظهر خطأ أثناء تشغيل npm run build؟',
        en: 'Discussion Question: What If an Error Appears During `npm run build`?',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'إزالة الخوف من رسائل خطأ البناء وتوضيح خطوة حلها مع المساعد الذكي.',
        en: 'Remove fear of build errors and show how to resolve them calmly with AI.',
      },
      speakerNotes: {
        ar: 'طمئن المتدربين أن ظهور خطأ أثناء البناء أمر طبيعي جداً وحله مع المساعد الذكي يستغرق دقيقة واحدة.',
        en: 'Reassure trainees that build errors are normal and take a minute to fix with AI.',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'عندما شغّلت أمر `npm run build` قبل النشر، ظهرت رسالة خطأ تشير إلى ملف معين ورقم سطر. ما هي الخطوة الصحيحة لإصلاحها؟',
            en: 'When running `npm run build` before deployment, an error message points to a specific file and line number. What is the right step to fix it?',
          },
          contextHint: {
            ar: 'تذكر كيف يتعامل المساعد الذكي في المحرر مع رسائل الخطأ الواضحة.',
            en: 'Remember how the editor AI assistant handles exact error messages.',
          },
          promptToClass: {
            ar: 'ننسخ رسالة الخطأ كما هي مع اسم الملف ونرسلها للمساعد الذكي قائلين: «ظهر هذا الخطأ أثناء تشغيل npm run build، افحص الملف المحدد وأصلح السبب دون تغيير تصميم القسم»، ثم نعيد تشغيل `npm run build` للتأكد.',
            en: 'Copy the exact error message and file name to the AI assistant: "This error appeared during npm run build; inspect the file and fix the cause without changing the section design," then re-run `npm run build`.',
          },
        },
      },
    },
    {
      id: 's11-slide-08',
      sessionNumber: 11,
      slideNumber: 8,
      totalSlides: 10,
      type: 'challenge',
      title: {
        ar: 'نشاط عملي (20 دقيقة): انشر موقعك واكتب ملخص عرضه',
        en: 'Hands-On Activity (20 Mins): Publish Your Site & Write Its Summary',
      },
      estimatedMinutes: 20,
      teachingGoal: {
        ar: 'نشر الموقع فعلياً على Vercel وصياغة تقديم واضح له.',
        en: 'Deploy the site live on Vercel and write a clear 3-sentence summary.',
      },
      speakerNotes: {
        ar: 'ساعد كل متدرب يواجه أي عقبة في ربط GitHub أو Vercel حتى ينجح الجميع في نشر مواقعهم.',
        en: 'Assist every trainee with GitHub and Vercel connection so everyone gets a live URL.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'إطلاق موقعك الحي على Vercel وكتابة بطاقة تعريفه للعميل',
            en: 'Launch Your Live Website on Vercel & Write Your Client Summary',
          },
          durationMinutes: 20,
          objective: {
            ar: 'رفع مشروعك إلى GitHub وربطه بمنصة Vercel للحصول على رابط حي وكتابة ملخص واضح للمشروع.',
            en: 'Push your project to GitHub, deploy on Vercel for a live URL, and write a clear project summary.',
          },
          instructions: [
            {
              ar: '1. شغّل `npm run build` في مشروعك وتأكد من نجاح البناء بدون أخطاء.',
              en: '1. Run `npm run build` in your project and verify it succeeds with zero errors.',
            },
            {
              ar: '2. ارفع مشروعك إلى GitHub وانشره على Vercel للحصول على الرابط الحي (`https://...`).',
              en: '2. Push your project to GitHub and deploy it on Vercel to get your live `https://` URL.',
            },
            {
              ar: '3. افتح الرابط الحي من هاتفك المحمول وتأكد أن الموقع يفتح ويعمل بنجاح.',
              en: '3. Open the live URL on your mobile phone and confirm everything works.',
            },
            {
              ar: '4. اكتب فقرة قصيرة من 3 جمل تصف مشروعك (المشكلة، الحل، الفائدة) كما ستقدمها لعميل حقيقي.',
              en: '4. Write a short 3-sentence summary of your project (Problem, Solution, Benefit).',
            },
          ],
          deliverable: {
            ar: 'مشاركة الرابط الحي لموقعك على Vercel مع فقرة تعريف المشروع في محادثة الجلسة.',
            en: 'Share your live Vercel URL and 3-sentence project summary in the session chat.',
          },
        },
      },
    },
    {
      id: 's11-slide-09',
      sessionNumber: 11,
      slideNumber: 9,
      totalSlides: 10,
      type: 'project',
      title: {
        ar: 'خطوة المشروع العملي في هذا الدرس',
        en: 'Practical Project Milestone in This Lesson',
      },
      estimatedMinutes: 3,
      teachingGoal: {
        ar: 'تثبيت إنجاز النشر الحي وتجهيز المتدرب للدرس الختامي.',
        en: 'Confirm live deployment milestone and prepare for the final showcase.',
      },
      speakerNotes: {
        ar: 'بارك للمتدربين؛ لقد انتقلوا من الصفر إلى امتلاك موقع حي منشور على الإنترنت.',
        en: 'Congratulate trainees on taking their project from zero to a live published website.',
      },
      payload: {
        type: 'project',
        data: {
          phaseName: {
            ar: 'المرحلة الرابعة • الإطلاق وعرض الأعمال',
            en: 'Phase 4 • Launch & Presenting Work',
          },
          stepNumber: '11',
          whatWeBuildNow: {
            ar: 'موقع منشور برابط حي على Vercel مع ملخص عرض واضح',
            en: 'Live Published Website on Vercel with a Clear Project Summary',
          },
          deliverables: [
            { ar: 'رابط حي يعمل عبر https:// على منصة Vercel', en: 'Working https:// live link on Vercel' },
            { ar: 'مستودع GitHub منظم يحتوي على أحدث نسخة من الكود', en: 'Organized GitHub repository with latest code' },
            { ar: 'ملخص واضح للمشروع من 3 جمل (المشكلة، الحل، الفائدة)', en: 'Clear 3-sentence project summary (Problem, Solution, Benefit)' },
          ],
          connectionToFinalProject: {
            ar: 'أصبح مشروعك الآن متاحاً على الإنترنت لأي زائر أو عميل، وبقي لنا في الدرس القادم المراجعة النهائية وعرض المشاريع وتسليمها.',
            en: 'Your project is now live online for any visitor or client, ready for the final showcase in Lesson 12.',
          },
        },
      },
    },
    {
      id: 's11-slide-10',
      sessionNumber: 11,
      slideNumber: 10,
      totalSlides: 10,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الدرس الحادي عشر',
        en: 'Lesson 11 Takeaways',
      },
      estimatedMinutes: 2,
      teachingGoal: {
        ar: 'تثبيت خطوات النشر وأسلوب عرض الأعمال.',
        en: 'Reinforce deployment workflow and honest client presentation.',
      },
      speakerNotes: {
        ar: 'ذكّر المتدربين بتجهيز روابطهم النهائية للدرس القادم حيث سيعرض كل متدرب مشروعه.',
        en: 'Remind trainees to have their live links ready for the Lesson 12 final showcase.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: { ar: 'GitHub يحفظ الكود و Vercel تشغل الموقع', en: 'GitHub Stores Code & Vercel Hosts the Site' },
              description: {
                ar: 'هذا الثنائي المجاني يمنحك رابطاً حياً يتحدث تلقائياً كلما رفعت تعديلاً جديداً.',
                en: 'This free pair gives you a live URL that updates automatically on every push.',
              },
            },
            {
              number: '02',
              title: { ar: 'افحص البناء قبل الرفع دائماً', en: 'Always Run `npm run build` Before Pushing' },
              description: {
                ar: 'نجاح البناء على جهازك يضمن أن الموقع سيعمل على الإنترنت بدون مفاجآت.',
                en: 'A clean local build ensures your site deploys online without surprises.',
              },
            },
            {
              number: '03',
              title: { ar: 'اعرض الفائدة العملية بوضوح وصدق', en: 'Present Practical Benefits Clearly & Honestly' },
              description: {
                ar: 'اشرح للعميل كيف يخدم الموقع زواره ويوجه طلباتهم إلى واتساب، وأرسل له الرابط ليجربه بنفسه.',
                en: 'Show clients how the site helps visitors and routes orders to WhatsApp with a live link.',
              },
            },
          ],
          coreMotto: {
            ar: 'الرابط الحي الذي يعمل على هاتف العميل أبلغ من ألف كلمة شرح نظري.',
            en: 'A working live link on a client’s phone speaks louder than a thousand words of theory.',
          },
        },
      },
    },
  ],
};
