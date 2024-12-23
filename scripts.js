document.addEventListener('DOMContentLoaded', () => {
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    const body = document.body;

    darkModeCheckbox.addEventListener('change', () => {
        body.classList.toggle('dark-mode', darkModeCheckbox.checked);
    });

    document.getElementById('account-type').addEventListener('change', toggleFormFields);
});

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