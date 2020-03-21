/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [storage util].
 *-------------------------------------------------------------------------------------------- */
const supportStorage = function () {
  let flag = false
  if (!window.Storage) {
    throw new Error('浏览器不支持localStorage')
  } else {
    flag = true
  }
  return flag
}
/**
 * set
 * @param {*storage名} name
 * @param {*storage值} value
 * @param {*类型 session/local} type
 */
export const setStorage = (name, value, type = 'local') => {
  let storage
  if (supportStorage()) {
    let _value = JSON.stringify(value)
    if (type === 'local') {
      storage = window.localStorage
    } else {
      storage = window.sessionStorage
    }

    storage.setItem(name, _value)
  }
}
/**
 * get
 * @param {*} name
 * @param {*} type
 */
export const getStorage = (name, type = 'local') => {
  let storage
  if (type === 'local') {
    storage = window.localStorage
  } else {
    storage = window.sessionStorage
  }
  return JSON.parse(storage.getItem(name))
}
/**
 * remove
 * @param {*} name
 * @param {*} type
 */
export const removeStorage = (name, type = 'local') => {
  let storage
  if (type === 'local') {
    storage = window.localStorage
  } else {
    storage = window.sessionStorage
  }
  return storage.removeItem(name)
}
/**
 *
 * @param {clear} type
 */
export const clearStorage = (type = 'local') => {
  let storage
  if (type === 'local') {
    storage = window.localStorage
  } else {
    storage = window.sessionStorage
  }
  return storage.clear()
}
