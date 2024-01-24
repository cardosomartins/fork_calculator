class calculator{
    constructor(){
        this.dotToggle = false;
        this._btnArray = [];
        this._buttonsEl = document.querySelectorAll(".btn");
        this._operation;
        this.init();
    }

    init(){
        
        // let intervalId = setInterval(() => {this.calculatorMethod()}, 500);

        // this.calculatorMethod();

        // setTimeout(() => {clearInterval(intervalId)}, 1000);     
        
        this.showEachElement();     
    }

    getLastClickedButton(){
        let lastButton = this._btnArray[this._btnArray.length - 1];
        if(isNaN(lastButton)) return true;        
        else return false;        
    }

    calculateExpression(){
        if(this._btnArray.length == 3){
            if(this.getLastClickedButton()){
                this._btnArray.splice(1,1);              
            }
            else{
                this._btnArray = [eval(`${this._btnArray[0]} ${this._btnArray[1]} ${this._btnArray[2]} `)]
            }
        }
        console.log(`Current array: ${this._btnArray}`);
    }

    buttonClickedOPeration(btnClickedValue){

        if(this.dotToggle){
            if(this._btnArray.length == 0){
                this._btnArray.push("0");
                this._btnArray.push(".");
                this._btnArray.push(btnClickedValue);
            }            
            else{
                let newConcatenatedArray = [this._btnArray[this._btnArray.length - 1]];
                newConcatenatedArray.push(btnClickedValue.toString());
                this._btnArray.pop();
                this._btnArray.push(newConcatenatedArray.join(""));
            }
        console.log(`Current array: ${this._btnArray}`);

        }
        else{
            if(this._btnArray[1] == "."){
                this._btnArray = [eval(`${this._btnArray[0]} + ((${this._btnArray[2]})/(10**(${this._btnArray[2].length}))) `)];
                return 0;
            }

            if(isNaN(btnClickedValue)){
                this.calculateExpression();
                this._btnArray.push(btnClickedValue);                        
            }
            else{                
                if (this._btnArray.length === 0) {
                    this._btnArray.push(btnClickedValue.toString());
                }
                else{
                    if(this.getLastClickedButton()){
                        this.calculateExpression();
                        this._btnArray.push(btnClickedValue);
                    }
                    else{
                        let newConcatenatedArray = [this._btnArray[this._btnArray.length - 1]];
                        newConcatenatedArray.push(btnClickedValue.toString());
                        this._btnArray.pop();
                        this._btnArray.push(newConcatenatedArray.join(""));
                    }
                }            
            }
        }
        
        
        console.log(`Current array: ${this._btnArray}`);
    }

    clearEntryMethod(){
        this._btnArray.pop();
        console.log(`Current array: ${this._btnArray}`);
    }
    clearAllMethod(){
        this._btnArray = [];
        console.log(`Current array: ${this._btnArray}`);

    }

    invertSignMethod(){
        this.calculateExpression();
        if(this.getLastClickedButton()) this._btnArray.pop();
        let invertedNumber = -1 * Number(this._btnArray[0]);
        this._btnArray[0] = invertedNumber.toString();
        console.log(`Current array: ${this._btnArray}`);
    }

    percentageButton(){
        this.calculateExpression();
        if(this.getLastClickedButton()) this._btnArray.pop();
        this._btnArray[0] = this._btnArray[0]/100;
        console.log(`Current array: ${this._btnArray}`);
    }
    
    dotToggleOn(){
        this.dotToggle = true;
        console.log(`dotToggle is now ${this.dotToggle}`);
    }
    dotToggleOff(){
        this.dotToggle = false;
        console.log(`dotToggle is now ${this.dotToggle}`);
    }

    clickEventHandler(e){
        let btnInnerContent = e.innerText;
        switch(btnInnerContent){
            case '%':
                this.dotToggleOff()
                if(this._btnArray != 0) this.percentageButton();                
                break;
            case 'x²':
                this.dotToggleOff()
                if(this._btnArray != 0) this.buttonClickedOPeration(btnInnerContent);
                break;
            case '¹/x':
                this.dotToggleOff()
                this.buttonClickedOPeration(btnInnerContent);
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
                if(this._btnArray != 0) this.buttonClickedOPeration(btnInnerContent);
                break;
            case '÷':
                this.dotToggleOff()
                if(this._btnArray != 0) this.buttonClickedOPeration("/");
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
                if(this._btnArray != 0) this.buttonClickedOPeration("*");
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
                if(this._btnArray != 0) this.buttonClickedOPeration(btnInnerContent);
                break;
            case '±':
                this.dotToggleOff()
                if(this._btnArray != 0) this.invertSignMethod();
                break;
            case '0':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '.':
                this.dotToggleOn()
                break;
            case '=':
                this.dotToggleOff()
                if(this._btnArray != 0) this.calculateExpression();
                break;
        }
    }

    showEachElement(){
        this._buttonsEl.forEach( button => {
            button.addEventListener("click", () => {
                this.clickEventHandler(button);})
        });
    }


    calculatorStart(){
        this._operation = 7;
        console.log(this._operation);
    }

    calculatorMethod(){ 

        this.calculatorStart();
        
    }

    
    


    
    get operation(){
        return this._operation;
    }
    set operation(value){
        this._operation = value;
    }
}

