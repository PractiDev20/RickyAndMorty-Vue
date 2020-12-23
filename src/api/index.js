import axios from 'axios'

const HOST = 'https://rickandmortyapi.com/api';

export default {
    getAllCharacters: () => axios.get(`${HOST}/character`).then(res => res.data),
    getCharacter: (id) => axios.get(`${HOST}/character/${id}`).then(res => res.data),
    getCharacterByName: (name) => axios.get(`${HOST}/character/?name=${name}`).then(res => res.data),
}
