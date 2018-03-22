import axios from 'axios';
import {getUserGreeting} from './index';

jest.mock('axios');

test('greets user by username', async () => {
  axios.get.mockResolvedValue({data: 'Chuck Norris'});

  const greeting = await getUserGreeting();

  expect(greeting).toBe('Hello Chuck Norris');

  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1')
});