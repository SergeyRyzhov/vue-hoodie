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

// setup Hoodie (please check official documentation)
import Hoodie from '@hoodie/client'
import PouchDB from 'pouchdb';

const hoodie = new Hoodie({
  PouchDB,
  url: 'http://localhost:8080'
});

// use in root app
new Vue({
  ...
  hoodie,
  ...
}).$mount('#app')
```

## Usage
Now you can access Hoodie client in any component

``` js
this.$hoodie
```
