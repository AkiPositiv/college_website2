// form_handler.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('admissionContactForm');
    const formMessage = document.getElementById('form-message');

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

    const getLang = () => localStorage.getItem('selectedLang') || 'ru';

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value.trim() || 'Не указано';
            });

            const message = `
📬 <b>Новое сообщение от абитуриента</b>

👨‍🎓 <b>ФИО:</b> ${escapeHtml(data.fullName)}
📧 <b>Email:</b> ${escapeHtml(data.email)}
📞 <b>Телефон:</b> ${escapeHtml(data.phone)}
💬 <b>Сообщение:</b>
${escapeHtml(data.message)}

⏱ <i>${new Date().toLocaleString('ru-RU')}</i>
            `.trim();

            const BOT_TOKEN = '7042630684:AAHXZ5In4ME6XQnATJJG__aJbu8NeXvi4mo';
            const CHAT_ID = '1075491040'; // ← Ваш ID или @group_username
            const TELEGRAM_API_URL = `https://api.telegram.org/bot ${BOT_TOKEN}/sendMessage`;

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
                    formMessage.textContent = translations[getLang()].form_success_message;
                    formMessage.className = 'form-message success';
                    form.reset();
                } else {
                    console.error('Telegram API error:', result);
                    formMessage.textContent = `Ошибка: ${result.description}`;
                    formMessage.className = 'form-message error';
                }
            } catch (error) {
                console.error('Fetch error:', error);
                formMessage.textContent = translations[getLang()].form_error_message;
                formMessage.className = 'form-message error';
            }

            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
