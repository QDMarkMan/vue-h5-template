/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [Token tool].
 *-------------------------------------------------------------------------------------------- */
import { setStorage, getStorage, removeStorage } from '../utils/storage'
const TOKEN_KEY = 'TOKEN_KEY'
// tool CURD functions
// set tooken to locak storage
export const setToken = (value) => {
  setStorage(TOKEN_KEY, value)
}
// get token
export const readToken = () => getStorage(TOKEN_KEY)
// remove token
export const removeToken = () => removeStorage(TOKEN_KEY)
