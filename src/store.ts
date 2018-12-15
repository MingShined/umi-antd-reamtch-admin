import { init, ModelConfig, Models as RModels, ModelEffects } from '@rematch/core';
import { connect as reduxConnect } from 'react-redux';
import createLoadingPlugin from '@rematch/loading';

const models = {
  
};

export type InitModels = typeof models;
type ExtractRematchDispatchersFromEffectsObject<effects extends ModelEffects<any>> = {
  [effectKey in keyof effects]: boolean
};
type ExtractRematchDispatchersFromEffects<effects extends ModelConfig['effects']> =
(effects extends ((...args: any[]) => infer R)
? R extends ModelEffects<any>
  ? ExtractRematchDispatchersFromEffectsObject<R>
  : {}
: effects extends ModelEffects<any>
  ? ExtractRematchDispatchersFromEffectsObject<effects>
  : {});
type ExtractRematchDispatchersFromModel<M extends ModelConfig> = ExtractRematchDispatchersFromEffects<M['effects']>;

type ExtractRematchDispatchersFromModels<M extends RModels> = {
  [modelKey in keyof M]: ExtractRematchDispatchersFromModel<M[modelKey]>
};

export type Models = InitModels & {
  loading: { state: { effects: ExtractRematchDispatchersFromModels<InitModels> } };
};

const options = {};
const loadingPlugin = createLoadingPlugin(options);

const store = init({
  models,
  plugins: [loadingPlugin]
});

export default store;
interface Connect {
  (
    mapStateToProps?: Function,
    mapDispatchToProps?: Function,
    mergeProps?: Function,
    options?: Object
  ): Function;
}
export const connect = reduxConnect as Connect;
