class Calculator {
  operand1 = 0;
  operand2 = 0;
  buttonsEl = document.querySelector(".calculator__keys");
  displayEl = document.querySelector(".calculator__output");
  constructor() {
    this.events();
  }
  events() {
    this.buttonsEl.addEventListener("click", (e) => {
      let number = e.target.textContent;
      console.log(e.target.textContent == "+");
      if (
        number == "+" ||
        number == "-" ||
        number == "*" ||
        number == "/" ||
        number == "AC" ||
        number == "="
      ) {
        console.log(e.target.textContent);
      } else {
        this.displayNumber(number);
      }
    });
  }
  displayNumber(number) {
    if (this.displayEl.textContent == "0") {
      this.displayEl.textContent = number;
    } else {
      if (this.displayEl.textContent.includes(".") && number == ".") return;
      this.displayEl.textContent += number;
    }
  }
}
const calculator = new Calculator();
