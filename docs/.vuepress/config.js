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
        link: 'mailto:lawyergh@protonmail.com',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'mailto:lawyergh@protonmail.com',
      },
      {
        name: 'Автор',
        avatar: '/assets/img/avatar.png',
        link: 'mailto:lawyergh@protonmail.com',
      }
    ],
    smoothScroll: true
  },
}
