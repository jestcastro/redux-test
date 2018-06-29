
import { actions } from "../../actions/result";
import { resultReducer } from "../result";

it('adds result', ()=>{
    const initialState = {
        results: [],
    }
    expect(resultReducer(initialState, actions.store(2)).results.length).toBe(1);
    
})
it('delete the store selected', ()=>{
    const initialState = {
        results: [0,3,4],
    }
    expect(resultReducer(initialState, actions.deleteStore(1)).results.length).toBe(2);
})