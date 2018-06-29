import { counterReducer } from "../counter";
import { actions } from "../../actions/counter";

it('Increments the count', () => {
    expect(counterReducer(undefined, actions.increment()).counter).toBe(1);
})
it('decrement the count', () => {
    expect(counterReducer(undefined, actions.decrement()).counter).toBe(-1);
})
it('Add 5 to the count', () => {
    expect(counterReducer(undefined, actions.add(5)).counter).toBe(5);
})
it('substract 5 to the count', () => {
    expect(counterReducer(undefined, actions.substract(5)).counter).toBe(-5);
})
it('returns the same state when substract is call without number paramaters', () => {
    const initialState = {
        counter: 0,
    }
    expect(counterReducer(initialState, actions.add()).counter).toBe(initialState.counter);
})