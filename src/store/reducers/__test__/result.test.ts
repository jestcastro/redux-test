
import { actions } from "../../actions/result";
import { resultReducer } from "../result";

it('adds result', ()=>{
    expect(resultReducer(undefined, actions.store(2)).results.length).toBe(1);
})
it('doesn\'t do anything if store is called without value param', ()=>{
    const initialState = {
        results: [0,3,4],
    }
    expect(resultReducer(initialState, actions.store()).results.length).toBe(initialState.results.length);
})
it('delete the store selected', ()=>{
    const initialState = {
        results: [0,3,4],
    }
    expect(resultReducer(initialState, actions.deleteStore(1)).results.length).toBe(2);
})
it('doesn\'t do anything if deleteStore is called without index param', ()=>{
    const initialState = {
        results: [0,3,4],
    }
    expect(resultReducer(initialState, actions.deleteStore()).results.length).toBe(initialState.results.length);
})