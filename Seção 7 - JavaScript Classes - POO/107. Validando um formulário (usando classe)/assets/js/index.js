class ValidaForm {
  constructor() {
    this.form = document.querySelector(".formulario");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validField = this.checkField();
  }

  checkField() {
    let valid = true;

    this.oneMsgError();

    for (let field of this.form.querySelectorAll(".valid")) {
      let label = field.previousElementSibling.innerHTML;

      if (!field.value) {
        this.createError(
          field,
          `Campo "${label.replace(":", "")}" não pode estar vazio.`
        );
        valid = false;
      }

      if (field.classList.contains("cpf")) {
        if (!this.validCPF(field)) valid = false;
      }

      if (field.classList.contains("user")) {
        if (!this.validUser(field)) valid = false;
      }
    }
    return valid;
  }

  validCPF(field) {
    const cpfUser = new Cpf(field.value);
    if (!cpfUser.valida()) {
      this.createError(field, "CPF Invalido");
      return false;
    }
    return true;
  }

  validUser(field) {
    const user = field.value;

    if (user.length < 3 || user.length > 12) {
      this.createError(field, "Usuario deve ter entre 3 a 12 caracteres.");
    }

    if (!user) {
      this.createError(field, "Usuario deve ter entre 3 a 12 caracteres.");
    }
  }

  createError(field, msg) {
    const divError = document.createElement("div");
    divError.innerHTML = msg;
    divError.classList.add("error-text");
    field.insertAdjacentElement("afterend", divError);
  }

  oneMsgError() {
    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }
  }
}

const valida = new ValidaForm();
