import mongoose from "mongoose";
import validator from "validator";

const ContactSchema = new mongoose.Schema({
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
    required: false,
    default: "",
    lowercase: true,
    trim: true,
  },
  telefone: {
    type: String,
    required: false,
    default: "",
    trim: true,
  },
  comment: {
    type: String,
    required: false,
    default: "",
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  }
});

export const ContactModel = mongoose.model("Contact", ContactSchema);

export class Contact {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
  }

  async register() {
    this.validateContact();
    if (this.errors.length > 0) return;
    this.contact = await ContactModel.create(this.body);
  }

  static async findById(id) {
    if (typeof id !== 'string') return;

    const user = await ContactModel.findById(id);
    return user;
  }

  validateContact() {
    this.cleanUp();

    if (!this.body.name) this.errors.push(`Nome é obrigatório.`);

    if (!validator.isAlpha(this.body.name, "pt-BR", { ignore: " -'" }))
      this.errors.push("Nome inválido.");

    if (this.body.email && !validator.isEmail(this.body.email))
      this.errors.push(`E-mail inválido.`);

    if (!this.body.email && !this.body.telefone)
      this.errors.push("Precisa registrar pelo menos um email ou telefone.");
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
      telefone: this.body.telefone,
      comment: this.body.comment,
    };
  }
}
