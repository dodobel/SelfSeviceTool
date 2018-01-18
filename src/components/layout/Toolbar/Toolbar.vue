<template>
  <div class="toolbar">
    <q-toolbar-title :padding="1">
      Self Service Tool
    </q-toolbar-title>
    <a @click="" class="">
      <q-icon name="account box" size="34px" />
    </a>
  </div>
</template>
<script type="text/javascript">
  // import { mapMutations, mapGetters } from 'vuex'
  // import messagePopover from './messagePopover.vue'
  import {
  // dom,
  // event,
  // QLayout
  // QBtn,
    QToolbarTitle,
    QIcon
  // QList,
  // QListHeader,
  // QItem,
  // QItemSide,
  // QItemMain
  } from 'quasar'
  export default {
    computed: {
    },
    methods: {
      // ...mapMutations(['setMobileMode'])
    },
    components: {
      // messagePopover
      QToolbarTitle,
      QIcon
    }
  }
</script>
<style scoped>
  .toolbar {
    min-height: 60px;
    background-color: #f5f5f5;
  }
  .q-toolbar-title {
    margin-top: 20px;
    float: left;
    /*width: 500px;*/
  }
  a {
    margin-top: 20px;
    margin-right: 20px;
    float: right;
  }
</style>
