export default class Signup {
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
    const nameInput = el.querySelector('input[name="name"]');
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    // Remove mensagens de erro anteriores
    this.clearErrors(el);

    // Validação do nome
    if (!nameInput.value) {
      this.createError(nameInput, 'Nome é obrigatório.');
      error = true;
    } else if (!this.isValidName(nameInput.value)) {
      this.createError(nameInput, 'Nome inválido. Use apenas letras, espaços, hífens ou apóstrofos.');
      error = true;
    }

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
    } else if (passwordInput.value.length < 8 || passwordInput.value.length > 50) {
      this.createError(passwordInput, 'Senha precisa ter entre 8 e 50 caracteres.');
      error = true;
    } else if (!this.isStrongPassword(passwordInput.value)) {
      this.createError(
        passwordInput, 
        'A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial (@$!%*?&).'
      );
      error = true;
    }

    if (!error) el.submit();
  }

  isValidName(name) {
    // Permite letras (incluindo acentos), espaços, hífens e apóstrofos
    const nameRegex = /^[a-záàâãéèêíïóôõöúçñ\s'\-]+$/i;
    return nameRegex.test(name);
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isStrongPassword(password) {
    // Deve conter pelo menos: 1 maiúscula, 1 minúscula, 1 número e 1 caractere especial
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return passwordRegex.test(password);
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
