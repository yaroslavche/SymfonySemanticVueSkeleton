require('../css/app.css');

const $ = require('jquery');
global.$ = global.jQuery = $;

import Vue from 'vue';

window.onload = function () {
    const vm = new Vue({
        el: '#symfony-semantic-vue-example'
    });
};
