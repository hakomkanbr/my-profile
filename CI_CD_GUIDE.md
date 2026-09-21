# دليل إعداد وتشغيل خط أنابيب CI/CD (GitHub Actions)

تم تجهيز خط أنابيب **CI/CD** كامل وتلقائي باستخدام **GitHub Actions** في مسار:
[`.github/workflows/ci-cd.yml`](file:///c:/Users/Abdulhekim%20Abdullah/Desktop/Projeler/my-profile/.github/workflows/ci-cd.yml)

يقوم هذا النظام بفحص وتدقيق الكود وبناء صورة Docker آلياً عند كل Push أو Pull Request، ثم نشر التحديثات تلقائياً على سيرفر الـ VPS فور دمج التعديلات في فرع `master`.

---

## 🔄 مراحل خط الأنابيب (Pipeline Workflow)

### 1. مرحلة الفحص والبناء (CI - Continuous Integration):
- يتم تشغيلها عند كل `push` أو `pull_request` إلى فرع `master`.
- **الخطوات**:
  1. تثبيت الاعتماديات عبر `npm ci`.
  2. فحص جودة الكود والأخطاء عبر `npm run lint` (ESLint).
  3. التحقق من سلامة وصحة ملف `docker-compose.yml`.
  4. اختبار بناء صورة Docker (Docker Build Test) للتأكد من خلوها من أي أخطاء تمنع التشغيل.

### 2. مرحلة النشر التلقائي (CD - Continuous Deployment):
- لا تعمل إلا إذا نجحت مرحلة الـ CI وفقط عند الـ `push` المباشر إلى فرع `master`.
- **الخطوات**:
  1. الاتصال الآمن بالسيرفر عبر **SSH**.
  2. الانتقال إلى مسار المشروع على السيرفر.
  3. سحب آخر التعديلات عبر `git pull origin master`.
  4. التأكد من وجود شبكة `platform_backend`.
  5. إعادة بناء وتشغيل الحاوية دون توقف عبر `docker compose up -d --build`.
  6. تنظيف الصور القديمة غير المستخدمة (`docker image prune -f`) لحماية مساحة القرص.

---

## 🔑 المتغيرات السرية المطلوبة (GitHub Secrets)

لتفعيل النشر التلقائي عبر SSH، ادخل إلى مستودعك على GitHub:
`Settings` ➔ `Secrets and variables` ➔ `Actions` ➔ اضغط على `New repository secret`، وأضف المتغيرات التالية:

| اسم المتغير (Secret Name) | الوصف | مثال |
| :--- | :--- | :--- |
| `SERVER_HOST` | عنوان IP الخاص بسيرفرك أو اسم النطاق | `165.227.100.50` |
| `SERVER_USER` | اسم مستخدم SSH على السيرفر | `root` أو `ubuntu` |
| `SERVER_SSH_KEY` | المفتاح الخاص لـ SSH (Private Key) | محتوى `id_ed25519` أو `id_rsa` |
| `SERVER_PASSWORD` | *(اختياري)* كلمة مرور SSH إذا كنت لا تستخدم SSH Key | `YourSecretPassword` |
| `SERVER_PORT` | *(اختياري)* منفذ SSH (الافتراضي 22) | `22` |
| `SERVER_PROJECT_PATH` | المسار الكامل للمشروع داخل السيرفر | `/var/www/my-profile` أو `/home/ubuntu/my-profile` |

---

## 🖥️ تجهيز السيرفر للمرة الأولى (Initial Server Setup)

على السيرفر، نفذ الخطوات التالية لمرة واحدة فقط:

### 1. استنساخ المستودع:
```bash
cd /var/www  # أو المسار الذي تفضله
git clone https://github.com/hakomkanbr/my-profile.git
cd my-profile
```

### 2. إعداد ملف البيئة والدومين:
```bash
cp .env.example .env
nano .env # اضبط الدومين إذا كنت تستخدم المتغير
```

### 3. التشغيل الأولي:
```bash
docker compose up -d --build
```

---

## 🎯 بعد اكتمال الإعداد:
من الآن فصاعداً، بمجرد أن تقوم بعمل `git push origin master` من جهازك، سيتولى GitHub Actions فحص الكود ونشره على السيرفر في ثوانٍ معدودة وبشكل آلي بالكامل!
