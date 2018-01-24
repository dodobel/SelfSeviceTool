<template>
  <div>
    <query-form :query="queryDetail" :org="orgnization" name="queryEdit"></query-form>
  </div>
</template>
<script>
  import QueryForm from './QueryForm.vue'
  export default {
    // props: ['rule'],
    components: {
      QueryForm
    },
    data () {
      let route = this.$route
      let orgInfo = this.$root.org
      let curid = Number(route.params.id)
      let curQuery = this.$root.query.filter(function (ele) {
        return ele.id === curid
      })[0]
      return {
        queryDetail: curQuery,
        orgnization: orgInfo
      }
    }
  }
</script>
<style>

</style>