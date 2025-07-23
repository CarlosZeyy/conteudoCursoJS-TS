function createCalculator() {
  return {
    display: document.querySelector(".display"),

    start() {
      this.clickBtn();
      this.pressEnter();
      this.watchKeyboard();
    },

    clickBtn() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnToDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-delete")) {
          this.deleteChar();
        }

        if (el.classList.contains("btn-eq")) {
          this.count();
        }
      });
    },

    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          this.count();
        }
        
        if (e.key === "Delete") {
          this.clearDisplay();
        }
      });
    },

    btnToDisplay(value) {
      this.display.value += value;
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteChar() {
      this.display.value = this.display.value.slice(0, -1);
    },

    del_invalid_chars(equation) {
      const cleaned = equation.replace(/[^\d\.\/\*\-\+\^\(\)e]/gi, "");
      return cleaned;
    },

    watchKeyboard() {
      this.display.addEventListener("keydown", (e) => {
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
    },

    count() {
      let count = this.del_invalid_chars(this.display.value);

      try {
        count = eval(count);

        if (typeof count === undefined || isNaN(count)) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(count);
      } catch (error) {
        alert("Conta inválida");
        return;
      }
    },
  };
}

const calculator = createCalculator();
calculator.start();