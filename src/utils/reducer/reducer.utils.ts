import { type } from "os";
import { AnyAction } from "redux";
import { Type } from "typescript";

export type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>['type'];
    match(action: AnyAction) : action is ReturnType<AC>;
}

export function withMacher<AC extends () => AnyAction & { type : string}> (actionCreator: AC) :Matchable<AC>

export function withMacher<AC extends (...args: any[]) => AnyAction & {type : string}> (actionCreator: AC): Matchable<AC>

export function withMacher(actionCreator: Function) {
    const type = actionCreator().type;
    return {
        type,
        match(action: AnyAction) {
            return action.type === type;
        }
    }
}

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
}

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type:T, payload:P){
    return {type, payload}
}
