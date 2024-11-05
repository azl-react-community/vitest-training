import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

export const getData = async (url: string) => {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
}

export const postData = async (url: string , payload:any) => {
  const response = await axios.post(url, payload);
  return response.data;
}

export const fetchGraphQL = async (query, variables = {}) => {
  const response = await axios.post('/graphql', {
    query,
    variables,
  });
  return response.data;
}
