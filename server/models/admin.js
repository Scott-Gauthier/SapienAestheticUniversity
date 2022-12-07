const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
  adminname: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Must match an email address!'],
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
  }],
  
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);

// Create a virtual property `friendCount` that gets the amount of friends per post
adminSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const Admin = model('admin', adminSchema);

module.exports = Admin;