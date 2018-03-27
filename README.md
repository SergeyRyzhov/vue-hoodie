# vue-hoodie

Plugin for [Vue.js](https://vuejs.org/) to provide access to [Hoodie client](http://hood.ie/)

## Install

``` js
npm install https://github.com/SergeyRyzhov/vue-hoodie.git --save
```

## Configure

``` js
// imports
import Vue from 'vue'
import VueHoodie from 'vue-hoodie'
Vue.use(VueHoodie);

// setup Hoodie
import Hoodie from '@hoodie/client'
import PouchDB from 'pouchdb';
const url = "http://localhost:8080"
var hoodie = new Hoodie({
  PouchDB,
  url
});

// use in root app
new Vue({
...
  hoodie,
...
}).$mount('#app')
```

## Usage
In any component

``` js
this.$hoodie
```
