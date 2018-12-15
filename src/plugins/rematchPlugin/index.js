import { readFileSync } from 'fs';
import { join, dirname, basename, extname } from 'path';
import globby from 'globby';
import { findJSFile } from './ulits';
import createPlugin from './createPlugin.js';

export default createPlugin(function(api, opts) {
  // console.log(api);
  // console.log(opts);
  const { paths, config, winPath } = api;
  function initRematch () {
    const tpl = join(__dirname, './template/RematchContainer.tsx');
    const tplContent = readFileSync(tpl, 'utf-8');
    api.writeTmpFile('RematchContainer.tsx', tplContent);
  }

  function initRematchStores() {
    const tpl = join(__dirname, './template/Store.ts');
    const list = getGlobalStores(api);
    console.log(list);
    const stores = list.map(item => {
      const length = item.lastIndexOf('/');
      return item.substring(length + 1,item.length - 3);
    })
    console.log(stores);
    let tplContent = readFileSync(tpl, 'utf-8');
    tplContent = tplContent.replace(
      '// <%= Rematchimport %>',
      `
      ${list.map((item, index) => `import ${stores[index]} from '${item.substring(0,item.length - 3)}';` ).join('\n')}
      `.trim(),
    );
    tplContent = tplContent.replace(
      '// <%= RematchModels %>',
      `
      ${stores.map((item, index) => `${item}` ).join(`,\n  `)}
      `.trim(),
    );

    // console.log(list.map(item => `import wtf from '${item}'` ).join('/n'))
    api.writeTmpFile('../../store.ts', tplContent);
  }
  function getGlobalStores(api) {
    const cwd = paths.absSrcPath;
    const list = globby
      .sync(`./**/stores/**/*.{ts,tsx,js,jsx}`, {
        cwd
      })
      .filter(
        p =>
          !p.endsWith('.d.ts') &&
          // !p.endsWith('index.ts') &&
          !p.endsWith('.test.js') &&
          !p.endsWith('.test.jsx') &&
          !p.endsWith('.test.ts') &&
          !p.endsWith('.test.tsx')
      )
      // .map(p => api.winPath(join(cwd, p)));
    // api.log.success(list);
    // console.log(list);
    return list

  };
  api.onGenerateFiles(() => {
    initRematchStores();
    initRematch();
  });
  api.addRuntimePlugin(join(__dirname, './runtime.ts'));
  api.addRuntimePluginKey('rematch');
  api.addPageWatcher([
    join(paths.absSrcPath, 'stores'),
    // join(paths.absSrcPath, 'store.js'),
    // join(paths.absSrcPath, 'store.jsx'),
    // join(paths.absSrcPath, 'store.ts'),
    // join(paths.absSrcPath, 'store.tsx')
  ]);
});
