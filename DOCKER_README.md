# دليل تشغيل مشروع Next.js خلف Traefik الموجود على السيرفر

تم تجهيز مشروع **`my-profile` (Next.js)** ليعمل داخل حاوية **Docker** مستقلة وخفيفة، متصلة مباشرة بشبكة **`platform_backend`** الخارجية لتعمل خلف خادم **Traefik** الموجود مسبقاً على السيرفر، دون الحاجة لإنشاء خادم Traefik جديد ودون حجز أي منافذ خارجية (`80` أو `443`).

---

## 📁 بنية الإعدادات الحالية

- **`docker-compose.yml`**:
  - يحتوي فقط على خدمة التطبيق `my-profile` (اسم الحاوية `my-profile-app`).
  - متصل بالشبكة الخارجية `platform_backend` (`external: true`).
  - لا يحتوي على قسم `ports`، فالوصول يتم داخلياً فقط عبر Traefik على المنفذ `3000`.
  - مزود بـ Docker Labels الكاملة للتكامل مع Traefik:
    - الراوتر: `my-profile`
    - الخدمة: `my-profile`
    - المنفذ الداخلي: `3000`
    - نقطة الدخول (EntryPoint): `websecure` (مع HTTPS مشفر)
    - موفر الشهادات: `letsencrypt`
    - شبكة Traefik: `platform_backend`

- **`Dockerfile`**: بناء خفيف متعدد المراحل (Multi-stage) مع تفعيل النمط المستقل `output: "standalone"` ومستخدم غير جذري `nextjs`، يستمع التطبيق داخلياً على `0.0.0.0:3000`.

- **`.env` / `.env.example`**: يحتوي على متغير `DOMAIN=YOUR_DOMAIN` لتحديد الدومين بسهولة.

---

## 🚀 خطوات النشر والتشغيل على السيرفر

عند رفع المشروع إلى GitHub ثم سحبه على السيرفر:

### 1. استنساخ المشروع (Clone)
```bash
git clone <YOUR_REPO_URL>
cd my-profile
```

### 2. إعداد الدومين (Domain Configuration)
قم بإنشاء ملف `.env` أو تعديل قيمة الدومين:
```bash
cp .env.example .env
nano .env
```
وقم بوضع اسم النطاق الحقيقي الخاص بك بدلاً من `YOUR_DOMAIN`:
```env
DOMAIN=profile.yourdomain.com
NODE_ENV=production
```

> **ملاحظة**: يمكنك أيضاً تعديل الدومين مباشرة داخل `docker-compose.yml` في السطر:
> `Host(`YOUR_DOMAIN`)`

### 3. التأكد من وجود شبكة `platform_backend`
تأكد من أن مشروع Traefik الأساسي يعمل على السيرفر وأن الشبكة موجودة:
```bash
docker network ls | grep platform_backend
```
*(إذا لم تكن موجودة بعد، يمكن إنشاؤها عبر: `docker network create platform_backend`)*

### 4. البناء والتشغيل (Build & Run)
```bash
docker compose up -d --build
```

### 5. التحقق من السجلات والاتصال
```bash
# فحص حالة الحاوية
docker compose ps

# متابعة سجلات Next.js
docker compose logs -f my-profile
```

بمجرد تشغيل الحاوية، سيكتشف خادم Traefik الحاوية الجديدة تلقائياً عبر `docker.sock`، ويقوم بربط الدومين وإصدار شهادة SSL (Let's Encrypt) وتوجيه الزوار مباشرة إلى تطبيق Next.js بأمان وسلاسة.
