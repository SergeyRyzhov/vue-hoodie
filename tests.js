var Vue = require('vue')
var VueHoodie = require('./dist/index.js')
var Hoodie = require('@hoodie/client');
var PouchDB = require('pouchdb');
var assert = require('assert');

Vue.use(VueHoodie)

var hoodie = new Hoodie({
    PouchDB,
    url: 'http://localost:5984'
});

var view = new Vue({
    hoodie
});

assert.ok(view.$hoodie != null);

console.log('Tests are passed')