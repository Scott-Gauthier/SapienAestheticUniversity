const { Admin } = require('../models');

const seedAdmin = async () => {

    await Admin.deleteMany({});

const data =  await Admin.insertMany(
      [
        { adminname: 'Bob', email: 'bob@bob.com', password: 'password12345' }, 
        { adminname: 'Dan', email: 'Dan@Dan.com', password: 'password12345' }, 
        { adminname: 'Lyndsey', email: 'Lyndsey@Lyndsey.com', password: 'password12345' }, 
        { adminname: 'Scott', email: 'Scott@Scott.com', password: 'password12345' }, 
      ],
    ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));
}

module.exports = {seedAdmin};
