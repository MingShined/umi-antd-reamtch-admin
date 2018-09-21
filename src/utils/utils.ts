/**
 * @name 转化为单位分
 * @param {keysArr} 要替换的对象key数组
 * @param {values} 转化的对象
 */
export function transformUnit(keysArr: any[], values: Object) {
  const result = values;
  const formatArr = keysArr;
  Object.keys(result).forEach(key => {
    formatArr.forEach(item2 => {
      if (item2 === key) {
        result[key] = result[key] * 100;
      }
    });
  });
  return result;
}
/**
 * @name 转化枚举获取keys
 * @param {value} 要转化的枚举对象
 */
export function transformEnumKeys(value) {
  const keys = Object.keys(value);
  const result = keys.slice(0, keys.length / 2);
  return result;
}
/**
 * @name 递归数据结构
 * @param {data} 要转化的数据源
 */
export const transform = dataSource => {
  if (!dataSource || dataSource.length === 0) {
    return null;
  }
  return dataSource.map(item => ({
    value: item.n,
    label: item.n,
    children: transform(item.c)
  }));
};
