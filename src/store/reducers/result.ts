

export enum ResultActions {
    Store = "STORE",
    DeleteStored = "DELETE_STORED"
}
export interface IResultAction {
    type: ResultActions;
    value?: number;
    index?: number;
}
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
        default:
            return state;
    }
}