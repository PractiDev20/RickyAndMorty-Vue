import api from '../api'

const state = {
    characters: [],
    currentCharacter: {},
}

const mutations = {
    SET_CHARACTERS(state, characters) {
        state.characters = characters;
    },
    SET_CHARACTER(state, character) {
        state.currentCharacter = character;
    }
}

const actions = {
    async getCharacters({ commit }) {
        const characters = await api.getAllCharacters();
        commit("SET_CHARACTERS", characters.results);
    },
    async getCharacter({ commit }, id) {
        const character = await api.getCharacter(id);
        debugger; //eslint-disable-line
        commit("SET_CHARACTER", character);
    }
}

export default {
    state,
    mutations,
    actions,
}