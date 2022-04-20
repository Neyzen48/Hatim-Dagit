

let Arabic = {
    Navbar: {
        Logo: "ختم توزيع",
        Links: ["إنشاء ختم", "بشأن", "تغيير اللغة"],
        LinkHelpers: ["/", "hakkimda"],
        Buttons: ["أرسل تقييما"],
        Languages: [{label: "عربي", value: 'ar'}, {label: "الانجليزية", value: 'en'}, {label: "اللغة التركية", value: 'tr'}],
        Pwa: 'تنزيله',
    },

    Pwa: {
        Alert: 'الرجاء استخدام متصفح Chrome لتنزيل هذا ، Safari لا يدعم هذه الميزة حتى الآن!',
        Popup: [
            'لتحميل هذا التطبيق الرجاء الضغط',
            'ثم اختر .الزر المتاح في متصفحك',
            'إضافة إلى الشاشة الرئيسية',
            '.زر من القائمة مفتوحة',
            '. سيتم تثبيت التطبيق إن شاء الله'
        ]
    },

    Footer: {
        aciz_kul:  "Yusuf Yeniçeri التي أدلى بها",
        ziyaret: ["تمت زيارة هذا الموقع "," مرات."]
    },

    "/" : {
        Question: "إنشاء ختم جديد بالنقر فوق الزر!",
        Button: {
            Main: "إنشاء ختم جديد",
            Ramazan: "جعل تناوب رمضان الخطمي",
            Header: {
                Text: "إنشاء ختم",
                InputSpan: ["عنوان", "تاريخ إنهاء خاتم"],
                Input: ["الرجاء إدخال عنوان"],
                Button: "استمر"
            },
            Final: {
                Before: {
                    Header: "ارجوك انتظر!",
                    Link: "رابطك لنشر الختم:",
                    LinkReady: "الرابط يستعد",
                    Copy: "انسخ الرابط",
                    Button: "ارجوك انتظر!"
                },

                After: {
                    Header: "تم إنشاء جديد ختم!",
                    Link: "رابطك لنشر الختم:",
                    Copy: "تم نسخ الرابط",
                    Button: "استمر"
                }
            }
        },
        MevcutHatimler:'ختم شيدت'

    },

    "/cuz":{
        KhatmFinishDate: [".","صلاة هذا الختم ستقام في"],
        NewSubKhatm: ".أضف ختم إلى هذه الصفحة",

        Before: {
            Question: "انقر فوق الجزء المطلوب ..",
            Wait: "ارجوك انتظر!",
            Error: "حدث خطأ ، تحديث الصفحة!"
        },

        After: {
            Copy: {
                Before: "انسخ الرابط",
                After: "تم نسخ الرابط!"
            },
            Share:'شارك ختم',


        },

        Button:{
            Question: "أدخل اسمك للحصول على الجزء:",
            Take: "احصل على الجزء"
        },
        ShareBox:{
            Title: 'حدد تطبيقًا لمشاركته:',
            Sms: 'شارك مع الرسائل القصيرة',
            Whatsapp: 'Whatsapp شارك مع',
        },

        AlertDialog:{
            Title: "تم أخذ جزء بالفعل! يرجى أخذ جزء آخر",
            Button: "موافق."
        }
    },

    "/ramazan":{
        KhatmFinishDate: [".","صلاة هذا الختم ستقام في"],
        NewSubKhatm: ".أضف ختم إلى هذه الصفحة",

        Before: {
            Question: "انقر فوق الجزء المطلوب ..",
            Wait: "ارجوك انتظر!",
            Error: "حدث خطأ ، تحديث الصفحة!"
        },

        After: {
            Copy: {
                Before: "انسخ الرابط",
                After: "تم نسخ الرابط!"
            },
            Share:'شارك ختم',


        },

        Button:{
            Question: "أدخل اسمك للحصول على الجزء:",
            Take: "احصل على الجزء"
        },
        ShareBox:{
            Title: 'حدد تطبيقًا لمشاركته:',
            Sms: 'شارك مع الرسائل القصيرة',
            Whatsapp: 'Whatsapp شارك مع',
        }
    }
}

export default Arabic;