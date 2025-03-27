import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "cloud inline",
            position: "bottom left",
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        functionality: {}
    },
    language: {
        default: "en",
        translations: {
            en: {
                consentModal: {
                    title: "We use cookies",
                    description: "This website uses cookies to enhance your browsing experience and improve the functionality of the site.<br><b>We do not share your data for advertising purposes.</b>",
                    closeIconLabel: "",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Accept necessary",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"Impressum\">Imprint</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    closeIconLabel: "Close modal",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "This website uses cookies to enhance your browsing experience and improve the functionality of the site. None of your data is being processed on our server, only on your device for a better experience on this site. You can manage your preferences below."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are essential for the website to function properly and cannot be disabled. They are used to provide basic functionalities such as page navigation and access to secure areas of the website.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Functionality Cookies",
                            description: "These cookies enable additional features and functionality on the website, improving your overall experience.",
                            linkedCategory: "functionality"
                        },
                        
                        {
                            title: "More information",
                            description: "If you have any further questions regarding the use of cookies on this site, please <a class=\"cc__link\" href='https://rd.knbene.de?r=insta/'>contact me</a>."
                        }
                    ]
                }
            }
        }
    }
});