module.exports = {
  title: 'Mediumish',
  base: '/mediumish/',
  description: 'Mediumish theme with VuePress and Forestry',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
    authors: [
      {
        name: 'Sal',
        avatar: '/assets/img/sal.jpg',
        link: 'https://wowthemes.net/donate',
        linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
    ],
    smoothScroll: true
  },
}
