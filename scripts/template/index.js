const fs = require('fs')
const path = require('path')
const os = require('os')
const readline = require('readline')
const {Log, DateUtil, StringUtil , LOCAL, ROOTPATH} = require('../utils')
/**
 * @param {*string} content
 * @param {*string} comment
 */
const _replaceCommonContent = (content, comment) => {
  if (content === '') return ''
  const comments = [
    ['_author_', LOCAL.config.AUTHOR],
    ['_comment_', comment],
    ['_date_', DateUtil.getCurrentDate()]
  ]
  comments.forEach(item => {
    content = content.replace(item[0], item[1])
  })
  return content
}
/**
 * Templates arr
 */
module.exports.getTemplates = () => {
  const dir = path.resolve(__dirname)
  let files = fs.readdirSync(dir)
  return files.filter((file => (file !== 'index.js')))
}
/**
 * buile viue file
 * @param {*} moduleName
 * @param {*string} filename
 * @returns {*string}
 */
module.exports.buildVueFile = (moduleName, comment, template="PageView.vue") => {
  const VueTemplate = fs.readFileSync(path.resolve(__dirname, '.', template))
  let builtTemplate = StringUtil.replaceAll(VueTemplate.toString(), "_module_", moduleName)
  return _replaceCommonContent(builtTemplate, comment)
}
/**
 * Create route config
 * @param {*} target
 * @param {*} module
 */
const createRoute = (target, module) => {
  let temp = [
    `  // @Date: ${DateUtil.getCurrentDate()}`,
    `  {`,
    `    path: '/${target}/${module}',`,
    `    component: () => import('@/views/${target}/${module}'),`,
    `    hidden: true,`,
    `    name: '${module}'`,
    `  }`
  ]
  // return {
  //     path: `/${target}/${module}`,
  //     component: `() => import("@/views/${target}/${module}")`,
  //     hidden: true,
  //     name: module
  // }
  return temp
}
/**
 * Inject route to file
 * @param {*} target
 * @param {*} module
 */
module.exports.injectRoute = (target, module) => {
  try {
    const root = path.join(ROOTPATH.routerPath, `${target}.js`)
    const _root = path.join(ROOTPATH.routerPath, `_${target}.js`)
    const newRoute = createRoute(target, module)
    // temp file content
    let temp = []
    // file read or write
    let readStream = fs.createReadStream(root)
    // temp file
    let writeStream = fs.createWriteStream(_root)
    let readInterface = readline.createInterface(
      {
        input: readStream
      // output: writeStream
      }
    )
    // collect old data in file
    readInterface.on('line', (line) => {
      temp.push(line)
    })
    // After read file and we begin write new router to this file
    readInterface.on('close', () => {
      let _index
      temp.forEach((line, index) => {
        if (line.indexOf(']') !== -1) {
          temp[index-1] = temp[index-1] + ','
          _index = index
        }
      })
      // temp[temp.length - 2] += ','
      // temp.splice(temp.length-1, 0, newRoute)
      temp = temp.slice(0, _index).concat(newRoute, temp.slice(_index))
      // write file
      temp.forEach(el => {
        //os.EOL 一个字符串常量,定义操作系统相关的行末标志:
        writeStream.write(el + os.EOL)
      })
      // writeStream.end('\n') 不需要以换行为结尾了
      writeStream.end()
      // 流文件读写完毕
      writeStream.on('finish', () => {
        writeStream.close() // close current stream
        fs.unlinkSync(root) // delete old file
        fs.renameSync(_root, root) // exchange file
        Log.success(`Route inject success`)
        // 如果是默认任务就抛出检查任务事件check-task
      })
    })
  } catch (error) {
    Log.error('路由注入失败')
    Log.error(error)
  }
}
