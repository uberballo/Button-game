import axios from 'axios';
const baseUrl = '/api/users';

const logIn = async username => {
  try {
    const res = await axios.post(baseUrl, { username: username });
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default { logIn };
