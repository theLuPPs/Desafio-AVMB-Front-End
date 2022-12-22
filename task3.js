function JsonObj(key = '',value){
    return '{"'+key+'": ' + (typeof(value) === 'string'? '"'+value+'"}': value+'}'); 
}

console.log(JsonObj('age', 28));