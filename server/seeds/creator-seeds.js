const { Creator } = require('../models');

const seedCreator = async () => {

  await Creator.deleteMany({});

  const data = await Creator.create(
    { creatorname: 'Dan', email: 'Dan@Dan.com', password: 'password12345', teachercontent:'' },

  ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));
}

module.exports = { seedCreator };
