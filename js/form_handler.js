document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('admissionContactForm');
    const formMessage = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Предотвращаем стандартную отправку формы

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Здесь будет логика отправки данных формы
            // Например, на Livegram Bot API или на ваш сервер
            console.log('Form data submitted:', data);

            // Имитация успешной или неуспешной отправки для демонстрации
            // В реальном приложении здесь будет fetch() запрос
            try {
                // Placeholder for actual fetch request to your backend/API
                // const response = await fetch('YOUR_FORM_PROCESSING_ENDPOINT', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify(data)
                // });
                // const result = await response.json();

                // if (response.ok) { // Check if HTTP status is 2xx
                    formMessage.textContent = translations[localStorage.getItem('selectedLang') || 'ru'].form_success_message;
                    formMessage.className = 'form-message success';
                    form.reset(); // Очистить форму после успешной отправки
                // } else {
                //     formMessage.textContent = result.message || translations[localStorage.getItem('selectedLang') || 'ru'].form_error_message;
                //     formMessage.className = 'form-message error';
                // }
            } catch (error) {
                console.error('Error submitting form:', error);
                formMessage.textContent = translations[localStorage.getItem('selectedLang') || 'ru'].form_error_message;
                formMessage.className = 'form-message error';
            }
            formMessage.style.display = 'block'; // Показываем сообщение

            // Скрыть сообщение через несколько секунд
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});
