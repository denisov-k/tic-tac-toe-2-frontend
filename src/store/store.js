import Vue from 'vue'
import Vuex from 'vuex'
import session from './store-session';

Vue.use(Vuex);
const isDebug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    trict: isDebug,
    devtools: isDebug,
    modules: {
        session
    }
});