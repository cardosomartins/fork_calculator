class calculator {
    constructor() {
        this.dotToggle = false;
        this._btnArray = [];
        this._buttonsEl = document.querySelectorAll(".btn");
        this.init();
    }

    init() {
        this.showEachElement();
    }

    getLastClickedButton() {
        let lastButton = this._btnArray[this._btnArray.length - 1];
        if (isNaN(lastButton)) return true;
        else return false;
    }

    calculateExpression() {
        if (this._btnArray.length == 3) {
            if (this.getLastClickedButton()) {
                this._btnArray.splice(1, 1);
            }
            else {
                this._btnArray = [eval(`${this._btnArray[0]} ${this._btnArray[1]} ${this._btnArray[2]} `)]
            }
        }
        else if (this._btnArray[3] == ".") {
            this._btnArray[2] = eval(`${this._btnArray[2]} + ((${this._btnArray[4]})/(10**(${this._btnArray[4].length})))`);
            this._btnArray = [eval(`(${this._btnArray[0]} ${this._btnArray[1]} ${this._btnArray[2]})`)];
        }
    }

    joinArrayElements(elementToBeInserted) {
        let newConcatenatedArray = [this._btnArray[this._btnArray.length - 1]];
        newConcatenatedArray.push(elementToBeInserted.toString());
        this._btnArray.pop();
        this._btnArray.push(newConcatenatedArray.join(""));
    }

    buttonClickedOPeration(btnClickedValue) {

        if (this.dotToggle) {
            if (this._btnArray.length == 0) {
                this._btnArray.push("0");
                this._btnArray.push(".");
                this._btnArray.push(btnClickedValue);
            }
            else if (this._btnArray.length == 1) {
                if (this.getLastClickedButton()) {
                    this._btnArray.pop();
                    this._btnArray.push(".");
                }
                else {
                    this._btnArray.push(".");
                    this._btnArray.push(btnClickedValue);
                }
            }
            else {
                if (this._btnArray[1] != ".") {
                    if (this._btnArray[3] != ".") {
                        this._btnArray.push(".");
                        this._btnArray.push(btnClickedValue);
                    }
                    else {
                        this.joinArrayElements(btnClickedValue);
                    }
                }
                else { this.joinArrayElements(btnClickedValue) };
            }

        }
        else {
            if (this._btnArray[1] == ".") {
                this._btnArray = [eval(`${this._btnArray[0]} + ((${this._btnArray[2]})/(10**(${this._btnArray[2].length}))) `)];
                this._btnArray.push(btnClickedValue);
                return 0;
            }
            if (this._btnArray[3] == ".") {
                this._btnArray[2] = eval(`${this._btnArray[2]} + ((${this._btnArray[4]})/(10**(${this._btnArray[4].length})))`);
                this._btnArray = [eval(`(${this._btnArray[0]} ${this._btnArray[1]} ${this._btnArray[2]})`)];
                this._btnArray.push(btnClickedValue);
                return 0;
            }

            if (isNaN(btnClickedValue)) {
                this.calculateExpression();
                this._btnArray.push(btnClickedValue);
            }
            else {
                if (this._btnArray.length === 0) {
                    this._btnArray.push(btnClickedValue.toString());
                }
                else {
                    if (this.getLastClickedButton()) {
                        this.calculateExpression();
                        this._btnArray.push(btnClickedValue);
                    }
                    else {
                        this.joinArrayElements(btnClickedValue);
                    }
                }
            }

        }


    }

    clearEntryMethod() {
        this._btnArray.pop();
    }

    clearAllMethod() {
        this._btnArray = [];

    }

    invertSignMethod() {
        this.calculateExpression();
        if (this.getLastClickedButton()) this._btnArray.pop();
        let invertedNumber = -1 * Number(this._btnArray[0]);
        this._btnArray[0] = invertedNumber.toString();
    }

    percentageButton() {
        this.calculateExpression();
        if (this.getLastClickedButton()) this._btnArray.pop();
        this._btnArray[0] = this._btnArray[0] / 100;
    }

    dotToggleOn() {
        this.dotToggle = true;
        console.log(`dotToggle is now ${this.dotToggle}`);

    }

    dotToggleOff() {
        this.dotToggle = false;
        console.log(`dotToggle is now ${this.dotToggle}`);
    }

    squareNumber() {
        this.calculateExpression();
        if (this.getLastClickedButton()) this._btnArray.pop();
        let squareNumber = Number(this._btnArray[0]) ** 2;
        this._btnArray[0] = squareNumber.toString();
    }

    invertNumber() {
        this.calculateExpression();
        if (this.getLastClickedButton()) this._btnArray.pop();
        let invertNumber = 1 / Number(this._btnArray[0]);
        this._btnArray[0] = invertNumber.toString();
    }

    clickEventHandler(e) {
        let btnInnerContent = e.innerText;
        switch (btnInnerContent) {
            case '%':
                this.dotToggleOff()
                if (this._btnArray != 0) this.percentageButton();
                break;
            case 'x²':
                this.dotToggleOff()
                if (this._btnArray != 0) this.squareNumber();
                break;
            case '¹/x':
                this.dotToggleOff()
                this.invertNumber();
                break;
            case 'CE':
                this.dotToggleOff()
                this.clearEntryMethod();
                break;
            case 'C':
                this.dotToggleOff()
                this.clearAllMethod();
                break;
            case '←':
                this.dotToggleOff()
                if (this._btnArray != 0) this.buttonClickedOPeration(btnInnerContent);
                break;
            case '÷':
                this.dotToggleOff()
                if (this._btnArray != 0) this.buttonClickedOPeration("/");
                break;
            case '7':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '8':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '9':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case 'X':
                this.dotToggleOff()
                if (this._btnArray != 0) this.buttonClickedOPeration("*");
                break;
            case '4':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '5':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '6':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '-':
                this.dotToggleOff()
                this.buttonClickedOPeration(btnInnerContent);
                break;
            case '1':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '2':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '3':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '+':
                this.dotToggleOff()
                if (this._btnArray != 0) this.buttonClickedOPeration(btnInnerContent);
                break;
            case '±':
                this.dotToggleOff()
                if (this._btnArray != 0) this.invertSignMethod();
                break;
            case '0':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '.':
                this.dotToggleOn()
                break;
            case '=':
                this.dotToggleOff()
                if (this._btnArray != 0) this.calculateExpression();
                break;
        }
        console.log(`Current array: ${this._btnArray}`);

    }

    showEachElement() {
        this._buttonsEl.forEach(button => {
            button.addEventListener("click", () => {
                this.clickEventHandler(button);
            })
        });
    }

}

