// --- 1. Объект со всеми переводами ---
const translations = {
  "uz": {
    "page_title_home": "O‘rta Chirchiq tumani 2-sonli Politexnika kolleji",
    "college_short_name": "PTK №2",
    "nav_home": "Bosh sahifa",
    "nav_about": "Kollej haqida",
    "nav_applicants": "Abituriyentga",
    "nav_programs": "Mutaxassisliklar",
    "nav_student_life": "Talabalar hayoti",
    "nav_contacts": "Aloqa",
    "hero_title": "O‘rta Chirchiq tumani 2-sonli Politexnika kolleji",
    "hero_slogan": "Kelajakka eshik ochuvchi ta'lim",
    "hero_apply_btn": "Ariza topshirish",
    "welcome_message_title": "Direktor tabrigi",
    "welcome_message_paragraph1": "Hurmatli abituriyentlar, talabalar, ota-onalar va hamkorlar! O‘rta Chirchiq tumani 2-sonli Politexnika kollejining rasmiy veb-saytiga xush kelibsiz. 2009-yilda tashkil etilgan kollejimiz turli talab yuqori bo‘lgan sohalarda yuqori malakali mutaxassislarni tayyorlashga qaratilgan yetakchi ta’lim muassasasidir.",
    "welcome_message_paragraph2": "Biz o‘z moddiy-texnik bazamiz, zamonaviy o‘quv dasturlarimiz va tajribali o‘qituvchilar jamoasi bilan faxrlanamiz. Amaliyotga yo‘naltirilgan va dual ta’lim tizimiga alohida e’tibor qaratilmoqda, bu esa bitiruvchilarimizga mehnat bozorida raqobatbardosh bo‘lish imkonini beradi. Sizni do‘stona jamoamizga qo‘shilishga taklif qilamiz!",
    "director_signature": "Hurmat bilan, Direktor Shermatov Avaz Alijanovich",
    "features_title": "Nima uchun bizni tanlaysiz?",
    "feature1_title": "Amaliy ta'lim",
    "feature1_desc": "Amaliy ko‘nikmalar va real loyihalarga e’tibor.",
    "feature2_title": "Tajribali o‘qituvchilar",
    "feature2_desc": "Yuqori malakali pedagogik jamoa.",
    "feature3_title": "Zamonaviy jihozlar",
    "feature3_desc": "Ilg‘or uskunalar va texnologiyalarda ta’lim.",
    "feature4_title": "Hamkorlik aloqalari",
    "feature4_desc": "Yetakchi korxonalar bilan yaqin hamkorlik.",
    "partners_title": "Bizning hamkorlarimiz",
    "partner1_name": "Qorasuv Mebel Savdo MCHJ",
    "partner2_name": "Eko Soft Tekstil Korxonasi",
    "partner3_name": "Radiant tekstil MCHJ",
    "footer_about_title": "Kollej haqida",
    "footer_about_text": "O‘rta Chirchiq tumani 2-sonli Politexnika kolleji talab yuqori bo‘lgan mutaxassisliklar bo‘yicha sifatli kasbiy ta’limni taklif etadi. Biz zamonaviy mehnat bozori talablariga tayyor mutaxassislarni tayyorlaymiz.",
    "footer_links_title": "Foydali havolalar",
    "footer_link_applicants": "Abituriyentga",
    "footer_link_programs": "Mutaxassisliklar",
    "footer_link_student_life": "Talabalar hayoti",
    "footer_link_contacts": "Aloqa",
    "footer_contact_title": "Aloqa",
    "footer_address": "Manzil: O‘rta Chirchiq tumani, Politexnika kolleji №2",
    "footer_phone": "Telefon: (Telefon raqamini kiriting)",
    "footer_email": "Elektron pochta: (E-pochtani kiriting)",
    "social_telegram_link": "Telegram",
    "social_instagram_link": "Instagram",
    "social_facebook_link": "Facebook",
    "footer_copyright": "© 2025 O‘rta Chirchiq tumani 2-sonli Politexnika kolleji. Barcha huquqlar himoyalangan."
    "page_title_about": "Kollej haqida - O‘rta Chirchiq tumani 2-sonli Politexnika kolleji",
    "about_page_title": "Kollej haqida",
    "about_history_title": "Bizning tariximiz",
    "about_history_paragraph1": "O‘rta Chirchiq tumani 2-sonli Politexnika kolleji **2009-yilda** mintaqa iqtisodiyotining turli sohalari uchun yuqori malakali kadrlarni tayyorlash maqsadida tashkil etilgan. Tashkil topgan kundan boshlab kollej doimiy ravishda rivojlanib, mehnat bozori o‘zgaruvchan talablariga moslashib, ta’limda innovatsion yondashuvlarni joriy etib kelmoqda.",
    "about_history_paragraph2": "O‘tgan yillar davomida biz minglab mutaxassislarni tayyorladik, ular korxona va tashkilotlarda muvaffaqiyatli ishlamoqda, O‘zbekiston rivojlanishiga hissa qo‘shmoqdalar. Biz o‘z tariximiz va yutuqlarimiz bilan faxrlanamiz, shuningdek, kasbiy ta’lim sohasida yanada takomillashish va yetakchilikka intilamiz.",
    "about_mission_title": "Missiya va qadriyatlar",
    "about_mission_paragraph": "**Bizning missiyamiz** – malakali, raqobatbardosh va ijtimoiy mas'uliyatli mutaxassislarni tayyorlash, ular doimiy o‘qishga va mehnat bozorining zamonaviy chaqiriqlariga moslashishga qodir bo‘lishlari kerak. Biz shaxsning har tomonlama rivojlanishiga, kasbiy va fuqarolik fazilatlarini shakllantirishga yordam beradigan ta’lim muhitini yaratishga intilamiz.",
    "value1_title": "Innovatsiyalar",
    "value1_desc": "Yangi texnologiyalar va o‘qitish uslublarini doimiy joriy etish.",
    "value2_title": "Professionalizm",
    "value2_desc": "O‘qituvchilar va talabalarning yuqori tayyorgarlik darajasi.",
    "value3_title": "Hamkorlik",
    "value3_desc": "Ish beruvchilar va jamiyat bilan faol hamkorlik.",
    "value4_title": "Rivojlanish",
    "value4_desc": "Har bir kishining o‘sishi va o‘zini namoyon qilishi uchun sharoit yaratish.",
    "about_management_title": "Kollej rahbariyati",
    "director_name": "Shermatov Avaz Alijanovich",
    "director_position": "Kollej direktori",
    "director_bio": "Ta'lim sohasida ko‘p yillik tajribaga ega tajribali rahbar. Uning rahbarligida kollej malakali kadrlar tayyorlashda sezilarli yutuqlarga erishdi.",
    "deputy_director1_name": "Ism Familiya O‘rinbosari 1",
    "deputy_director1_position": "O‘quv ishlari bo‘yicha direktor o‘rinbosari",
    "deputy_director1_bio": "O‘quv jarayonini tashkil etish, yangi ta’lim dasturlarini joriy etish va ta’lim sifatini nazorat qilish uchun javobgar.",
    "deputy_director2_name": "Ism Familiya O‘rinbosari 2",
    "deputy_director2_position": "Ma’naviy-ma’rifiy ishlar bo‘yicha direktor o‘rinbosari",
    "deputy_director2_bio": "Talabalarning darsdan tashqari faoliyatini tashkil etadi, ularning ijodiy qobiliyatlarini rivojlantiradi va faol fuqarolik pozitsiyasini shakllantiradi."
  },
  "ru": {
    "page_title_home": "Урта-Чирчикский районный Политехнический колледж №2",
    "college_short_name": "ПТК №2",
    "nav_home": "Главная",
    "nav_about": "О колледже",
    "nav_applicants": "Абитуриенту",
    "nav_programs": "Специальности",
    "nav_student_life": "Студенческая жизнь",
    "nav_contacts": "Контакты",
    "hero_title": "Урта-Чирчикский районный Политехнический колледж №2",
    "hero_slogan": "Образование, открывающее двери в будущее",
    "hero_apply_btn": "Подать заявку",
    "welcome_message_title": "Приветствие директора",
    "welcome_message_paragraph1": "Уважаемые абитуриенты, студенты, родители и партнеры! Добро пожаловать на официальный сайт Урта-Чирчикского районного Политехнического колледжа №2. Наш колледж, основанный в 2009 году, является ведущим образовательным учреждением, нацеленным на подготовку высококвалифицированных специалистов в различных востребованных областях.",
    "welcome_message_paragraph2": "Мы гордимся нашей материально-технической базой, современными учебными программами и опытным преподавательским составом. Особое внимание уделяется практико-ориентированному обучению и дуальной системе, что позволяет нашим выпускникам быть конкурентоспособными на рынке труда. Приглашаем вас стать частью нашего дружного коллектива!",
    "director_signature": "С уважением, Директор Шерматов Аваз Алиджанович",
    "features_title": "Почему выбирают нас?",
    "feature1_title": "Практическое обучение",
    "feature1_desc": "Акцент на практических навыках и реальных проектах.",
    "feature2_title": "Опытные преподаватели",
    "feature2_desc": "Высококвалифицированный педагогический состав.",
    "feature3_title": "Современное оборудование",
    "feature3_desc": "Обучение на передовом оборудовании и технологиях.",
    "feature4_title": "Партнерские связи",
    "feature4_desc": "Тесное сотрудничество с ведущими предприятиями.",
    "partners_title": "Наши партнеры",
    "partner1_name": "Корасув Мебель Савдо МЧЖ",
    "partner2_name": "Эко софт текстиль корхонаси",
    "partner3_name": "Radiante textile MCHJ",
    "footer_about_title": "О колледже",
    "footer_about_text": "Урта-Чирчикский районный Политехнический колледж №2 предлагает качественное профессиональное образование по востребованным специальностям. Мы готовим специалистов, готовых к вызовам современного рынка труда.",
    "footer_links_title": "Полезные ссылки",
    "footer_link_applicants": "Абитуриенту",
    "footer_link_programs": "Специальности",
    "footer_link_student_life": "Студенческая жизнь",
    "footer_link_contacts": "Контакты",
    "footer_contact_title": "Контакты",
    "footer_address": "Адрес: Урта-Чирчикский район, Политехнический колледж №2",
    "footer_phone": "Телефон: (Укажите телефон)",
    "footer_email": "Email: (Укажите Email)",
    "social_telegram_link": "Telegram",
    "social_instagram_link": "Instagram",
    "social_facebook_link": "Facebook",
    "footer_copyright": "© 2025 Урта-Чирчикский районный Политехнический колледж №2. Все права защищены."
    "page_title_about": "О колледже - Урта-Чирчикский Политехнический Колледж №2",
    "about_page_title": "О колледже",
    "about_history_title": "Наша история",
    "about_history_paragraph1": "Урта-Чирчикский районный Политехнический колледж №2 был основан в **2009 году** с целью предоставления качественного среднего специального, профессионального образования и подготовки квалифицированных кадров для различных отраслей экономики региона. С момента своего основания колледж постоянно развивался, адаптируясь к меняющимся требованиям рынка труда и внедряя инновационные подходы в обучении.",
    "about_history_paragraph2": "За прошедшие годы мы выпустили тысячи специалистов, которые успешно трудятся на предприятиях и в организациях, способствуя развитию Узбекистана. Мы гордимся нашей историей и достижениями, а также стремимся к дальнейшему совершенствованию и лидерству в сфере профессионального образования.",
    "about_mission_title": "Миссия и ценности",
    "about_mission_paragraph": "**Наша миссия** — подготовка высококвалифицированных, конкурентоспособных и социально ответственных специалистов, способных к непрерывному обучению и адаптации к современным вызовам рынка труда. Мы стремимся создать образовательную среду, которая способствует всестороннему развитию личности, формированию профессиональных и гражданских качеств.",
    "value1_title": "Инновации",
    "value1_desc": "Постоянное внедрение новых технологий и методик обучения.",
    "value2_title": "Профессионализм",
    "value2_desc": "Высокий уровень подготовки преподавателей и студентов.",
    "value3_title": "Сотрудничество",
    "value3_desc": "Активное взаимодействие с работодателями и обществом.",
    "value4_title": "Развитие",
    "value4_desc": "Создание условий для роста и самореализации каждого.",
    "about_management_title": "Руководство колледжа",
    "director_name": "Шерматов Аваз Алиджанович",
    "director_position": "Директор колледжа",
    "director_bio": "Опытный руководитель с многолетним стажем в сфере образования. Под его руководством колледж достиг значительных успехов в подготовке квалифицированных кадров.",
    "deputy_director1_name": "Имя Фамилия Заместителя 1",
    "deputy_director1_position": "Заместитель директора по учебной работе",
    "deputy_director1_bio": "Отвечает за организацию учебного процесса, внедрение новых образовательных программ и контроль качества обучения.",
    "deputy_director2_name": "Имя Фамилия Заместителя 2",
    "deputy_director2_position": "Заместитель директора по воспитательной работе",
    "deputy_director2_bio": "Организует внеучебную деятельность студентов, развивает их творческие способности и формирует активную гражданскую позицию."
  },
  "en": {
    "page_title_home": "Urtachirchik District Polytechnic College No. 2",
    "college_short_name": "PTC No.2",
    "nav_home": "Home",
    "nav_about": "About College",
    "nav_applicants": "Applicants",
    "nav_programs": "Programs",
    "nav_student_life": "Student Life",
    "nav_contacts": "Contacts",
    "hero_title": "Urtachirchik District Polytechnic College No. 2",
    "hero_slogan": "Education that opens doors to the future",
    "hero_apply_btn": "Apply Now",
    "welcome_message_title": "Director's Welcome",
    "welcome_message_paragraph1": "Dear applicants, students, parents, and partners! Welcome to the official website of Urtachirchik District Polytechnic College No. 2. Our college, founded in 2009, is a leading educational institution aimed at training highly qualified specialists in various in-demand fields.",
    "welcome_message_paragraph2": "We are proud of our material and technical base, modern educational programs, and experienced teaching staff. Special attention is paid to practice-oriented and dual education systems, which allows our graduates to be competitive in the labor market. We invite you to become part of our friendly team!",
    "director_signature": "Sincerely, Director Shermatov Avaz Alijanovich",
    "features_title": "Why Choose Us?",
    "feature1_title": "Practical Training",
    "feature1_desc": "Emphasis on practical skills and real-world projects.",
    "feature2_title": "Experienced Faculty",
    "feature2_desc": "Highly qualified teaching staff.",
    "feature3_title": "Modern Equipment",
    "feature3_desc": "Learning with advanced equipment and technologies.",
    "feature4_title": "Partnerships",
    "feature4_desc": "Close cooperation with leading enterprises.",
    "partners_title": "Our Partners",
    "partner1_name": "Korasuv Mebel Savdo MCHJ",
    "partner2_name": "Eko Soft Tekstil Korxonasi",
    "partner3_name": "Radiante Textile MCHJ",
    "footer_about_title": "About the College",
    "footer_about_text": "Urtachirchik District Polytechnic College No. 2 offers quality professional education in in-demand specialties. We train specialists ready for the challenges of the modern labor market.",
    "footer_links_title": "Useful Links",
    "footer_link_applicants": "Applicants",
    "footer_link_programs": "Programs",
    "footer_link_student_life": "Student Life",
    "footer_link_contacts": "Contacts",
    "footer_contact_title": "Contacts",
    "footer_address": "Address: Urtachirchik District, Polytechnic College No. 2",
    "footer_phone": "Phone: (Provide phone number)",
    "footer_email": "Email: (Provide Email)",
    "social_telegram_link": "Telegram",
    "social_instagram_link": "Instagram",
    "social_facebook_link": "Facebook",
    "footer_copyright": "© 2025 Urtachirchik District Polytechnic College No. 2. All rights reserved."
    "page_title_about": "About College - Urtachirchik District Polytechnic College No. 2",
    "about_page_title": "About College",
    "about_history_title": "Our History",
    "about_history_paragraph1": "Urtachirchik District Polytechnic College No. 2 was founded in **2009** with the aim of providing quality secondary specialized professional education and training qualified personnel for various sectors of the regional economy. Since its establishment, the college has continuously developed, adapting to the changing demands of the labor market and implementing innovative approaches in education.",
    "about_history_paragraph2": "Over the years, we have graduated thousands of specialists who successfully work in enterprises and organizations, contributing to the development of Uzbekistan. We are proud of our history and achievements, and we strive for further improvement and leadership in the field of professional education.",
    "about_mission_title": "Mission and Values",
    "about_mission_paragraph": "**Our mission** is to train highly qualified, competitive, and socially responsible specialists capable of continuous learning and adaptation to modern labor market challenges. We aim to create an educational environment that promotes the comprehensive development of personality, forming professional and civic qualities.",
    "value1_title": "Innovation",
    "value1_desc": "Continuous implementation of new technologies and teaching methods.",
    "value2_title": "Professionalism",
    "value2_desc": "High level of training for teachers and students.",
    "value3_title": "Cooperation",
    "value3_desc": "Active interaction with employers and society.",
    "value4_title": "Development",
    "value4_desc": "Creating conditions for growth and self-realization for everyone.",
    "about_management_title": "College Management",
    "director_name": "Shermatov Avaz Alijanovich",
    "director_position": "College Director",
    "director_bio": "An experienced leader with many years of experience in education. Under his leadership, the college has achieved significant success in training qualified personnel.",
    "deputy_director1_name": "Deputy Director 1 Name Surname",
    "deputy_director1_position": "Deputy Director for Academic Affairs",
    "deputy_director1_bio": "Responsible for organizing the educational process, implementing new educational programs, and controlling the quality of education.",
    "deputy_director2_name": "Deputy Director 2 Name Surname",
    "deputy_director2_position": "Deputy Director for Educational Work",
    "deputy_director2_bio": "Organizes extracurricular activities for students, develops their creative abilities, and fosters an active civic position."
  }
};


// --- 2. Логика переключения языка ---
document.addEventListener('DOMContentLoaded', () => {
    const langSwitcherSelect = document.getElementById('language-switcher-select');
    const selectedFlag = document.getElementById('selected-flag');

    // Функция для применения переводов к элементам на странице
    function applyLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Translations for language '${lang}' not found.`);
            return;
        }

        // Обновление атрибута lang у html
        document.documentElement.lang = lang;

        // Обновление текстовых элементов
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.dataset.langKey;
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
                // Для placeholder, alt и title атрибутов
                if (element.placeholder !== undefined && key.includes('placeholder')) {
                    element.placeholder = translations[lang][key];
                }
                if (element.alt !== undefined && key.includes('alt')) { // Если alt также будет переводиться
                    element.alt = translations[lang][key];
                }
                if (element.title !== undefined && key.includes('title')) { // Если title также будет переводиться
                    element.title = translations[lang][key];
                }
            } else {
                console.warn(`Missing translation key: '${key}' for language '${lang}'`);
            }
        });

        // Обновление ссылок на соцсети (если текст ссылки - это название соцсети) - уже обрабатывается data-lang-key
        // document.querySelectorAll('.social-links a').forEach(link => { /* ... */ });
    }

    // Инициализация языка при загрузке страницы
    function initializeLanguage() {
        let currentLang = localStorage.getItem('selectedLang');

        // Если язык не выбран или некорректен, определяем его
        if (!currentLang || !translations[currentLang]) {
            // Попытка определить язык браузера
            const browserLang = navigator.language.split('-')[0]; // 'en-US' -> 'en'
            if (translations[browserLang]) {
                currentLang = browserLang;
            } else {
                currentLang = 'ru'; // Русский как дефолтный, если нет совпадений
            }
            localStorage.setItem('selectedLang', currentLang);
        }

        langSwitcherSelect.value = currentLang; // Устанавливаем выбранный язык в селекторе
        updateFlag(currentLang); // Обновляем флаг
        applyLanguage(currentLang); // Применяем переводы
    }

    // Функция для обновления флага
    function updateFlag(lang) {
        const option = langSwitcherSelect.querySelector(`option[value="${lang}"]`);
        if (option && option.dataset.flag) {
            selectedFlag.src = option.dataset.flag;
            selectedFlag.alt = `Flag of ${lang}`; // Обновляем alt текст флага
        }
    }

    // Слушаем изменение выбора языка
    langSwitcherSelect.addEventListener('change', (event) => {
        const newLang = event.target.value;
        localStorage.setItem('selectedLang', newLang); // Сохраняем новый язык
        updateFlag(newLang); // Обновляем флаг
        applyLanguage(newLang); // Применяем новый язык
    });

    // Запускаем инициализацию языка
    initializeLanguage();

    // --- 3. Дополнительные скрипты (например, для гамбургер-меню, если оно будет) ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active'); // Переключаем класс для показа/скрытия меню
            hamburgerMenu.querySelector('i').classList.toggle('fa-bars');
            hamburgerMenu.querySelector('i').classList.toggle('fa-times'); // Можно менять иконку
        });
        // Закрывать меню при клике на ссылку (если меню мобильное)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    hamburgerMenu.querySelector('i').classList.remove('fa-times');
                    hamburgerMenu.querySelector('i').classList.add('fa-bars');
                }
            });
        });
    }

});
