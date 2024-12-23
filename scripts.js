const translations = {
    ar: {
        "تسجيل الدخول": "تسجيل الدخول",
        "اختر نوع الحساب": "اختر نوع الحساب",
        "نوع الحساب:": "نوع الحساب:",
        "طالب": "طالب",
        "مشرف": "مشرف",
        "الاسم:": "الاسم:",
        "رقم الهاتف (واتساب):": "رقم الهاتف (واتساب):",
        "البريد الإلكتروني:": "البريد الإلكتروني:",
        "كلمة المرور:": "كلمة المرور:",
        "تسجيل الدخول": "تسجيل الدخول",
        "&copy; 2024 موقعي البرمجي. جميع الحقوق محفوظة.": "&copy; 2024 موقعي البرمجي. جميع الحقوق محفوظة."
    },
    en: {
        "تسجيل الدخول": "Login",
        "اختر نوع الحساب": "Choose Account Type",
        "نوع الحساب:": "Account Type:",
        "طالب": "Student",
        "مشرف": "Supervisor",
        "الاسم:": "Name:",
        "رقم الهاتف (واتساب):": "Phone Number (WhatsApp):",
        "البريد الإلكتروني:": "Email:",
        "كلمة المرور:": "Password:",
        "تسجيل الدخول": "Login",
        "&copy; 2024 موقعي البرمجي. جميع الحقوق محفوظة.": "&copy; 2024 My Coding Site. All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
    });

    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
    }

    languageToggle.addEventListener('click', () => {
        const currentLang = document.documentElement.lang;
        const newLang = currentLang === 'ar' ? 'en' : 'ar';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    });

    if (localStorage.getItem('language')) {
        setLanguage(localStorage.getItem('language'));
    }

    document.getElementById('account-type').addEventListener('change', toggleFormFields);
});

function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        el.innerText = translations[lang][el.innerText];
    });
}

function toggleFormFields() {
    const accountType = document.getElementById('account-type').value;
    const studentFields = document.getElementById('student-fields');
    const supervisorFields = document.getElementById('supervisor-fields');

    if (accountType === 'student') {
        studentFields.classList.remove('hidden');
        supervisorFields.classList.add('hidden');
    } else {
        studentFields.classList.add('hidden');
        supervisorFields.classList.remove('hidden');
    }
}

function selectOption(option) {
    alert(`لقد اخترت: ${option}`);
    // هنا يمكنك حفظ الخيار في ملف المستخدم، بناءً على التنفيذ الخاص بك
}