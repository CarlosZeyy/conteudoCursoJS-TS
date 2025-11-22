import validator from "validator";

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    //* Email
    const emailDiv = document.querySelector(".email");

    const lastEmailError = emailDiv.querySelector(".message-error");
    if (lastEmailError) lastEmailError.remove();

    const divEmailError = document.createElement("div");
    const textErrorEmail = document.createTextNode(
      "Email e/ou senha inválidos."
    );
    divEmailError.classList.add("message-error");
    divEmailError.classList.add("text-bg-danger");
    divEmailError.classList.add("my-2");
    divEmailError.appendChild(textErrorEmail);

    if (!validator.isEmail(emailInput.value)) {
      emailDiv.appendChild(divEmailError);
      error = true;
    }

    //* password
    const passwordDiv = document.querySelector(".password");

    const lastPasswordError = passwordDiv.querySelector(".message-error");
    if (lastPasswordError) lastPasswordError.remove();

    const divPasswordError = document.createElement('div');
    const linhaError1 = document.createElement('div');
    const linhaError2 = document.createElement('div');

    linhaError1.textContent = 'A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial (@$!%*?&).';
    linhaError2.textContent = "Senha precisa ter entre 8 e 50 caracteres.";

    divPasswordError.classList.add("message-error");
    divPasswordError.classList.add("text-bg-danger");
    divPasswordError.classList.add("my-2");
    divPasswordError.append(linhaError1, linhaError2);

    if (passwordInput.value.length < 8 || passwordInput.value.length > 50) {
      passwordDiv.appendChild(divPasswordError);
      error = true;
    }
  }
}
