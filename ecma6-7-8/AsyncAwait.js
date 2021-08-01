const buscarUsuario = async () => {

    const user = await api.get('/users/alladio');

    //Somente imprimirá depois de buscar a requisição
    console.log();

};

const buscarUsuario = async () => {

    try {
        const user = await api.get('/users/alladio');

    } catch (error) {
        console.log(error);
    }
};