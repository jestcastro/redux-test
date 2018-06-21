import { ICounterState } from "./reducers/counter";
import { IResultState } from "./reducers/result";
import { ICounterAction } from "./actions/counter";
import { IResultAction } from "./actions/result";

export interface IReduxState {
    ctr: ICounterState;
    res: IResultState;
}
export type IReduxActions = ICounterAction | IResultAction;
