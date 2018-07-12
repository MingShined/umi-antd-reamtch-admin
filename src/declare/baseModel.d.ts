export default interface BaseModel<State> {
    /** 模块名  */
    namespace:string;
    /** 状态  */
    state: State;
    /** 状态  */
    reducers:Reducers <State>;
    effects?: Effects;
}
export interface EffectsCommandMap {
    put: (action :Action) => any;
    call: Function;
    select: Function;
    take: Function;
    cancel: Function;
    [key: string]: any;
  }
interface Effects {
    [propName: string]: (action:Action,effects:EffectsCommandMap) => void
}
interface ReducersFun<State>{
    (state: State, params?:Action): State;
}
interface Reducers<State>{
    [propName: string]:ReducersFun<State>
}
export interface Action<T = any>{
    type:string;
    payload?:T;
    [propName: string]:any;
}
