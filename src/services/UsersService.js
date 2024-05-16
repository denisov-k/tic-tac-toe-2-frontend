import Service from './Service';
import Config from "../utils/Config";
export default class UsersService extends Service {

  /**
   * Возвращает юзера тек. сессии
   * @return {?}    then(data)
   * data ~ @see userEntity()
   */
  async signUp() {
    /*const tonConnect = new TonConnect({
      manifestUrl: Config.data.api.ton.manifestUrl,

    });
    await tonConnect.restoreConnection();

    if (!tonConnect.account)
      throw new Error('Wallet is not connected');*/

    return this.transport.request(`auth/sign_up`, tonConnect.account, () => {

    }, 'post', {withCredentials: true });
  }

  getCurrent() {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();

    console.log(Telegram)

    let user = Telegram.WebApp.initDataUnsafe.user;

    if (!user)
      return Promise.reject('No have user data');

    return Promise.resolve(user);

    return this.transport.request(`auth/identify`, user, (res) => res.data,
      'post', {withCredentials: true })
  }
}