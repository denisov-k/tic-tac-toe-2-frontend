import Actions from './store-session-actions';
import Mutations from './store-session-mutations';
import UsersService from './../services/UsersService';
import Config from "../utils/Config";

const Session = {
  state: {
    user: {},
    lastUpdate: null
  },
  mutations: {
    [Mutations.SET_USER](state, user) {
      state.user = { ...state.user, ...user };
    },
    [Mutations.UPDATE_STATE](state) {
      state.lastUpdate = (new Date()).toDateString();
    }
  },
  actions: {
    [Actions.AUTH](context) {
      let service = new UsersService();

      /*return service.getCurrent().then(async (user) => {
        context.commit(Mutations.SET_USER, user);
      }).catch(() => {
        context.commit(Mutations.SET_USER, {});
      })*/
    },
    [Actions.LOGOUT](context, baseURL) {
      //window.location.href = Config.data.api.http.logoutURL
    },
    [Actions.UPDATE_STATE](context) {
      context.commit(Mutations.UPDATE_STATE, {});
    },
  },
  getters: {

  }
}
export default Session;