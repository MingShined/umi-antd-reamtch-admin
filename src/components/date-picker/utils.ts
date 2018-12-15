import moment from 'moment';

export const formatDate = (
  date,
  showTime: boolean = true,
  range: boolean = false
) => {
  if (!date && !range) {
    return '';
  }
  if (date.length === 0 && range) {
    return [];
  }
  if (showTime && !range) {
    return moment(date).format('YYYY-MM-DDTHH:mm:ssZ');
  }
  if (!showTime && !range) {
    return moment(date).format('YYYY-MM-DDT00:00:00Z');
  }
  if (showTime && range) {
    return date.map(item => moment(item).format('YYYY-MM-DDTHH:mm:ssZ'));
  }
  if (!showTime && range) {
    return [
      moment(date[0]).format('YYYY-MM-DDT00:00:00Z'),
      moment(date[1]).format('YYYY-MM-DDT23:59:59Z')
    ];
  }
};

export const getInitValue = (type: string, value: any) => {
  let result = null;
  switch (type) {
    case 'date':
      result = value ? moment(value) : null;
      break;
    case 'range':
      result = value && value.length > 0 ? value.map(item => moment(item)) : [];
      break;
    default:
      break;
  }
  return result;
};
