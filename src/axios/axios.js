import Vue from 'vue';
import Axios from 'axios';
import config from '@/config/config.js';
import store from '../store/store.js'; //状态管理
import router from '../router'
import qs from 'querystring'; // 提交序列化
import {
  Message
} from 'element-ui';


// 封装Axios
export default params => {
  params.method = params.type || 'post';
  params.data = params.data || {};

  if (params.type == 'get') params.params = params.data;
  return new Promise((resolve, reject) => {
    //创建Axios实例，把基本的配置放进去
    const instance = Axios.create({
      timeout: 10 * 10000,
      withCredentials: true,
      //定义请求根目录
      baseURL: config.server,
    });

    // request拦截器
    instance.interceptors.request.use(config => {
      if (config.method == 'post') {
        config.data = qs.stringify(config.data);
      }
      return config;
    }, error => {
      // Do something with request error
      console.log(error); // for debug
      Promise.reject(error);
    });

    // params.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    instance(params).then(res => {
      //请求成功后执行的函数
      console.log(res);
      if (res.data.status != 1) {
        Message({
          type: "error",
          message: res.data.msg
        })
        if (res.data.status == 10000) {
          router.push({
            path: "/login"
          })
        }

      } else if (params.tips) {
        Message({
          type: "success",
          message: res.data.msg
        })
      }
      resolve(res.data);
    }).catch(err => {
      console.log(err);
      //失败后执行的函数
      if (err == 'Error: timeout of 10000ms exceeded') {
        Message({
          type: 'error',
          message: "网络超时"
        })
      } else {
        Message({
          type: 'error',
          message: "请刷新后重试"
        })
      }
      reject(err);
    })
  });
};
