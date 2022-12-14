const { Creator } = require('../models');

const seedCreator = async () => {

    await Creator.deleteMany({});

const data =  await Creator.insertMany(
      [
        { creatorname: 'Bob', email: 'bob@bob.com', password: 'password12345' }, 
        { creatorname: 'Dan', email: 'Dan@Dan.com', password: 'password12345' }, 
        { creatorname: 'Lyndsey', email: 'Lyndsey@Lyndsey.com', password: 'password12345' }, 
        { creatorname: 'Scott', email: 'Scott@Scott.com', password: 'password12345' }, 
      ],
    ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));
}

module.exports = {seedCreator};
