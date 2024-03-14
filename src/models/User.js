import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  // Other fields as needed
}
);

export const User = mongoose.model('User', userSchema);

