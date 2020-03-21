/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [Login API].
 *-------------------------------------------------------------------------------------------- */
import { servicePOST } from 'parts/http'

/**
 * Login param
 * @param {*} data
 */
export function doLoginByUsername (data) {
  return servicePOST('/login', data)
}
