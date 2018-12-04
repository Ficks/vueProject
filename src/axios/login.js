import axios from './axios.js';

export default {
  login: options => {
    axios({
      url: "/wordFrontInfo/queryList",
      data: options.data,
    }).then(data => {
      options.success(data);
    }, err => {
      options.error(err);
    })
  }
}
