import Service from './Service';
import Config from "../utils/Config";
import {THEME, TonConnectUI} from "@tonconnect/ui";

export default class TransactionsService extends Service {
  constructor() {
    super();

    this.tonConnect = new TonConnectUI({
      manifestUrl: Config.data.api.ton.manifestUrl,
      uiPreferences: {
        theme: THEME.DARK
      },
      widgetRootId: 'auth-form'
      // buttonRootId: 'button'
    })
  }



  async topUp(amount) {
    await this.tonConnect.connector.restoreConnection();

    const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
      messages: [
        {
          address: "UQB29cTiTEDATY9nlR76LmymzE_xWvYzB__JAk5iq2Nb6uSz",
          amount: amount,
          // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
        }
      ]
    }

    const result = await this.tonConnect.sendTransaction(transaction);

   // const result = "te6cckEBAgEAqQAB34gBJJkH6Xubkc2VmZDOC4KlG4bMQKNDq8znxAtz1/4hQTQDftj6PJWQpDGbi7qJKofNzsFkrAv3OzkpBOU2gLsGYS0yyGqg2sGim6sm4mM0nABZtZmuharqIaAzVIlr64OIMU1NGLsx3PhoAAAAQBwBAGhiACCSCDuO1BZdGDUq/U8GoeTpIvHAmeWseKK+/caubESXoC+vCAAAAAAAAAAAAAAAAAAAftpmAw==";

    return this.transport.request(`transactions/top_up`,
      { boc: result, amount, address: this.tonConnect.account.address }, () => {

    }, 'post', {withCredentials: true });
  }

}
