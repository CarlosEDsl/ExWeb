class Carro{
    private nome:String
    private placa:String
    private cor:String
    private ano:Date

    constructor(){}

    public getNome(){
        return this.nome
    }
    public setnome(nome:String){
        this.nome = nome
    }

    public getPlaca(){
        return this.placa
    }
    public setPlaca(placa:String){
        this.placa = placa
    }

    public getCor(){
        return this.cor
    }
    public setCor(cor:String){
        this.cor = cor
    }

    public getAno(){
        return this.ano
    }

    public setAno(ano:Date){
        this.ano = ano
    }

}

let fusca = new Carro()
fusca.setnome = "Fusca Muito Bom"
console.log(fusca.getNome)