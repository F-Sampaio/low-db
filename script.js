const lowdb = require('lowdb');
const fileSyng = require('lowdb/adapters/FileSync');

const adapter = new fileSyng('banco.json');
const db = lowdb(adapter);
// cria o banco banco.json
db.defaults({
    noticias:[],
    usuarios:[],   
}).write()

// insere
// db.get('noticias')
//     .push({
//         id: "1",
//         assunto: 'mundo',
//         conteudo: 'noticia teste',
//     }).write()

db.set("settings.toggledOption", true).write

// Faz busca
// const busca = db
//     .get('noticias')
//     .find({id: '1'})
//     .value()
// console.log(busca)

// deleta
// db.get('noticias')
//     .remove({id : '1'})
//     .write()


