import Actions from './store-session-actions';
import Mutations from './store-session-mutations';
import UsersService from './../services/UsersService';
import Config from "../utils/Config";

const Session = {
  state: {
    user: {},
    lastUpdate: null,
    isLoading: false
  },
  mutations: {
    [Mutations.SET_USER](state, user) {
      state.user = user;
    },
    [Mutations.SET_TEAM](state, team) {
      state.user.team = team;
    },
    [Mutations.SET_BALANCE](state, { balance, unclaimed_balance }) {
      state.user.balance = balance;
      state.user.unclaimed_balance = unclaimed_balance;
    },
    [Mutations.UPDATE_STATE](state) {
      state.lastUpdate = (new Date()).toDateString();
    },
    [Mutations.SET_LOADING_STATUS](state, status) {
      state.isLoading = status;
    }
  },
  actions: {
    [Actions.AUTH](context) {
      let service = new UsersService();

      return service.getCurrent().then(async (user) => {
        context.commit(Mutations.SET_USER, user);
      }).catch(() => {
        context.commit(Mutations.SET_USER, { first_name: 'test', team: 'red', balance: 0 });
      })
    },
    [Actions.SET_TEAM](context, team) {
      let service = new UsersService();

      return service.chooseTeam(team).then(async () => {
        return service.getCurrent().then(async (user) => {
          context.commit(Mutations.SET_USER, user);
        })
      })
    },
    [Actions.UPDATE_BALANCE](context) {
      let service = new UsersService();

      service.transport.request(`game/balance`, null,
        (res) => {
          context.commit('setBalance', res.data.user);
        },
        'get', {withCredentials: true })
    },
    [Actions.LOGOUT](context, baseURL) {
      //window.location.href = Config.data.api.http.logoutURL
    },
    [Actions.UPDATE_STATE](context) {
      context.commit(Mutations.UPDATE_STATE, {});
    },
  },
  getters: {
    getLoadingStatus: state => state.isLoading
  }
}
export default Session;