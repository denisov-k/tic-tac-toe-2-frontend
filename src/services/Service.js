import ServiceTransport from './ServiceTransport';
import Config from '../utils/Config';

/**
 * Базовый сервис
 */
export default class Service {
    constructor() {
        /**
         * @param {ServiceTransport} транспорт
         */
        this.transport = new ServiceTransport(Config.data.api.http);
        /**
         * @param {function} дефолтный обработчик response
         */
        this.defaultResponseHandler = (response) => {
            return response.data;
        };
    }

    /**
     * Fake ответ, для дебага - эмуляция api
     * @param {function} callback   калбэк, результат которого уйдет в resolve( result ) в качестве result
     */
    fakeResponse(callback) {
        return new Promise((resolve) => {
            resolve(callback());
        });
    }
}