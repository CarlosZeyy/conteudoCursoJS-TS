import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const SignUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nome é obrigatório"],
    
  },
  surname: {
    type: String,
    required: [true, "Sobrenome é obrigatório"],
  },
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

    await this.userExists();

    if (this.errors.length > 0) return;

    const salt = bcrypt.genSaltSync();
    this.body.password = bcrypt.hashSync(this.body.password, salt);

    try {
      this.user = await SignUpModel.create(this.body);
    } catch (error) {
      console.log(error);
      if (error?.code === 11000) {
        this.errors.push("E-mail já está em uso.");
      } else {
        this.errors.push("Erro interno ao criar usuário.");
      }
    }
  }

  validate() {
    this.cleanUp();

    if (!this.body.name) this.errors.push(`Nome é obrigatório`);
    if (!this.body.surname) this.errors.push(`Sobrenome é obrigatório`);
    if (!this.body.email) this.errors.push(`E-mail é obrigatório.`);
    if (!this.body.password) this.errors.push(`Senha é obrigatória.`);

    if (
      !validator.isAlpha(this.body.name, 'pt-BR', { ignore: ' -\''}) ||
      !validator.isAlpha(this.body.surname, 'pt-BR', { ignore: ' -\''})
    )
      this.errors.push("Nome e/ou sobrenome inválido");

    if (!validator.isEmail(this.body.email))
      this.errors.push(`E-mail inválido.`);

    if (this.body.password.length < 8 || this.body.password.length > 50)
      this.errors.push(`Senha precisa ter entre 8 e 50 caracteres.`);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!passwordRegex.test(this.body.password))
      this.errors.push(
        `A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.`
      );
  }

  async userExists() {
    const user = await SignUpModel.findOne({ email: this.body.email });

    if (user) {
      this.errors.push(`Usuário já existente.`);
    }
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] != "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      name: this.body.name,
      surname: this.body.surname,
      email: this.body.email,
      password: this.body.password,
    };
  }
}
