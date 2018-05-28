import { ICounterState, ICounterAction } from "./reducers/counter";
import { IResultState, IResultAction } from "./reducers/result";

export interface IReduxState {
    ctr: ICounterState;
    res: IResultState;
}
export type IReduxActions = ICounterAction | IResultAction;
