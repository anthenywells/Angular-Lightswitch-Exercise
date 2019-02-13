"use strict";
const lightSwitch = {
  bindings: {
    onFlip: "&" // function binding    
  },
  template: `
  <button ng-click="$ctrl.onFlip();">LIGHTSWITCH</button>
  `
}




angular
  .module("LightApp")
  .component("lightSwitch", lightSwitch);