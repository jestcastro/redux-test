import { counterReducer } from "../counter";
import { actions } from "../../actions/counter";

it('Increments the count', ()=>{
    const initialState = {
        counter: 0,
    }
    expect(counterReducer(initialState, actions.increment()).counter).toBe(1);
})