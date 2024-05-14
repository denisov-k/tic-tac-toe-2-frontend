import axios from 'axios';
import Config from "../utils/Config";

// @private
let REQUEST_ID = 0;
/**
 * Http transport
 * @param {object} options дефолтные настройки @default {} @see https://www.npmjs.com/package/axios
 */
export default class ServiceTransport {
    constructor(options) {
        this._requests = [];
        this.options = options;
        this.axios = axios.create(this.options);
    }

    /**
     * Создает новый http request
     * @param {string} url                  ссылка api метода @example '/user/edit'
     * @param {object} params               params @default {}
     * @param {function} responseHandler    custom response handler,который орабатывает response @default null @example (response) => { return response.data; }
     * @param {string} method               method @default 'get'
     * @param {object} options              request options @default {} @see https://www.npmjs.com/package/axios
     * @return {Promise}                    promise, имеет параметр 'id' для отмены request @see this.cancelRequest()
     */
    request(url, params = {}, responseHandler = null, method = 'get', options = {}) {
        let CancelToken = axios.CancelToken;
        let source = CancelToken.source();
        let requestId = REQUEST_ID++;
        let request = {
            method,
            url: url,
            cancelToken: source.token,
            withCredentials: true,
            baseURL: Config.data.api.http.baseURL,
            ...options
        };
        request[method == 'get' ? 'params' : 'data'] = params;

        let promise = new Promise((resolve, reject) => {
            this._registerRequest(requestId, source);
            this.axios.request(request)
                .then((response) => {

                    this._unregisterRequest(requestId);
                    if (!this.isResponseCorrect(response))
                        console.error(response)
                        //this.goToAuth();
                    else
                        resolve(responseHandler ? responseHandler(response) : response);
                })
                .catch((error) => {
                    if (axios.isCancel(error)) {
                        console.log('Request canceled', error);
                    }
                    this._unregisterRequest(requestId);
                    reject(error);
                });
        });
        promise.id = requestId;
        return promise;
    }

    /**
     * Отменяет активный request по request.id
     * @param {string} id   request id
     */
    cancelRequest(id) {
        let i = this._requests.findIndex(item => {
            return item.id == id;
        });
        if (i < 0) {
            return;
        }
        let item = this._requests[i];
        item.source.cancel('canceled');
        this._requests.splice(i, 1);
    }

    /**
     * Проверка Response
     */
    isResponseCorrect(response) {
        return typeof response.data === 'object' || response.data === 'OK'
    }

    /**
     * Редирект на аутентификацию
     */
    goToAuth() {
        document.location.href = Config.data.api.http.authURL;
    }

    /**
     * Отменяет все активные request
     */
    cancelAllRequests() {
        this._requests.forEach(item => {
            item.source.cancel('canceled');
        });
        this._requests = [];
    }

    /**
     * Возвращает базовый url апи
     * @return {string}
     */
    getBaseUrl() {
        return this.options.baseURL;
    }

    /**
     * @private
     */
    _registerRequest(id, source) {
        this._requests.push({
            id, source
        });
    }

    /**
     * @private
     */
    _unregisterRequest(id) {
        this._requests = this._requests.filter(item => {
            return item.id != id;
        });
    }
}