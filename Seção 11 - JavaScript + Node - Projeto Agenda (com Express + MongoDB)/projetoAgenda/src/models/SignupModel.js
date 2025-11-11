import mongoose from "mongoose";
import validator from "validator";

const SignUpSchema = new mongoose.Schema({
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

export const SignUpModel = mongoose.model("SignUp", SignUpSchema);

export class SignUp {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.validate();
    if (this.errors.length > 0) return;
    try {
      this.user = await SignUpModel.create(this.body);
    } catch (error) {
      console.log(error);
    }
  }

  validate() {
    this.cleanUp();

    if (!this.body.email) this.errors.push(`E-mail é obrigatório.`);

    if (!this.body.password) this.errors.push(`Senha é obrigatória.`);

    if (!validator.isEmail(this.body.email))
      this.errors.push(`E-mail inválido.`);

    if (this.body.password.length < 8 || this.body.password.length > 50)
      this.errors.push(`Senha precisa ter entre 8 e 50 caracteres.`);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(this.body.password))
      this.errors.push(
        `A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.`
      );
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
