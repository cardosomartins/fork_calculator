class calculator{
    constructor(){
        this.operation;
        this._operation;
        this.init();
    }

    init(){

        let calculatorMethod = () => {
            this.calculatorStart()
        };

        let intervalId = setInterval(calculatorMethod, 500);

        setTimeout(() => {clearInterval(intervalId)}, 1000);     
        
     
    }

    calculatorStart(){
        this._operation = 5;
        console.log(this._operation);
    }
    
    get operation(){
        return this._operation;
    }
    set operation(value){
        _operation = value;
    }
}

