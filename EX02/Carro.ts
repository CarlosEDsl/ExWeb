class Carro {
    private nome: string
    private placa: string
    private cor: string
    private ano: Date

    constructor() {}

    public getNome(): string {
        return this.nome
    }

    public setNome(nome: string): void {
        this.nome = nome
    }

    public getPlaca(): string {
        return this.placa
    }

    public setPlaca(placa: string): void {
        this.placa = placa
    }

    public getCor(): string {
        return this.cor
    }

    public setCor(cor: string): void {
        this.cor = cor
    }

    public getAno(): Date {
        return this.ano
    }

    public setAno(ano: Date): void {
        this.ano = ano
    }
}

let fusca = new Carro();
fusca.setNome("Fusca Muito Bom");
console.log(fusca.getNome());