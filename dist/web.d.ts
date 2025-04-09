import { ITestSpecification, OT } from "testeranto/src/Types";
import { AnyAction, Reducer } from "redux";
import { BaseImplementation, IReduxIn } from ".";
declare const _default: <IStoreShape, O extends OT>(testInput: Reducer<IStoreShape, AnyAction>, testSpecifications: ITestSpecification<IReduxIn<IStoreShape>, O>, testImplementations: BaseImplementation<IStoreShape, O>) => Promise<import("testeranto/src/lib/core").default<IReduxIn<IStoreShape>, O, Omit<{
    suites: { [K in keyof O["suites"]]: string; };
    givens: { [K_1 in keyof O["givens"]]: (...Ig: O["givens"][K_1]) => import("redux").StoreEnhancerStoreCreator<unknown, unknown>; };
    whens: { [K_2 in keyof O["whens"]]: (...Iw: O["whens"][K_2]) => (zel: IStoreShape, utils: import("testeranto/src/PM").PM) => Promise<import(".").WhenShape>; };
    thens: { [K_3 in keyof O["thens"]]: (...It: O["thens"][K_3]) => (ssel: IStoreShape, utils: import("testeranto/src/PM").PM) => (x: IStoreShape, pm: import("testeranto/src/PM").PM) => IStoreShape; };
    checks: { [K_4 in keyof O["checks"]]: (...Ic: O["checks"][K_4]) => import("redux").StoreEnhancerStoreCreator<unknown, unknown>; };
}, "checks" | "givens" | "whens" | "thens"> & {
    givens: { [K_5 in keyof O["givens"]]: IStoreShape; };
    whens: { [K_6 in keyof O["whens"]]: (...x: any[]) => [string, string?] | [import("@reduxjs/toolkit").ActionCreatorWithoutPayload] | [import("@reduxjs/toolkit").ActionCreatorWithPayload<any>, string]; };
    checks: { [K_7 in keyof O["checks"]]: IStoreShape; };
    thens: { [K_8 in keyof O["thens"]]: (...It: O["thens"][K_8]) => (ssel: IStoreShape, utils: import("testeranto/src/PM").PM) => void; };
}>>;
export default _default;
