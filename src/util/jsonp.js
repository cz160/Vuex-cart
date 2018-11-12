import jsonp from 'jsonp'
import qs from 'querystring'
//对jsonp进行封装，使其支持promise
const _jsonp = ({url,params})=>{
    let _params = params || {}
    return new Promise(resolve=>{
        jsonp(url +'?'+qs.stringify(_params),{
            param: 'jsoncallback'
        },(err,data)=>{
            resolve(data)
        })

    })
}
export default _jsonp