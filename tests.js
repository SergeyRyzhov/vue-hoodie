var Vue = require('vue')
var VueHoodie = require('./dist/index.js')

var PouchDB = require('pouchdb');
var assert = require('assert');

Vue.use(VueHoodie, {
    PouchDB,
    url: 'http://localost:5984'
});


assert.ok(VueHoodie.$hoodie !== null);

assert.ok(Vue.$hoodie !== null);

var view = new Vue({

});

assert.ok(view.$hoodie !== null);

console.log('Tests are passed')