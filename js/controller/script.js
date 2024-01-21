class calculator{
    constructor(){
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

    }

    buttonClickedOPeration(btnClickedValue){       

        if(isNaN(btnClickedValue)){
            
            this._btnArray.push(btnClickedValue);                        
        }
        else{          
            if (this._btnArray.length === 0) {
                this._btnArray.push(btnClickedValue.toString());
            }
            else{
                let newConcatenatedArray = Array.from(this._btnArray);
                newConcatenatedArray.push(btnClickedValue.toString());
                this._btnArray.pop();
                this._btnArray.push(newConcatenatedArray.join(""));
            }            
        }
        console.log(`Current array: ${this._btnArray}`);
    }


    clickEventHandler(e){
        console.log(e);
        let btnInnerContent = e.innerText;
        switch(btnInnerContent){
            case '%':
                this.buttonClickedOPeration(btnInnerContent);                
                break;
            case 'x²':
                this.buttonClickedOPeration(btnInnerContent);
                break;
            case '¹/x':
                this.buttonClickedOPeration(btnInnerContent);
                break;
            case 'CE':
                this.buttonClickedOPeration(btnInnerContent);
                break;
            case 'C':
                this.buttonClickedOPeration(btnInnerContent);
                break;
            case '←':
                this.buttonClickedOPeration(btnInnerContent);
                break;
            case '÷':
                this.buttonClickedOPeration(btnInnerContent);
                break;
            case '7':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '8':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case '9':
                (() => this.buttonClickedOPeration(parseInt(btnInnerContent)));
                break;
            case 'X':
                this.buttonClickedOPeration(btnInnerContent);
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
                this.buttonClickedOPeration(btnInnerContent);
                break;
            case '±':
                this.buttonClickedOPeration(btnInnerContent);
                break;
            case '0':
                this.buttonClickedOPeration(parseInt(btnInnerContent));
                break;
            case ',':
                this.buttonClickedOPeration(btnInnerContent);
                break;
            case '=':
                this.buttonClickedOPeration(btnInnerContent);
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

