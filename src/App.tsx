import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { connect } from 'react-redux';

import { IReduxState, IReduxActions } from './store/definitions';
import { Actions } from './store/actions';

interface IProps {
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

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
        <button onClick={this.props.onIncrementCounter}>Increment</button>
        <button onClick={this.props.onDecrementCounter}>Decrement</button>
        <button onClick={() => this.props.onAddCounter(10)}>Add 5</button>
        <button onClick={() => this.props.onSubstractCounter(8)}>Substract 5</button>
        <hr />
        <button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store Result</button>
        <ul>
          {
            this.props.storedResults &&
            this.props.storedResults.map((result, i) => {
              return (
                <div key={i} onClick={() => this.props.onDeleteStoredCounter(i)}>
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

const mapStateToPros = (state: IReduxState) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  }
}
const mapDispatchToProps = (dispatch: (info: IReduxActions) => void) => {
  return {
    onIncrementCounter: () => dispatch({ type: Actions.Increment }),
    onDecrementCounter: () => dispatch({ type: Actions.Decrement }),
    onAddCounter: (value?: number) => dispatch({ type: Actions.Add, value }),
    onSubstractCounter: (value?: number) => dispatch({ type: Actions.Substract, value }),
    onStoreCounter: (value?: number) => dispatch({ type: Actions.Store, value }),
    onDeleteStoredCounter: (index?: number) => dispatch({ type: Actions.DeleteStored, index })
  }
}
export default connect(mapStateToPros, mapDispatchToProps)(App);
