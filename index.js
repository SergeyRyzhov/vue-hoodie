((define => {

    define((require, exports, module) => {
        var Vue = require('vue');
        var Hoodie = require('@hoodie/client');

        const VueHoodie = {
            install(Vue, options) {
                var hoodie = new Hoodie(options);
                Vue.mixin({
                    created() {
                        this.$hoodie = hoodie;
                    }
                })
            }
        }

        return VueHoodie
    });

})(
    typeof module === 'object' && module.exports && typeof define !== 'function' ?
    factory => {
        module.exports = factory(require, exports, module);
    } :
    define
));