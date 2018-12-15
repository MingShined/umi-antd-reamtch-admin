import moment from 'moment';

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
export function transformEnumKeys(value): string[] {
  const keys = Object.keys(value);
  const result = keys.slice(0, keys.length / 2);
  return result;
}

/**
 * @name moment工具，获取指定日期
 * @param {type} 指定类型 年 | 月 | 星期 | 天
 * @param {isNext} 指定日期类型之后 | 指定日期之前
 * @param {value} 指定的数量
 */
export function getAppointedDate<T>(
  type: 'day' | 'week' | 'month' | 'year',
  isNext: boolean,
  value: number
): string[] {
  const formatList = ['YYYY-MM-DDT00:00:00Z', 'YYYY-MM-DDT23:59:59Z'];
  const today = moment();
  const otherDay = isNext
    ? moment().add(type, value)
    : moment().subtract(type, value);
  const finalDay = isNext ? [today, otherDay] : [otherDay, today];
  return finalDay.map((item, index) => item.format(formatList[index]));
}
/**
 * @name 下载文件
 */
export async function downloadRequest(url, title?) {
  const { data, status, headers } = await request({
    url,
    responseType: 'blob'
  });
  let mtitle = title;
  if (!mtitle) {
    mtitle = headers['content-disposition'].replace('attachment;filename=', '');
  }
  if (status === 200) {
    download(data, mtitle);
  }
}