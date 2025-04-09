import { PM } from "testeranto/src/PM";
import { Ibdd_in, OT } from "testeranto/src/Types";
import { ITestImplementation } from "testeranto/src/Types";
import { ActionCreatorWithNonInferrablePayload, ActionCreatorWithoutPayload, ActionCreatorWithPayload, Reducer, Store } from "@reduxjs/toolkit";
import { AnyAction, StoreEnhancerStoreCreator } from "redux";
export type WhenShape = [
    (ActionCreatorWithNonInferrablePayload<string> | ActionCreatorWithoutPayload<string>),
    object
];
export type IINput<IStoreState> = Reducer<IStoreState, AnyAction>;
export type IReduxIn<IStoreState> = Ibdd_in<IINput<IStoreState>, Reducer<IStoreState, AnyAction>, Store<IStoreState, AnyAction>, IStoreState, StoreEnhancerStoreCreator<unknown, unknown>, WhenShape, (x: IStoreState, pm: PM) => IStoreState>;
export type BaseImplementation<IStoreShape, bddout extends OT> = ITestImplementation<IReduxIn<IStoreShape>, bddout, {
    givens: {
        [K in keyof bddout["givens"]]: IStoreShape;
    };
    whens: {
        [K in keyof bddout["whens"]]: (...x: any[]) => [string, string?] | [ActionCreatorWithoutPayload] | [ActionCreatorWithPayload<any>, string];
    };
    checks: {
        [K in keyof bddout["checks"]]: IStoreShape;
    };
    thens: {
        [K in keyof bddout["thens"]]: (...It: bddout["thens"][K]) => (ssel: IReduxIn<IStoreShape>["iselection"], utils: PM) => void;
    };
}>;
export declare const ReduxTesterantoInterface: <IStoreShape>() => Partial<import("testeranto/src/Types").ITestInterface<IReduxIn<IStoreShape>>>;
