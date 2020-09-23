import axios from 'axios';
import { notification } from 'antd';
import qs from 'qs';
import cookie from 'react-cookies';

// window.cancelRequest = new Map();

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.config.url}`,
    description: errortext,
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};

axios.defaults.baseURL = '/gjy'; // 设置自带路径
axios.defaults.timeout = 15000; // 设置超时时间

const instance = axios.create();
const axiosDefaultOptions = {
  retry: 3, // 设置重试次数
  showLoading: true, // 是否显示 loading
  mock: true, // 是否启用 mock
  gjy: true, // 是否启用 rest
  data: {},
  download: false, // 是否启用 download
};

instance.interceptors.request.use(
  config => {
    // 请求拦截器
    // console.log(config,'config')

    const myConfig = {
      ...axiosDefaultOptions,
      ...instance.defaults,
      ...config,
    };

    // if (
    //   config.method.toUpperCase() === 'POST' ||
    //   config.method.toUpperCase() === 'PUT' ||
    //   config.method.toUpperCase() === 'PATCH'
    // ) {
    //   if (!(config.body instanceof FormData)) {
    //     config.headers = {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json; charset=utf-8',
    //       ...config.headers,
    //     };
    //     if (!!config.body) {
    //       config.body = JSON.stringify(config.body);
    //     }
    //   } else {
    //     // newOptions.body is FormData
    //     config.headers = {
    //       Accept: 'application/json',
    //       ...config.headers,
    //     };
    //   }
    // }

    const requsetData = {
      reqHeader: {
        sid: cookie.load('sid') ? cookie.load('sid') : 123456,
      },
      reqBody: myConfig.data,
    };

    if (myConfig.data.download) {
      myConfig.headers = {
        ...myConfig.headers,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      };
      myConfig.data = qs.stringify({
        jsonRequest: JSON.stringify({ requsetData }),
      });
      myConfig.responseType = 'blob';
    } else {
      myConfig.data = requsetData;
    }

    if (!myConfig.gjy) {
      // 根据配置与参数设置 baseUrl 与 mock
      myConfig.baseURL = '';
    } else if (myConfig.mock) {
      myConfig.baseURL = '/gjy/mock';
    }
    return myConfig;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(response => {
  // 响应拦截器
  // console.log(response,'response')
  checkStatus(response);
  return response.data;
});

export default instance;
