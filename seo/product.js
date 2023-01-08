const seoConfig = (name) => ({
  seo: {
    title: `${name}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    canonical: 'https://reebelo.nourcs.dev/product/',
    openGraph: {
      type: 'website',
      url: 'https://reebelo.nourcs.dev/product/',
      title: `${name} | Nour Cherif Essoussi | Reebelo Case Study`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  },
});

export default seoConfig;
