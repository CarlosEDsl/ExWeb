class Calculadora{
    private valor1:number
    private valor2:number

    constructor(valor1:number, valor2:number){
        this.valor1 = valor1
        this.valor2 = valor2
    }


    public getValor1(valor1:number){
        return this.valor1
    }
    public setValor1(valor1:number){
        this.valor1 = valor1
    }

    public getValor2(valor2:number){
        return this.valor2
    }
    public setValor2(valor2:number){
        this.valor2 = valor2
    }

    public Soma(){
        return (this.valor1 + this.valor2)
    }

    public Subtracao(){
        return this.valor1 - this.valor2
    }

    public Multiplicacao(){
        return this.valor1 * this.valor2
    }

    public Divisao(){
        if(this.valor2 != 0)
            return this.valor1 / this.valor2
        else
            return 0
    }

}

let c = new Calculadora(50, 20)
console.log(c.Multiplicacao())
console.log(c.Soma())
console.log(c.Divisao())
console.log(c.Subtracao())