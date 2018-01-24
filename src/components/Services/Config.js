// const SERVER_ENDPOINT = ''  // can specify to the real server address such as http://endpoint
// const ConfigStore = {
//   rules: SERVER_ENDPOINT + '/static/data/rules.json',
//   clusters: SERVER_ENDPOINT + '/static/data/clusters.json',
//   treemap: SERVER_ENDPOINT + '/static/data/clustertree.json'
// }

console.log(process.env.NODE_ENV)
const endpoints = {
  development: 'http://localhost:3000',
  testing: 'http://localhost:3000',
  production: 'http://localhost:8080/v0.1/api'
}

const SERVER_ENDPOINT = endpoints[process.env.NODE_ENV]
console.log(SERVER_ENDPOINT)
const ConfigStore = {
  query: SERVER_ENDPOINT + '/queries',
  org: SERVER_ENDPOINT + '/organizations'
  // clusters: SERVER_ENDPOINT + '/clusters',
  // treemap: SERVER_ENDPOINT + '/clustertree'
}

const ConfigService = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          configStore: ConfigStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$config', {
      get () {
        return this.$root.configStore
      }
    })

    Object.defineProperty(Vue.prototype, '$hashpath', {
      get () {
        return '#' + this.$route.path
      }
    })
  }
}

export default ConfigService
