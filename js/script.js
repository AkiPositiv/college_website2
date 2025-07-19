document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher-select');
    const selectedFlag = document.getElementById('selected-flag');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav ul');

    // Объект с переводами
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
            "footer_copyright": "© 2025 O‘rta Chirchiq tumani 2-sonli Politexnika kolleji. Barcha huquqlar himoyalangan.",
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
            "deputy_director2_bio": "Talabalarning darsdan tashqari faoliyatini tashkil etadi, ularning ijodiy qobiliyatlarini rivojlantiradi va faol fuqarolik pozitsiyasini shakllantiradi.",
            "page_title_applicants": "Abituriyentga - O‘rta Chirchiq tumani 2-sonli Politexnika kolleji",
            "applicants_page_title": "Abituriyentga",
            "admission_info_title": "Qabul haqida ma'lumot",
            "admission_info_intro": "O‘rta Chirchiq tumani 2-sonli Politexnika kolleji abituriyentlar sahifasiga xush kelibsiz! Bu yerda kollejimizga muvaffaqiyatli kirish uchun barcha kerakli ma'lumotlarni topasiz.",
            "admission_conditions_title": "Qabul shartlari",
            "admission_conditions_text": "Kollejga qabul attestatlar (yoki diplomlar) tanlovi va muayyan mutaxassisliklar bo‘yicha kirish imtihonlari (agar kerak bo‘lsa) natijalari asosida amalga oshiriladi. Kirish ballari va tanlov mezonlari haqida batafsil ma'lumotni qabul komissiyasidan olishingiz mumkin.",
            "required_docs_title": "Kerakli hujjatlar",
            "doc_application": "Kollej direktori nomiga ariza (hujjatlarni topshirishda to‘ldiriladi).",
            "doc_passport": "Pasport yoki tug‘ilish guvohnomasining nusxasi (asl nusxasi ko‘rsatiladi).",
            "doc_education": "Ta'lim to‘g‘risidagi hujjatning asl nusxasi (attestat, diplom).",
            "doc_photo": "6 ta 3x4 sm hajmdagi fotosurat.",
            "doc_medical": "Tibbiy ma'lumotnoma (086/U shakli).",
            "doc_military": "Harbiy hisobga olish guvohnomasi yoki harbiy bilet (o‘g‘il bolalar uchun).",
            "admission_dates_title": "Hujjatlarni qabul qilish muddatlari",
            "admission_dates_text": "Hujjatlar odatda joriy yilning **10-iyulidan** boshlab **10-avgustigacha** qabul qilinadi. Dolzarb ma'lumotlar uchun veb-saytimizdagi e’lonlarni kuzatib borishingizni tavsiya etamiz.",
            "faq_title": "Tez-tez beriladigan savollar (FAQ)",
            "faq_q1": "Kollejda o‘qitishning asosiy yo‘nalishlari qanday?",
            "faq_a1": "Kollejimiz Axborot texnologiyalari, Avtomobil ishi, Elektrotexnika, Buxgalteriya hisobi va boshqa talab yuqori bo‘lgan yo‘nalishlarda ta'lim taklif etadi. Mutaxassisliklarning to‘liq ro‘yxati \"Mutaxassisliklar\" sahifasida mavjud.",
            "faq_q2": "Boshqa shahardan kelgan talabalarga yotoqxona beriladimi?",
            "faq_a2": "Ha, boshqa shahardan kelgan talabalar uchun kollej yotoqxonasida bo‘sh joylar mavjud bo‘lganda yashash imkoniyati beriladi. Batafsil ma'lumotni qabul komissiyasidan olishingiz mumkin.",
            "faq_q3": "Pullik asosda ta'lim olish imkoniyati bormi?",
            "faq_a3": "Ha, kollejda byudjet va pullik asosda ta'lim olish imkoniyati mavjud. O‘qish narxi va to‘lov shartlarini qabul komissiyasidan bilib oling.",
            "contact_admission_title": "Qabul komissiyasi bilan bog‘lanish",
            "contact_admission_text": "Agar sizda savollar qolgan bo‘lsa, quyidagi aloqa shakli orqali yoki \"Aloqa\" bo‘limida ko‘rsatilgan telefon/elektron pochta orqali biz bilan bog‘lanishingiz mumkin.",
            "form_label_name": "To'liq ismingiz:",
            "form_placeholder_name": "Ivanov Ivan Ivanovich",
            "form_label_email": "Elektron pochtangiz:",
            "form_placeholder_email": "misol@email.com",
            "form_label_phone": "Telefon raqamingiz:",
            "form_placeholder_phone": "+998 XX XXX XX XX",
            "form_label_message": "Savolingiz:",
            "form_placeholder_message": "Savolingizni bu yerga yozing...",
            "form_submit_button": "Xabar yuborish",
            "form_success_message": "Sizning xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz!",
            "form_error_message": "Xabar yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.",
            "page_title_programs": "Mutaxassisliklar - O‘rta Chirchiq tumani 2-sonli Politexnika kolleji",
            "programs_page_title": "Mutaxassisliklar",
            "programs_intro_title": "Bizning ta'lim dasturlarimiz",
            "programs_intro_text": "O‘rta Chirchiq tumani 2-sonli Politexnika kolleji iqtisodiyotning turli sohalari uchun malakali mutaxassislarni tayyorlashga qaratilgan keng doiradagi talab yuqori bo‘lgan mutaxassisliklarni taklif etadi. Biz o‘quv rejalarimizni mehnat bozorining zamonaviy talablariga mos kelishi uchun doimiy yangilab boramiz.",
            "program_it_title": "Axborot texnologiyalari",
            "program_it_desc": "Dasturiy ta'minotni ishlab chiqish, tarmoq ma’muriyati va kiberxavfsizlik bo‘yicha mutaxassislarni tayyorlash.",
            "it_feature1": "Zamonaviy dasturlash tillari.",
            "it_feature2": "Amaliy loyihalar va stajirovkalar.",
            "it_feature3": "IT-industriyadagi dolzarb tendensiyalar.",
            "program_auto_title": "Avtomobil ishi",
            "program_auto_desc": "Zamonaviy avtomobillarni diagnostika qilish, ta’mirlash va texnik xizmat ko‘rsatish bo‘yicha o‘qitish.",
            "auto_feature1": "Zamonaviy uskunalar bilan ishlash.",
            "auto_feature2": "Avtoservisda amaliyot.",
            "auto_feature3": "Avtomobil elektronikasi bo‘yicha o‘qish.",
            "program_electrician_title": "Elektrotexnika",
            "program_electrician_desc": "Elektr uskunalarini o‘rnatish, ishlatish va ta’mirlash bo‘yicha mutaxassislarni tayyorlash.",
            "electrician_feature1": "Elektr tarmoqlari bilan ishlash ko‘nikmalari.",
            "electrician_feature2": "Sanoat avtomatizatsiyasi asoslari.",
            "electrician_feature3": "Elektr montaj ishlarining xavfsizligi.",
            "program_accounting_title": "Buxgalteriya hisobi",
            "program_accounting_desc": "Moliyaviy hisob, audit va soliqqa tortish asoslarini o‘rganish.",
            "accounting_feature1": "1S:Buxgalteriya bilan ishlash.",
            "accounting_feature2": "Moliyaviy faoliyat tahlili.",
            "accounting_feature3": "Moliyaviy hisobotni tayyorlash.",
            "program_learn_more": "Batafsil ma'lumot",
            "all_programs_cta": "Barcha mutaxassisliklar ro‘yxati va har bir dastur haqida batafsil ma'lumotni qabul komissiyasida yoki biz bilan bog‘lanib olishingiz mumkin.",
            "all_programs_text": "To‘liq ro‘yxat va batafsil ma'lumotni bu yerda olish mumkin.",
            "page_title_student_life": "Talabalar hayoti - O‘rta Chirchiq tumani 2-sonli Politexnika kolleji",
            "student_life_page_title": "Talabalar hayoti",
            "student_life_intro_title": "Faqat o‘qishdan ko‘proq",
            "student_life_intro_text": "O‘rta Chirchiq tumani 2-sonli Politexnika kollejida biz talabalar hayoti nafaqat ta’limga yo‘naltirilgan, balki qiziqarli, xilma-xil va yorqin lahzalarga boy bo‘lishi kerak deb hisoblaymiz. Biz talabalarimizning har tomonlama rivojlanishi uchun sharoit yaratamiz, darsdan tashqari tadbirlar, to‘garaklar va sport seksiyalarining keng doirasini taklif etamiz.",
            "events_activities_title": "Tadbirlar va faoliyatlar",
            "events_activities_text": "Kollejimiz muntazam ravishda turli madaniy, ilmiy va ko‘ngilochar tadbirlarni tashkil etadi. Bular tanlovlar, festivallar, mavzuli kechalar, fan olimpiadalari, mahorat darslari va boshqalar bo‘lishi mumkin. Biz har bir talaba o‘ziga yoqadigan narsani topa olishi va o‘z iste’dodlarini ro‘yobga chiqarishi uchun intilamiz.",
            "activity1": "Har yili o‘tkaziladigan \"Birinchi kurs talabalari kuni\" va \"Kollej bahori\" talabalar festivallari.",
            "activity2": "\"Nima? Qayerda? Qachon?\", KVZ intellektual o‘yinlari.",
            "activity3": "Korxonalar va muzeylarga ekskursiyalar.",
            "activity4": "Shahar va mintaqaviy tadbirlarda ishtirok etish.",
            "clubs_sections_title": "To‘garaklar va seksiyalar",
            "clubs_sections_text": "Talabalarning ijodiy, sport va ilmiy qobiliyatlarini rivojlantirish uchun kollejda turli to‘garaklar va seksiyalar faoliyat ko‘rsatadi:",
            "club_robotics_title": "Robototexnika to‘garagi",
            "club_robotics_desc": "Robotlarni ishlab chiqish va dasturlash.",
            "club_art_title": "Ijodiy studiya",
            "club_art_desc": "Rassomlik, dizayn, amaliy san’at.",
            "club_sport_title": "Sport seksiyalari",
            "club_sport_desc": "Futbol, basketbol, voleybol, stol tennisi.",
            "club_vocal_title": "Vokal-instrumental ansambl",
            "club_vocal_desc": "Musiqiy iste’dodlarni rivojlantirish.",
            "gallery_title": "Talabalar hayoti galereyasi",
            "gallery_caption1": "O‘qituvchilar kuni munosabati bilan konsert.",
            "gallery_caption2": "Futbol bo‘yicha sport musobaqalari.",
            "gallery_caption3": "Tuman olimpiadasida ishtirok etish.",
            "gallery_caption4": "Mashg‘ulotlar \"Ijodiy studiya\"da.",
            "page_title_contacts": "Aloqa - O‘rta Chirchiq tumani 2-sonli Politexnika kolleji",
            "contacts_page_title": "Aloqa",
            "contact_us_title": "Biz bilan bog‘laning",
            "contact_us_intro": "Biz har doim savollaringizga javob berishga tayyormiz. Biz bilan istalgan qulay usulda bog‘lanishingiz yoki kollejimizga tashrif buyurishingiz mumkin.",
            "contact_address_title": "Manzil",
            "contact_address_text": "O‘rta Chirchiq tumani, 2-sonli Politexnika kolleji",
            "contact_phone_title": "Telefon",
            "contact_phone_text": "+998 (XX) XXX-XX-XX",
            "contact_phone_admission_text": "Qabul komissiyasi: +998 (XX) XXX-XX-XY",
            "contact_email_title": "Elektron pochta",
            "contact_email_text": "info@college.uz",
            "contact_email_admission_text": "Qabul komissiyasi: admission@college.uz",
            "contact_hours_title": "Ish vaqti",
            "contact_hours_text": "Dush-Juma: 09:00 - 18:00",
            "contact_hours_weekend_text": "Shan-Yak: Dam olish kuni",
            "location_map_title": "Google Xaritasidagi joylashuvimiz",
            "location_map_text": "Bizni quyidagi Google Xaritasidan topishingiz mumkin.",
            "contact_form_title": "Bizga xabar yuboring",
            "contact_form_intro_text": "Bizga xabar yuborish uchun quyidagi shakldan foydalaning. Biz sizga imkon qadar tezroq javob beramiz.",
            "deputy_director_yusupova_name": "Yusupova Feruza Zokir qizi",
            "deputy_director_yusupova_position": "O‘quv ishlari bo‘yicha direktor o‘rinbosari",
            "deputy_director_yusupova_bio": "Pedagogik faoliyatda boy tajribaga ega, o‘quv jarayonining yuqori sifatini ta’minlaydi va innovatsion metodikalarni joriy etadi.",

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
            "footer_copyright": "© 2025 Урта-Чирчикский районный Политехнический колледж №2. Все права защищены.",
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
            "deputy_director2_bio": "Организует внеучебную деятельность студентов, развивает их творческие способности и формирует активную гражданскую позицию.",
            "page_title_applicants": "Абитуриенту - Урта-Чирчикский Политехнический Колледж №2",
            "applicants_page_title": "Абитуриенту",
            "admission_info_title": "Информация для поступления",
            "admission_info_intro": "Мы рады приветствовать вас на странице для абитуриентов Урта-Чирчикского районного Политехнического колледжа №2! Здесь вы найдете всю необходимую информацию для успешного поступления в наш колледж.",
            "admission_conditions_title": "Условия приема",
            "admission_conditions_text": "Прием в колледж осуществляется на основании конкурса аттестатов (или дипломов) и результатов вступительных испытаний по определенным специальностям (при необходимости). Подробную информацию о проходных баллах и критериях отбора можно получить в приемной комиссии.",
            "required_docs_title": "Необходимые документы",
            "doc_application": "Заявление на имя директора колледжа (заполняется при подаче документов).",
            "doc_passport": "Копия паспорта или свидетельства о рождении (оригинал предъявляется).",
            "doc_education": "Оригинал документа об образовании (аттестат, диплом).",
            "doc_photo": "6 фотографий размером 3х4 см.",
            "doc_medical": "Медицинская справка (форма 086/у).",
            "doc_military": "Приписное свидетельство или военный билет (для юношей).",
            "admission_dates_title": "Сроки приема документов",
            "admission_dates_text": "Прием документов обычно начинается с **10 июля** и продолжается до **10 августа** текущего года. Рекомендуем следить за объявлениями на нашем сайте для получения актуальной информации.",
            "faq_title": "Часто задаваемые вопросы (FAQ)",
            "faq_q1": "Каковы основные направления обучения в колледже?",
            "faq_a1": "Наш колледж предлагает обучение по таким востребованным направлениям, как Информационные технологии, Автомобильное дело, Электротехника, Бухгалтерский учет и другим. Полный список специальностей доступен на странице \"Специальности\".",
            "faq_q2": "Предоставляется ли общежитие иногородним студентам?",
            "faq_a2": "Да, для иногородних студентов предоставляется возможность проживания в общежитии колледжа при наличии свободных мест. Подробности можно узнать в приемной комиссии.",
            "faq_q3": "Есть ли возможность получения образования на платной основе?",
            "faq_a3": "Да, в колледже предусмотрено обучение как на бюджетной, так и на платной основе. Стоимость обучения и условия оплаты уточняйте в приемной комиссии.",
            "contact_admission_title": "Связаться с приемной комиссией",
            "contact_admission_text": "Если у вас остались вопросы, вы можете связаться с нами через форму обратной связи ниже или по телефону/email, указанным в разделе \"Контакты\".",
            "form_label_name": "Ваше ФИО:",
            "form_placeholder_name": "Иванов Иван Иванович",
            "form_label_email": "Ваш Email:",
            "form_placeholder_email": "example@email.com",
            "form_label_phone": "Ваш телефон:",
            "form_placeholder_phone": "+998 XX XXX XX XX",
            "form_label_message": "Ваш вопрос:",
            "form_placeholder_message": "Напишите ваш вопрос здесь...",
            "form_submit_button": "Отправить сообщение",
            "form_success_message": "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.",
            "form_error_message": "Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз позже.",
            "page_title_programs": "Специальности - Урта-Чирчикский Политехнический Колледж №2",
            "programs_page_title": "Специальности",
            "programs_intro_title": "Наши образовательные программы",
            "programs_intro_text": "Урта-Чирчикский районный Политехнический колледж №2 предлагает широкий спектр востребованных специальностей, направленных на подготовку квалифицированных специалистов для различных секторов экономики. Мы постоянно обновляем наши учебные планы, чтобы соответствовать современным требованиям рынка труда.",
            "program_it_title": "Информационные технологии",
            "program_it_desc": "Подготовка специалистов по разработке программного обеспечения, сетевому администрированию и кибербезопасности.",
            "it_feature1": "Современные языки программирования.",
            "it_feature2": "Практические проекты и стажировки.",
            "it_feature3": "Актуальные тренды в IT-индустрии.",
            "program_auto_title": "Автомобильное дело",
            "program_auto_desc": "Обучение диагностике, ремонту и техническому обслуживанию современных автомобилей.",
            "auto_feature1": "Работа с современным оборудованием.",
            "auto_feature2": "Практика в автосервисах.",
            "auto_feature3": "Изучение электроники автомобилей.",
            "program_electrician_title": "Электротехника",
            "program_electrician_desc": "Подготовка специалистов по монтажу, эксплуатации и ремонту электрического оборудования.",
            "electrician_feature1": "Навыки работы с электросетями.",
            "electrician_feature2": "Основы промышленной автоматизации.",
            "electrician_feature3": "Безопасность электромонтажных работ.",
            "program_accounting_title": "Бухгалтерский учет",
            "program_accounting_desc": "Обучение основам финансового учета, аудита и налогообложения.",
            "accounting_feature1": "Работа с 1С:Бухгалтерия.",
            "accounting_feature2": "Анализ финансовой деятельности.",
            "accounting_feature3": "Подготовка финансовой отчетности.",
            "program_learn_more": "Узнать больше",
            "all_programs_cta": "Полный список специальностей и подробную информацию о каждой программе можно получить в приёмной комиссии или связавшись с нами.",
            "all_programs_text": "Полный список специальностей и подробную информацию о каждой программе можно получить в приёмной комиссии или связавшись с нами.",
            "page_title_student_life": "Студенческая жизнь - Урта-Чирчикский Политехнический Колледж №2",
            "student_life_page_title": "Студенческая жизнь",
            "student_life_intro_title": "Больше, чем просто учеба",
            "student_life_intro_text": "В Урта-Чирчикском районном Политехническом колледже №2 мы верим, что студенческая жизнь должна быть не только образовательной, но и увлекательной, разнообразной и полной ярких моментов. Мы создаем условия для всестороннего развития наших студентов, предлагая широкий спектр внеучебных мероприятий, кружков и спортивных секций.",
            "events_activities_title": "Мероприятия и активности",
            "events_activities_text": "Наш колледж регулярно организует различные культурные, научные и развлекательные мероприятия. Это могут быть конкурсы, фестивали, тематические вечера, олимпиады по предметам, мастер-классы и многое другое. Мы стремимся, чтобы каждый студент нашел что-то по душе и мог реализовать свои таланты.",
            "activity1": "Ежегодные студенческие фестивали \"День первокурсника\" и \"Весна колледжа\".",
            "activity2": "Интеллектуальные игры \"Что? Где? Когда?\", КВН.",
            "activity3": "Экскурсии на предприятия и в музеи.",
            "activity4": "Участие в городских и региональных мероприятиях.",
            "clubs_sections_title": "Кружки и секции",
            "clubs_sections_text": "Для развития творческих, спортивных и научных способностей студентов в колледже действуют различные кружки и секции:",
            "club_robotics_title": "Кружок робототехники",
            "club_robotics_desc": "Разработка и программирование роботов.",
            "club_art_title": "Творческая студия",
            "club_art_desc": "Рисование, дизайн, декоративно-прикладное искусство.",
            "club_sport_title": "Спортивные секции",
            "club_sport_desc": "Футбол, баскетбол, волейбол, настольный теннис.",
            "club_vocal_title": "Вокально-инструментальный ансамбль",
            "club_vocal_desc": "Развитие музыкальных талантов.",
            "gallery_title": "Галерея студенческой жизни",
            "gallery_caption1": "Концерт в честь Дня учителя.",
            "gallery_caption2": "Спортивные соревнования по футболу.",
            "gallery_caption3": "Участие в районной олимпиаде.",
            "gallery_caption4": "Занятия в творческой студии.",
            "page_title_contacts": "Контакты - Урта-Чирчикский Политехнический Колледж №2",
            "contacts_page_title": "Контакты",
            "contact_us_title": "Свяжитесь с нами",
            "contact_us_intro": "Мы всегда готовы ответить на ваши вопросы. Вы можете связаться с нами любым удобным способом или посетить наш колледж.",
            "contact_address_title": "Адрес",
            "contact_address_text": "Урта-Чирчикский район, Политехнический колледж №2",
            "contact_phone_title": "Телефон",
            "contact_phone_text": "+998 (XX) XXX-XX-XX",
            "contact_phone_admission_text": "Приемная комиссия: +998 (XX) XXX-XX-XY",
            "contact_email_title": "Email",
            "contact_email_text": "info@college.uz",
            "contact_email_admission_text": "Приемная комиссия: admission@college.uz",
            "contact_hours_title": "Часы работы",
            "contact_hours_text": "Пн-Пт: 09:00 - 18:00",
            "contact_hours_weekend_text": "Сб-Вс: Выходной",
            "location_map_title": "Наше расположение на Google Картах",
            "location_map_text": "Вы можете найти нас на Google Картах ниже.",
            "contact_form_title": "Отправить нам сообщение",
            "deputy_director_yusupova_name": "Юсупова Феруза Зокир кизи",
            "deputy_director_yusupova_position": "Заместитель директора по учебной работе",
            "deputy_director_yusupova_bio": "Обладает богатым опытом в педагогической деятельности, обеспечивает высокое качество учебного процесса и внедряет инновационные методики.",
            "contact_form_intro_text": "Используйте форму ниже, чтобы отправить нам сообщение. Мы ответим вам как можно скорее.",
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
            "footer_link_applicants": "For Applicants",
            "footer_link_programs": "Programs",
            "footer_link_student_life": "Student Life",
            "footer_link_contacts": "Contacts",
            "footer_contact_title": "Contacts",
            "footer_address": "Address: Urtachirchik District, Polytechnic College No. 2",
            "footer_phone": "Phone: (Enter Phone Number)",
            "footer_email": "Email: (Enter Email)",
            "social_telegram_link": "Telegram",
            "social_instagram_link": "Instagram",
            "social_facebook_link": "Facebook",
            "footer_copyright": "© 2025 Urtachirchik District Polytechnic College No. 2. All rights reserved.",
            "page_title_about": "About College - Urtachirchik District Polytechnic College No. 2",
            "about_page_title": "About College",
            "about_history_title": "Our History",
            "about_history_paragraph1": "Urtachirchik District Polytechnic College No. 2 was founded in **2009** with the aim of providing high-quality secondary specialized professional education and training qualified personnel for various sectors of the regional economy. Since its foundation, the college has continuously developed, adapting to the changing demands of the labor market and introducing innovative approaches to education.",
            "about_history_paragraph2": "Over the years, we have graduated thousands of specialists who are successfully working in enterprises and organizations, contributing to the development of Uzbekistan. We are proud of our history and achievements, and we strive for further improvement and leadership in the field of vocational education.",
            "about_mission_title": "Mission and Values",
            "about_mission_paragraph": "**Our mission** is to train highly qualified, competitive, and socially responsible specialists capable of continuous learning and adapting to the modern challenges of the labor market. We strive to create an educational environment that contributes to the comprehensive development of the individual and the formation of professional and civic qualities.",
            "value1_title": "Innovations",
            "value1_desc": "Continuous introduction of new technologies and teaching methods.",
            "value2_title": "Professionalism",
            "value2_desc": "High level of training for teachers and students.",
            "value3_title": "Cooperation",
            "value3_desc": "Active interaction with employers and society.",
            "value4_title": "Development",
            "value4_desc": "Creating conditions for the growth and self-realization of everyone.",
            "about_management_title": "College Management",
            "director_name": "Shermatov Avaz Alijanovich",
            "director_position": "College Director",
            "director_bio": "An experienced leader with many years of experience in the field of education. Under his leadership, the college has achieved significant success in training qualified personnel.",
            "deputy_director1_name": "Deputy Director Name 1",
            "deputy_director1_position": "Deputy Director for Academic Affairs",
            "deputy_director1_bio": "Responsible for organizing the educational process, implementing new educational programs, and controlling the quality of education.",
            "deputy_director2_name": "Deputy Director Name 2",
            "deputy_director2_position": "Deputy Director for Educational Work",
            "deputy_director2_bio": "Organizes extracurricular activities for students, develops their creative abilities, and forms an active civic position.",
            "page_title_applicants": "Applicants - Urtachirchik District Polytechnic College No. 2",
            "applicants_page_title": "Applicants",
            "admission_info_title": "Admission Information",
            "admission_info_intro": "Welcome to the applicants' page of Urtachirchik District Polytechnic College No. 2! Here you will find all the necessary information for successful admission to our college.",
            "admission_conditions_title": "Admission Conditions",
            "admission_conditions_text": "Admission to the college is carried out on the basis of a competition of certificates (or diplomas) and the results of entrance examinations for certain specialties (if necessary). Detailed information on passing scores and selection criteria can be obtained from the admissions committee.",
            "required_docs_title": "Required Documents",
            "doc_application": "Application addressed to the college director (filled out upon submission of documents).",
            "doc_passport": "Copy of passport or birth certificate (original must be presented).",
            "doc_education": "Original education document (certificate, diploma).",
            "doc_photo": "6 photos 3x4 cm.",
            "doc_medical": "Medical certificate (form 086/U).",
            "doc_military": "Conscript certificate or military ID (for boys).",
            "admission_dates_title": "Document Submission Deadlines",
            "admission_dates_text": "Document submission usually begins on **July 10th** and continues until **August 10th** of the current year. We recommend checking our website for announcements for up-to-date information.",
            "faq_title": "Frequently Asked Questions (FAQ)",
            "faq_q1": "What are the main areas of study at the college?",
            "faq_a1": "Our college offers training in such in-demand areas as Information Technology, Automotive, Electrical Engineering, Accounting, and others. A full list of specialties is available on the \"Programs\" page.",
            "faq_q2": "Is dormitory accommodation provided for non-resident students?",
            "faq_a2": "Yes, for non-resident students, dormitory accommodation is provided if there are available places. You can get more details from the admissions committee.",
            "faq_q3": "Is it possible to get an education on a paid basis?",
            "faq_a3": "Yes, the college provides education on both a budget and a paid basis. Clarify the cost of education and payment terms with the admissions committee.",
            "contact_admission_title": "Contact the Admissions Committee",
            "contact_admission_text": "If you have any remaining questions, you can contact us using the feedback form below or by phone/email specified in the \"Contacts\" section.",
            "form_label_name": "Your Full Name:",
            "form_placeholder_name": "John Doe",
            "form_label_email": "Your Email:",
            "form_placeholder_email": "example@email.com",
            "form_label_phone": "Your Phone:",
            "form_placeholder_phone": "+998 XX XXX XX XX",
            "form_label_message": "Your Question:",
            "form_placeholder_message": "Write your question here...",
            "form_submit_button": "Send Message",
            "form_success_message": "Your message has been sent successfully. We will contact you shortly!",
            "form_error_message": "An error occurred while sending your message. Please try again later.",
            "page_title_programs": "Programs - Urtachirchik District Polytechnic College No. 2",
            "programs_page_title": "Programs",
            "programs_intro_title": "Our Educational Programs",
            "programs_intro_text": "Urtachirchik District Polytechnic College No. 2 offers a wide range of in-demand specialties aimed at training qualified specialists for various sectors of the economy. We constantly update our curricula to meet the modern demands of the labor market.",
            "program_it_title": "Information Technology",
            "program_it_desc": "Training specialists in software development, network administration, and cybersecurity.",
            "it_feature1": "Modern programming languages.",
            "it_feature2": "Practical projects and internships.",
            "it_feature3": "Current trends in the IT industry.",
            "program_auto_title": "Automotive",
            "program_auto_desc": "Training in diagnosis, repair, and maintenance of modern vehicles.",
            "auto_feature1": "Work with modern equipment.",
            "auto_feature2": "Internship in car services.",
            "auto_feature3": "Study of car electronics.",
            "program_electrician_title": "Electrical Engineering",
            "program_electrician_desc": "Training specialists in the installation, operation, and repair of electrical equipment.",
            "electrician_feature1": "Skills in working with electrical networks.",
            "electrician_feature2": "Fundamentals of industrial automation.",
            "electrician_feature3": "Safety of electrical installation works.",
            "program_accounting_title": "Accounting",
            "program_accounting_desc": "Learning the basics of financial accounting, auditing, and taxation.",
            "accounting_feature1": "Working with 1C:Accounting.",
            "accounting_feature2": "Analysis of financial activities.",
            "accounting_feature3": "Preparation of financial statements.",
            "program_learn_more": "Learn More",
            "all_programs_cta": "A full list of specialties and detailed information about each program can be obtained from the admissions committee or by contacting us.",
            "all_programs_text": "A full list of specialties and detailed information about each program can be obtained from the admissions committee or by contacting us.",
            "page_title_student_life": "Student Life - Urtachirchik District Polytechnic College No. 2",
            "student_life_page_title": "Student Life",
            "student_life_intro_title": "More than just studying",
            "student_life_intro_text": "At Urtachirchik District Polytechnic College No. 2, we believe that student life should be not only educational but also exciting, diverse, and full of bright moments. We create conditions for the comprehensive development of our students, offering a wide range of extracurricular activities, clubs, and sports sections.",
            "events_activities_title": "Events and Activities",
            "events_activities_text": "Our college regularly organizes various cultural, scientific, and entertainment events. These can be competitions, festivals, thematic evenings, subject olympiads, master classes, and much more. We strive to ensure that every student can find something they enjoy and realize their talents.",
            "activity1": "Annual student festivals \"Freshman Day\" and \"College Spring.\"",
            "activity2": "Intellectual games \"What? Where? When?\", KVN.",
            "activity3": "Excursions to enterprises and museums.",
            "activity4": "Participation in city and regional events.",
            "clubs_sections_title": "Clubs and Sections",
            "clubs_sections_text": "To develop the creative, sports, and scientific abilities of students, various clubs and sections operate in the college:",
            "club_robotics_title": "Robotics Club",
            "club_robotics_desc": "Development and programming of robots.",
            "club_art_title": "Creative Studio",
            "club_art_desc": "Drawing, design, applied arts.",
            "club_sport_title": "Sports Sections",
            "club_sport_desc": "Football, basketball, volleyball, table tennis.",
            "club_vocal_title": "Vocal-Instrumental Ensemble",
            "club_vocal_desc": "Development of musical talents.",
            "gallery_title": "Student Life Gallery",
            "gallery_caption1": "Concert in honor of Teacher's Day.",
            "gallery_caption2": "Football sports competitions.",
            "gallery_caption3": "Participation in the district Olympiad.",
            "gallery_caption4": "Classes in the creative studio.",
            "deputy_director_yusupova_name": "Yusupova Feruza Zokir qizi",
            "deputy_director_yusupova_position": "Deputy Director for Academic Affairs",
            "deputy_director_yusupova_bio": "Possesses extensive experience in pedagogical activities, ensures high quality of the educational process, and implements innovative methodologies.",
 
        }
    };

    // Функция для применения переводов
    function applyTranslations(lang) {
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

        // Обновление заголовка страницы
        const pageTitleKeyElement = document.querySelector('title[data-lang-key]');
        if (pageTitleKeyElement) {
            const key = pageTitleKeyElement.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                document.title = translations[lang][key];
            }
        }
    }

    // Сохранение выбранного языка в localStorage
    function setLanguage(lang) {
        localStorage.setItem('selectedLang', lang);
        const selectedOption = languageSwitcher.querySelector(`option[value="${lang}"]`);
        if (selectedOption) {
            const flagSrc = selectedOption.getAttribute('data-flag');
            selectedFlag.src = flagSrc;
            selectedFlag.alt = lang.toUpperCase() + ' flag';
        }
        applyTranslations(lang);
    }

    // Инициализация при загрузке страницы
    const savedLang = localStorage.getItem('selectedLang') || 'ru'; // По умолчанию русский
    languageSwitcher.value = savedLang;
    setLanguage(savedLang);

    // Обработчик смены языка
    languageSwitcher.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // Обработчик для гамбургер-меню
    hamburgerMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        hamburgerMenu.querySelector('i').classList.toggle('fa-bars');
        hamburgerMenu.querySelector('i').classList.toggle('fa-times');
    });

    // Закрытие мобильного меню при клике вне его
    document.addEventListener('click', (event) => {
        if (!mainNav.contains(event.target) && !hamburgerMenu.contains(event.target) && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            hamburgerMenu.querySelector('i').classList.remove('fa-times');
            hamburgerMenu.querySelector('i').classList.add('fa-bars');
        }
    });

    // Обработчик для аккордеона FAQ (на странице applicants.html)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const faqAnswer = faqItem.querySelector('.faq-answer');

            // Закрываем все открытые аккордеоны, кроме текущего
            faqQuestions.forEach(item => {
                const currentItem = item.closest('.faq-item');
                if (currentItem !== faqItem && currentItem.classList.contains('active')) {
                    currentItem.classList.remove('active');
                    currentItem.querySelector('.faq-answer').style.maxHeight = 0;
                }
            });

            // Открываем/закрываем текущий аккордеон
            faqItem.classList.toggle('active');
            if (faqItem.classList.contains('active')) {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px"; // Устанавливаем высоту контента
            } else {
                faqAnswer.style.maxHeight = 0;
            }
        });
    });

    // Обработчики для форм (пример, без реальной отправки на сервер)
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем стандартную отправку формы

            const statusMessageElement = this.querySelector('.form-message');
            statusMessageElement.style.display = 'block'; // Показываем сообщение

            // Имитация отправки данных
            setTimeout(() => {
                const isSuccess = Math.random() > 0.2; // 80% успеха, 20% ошибки для демонстрации
                if (isSuccess) {
                    statusMessageElement.textContent = translations[localStorage.getItem('selectedLang') || 'ru'].form_success_message;
                    statusMessageElement.classList.remove('error');
                    statusMessageElement.classList.add('success');
                    form.reset(); // Очищаем форму при успехе
                } else {
                    statusMessageElement.textContent = translations[localStorage.getItem('selectedLang') || 'ru'].form_error_message;
                    statusMessageElement.classList.remove('success');
                    statusMessageElement.classList.add('error');
                }
            }, 1000); // Задержка в 1 секунду
        });
    });
});
