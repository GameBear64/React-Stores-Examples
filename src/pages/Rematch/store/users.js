const users = {
  state: [],
  reducers: {
    addUser(state, payload) {
      return [...state, payload];
    },
    resetStore() {
      return [];
    },
    exampleUsers() {
      return [
        {
          name: 'John',
          isAdmin: false,
        },
        {
          name: 'Garry',
          isAdmin: true,
        },
        {
          name: 'Lenny',
          isAdmin: false,
        },
        {
          name: 'Ronald',
          isAdmin: false,
        },
        {
          name: 'Bob',
          isAdmin: true,
        },
      ];
    },
  },
};

export default users;
