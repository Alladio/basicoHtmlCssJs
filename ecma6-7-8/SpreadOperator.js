const array = [1,2,3,4,5];

const [a,b, ... c] = array;

console.log(c);

const css = { fonstSize:12,color:'#FFF'};

const tituloCss={
    fonstWeight:'bold',
    ...css,
    //Mudar o valor da fonte - MANTEM O RESTO DOS VALORES 
    fontSize:20
}

const user = {
    nome:"Alladio",
    sobrenome:"Bonesso"
}

function mostrarNome(nome,sobrenome){
    console.log(user);
}
mostrarNome();