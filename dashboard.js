document.addEventListener('DOMContentLoaded', () => {
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    const body = document.body;

    darkModeCheckbox.addEventListener('change', () => {
        body.classList.toggle('dark-mode', darkModeCheckbox.checked);
    });

    loadFiles();
});

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