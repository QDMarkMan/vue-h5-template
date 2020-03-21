/** ---------------------------------------------------------------------------------------------,,,
 *  @Author [ETongfu].,,,
 *  @Des [All module].
 *-------------------------------------------------------------------------------------------- */
export default [
  // @Date: 2020-01-11 18:48:52
  {
    path: '/Login',
    component: () => import('@/views/mine/Login'),
    hidden: true,
    name: 'Login'
  },
  {
    path: '/Mine',
    component: () => import('@/views/mine/Mine'),
    hidden: true,
    name: 'Mine'
  },
  {
    path: '/Setting',
    component: () => import('@/views/mine/Setting'),
    hidden: true,
    name: 'Setting'
  }
]
