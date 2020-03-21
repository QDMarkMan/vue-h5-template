/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [Unlogged user blocking].
 *-------------------------------------------------------------------------------------------- */
import router from './router'
import { readToken } from 'parts/token'

const whiteList = ['/login'] // noredirect list
router.beforeEach((to, from, next) => {
  // user login permission
  if (readToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next({ path: `/login?redirect=${to.path}` })
    }
  }
})
