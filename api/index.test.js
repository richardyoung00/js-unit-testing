import request from 'supertest';
import {app} from './index'

test('returns 200 response code and correct name', async () => {
  const testApi = request(app);
  const response = await testApi.get('/user');
  expect(response.statusCode).toBe(200);
  expect(response.body.name).toBe('Chuck Norris');
});