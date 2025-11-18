import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nome é obrigatório."],
  },
  surname: {
    type: String,
    required: false,
    default: "",
  },
  email: {
    type: String,
    required: [true, "Email obrigatório."],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Senha é obrigatório."],
  },
});

export const UserModel = mongoose.model("User", UserSchema);