import request from 'supertest';
import {app} from './index'

test('returns 200 response code', async () => {
  const response = await request(app).get('/user');
  expect(response.statusCode).toBe(200);
  expect(response.body.name).toBe('tobi');
});