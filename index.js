import Vue from 'vue'
import Hoodie from '@hoodie/client'

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

export default VueHoodie