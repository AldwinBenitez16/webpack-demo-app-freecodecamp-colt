export class ComponentService {
    constructor() {
        this.numberOneInput = document.getElementById("numberOne");
        this.numberTwoInput = document.getElementById("numberTwo");
        this.addValuesButton = document.getElementById("addValues");
        this.resultDiv = document.getElementById("result");
    }

    // returns the input values
    getInputs() {
        return [this.numberOneInput.value, this.numberTwoInput.value];
    }

    // sets the result
    setResult(str) {
        this.resultDiv.innerText = str;
    }

    // Adds an click listener that runs cb
    onClick(cb) {
        this.addValuesButton.addEventListener("click", cb);
    }
}