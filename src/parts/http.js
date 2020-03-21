import axios from 'axios'
import { readToken } from './token'
import Qs from 'qs'
// setting header
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.withCredentials = true // open cookie
// let ignoreWarn = false // 是否忽略提醒
// create axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // base_url for api
  timeout: 4 * 5000 // request overtime time
})
// request intercept
service.interceptors.request.use(async config => {
  // config.ignoreWarn ? (ignoreWarn = true) : (ignoreWarn = false)
  // Do something before request is sent  add token for request
  // config.headers["token"] = ; // define token key you can use you customize key
  if (readToken()) {
    config.headers['token'] = readToken() // define token key you can use you customize key
  }
  // deal get request
  if (config.method === 'get') {
    config.paramsSerializer = function (params) {
      return Qs.stringify(params, { arrayFormat: 'brackets' })
    }
  }
  // deal post request
  if (config.method === 'post') {
    config.transformRequest = [
      function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
          ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ]
  }
  return config
},
error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
}
)
// respone intercept
service.interceptors.response.use(
  response => {
    // if (response.status === 200) {
    //   // session 失效
    // }
    // return real data entity
    return response.data
  },
  /**
   * error callback change callback by judge status code
   */
  error => {
    console.error('err' + error) // for debug
    return Promise.reject(error)
  }
)
/**
 * http POST
 * @param {*string} url targeturl
 * @param {*object} data
 * @param {*object} options
 */
export function servicePOST (url, data = {}) {
  return service({
    method: 'post',
    url,
    data
  })
}
/**
 * http GET
 * @param {*string} url targeturl
 * @param {*object} data
 * @param {*object} options
 */
export function serviceGET (url, params = {}) {
  return service({
    method: 'post',
    url,
    params
  })
}
// defalut service
export default service
