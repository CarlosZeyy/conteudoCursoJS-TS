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
    const validPassword = this.checkPassword();

    if (validField && validPassword) {
      alert('Fomulário enviado!');  
      this.form.submit();
    }
  }

  checkPassword() {
    let valid = true;

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    if(password.value !== confirmPassword.value) {
      valid = false;
      this.createError(password, 'As senhas devem ser iguais.');
      this.createError(confirmPassword, 'As senhas devem ser iguais.');
    }

    if(password.value.length < 6 || password.value.length > 12) {
      valid = false;
      this.createError(password, "Senha precisa ter entre 6 e 12 caracteres");
    }

    return valid;
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

  validUser(field) {
      const user = field.value;
      let valid = true;
  
      if (user.length < 3 || user.length > 12) {
        this.createError(field, "Usuario deve ter entre 3 a 12 caracteres.");
        valid = false;
      }
  
      if (!user.match(/[a-zA-Z0-9]/)) {
        this.createError(field, "Usuario deve ter letras e/ou números");
        valid = false;
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
