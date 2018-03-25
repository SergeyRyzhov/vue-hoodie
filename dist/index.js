(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('@hoodie/client')) :
    typeof define === 'function' && define.amd ? define(['vue', '@hoodie/client'], factory) :
    (global['vue-hoodie'] = factory(global.vue,global.Hoodie));
}(this, (function (vue,Hoodie) { 'use strict';

    vue = vue && vue.hasOwnProperty('default') ? vue['default'] : vue;
    Hoodie = Hoodie && Hoodie.hasOwnProperty('default') ? Hoodie['default'] : Hoodie;

    const VueHoodie = {
        $hoodie: null,
        install(Vue, options) {
            var hoodie = new Hoodie(options);
            this.$hoodie = Vue.$hoodie = hoodie;
            Vue.mixin({
                created() {
                    this.$hoodie = hoodie;
                }
            });
        }
    };

    return VueHoodie;

})));
