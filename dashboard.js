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

    loadFiles();
});

function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        el.innerText = translations[lang][el.innerText];
    });
}

function loadFiles() {
    const fileList = document.getElementById('file-list');
    
    // استبدل هذه البيانات ببيانات فعلية من الخادم
    const files = [
        { name: 'ملف 1', link: '#' },
        { name: 'ملف 2', link: '#' },
        { name: 'ملف 3', link: '#' }
    ];

    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `<a href="${file.link}">${file.name}</a>`;
        fileList.appendChild(fileItem);
    });
}

function selectOption(option) {
    alert(`لقد اخترت: ${option}`);
    // هنا يمكنك حفظ الخيار في ملف المستخدم، بناءً على التنفيذ الخاص بك
}