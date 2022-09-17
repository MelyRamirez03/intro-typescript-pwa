export class Multiplicar{
    private num1:number;
    private num2:number;
    private resultado:number;

    operacion(){
        this.num1=5;
        this.num2=3;
        this.resultado=this.num1*this.num2;
    }

    result(){
        console.log(`El resultado de ${this.num1} + ${this.num1} + ${this.num1} es = ${this.resultado}`);
    }
}

