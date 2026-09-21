# دليل تشغيل المشروع باستخدام Docker و Traefik

تم تجهيز هذا المشروع بالكامل ليعمل داخل بيئة حاويات **Docker** باستخدام **Docker Compose** وخادم التوجيه العكسي **Traefik v3**، مع دعم إنتاج Next.js خفيف وسريع بنمط `standalone` وشهادات أمان **SSL (Let's Encrypt)** تلقائية.

---

## 📁 الملفات التي تم إعدادها

1. **`next.config.ts`**: تفعيل ميزة `output: "standalone"` لإنتاج أصغر حجم ممكن لصورة Docker وتحسين استهلاك الموارد.
2. **`Dockerfile`**: بناء متعدد المراحل (Multi-stage build) مبني على Alpine Linux ومزود بمستخدم غير جذري (`nextjs`) لأقصى درجات الأمان.
3. **`.dockerignore`**: استبعاد الملفات غير الضرورية (مثل `node_modules` و `.next` و `.git`) لتسريع عملية البناء.
4. **`docker-compose.yml`**: إدارة وتشغيل خدمات `traefik` و `app` معاً داخل شبكة مخصصة `traefik-net`.
5. **`traefik/dynamic/middlewares.yml`**: ملف إعدادات ديناميكية لـ Traefik يتضمن ضغط البيانات (Gzip/Brotli)، وترويسات الأمان (Security Headers)، وإعادة التوجيه إلى HTTPS.
6. **`.env` / `.env.example`**: ضبط متغيرات الدومين والبريد الإلكتروني للشهادات.

---

## 🚀 1. التشغيل والتجربة محلياً (Local Development)

### الخطوة 1: فحص ملف `.env`
تأكد من أن ملف `.env` يحتوي على:
```env
DOMAIN=localhost
ACME_EMAIL=admin@example.com
NODE_ENV=production
```

### الخطوة 2: تشغيل الحاويات
قم بتشغيل الأمر التالي لبناء الصورة وتشغيل الخدمات في الخلفية:
```bash
docker compose up -d --build
```

### الخطوة 3: الوصول للتطبيق
- **الموقع الإلكتروني**: افتح المتصفح على [http://localhost](http://localhost).
- **لوحة تحكم Traefik**: افتح [http://localhost:8080](http://localhost:8080) لمراقبة التوجيهات وحالة الـ Routers والـ Services.

---

## 🌐 2. النشر على سيرفر حقيقي (Production / VPS)

عند نقل المشروع إلى سيرفر سحابي (مثل DigitalOcean, Hetzner, AWS, إلخ):

### الخطوة 1: توجيه الـ DNS
وجّه اسم النطاق الخاص بك (A Record) إلى عنوان IP الخاص بالسيرفر:
```
yourdomain.com  ->  IP_ADDRESS
```

### الخطوة 2: تعديل ملف `.env`
قم بتعديل قيم المتغيرات في ملف `.env`:
```env
DOMAIN=yourdomain.com
ACME_EMAIL=your-real-email@gmail.com
NODE_ENV=production
```

> **ملاحظة هامة عن شهادات SSL**:
> يقوم Traefik تلقائياً بالتواصل مع خوادم Let's Encrypt عبر منفذ 80 و 443 للتحقق من ملكية النطاق وتوليد شهادة HTTPS مجاناً وتجديدها دورياً دون أي تدخل يدوي!

### الخطوة 3: تفعيل التحويل التلقائي الإجباري إلى HTTPS (اختياري)
إذا أردت إجبار جميع زوار HTTP على التحويل إلى HTTPS مباشرة:
في ملف `docker-compose.yml`، يمكنك إضافة وسيط التحويل `redirect-to-https@file` إلى راوتر الـ HTTP:
```yaml
- "traefik.http.routers.app-http.middlewares=sec-headers@file,compress@file,redirect-to-https@file"
```

### الخطوة 4: تشغيل المشروع
```bash
docker compose up -d --build
```
سيعمل موقعك مباشرة على:
`https://yourdomain.com` مع شهادة أمان مشفرة بالكامل.

---

## 🛠️ أوامر الصيانة والمراقبة الشائعة

| الأمر | الوصف |
| :--- | :--- |
| `docker compose ps` | عرض حالة جميع الحاويات والمنافذ |
| `docker compose logs -f app` | متابعة سجلات تطبيق Next.js لحظياً |
| `docker compose logs -f traefik` | متابعة سجلات خادم Traefik وشهادات SSL |
| `docker compose restart` | إعادة تشغيل جميع الخدمات |
| `docker compose down` | إيقاف وحذف الحاويات والشبكة |
| `docker compose down -v` | إيقاف وحذف الحاويات مع مسح الشهادات المخزنة |

---

## 🔒 الأمان والميزات المطبقة
- **Non-Root User**: التطبيق يعمل بصلاحيات المستخدم `nextjs` (UID 1001) لمنع الوصول الجذري للحاوية.
- **Standalone Tracing**: لا حاجة لتضمين كل مجلد `node_modules` الضخم في بيئة الإنتاج، فقط الملفات المطلوبة فعلياً.
- **Docker Healthcheck**: فحص دوري لصحة عمل Traefik والتأكد من استجابته للطلبات.
- **Security Headers**: حماية من هجمات XSS، و Clickjacking، وفرض سياسات MIME الصحيحة تلقائياً عبر Traefik.
