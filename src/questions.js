const stage1Questions = [
  {
    text: 'מהו React?',
    answers: [
      { text: 'ספרייה לבניית ממשקי משתמש', isCorrect: true },
      { text: 'שפת תכנות', isCorrect: false },
      { text: 'כלי לניהול מסדי נתונים', isCorrect: false },
      { text: 'ספרייה לניתוח נתונים', isCorrect: false }
    ]
  },
  {
    text: 'מהו רכיב פונקציונלי ב-React?',
    answers: [
      { text: 'פונקציה המייצרת רכיב UI', isCorrect: true },
      { text: 'רכיב המנוהל על ידי state', isCorrect: false },
      { text: 'פונקציה שמבצעת קריאות API', isCorrect: false },
      { text: 'פונקציה המנהלת את ה-DOM', isCorrect: false }
    ]
  },
  {
    text: 'מהו JSX?',
    answers: [
      { text: 'תחביר המאפשר לכתוב HTML בתוך JavaScript', isCorrect: true },
      { text: 'ספריית עיצוב', isCorrect: false },
      { text: 'תוסף לדפדפן', isCorrect: false },
      { text: 'שפת תכנות חדשה', isCorrect: false }
    ]
  },
  {
    text: 'איך מעבירים props מרכיב הורה לרכיב ילד?',
    answers: [
      { text: 'באמצעות props', isCorrect: true },
      { text: 'באמצעות state', isCorrect: false },
      { text: 'באמצעות context', isCorrect: false },
      { text: 'באמצעות localStorage', isCorrect: false }
    ]
  },
  {
    text: 'מה עושה ה-Hook useState?',
    answers: [
      { text: 'מאפשר לנהל state ברכיב פונקציונלי', isCorrect: true },
      { text: 'מאפשר גישה ישירה ל-DOM', isCorrect: false },
      { text: 'מבצע קריאות ל-API', isCorrect: false },
      { text: 'מנהל את מחזור חיי הרכיב', isCorrect: false }
    ]
  }
];
const stage2Questions = [
  {
    text: 'מהו ה-Hook useEffect?',
    answers: [
      { text: 'משמש לביצוע side effects כמו קריאות ל-API', isCorrect: true },
      { text: 'מנהל את ה-state של הרכיב', isCorrect: false },
      { text: 'מניעת רינדור חוזר של הרכיב', isCorrect: false },
      { text: 'ניהול רכיבים משותפים', isCorrect: false }
    ]
  },
  {
    text: 'מהו context API ב-React?',
    answers: [
      { text: 'אובייקט לניהול state בין רכיבים בלי להעביר props', isCorrect: true },
      { text: 'מנהל את ה-DOM', isCorrect: false },
      { text: 'פונקציה ליצירת hooks מותאמים אישית', isCorrect: false },
      { text: 'כלי לניהול סטיילים', isCorrect: false }
    ]
  },
  {
    text: 'מה ההבדל בין useMemo ל-useCallback?',
    answers: [
      { text: 'useMemo מחזיק ערכים מחושבים, useCallback מחזיק פונקציות', isCorrect: true },
      { text: 'useMemo מניעת רינדור חוזר, useCallback ניהול state', isCorrect: false },
      { text: 'שניהם ניהול state', isCorrect: false },
      { text: 'שניהם ניהול side effects', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-Virtual DOM?',
    answers: [
      { text: 'תמונת מראה של ה-DOM המקורית המאפשרת אופטימיזציה', isCorrect: true },
      { text: 'מאגר נתונים', isCorrect: false },
      { text: 'מנהל את קריאות ה-API', isCorrect: false },
      { text: 'כלי לניהול ניווט', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-HOC (Higher Order Component)?',
    answers: [
      { text: 'פונקציה שמחזירה רכיב חדש עם יכולות נוספות', isCorrect: true },
      { text: 'פונקציה ליצירת state', isCorrect: false },
      { text: 'פונקציה לניהול אפקטים צדדיים', isCorrect: false },
      { text: 'פונקציה ליצירת רכיבים מבוססי class', isCorrect: false }
    ]
  }
];
const stage3Questions = [
  {
    text: 'מהו ה-useReducer ומה יתרונותיו?',
    answers: [
      { text: 'מנהלת state מורכב בצורה מתקדמת', isCorrect: true },
      { text: 'מניעה רינדור חוזר של רכיבים', isCorrect: false },
      { text: 'שימוש ב-hooks מותאמים אישית', isCorrect: false },
      { text: 'ניהול קריאות ל-API', isCorrect: false }
    ]
  },
  {
    text: 'איך ניתן למנוע בעיות של prop drilling?',
    answers: [
      { text: 'באמצעות context API', isCorrect: true },
      { text: 'באמצעות useState', isCorrect: false },
      { text: 'באמצעות useEffect', isCorrect: false },
      { text: 'באמצעות useCallback', isCorrect: false }
    ]
  },
  {
    text: 'מהו Portals ב-React?',
    answers: [
      { text: 'מאפשר לרנדר אלמנטים מחוץ להיררכיה של ה-DOM של הרכיב', isCorrect: true },
      { text: 'מאפשר ניהול state גלובלי', isCorrect: false },
      { text: 'מנהל את מחזור חיי הרכיב', isCorrect: false },
      { text: 'כלי לעיצוב אלמנטים', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-PureComponent?',
    answers: [
      { text: 'רכיב שמבצע רינדור רק כאשר props משתנים', isCorrect: true },
      { text: 'רכיב המנוהל על ידי hooks', isCorrect: false },
      { text: 'רכיב שמבצע קריאות ל-API', isCorrect: false },
      { text: 'רכיב המנהל את ה-DOM', isCorrect: false }
    ]
  },
  {
    text: 'מה ההבדל בין class components ל-functional components?',
    answers: [
      { text: 'Class components תומכים ב-state ו-life cycle methods, functional components לא', isCorrect: true },
      { text: 'Functional components תומכים ב-state, class components לא', isCorrect: false },
      { text: 'Class components אינם תומכים ב-hooks', isCorrect: false },
      { text: 'Functional components אינם תומכים ב-state', isCorrect: false }
    ]
  }
];
const stage4Questions = [
  {
    text: 'מהו ה-React Suspense?',
    answers: [
      { text: 'אפשרות לחכות לסיום טעינת נתונים לפני רינדור רכיבים', isCorrect: true },
      { text: 'פונקציה ליצירת state ברכיב', isCorrect: false },
      { text: 'פונקציה לניהול אפקטים צדדיים', isCorrect: false },
      { text: 'מנהל את הרינדור של הרכיב', isCorrect: false }
    ]
  },
  {
    text: 'איך ניתן לבצע Lazy Loading של רכיבים ב-React?',
    answers: [
      { text: 'באמצעות React.lazy ו-Suspense', isCorrect: true },
      { text: 'באמצעות useEffect', isCorrect: false },
      { text: 'באמצעות useState', isCorrect: false },
      { text: 'באמצעות useReducer', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-React.memo?',
    answers: [
      { text: 'Higher Order Component שמונע רינדור חוזר של רכיבים כאשר props לא משתנים', isCorrect: true },
      { text: 'כלי לניהול state גלובלי', isCorrect: false },
      { text: 'פונקציה ליצירת context', isCorrect: false },
      { text: 'פונקציה לניהול side effects', isCorrect: false }
    ]
  },
  {
    text: 'מהם React Fragments?',
    answers: [
      { text: 'מאפשרים להחזיק מספר רכיבים מבלי להוסיף nodes נוספים ל-DOM', isCorrect: true },
      { text: 'מאפשרים לנהל state בצורה גלובלית', isCorrect: false },
      { text: 'מאפשרים ליצור hooks מותאמים אישית', isCorrect: false },
      { text: 'מאפשרים לנהל אפקטים צדדיים', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-Error Boundary?',
    answers: [
      { text: 'רכיב המנהל שגיאות JavaScript בתוך הרכיבים שלו', isCorrect: true },
      { text: 'פונקציה לניהול state', isCorrect: false },
      { text: 'פונקציה לרינדור רכיבים', isCorrect: false },
      { text: 'פונקציה ליצירת context', isCorrect: false }
    ]
  }
];
const stage5Questions = [
  {
    text: 'מהו ה-React Concurrent Mode?',
    answers: [
      { text: 'מצב שמאפשר לרנדר רכיבים בצורה א-סינכרונית לשיפור ביצועים', isCorrect: true },
      { text: 'מצב לניהול state בצורה גלובלית', isCorrect: false },
      { text: 'מצב לניהול אפקטים צדדיים', isCorrect: false },
      { text: 'מצב לשיפור איכות הקוד', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-React DevTools?',
    answers: [
      { text: 'כלי לניתוח והרצה של אפליקציות React', isCorrect: true },
      { text: 'פונקציה לניהול state', isCorrect: false },
      { text: 'פונקציה לניהול אפקטים צדדיים', isCorrect: false },
      { text: 'פונקציה לרינדור רכיבים', isCorrect: false }
    ]
  },
  {
    text: 'מהם ה-React Portals?',
    answers: [
      { text: 'מאפשרים לרנדר רכיבים מחוץ להיררכיה של ה-DOM של רכיב', isCorrect: true },
      { text: 'מאפשרים לנהל state בצורה גלובלית', isCorrect: false },
      { text: 'מאפשרים ליצירת hooks מותאמים אישית', isCorrect: false },
      { text: 'מאפשרים לרנדר רכיבים בתנאים מיוחדים', isCorrect: false }
    ]
  },
  {
    text: 'איך ניתן לשלב React עם TypeScript?',
    answers: [
      { text: 'באמצעות הגדרת טיפוסים לרכיבים ופרופס', isCorrect: true },
      { text: 'באמצעות הוספת state לכל רכיב', isCorrect: false },
      { text: 'באמצעות שימוש ב-context', isCorrect: false },
      { text: 'באמצעות הגדרת hooks מותאמים אישית', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-React Strict Mode?',
    answers: [
      { text: 'מצב לפיתוח המצביע על בעיות אפשריות בקוד', isCorrect: true },
      { text: 'מצב לניהול state בצורה גלובלית', isCorrect: false },
      { text: 'מצב לניהול אפקטים צדדיים', isCorrect: false },
      { text: 'מצב לרינדור רכיבים בצורה א-סינכרונית', isCorrect: false }
    ]
  }
];
const stage6Questions = [
  {
    text: 'מהו ה-React Context API ואילו בעיות הוא פותר?',
    answers: [
      { text: 'אמצעי לניהול state גלובלי מבלי להעביר props דרך כל היררכיית הרכיבים', isCorrect: true },
      { text: 'פיתרון לבעיות רינדור חוזר', isCorrect: false },
      { text: 'אמצעי ליצירת hooks מותאמים אישית', isCorrect: false },
      { text: 'פיתרון לבעיות של lazy loading', isCorrect: false }
    ]
  },
  {
    text: 'איך ניתן לייעל את ביצועי האפליקציה עם React?',
    answers: [
      { text: 'באמצעות שימוש ב-PureComponent, memoization ו-React.lazy', isCorrect: true },
      { text: 'באמצעות הוספת state בכל רכיב', isCorrect: false },
      { text: 'באמצעות הוספת יותר פרופס לכל רכיב', isCorrect: false },
      { text: 'באמצעות שימוש ב-Context API', isCorrect: false }
    ]
  },
  {
    text: 'מהו ההבדל בין useMemo ל-useCallback?',
    answers: [
      { text: 'useMemo משמר ערכים מחושבים, useCallback משמר פונקציות', isCorrect: true },
      { text: 'שניהם משמרים פונקציות', isCorrect: false },
      { text: 'useMemo משמר פונקציות, useCallback משמר ערכים', isCorrect: false },
      { text: 'useMemo לניהול state, useCallback לניהול side effects', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-React Profiler?',
    answers: [
      { text: 'כלי למדידת ביצועים של רכיבים ולזיהוי בעיות ביצועים', isCorrect: true },
      { text: 'פונקציה לניהול state', isCorrect: false },
      { text: 'פונקציה לניהול אפקטים צדדיים', isCorrect: false },
      { text: 'פונקציה לרינדור רכיבים', isCorrect: false }
    ]
  },
  {
    text: 'מהו שימושו של ה-Hook useImperativeHandle?',
    answers: [
      { text: 'מאפשר שליטה על ה-refs שנשלחות לרכיבים חיצוניים', isCorrect: true },
      { text: 'מאפשר למנוע רינדור חוזר של רכיב', isCorrect: false },
      { text: 'מאפשר להשתמש ב-state בתוך פונקציות', isCorrect: false },
      { text: 'מאפשר לנהל אפקטים צדדיים', isCorrect: false }
    ]
  }
];
const stage7Questions = [
  {
    text: 'מהו ה-React Fiber?',
    answers: [
      { text: 'מנוע חדש לרינדור שמייעל את הביצועים על ידי אופטימיזציה של מחזור הרינדור', isCorrect: true },
      { text: 'ספרייה לניהול state', isCorrect: false },
      { text: 'כלי לניהול אפקטים צדדיים', isCorrect: false },
      { text: 'פונקציה ליצירת רכיבים', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-React Concurrent Mode?',
    answers: [
      { text: 'מצב שמאפשר ביצוע רינדור א-סינכרוני על מנת לשפר ביצועים', isCorrect: true },
      { text: 'מצב לניהול state בצורה גלובלית', isCorrect: false },
      { text: 'מצב לניהול קריאות ל-API', isCorrect: false },
      { text: 'מצב לרינדור רכיבים בתנאים מיוחדים', isCorrect: false }
    ]
  },
  {
    text: 'מהי המטרה של React Server Components?',
    answers: [
      { text: 'לרנדר רכיבים בצד השרת לשיפור ביצועים ולהקטנת זמן הטעינה', isCorrect: true },
      { text: 'לרנדר רכיבים בצד הלקוח', isCorrect: false },
      { text: 'לניהול state בצד השרת', isCorrect: false },
      { text: 'לניהול קריאות API בצד השרת', isCorrect: false }
    ]
  },
  {
    text: 'איך ניתן לבצע Error Boundary ב-React?',
    answers: [
      { text: 'על ידי יצירת רכיב שמטפל בשגיאות בתוך מתודה של componentDidCatch', isCorrect: true },
      { text: 'על ידי שימוש ב-Hook useErrorBoundary', isCorrect: false },
      { text: 'על ידי שימוש ב-HOC', isCorrect: false },
      { text: 'על ידי שימוש ב-React.lazy', isCorrect: false }
    ]
  },
  {
    text: 'מהו היתרון של שימוש ב-React Query?',
    answers: [
      { text: 'ניהול ואופטימיזציה של קריאות API ושל נתונים במצב לקוח', isCorrect: true },
      { text: 'ניהול state גלובלי', isCorrect: false },
      { text: 'ניהול רינדור של רכיבים', isCorrect: false },
      { text: 'ניהול אפקטים צדדיים', isCorrect: false }
    ]
  }
];
const stage8Questions = [
  {
    text: 'מהו השימוש ב-React Suspense?',
    answers: [
      { text: 'מאפשר טיפול בעיכובים וטעינות עם רכיבים ממתינים', isCorrect: true },
      { text: 'מאפשר גישה ישירה ל-DOM', isCorrect: false },
      { text: 'מאפשר שימוש ב-context', isCorrect: false },
      { text: 'מאפשר יצירת state ברכיבים', isCorrect: false }
    ]
  },
  {
    text: 'איך ניתן לבצע code splitting ב-React?',
    answers: [
      { text: 'באמצעות React.lazy ו-Suspense', isCorrect: true },
      { text: 'באמצעות useEffect', isCorrect: false },
      { text: 'באמצעות useState', isCorrect: false },
      { text: 'באמצעות useReducer', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-React Strict Mode?',
    answers: [
      { text: 'מצב לפיתוח המצביע על בעיות אפשריות בקוד ומציע שיפורים', isCorrect: true },
      { text: 'מצב לניהול state בצורה גלובלית', isCorrect: false },
      { text: 'מצב לרינדור רכיבים בצורה א-סינכרונית', isCorrect: false },
      { text: 'מצב לניהול אפקטים צדדיים', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-React Error Boundary?',
    answers: [
      { text: 'רכיב המנהל שגיאות JavaScript בתוך הרכיבים שלו', isCorrect: true },
      { text: 'פונקציה לניהול state', isCorrect: false },
      { text: 'פונקציה לניהול אפקטים צדדיים', isCorrect: false },
      { text: 'פונקציה לרינדור רכיבים', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-React Concurrent Mode?',
    answers: [
      { text: 'מצב המאפשר אופטימיזציה של ביצועים על ידי רינדור א-סינכרוני', isCorrect: true },
      { text: 'מצב לניהול state בצורה גלובלית', isCorrect: false },
      { text: 'מצב לניהול קריאות ל-API', isCorrect: false },
      { text: 'מצב לניהול אפקטים צדדיים', isCorrect: false }
    ]
  }
];
const stage9Questions = [
  {
    text: 'מהם ה-React Portals ואיך הם עובדים?',
    answers: [
      { text: 'מאפשרים לרנדר רכיבים מחוץ להיררכיה של ה-DOM של רכיב', isCorrect: true },
      { text: 'מאפשרים לנהל state בצורה גלובלית', isCorrect: false },
      { text: 'מאפשרים ליצירת hooks מותאמים אישית', isCorrect: false },
      { text: 'מאפשרים לרנדר רכיבים בתנאים מיוחדים', isCorrect: false }
    ]
  },
  {
    text: 'איך ניתן לשלב React עם TypeScript?',
    answers: [
      { text: 'באמצעות הגדרת טיפוסים לרכיבים ופרופס', isCorrect: true },
      { text: 'באמצעות הוספת state לכל רכיב', isCorrect: false },
      { text: 'באמצעות שימוש ב-context', isCorrect: false },
      { text: 'באמצעות הגדרת hooks מותאמים אישית', isCorrect: false }
    ]
  },
  {
    text: 'מהו ההבדל בין שימוש ב-React.lazy ו-Suspense לבין שימוש ב-Loadable Components?',
    answers: [
      { text: 'React.lazy ו-Suspense מיועדים לטעינת רכיבים באופן דינמי, Loadable Components מאפשרים טעינת מודולים עם אפשרויות נוספות כמו פיצול לקובץ', isCorrect: true },
      { text: 'שניהם מיועדים לטעינת מודולים בצורה דינמית', isCorrect: false },
      { text: 'React.lazy מיועד לטעינת מודולים ו-Suspense לטעינת רכיבים', isCorrect: false },
      { text: 'Loadable Components מיועד לטעינת רכיבים ו-React.lazy למודולים', isCorrect: false }
    ]
  },
  {
    text: 'מהי מטרת ה-React DevTools Profiler?',
    answers: [
      { text: 'למדוד ביצועים ולזהות בעיות ביצועים ברכיבים', isCorrect: true },
      { text: 'לנהל state ברכיבים', isCorrect: false },
      { text: 'לנהל אפקטים צדדיים', isCorrect: false },
      { text: 'לרנדר רכיבים', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-React Server Components ואיך הוא משפיע על ביצועי האפליקציה?',
    answers: [
      { text: 'מאפשר רינדור רכיבים בצד השרת ובכך מקטין את זמן הטעינה בצד הלקוח', isCorrect: true },
      { text: 'מאפשר רינדור רכיבים בצד הלקוח עם שיפורי ביצועים', isCorrect: false },
      { text: 'מאפשר לנהל state בצורה גלובלית', isCorrect: false },
      { text: 'מאפשר ניהול אפקטים צדדיים בצד השרת', isCorrect: false }
    ]
  },
  {
    text: 'מהו היתרון של שימוש ב-React Query?',
    answers: [
      { text: 'ניהול ואופטימיזציה של קריאות API ושל נתונים במצב לקוח', isCorrect: true },
      { text: 'ניהול state גלובלי', isCorrect: false },
      { text: 'ניהול רינדור של רכיבים', isCorrect: false },
      { text: 'ניהול אפקטים צדדיים', isCorrect: false }
    ]
  }
];
const stage10Questions = [
  {
    text: 'מהי המטרה של React Concurrent Mode וכיצד היא משפיעה על ביצועי האפליקציה?',
    answers: [
      { text: 'שיפור ביצועים על ידי רינדור א-סינכרוני ויכולת לחלק את העומס', isCorrect: true },
      { text: 'ניהול state בצורה גלובלית', isCorrect: false },
      { text: 'ניהול אפקטים צדדיים', isCorrect: false },
      { text: 'רינדור רכיבים בצורה א-סינכרונית', isCorrect: false }
    ]
  },
  {
    text: 'איך ניתן לייעל את השימוש ב-React Hooks כדי למנוע ביצועים נמוכים?',
    answers: [
      { text: 'באמצעות שימוש ב-hooks כמו useMemo ו-useCallback כדי למנוע רינדור חוזר מיותר', isCorrect: true },
      { text: 'באמצעות שימוש ב-state בכל רכיב', isCorrect: false },
      { text: 'באמצעות שימוש ב-Context API', isCorrect: false },
      { text: 'באמצעות שימוש ב-Error Boundaries', isCorrect: false }
    ]
  },
  {
    text: 'מהו ה-React Fiber ואיך הוא תורם לביצועים של React?',
    answers: [
      { text: 'מנוע רינדור חדש שמבצע אופטימיזציה באמצעות חלוקת העבודה', isCorrect: true },
      { text: 'ספרייה לניהול state', isCorrect: false },
      { text: 'כלי לניהול אפקטים צדדיים', isCorrect: false },
      { text: 'פונקציה ליצירת רכיבים', isCorrect: false }
    ]
  },
  {
    text: 'מהו היתרון של שימוש ב-React Profiler בגרסת הפיתוח?',
    answers: [
      { text: 'היכולת למדוד ביצועים ולזיהוי בעיות ביצועים ברכיבים', isCorrect: true },
      { text: 'ניהול state', isCorrect: false },
      { text: 'ניהול אפקטים צדדיים', isCorrect: false },
      { text: 'רינדור רכיבים בצורה א-סינכרונית', isCorrect: false }
    ]
  },
  {
    text: 'איך ניתן להשתמש ב-React Query בכדי לנהל את קריאות ה-API בצורה יעילה?',
    answers: [
      { text: 'באמצעות caching, refetching, ו-synchronization של נתונים', isCorrect: true },
      { text: 'באמצעות שימוש ב-state גלובלי', isCorrect: false },
      { text: 'באמצעות שימוש ב-context API', isCorrect: false },
      { text: 'באמצעות שימוש ב-hooks מותאמים אישית', isCorrect: false }
    ]
  }
];

const questions = {
  stage1Questions,
  stage2Questions,
  stage3Questions,
  stage4Questions,
  stage5Questions,
  stage6Questions,
  stage7Questions,
  stage8Questions,
  stage9Questions,
  stage10Questions,
};

export default questions;