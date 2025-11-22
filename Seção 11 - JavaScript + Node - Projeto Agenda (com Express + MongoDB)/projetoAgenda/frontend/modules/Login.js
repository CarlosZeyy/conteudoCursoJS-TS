export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    // Remove mensagens de erro anteriores
    this.clearErrors(el);

    // Validação do email
    if (!emailInput.value) {
      this.createError(emailInput, 'E-mail é obrigatório.');
      error = true;
    } else if (!this.isValidEmail(emailInput.value)) {
      this.createError(emailInput, 'E-mail inválido.');
      error = true;
    }

    // Validação da senha
    if (!passwordInput.value) {
      this.createError(passwordInput, 'Senha é obrigatória.');
      error = true;
    }

    if (!error) el.submit();
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.className = 'error-message text-danger small mt-1';
    div.innerText = msg;
    field.parentElement.appendChild(div);
  }

  clearErrors(form) {
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
  }
}
