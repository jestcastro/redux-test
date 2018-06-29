export enum ResultActions {
    Store = "STORE",
    DeleteStored = "DELETE_STORED",
    GetInfo = "GETINFO"
}
export interface IResultAction {
    type: ResultActions;
    value?: number;
    results?: any[]
    index?: number;
}
export const actions = {
    store: (value?: number): any => {
        return async (dispatch: any) => {
            const response = await fetch(`https://jhhjublwnc.execute-api.us-east-2.amazonaws.com/dev/test?number=${value}`)
            const responseValue = await response.json();
            dispatch({
                type: ResultActions.Store,
                value: responseValue
            })
        }

    },
    getInfo: (value?: number): any => {
        return async (dispatch: any) => {
            const response = await fetch(`https://jhhjublwnc.execute-api.us-east-2.amazonaws.com/dev/getInfo`)
            const responseValue = await response.json();
            dispatch({
                type: ResultActions.GetInfo,
                results: responseValue
            })
        }

    },
    deleteStore: (index?: number): IResultAction => {
        return {
            type: ResultActions.DeleteStored,
            index
        }
    }
}