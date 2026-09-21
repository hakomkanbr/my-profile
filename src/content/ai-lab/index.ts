/**
 * WEB CREATOR AI — AI Lab Registry
 * Tested, high-converting prompts and workflows for modern web developers.
 */

import { AIPromptItem } from '@/types';

export const ALL_AI_PROMPTS: AIPromptItem[] = [
  {
    id: 'prompt-ui-component',
    category: 'ui-ux',
    title: {
      ar: 'موجه توليد مكون واجهة مستخدم متجاوب ونظيف',
      en: 'Responsive Clean UI Component Generation Prompt',
    },
    description: {
      ar: 'موجه احترافي يجعل نماذج الذكاء الاصطناعي تنتج مكون React + Tailwind متوافقاً مع معايير الوصول ويدعم التجاوب والـ Dark Mode.',
      en: 'Architectural prompt instructing LLMs to generate accessible, dark-mode ready React + Tailwind components.',
    },
    targetModel: 'Any LLM',
    promptTemplate: {
      ar: `أنت كبير مهندسي واجهات الويب (Principal Frontend Architect).
أريدك أن تبني مكون React بنسخة TypeScript و Tailwind CSS يحقق المعايير التالية:
1. المكون: [اكتب اسم ووظيفة المكون هنا].
2. دعم شاشات الموبايل والديسكتوب بسلاسة (Mobile-first).
3. دعم كامل للوضع الداكن (Dark Mode) والاتجاه العربي RTL عبر خصائص منطقية (مثل ms-, me-).
4. استخدام TypeScript Interfaces صارمة للـ Props.
5. لا تستخدم أي مكتبات خارجية إضافية ما لم يُطلب منك ذلك صراحة.
أعطني الكود فقط مع شروحات مختصرة لأهم القرارات المعمارية.`,
      en: `Act as a Principal Frontend Architect.
Build a production-ready React component with TypeScript and Tailwind CSS adhering to:
1. Component: [Insert component name and purpose here].
2. Fully responsive (mobile-first).
3. First-class dark mode support and RTL support using CSS logical properties.
4. Strict TypeScript props interface.
Provide clean code followed by concise architectural rationales.`,
    },
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'UI'],
  },
  {
    id: 'prompt-code-debug',
    category: 'debugging',
    title: {
      ar: 'موجه تشخيص وحل الأخطاء البرمجية المعقدة',
      en: 'Deep Root-Cause Debugging Prompt',
    },
    description: {
      ar: 'موجه مصمم لتشخيص الأخطاء البرمجية غير المباشرة وفهم السبب الجذري للمشكلة بدلاً من مجرد حلول ترقيعية.',
      en: 'Engineered prompt to find the root cause of tricky errors instead of superficial patches.',
    },
    targetModel: 'Claude',
    promptTemplate: {
      ar: `لدي خطأ برمجي في كود الويب التالي:
[ضع رسالة الخطأ هنا أو سلوك الصفحة غير المتوقع]

وهذا هو الكود ذو الصلة:
[ضع الكود هنا]

أريدك أن تجيبني وفق هذا التسلسل:
1. السبب الجذري (Root Cause): لماذا يحدث هذا الخطأ بالضبط؟
2. الكود المصحح (Corrected Code): اكتب الكود بعد تصحيحه بدقة.
3. درس للمستقبل (Prevention): كيف أتجنب هذا النمط من الأخطاء مستقبلاً؟`,
      en: `I encountered a bug in the following web codebase:
[Insert error message or unexpected behavior]

Relevant code:
[Insert code snippet]

Please respond strictly in this sequence:
1. Root Cause: Why did this happen under the hood?
2. Corrected Code: Provide the drop-in fix.
3. Prevention Tip: Best practice to prevent this pitfall in the future.`,
    },
    tags: ['Debugging', 'Next.js', 'React', 'Best Practices'],
  },
  {
    id: 'prompt-seo-metadata',
    category: 'seo-marketing',
    title: {
      ar: 'موجه توليد وسوم الـ SEO والـ OpenGraph الجذابة',
      en: 'High-CTR SEO & OpenGraph Metadata Generator',
    },
    description: {
      ar: 'توليد وسوم الميتا (Meta Tags) الجذابة التي ترفع نسبة النقر للظهور (CTR) في محركات البحث ومواقع التواصل.',
      en: 'Generates compelling titles, meta descriptions, and OpenGraph tags to boost CTR on search and social.',
    },
    targetModel: 'ChatGPT',
    promptTemplate: {
      ar: `أنا أقوم بإطلاق صفحة ويب لـ: [وصف مختصر للمنتج أو الخدمة أو معرض الأعمال].
الفئة المستهدفة: [حدد جمهورك هنا].
أريدك أن تولد لي:
1. 3 مقترحات لعناوين SEO Title جذابة (أقل من 60 حرفاً، تشمل الكلمة المفتاحية الأساسية).
2. 3 مقترحات لوصف Meta Description مقنع يدفع للضغط (بين 140 - 155 حرفاً).
3. كود Metadata جاهز للاستخدام في Next.js (Metadata Object).`,
      en: `I am launching a web project for: [Brief description of product, service, or portfolio].
Target audience: [Target demographic].
Generate:
1. 3 high-CTR SEO Title variations (under 60 chars, including primary keyword).
2. 3 compelling Meta Description options (between 140-155 chars).
3. Drop-in Next.js 14+ Metadata export object.`,
    },
    tags: ['SEO', 'Marketing', 'Next.js', 'Copywriting'],
  },
];
