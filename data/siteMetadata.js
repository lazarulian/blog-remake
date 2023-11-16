/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'CheatCodes',
  author: 'Apurva Shah',
  headerTitle: 'CheatCodes',
  description: 'A blog created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.blog.apurvashah.org',
  siteRepo: 'https://www.blog.apurvashah.org',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'apurvashah@ucla.edu',
  github: 'https://github.com/lazarulian',
  twitter: 'https://twitter.com/apurvashahhh',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/apurvashahh',
  locale: 'en-US',
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
