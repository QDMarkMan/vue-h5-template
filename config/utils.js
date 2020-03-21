/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [webpack util].
 *-------------------------------------------------------------------------------------------- */

const path = require('path')
const fs = require('fs')
/**
 * Alias built in
 * @param {*} extra
 */
module.exports.getAllAlias = (extra = {}) => {
  const _rootSrc = path.resolve(__dirname, '../src')
  let files = fs.readdirSync(_rootSrc)
  let alias = files.reduce((pre, next) => {
    if (fs.statSync(path.join(_rootSrc, `${next}`)).isDirectory()) {
      pre[next] = path.join(_rootSrc, `${next}`)
    }
    return pre
  }, {})
  return JSON.parse(JSON.stringify(Object.assign(extra, alias)))
}
