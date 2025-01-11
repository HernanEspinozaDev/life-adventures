// src/store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    resorts: [],
    guides: [],
    cities: [],
    loading: false,
    error: null,
  },
  mutations: {
    setResorts(state, payload) {
      state.resorts = payload;
    },
    setGuides(state, payload) {
      state.guides = payload;
    },
    setCities(state, payload) {
      state.cities = payload;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async loadResorts({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('/resorts.json');
        commit('setResorts', response.data);
      } catch (error) {
        commit('setError', error);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadGuides({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('/guias.json');
        commit('setGuides', response.data.results);
      } catch (error) {
        commit('setError', error);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadCities({ commit }) {
      commit('setLoading', true);
      try {
        const response = await axios.get('/ciudades.json');
        commit('setCities', response.data);
      } catch (error) {
        commit('setError', error);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  modules: {},
});
