import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const mockapiLink = "https://62b708ec491a19c97aed7ab6.mockapi.io/form-TP7";

export default new Vuex.Store({
    state: {
        usuarios: [],
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async postUsuarios({ commit }, usuarios) {
            try {
                await axios.post(mockapiLink, usuarios, {
                    "content-type": "application/json",
                });
                return true;
            } catch (e) {
                console.log(e.message);
                return false;
            }
        },
        async getUsuarios({ commit }) {
            try {
                const { usuariosRta } = await axios(mockapiLink);
                console.log(usuariosRta);
                commit("setUsuarios", usuariosRta);
            } catch (e) {
                console.warn(e.message);
            }
        },
    },
    mutations: {
        setUsuarios(state, usuarios) {
            state.usuarios = usuarios;
        },
    },
});