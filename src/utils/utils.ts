import { message } from 'antd';
import request from './request';
import download from 'downloadjs';
import Cookies from 'js-cookie';
import psl from 'psl';
import moment from 'moment';
import { AxiosRequestConfig } from 'axios';

interface CheckFileOption {
  length?: number;
  width?: number;
  height?: number;
  file?: File;
  accept?: any;
  size?: number;
}
export function checkFile({
  length,
  width,
  height,
  file,
  accept,
  size
}: CheckFileOption) {
  if (!file) {
    message.error('file 不存在!');
    return new Promise((resolve, reject) => {
      reject();
    });
  }
  if (size && file.size > size * size) {
    message.warning('文件超出大小!');
    return new Promise((resolve, reject) => {
      reject();
    });
  }
  /** 验证文件类型 */
  if (
    accept &&
    !(accept instanceof Array) &&
    file.type.indexOf(accept) === -1
  ) {
    message.error(`文件类型错误，请选择${accept}格式的文件!`);
    return new Promise((resolve, reject) => {
      reject();
    });
    // tslint:disable-next-line:no-else-after-return
  } else if (accept && accept instanceof Array) {
    const str = file.name;
    const i = str.lastIndexOf('.');
    const len = str.length;
    const hz = str.substring(i + 1, len);
    const flag = false;
    if (accept.filter(type => type === hz).length === 0) {
      message.error(`文件类型错误，请选择${accept.join('/')}格式的文件!`);
      return new Promise((resolve, reject) => {
        reject();
      });
    }
  }
  const _w = width;
  const _h = height;
  /** 上传图片 */
  if (file.type.indexOf('image') !== -1) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        /** 验证宽度 */
        if (_w && img.width !== _w && _h === null) {
          message.error(`图片宽度为 ${_w} 高度不做限制`);
          reject();
        } else if (_h && img.height !== _h && _w === null) {
          /** 验证高度 */
          message.error(`图片高度为 ${_h} 宽度不做限制`);
          reject();
        } else if (_w && img.width !== _w && _h && img.height !== _h) {
          message.error(`图片尺寸为 ${_w} * ${_h}`);
          reject();
        } else {
          resolve({
            src: img.src,
            width: img.width,
            height: img.height
          });
        }
      };
      img.onerror = () => {
        reject();
      };
      img.src = window.URL.createObjectURL(file);
    });
  }
  return new Promise((resolve, reject) => {
    resolve();
  });
}

export function tryToParseJson(jsonString: string): any | undefined {
  let json;
  try {
    json = JSON.parse(jsonString);
  } catch (e) {
    // 不是正常的 JSON 字符串，不做任何事。
  }
  return json;
}

/**
 * @name 下载excel
 */
export async function downloadRequest(
  url,
  title?,
  requestOption?: AxiosRequestConfig
) {
  const { data, status, headers } = await request({
    url,
    responseType: 'blob',
    ...requestOption
  });
  const mTitle =
    decodeURIComponent(headers['content-file-original-name'] || '') ||
    (headers['content-disposition'] || '').replace(
      'attachment;filename=',
      ''
    ) ||
    title;
  if (status === 200) {
    download(data, mTitle);
    return true;
  }
  const reader = new FileReader();
  reader.onload = ({ target: { result } }: any) => {
    const res = tryToParseJson(result);
    message.error(res.message);
  };
  reader.readAsText(data);
}

/**
 * @name moment工具，获取指定日期
 * @param type 指定类型 年 | 月 | 星期 | 天
 * @param isNext 指定日期类型之后 | 指定日期之前
 * @param value 指定的数量
 */
export function getAppointedDate<T>(
  type: 'day' | 'week' | 'month' | 'year',
  isNext: boolean,
  value: number
) {
  const formatList = ['YYYY-MM-DDT00:00:00Z', 'YYYY-MM-DDT23:59:59Z'];
  const today = moment();
  const otherDay = isNext
    ? moment().add(type, value)
    : moment().subtract(type, value);
  const finalDay = isNext ? [today, otherDay] : [otherDay, today];
  return finalDay.map((item, index) => item.format(formatList[index]));
}

/**
 * @name 获取token
 */
export function getToken() {
  return Cookies.get('jhi-authenticationToken');
}
/**
 * @name 设置token
 * @param token
 */
export function setToken(token: string) {
  // 获取域名
  const parsed = psl.parse(document.domain);
  // 判断是否是合法域名
  if (parsed.listed) {
    Cookies.set('jhi-authenticationToken', token, {
      domain: `.${parsed.domain}`
    });
  } else {
    Cookies.set('jhi-authenticationToken', token);
  }
}
/**
 * @name 清空token
 */
export function clearToken() {
  // 获取域名
  const parsed = psl.parse(document.domain);
  // 判断是否是合法域名
  if (parsed.listed) {
    Cookies.remove('jhi-authenticationToken', {
      domain: `.${parsed.domain}`
    });
    Cookies.remove('refreshToken', { domain: `.${parsed.domain}` });
  }
  Cookies.remove('jhi-authenticationToken');
  Cookies.remove('refreshToken');
}
export function formatRangeTime(arr) {
  if (arr && arr.length === 2) {
    return [
      moment(arr[0]).format('YYYY-MM-DDT00:00:00Z'),
      moment(arr[1]).format('YYYY-MM-DDT23:59:59Z')
    ];
  }
  return;
}

/**
 * @name 转化枚举获取keys
 * @param value 要转化的枚举对象
 */
export function transformEnumKeys(value) {
  const keys = Object.keys(value);
  const result = keys.slice(0, keys.length / 2);
  return result;
}

/**
 * @param date 时间值,字符串或者Date
 * @param needTime 是否需要带时分秒,否就采用默认时分秒
 * @param type 1:  起始时间, 2: 结束时间
 */
export function formatDate(date, needTime = true, type = null as number) {
  if (!date) {
    return null;
  }
  if (needTime) {
    return date.format('YYYY-MM-DDTHH:mm:ssZ');
  }
  if (type === 1) {
    return date.format('YYYY-MM-DDT00:00:00Z');
  }
  if (type === 2) {
    return date.format('YYYY-MM-DDT23:59:59Z');
  }
}

export function checkPhone(phone: string) {
  const phoneReg = /^((1[^0-2]{1})+\d{9})$/;
  return phoneReg.test(phone);
}