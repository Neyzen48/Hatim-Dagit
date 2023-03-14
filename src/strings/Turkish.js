



let Turkish = {
    Navbar: {
        Logo: "Hatim Dağıt",
        Links: ["Hatim Oluştur", "Hakkında", "Dil Değiştir", "Çizelgelerim"],
        LinkHelpers: ["/", "hakkimda", "cizelgelerim"],
        Buttons: ["Geribildirim Yap"],
        Languages: [{label: "Arapça", value: 'ar'}, {label: "İngilizce", value: 'en'}, {label: "Türkçe", value: 'tr'}],
        Pwa: "Telefona İndir"
    },

    Pwa: {
        Alert: 'Lütfen Chrome tarayıcısını kullanarak telefonunuza indirin. Safari bu özelliği desteklemiyor!',
        Popup: [
            'Bu uygulamayı telefonunuza indirmek için önce tarayıcınızda bulunan',
            'ikonuna tıklayın. Daha sonra açılan menüden',
            'Ana Ekrana Ekle',
            'seçeneğini seçin.',
            'Uygulama telefonunuza inecektir inşaAllah.'
        ]
    },

    Footer: {
        aciz_kul: "Yusuf Yeniçeri tarafından yapılmıştır.",
        ziyaret: ["Bu site ", " defa ziyaret edildi"],
        version: "Mevcut versiyon ",
        GoToMainPage: "Anasayfaya Git",
        Feedback: "Geribildirim Yap"
    },


    AlertDialog: {
        Text: "Hatayı bildirerek kullandığınız tarayıcı, tarayıcı versiyonu, sistem bilgisi vb. bilgileri (bkz. user-agent) sisteme gönderecektir. Kabul ediyor musunuz?",
        Yes: 'Evet',
        No: 'Hayır'
    },
    

    "/" : {
        Question: "Butona Tıklayarak Yeni Bir Hatim Oluştur!",
        MyInfos: "Oluşturduğum Hatimler ve Çizelgelerim",
        Button: {
            NewTag: "Yeni",
            MyInfos: {
                Charts: "Çizelgelerim"
            },
            Main: "Hızlıca Hatim Oluştur",
            Ramazan: "Ramazan Dönerli Hatim Oluştur",
            Aylar3: "3 Aylar Hatmi Oluştur",
            EvradEzkar:"Vird-Zikir Dağıt",
            Header: {
                Text: "Yeni Hatim Oluştur",
                Text3MonthProgram: "Program Seç",
                InputSpan: ["Başlık", "Açıklama", "Hatim Duası Tarihi", 
                            "Hatim Sayısı", "Hatim bittiğinde otomatik olarak yeni hatim oluştur"],
                Input: ["Lütfen Hatim başlığı yazın ..", "Lütfen Hatim için açıklama yazın .."],
                Button: "Devam Et"
            },
            Final: {
                Before: {
                    Header: "Yeni Hatim Oluşturuluyor",
                    Link: "Hatmi Dağıtmak için Linkiniz:",
                    LinkReady: "Link hazırlanıyor",
                    Copy: "Linki Kopyala",
                    Button: "Lütfen bekleyiniz .."
                },

                After: {
                    Header: "Yeni Hatim Oluşturuldu!",
                    Link: "Hatmi Dağıtmak için Linkiniz:",
                    Copy: "Link Kopyalandı",
                    Button: "Devam Et"
                }
            }
        },
        ExistingKhatms:'Oluşturulmuş Hatimler',
        BottomNavigation: {
            NewKhatm: "Hatim Oluştur",
            KhatmInfos: "Hatim Bilgilerim"
        }
    },

    "/cuz":{

        KhatmFinishDate: ["Hatim Duasının Yapılacağı Tarih: ",""],
        NewSubKhatm: "Bu sayfaya Yeni Hatim ekle",

        Before: {
            Question: "İstediğiniz cüze tıklayın ..",
            Wait: "Lütfen Bekleyiniz ..",
            Error: "Bir Hata Oluştu, Sayfayı Güncelleyin!",
            Deleted: "Bu Hatim oluşturan kişi tarafından silinmiş!"
        },

        After: {
            Copy: {
                Before: "Linki Kopyala",
                After: "Link Kopyalandı"
            },
            Share:'Hatmi Paylaş',

        },

        Button:{
            Question: "Cüzü almak için isminizi girin:",
            Take: "Cüzü Al",
            TakeCancel: "İptal Et"
        },

        ShareBox:{
            Title: 'Paylaşmak için uygulama seçin:',
            Sms: 'Sms ile Paylaş',
            Whatsapp: 'Whatsapp ile Paylaş',
        },


        AlertDialog:{
            Title: "Cüz çoktan alınmış. Lütfen başka bir cüzü almayı deneyin!",
            Button: "Tamam",
            Feedback: "Hata Bildir"
        },


        CuzlerHatimCard: {
            deleteHatim: "Hatmi Sil",
            changeHatim: "Değiştir",
            takenParts: "Alınan cüzler",
            leftParts: " cüz kaldı",
            dua: ["Duaya", "gün kaldı", "Duası yapıldı", "Duası bugün yapılacak", "Duaya", "gün kaldı"],
            Modal:{
                Title:'Hatim bilgilerinde değişiklik yap',
                Header:'Hatim başlığı',
                Description:'Hatim açıklaması',
                Date:'Hatim duası tarihi',
                Button:'Tamam'
            },

            Notification:{
                Title: 'Bilgiler güncelleniyor',
                Description: 'Bilgileri güncellenene kadar lütfen bekleyin.'
            },

            PartModal:{
                Title: 'Cüz bilgilerinde değişiklik yap',
                Name: 'Cüzü alan kişinin ismi',
                ChangeNameButton: 'İsmini Değiştir',
                CancelPart: 'Cüzü İptal Et',
            }
        },


        AddKhatmAlert:{
            Question: 'Yeni Hatim oluşturmak istediğinize emin misiniz?',
            YesButton:'Evet',
            NoButton:'Hayır'
        },

        DeleteKhatmAlert:{
            Question: 'Bu Hatmi silmek istediğinize emin misiniz?',
            YesButton: 'Evet',
            NoButton: 'Hayır'
        },

        CuzItem: {
            ChartButton: 'Çizelgeyi Görüntüle'
        },

    },

    "/ramazan":{
        Before: {
            Question: "Başlamak istediğiniz cüzü seçin ..",
            Wait: "Lütfen Bekleyiniz ..",
            Error: "Bir Hata Oluştu, Sayfayı Güncelleyin!"
        },

        After: {
            Copy: {
                Before: "Linki Kopyala",
                After: "Link Kopyalandı"
            },
            Share:'Hatmi Paylaş',

        },

        Button:{
            Question: "Cüzü almak için isminizi girin:",
            Take: "Cüzü Al",
            TakeCancel: "İptal Et"
        },

        ShareBox:{
            Title: 'Paylaşmak için uygulama seçin:',
            Sms: 'Sms ile Paylaş',
            Whatsapp: 'Whatsapp ile Paylaş',
        }
    }



    
}

export default Turkish;