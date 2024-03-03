
//EXERCICIO 1
function maiorNumero(lista:number[]):number{
    var maior:number=lista[0]
    for(var i=0; i < lista.length; i++){
        if(maior < lista[i]){
            maior = lista[i]
        }
    }
    return maior;
}

console.log(maiorNumero([1, 3, 4, 5, 2, 42, 3]))

//EXERCICIO 2
function isPar(numero:number):boolean{
    return (numero % 2 == 0)
}

console.log(isPar(3))

//EXERCICIO 3
function aritm(...num:number[]):number{
    var total:number=0
    if(num){
        for(var i=0; i < num.length; i++){
            total += num[i]
        }
        return total/num.length
    }
    return 0;
}

console.log(aritm(2, 4, 5, 7))

//EXERCICIO 4
function upperCase(str:string):string{
    return str.toUpperCase();
}

console.log(upperCase("dsadasdasdasjdaskdjaskdjas"))


//EXERCICIO 5
function isPrimo(numero:number):boolean{
    return !(numero % 2 == 0)
}

console.log(isPrimo(4))
console.log(isPrimo(5))


//EXERCICIO 6
function inverteArray(array:any){
    let inverso:any[]=[];
    for(let i = array.length-1; i >= 0; i--){
        inverso.push(array[i])
    }
    return inverso;
}

function inverteFacil(ar:any){
    return ar.reverse()
}

console.log(inverteArray([321, 321, 324, 543, 2, 2]))
console.log(inverteFacil([321, 321, 324, 543, 2, 2]))


//EXERCICIO 7
function acrescPorct(valor:number, porcentagem:number):number{
    return (valor + valor*porcentagem)
}

//EXERCICIO 8
function inverterPalavra(str:string):string{
    let strAr:string[] = str.split("")
    return strAr.reverse().join("")
}

console.log(inverterPalavra("joao"))

//EXERCICIO 9
function somaPar(ar:number[]):number{
    let numerosPares:number=0
    for(let i=0; i<ar.length; i++){
        if(ar[i] % 2 == 0){
            numerosPares += ar[i]
        }
    }
    return numerosPares
}

console.log(somaPar([2, 4, 5, 1, 2, 4]))

//EXERCICIO 10
function fatorial(valor:number):number{
    let fat:number=1

    for(let i=1; i<= valor; i++){
        fat = fat * i;
    }
    return fat
}

console.log(fatorial(21))