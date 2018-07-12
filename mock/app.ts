import Mock from 'mock';

const userToken = Mock.mock('http://localhost:8000/api/getToken', {
  name: '@cname', // 中文名称
  'id|+1': 88, // 属性值自动加 1，初始值为88
  'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
  birthday: '@date("yyyy-MM-dd")', // 日期
  city: '@city(true)', // 中国城市
  color: '@color', // 16进制颜色
  idToken: '@date("yyyy-MM-dd")@color@city(true)@cname'
});
