

export enum CounterActions {
    Increment = 'INCREMENT',
    Decrement = 'DECREMENT',
    Add = 'ADD',
    Substract = 'SUBSTRACT'
}
export interface ICounterAction {
    type: CounterActions;
    value?: number;
}
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
                    counter: state.counter - (action.value || 5)
                }
            }
        default:
            return state;
    }
}