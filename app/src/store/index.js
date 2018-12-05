import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import common_config from './modules/common_config';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    common_config,
    user
  },
  getters
});

export default store
