const { Content } = require('../models');

const seedContent = async () => {

    await Content.deleteMany({});

const data =  await Content.insertMany(
      [
        { title: '', description: '', cost: '', creator: '' }, 
        { title: '', description: '', cost: '', creator: '' }, 
        { title: '', description: '', cost: '', creator: '' }, 
        { title: '', description: '', cost: '', creator: '' }, 
      ],
    ).then((err) =>
    err ? console.log(err) : console.log('Inserted'));
}

module.exports = {seedContent};
