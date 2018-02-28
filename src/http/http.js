import axios from "axios";
const downloadUrl = url => {
  let iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  iframe.onload = function () {
    document.body.removeChild(iframe)
  }
  document.body.appendChild(iframe)
}

// 请求时的拦截
axios.interceptors.request.use(function (config) {
  // 发送请求之前做一些处理
  return config;
}, function (error) {
  // 当请求异常时做一些处理
  return Promise.reject(error);
});
// 响应时拦截
axios.interceptors.response.use(function (res) {
  if (res.headers && (res.headers['content-type'] === 'application/x-msdownload' || res.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || res.headers['content-type'] === 'application/zip')) {
    downloadUrl(res.request.responseURL)
    return
  }
  // 返回响应时做一些处理
  return res;
}, function (error) {
  switch (error.response.status) {
    case 404:
      //404处理
      break;
    case 500:
      //500处理
      break;
    default:
      break;
  }
  alert("接口调用失败:" + error.response.statusText + "\n" +
    "状态码:" + error.response.status)
  // 当响应异常时做一些处理
  return Promise.reject(error.response.response)
});
export default {
  get(url,options){
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params:options.params,
        timeout: 30 * 1000,//30秒超时
        headers: options.header || {'Content-Type': 'application/json'}
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject()
      })
    })
  },
  post(url,options){
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data:options.data,
        timeout: 30 * 1000,//30秒超时
        headers: options.header || {'Content-Type': 'application/json'}
      }).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject()
      })
    })
  }
}
