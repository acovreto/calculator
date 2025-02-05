class Calculator {
  operand1 = 0;
  operand2 = 0;
  lastOparation = null;
  buttonsEl = document.querySelector(".calculator__keys");
  displayEl = document.querySelector(".calculator__output");
  constructor() {
    this.events();
  }
   events() {
    this.buttonsEl.addEventListener("click", (e) => {
      let clickedButton = e.target.textContent;

      if (clickedButton !== "=" && clickedButton !== "AC") {
        this.displayInput(clickedButton);
      } else if (clickedButton === "=") {
        this.lastOparation = "=";
        let expresion = this.displayEl.textContent;
        this.displayEl.textContent = eval(expresion);
      } else if (clickedButton === "AC") {
        this.clearDisplay();
      }
    });
  }
clearDisplay() {
    this.displayEl.textContent = "0";
  }
  displayResult(result) {
    this.displayEl.textContent = result;
  }
  displayInput(clickedButton) {
    if (this.lastOparation == "=") {
      this.lastOparation = clickedButton;
      if (
        clickedButton == "+" ||
        clickedButton == "-" ||
        clickedButton == "*" ||
        clickedButton == "/"
      ) {
        this.displayEl.textContent += clickedButton;
        return;
      }
      this.clearDisplay();
    }
    if (this.displayEl.textContent == "0") {
      this.displayEl.textContent = clickedButton;
    } else {
      this.displayEl.textContent += clickedButton;
    }
  }
}
const calculator = new Calculator();
