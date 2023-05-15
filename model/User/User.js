import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Hash the password before saving the user
// UserSchema.pre('save', function (next) {
//     const user = this;
  
//     if (!user.isModified('password')) {
//       return next();
//     }
  
//     bcrypt.hash(user.password, 10, (err, hash) => {
//       if (err) {
//         return next(err);
//       }
  
//       user.password = hash;
//       next();
//     });
//   });

export default mongoose.model('User', UserSchema)
