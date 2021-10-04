/**
 * Aqui ficam as constante do jogo.
 * Config é uma classe que tem os estados do jogo,como jogando,mutado,primeiro acesso,perdeu
 */
export const START_COUNT = 2
export class Config {
    constructor(
        public muted: boolean = false, 
        public loose: boolean = false, 
        public playing: boolean = false, 
        public is_first_access: boolean = true) { }
}
/* tipo de enumeração que nós fornece uma
 simples de definirmos um conjunto de constantes,como cores.*/ 
export enum COLORS {
    red,
    blue,
    green,
    yellow,
}

/*
Promise: callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback 
used to reject the promise with a provided reason or error.
Com isso o programa vai pra proxima linha de codigo,antes que a tarefa com Promise termine */
export const sleep = async time => {
    return new Promise(resolve => setTimeout(resolve, time));
}