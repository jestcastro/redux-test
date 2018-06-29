import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16'
// import ReduxRoot from './ReduxRoot';
import { App, IAppProps } from './App';

// Enzyme configurations needs to be at src/setupTests.ts 

Enzyme.configure({ adapter: new Adapter() })

describe('[App.tsx]', () => {
  let wrapper: Enzyme.ShallowWrapper<IAppProps> | null;
  let props: IAppProps;
  const app = () => {
    if (!wrapper) {
      wrapper = Enzyme.shallow(<App {...props} />);
    }
    return wrapper
  }
  beforeEach(() => {
    props = {
      ctr: 0,
      storedResults: [],
      onAddCounter: jest.fn(),
      onDecrementCounter: jest.fn(),
      onDeleteStoredCounter: jest.fn(),
      onIncrementCounter: jest.fn(),
      onStoreCounter: jest.fn(),
      onSubstractCounter: jest.fn(),
    }
    wrapper = null;
  })
  it('increments the count', () => {
    app().find('#incrementBtn').simulate('click');
    expect(app().instance().props.onIncrementCounter).toHaveBeenCalled()
  });
  it('decrements the count', () => {
    app().find('#decrementBtn').simulate('click')
    expect(app().instance().props.onDecrementCounter).toHaveBeenCalled()
  });
  it('calls add action', () => {
    app().find('#addBtn').simulate('click')
    expect(app().instance().props.onAddCounter).toHaveBeenCalled()
  });
  it('calls substract action', () => {
    app().find('#substractBtn').simulate('click')
    expect(app().instance().props.onSubstractCounter).toHaveBeenCalled()
  });
  it('calls store counter action', () => {
    const ctr = 10;
    props = { ...props, ctr };
    app().find('#storeCountBtn').simulate('click')
    expect(app().instance().props.onStoreCounter).toHaveBeenCalledWith(ctr)
  });
  it('removes element', () => {
    const storedResults = [20];
    props = { ...props, storedResults };
    app().find('.storedResult').first().simulate('click');
    expect(app().instance().props.onDeleteStoredCounter).toHaveBeenCalledWith(0);
  });
})


