module.exports = {
  title: 'Mediumish',
  base: '/mediumish/',
  description: 'Mediumish theme with VuePress and Forestry',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
    authors: [
      {
        name: 'Юрист',
        avatar: '/assets/img/lawyer.jpeg',
      }
    ],
    smoothScroll: true
  },
}
