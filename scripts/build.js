/*
 * @Author: etongfu
 * @Email: 13583254085@163.com
 * @Date: 2019-06-12 18:06:24
 * @LastEditors: etongfu
 * @LastEditTime: 2019-08-26 19:47:18
 * @Description: run build and hooks
 * @youWant: add you want info here
 */
'use strict'
process.env.NODE_ENV = process.env.NODE_ENV == 'beta' ? 'beta' : 'production'
const ora = require('ora')
const { sh } = require('tasksfile')
const { Notify } = require('./utils')
const builtHooks = require('./buildHooks')
const scriptArgv = process.argv.slice(2)
const args = scriptArgv.join(' ')

const spinner = ora(`building for ${process.env.NODE_ENV}...\n`)
spinner.start()
// real pack command
sh(`vue-cli-service build ${args}`, {
  silent: false
})
// build success
spinner.succeed("打包完成")
// notify
Notify.showNotify("打包完成", "即将进行下一步操作")
// delay 2s
setTimeout(() => {
  // run hooks
  builtHooks()
},2000)
// 执行脚本
