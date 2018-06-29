import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IReduxState } from './store/definitions';
import { Actions } from './store/actions';
import { actions } from './store/actions/result';

export interface IAppProps {
  ctr: number,
  storedResults: any[];
  onIncrementCounter: () => void;
  onDecrementCounter: () => void;
  onAddCounter: (value?: number) => void;
  onSubstractCounter: (value?: number) => void;
  onStoreCounter: (value?: number) => void;
  onDeleteStoredCounter: (index?: number) => void;
}
interface IState {
  counter: number
}

export class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.ctr}</h1>
        </header>
        <button id="incrementBtn" onClick={this.props.onIncrementCounter}>Increment</button>
        <button id="decrementBtn" onClick={this.props.onDecrementCounter}>Decrement</button>
        <button id="addBtn" onClick={() => this.props.onAddCounter(5)}>Add 5</button>
        <button id="substractBtn" onClick={() => this.props.onSubstractCounter(5)}>Substract 5</button>
        <hr />
        <button id="storeCountBtn" onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store Result</button>
        <ul>
          {
            this.props.storedResults &&
            this.props.storedResults.map((result, i) => {
              return (
                <div className="storedResult" key={i} onClick={() => this.props.onDeleteStoredCounter(i)}>
                  {result}
                </div>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: IReduxState) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  }
}
// const mapDispatchToProps = (dispatch: (info: IReduxActions) => void) => {
//   return {
//     onIncrementCounter: () => dispatch(Actions.increment()),
//     onDecrementCounter: () => dispatch(Actions.decrement()),
//     onAddCounter: (value?: number) => dispatch(Actions.add(value)),
//     onSubstractCounter: (value?: number) => dispatch(Actions.substract(value)),
//     onStoreCounter: (value?: number) => dispatch(actions.store(value)),
//     onDeleteStoredCounter: (index?: number) => dispatch(actions.deleteStore(index))
//   }
// }
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onIncrementCounter: Actions.increment,
    onDecrementCounter: Actions.decrement,
    onAddCounter: Actions.add,
    onSubstractCounter:Actions.substract,
    onStoreCounter: actions.store,
    onDeleteStoredCounter:actions.deleteStore
  }, dispatch);
}
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(App);
