import { ICounterAction } from "../actions/counter";
import { CounterActions } from "../actions/counter";


export interface ICounterState {
    counter: number;
}
const initialState: ICounterState = {
    counter: 0,
}
export const counterReducer = (state: ICounterState = initialState, action: ICounterAction) => {
    switch (action.type) {
        case CounterActions.Increment:
            return {
                ...state,
                counter: state.counter + 1
            }
        case CounterActions.Decrement:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CounterActions.Add:
            if (action.value) {
                return {
                    ...state,
                    counter: state.counter + action.value
                }
            }
        case CounterActions.Substract:
            if (action.value) {
                return {
                    ...state,
                    counter: state.counter - action.value
                }
            }
        default:
            return state;
    }
}