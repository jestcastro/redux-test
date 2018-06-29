import { IResultAction, ResultActions } from "../actions/result";

export interface IResultState {
    results: any[];
}
const initialState: IResultState = {
    results: [],
}
export const resultReducer = (state: IResultState = initialState, action: IResultAction) => {
    switch (action.type) {
        case ResultActions.Store:
            if (action.value) {
                return {
                    ...state,
                    results: state.results.concat([action.value])
                }
            }
        case ResultActions.DeleteStored:
            if (action.index !== undefined) {
                const results = [...state.results];
                results.splice(action.index, 1);
                return {
                    ...state,
                    results
                }
            }
        case ResultActions.GetInfo:
        if (action.results) {
            return {
                ...state,
                results: action.results
            }
        }
        default:
            return state;
    }
}