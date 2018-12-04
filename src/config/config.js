let baseURL = {};
if (process.env.NODE_ENV === 'development') {
  baseURL.server = 'http://192.168.1.167:8080/tss-system' // 开发
} else if (process.env.NODE_ENV === 'testing') {
  baseURL.server = 'http://js.885505.com' // 测试
} else if (process.env.NODE_ENV === 'production') {
  baseURL.server = 'http://js.885505.com' // 线上环境
}

module.exports = baseURL;
