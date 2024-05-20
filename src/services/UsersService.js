import Service from './Service';
import Config from "../utils/Config";
export default class UsersService extends Service {

  /**
   * Возвращает юзера тек. сессии
   * @return {?}    then(data)
   * data ~ @see userEntity()
   */
  getCurrent() {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
    Telegram.WebApp.setBackgroundColor('#000000');
    Telegram.WebApp.setHeaderColor('#000000');

    let user = {
      ...Telegram.WebApp.initDataUnsafe.user,
      ref: Telegram.WebApp.initDataUnsafe.start_param
    };

    if (!user.id)
      return Promise.reject('No have user data');

    return this.transport.request(`auth/identify`, user, (res) => res.data,
      'post', {withCredentials: true })
  }

  chooseTeam(team) {
    return this.transport.request(`onboarding/choose_team`, { team }, (res) => res.data,
      'post', {withCredentials: true })
  }
}