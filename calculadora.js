
// Constantes
const botonesNumero= document.querySelectorAll(`#botones`);
const botonesOperadores= document.querySelectorAll(`#operador`);
const botonIgual = document.querySelector(`#botonIgual`);
const botonBorrarTodo = document.querySelector(`#borrarTodo`);
const botonBorrar= document.querySelector(`#borrar`);
const valorAnterior = document.querySelector(`#displayAnterior`);
const valorActual = document.querySelector(`#displayActual`);



class Calculadora{ //Atributos

    constructor(valorAnterior, valorActual){
        this.valorAnterior = valorAnterior
        this.valorActual = valorActual
        this.actual = ""
        this.anterior = ""
        this.botonesOperadores = undefined
    }

    agregarNumero(numero){ // Metodos
        this.actual += numero

    } 
    imprimirDisplay(){
        this.valorActual.innerText = this.actual
        this.valorAnterior.innerText = this.anterior
    }
    borrar(){
        this.actual = this.actual.slice(0,-1)
    }
    elegirOperacion(operador){
        if(this.actual ===``) return
        if(this.anterior !=``){
            this.realizarCalculo()
        }
        this.operador = operador
        this.anterior = this.actual
        this.actual = ``
    }

    realizarCalculo(){
        let resultado
        let conversionValorAnterior = parseFloat(this.anterior)
        let conversionValorActual = parseFloat(this.actual)

        switch(this.operador){
            case `+`:
                resultado = conversionValorAnterior + conversionValorActual
            break       
            case `-`:
                resultado = conversionValorAnterior - conversionValorActual
            break
            case `*`:
                resultado = conversionValorAnterior * conversionValorActual
            break
            case `/`:
                resultado = conversionValorAnterior / conversionValorActual
            break
            default: return

        }
        this.actual = resultado
        this.operador = undefined
        this.anterior = ``

    }

    limpiarPantalla(){
        this.actual = ``
        this.anterior = ``
        this.operador = undefined
    }
}

const calculadora = new Calculadora (valorAnterior, valorActual)

botonesNumero.forEach(boton => {
    boton.addEventListener(`click`, ()=>{
         calculadora.agregarNumero(boton.innerText)
         calculadora.imprimirDisplay() 
    })
})

botonBorrar.addEventListener(`click`, ()=>{
    calculadora.borrar()
    calculadora.imprimirDisplay()

})

botonesOperadores.forEach(operador => {
    operador.addEventListener(`click`, ()=>{
         calculadora.elegirOperacion(operador.innerText)
         calculadora.imprimirDisplay() 
    
    })
})

botonIgual.addEventListener(`click`, ()=>{
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})    

botonBorrarTodo.addEventListener(`click`, ()=>{
    calculadora.limpiarPantalla()
    calculadora.imprimirDisplay()
})    