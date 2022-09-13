const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'is required'],
    },

    email: {
      type: String,
      required: [true, 'is required'],
      unique: true,
      index: true,
      validate: {
        validator: string => {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(string);
        },
        message: props => `${props.value} is not a valid email`,
      },
    },

    password: {
      type: String,
      required: [true, 'is required'],
    },

    passwordVerify: {
      type: String,
      required: [true, 'is required'],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    cart: {
      type: Object,
      default: {
        total: 0,
        count: 0,
      },
    },

    notifications: {
      type: Array,
      default: [],
    },

    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
  },

  { minimize: false }
);

// catches error when logging in logging in with wrong email or wrong password
UserSchema.statics.findByCredentials = async function (email, password) {
  const user = await User.findOne({ email });
  const isSamePassword = bcrypt.compareSync(password, user.password);

  if (!user) throw new Error('Invalid credentials');
  if (isSamePassword) return user;

  throw new Error('Invalid credentials');
};

// deletes the password out of the object then it returns to front end
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.passwordVerify;

  return userObject;
};

//before saving it validates then hashes the password
UserSchema.pre('save', function (next) {
  const user = this;
  // This regex must contain 1 upper and lower case letter, 1 number, 1 special characters, minimum 8 length
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!user.isModified('password')) return next();
  if (!isNaN(user.name)) throw new Error('Name must not contain any numbers');
  if (!passwordRegex.test(user.password))
    throw new Error(
      'Password must contain 1 upper and lower case letter, a number, a special character and minimum 8 characters'
    );
  if (user.password !== user.passwordVerify)
    throw new Error('Password does not match');

  bcrypt.genSalt(10, function (error, salt) {
    if (error) return next(error);
    bcrypt.hash(user.password, salt, function (error, hash) {
      if (error) return next(error);
      user.password = hash;
      user.passwordVerify = hash;
      next();
    });
  });
});

// when removing a user it removes their orders as well
UserSchema.pre('remove', function (next) {
  this.model('Order').remove({ owner: this._id }, next);
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
