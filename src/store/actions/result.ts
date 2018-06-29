export enum ResultActions {
    Store = "STORE",
    DeleteStored = "DELETE_STORED"
}
export interface IResultAction {
    type: ResultActions;
    value?: number;
    index?: number;
}
export const actions = {
    store: (value?: number): IResultAction => {
        return {
            type: ResultActions.Store,
            value
        }
    },
    deleteStore: (index?: number): IResultAction => {
        return {
            type: ResultActions.DeleteStored, 
            index
        }
    }
}