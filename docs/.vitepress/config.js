import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Lunar Aurora",
  description: "A disruptive CSS framework using avant-garde techniques.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/buttons' },
      { text: 'Themes', link: '/themes/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Buttons', link: '/components/buttons' },
            { text: 'Cards', link: '/components/cards' },
            { text: 'Forms', link: '/components/forms' },
            { text: 'Tables', link: '/components/tables' },
            { text: 'Données', link: '/components/data' },
            { text: 'Navigation', link: '/components/navigation' },
            { text: 'Retours utilisateur', link: '/components/feedback' },
            { text: 'Surcouches', link: '/components/overlays' },
            { text: 'Interactive', link: '/components/interactive' }
          ]
        }
      ],
      '/themes/': [
        {
            text: 'Thèmes',
            items: [
                { text: 'Galerie', link: '/themes/' },
                { text: 'Créer un thème', link: '/themes/create' }
            ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yrbane/lunar-aurora' }
    ]
  },
  head: [
    ['link', { rel: 'stylesheet', href: '/aurora.min.css' }]
  ]
})
