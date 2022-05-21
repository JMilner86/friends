const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: 'username needed',
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      required: 'Email address is required',
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.reduce(
    (total, friends) => total + friends.length + 1,
    0
  );
});

const User = model('User', UserSchema);

module.exports = User;
