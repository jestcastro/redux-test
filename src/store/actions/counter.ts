
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
export const actions = {
    increment: (): ICounterAction => {
        return {
            type: CounterActions.Increment
        }
    },
    decrement: (): ICounterAction => {
        return {
            type: CounterActions.Decrement
        }
    },
    add: (value?:number): ICounterAction => {
        return {
            type: CounterActions.Add,
            value
        }
    },
    substract: (value?:number): ICounterAction => {
        return {
            type: CounterActions.Substract,
            value
        }
    }
}