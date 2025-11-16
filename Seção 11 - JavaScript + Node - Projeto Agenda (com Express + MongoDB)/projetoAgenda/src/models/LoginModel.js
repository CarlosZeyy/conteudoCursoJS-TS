import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import { SignUpModel } from "./SignupModel.js";

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email obrigatório"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Senha é obrigatório"],
  },
});

export const LoginModel = mongoose.model('Login', loginSchema);

export class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

async loggedIn() {
    this.validateLogin();
    if (this.errors.length > 0) return;

    this.user = await SignUpModel.findOne({ email: this.body.email }); 

    if (!this.user) {
      this.errors.push('Usuário inválido.');
      return;
    }

    if (!bcrypt.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Senha inválida.');
      this.user = null;
      return;
    }
  }

  validateLogin() {
    this.cleanUp();

    if (!this.body.email) this.errors.push(`E-mail é obrigatório.`);
    if (!this.body.password) this.errors.push(`Senha é obrigatória.`);

    if (!validator.isEmail(this.body.email))
      this.errors.push(`E-mail inválido.`);
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] != "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}