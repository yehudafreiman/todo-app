# todo-app
# Todo App – TypeScript

אפליקציית משימות פשוטה, בנויה ב-HTML ו-TypeScript בלי פריימוורק, לצורך למידה.

---

## דרישות מוקדמות

| כלי | בדיקה |
|---|---|
| Node.js (גרסת LTS) | `node -v` |
| npm (מגיע עם Node) | `npm -v` |
| עורך קוד (מומלץ VS Code) | – |

---

## הקמת הפרויקט מאפס

```bash
mkdir todo-app
cd todo-app
npm init -y                  # יוצר package.json
npm install -D typescript    # מתקין TypeScript כתלות פיתוח
npx tsc --init               # יוצר tsconfig.json
npx tsc -v                   # בדיקה שהמהדר עובד
```

### שכפול פרויקט קיים (מ-GitHub)

```bash
git clone <repo-url>
cd todo-app
npm install                  # מתקין את מה שרשום ב-package.json
```

---

## מבנה הקבצים

```
todo-app/
├── index.html        ← מבנה הדף
├── src/              ← הקוד שאני כותב (TypeScript)
│   ├── main.ts       ← נקודת הכניסה: חיבור ל-DOM ואירועים
│   ├── types.ts      ← הגדרת הטיפוס של משימה
│   └── storage.ts    ← שמירה וטעינה מ-localStorage
├── dist/             ← נוצר אוטומטית ע"י tsc – לא עורכים, לא שומרים בגיט
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## הגדרות `tsconfig.json` שחשוב לבדוק

| הגדרה | מה היא עושה | מה בחרתי ולמה |
|---|---|---|
| `rootDir` | איפה נמצא קוד המקור | `./src` |
| `outDir` | לאן יוצא ה-JS המהודר | `./dist`, כדי להפריד בין מקור לפלט |
| `module` | באיזה פורמט מודולים לכתוב את ה-JS | `ES2015`: פורמט `import`/`export` שהדפדפן מבין |
| `strict` | בדיקות טיפוסים מחמירות | פעיל, שיתפוס כמה שיותר טעויות |
| `declaration` | יצירת קבצי `.d.ts` | כבוי, נחוץ רק לספריות |
| `sourceMap` | קבצי `.map` לדיבאג | פעיל, כדי לראות את ה-TS המקורי ב-DevTools |
| `lib` | אילו ממשקים מוכרים ל-TS | לוודא ש-`DOM` כלול |

---

## חיבור ה-HTML לקוד

בתגית ה-`script` בסוף ה-`body`:
- הנתיב מצביע על **הקובץ המהודר** בתוך `dist` (קובץ `.js` ספציפי, לא תיקייה ולא `.ts`)
- המאפיין `type="module"` כלול

---

## הרצה בזמן פיתוח

שני טרמינלים במקביל:

```bash
# טרמינל 1 – הידור אוטומטי בכל שמירה
npx tsc --watch

# טרמינל 2 – שרת מקומי
npx serve .
```

פותחים את הכתובת ש-`serve` מדפיס, ואת DevTools עם **F12**.

> למה צריך שרת? דפדפנים חוסמים מודולים בקובץ שנפתח ישירות מהדיסק (`file://`).

---

## `.gitignore`

```
node_modules
dist
.DS_Store
```

אם קבצים כבר נכנסו לגיט לפני שהוספו ל-`.gitignore`, מוציאים אותם מהמעקב (בלי למחוק מהדיסק):

```bash
git rm -r --cached dist .DS_Store
git commit -m "stop tracking build output"
```

---

## תקלות שנתקלתי בהן

| שגיאה | הסיבה | הפתרון |
|---|---|---|
| קבצי `.d.ts` / `.js` נוצרים בתוך `src` | `tsconfig` במצב ברירת מחדל | להגדיר `outDir`, לכבות `declaration` |
| `SyntaxError: Unexpected token '<'` | הדפדפן ביקש JS וקיבל HTML, כי הנתיב שגוי או מצביע על תיקייה | לבדוק ב-Network מה חזר; להצביע על קובץ `.js` קיים |
| `ReferenceError: exports is not defined` | `tsc` הפיק CommonJS (פורמט של Node) | לשנות את `module` ל-ES Modules |
| הדפדפן לא מריץ `.ts` | הדפדפן מבין רק JavaScript | לטעון את הקובץ מ-`dist` |

---

## פיצ'רים (מפת דרכים)

- [ ] הוספת משימה (כפתור)
- [ ] הוספת משימה באנטר
- [ ] סימון כבוצע
- [ ] הסרת משימה
- [ ] משימות שבוצעו יורדות למטה
- [ ] מחיקת משימות שבוצעו
- [ ] מחיקת הכול
- [ ] שמירה ב-localStorage
- [ ] עריכה באנטר
- [ ] ביטול עריכה ב-Esc