<div align="center">


# 🌦️ Weather App


### اپلیکیشن مدرن نمایش وضعیت آب‌وهوا با React Native و Expo

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-Latest-61DAFB?style=for-the-badge&logo=react">
  <img src="https://img.shields.io/badge/Expo-SDK%2057-000020?style=for-the-badge&logo=expo">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript">
  <img src="https://img.shields.io/badge/OpenWeather-API-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS-success?style=for-the-badge">
</p>

> یک اپلیکیشن مدرن نمایش وضعیت آب‌وهوا که با **React Native**، **Expo** و **TypeScript** توسعه داده شده است و اطلاعات آب‌وهوایی شهرهای مختلف را به‌صورت لحظه‌ای نمایش می‌دهد.

</div>

---

## 📖 معرفی پروژه

**Weather App** یک پروژه آموزشی و کاربردی است که وضعیت آب‌وهوای شهرهای مختلف را با استفاده از API نمایش می‌دهد.

کاربر می‌تواند نام شهر موردنظر را جستجو کرده و اطلاعات کاملی مانند دما، رطوبت، سرعت باد، وضعیت آسمان و سایر اطلاعات هواشناسی را مشاهده کند.

این پروژه برای یادگیری ارتباط با API، مدیریت داده‌ها، طراحی رابط کاربری مدرن و کار با React Native بسیار مناسب است.

---

## ✨ امکانات

| ویژگی | وضعیت |
|--------|--------|
| طراحی مدرن و حرفه‌ای | ✅ |
| جستجوی شهرها | ✅ |
| نمایش دمای لحظه‌ای | ✅ |
| نمایش وضعیت آب‌وهوا | ✅ |
| نمایش رطوبت هوا | ✅ |
| نمایش سرعت باد | ✅ |
| نمایش فشار هوا | ✅ |
| نمایش احساس دمای واقعی | ✅ |
| آیکون اختصاصی وضعیت آب‌وهوا | ✅ |
| طراحی Responsive | ✅ |
| استفاده از TypeScript | ✅ |
| مدیریت درخواست‌های API | ✅ |

---

## 🌍 اطلاعات نمایش داده شده

- 🌡 **دما**
- 🤒 **دمای احساس‌شده**
- 💧 **رطوبت**
- 🌬 **سرعت باد**
- ☁ **وضعیت آسمان**
- 📍 **نام شهر**
- 🌅 **طلوع خورشید**
- 🌇 **غروب خورشید**
- 📊 **فشار هوا**

---

## 🛠 تکنولوژی‌های استفاده شده

- **React Native**
- **Expo SDK 57**
- **TypeScript**
- **Expo Router**
- **React Hooks**
- **Fetch API / Axios**
- **OpenWeather API**
- **StyleSheet**

---

## 📂 ساختار پروژه

```text
weather-app

├── app

├── assets

├── components
│   ├── SearchBar.tsx
│   ├── WeatherCard.tsx
│   ├── WeatherInfo.tsx
│   ├── Loading.tsx
│   └── Error.tsx

├── services
│   └── weatherApi.ts

├── constants

├── types

├── package.json

└── README.md
```

---

## 🚀 ساخت پروژه جدید

```bash
npx create-expo-app@latest
```

یا

```bash
npx create-expo-app@latest weather-app
```

سپس وارد پوشه پروژه شوید:

```bash
cd weather-app
```

---

## 💻 پیش‌نیازهای نصب

قبل از اجرای پروژه موارد زیر باید نصب باشند:

- [ ] Node.js (LTS)
- [ ] npm
- [ ] Git
- [ ] Visual Studio Code
- [ ] Android Studio
- [ ] Android SDK
- [ ] Java JDK
- [ ] Expo Go

---

## ⚙ راه‌اندازی محیط توسعه

برای نصب صحیح React Native از مستندات رسمی استفاده کنید.

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

در این راهنما نصب موارد زیر آموزش داده شده است:

- Android Studio
- Android SDK
- Java JDK
- Environment Variables
- Android Emulator
- اجرای پروژه روی موبایل
- اجرای پروژه روی شبیه‌ساز

---

## 📥 دانلود Android Studio

در صورت مشکل در دانلود Android Studio می‌توانید از لینک زیر استفاده کنید.

🔗 [https://soft98.ir/mobile/16739-android-studio.html](https://soft98.ir/mobile/16739-android-studio.html)

---

## 📦 دانلود آفلاین Android SDK

اگر هنگام دانلود Emulator یا System Image با خطا مواجه شدید، فایل‌های آفلاین را از لینک زیر دریافت کنید.

🔗 [https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1](https://androidsdkoffline.blogspot.com/p/android-sysimg-gapi-playstore-ia-x64.html?m=1)

---

## 🔑 دریافت API Key

برای دریافت API Key رایگان می‌توانید در سایت OpenWeather ثبت‌نام کنید.

🔗 [https://openweathermap.org/api](https://openweathermap.org/api)

پس از دریافت API Key آن را در فایل تنظیمات پروژه قرار دهید.

نمونه:

```ts
export const API_KEY = "YOUR_API_KEY";
```

---

## ⚡ نصب وابستگی‌ها

```bash
npm install
```

---

## ▶ اجرای پروژه

### شروع Development Server

```bash
npx expo start
```

### اجرای اندروید

```bash
npx expo run:android
```

### اجرای iOS

```bash
npx expo run:ios
```

### پاک کردن کش

```bash
npx expo start -c
```

---

## 📱 اجرای پروژه روی موبایل

۱. برنامه **Expo Go** را نصب کنید.

۲. دستور زیر را اجرا کنید:

```bash
npx expo start
```

۳. QR Code نمایش داده شده را توسط **Expo Go** اسکن کنید.

---

## 📦 دستورات پرکاربرد

### نمایش نسخه Node

```bash
node -v
```

### نمایش نسخه npm

```bash
npm -v
```

### نمایش نسخه Expo

```bash
npx expo --version
```

### نصب پکیج

```bash
npm install package-name
```

### نصب پکیج مخصوص Expo

```bash
npx expo install package-name
```

---

## 🧩 اجزای اصلی پروژه

| Component | توضیح |
|------------|-------|
| SearchBar | جستجوی شهر |
| WeatherCard | نمایش اطلاعات آب‌وهوا |
| WeatherInfo | نمایش جزئیات |
| Loading | صفحه بارگذاری |
| Error | نمایش خطا |
| weatherApi | ارتباط با API |

---

## 🎯 اهداف آموزشی پروژه

در این پروژه با مفاهیم زیر آشنا خواهید شد:

- React Native
- Expo
- TypeScript
- TSX
- API
- Fetch
- Async / Await
- State Management
- useState
- useEffect
- Component
- Props
- StyleSheet
- View
- Text
- Image
- ScrollView
- مدیریت خطا
- مدیریت درخواست‌های اینترنتی
- طراحی رابط کاربری

---

## 🚀 توسعه‌های آینده

- [ ] پیش‌بینی ۷ روز آینده
- [ ] پیش‌بینی ساعتی
- [ ] انتخاب موقعیت مکانی GPS
- [ ] نمایش روی نقشه
- [ ] ذخیره شهرهای محبوب
- [ ] حالت Dark Mode
- [ ] چندزبانه
- [ ] انیمیشن وضعیت آب‌وهوا
- [ ] هشدار تغییرات آب‌وهوا
- [ ] Widget صفحه اصلی

---

## ❗ رفع مشکلات متداول

### پروژه اجرا نمی‌شود

```bash
npx expo start -c
```

### API کار نمی‌کند

- ✅ اتصال اینترنت را بررسی کنید
- ✅ API Key صحیح باشد
- ✅ محدودیت درخواست‌های API را بررسی کنید

### Emulator اجرا نمی‌شود

- ✅ فعال بودن Virtualization
- ✅ نصب Android SDK
- ✅ نصب Java JDK
- ✅ ساخت Emulator
- ✅ استفاده از Android SDK Offline

---

## 📚 منابع آموزشی

### مستندات React Native

🔗 [https://reactnative.dev/docs](https://reactnative.dev/docs)

### راه‌اندازی محیط توسعه

🔗 [https://reactnative.dev/docs/set-up-your-environment](https://reactnative.dev/docs/set-up-your-environment)

### مستندات Expo

🔗 [https://docs.expo.dev](https://docs.expo.dev)

### مستندات OpenWeather API

🔗 [https://openweathermap.org/api](https://openweathermap.org/api)

---

## 🤝 مشارکت

در صورت تمایل می‌توانید پروژه را **Fork** کرده و با ارسال **Pull Request** در توسعه آن مشارکت کنید.

---

## 📄 لایسنس

این پروژه تحت لایسنس **MIT** منتشر شده است.

---

<div align="center">

⭐ اگر این پروژه برای شما مفید بود، لطفاً آن را **Star** کنید.

ساخته شده با ❤️ توسط **React Native + Expo**

</div>
