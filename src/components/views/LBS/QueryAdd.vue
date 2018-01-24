<template>
  <div>
    <query-form :query="queryDetail" :org="orgnization" name="queryAdd"></query-form>
  </div>
</template>
<script>
  import QueryForm from './QueryForm.vue'
  // import axios from 'axios'
  export default {
    // props: ['rule'],
    components: {
      QueryForm
    },
    data () {
      // let url = this.$config.org
      // axios.get(url).then(response => {
      //   this.orgnization = response.data
      // })
      // let route = this.$route
      let orgInfo = this.$root.org
      return {
        queryDetail: {
          'name': '',
          'description': '',
          'exp_traffic': '',
          'status': 'On Hold',
          'inputfileds': [],
          'outputfileds': [],
          'datasource': '',
          'org_name': ''
        },
        orgnization: orgInfo
        // orgnization: {
        //   'name': '',
        //   'contactinfo': '',
        //   'accesslist': [],
        //   'data': []
        // }
      }
    }
  }
</script>
<style>

</style>