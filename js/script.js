document.addEventListener('DOMContentLoaded', () => {
    // === Переводы ===
    const translations = {
        "uz": {
            "page_title_home": "Bosh Sahifa - Kollej Nomi",
            "page_title_about": "Kollej haqida - Kollej Nomi",
            "page_title_programs": "Ta'lim Yo'nalishlari - Kollej Nomi",
            "page_title_applicants": "Abituriyentga - Kollej Nomi",
            "page_title_student_life": "Talaba Hayoti - Kollej Nomi",
            "page_title_contacts": "Kontaktlar - Kollej Nomi",

            "college_name": "Kollej Nomi",
            "nav_home": "Bosh Sahifa",
            "nav_about": "Kollej haqida",
            "nav_programs": "Ta'lim yo'nalishlari",
            "nav_applicants": "Abituriyentga",
            "nav_student_life": "Talaba hayoti",
            "nav_contacts": "Kontaktlar",

            "hero_title": "Bilim va Kasbga Birinchi Qadam!",
            "hero_subtitle": "Kelajagingizni biz bilan quring. O'zbekistonning eng yaxshi kasb-hunar kollejlaridan biri.",
            "hero_button_text": "Abituriyentga",

            "about_college_title": "Kollej haqida",
            "about_college_p1": "Bizning kollejimiz yosh mutaxassislarni tayyorlashda uzoq yillik tajribaga ega bo'lib, ta'lim standartlarini doimiy ravishda oshirib boradi. Bizning bitiruvchilarimiz zamonaviy mehnat bozorining ehtiyojlariga javob beradigan yuqori malakali mutaxassislar bo'lib etishadi.",
            "about_college_p2": "Kollejimizda o'quv jarayoni innovatsion texnologiyalar va amaliy ko'nikmalar rivojlantirishga qaratilgan eng so'nggi metodikalar asosida qurilgan. Biz har bir talabaning shaxsiy rivojlanishiga e'tibor qaratamiz, ularga o'z salohiyatlarini to'liq ochishga yordam beramiz.",
            "about_college_read_more": "Batafsil...",

            "features_title": "Bizning ustunliklarimiz",
            "feature1_title": "Sifatli ta'lim",
            "feature1_desc": "Tajribali o'qituvchilar va ilg'or o'quv dasturlari.",
            "feature2_title": "Zamonaviy jihozlar",
            "feature2_desc": "O'quv ustaxonalari va laboratoriyalar eng yangi texnologiyalar bilan jihozlangan.",
            "feature3_title": "Ishga joylashishga yordam",
            "feature3_desc": "Bitiruvchilarga yetakchi kompaniyalarda ish topishda yordam beramiz.",
            "feature4_title": "Qulay muhit",
            "feature4_desc": "Talabalar uchun qulay va qiziqarli o'quv muhiti.",

            "news_events_title": "Yangiliklar va Tadbirlar",
            "news1_title": "IT-park bilan hamkorlik",
            "news1_date": "2025 yil 15 iyul",
            "news1_desc": "Kollejimiz IT-Park bilan hamkorlik memorandumini imzoladi, bu talabalar uchun yangi imkoniyatlar ochadi.",
            "news2_title": "Kollej Kuni",
            "news2_date": "2025 yil 10 iyul",
            "news2_desc": "Kollejimiz tashkil topganining 20 yilligini nishonladi. Tadbirda ko'plab mehmonlar ishtirok etishdi.",
            "news3_title": "Sport Musobaqalari",
            "news3_date": "2025 yil 5 iyul",
            "news3_desc": "Talabalar o'rtasida o'tkazilgan sport musobaqalari bo'lib o'tdi. Eng kuchlilar g'alaba qozondi.",
            "news_read_more": "Batafsil o'qish",

            "footer_about_title": "Kollej haqida",
            "footer_about_text": "Bizning kollej kasb-hunar ta'limi sohasida yetakchi muassasalardan biri bo'lib, o'z sohasining malakali mutaxassislarini tayyorlashga intiladi.",
            "footer_links_title": "Tezkor havolalar",
            "footer_contact_title": "Kontaktlar",
            "footer_address": "Toshkent viloyati, Toytepa shahri, Guliston ko'chasi, 123",
            "footer_phone": "+998 (71) 123-45-67",
            "footer_email": "info@college.uz",
            "all_rights_reserved": "Barcha huquqlar himoyalangan.",

            // About.html specific
            "about_management_title": "Kollej ma'muriyati",
            "director_name": "Ismoilov Alisher Valeriyevich",
            "director_position": "Kollej direktori",
            "director_bio": "Uzoq yillik boshqaruv tajribasiga ega yetakchi, ta'lim sifatini oshirishga intiladi.",
            "deputy_director_yusupova_name": "Yusupova Feruza Zokir qizi",
            "deputy_director_yusupova_position": "O‘quv ishlari bo‘yicha direktor o‘rinbosari",
            "deputy_director_yusupova_bio": "Pedagogik faoliyatda boy tajribaga ega, o‘quv jarayonining yuqori sifatini ta’minlaydi va innovatsion metodikalarni joriy etadi.",
            "deputy_director1_name": "Abduvaliev Azizbek Xabibullaevich",
            "deputy_director1_position": "Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari",
            "deputy_director1_bio": "Yoshlarga e'tibor berish, madaniy va sport tadbirlarini rivojlantirishga qaratilgan.",
            "deputy_director2_name": "G'ulomova Dilshoda Botir qizi",
            "deputy_director2_position": "Amaliyot va ishlab chiqarish ta'limi bo'yicha direktor o'rinbosari",
            "deputy_director2_bio": "Talabalarning amaliy ko'nikmalarini shakllantirish va ularni ishga joylashtirishda yordam beradi.",

            // Programs.html specific
            "programs_page_title": "Ta'lim yo'nalishlari",
            "program_it_title": "Kompyuter muhandisligi",
            "program_it_desc": "Dasturlash, tarmoq texnologiyalari va kompyuter tizimlarini o'rganish.",
            "it_feature1": "Veb-ishlab chiqish",
            "it_feature2": "Tarmoq xavfsizligi",
            "it_feature3": "Dasturiy ta'minotni ishlab chiqish",
            "program_auto_title": "Avtomobil transport vositalarini ta'mirlash va xizmat ko'rsatish",
            "program_auto_desc": "Zamonaviy avtomobillarni diagnostika qilish va ta'mirlash bo'yicha bilim va ko'nikmalar.",
            "auto_feature1": "Dvigatel diagnostikasi",
            "auto_feature2": "Elektron tizimlar",
            "auto_feature3": "Xizmat ko'rsatish texnologiyalari",
            "program_electrician_title": "Elektr uskunalarini montaj qilish va ishlatish",
            "program_electrician_desc": "Sanoat va maishiy elektr tarmoqlari bilan ishlash bo'yicha mutaxassislar tayyorlash.",
            "electrician_feature1": "Elektr sxemalari",
            "electrician_feature2": "Kabel ishlari",
            "electrician_feature3": "Xavfsizlik qoidalari",
            "program_sewing_title": "Tikuvchilik ishi",
            "program_sewing_desc": "Zamonaviy tikuv uskunalarida ishlash va tikuvchilik mahsulotlarini ishlab chiqarish bo‘yicha o‘qitish.",
            "sewing_feature1": "Eng yangi tikuv texnologiyalari.",
            "sewing_feature2": "Dizayn va modellashtirish asoslari.",
            "sewing_feature3": "Tayyor mahsulotlar ishlab chiqarish amaliyoti.",
            "program_accounting_title": "Buxgalteriya hisobi",
            "program_accounting_desc": "Buxgalteriya, moliyaviy tahlil va audit asoslari.",
            "accounting_feature1": "Moliyaviy hisobot",
            "accounting_feature2": "Soliq qonunchiligi",
            "accounting_feature3": "1C dasturida ishlash",
            "program_learn_more": "Batafsil",

            // Applicants.html specific
            "admission_info_title": "Kollejga qabul",
            "admission_info_intro": "Kollejga hujjatlarni topshirish jarayoni haqida to'liq ma'lumot.",
            "admission_for_9th_grade_title": "9-sinfni tugatganlar uchun qabul",
            "admission_for_9th_grade_text": "9-sinfni tugatgan abituriyentlar uchun o‘qish davlat granti asosida olib boriladi.",
            "admission_9th_grade_grant": "O‘qish davlat granti asosida.",
            "admission_9th_grade_diploma": "O‘qishni tugatgandan so‘ng 3-darajali diplom beriladi.",
            "admission_for_11th_grade_title": "11-sinfni tugatganlar uchun qabul",
            "admission_for_11th_grade_text": "11-sinfni tugatgan abituriyentlar uchun o‘qish shartnoma asosida olib boriladi.",
            "admission_11th_grade_contract": "O‘qish shartnoma asosida.",
            "admission_11th_grade_diploma": "O‘qishni tugatgandan so‘ng 4-5 darajali diplom beriladi.",
            "forms_of_study_title": "Ta'lim shakllari",
            "form_of_study_full_time": "Kunduzgi ta'lim.",
            "form_of_study_dual": "Ayrim yo‘nalishlar uchun dual (ham amaliyot, ham nazariya) ta'lim.",
            "form_of_study_correspondence": "11-sinfni tugatganlar uchun ayrim yo‘nalishlarda sirtqi ta'lim.",
            "required_docs_title": "Kerakli hujjatlar",
            "doc_application": "Ariza (kollej formasi)",
            "doc_passport": "Pasport nusxasi (asli ko'rsatiladi)",
            "doc_education": "Ta'lim hujjatining asl nusxasi (attestat/diplom)",
            "doc_photo": "3x4 hajmdagi 6 dona rangli fotosurat",
            "doc_medical": "086-U shaklidagi tibbiy ma'lumotnoma",
            "doc_military": "Harbiy guvohnoma yoki chaqiruv varaqasi (o'g'il bolalar uchun)",
            "admission_dates_title": "Qabul muddatlari",
            "admission_dates_text": "Hujjatlar har yili 1-iyuldan 20-avgustgacha qabul qilinadi. Kirish imtihonlari avgust oyining ikkinchi yarmida o'tkaziladi.",
            "faq_title": "Tez-tez beriladigan savollar",
            "faq_q1": "Qabul uchun qanday talablar mavjud?",
            "faq_a1": "Kollejga 9 yoki 11-sinfni tugatgan abituriyentlar qabul qilinadi. Kirish imtihonlari va suhbat natijalariga ko'ra tanlov amalga oshiriladi.",
            "faq_q2": "Kollejda yotoqxona bormi?",
            "faq_a2_no_dorm": "Yo‘q, kollejda yotoqxona mavjud emas. Talabalar yashash joyini mustaqil ravishda topadilar.",
            "faq_q3": "O'qish narxi qancha?",
            "faq_a3": "Narxlar ta'lim yo'nalishi va shartnoma shartlariga bog'liq. Batafsil ma'lumotni qabul komissiyasidan olishingiz mumkin.",
            "contact_admission_title": "Qabul komissiyasi bilan bog'lanish",
            "contact_admission_text_telegram": "Agar sizda savollar qolgan bo‘lsa, bizning Telegram botimiz orqali bog‘lanishingiz mumkin:",
            "telegram_bot_link_text": "Telegram Bot",
            "telegram_bot_button_text": "Telegram Botimizga yozing",
            "form_label_name": "Ism familiyangiz:",
            "form_placeholder_name": "Ivanov Ivan Ivanovich",
            "form_label_email": "Elektron pochta:",
            "form_placeholder_email": "example@email.com",
            "form_label_phone": "Telefon raqami:",
            "form_placeholder_phone": "+998 XX XXX XX XX",
            "form_label_message": "Xabaringiz:",
            "form_placeholder_message": "Sizning savolingiz yoki xabaringiz...",
            "form_submit_button": "Yuborish",
            "form_success_message": "Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
            "form_error_message": "Xabar yuborishda xato yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.",


            // Student Life specific
            "student_life_title": "Talaba Hayoti",
            "student_life_intro": "Kollejimizda o'qish nafaqat bilim olish, balki qiziqarli va boy talaba hayotidir.",
            "events_activities_title": "Tadbirlar va Faoliyatlar",
            "events_activities_desc": "Biz talabalar uchun turli madaniy, sport va ilmiy tadbirlarni muntazam ravishda tashkil etamiz.",
            "club_website_creation_title": "Veb-saytlar yaratish to‘garagi", // Новое название
            "club_website_creation_desc": "Veb-dizayn va dasturlash asoslari, saytlarni ishlab chiqish.", // Новое описание
            "club_art_title": "San'at studiyasi",
            "club_art_desc": "Ijodiy qobiliyatlarni rivojlantirish: rasm chizish, dizayn.",
            "club_sport_title": "Sport seksiyalari",
            "club_sport_desc": "Futbol, basketbol, voleybol va boshqa sport turlari.",
            "student_council_title": "Talabalar Kengashi",
            "student_council_desc": "Kollej hayotida faol ishtirok etish imkoniyati, tashabbuslarni amalga oshirish.",
            "gallery_title": "Talaba Hayotidan Lavhalar",
            "gallery_text": "Bizning galereyamizda talabalarimizning yorqin va unutilmas lahzalarini ko'rishingiz mumkin.",

            // Contacts specific
            "contact_form_title": "Biz bilan bog‘lanish", // Заголовок формы теперь общий для связи
            "contact_form_intro_telegram": "Savollaringiz bo‘lsa, iltimos, bizning Telegram botimiz orqali bog‘laning. Biz sizga imkon qadar tezroq javob beramiz.",
        },
        "ru": {
            "page_title_home": "Главная - Название Колледжа",
            "page_title_about": "О Колледже - Название Колледжа",
            "page_title_programs": "Образовательные Программы - Название Колледжа",
            "page_title_applicants": "Абитуриенту - Название Колледжа",
            "page_title_student_life": "Студенческая Жизнь - Название Колледжа",
            "page_title_contacts": "Контакты - Название Колледжа",

            "college_name": "Название Колледжа",
            "nav_home": "Главная",
            "nav_about": "О колледже",
            "nav_programs": "Образовательные программы",
            "nav_applicants": "Абитуриенту",
            "nav_student_life": "Студенческая жизнь",
            "nav_contacts": "Контакты",

            "hero_title": "Ваш Первый Шаг к Знаниям и Профессии!",
            "hero_subtitle": "Постройте свое будущее с нами. Один из лучших профессиональных колледжей Узбекистана.",
            "hero_button_text": "Абитуриенту",

            "about_college_title": "О колледже",
            "about_college_p1": "Наш колледж имеет многолетний опыт в подготовке молодых специалистов, постоянно повышая стандарты образования. Наши выпускники становятся высококвалифицированными профессионалами, отвечающими запросам современного рынка труда.",
            "about_college_p2": "Учебный процесс в нашем колледже построен на основе инновационных технологий и новейших методик, направленных на развитие практических навыков. Мы уделяем внимание личностному росту каждого студента, помогая им полностью раскрыть свой потенциал.",
            "about_college_read_more": "Читать далее...",

            "features_title": "Наши преимущества",
            "feature1_title": "Качественное образование",
            "feature1_desc": "Опытные преподаватели и передовые учебные программы.",
            "feature2_title": "Современное оборудование",
            "feature2_desc": "Учебные мастерские и лаборатории оснащены новейшими технологиями.",
            "feature3_title": "Содействие трудоустройству",
            "feature3_desc": "Помогаем выпускникам найти работу в ведущих компаниях.",
            "feature4_title": "Комфортная среда",
            "feature4_desc": "Благоприятная и интересная учебная среда для студентов.",

            "news_events_title": "Новости и События",
            "news1_title": "Сотрудничество с IT-парком",
            "news1_date": "15 июля 2025 г.",
            "news1_desc": "Наш колледж подписал меморандум о сотрудничестве с IT-парком, открывая новые возможности для студентов.",
            "news2_title": "День Колледжа",
            "news2_date": "10 июля 2025 г.",
            "news2_desc": "Наш колледж отметил 20-летие со дня основания. На мероприятии присутствовало множество почетных гостей.",
            "news3_title": "Спортивные Соревнования",
            "news3_date": "5 июля 2025 г.",
            "news3_desc": "Состоялись ежегодные спортивные соревнования среди студентов. Победили сильнейшие.",
            "news_read_more": "Читать подробнее",

            "footer_about_title": "О колледже",
            "footer_about_text": "Наш колледж является одним из ведущих учреждений в сфере профессионального образования, стремящимся к подготовке высококвалифицированных специалистов своего дела.",
            "footer_links_title": "Быстрые ссылки",
            "footer_contact_title": "Контакты",
            "footer_address": "Ташкентская область, г. Тойтепа, ул. Гулистан, 123",
            "footer_phone": "+998 (71) 123-45-67",
            "footer_email": "info@college.uz",
            "all_rights_reserved": "Все права защищены.",

            // About.html specific
            "about_management_title": "Администрация колледжа",
            "director_name": "Исмаилов Алишер Валериевич",
            "director_position": "Директор колледжа",
            "director_bio": "Ведущий руководитель с многолетним опытом, стремящийся к повышению качества образования.",
            "deputy_director_yusupova_name": "Юсупова Феруза Зокир кизи",
            "deputy_director_yusupova_position": "Заместитель директора по учебной работе",
            "deputy_director_yusupova_bio": "Обладает богатым опытом в педагогической деятельности, обеспечивает высокое качество учебного процесса и внедряет инновационные методики.",
            "deputy_director1_name": "Абдувалиев Азизбек Хабибуллаевич",
            "deputy_director1_position": "Заместитель директора по духовно-просветительской работе",
            "deputy_director1_bio": "Уделяет внимание молодежи, развитию культурных и спортивных мероприятий.",
            "deputy_director2_name": "Гулямова Дилшода Ботир кизи",
            "deputy_director2_position": "Заместитель директора по практике и производственному обучению",
            "deputy_director2_bio": "Способствует формированию практических навыков студентов и их трудоустройству.",

            // Programs.html specific
            "programs_page_title": "Образовательные программы",
            "program_it_title": "Компьютерный инжиниринг",
            "program_it_desc": "Изучение программирования, сетевых технологий и компьютерных систем.",
            "it_feature1": "Веб-разработка",
            "it_feature2": "Сетевая безопасность",
            "it_feature3": "Разработка ПО",
            "program_auto_title": "Техническое обслуживание и ремонт автотранспортных средств",
            "program_auto_desc": "Знания и навыки в области диагностики и ремонта современных автомобилей.",
            "auto_feature1": "Диагностика двигателей",
            "auto_feature2": "Электронные системы",
            "auto_feature3": "Технологии обслуживания",
            "program_electrician_title": "Монтаж и эксплуатация электрооборудования",
            "program_electrician_desc": "Подготовка специалистов для работы с промышленными и бытовыми электросетями.",
            "electrician_feature1": "Электрические схемы",
            "electrician_feature2": "Кабельные работы",
            "electrician_feature3": "Правила безопасности",
            "program_sewing_title": "Швейное дело",
            "program_sewing_desc": "Обучение работе на современном швейном оборудовании и производству швейных изделий.",
            "sewing_feature1": "Новейшие швейные технологии.",
            "sewing_feature2": "Основы дизайна и моделирования.",
            "sewing_feature3": "Практика по изготовлению готовой продукции.",
            "program_accounting_title": "Бухгалтерский учет",
            "program_accounting_desc": "Основы бухгалтерии, финансового анализа и аудита.",
            "accounting_feature1": "Финансовая отчетность",
            "accounting_feature2": "Налоговое законодательство",
            "accounting_feature3": "Работа в 1С",
            "program_learn_more": "Узнать больше",

            // Applicants.html specific
            "admission_info_title": "Прием в колледж",
            "admission_info_intro": "Полная информация о процессе подачи документов в колледж.",
            "admission_for_9th_grade_title": "Прием для окончивших 9 классов",
            "admission_for_9th_grade_text": "Для абитуриентов, окончивших 9 классов, обучение осуществляется на основе государственного гранта.",
            "admission_9th_grade_grant": "Обучение на основе государственного гранта.",
            "admission_9th_grade_diploma": "По окончании обучения выдается диплом 3-го уровня.",
            "admission_for_11th_grade_title": "Прием для окончивших 11 классов",
            "admission_for_11th_grade_text": "Для абитуриентов, окончивших 11 классов, обучение осуществляется на контрактной основе.",
            "admission_11th_grade_contract": "Обучение на контрактной основе.",
            "admission_11th_grade_diploma": "По окончании обучения выдается диплом 4-5 уровня.",
            "forms_of_study_title": "Формы обучения",
            "form_of_study_full_time": "Очное обучение.",
            "form_of_study_dual": "Дуальная форма обучения для некоторых направлений (сочетание практики и теории).",
            "form_of_study_correspondence": "Заочное обучение для некоторых направлений для окончивших 11 классов.",
            "required_docs_title": "Необходимые документы",
            "doc_application": "Заявление (форма колледжа)",
            "doc_passport": "Копия паспорта (оригинал предъявляется)",
            "doc_education": "Оригинал документа об образовании (аттестат/диплом)",
            "doc_photo": "6 цветных фотографий размером 3x4 см",
            "doc_medical": "Медицинская справка по форме 086-У",
            "doc_military": "Военный билет или приписное свидетельство (для юношей)",
            "admission_dates_title": "Сроки приема",
            "admission_dates_text": "Прием документов осуществляется ежегодно с 1 июля по 20 августа. Вступительные испытания проводятся во второй половине августа.",
            "faq_title": "Часто задаваемые вопросы",
            "faq_q1": "Какие требования для поступления?",
            "faq_a1": "В колледж принимаются абитуриенты, окончившие 9 или 11 классов. Отбор осуществляется по результатам вступительных экзаменов и собеседования.",
            "faq_q2": "Есть ли общежитие в колледже?",
            "faq_a2_no_dorm": "Нет, общежитие в колледже не предусмотрено. Студенты самостоятельно находят жилье.",
            "faq_q3": "Какова стоимость обучения?",
            "faq_a3": "Стоимость обучения зависит от выбранной специальности и условий контракта. Подробную информацию можно получить в приемной комиссии.",
            "contact_admission_title": "Связь с приемной комиссией",
            "contact_admission_text_telegram": "Если у вас остались вопросы, вы можете связаться с нами через наш Telegram-бот:",
            "telegram_bot_link_text": "Telegram Бот",
            "telegram_bot_button_text": "Написать в Telegram-бот",
            "form_label_name": "Ваше ФИО:",
            "form_placeholder_name": "Иванов Иван Иванович",
            "form_label_email": "Электронная почта:",
            "form_placeholder_email": "example@email.com",
            "form_label_phone": "Номер телефона:",
            "form_placeholder_phone": "+998 XX XXX XX XX",
            "form_label_message": "Ваше сообщение:",
            "form_placeholder_message": "Ваш вопрос или сообщение...",
            "form_submit_button": "Отправить",
            "form_success_message": "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.",
            "form_error_message": "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз позже.",

            // Student Life specific
            "student_life_title": "Студенческая Жизнь",
            "student_life_intro": "Обучение в нашем колледже — это не только получение знаний, но и интересная, насыщенная студенческая жизнь.",
            "events_activities_title": "События и Активности",
            "events_activities_desc": "Мы регулярно организуем разнообразные культурные, спортивные и научные мероприятия для студентов.",
            "club_website_creation_title": "Кружок по созданию сайтов", // Новое название
            "club_website_creation_desc": "Основы веб-дизайна и программирования, разработка сайтов.", // Новое описание
            "club_art_title": "Арт-студия",
            "club_art_desc": "Развитие творческих способностей: рисование, дизайн.",
            "club_sport_title": "Спортивные секции",
            "club_sport_desc": "Футбол, баскетбол, волейбол и другие виды спорта.",
            "student_council_title": "Студенческий Совет",
            "student_council_desc": "Возможность активно участвовать в жизни колледжа, реализовывать свои инициативы.",
            "gallery_title": "Моменты Студенческой Жизни",
            "gallery_text": "В нашей галерее вы можете увидеть яркие и незабываемые моменты из жизни наших студентов.",

            // Contacts specific
            "contact_form_title": "Связь с нами", // Заголовок формы теперь общий для связи
            "contact_form_intro_telegram": "Пожалуйста, свяжитесь с нами через наш Telegram-бот, если у вас есть вопросы. Мы ответим вам как можно скорее.",
        },
        "en": {
            "page_title_home": "Home - College Name",
            "page_title_about": "About College - College Name",
            "page_title_programs": "Educational Programs - College Name",
            "page_title_applicants": "For Applicants - College Name",
            "page_title_student_life": "Student Life - College Name",
            "page_title_contacts": "Contacts - College Name",

            "college_name": "College Name",
            "nav_home": "Home",
            "nav_about": "About College",
            "nav_programs": "Educational Programs",
            "nav_applicants": "For Applicants",
            "nav_student_life": "Student Life",
            "nav_contacts": "Contacts",

            "hero_title": "Your First Step to Knowledge and Profession!",
            "hero_subtitle": "Build your future with us. One of the best professional colleges in Uzbekistan.",
            "hero_button_text": "For Applicants",

            "about_college_title": "About College",
            "about_college_p1": "Our college has many years of experience in training young specialists, constantly raising educational standards. Our graduates become highly qualified professionals who meet the demands of the modern labor market.",
            "about_college_p2": "The educational process at our college is built on the basis of innovative technologies and the latest methods aimed at developing practical skills. We pay attention to the personal growth of each student, helping them fully realize their potential.",
            "about_college_read_more": "Read More...",

            "features_title": "Our Advantages",
            "feature1_title": "Quality Education",
            "feature1_desc": "Experienced teachers and advanced curricula.",
            "feature2_title": "Modern Equipment",
            "feature2_desc": "Training workshops and laboratories are equipped with the latest technologies.",
            "feature3_title": "Employment Assistance",
            "feature3_desc": "We help graduates find jobs in leading companies.",
            "feature4_title": "Comfortable Environment",
            "feature4_desc": "A comfortable and engaging learning environment for students.",

            "news_events_title": "News and Events",
            "news1_title": "Cooperation with IT Park",
            "news1_date": "July 15, 2025",
            "news1_desc": "Our college signed a memorandum of cooperation with IT Park, opening new opportunities for students.",
            "news2_title": "College Day",
            "news2_date": "July 10, 2025",
            "news2_desc": "Our college celebrated its 20th anniversary. Many honored guests attended the event.",
            "news3_title": "Sports Competitions",
            "news3_date": "July 5, 2025",
            "news3_desc": "Annual sports competitions among students were held. The strongest won.",
            "news_read_more": "Read more",

            "footer_about_title": "About College",
            "footer_about_text": "Our college is one of the leading institutions in vocational education, striving to train highly qualified specialists in their field.",
            "footer_links_title": "Quick Links",
            "footer_contact_title": "Contacts",
            "footer_address": "Gulistan Street, 123, Toytepa, Tashkent Region",
            "footer_phone": "+998 (71) 123-45-67",
            "footer_email": "info@college.uz",
            "all_rights_reserved": "All rights reserved.",

            // About.html specific
            "about_management_title": "College Administration",
            "director_name": "Ismailov Alisher Valerievich",
            "director_position": "College Director",
            "director_bio": "A leading manager with many years of experience, striving to improve the quality of education.",
            "deputy_director_yusupova_name": "Yusupova Feruza Zokir qizi",
            "deputy_director_yusupova_position": "Deputy Director for Academic Affairs",
            "deputy_director_yusupova_bio": "Possesses extensive experience in pedagogical activities, ensures high quality of the educational process, and implements innovative methodologies.",
            "deputy_director1_name": "Abduvaliev Azizbek Khabibullaevich",
            "deputy_director1_position": "Deputy Director for Spiritual and Educational Work",
            "deputy_director1_bio": "Focuses on youth, development of cultural and sports events.",
            "deputy_director2_name": "Gulyamova Dilshoda Botir qizi",
            "deputy_director2_position": "Deputy Director for Practical Training and Production Education",
            "deputy_director2_bio": "Contributes to the formation of practical skills of students and their employment.",

            // Programs.html specific
            "programs_page_title": "Educational Programs",
            "program_it_title": "Computer Engineering",
            "program_it_desc": "Study of programming, network technologies, and computer systems.",
            "it_feature1": "Web Development",
            "it_feature2": "Network Security",
            "it_feature3": "Software Development",
            "program_auto_title": "Maintenance and Repair of Motor Vehicles",
            "program_auto_desc": "Knowledge and skills in diagnostics and repair of modern automobiles.",
            "auto_feature1": "Engine Diagnostics",
            "auto_feature2": "Electronic Systems",
            "auto_feature3": "Service Technologies",
            "program_electrician_title": "Installation and Operation of Electrical Equipment",
            "program_electrician_desc": "Training specialists for work with industrial and household electrical networks.",
            "electrician_feature1": "Electrical Circuits",
            "electrician_feature2": "Cable Works",
            "electrician_feature3": "Safety Regulations",
            "program_sewing_title": "Sewing",
            "program_sewing_desc": "Training in working with modern sewing machines and manufacturing textile products.",
            "sewing_feature1": "Latest sewing technologies.",
            "sewing_feature2": "Fundamentals of design and modeling.",
            "sewing_feature3": "Practical experience in finished product manufacturing.",
            "program_accounting_title": "Accounting",
            "program_accounting_desc": "Fundamentals of accounting, financial analysis, and auditing.",
            "accounting_feature1": "Financial Reporting",
            "accounting_feature2": "Tax Legislation",
            "accounting_feature3": "Working in 1C",
            "program_learn_more": "Learn More",

            // Applicants.html specific
            "admission_info_title": "College Admission",
            "admission_info_intro": "Complete information about the application process to the college.",
            "admission_for_9th_grade_title": "Admission for 9th Grade Graduates",
            "admission_for_9th_grade_text": "For applicants who have completed 9th grade, education is provided on a state grant basis.",
            "admission_9th_grade_grant": "Education on a state grant basis.",
            "admission_9th_grade_diploma": "Upon completion of studies, a Level 3 diploma is issued.",
            "admission_for_11th_grade_title": "Admission for 11th Grade Graduates",
            "admission_for_11th_grade_text": "For applicants who have completed 11th grade, education is provided on a contract basis.",
            "admission_11th_grade_contract": "Education on a contract basis.",
            "admission_11th_grade_diploma": "Upon completion of studies, a Level 4-5 diploma is issued.",
            "forms_of_study_title": "Forms of Study",
            "form_of_study_full_time": "Full-time study.",
            "form_of_study_dual": "Dual education for some directions (combination of practice and theory).",
            "form_of_study_correspondence": "Correspondence (part-time) education for some directions for 11th grade graduates.",
            "required_docs_title": "Required Documents",
            "doc_application": "Application (college form)",
            "doc_passport": "Copy of passport (original to be shown)",
            "doc_education": "Original education document (certificate/diploma)",
            "doc_photo": "6 color photos, 3x4 cm",
            "doc_medical": "Medical certificate form 086-U",
            "doc_military": "Military ID or conscription certificate (for boys)",
            "admission_dates_title": "Admission Dates",
            "admission_dates_text": "Document acceptance is held annually from July 1 to August 20. Entrance exams are conducted in the second half of August.",
            "faq_title": "Frequently Asked Questions",
            "faq_q1": "What are the admission requirements?",
            "faq_a1": "Applicants who have completed 9th or 11th grade are accepted to the college. Selection is based on the results of entrance exams and interviews.",
            "faq_q2": "Is there a dormitory at the college?",
            "faq_a2_no_dorm": "No, dormitory accommodation is not provided at the college. Students find accommodation independently.",
            "faq_q3": "What is the tuition fee?",
            "faq_a3": "Tuition fees depend on the chosen specialty and contract terms. Detailed information can be obtained from the admissions committee.",
            "contact_admission_title": "Contact Admissions Committee",
            "contact_admission_text_telegram": "If you have any remaining questions, you can contact us via our Telegram bot:",
            "telegram_bot_link_text": "Telegram Bot",
            "telegram_bot_button_text": "Message our Telegram Bot",
            "form_label_name": "Your Full Name:",
            "form_placeholder_name": "John Doe",
            "form_label_email": "Email:",
            "form_placeholder_email": "example@email.com",
            "form_label_phone": "Phone Number:",
            "form_placeholder_phone": "+998 XX XXX XX XX",
            "form_label_message": "Your Message:",
            "form_placeholder_message": "Your question or message...",
            "form_submit_button": "Send",
            "form_success_message": "Your message has been sent successfully! We will contact you shortly.",
            "form_error_message": "An error occurred while sending your message. Please try again later.",

            // Student Life specific
            "student_life_title": "Student Life",
            "student_life_intro": "Studying at our college is not only about gaining knowledge but also about an interesting and rich student life.",
            "events_activities_title": "Events and Activities",
            "events_activities_desc": "We regularly organize various cultural, sports, and scientific events for students.",
            "club_website_creation_title": "Website Creation Club", // New name
            "club_website_creation_desc": "Fundamentals of web design and programming, website development.", // New description
            "club_art_title": "Art Studio",
            "club_art_desc": "Development of creative abilities: drawing, design.",
            "club_sport_title": "Sports Sections",
            "club_sport_desc": "Football, basketball, volleyball, and other sports.",
            "student_council_title": "Student Council",
            "student_council_desc": "Opportunity to actively participate in college life, implement initiatives.",
            "gallery_title": "Moments of Student Life",
            "gallery_text": "In our gallery you can see bright and unforgettable moments from the life of our students.",

            // Contacts specific
            "contact_form_title": "Contact Us", // Form title is now general for contact
            "contact_form_intro_telegram": "Please contact us via our Telegram bot if you have any questions. We will respond as soon as possible.",
        }
    };

    // === Функция для применения переводов ===
    const applyTranslations = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translations[lang][key]);
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        document.title = translations[lang][document.body.getAttribute('data-page-title-key') || 'page_title_home']; // Обновляем заголовок страницы
        updateCurrentFlag(lang);
    };

    // === Обновление флага в селекторе языка ===
    const updateCurrentFlag = (lang) => {
        const currentFlag = document.getElementById('current-flag');
        if (currentFlag) {
            currentFlag.src = `images/flags/${lang}.svg`;
            currentFlag.alt = `${lang.toUpperCase()} Flag`;
        }
    };

    // === Логика для выбора языка ===
    const languageSelector = document.querySelector('.language-selector');
    const languageDropdown = document.querySelector('.language-dropdown');

    if (languageSelector && languageDropdown) {
        languageSelector.addEventListener('click', (event) => {
            event.stopPropagation(); // Предотвращаем закрытие при клике внутри селектора
            languageDropdown.classList.toggle('show');
        });

        languageDropdown.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (event) => {
                event.preventDefault();
                const selectedLang = option.getAttribute('data-lang');
                localStorage.setItem('selectedLang', selectedLang);
                applyTranslations(selectedLang);
                languageDropdown.classList.remove('show');
            });
        });

        // Закрываем выпадающий список при клике вне его
        document.addEventListener('click', (event) => {
            if (!languageSelector.contains(event.target)) {
                languageDropdown.classList.remove('show');
            }
        });
    }

    // === Инициализация языка при загрузке страницы ===
    const savedLang = localStorage.getItem('selectedLang') || 'ru'; // По умолчанию русский
    applyTranslations(savedLang);

    // Устанавливаем data-page-title-key для каждой страницы
    const path = window.location.pathname;
    let pageTitleKey = 'page_title_home'; // По умолчанию для index.html
    if (path.includes('about.html')) {
        pageTitleKey = 'page_title_about';
    } else if (path.includes('programs.html')) {
        pageTitleKey = 'page_title_programs';
    } else if (path.includes('applicants.html')) {
        pageTitleKey = 'page_title_applicants';
    } else if (path.includes('student_life.html')) {
        pageTitleKey = 'page_title_student_life';
    } else if (path.includes('contacts.html')) {
        pageTitleKey = 'page_title_contacts';
    }
    document.body.setAttribute('data-page-title-key', pageTitleKey);
    applyTranslations(savedLang); // Повторный вызов для обновления заголовка страницы

    // === Логика гамбургер-меню ===
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Закрываем меню при клике на пункт меню (для мобильных)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }

    // === Логика FAQ (для applicants.html) ===
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');

            // Закрыть все открытые ответы, кроме текущей
            document.querySelectorAll('.faq-answer.open').forEach(openAnswer => {
                if (openAnswer !== answer) {
                    openAnswer.classList.remove('open');
                    openAnswer.previousElementSibling.querySelector('i').classList.remove('active');
                }
            });

            answer.classList.toggle('open');
            icon.classList.toggle('active');
        });
    });

    // === Обработка формы абитуриентов (applicants.html) ===
    const applicantForm = document.getElementById('applicant-contact-form');
    if (applicantForm) {
        applicantForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем стандартную отправку формы

            const statusMessageElement = this.querySelector('#form-status-message');
            statusMessageElement.style.display = 'none'; // Скрываем предыдущее сообщение
            statusMessageElement.classList.remove('success', 'error'); // Очищаем классы

            const formData = new FormData(this); // Собираем данные формы

            // Здесь будет AJAX-запрос на ваш PHP-скрипт или сервис EmailJS/Formspree
            // Пример с fetch (для PHP-скрипта send_email.php, который вы должны создать)
            fetch('send_email.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                statusMessageElement.style.display = 'block';
                if (data.status === 'success') {
                    statusMessageElement.textContent = translations[localStorage.getItem('selectedLang') || 'ru'].form_success_message;
                    statusMessageElement.classList.add('success');
                    applicantForm.reset(); // Очищаем форму при успехе
                } else {
                    statusMessageElement.textContent = data.message || translations[localStorage.getItem('selectedLang') || 'ru'].form_error_message;
                    statusMessageElement.classList.add('error');
                }
            })
            .catch(error => {
                console.error('Ошибка при отправке формы:', error);
                statusMessageElement.style.display = 'block';
                statusMessageElement.textContent = translations[localStorage.getItem('selectedLang') || 'ru'].form_error_message;
                statusMessageElement.classList.add('error');
            });
        });
    }

});
