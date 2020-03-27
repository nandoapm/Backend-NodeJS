const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')


describe('Ong', () => {
  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  } )

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new Ong', async () => {
    const response = await request(app)
      .post('/ongs')
      //.set('Authorization', 'eabe0fe1') usado para rota que precisa de headers de autorização 
      .send({
        name: "APAD2",
        email: "teste@teste.com",
        whatsapp: "41999999999",
        city: "curitiva",
        uf: "PR",
    })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})