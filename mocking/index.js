import axios from 'axios';

export const getUserName = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.data);
};