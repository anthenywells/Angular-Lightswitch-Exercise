"use strict";

const light = {
  template: `
  <section ng-class="{ lightOn: $ctrl.isOn }">

    <light-switch on-flip="$ctrl.onFlip();"></light-switch>

  </section>`,
  controller: [function(){
    const vm = this;
    vm.onFlip = function(){
      if (vm.isOn) {
        vm.isOn = false;
      } else {
        vm.isOn = true;
      }
    }
  }]
}

angular
  .module("LightApp")
  .component("light", light);

  