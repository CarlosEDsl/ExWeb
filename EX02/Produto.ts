class Produto {
    private nome: String
    private preco:number
    private quantidadeEmEstoque:number

    constructor(nome:String, preco:number, quantidadeEmEstoque:number){
        this.nome = nome
        this.preco = preco
        this.quantidadeEmEstoque = quantidadeEmEstoque
    }

    //GETTERS E SETTERS
    
    public getnome(): String {
        return this.nome
    }
    public setnome(nome: String) {
        this.nome = nome
    }

    public getpreco(): number {
        return this.preco
    }

    public setpreco(preco: number){
        this.preco = preco;
    }

    public getquantidadeEmEstoque(): number {
        return this.quantidadeEmEstoque
    }

    public setquantidadeEmEstoque(quantidadeEmEstoque: number){
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    //METODOS

    calcularValorTotalEmEstoque(){
        return (this.quantidadeEmEstoque * this.preco)
    }

    reporEstoque(quantidade: number){
        this.quantidadeEmEstoque += quantidade
    }

    vender(quantidade: number){
        if(quantidade <= this.quantidadeEmEstoque){
            this.quantidadeEmEstoque -= quantidade;
        }
        else{
            alert("Não há estoque suficiente")
        }
    }


    
}

let produto = new Produto("Cadeira", 250, 600)
console.log(produto.calcularValorTotalEmEstoque())
produto.reporEstoque(50)
console.log(produto.getquantidadeEmEstoque())
produto.vender(600)
console.log(produto.getquantidadeEmEstoque())
produto.vender(51)
console.log(produto.getquantidadeEmEstoque())
