class Calculator {
  constructor() {
    const display = document.querySelector(".display");

    this.start = () => {
      clickBtn();
      pressKeys();
      watchKeyboard();
    };

    const clickBtn = () => {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          btnToDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          clearDisplay();
        }

        if (el.classList.contains("btn-delete")) {
          deleteChar();
        }

        if (el.classList.contains("btn-eq")) {
          count();
        }
      });
    };

    const pressKeys = () => {
      display.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          count();
        }

        if (e.key === "Delete") {
          clearDisplay();
        }
      });
    };

    const btnToDisplay = (displayValue) => {
      display.value += displayValue;
      display.focus();
    };

    const clearDisplay = () => {
      display.value = "";
    };

    const deleteChar = () => {
      display.value = display.value.slice(0, -1);
    };

    const deleteInvalidChars = (equation) => {
      const cleaned = equation.replace(/[^\d\.\/\*\-\+\^\(\)e]/gi, "");
      return cleaned;
    };

    const watchKeyboard = () => {
      display.addEventListener("keydown", (e) => {
        const allowedKeys = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          ".",
          "/",
          "*",
          "-",
          "+",
          "(",
          ")",
          "Backspace",
          "Delete",
          "ArrowLeft",
          "ArrowRight",
          "Tab",
          "Enter",
        ];

        if (!allowedKeys.includes(e.key)) {
          e.preventDefault();
        }
      });
    };

    const count = () => {
      let count = deleteInvalidChars(display.value);

      try {
        count = eval(count);

        if (typeof count === undefined || isNaN(count)) {
          alert("Conta inválida");
          return;
        }

        display.value = String(count);
      } catch (error) {
        alert("Conta inválida");
        return;
      }
    };
  }
}

const calculator = new Calculator();
calculator.start();
