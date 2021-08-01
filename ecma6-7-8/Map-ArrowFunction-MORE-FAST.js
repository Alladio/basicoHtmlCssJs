const array = [1, 2, 3, 4, 5, 6];

//Antes da ArrowFunctions
array.forEach(function (item, index) {

    array[index] = item * 2;
});

//Com ArrowFunctions
array = array.map((item) => {
    return item * 2;
})
console.log(array);

//Com ArrowFunctions
array = array
    .map((item) => item * 2)
    .filter(item => item < 5);

console.log(array);

api.get('/users/alladio').then(response => {

});

api.get('/users/alladio').then(response => tratarResposta(response));

//ANTES
const retornaJSX = () =>{
    return(
        <div class="container">

        </div>
    );
};
//AGORA - HTML
const retornaJSX = () =>( 
        <div class="container">
            <h1>Hellow World</h1>
        </div>
);
//OBJETO
const retornaObject = () => ( 
    {a:2,b:3}
);

const posts = [];
posts.map(post => ({a:"<Post1/>",b:"<Post2/>"}));