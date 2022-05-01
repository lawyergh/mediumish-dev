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
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
      },
      {
        name: 'Автор',
        avatar: '/assets/img/avatar.png',
      }
    ],
    smoothScroll: true
  },
}
