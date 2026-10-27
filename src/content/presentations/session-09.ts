import { PresentationSession } from '@/types';

export const SESSION_09: PresentationSession = {
  id: 'session-09',
  number: 9,
  slug: 'session-09',
  title: {
    ar: 'ربط الصفحات وتسريع الموقع وتجهيزه لمحركات البحث (Next.js & SEO)',
    en: 'Connecting Pages, Speeding Up the Site & Search Optimization (Next.js & SEO)',
  },
  subtitle: {
    ar: 'كيف يفتح موقعك بسرعة على الهاتف، وكيف يظهر بعنوان وصورة جذابة عند البحث عنه في Google أو مشاركة رابطه في واتساب؟',
    en: 'How your site loads fast on phones and shows a great title and preview card on Google and WhatsApp',
  },
  durationMinutes: 90,
  goal: {
    ar: 'تمكين المتدرب من فهم كيف يربط Next.js صفحات الموقع بسرعة، وإعداد بطاقة تعريف الموقع (العنوان، الوصف، وصورة المشاركة في واتساب وGoogle) لتحسين ظهوره في نتائج البحث.',
    en: 'Understand how Next.js connects pages fast and configure site metadata (title, description, WhatsApp/Google preview card).',
  },
  prerequisites: [
    {
      ar: 'إكمال الجلسة 08 وتنظيم أجزاء الموقع وبياناته',
      en: 'Completion of Session 08 with organized components and data',
    },
  ],
  objectives: [
    {
      ar: 'فهم دور Next.js ببساطة: تنظيم صفحات الموقع وجعلها تفتح بسرعة كبيرة',
      en: 'Understand Next.js simply: organizing website pages and making them load fast',
    },
    {
      ar: 'معرفة معنى تحسين محركات البحث (SEO): كيف يجد الزبون موقعك عندما يبحث في Google؟',
      en: 'Understand SEO simply: how customers find your website when searching on Google',
    },
    {
      ar: 'إعداد بطاقة المشاركة (Open Graph) ليظهر الموقع بصورة وعنوان أنيق عند إرسال رابطه في واتساب',
      en: 'Configure Open Graph metadata so your link shows a clean title and banner when shared on WhatsApp',
    },
    {
      ar: 'تحسين حجم الصور والعناوين الرئيسية لضمان سرعة فتح الصفحة على الهاتف',
      en: 'Optimize images and headings to ensure fast loading on mobile phones',
    },
  ],
  timeline: [
    {
      timeRange: '00:00 – 00:15',
      durationMinutes: 15,
      label: { ar: 'كيف يرى الزائر موقعك في Google وفي محادثات واتساب قبل أن يفتحه؟', en: 'How visitors see your site on Google & WhatsApp before opening it' },
      type: 'context',
    },
    {
      timeRange: '00:15 – 00:35',
      durationMinutes: 20,
      label: { ar: 'العناصر الثلاثة لظهور احترافي في البحث والمشاركة (العنوان، الوصف، الصورة)', en: 'The 3 elements of search & share previews (Title, Description, Image)' },
      type: 'concept',
    },
    {
      timeRange: '00:35 – 00:55',
      durationMinutes: 20,
      label: { ar: 'تطبيق عملي: إعداد بطاقة ظهور مقهى القهوة المختصة في Google وواتساب', en: 'Live Demo: Setting up Google & WhatsApp preview metadata for the Café' },
      type: 'demo',
    },
    {
      timeRange: '00:55 – 01:20',
      durationMinutes: 25,
      label: { ar: 'نشاط المتدرب: كتابة وضبط عنوان ووصف وصورة مشاركة موقعه', en: 'Trainee Activity: Write & configure your website search and share card' },
      type: 'practice',
    },
    {
      timeRange: '01:20 – 01:30',
      durationMinutes: 10,
      label: { ar: 'مراجعة بطاقات مشاركة المتدربين وخلاصة الجلسة التاسعة', en: 'Review trainee share cards & Session 09 summary' },
      type: 'takeaway',
    },
  ],
  projectMilestone: {
    ar: 'إعداد بيانات البحث والمشاركة (SEO & WhatsApp Preview) وتحسين سرعة الصور في المشروع.',
    en: 'Configure SEO and WhatsApp link preview metadata and optimize image loading in the project.',
  },
  aiRole: {
    ar: 'مساعد يضبط إعدادات الصفحة (Metadata) ويقترح كلمات واضحة يبحث عنها العملاء في Google.',
    en: 'Assistant configuring page metadata and suggesting clear keywords customers search for on Google.',
  },
  marketConnection: {
    ar: 'عندما يرسل صاحب المشروع رابط موقعه لعميل في واتساب ويظهر بعنوان وصورة احترافية، تتضاعف ثقة العميل فورًا.',
    en: 'When a business owner sends their link on WhatsApp and a rich preview card appears, client trust doubles immediately.',
  },
  startScreen: {
    badge: 'الجلسة 09 من 12 • بناء الموقع وتحسينه (5)',
    headline: {
      ar: 'ربط الصفحات وتسريع الموقع وتجهيزه لمحركات البحث',
      en: 'Connecting Pages, Speeding Up the Site & Search Optimization',
    },
    description: {
      ar: 'نتعلم اليوم كيف نجعل موقعنا سريع الفتح، وكيف نتحكم في العنوان والوصف والصورة التي تظهر عندما يبحث أحد عن موقعنا في Google أو يشارك رابطه في واتساب.',
      en: 'Learn how to make your site load fast and control the title, description, and image shown on Google and WhatsApp.',
    },
    sessionGoal: {
      ar: 'ضبط عنوان ووصف موقعك لمحرك بحث Google وتجهيز بطاقة مشاركته في واتساب.',
      en: 'Configure your website Google search title/description and WhatsApp share preview card.',
    },
  },
  endScreen: {
    headline: {
      ar: 'رائع! أصبح موقعك سريعًا ويظهر ببطاقة احترافية في Google وواتساب',
      en: 'Awesome! Your Site Loads Fast and Shows a Pro Card on Google & WhatsApp',
    },
    keyRecap: [
      {
        ar: 'بيانات تعريف الصفحة (Metadata) هي بطاقة الهوية التي تقرؤها Google وتطبيقات المحادثة مثل واتساب.',
        en: 'Page metadata is the ID card read by Google and chat apps like WhatsApp.',
      },
      {
        ar: 'العنوان الواضح الذي يذكر نوع الخدمة والمدينة يساعد العملاء على إيجاد موقعك في البحث.',
        en: 'A clear title mentioning your service and city helps customers find you on Google.',
      },
      {
        ar: 'ضغط الصور واستخدام الأحجام المناسبة يجعل الموقع يفتح في ثوانٍ حتى مع إنترنت الهاتف المتوسط.',
        en: 'Optimizing images makes the site open in seconds even on mobile data.',
      },
    ],
    nextSessionNumber: '10',
    nextSessionTitle: {
      ar: 'فحص الموقع واختباره الشامل قبل الإطلاق',
      en: 'Comprehensive Website Testing & Pre-Launch Inspection',
    },
  },
  slides: [
    {
      id: 's09-slide-01',
      sessionNumber: 9,
      slideNumber: 1,
      totalSlides: 10,
      type: 'title',
      visualType: 'nextjs-seo-preview',
      realWorldExample: {
        ar: 'عندما ترسل رابط موقع لصديقك في واتساب، أحيانًا يظهر كرابط أزرق جاف، وأحيانًا يظهر كبطاقة جميلة فيها صورة وعنوان ووصف يشجع على الضغط!',
        en: 'When you send a link on WhatsApp, sometimes it looks like a plain URL, and sometimes it shows a rich card with a photo, title, and description!',
      },
      title: {
        ar: 'سرعة الموقع وظهوره في Google وواتساب',
        en: 'Website Speed & Appearance on Google and WhatsApp',
      },
      estimatedMinutes: 5,
      teachingGoal: {
        ar: 'توضيح مفهوم SEO و Open Graph و Next.js من خلال تجربة مشاركة الرابط في واتساب والبحث في Google.',
        en: 'Explain SEO, Open Graph, and Next.js through the familiar experience of WhatsApp link previews and Google search.',
      },
      speakerNotes: {
        ar: 'نفّذ: أشر إلى الرسم التوضيحي على اليسار (معاينة بحث Google ومعاينة بطاقة واتساب). كل متدرب رأى هاتين البطاقتين آلاف المرات في حياته اليومية، واليوم سيتعلم كيف يصنعهما لموقعه!\nاسأل: عندما يصلك رابط بدون عنوان ولا صورة في واتساب، هل تتحمس للضغط عليه؟\nتحقق: البطاقة الواضحة تمنح الموقع مصداقية فورية قبل حتى أن يفتحه الزائر.',
        en: 'Point to the Google search and WhatsApp share card previews in the illustration.',
      },
      payload: {
        type: 'title',
        data: {
          sessionNumber: '09',
          totalSessions: '12',
          durationMinutes: 90,
          kicker: {
            ar: 'المرحلة الرابعة • بناء الموقع وتحسينه (الجزء الخامس)',
            en: 'Phase 4 • Building & Improving the Website (Part 5)',
          },
          headline: {
            ar: 'كيف يظهر موقعك باحترافية في بحث Google ومحادثات واتساب؟',
            en: 'How Does Your Website Appear Professionally on Google & WhatsApp?',
          },
          subheadline: {
            ar: 'نتعرف على دور Next.js في تسريع الموقع، وكيف نضبط عنوان الموقع ووصفه وصورته الترحيبية عند مشاركة الرابط.',
            en: 'Learn how Next.js speeds up your site and how to set your title, description, and preview image when sharing links.',
          },
          tags: ['ظهور في Google', 'بطاقة مشاركة واتساب', 'سرعة التصفح', 'Next.js & SEO'],
        },
      },
    },
    {
      id: 's09-slide-02',
      sessionNumber: 9,
      slideNumber: 2,
      totalSlides: 10,
      type: 'concept',
      visualType: 'nextjs-seo-preview',
      realWorldExample: {
        ar: 'بطاقة تعريف الموقع (Metadata) تشبه الغلاف الخارجي للكتاب: يقرؤه القارئ في المكتبة ليعرف موضوع الكتاب قبل أن يفتحه.',
        en: 'Website metadata is like a book cover: people read the title and summary on the cover before opening the book.',
      },
      title: {
        ar: 'ما هي «بطاقة تعريف الموقع» (Metadata) ولماذا تهمك؟',
        en: 'What Is Website Metadata and Why Does It Matter?',
      },
      estimatedMinutes: 9,
      teachingGoal: {
        ar: 'تبسيط مفهوم `Metadata` و `SEO` إلى 3 عناصر واضحة (العنوان، الوصف، وصورة المشاركة).',
        en: 'Simplify Metadata and SEO into 3 clear items: Title, Description, and Share Image.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح العناصر الثلاثة لبطاقة تعريف الموقع. في Next.js نضع هذه الأسطر الثلاثة البسيطة في ملف الإعداد الأساسي (`layout.tsx`)، فيقرؤها محرك بحث Google وتطبيق واتساب تلقائيًا.\nاسأل: ماذا يجب أن نكتب في عنوان الموقع ليظهر لمن يبحث في Google؟ (اسم المشروع + الخدمة الأساسية).\nتحقق: تأكد أن الجميع يفهم أن هذه البيانات تظهر في شريط عنوان المتصفح وفي Google وفي واتساب.',
        en: 'Explain the 3 metadata fields: Page Title, Short Description, and Social Share Image.',
      },
      payload: {
        type: 'concept',
        data: {
          tagline: { ar: 'غلاف موقعك أمام العالم', en: 'Your Website Cover Card' },
          principle: {
            ar: '3 معلومات بسيطة تحدد كيف يرى الناس رابط موقعك',
            en: '3 Simple Details Decide How People See Your Website Link',
          },
          explanation: {
            ar: 'قبل أن يدخل الزائر إلى موقعك، يرى بطاقة صغيرة تمثل الموقع في نتائج بحث Google أو داخل محادثة واتساب تتكون من:',
            en: 'Before visiting your site, people see a preview card on Google or WhatsApp made of:',
          },
          bulletPoints: [
            {
              ar: '1. عنوان الصفحة (Title): يوضح اسم المشروع وماذا يقدم في 5 إلى 8 كلمات.',
              en: '1. Page Title: States the project name and main service in 5–8 words.',
            },
            {
              ar: '2. الوصف المختصر (Description): جملة واحدة جذابة تشرح الفائدة وتشجع الزائر على الدخول.',
              en: '2. Short Description: One clear sentence explaining the benefit to visitors.',
            },
            {
              ar: '3. صورة المشاركة (Open Graph Image): صورة أنيقة تظهر تلقائيًا عند إرسال الرابط في واتساب أو شبكات التواصل.',
              en: '3. Share Image (Open Graph): A clean banner shown automatically when sharing the link on WhatsApp.',
            },
          ],
          architecturalRule: {
            ar: 'لا تطلق موقعًا أبدًا بعنوان افتراضي مثل "Create Next App"؛ اكتب دائمًا عنوان موقعك الحقيقي.',
            en: 'Never launch a site with a default title like "Create Next App"—always set your real title.',
          },
        },
      },
    },
    {
      id: 's09-slide-03',
      sessionNumber: 9,
      slideNumber: 3,
      totalSlides: 10,
      type: 'comparison',
      visualType: 'nextjs-seo-preview',
      title: {
        ar: 'مقارنة: رابط مهمل الإعدادات مقابل رابط مضبوط الهوية',
        en: 'Comparison: Unconfigured Link vs. Properly Configured Link',
      },
      subtitle: {
        ar: 'كيف يؤثر إعداد العنوان والوصف على انطباع العميل الأول؟',
        en: 'How title and description settings shape a client’s first impression',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'إظهار الفرق البصري بين رابط يترك الإعدادات الافتراضية ورابط مضبوط بعناية.',
        en: 'Show the contrast between default unconfigured metadata and a polished preview card.',
      },
      speakerNotes: {
        ar: 'نفّذ: قارن بين العمودين. كثير من المطورين المبتدئين يبنون صفحة جميلة جدًا، لكن عندما يرسلون رابطها للعميل في واتساب يظهر العنوان `localhost` أو `Create Next App` بدون وصف! هذا يضعف الانطباع الاحترافي فورًا.\nاسأل: أي الرابطين سيثق به العميل ويضغط عليه فورًا؟\nتحقق: ضبط هذه الإعدادات لا يستغرق سوى دقيقتين مع الذكاء الاصطناعي.',
        en: 'Compare a link showing "Create Next App" with a branded Arabic preview card.',
      },
      payload: {
        type: 'comparison',
        data: {
          leftHeader: {
            ar: 'رابط مضبوط الهوية (يثير الثقة والاحترافية)',
            en: 'Configured Link Preview (Builds Instant Trust)',
          },
          rightHeader: {
            ar: 'رابط بالإعدادات الافتراضية المنسية (مربك للعميل)',
            en: 'Forgotten Default Settings (Confusing)',
          },
          dimensions: [
            {
              dimension: { ar: 'العنوان الظاهر في واتساب وGoogle', en: 'Title on WhatsApp & Google' },
              left: {
                ar: '«مقهى القهوة المختصة | قائمة المشروبات والطلب السريع»',
                en: '"Specialty Roastery Café | Menu & Quick WhatsApp Ordering"',
              },
              right: {
                ar: 'عبارات تقنية مبهمة مثل "Create Next App" أو "Home Page"',
                en: 'Generic tech placeholders like "Create Next App" or "Untitled"',
              },
            },
            {
              dimension: { ar: 'الوصف تحت العنوان', en: 'Description Below Title' },
              left: {
                ar: '«تصفح قائمة القهوة المختصة والحلويات الطازجة واطلب مباشرة عبر واتساب»',
                en: '"Browse our fresh specialty coffee menu and order directly via WhatsApp"',
              },
              right: {
                ar: 'لا يوجد وصف أو نص إنجليزي افتراضي لا علاقة له بالموقع',
                en: 'Missing description or unrelated English boilerplate text',
              },
            },
            {
              dimension: { ar: 'سرعة فتح الصور على الهاتف', en: 'Image Speed on Phones' },
              left: {
                ar: 'صور خفيفة ومضغوطة تفتح في أجزاء من الثانية',
                en: 'Optimized lightweight images that load in a split second',
              },
              right: {
                ar: 'صور خام ثقيلة جدًا تتأخر في الظهور وتبطئ الصفحة',
                en: 'Heavy raw images that load slowly and lag the screen',
              },
            },
          ],
          balancedVerdict: {
            ar: 'ضبط عنوان ووصف موقعك في دقيقتين يمنح مشروعك مظهر الشركات الكبرى عند مشاركة رابطه.',
            en: 'Setting your title and description in two minutes gives your link big-brand polish.',
          },
        },
      },
    },
    {
      id: 's09-slide-04',
      sessionNumber: 9,
      slideNumber: 4,
      totalSlides: 10,
      type: 'reveal',
      visualType: 'site-pages-map',
      title: {
        ar: 'كيف ينظم Next.js صفحات الموقع ويسرّع فتحها؟',
        en: 'How Next.js Organizes Pages and Makes Them Load Fast',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'شرح فائدة استخدام إطار Next.js للمبتدئ في 3 نقاط عملية مفهومة (تنظيم الصفحات، سرعة الفتح، وبطاقة البحث).',
        en: 'Explain why we use Next.js in 3 beginner-friendly points: page folders, fast loading, and built-in SEO.',
      },
      speakerNotes: {
        ar: 'نفّذ: اشرح للمتدربين لماذا نستخدم Next.js فوق React: لأنه يرتب الصفحات في مجلدات بسيطة، ويجهز الصفحة بسرعة فائقة قبل إرسالها للهاتف، ويوفر مكانًا جاهزًا لكتابة بيانات Google وواتساب.\nاسأل: كيف نضيف صفحة جديدة اسمها `/about` في Next.js؟\nتحقق: ننشئ مجلدًا صغيرًا اسمه `about` وبداخله ملف `page.tsx` فقط!',
        en: 'Explain the 3 benefits of Next.js: folder-based pages, fast server preparation, and easy metadata.',
      },
      payload: {
        type: 'reveal',
        data: {
          premise: {
            ar: 'يقدم لنا Next.js ثلاث خدمات رائعة تجعل موقعنا سريعًا ومنظمًا:',
            en: 'Next.js gives us three practical benefits that keep our website fast and organized:',
          },
          steps: [
            {
              number: '01',
              title: { ar: 'تنظيم الصفحات بالمجلدات البسيطة', en: '1. Simple Folder-Based Pages' },
              description: {
                ar: 'الصفحة الرئيسية في `app/page.tsx`، وأي صفحة جديدة هي مجرد مجلد جديد باسم الرابط.',
                en: 'The homepage lives in `app/page.tsx`, and any new page is just a folder with the route name.',
              },
            },
            {
              number: '02',
              title: { ar: 'تجهيز الصفحة بسرعة فائقة للزائر', en: '2. Ultra-Fast Page Loading' },
              description: {
                ar: 'يرسل النصوص والعناوين جاهزة للمتصفح فورًا فلا يرى الزائر شاشة بيضاء فارغة.',
                en: 'Sends headlines and text ready to the browser immediately with zero blank-screen wait.',
              },
            },
            {
              number: '03',
              title: { ar: 'إعداد مدمج لبيانات Google وواتساب', en: '3. Built-in Google & WhatsApp Metadata' },
              description: {
                ar: 'يحتوي على قسم جاهز (`metadata`) نكتب فيه عنوان الموقع ووصفه وصورته فيظهر في كل مكان.',
                en: 'Includes a built-in `metadata` block where we set our site title, description, and preview card.',
              },
            },
          ],
        },
      },
    },
    {
      id: 's09-slide-05',
      sessionNumber: 9,
      slideNumber: 5,
      totalSlides: 10,
      type: 'code',
      visualType: 'nextjs-seo-preview',
      title: {
        ar: 'كيف تبدو بطاقة تعريف الموقع في الكود؟ (6 أسطر واضحة)',
        en: 'What Does Website Metadata Look Like in Code? (6 Clear Lines)',
      },
      estimatedMinutes: 8,
      teachingGoal: {
        ar: 'عرض كود `metadata` البسيط جدًا في Next.js ليرى المتدرب بنفسه سهولة قراءته وتعديله.',
        en: 'Show the simple 6-line Next.js metadata block so trainees can read and edit it confidently.',
      },
      speakerNotes: {
        ar: 'نفّذ: اعرض الأسطر الستة أمام المتدربين. انظروا كم هي مباشرة: `title` للعنوان، و`description` للوصف، و`openGraph` لبطاقة المشاركة في واتساب!\nاسأل: لو أردت تغيير الوصف الذي يظهر في واتساب، أي سطر ستعدل؟\nتحقق: سطر `description` الواضح باللغة العربية!',
        en: 'Walk through `title`, `description`, and `openGraph` in the 6-line snippet.',
      },
      payload: {
        type: 'code',
        data: {
          language: 'Next.js Metadata (layout.tsx)',
          codeSnippet: `export const metadata = {
  title: 'مقهى القهوة المختصة | قائمة المشروبات والطلب السريع',
  description: 'تصفح قائمة القهوة المختصة والحلويات الطازجة واطلب مباشرة عبر واتساب.',
  openGraph: {
    title: 'مقهى القهوة المختصة — اطلب قهوتك الآن',
    description: 'قهوة محمصة طازجة يومياً مع طلب سريع عبر واتساب.',
  },
};`,
          what: {
            ar: 'إعداد بطاقة تعريف الموقع التي تحدد العنوان والوصف في بحث Google ومحادثات واتساب.',
            en: 'The metadata block setting the title and description for Google search and WhatsApp shares.',
          },
          why: {
            ar: 'لأنها تجعل رابط موقعك يظهر كبطاقة تعريف احترافية ومقنعة في كل مرة تشاركه فيها.',
            en: 'It makes your website link appear as a professional, trustworthy preview card every time it is shared.',
          },
          when: {
            ar: 'نضعها في الملف الرئيسي للموقع (`src/app/layout.tsx`) قبل نشر الموقع.',
            en: 'Placed in the main layout file (`src/app/layout.tsx`) before launching the website.',
          },
        },
      },
    },
    {
      id: 's09-slide-06',
      sessionNumber: 9,
      slideNumber: 6,
      totalSlides: 10,
      type: 'question',
      visualType: 'nextjs-seo-preview',
      title: {
        ar: 'سؤال تفاعلي: ما العنوان الأفضل لمحرك بحث Google؟',
        en: 'Interactive Question: Which Title Is Best for Google Search?',
      },
      estimatedMinutes: 6,
      teachingGoal: {
        ar: 'تدريب المتدرب على صياغة عنوان موقع غني بالكلمات الواضحة التي يبحث عنها الناس فعليًا.',
        en: 'Train learners to write clear titles containing the words real customers search for.',
      },
      speakerNotes: {
        ar: 'نفّذ: اطرح السؤال في شات Zoom.\nاسأل: لو كنت تبحث في Google عن عيادة أسنان، هل تكتب «الصفحة الرئيسية» أم تكتب «عيادة النور لطب وتجميل الأسنان»؟\nتحقق: العنوان الناجح يجمع بين (اسم المشروع + الخدمة الأساسية التي يبحث عنها الزبون).',
        en: 'Ask trainees which title helps customers find a business on Google.',
      },
      payload: {
        type: 'question',
        data: {
          question: {
            ar: 'أي العناوين التالية هو الأفضل لكتابته في بطاقة تعريف موقع عيادة أسنان؟',
            en: 'Which of the following titles is best for a dental clinic website metadata?',
          },
          contextHint: {
            ar: 'فكر في الكلمات التي يكتبها المريض في بحث Google وما يريد قراءته في واتساب.',
            en: 'Think about the words a patient types on Google and reads on WhatsApp.',
          },
          promptToClass: {
            ar: 'اكتب رقم الخيار الأفضل في شات Zoom 💬',
            en: 'Type the best option in Zoom chat 💬',
          },
          expectedAnswers: [
            {
              ar: '✅ الخيار الصحيح: «عيادة النور لطب الأسنان | ابتسامة صحية وحجز سريع عبر واتساب».',
              en: '✅ Best Choice: "Al-Noor Dental Clinic | Healthy Smile & Quick WhatsApp Booking".',
            },
            {
              ar: 'لأنه يوضح اسم العيادة، ونوع الخدمة، وطريقة الحجز المباشرة في سطر واحد.',
              en: 'Because it clearly states the clinic name, service type, and booking method in one line.',
            },
          ],
        },
      },
    },
    {
      id: 's09-slide-07',
      sessionNumber: 9,
      slideNumber: 7,
      totalSlides: 10,
      type: 'demo',
      visualType: 'nextjs-seo-preview',
      title: {
        ar: 'تطبيق عملي: ضبط بطاقة Google وواتساب لموقع المقهى',
        en: 'Live Demo: Setting Up Google & WhatsApp Metadata for the Café',
      },
      estimatedMinutes: 15,
      teachingGoal: {
        ar: 'تطبيق حي لإعداد `metadata` لموقع المقهى ومعاينة تغير عنوان تبويب المتصفح وبطاقة المشاركة.',
        en: 'Demonstrate setting up metadata for the café site and verifying the browser tab title.',
      },
      speakerNotes: {
        ar: 'نفّذ: أرسل البرومبت أمام المتدربين وأرهم كيف يتغير عنوان التبويب في أعلى المتصفح فورًا إلى «مقهى القهوة المختصة | قائمة المشروبات والطلب السريع».\nاسأل: هل لاحظتم كيف أصبح عنوان الموقع واضحًا في شريط المتصفح؟\nتحقق: هذا نفس العنوان الذي سيظهر عندما نرسل الرابط لأي عميل عبر واتساب.',
        en: 'Show the browser tab title and Open Graph tags updating live.',
      },
      payload: {
        type: 'demo',
        data: {
          objective: {
            ar: 'إعداد العنوان والوصف وبطاقة المشاركة في واتساب لموقع المقهى',
            en: 'Configure title, description, and WhatsApp Open Graph card for the café site',
          },
          instructorSteps: [
            {
              ar: 'نطلب من الذكاء الاصطناعي تحديث بيانات تعريف الموقع (Metadata) في الملف الرئيسي باللغة العربية.',
              en: 'Ask AI to update the Arabic Metadata in the main layout file.',
            },
            {
              ar: 'نحدد العنوان الواضح، والوصف المختصر الجذاب، وبيانات المشاركة في واتساب (Open Graph).',
              en: 'Set the clear title, concise description, and Open Graph WhatsApp share fields.',
            },
            {
              ar: 'ننظر إلى أعلى تبويب المتصفح لنتأكد من ظهور العنوان العربي الجديد بوضوح.',
              en: 'Check the top browser tab to confirm the new Arabic title appears clearly.',
            },
          ],
          promptToUse:
            'اضبط بيانات تعريف الموقع (Metadata و Open Graph) في ملف layout.tsx باللغة العربية بحيث يظهر العنوان: «مقهى القهوة المختصة | قائمة المشروبات والطلب السريع»، والوصف: «تصفح قائمة القهوة المختصة والحلويات الطازجة واطلب مباشرة عبر واتساب»، وتأكد من ضبط اتجاه الصفحة من اليمين لليسار (dir="rtl" و lang="ar").',
          expectedOutput: {
            ar: 'ظهور اسم المقهى ووصفه الاحترافي في شريط المتصفح ونتائج البحث ومشاركات واتساب.',
            en: 'The café name and description appear cleanly in browser tabs, search results, and WhatsApp shares.',
          },
        },
      },
    },
    {
      id: 's09-slide-08',
      sessionNumber: 9,
      slideNumber: 8,
      totalSlides: 10,
      type: 'challenge',
      visualType: 'nextjs-seo-preview',
      title: {
        ar: 'نشاطك العملي: اكتب واضبط بطاقة ظهور موقعك في Google وواتساب',
        en: 'Your Activity: Write & Configure Your Google and WhatsApp Card',
      },
      estimatedMinutes: 20,
      teachingGoal: {
        ar: 'تمكين كل متدرب من صياغة عنوان ووصف موقعه وتطبيقهما في مشروعه.',
        en: 'Have each trainee write and apply their own site title and description metadata.',
      },
      speakerNotes: {
        ar: 'نفّذ: شغّل المؤقت لمدة 20 دقيقة. اطلب من كل متدرب كتابة العنوان والوصف لمشروعه وتطبيقهما.\nاسأل: من يشاركنا العنوان والوصف اللذين اختارهما لموقعه في الشات؟\nتحقق: راجع عناوين المتدربين وتأكد أنها واضحة ومباشرة وخالية من المبالغات.',
        en: 'Run the 20-minute timer and review trainee metadata titles and descriptions.',
      },
      payload: {
        type: 'challenge',
        data: {
          mission: {
            ar: 'جهّز عنوان موقعك ووصفه ليظهر باحترافية عند مشاركة الرابط',
            en: 'Prepare Your Website Title and Description for Professional Link Sharing',
          },
          durationMinutes: 20,
          objective: {
            ar: 'إعداد هوية موقعك لمحرك بحث Google ومحادثات واتساب.',
            en: 'Configure your website identity for Google search and WhatsApp link previews.',
          },
          instructions: [
            {
              ar: '1. اكتب عنوان موقعك (اسم المشروع + الخدمة الأساسية في 5 إلى 8 كلمات).',
              en: '1. Write your site title (Project Name + Main Service in 5–8 words).',
            },
            {
              ar: '2. اكتب وصفًا مختصرًا في جملة واحدة يوضح فائدة الموقع ويشجع على الطلب أو التواصل.',
              en: '2. Write a 1-sentence description explaining the site benefit and action.',
            },
            {
              ar: '3. اطلب من الذكاء الاصطناعي إضافتهما في إعدادات الصفحة (Metadata & Open Graph) وتأكد من ظهورهما في تبويب المتصفح.',
              en: '3. Ask AI to add them to your page Metadata & Open Graph and verify the browser tab title.',
            },
          ],
          deliverable: {
            ar: 'شارك عنوان موقعك ووصفه في شات Zoom أو أرسلهما عبر واتساب من صفحة الجلسة.',
            en: 'Share your site title and description in Zoom chat or via WhatsApp.',
          },
        },
      },
    },
    {
      id: 's09-slide-09',
      sessionNumber: 9,
      slideNumber: 9,
      totalSlides: 10,
      type: 'project',
      visualType: 'nextjs-seo-preview',
      title: {
        ar: 'الخطوة التاسعة في مشروعك: موقع سريع ومجهز للمشاركة والبحث',
        en: 'Step 9 in Your Project: Fast Website Ready for Sharing & Search',
      },
      estimatedMinutes: 4,
      teachingGoal: {
        ar: 'تتويج ختام المرحلة الرابعة (بناء الموقع وتحسينه) والتمهيد للمرحلة الخامسة (الاختبار والإطلاق).',
        en: 'Celebrate completing Phase 4 (Building & Improving) and preview Phase 5 (Testing & Pre-Launch).',
      },
      speakerNotes: {
        ar: 'نفّذ: هنئ المتدربين بإتمام المرحلة الرابعة بالكامل! موقعهم الآن مقسم، مبني، متجاوب مع الهاتف، تفاعلي، ومجهز لمحركات البحث وواتساب.\nاسأل: ماذا نفعل قبل أن ننشر هذا الموقع للناس والعملاء؟\nتحقق: ننتقل في الجلسة العاشرة إلى المرحلة الخامسة: الفحص الشامل والاختبار قبل الإطلاق!',
        en: 'Congratulate trainees on completing Phase 4 and introduce Phase 5 (Testing & Launch).',
      },
      payload: {
        type: 'project',
        data: {
          stepNumber: '09',
          phaseName: {
            ar: 'المرحلة الرابعة: تسريع الموقع وتجهيز بطاقة البحث والمشاركة',
            en: 'Phase 4: Speed & Search/Share Preview Setup',
          },
          whatWeBuildNow: {
            ar: 'بطاقة تعريف الموقع الكاملة (SEO & WhatsApp Open Graph) + ضبط اتجاه اللغة',
            en: 'Complete SEO & WhatsApp Open Graph Card + RTL Language Configuration',
          },
          deliverables: [
            {
              ar: 'عنوان موقع واضح يظهر في شريط المتصفح ونتائج بحث Google',
              en: 'Clear site title visible in browser tabs and Google search results',
            },
            {
              ar: 'وصف مختصر وبطاقة مشاركة أنيقة عند إرسال الرابط في واتساب',
              en: 'Concise description and clean preview card when sharing on WhatsApp',
            },
            {
              ar: 'ضبط اتجاه اللغة العربية (RTL) وتحسين سرعة ظهور الصور',
              en: 'Proper Arabic RTL attributes and fast image loading',
            },
          ],
          connectionToFinalProject: {
            ar: 'بهذه الخطوة يكتمل بناء موقعك تقنيًا وبصريًا، ويصبح جاهزًا لمرحلة الفحص النهائي والنشر الحي.',
            en: 'With this step, your site is technically and visually built, ready for final testing and launch.',
          },
        },
      },
    },
    {
      id: 's09-slide-10',
      sessionNumber: 9,
      slideNumber: 10,
      totalSlides: 10,
      type: 'takeaway',
      title: {
        ar: 'خلاصة الجلسة التاسعة في 3 نقاط',
        en: 'Session 09 Summary in 3 Points',
      },
      estimatedMinutes: 3,
      teachingGoal: {
        ar: 'تثبيت خلاصة الجلسة التاسعة والتمهيد للجلسة العاشرة.',
        en: 'Reinforce Session 09 takeaways and preview Session 10.',
      },
      speakerNotes: {
        ar: 'نفّذ: راجع النقاط الثلاث مع المتدربين.\nاسأل: ما الأشياء الثلاثة التي تحدد شكل رابط موقعك في واتساب؟ (العنوان، الوصف، والصورة).\nتحقق: ذكّرهم بإرسال نشاط الجلسة عبر واتساب.',
        en: 'Review the 3 takeaways and preview Session 10.',
      },
      payload: {
        type: 'takeaway',
        data: {
          takeaways: [
            {
              number: '01',
              title: {
                ar: 'بطاقة تعريف الموقع هي انطباعك الأول',
                en: 'Your Link Preview Card Is Your First Impression',
              },
              description: {
                ar: 'عنوان الموقع ووصفه هما أول ما يقرؤه العميل في واتساب أو Google قبل فتح الرابط.',
                en: 'Your title and description are the first things clients read on WhatsApp or Google.',
              },
            },
            {
              number: '02',
              title: {
                ar: 'اكتب كلمات واضحة يبحث عنها الزبون',
                en: 'Use Clear Words Customers Actually Search For',
              },
              description: {
                ar: 'اذكر نوع الخدمة أو المنتج بوضوح في العنوان والوصف ليفهمه الزائر ومحرك البحث معًا.',
                en: 'Clearly state your service or product in the title and description.',
              },
            },
            {
              number: '03',
              title: {
                ar: 'السرعة جزء أساسي من راحة الزائر',
                en: 'Speed Is Essential for Visitor Comfort',
              },
              description: {
                ar: 'الصور الخفيفة والصفحات المنظمة تفتح فورًا على الهاتف وتحافظ على اهتمام الزائر.',
                en: 'Lightweight images and clean pages load immediately on mobile phones.',
              },
            },
          ],
          coreMotto: {
            ar: 'الخطوة القادمة في الجلسة 10: كيف نفحص الموقع ونختبر جميع أزراره وشاشاته قبل الإطلاق؟',
            en: 'Up Next in Session 10: How to inspect and test all buttons and screens before launch.',
          },
        },
      },
    },
  ],
};
