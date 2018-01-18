import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/', component: load('views/Homepage/Dashboard'), meta: { name: 'Dashboard' } },
    { path: '/dashboard', component: load('views/Homepage/Dashboard'), meta: { name: 'Dashboard' } },
    { path: '/lbs/management', component: load('views/LBS/QueryManagement'), meta: { name: 'Query Manage' } },
    { path: '/lbs/guide', component: load('views/LBS/Guide'), meta: { name: 'LBS Develop Guide' } },
    { path: '/gps/management', component: load('views/GPS/AttrManagement'), meta: { name: 'Attribute Manage' } },
    { path: '/gps/guide', component: load('views/GPS/Guide'), meta: { name: 'GPS Develop Guide' } },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
