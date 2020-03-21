/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [Show qrcode].
 *-------------------------------------------------------------------------------------------- */
const qrcode = require('qrcode-terminal')
const { Log } = require('./utils')
const { devServer } = require('../vue.config')
const interfaces = require('os').networkInterfaces() // 在开发环境中获取局域网中的本机iP地址
const getIp = () => {
  let IPAdress = ''
  for(let devName in interfaces){
    let iface = interfaces[devName]
    for(let i=0; i<iface.length; i++){
          let alias = iface[i]
          if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
            IPAdress = alias.address
          }
    }
  }
  return IPAdress
}
const location = `http://${getIp()}:${devServer.port}`
qrcode.generate(location, function (qrcode) {
  console.log(qrcode)
  Log.success(`Create QRCode for ${location}`)
})
