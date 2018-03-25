let Vue = null;

var applyMixin = function (Vue) {
    var version = Number(Vue.version.split('.')[0]);

    if (version >= 2) {
        Vue.mixin({
            beforeCreate: hoodieInit
        });
    } else {
        var _init = Vue.prototype._init;
        Vue.prototype._init = function (options) {
            if (options === void 0) options = {};

            options.init = options.init ?
                [hoodieInit].concat(options.init) :
                hoodieInit;
            _init.call(this, options);
        };
    }

    function hoodieInit() {
        var options = this.$options;
        if (options.hoodie) {
            this.$hoodie = typeof options.hoodie === 'function' ?
                options.hoodie() :
                options.hoodie;
        } else if (options.parent && options.parent.$hoodie) {
            this.$hoodie = options.parent.$hoodie;
        }
    }
};

function install(_Vue, options) {
    if (Vue && _Vue === Vue) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(
                '[hoodie] already installed. Vue.use(VueHoodie) should be called only once.'
            );
        }
        return
    }
    Vue = _Vue;
    applyMixin(_Vue, options);
}

const VueHoodie = {
    install
}

export default VueHoodie