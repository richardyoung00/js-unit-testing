import axios from 'axios';

export const getUserGreeting = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => `Hello ${response.data}`);
};