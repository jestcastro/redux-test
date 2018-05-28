import { CounterActions } from "./reducers/counter";
import { ResultActions } from "./reducers/result";

export const Actions = Object.assign({}, CounterActions, ResultActions);