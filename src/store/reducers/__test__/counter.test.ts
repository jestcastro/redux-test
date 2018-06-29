import { counterReducer } from "../counter";
import { actions } from "../../actions/counter";

it('Increments the count', ()=>{
    const initialState = {
        counter: 0,
    }
    expect(counterReducer(initialState, actions.increment()).counter).toBe(1);
})
it('decrement the count', ()=>{
    const initialState = {
        counter: 0,
    }
    expect(counterReducer(initialState, actions.decrement()).counter).toBe(-1);
})
it('Add 5 to the count', ()=>{
    const initialState = {
        counter: 0,
    }
    expect(counterReducer(initialState, actions.add(5)).counter).toBe(5);
})
it('substract 5 to the count', ()=>{
    const initialState = {
        counter: 0,
    }
    expect(counterReducer(initialState, actions.substract(5)).counter).toBe(-5);
})