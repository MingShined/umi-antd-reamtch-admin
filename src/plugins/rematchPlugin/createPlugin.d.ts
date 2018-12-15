interface UmiPluginsApi {
  //=======系统级API========
  /**
   * @name 加载插件，用于插件集等需要在一个插件中加载其它插件的场景。
   */
  registerPlugin: Function;
  /**
   * @name 注册插件方法，用于给插件添加新的方法给其它插件使用。
   */
  registerMethod: Function;
  /**
   * @name 在插件用应用通过 registerMethod 注册的某个方法。
   */
  applyPlugins: Function;
  /**
   * @name 重新执行 umi dev，比如在 bigfish 中修改了 appType，需要重新挂载插件的时候可以调用该方法。
   */
  restart: Function;
  /**
   * @name 重新生成 bootstrap file（entryFile）等临时文件，这个是最常用的方法，国际化，dva 等插件的配置变化都会用到。
   */
  rebuildTmpFiles: Function;
  /**
   * @name 刷新浏览器
   */
  refreshBrowser: Function;
  /**
   * @name 触发 HTML 重新构建。
   */
  rebuildHTML: Function;
  /**
   * @name 设置插件的配置，比如在 react 插件集中中需要把插件集的 dva 配置传递给 dva 插件的时候用到。
   */
  changePluginOption:Function;
  /**
   * @name 注册 umi xxx 命令行，比如在 umi 内部 help 命令就是这么实现的。
   */
  registerCommand: Function;
  /**
   * @name 注册一个配置项，系统方法，通常不要使用。
   */
  _registerConfig: Function;

}
interface UmiPluginsOpts {}
interface UmiPlugins {
  (api: UmiPluginsApi, opts: UmiPluginsOpts): void;
}
export default function(func: UmiPlugins): UmiPlugins;
