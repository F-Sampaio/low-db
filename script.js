const lowdb = require('lowdb');
const fileSyng = require('lowdb/adapters/FileSync');

const adapter = new fileSyng('banco.json');
const db = lowdb(adapter);
// CRUD COM LOWDB
// cria o banco banco.json
db.defaults({
    noticias:[],
    usuarios:[],   
}).write()

// CREAT
// db.get('noticias')
//     .push({
//         id: "",
//         assunto: '',
//         conteudo: '',
//     }).write()


// READ
// const busca = db
//     .get('noticias')
//     .find({id: '2'})
//     .value()
// console.log(busca)

// UPDATE
// db.get('noticias')
//     .find({assunto: 'mundo'})
//     .assign({assunto: 'Mundo'})
//     .write()


// DELETE
// db.get('noticias')
//     .remove({id : '1'})
//     .write()


