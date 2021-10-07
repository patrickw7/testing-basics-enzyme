import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter component check', () => {
  it('Should has state 0 as initial value', () => {
    const wrapper = shallow(<Counter />);
    const counter = wrapper.find('span');
    expect(counter.text()).toBe('0');
  });
  it('Should has state 10 if we pass props start equal to 10', () => {
    const wrapper = shallow(<Counter start='10' />);
    const counter = wrapper.find('span');
    expect(counter.text()).toBe('10');
  });
  it('Should has "Increase" button', () => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find('button.increaseBtn');
    expect(button.text()).toBe('Increase');
  });
  it('Should has "Decrease" button', () => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find('button.decreaseBtn');
    expect(button.text()).toBe('Decrease');
  });
  it('Should increase state +1 after click button "Increase"', () => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find('button.increaseBtn');
    let counter = wrapper.find('span');
    button.simulate('click');
    counter = wrapper.find('span');
    expect(counter.text()).toBe('1');
  });
  it('Should decrease state -1 after click button "Decrease"', () => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find('button.decreaseBtn');
    let counter = wrapper.find('span');
    button.simulate('click');
    counter = wrapper.find('span');
    expect(counter.text()).toBe('-1');
  });
  it('Should change state to 10, after typing "10" in input', () => {
    const wrapper = shallow(<Counter />);
    const input = wrapper.find('input');
    let counter = wrapper.find('span');
    input.simulate('change', { target: { value: '10' } });
    counter = wrapper.find('span');
    expect(counter.text()).toBe('10');
  });
  it('Should reset counter to 0, after click button "Reset"', () => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find('button.resetBtn');
    let counter = wrapper.find('span');
    button.simulate('click');
    counter = wrapper.find('span');
    expect(counter.text()).toBe('0');
  });
});
