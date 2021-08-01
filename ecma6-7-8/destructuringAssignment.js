const endereco ={
    rua: 'Av. Marechal',
    numero: 1234,
    uf_cidade:{
        uf:'PR',
        cidade:'Curitiba'
    }
};

const { rua,numero, uf_cidade:{ cidade } } = endereco;
console.log(rua);
console.log(numero);
console.log(endereco.uf_cidade);
const array =[1,2,3];
const [a,b,c] = array;
console.log(a);
console.log(b);
console.log(c);

