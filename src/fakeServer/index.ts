const fakeServerFactory = (type: string) => {
  switch (type) {
    case 'graphql':
      return import('./graphql').then(factory => factory.default());
    default:
      return import('./rest').then(factory => factory.default());
  }
};

export default fakeServerFactory;
