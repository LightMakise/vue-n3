import http from "@/http/http"
let apiUrl = {
  test: "/api/getIpInfo.php",
}
export default {
  test: function (options,success,error) {
    //{url: apiUrl.test2,params:{ip:"127.0.0.1"}}
    http.get(apiUrl.test,options).then(res => {
      success && success(res);
    }).catch(err => {
      error && error(err)
    })
  }
}
