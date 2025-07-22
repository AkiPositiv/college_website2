document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('admissionContactForm');
    const formMessage = document.getElementById('form-message');

    const BOT_TOKEN = '7042630684:AAHXZ5In4ME6XQnATJJG__aJbu8NeXvi4mo';
    const CHAT_ID = '-1002786023091';
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const fullName = formData.get('fullName') || 'Не указано';
            const email = formData.get('email') || 'Не указано';
            const phone = formData.get('phone') || 'Не указано';
            const messageText = formData.get('message') || 'Не указано';

            const message = `
📬 <b>Новое сообщение от абитуриента</b>

👨‍🎓 <b>ФИО:</b> ${fullName}
📧 <b>Email:</b> ${email}
📞 <b>Телефон:</b> ${phone}
💬 <b>Сообщение:</b>
${messageText}

⏱ <i>${new Date().toLocaleString('ru-RU')}</i>
`.trim();

            formMessage.textContent = 'Отправка...';
            formMessage.style.display = 'block';
            formMessage.className = 'form-message info';

            try {
                const response = await fetch(TELEGRAM_API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: CHAT_ID,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });

                const result = await response.json();

                if (result.ok) {
                    formMessage.textContent = '✅ Ваше сообщение успешно отправлено!';
                    formMessage.className = 'form-message success';
                    form.reset();
                } else {
                    formMessage.textContent = '❌ Ошибка: ' + result.description;
                    formMessage.className = 'form-message error';
                    console.error('Telegram API error:', result);
                }
            } catch (error) {
                formMessage.textContent = '❌ Сетевая ошибка. Попробуйте позже.';
                formMessage.className = 'form-message error';
                console.error('Fetch error:', error);
            }

            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }
});
