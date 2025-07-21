// form_handler.js
// Обработчик формы обратной связи для отправки в Telegram

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('admissionContactForm');
    const formMessage = document.getElementById('form-message');

    // Переводы для сообщений формы
    const translations = {
        ru: {
            form_success_message: 'Ваше сообщение успешно отправлено!',
            form_error_message: 'Ошибка при отправке. Попробуйте позже.'
        },
        uz: {
            form_success_message: 'Xabaringiz muvaffaqiyatli yuborildi!',
            form_error_message: 'Yuborishda xatolik. Keyinroq urinib ko\'ring.'
        },
        en: {
            form_success_message: 'Your message has been sent successfully!',
            form_error_message: 'An error occurred while sending the message.'
        }
    };

    // Определяем текущий язык
    const getLang = () => localStorage.getItem('selectedLang') || 'ru';

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Блокируем стандартную отправку

            // Собираем данные формы
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value.trim() || 'Не указано';
            });

            // Формируем красивое сообщение для Telegram
            const message = `
📬 <b>Новое сообщение от абитуриента</b>

👨‍🎓 <b>ФИО:</b> ${escapeHtml(data.fullName)}
📧 <b>Email:</b> ${escapeHtml(data.email)}
📞 <b>Телефон:</b> ${escapeHtml(data.phone)}
💬 <b>Сообщение:</b>
${escapeHtml(data.message)}

⏱ <i>${new Date().toLocaleString('ru-RU')}</i>
            `.trim();

            // === НАСТРОЙКИ: Замените значения ниже ===
            const BOT_TOKEN = '7042630684:AAHXZ5In4ME6XQnATJJG__aJbu8NeXvi4mo'; // ← Ваш токен бота
            const CHAT_ID = '@priyemnaya_politexa'; // ← ID группы или личный ID (например: 123456789) ИЛИ @username
            // ========================================

            const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

            // Показываем "Отправка..."
            formMessage.textContent = 'Отправка...';
            formMessage.className = 'form-message info';
            formMessage.style.display = 'block';

            try {
                const response = await fetch(TELEGRAM_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: message,
                        parse_mode: 'HTML',
                        disable_web_page_preview: true
                    })
                });

                const result = await response.json();

                if (result.ok) {
                    // Успешно отправлено
                    formMessage.textContent = translations[getLang()].form_success_message;
                    formMessage.className = 'form-message success';
                    form.reset();
                } else {
                    // Ошибка от Telegram
                    console.error('Telegram API error:', result);
                    formMessage.textContent = `Ошибка: ${result.description}`;
                    formMessage.className = 'form-message error';
                }
            } catch (error) {
                // Ошибка сети или запроса
                console.error('Fetch error:', error);
                formMessage.textContent = translations[getLang()].form_error_message;
                formMessage.className = 'form-message error';
            }

            // Скрыть сообщение через 5 секунд
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Экранируем HTML, чтобы избежать инъекций
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
