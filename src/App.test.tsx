import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16'
import ReduxRoot from './ReduxRoot';
import App from './App';

// Enzyme configurations needs to be at src/setupTests.ts 

Enzyme.configure({ adapter: new Adapter() })



let wrapper: Enzyme.ReactWrapper;
let wrappedRoot: Enzyme.ReactWrapper;
beforeEach(() => {
  wrappedRoot=Enzyme.mount(<ReduxRoot><App /></ReduxRoot>);
  wrapper = wrappedRoot.find('App')
})
test('increments the count', () => {
  wrapper.find('#incrementBtn').simulate('click')
  wrappedRoot.update();
  // @ts-ignore
  expect(wrapper.instance().props.ctr).toBe(1)
});
test('[App.tsx] decrements the count', () => {
  wrapper.find('#decrementBtn').simulate('click')
  wrappedRoot.update();
  // @ts-ignore
  expect(wrapper.instance().props.ctr).toBe(-1)
});

