import angular from 'angular';
import './index.scss';

class HelloWorld {
  constructor() {
    this.world = 'world';
  }
}

export default angular
  .module('boilerplate-module', [])
  .directive('helloWorld', () => ({
    scope: {
      worldProp: '@'
    },
    restrict: 'E',
    controllerAs: 'vm',
    bindToController: true,
    controller: HelloWorld,
    template:`
    <div>
      Hello {{vm.world}} {{vm.worldProp}}
    </div>
    `
  }));

