import axios from 'axios';

const API = async () => {
    const data = await axios.get(`https://randomuser.me/api/`)
    return data;
}

export default API;