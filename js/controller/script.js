class calculator{
    constructor(){
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

    clickEVentHandler(e){
        let a = e.target.innerText;   
        switch(a){
            case '%':
                
                break;
            case '%':
                
                break;
            case 'x²':
                
                break;
            case '¹/x':
                
                break;
            case 'CE':
                
                break;
            case 'C':
                
                break;
            case '←':
                
                break;
            case '÷':
                
                break;
            case '7':
                
                break;
            case '8':
                
                break;
            case '9':
                
                break;
            case 'X':
                
                break;
            case '4':
                
                break;
            case '5':
                
                break;
            case '6':
                
                break;
            case '-':
                
                break;
            case '1':
                
                break;
            case '2':
                
                break;
            case '3':
                
                break;
            case '+':
                
                break;
            case '±':
                
                break;
            case '0':
                
                break;
            case ',':
                
                break;
            case '=':
                
                break;
        }
    }

    showEachElement(){
        this._buttonsEl.forEach( button => {
            button.addEventListener("click", this.clickEVentHandler)
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

