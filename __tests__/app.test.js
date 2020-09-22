const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns hi', async () => {
    const response = await request(app)
      .get('/');

    expect(response.text)
      .toEqual('hi');
  });

  it('returns status code 200 to request body', async () => {
    const response = await request(app)
      .post('/echo')
      .send({ body: 'plain text', status: '200 OK' })

    expect(response.text)
      .toEqual('plain text');
  });

  it('returns html with h1 and the word red', async () => {
    const response = await request(app)
      .get('/red')

    expect(response.text)
      .toEqual('<html><body><h1>red</h1></body></html>');
  });

  it('returns html with h1 and the word green', async () => {
    const response = await request(app)
      .get('/green')

    expect(response.text)
      .toEqual('<html><body><h1>green</h1></body></html>');
  });

  it('returns html with h1 and the word blue', async () => {
    const response = await request(app)
      .get('/blue')

    expect(response.text)
      .toEqual('<html><body><h1>blue</h1></body></html>');
  });
});
