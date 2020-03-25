const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  //Método get para listar as informações do banco
  async index (request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },
  // Método post para adicionar informações no banco
  async create(request, response) {
    //const data = request.body;
    const { name, email, whatsapp, city, uf } = request.body;
    // uma ferramenta do node para gerar uma chave criptografada
    // toString converte o number em string no valor HEXadecimal
    const id = crypto.randomBytes(4).toString('HEX');
    //operações do banco de dados
    // async e await => awaite vai aguardar finalizar para execultar o return
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    return response.json({ id });
  }
};
