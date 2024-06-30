import Service from './Service';
import Config from "../utils/Config";
export default class UsersService extends Service {

  /**
   * Возвращает юзера тек. сессии
   * @return {?}    then(data)
   * data ~ @see userEntity()
   */
  getCurrent() {
    let data = { tgData: Telegram.WebApp.initData };

    return this.transport.request(`auth/identify`, data, (res) => res.data,
      'post', {withCredentials: true })
  }

  chooseTeam(team) {
    return this.transport.request(`game/choose_team`, { team }, (res) => res.data,
      'post', {withCredentials: true })
  }

  blowUp() {
    //return Promise.resolve();
    return this.transport.request(`game/blow_up`, {}, (res) => res.data,
      'post', {withCredentials: true })
  }

  protect() {
    return this.transport.request(`game/protect`, {}, (res) => res.data,
      'post', {withCredentials: true })
  }

  getRefs() {
    return this.transport.request(`game/referrals`, {}, (res) => res.data,
      'get', {withCredentials: true })
  }

  getTasks() {
    return this.transport.request(`game/tasks`, {}, (res) => res.data,
      'get', {withCredentials: true })
  }

  getTransactions() {
    return this.transport.request(`game/transactions`, {}, (res) => res.data,
      'get', {withCredentials: true })
  }

  claimTask(taskId) {
    return this.transport.request(`game/tasks`, { taskId }, (res) => res.data,
      'post', {withCredentials: true })
  }

  claimBalance() {
    return this.transport.request(`game/claim`, {}, (res) => res.data,
      'post', {withCredentials: true })
  }
}