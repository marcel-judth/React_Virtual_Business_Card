import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          home: {
            landing: {
              heading: 'Virtual Business Card',
              subHeading: 'networking was never that easy!',
            },
            intro: {
              heading: 'As easy as it could get!',
            },
            aboutus: {
              heading: 'What is X-Act.me?',
              text: 'We offer digital business cards which you can access via our custom products. Your customers or contact can easily access your virtual business card to download it on their own mobile device. And the best of all: No app is requierd!',
              joinBTN: 'Join Us',
            },
            description: {
              heading: 'About?',
              card1: {
                heading: 'Who?',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum accusamus neque. Officia fuga sint sapiente, veniam vero animi nihil!',
              },
              card2: {
                heading: 'What?',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum accusamus neque. Officia fuga sint sapiente, veniam vero animi nihil!',
              },
              card3: {
                heading: 'Why?',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum accusamus neque. Officia fuga sint sapiente, veniam vero animi nihil!',
              },
              card4: {
                heading: 'How?',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum accusamus neque. Officia fuga sint sapiente, veniam vero animi nihil!',
              },
            },
            products: {
              heading: 'Our Products',
              text: 'Choose one of our products and get started with x-ACT.me.',
            },
            faq: {
              heading: 'Any Questions?',
              heading2: 'FAQ',
              f1: {
                heading: 'How do I start?',
                text1: 'Lorem ipsum dolor sit amet.',
                text2:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem accusamus ex laboriosam porro, adipisci quam voluptatum magnam placeat corporis.',
              },
              f2: {
                heading: 'How do I start?',
                text1: 'Lorem ipsum dolor sit amet.',
                text2:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem accusamus ex laboriosam porro, adipisci quam voluptatum magnam placeat corporis.',
              },
              f3: {
                heading: 'How do I start?',
                text1: 'Lorem ipsum dolor sit amet.',
                text2:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem accusamus ex laboriosam porro, adipisci quam voluptatum magnam placeat corporis.',
              },
            },
          },
        },
      },
      de: {
        translation: {
          home: {
            landing: {
              heading: 'Virtuelle Vistenkarten',
              subHeading: 'networking was never that easy!',
            },
            intro: {
              heading: 'As easy as it could get!',
            },
            aboutus: {
              heading: 'What is X-Act.me?',
              text: 'We offer digital business cards which you can access via our custom products. Your customers or contact can easily access your virtual business card to download it on their own mobile device. And the best of all: No app is requierd!',
              joinBTN: 'Join Us',
            },
            description: {
              heading: 'About?',
              card1: {
                heading: 'Who?',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum accusamus neque. Officia fuga sint sapiente, veniam vero animi nihil!',
              },
              card2: {
                heading: 'What?',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum accusamus neque. Officia fuga sint sapiente, veniam vero animi nihil!',
              },
              card3: {
                heading: 'Why?',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum accusamus neque. Officia fuga sint sapiente, veniam vero animi nihil!',
              },
              card4: {
                heading: 'How?',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum accusamus neque. Officia fuga sint sapiente, veniam vero animi nihil!',
              },
            },
            products: {
              heading: 'Our Products',
              text: 'Choose one of our products and get started with x-ACT.me.',
            },
            faq: {
              heading: 'Any Questions?',
              heading2: 'FAQ',
              f1: {
                heading: 'How do I start?',
                text1: 'Lorem ipsum dolor sit amet.',
                text2:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem accusamus ex laboriosam porro, adipisci quam voluptatum magnam placeat corporis.',
              },
              f2: {
                heading: 'How do I start?',
                text1: 'Lorem ipsum dolor sit amet.',
                text2:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem accusamus ex laboriosam porro, adipisci quam voluptatum magnam placeat corporis.',
              },
              f3: {
                heading: 'How do I start?',
                text1: 'Lorem ipsum dolor sit amet.',
                text2:
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi autem accusamus ex laboriosam porro, adipisci quam voluptatum magnam placeat corporis.',
              },
            },
          },
        },
      },
    },
  });

export default i18n;
