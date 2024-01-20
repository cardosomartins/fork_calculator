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

    carlinhos(){
        console.log("carlinhos diz oi!")
    }

    showEachElement(){
        this._buttonsEl.forEach( button => {
            button.addEventListener("click", this.carlinhos)
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

