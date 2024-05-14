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
    return this.transport.request(`auth/identify`, {}, (res) => res.data,
      'get', {withCredentials: true })
  }
}