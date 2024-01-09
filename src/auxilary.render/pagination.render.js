function capitalize(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}

const constructor = (name, title, ...attributes) => {
    let inicialObj = {
        title: capitalize(name),
        css: name
    }
    return attributes.reduce((obj, [clave, valor]) => {
      obj[clave] = valor;
      return obj;
    }, inicialObj);
};

const constructorPagination = (itemsPerPage,paginationPages)=>{
    
};

module.exports = {
    constructor,
    constructorPagination
}