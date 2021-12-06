








let english = {
    Navbar: {
        Logo: "Distribute Khatm",
        Links: ["Make New Khatm", "About", "Change Language",],
        LinkHelpers: ["/", "hakkimda"],
        Buttons: ["Send Feedback"],
        Languages: [{label: "Arabic", value: 'ar'}, {label: "English", value: 'en'}, {label: "Turkish", value: 'tr'}]

    },

    Footer: {
        aciz_kul: "Made by Yusuf YENİÇERİ"
    },

    "/" : {
        Question: "Click on Button to Make New Khatm",
        Button: {
            Main: "New Khatm",
            Header: {
                Text: "Enter a Title For Khatm:",
                Button: "Continue"
            },
            Final: {
                Before: {
                    Header: "New Khatm Is Being Made!",
                    Link: "New Khatm Distribution Link:",
                    LinkReady: "Link is being made",
                    Copy: "Copy the Link",
                    Button: "Please wait"
                },

                After: {
                    Header: "New Khatm Is Ready!",
                    Link: "New Khatm Distribution Link:",
                    Copy: "Link Copied",
                    Button: "Continue"
                }
            }
        }
    },

    "/cuz":{
        Before: {
            Question: "Click the Part You Want ..",
            Wait: "Please wait ..",
            Error: "An error occured, please refresh the page!"
        },

        After: {
            Copy: {
                Before: "Copy the Link",
                After: "Link Copied"
            },
            Share:'Share Khatm',

        },

        Button:{
            Question: "part, enter your name to take it",
            Take: "Take the Part"

        },

        ShareBox:{
            Title: 'Select an app to share:',
            Sms: 'Share with Sms',
            Whatsapp: 'Share with Whatsapp',
        }
    }



    
}

export default english;