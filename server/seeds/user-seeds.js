const { User } = require('../models');

const seedUser = async () => {

  await User.deleteMany({});

  const data = await User.create(
    { username: 'Dan', email: 'Dan@Dan.com', password: 'password12345' },

  ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));
}

module.exports = { seedUser };
