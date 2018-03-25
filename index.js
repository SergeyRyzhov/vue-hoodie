((define => {

    define((require, exports, module) => {
        var Vue = require('vue');
        var Hoodie = require('@hoodie/client');

        const VueHoodie = {
            $hoodie: null,
            install(Vue, options) {
                var hoodie = new Hoodie(options);
                this.$hoodie = Vue.$hoodie = hoodie;
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