import axios from 'axios';
import {getUserName} from './ajax';

jest.mock('axios');

test('formats async data correctly', async () => {
  axios.get.mockResolvedValue({data: 'Chuck Norris'});

  const result = await getUserName();

  expect(result).toBe('Chuck Norris');
  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1')
});