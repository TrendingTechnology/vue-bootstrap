import Vue from 'vue';
import { expect } from 'chai';
import { initVM } from './utils.js';
import Modal from '../src/Modal.vue';

describe('Modal', () => {
  it('has a mounted hook', () => {
    expect(typeof Modal.mounted).to.equal('function');
  });

  it('initialises with default data', () => {
    expect(typeof Modal.data).to.equal('function');

    const data = Modal.data();

    expect(data.isVisible).to.be.false;
    expect(data.isIn).to.be.false;
  });

  it('returns a unique id for the title element', () => {
    const vm1 = new Vue(Modal);
    const vm2 = new Vue(Modal);

    expect(vm1.uniqueTitleId()).to.equal('v-bs-modal-title-0');
    expect(vm2.uniqueTitleId()).to.equal('v-bs-modal-title-1');
  });

  it('is visible', () => {
    const vm = initVM(Modal, {
      title: 'Hello world!',
      body: 'Body!'
    });

    vm.open();

    expect(vm.isVisible).to.be.true;
    expect(vm.$refs.modal.querySelector('.modal-title').textContent).to.equal('Hello world!');
    expect(vm.$refs.modal.querySelector('.modal-body').textContent).to.equal('Body!');
  });
});
