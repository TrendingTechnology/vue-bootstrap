import Vue from 'vue';
import { expect } from 'chai';
import { initVM } from './utils.js';
import Dropdown from '../src/Dropdown.vue';

describe('Dropdown', () => {
  it('initialises with default data', () => {
    expect(typeof Dropdown.data).to.equal('function');

    const data = Dropdown.data();

    expect(data.isOpen).to.be.false;
  });

  it('can be toggled', () => {
    const vm = initVM(Dropdown);

    vm.toggle();

    expect(vm.isOpen).to.be.true;
  });

  it('closes on blur', () => {
    const vm = initVM(Dropdown);

    vm.toggle();

    vm.$refs.button.blur();

    setTimeout(() => {
      expect(vm.isOpen).to.be.false;
    }, vm.closeTimeout + 100);
  });

  it('positions the dropdown', () => {
    const vm = initVM(Dropdown, {
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });

    expect(vm.horizontalPositionClass).to.equal('dropdown-menu-right');
    expect(vm.verticalPositionClass).to.equal('dropup');
  });

  it('uses a custom menu element', () => {
    const vm = initVM(Dropdown, {
      menuElement: 'div'
    });

    expect(vm.$refs.ul.nodeName.toLowerCase()).to.equal('div');
  });
});
