export default {
    install(Vue) {
        let timeout;
        Vue.prototype.debounce = function (fnc, time) {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                fnc();
            }, time);
        }
    }
}