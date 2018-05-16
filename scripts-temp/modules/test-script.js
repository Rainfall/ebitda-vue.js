import jQuery from 'jquery';
import Vue from 'vue/dist/vue.js';

function TestScript () {

  console.log('piu8');
  new Vue({
      el: '#app',
      data: {
          test: 'Hello, world...',
      },
      methods: {
          test2() {
              console.log('Hi there');
          }
      }
  })
  
}

TestScript();

export default TestScript;