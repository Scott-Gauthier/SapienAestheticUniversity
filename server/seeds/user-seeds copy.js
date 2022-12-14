const { User } = require('../models');

const seedUser = async () => {

    await User.deleteMany({});

const data = await User.insertMany(
      [
        { username: 'Bob', email: 'bob@bob.com', password: 'password12345' }, 
        { username: 'Dan', email: 'Dan@Dan.com', password: 'password12345' }, 
        { username: 'Lyndsey', email: 'Lyndsey@Lyndsey.com', password: 'password12345' }, 
        { username: 'Scott', email: 'Scott@Scott.com', password: 'password12345' }, 
      ],
    ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));
}

module.exports = {seedUser};
