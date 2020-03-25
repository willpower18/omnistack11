const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index (request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response){
        //Recebe os dados do corpo da requisição
        const {name, email, whatsapp, city, uf} = request.body;
        //Gera o Id
        const id = crypto.randomBytes(4).toString('HEX');
        //Faz o insert no banco
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        //Retorna um Json
        return response.json({id});
    }
};