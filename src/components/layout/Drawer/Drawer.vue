<template>
  <q-list no-border>
    <q-side-link item to="/dashboard" exact replace>
      <q-item-side icon="home" />
      <q-item-main label="Homepage" />
      <!-- <q-item-side right icon="chevron_right" /> -->
    </q-side-link>
    <q-collapsible icon="assessment" label="LBS">
      <div class="content">
        <q-side-link item to="/lbs/management" exact replace>
          <q-item-main label="Query Management" />
        </q-side-link>
        <q-side-link item to="/lbs/guide" exact replace>
          <q-item-main label="Develop Guide" />
        </q-side-link>
      </div>
    </q-collapsible>
    <q-collapsible icon="web" label="GPS">
      <div class="content">
        <q-side-link item to="/gps/management" exact replace>
          <q-item-main label="Attribute Management" />
        </q-side-link>
        <q-side-link item to="/gps/guide" exact replace>
          <q-item-main label="Develop Guide" />
        </q-side-link>
      </div>
    </q-collapsible>
    <q-collapsible icon="storage" label="Cookie">
      <div>
        Content
      </div>
    </q-collapsible>
  </q-list>
</template>
<script type="text/javascript">
  import {
  // dom,
  // event,
  // QLayout
  // QToolbar,
  // QToolbarTitle
  // QBtn,
  // QIcon,
    QSideLink,
    QListHeader,
    QCollapsible,
    QList,
    QItem,
    QItemSide,
    QItemMain
  } from 'quasar'
  // import { mapGetters } from 'vuex'
  // import menuOne from './menuOne.vue'
  // import menuTwo from './menuTwo.vue'
  // import firebase from 'firebase'
  
  export default {
    data () {
      return {
        // photo: '',
        // userId: '',
        // name: '',
        // email: '',
        // user: {},
        // links: {
        //   Dashboard: {
        //     routes: [
        //       { route: '/', faIcon: 'fa fa-home', materialIcon: 'home', name: 'Dashboard One' }
        //     ],
        //     show: true
        //   },
        //   Forms: {
        //     routes: [
        //       { route: '/form', faIcon: 'fa fa-search', materialIcon: 'search', name: 'Form find / edit' },
        //       { route: '/embeeded', faIcon: 'fa fa-check', materialIcon: 'check', name: 'Embeeded validations' },
        //       { route: '/advanced-form-one', faIcon: 'fa fa-hdd-o', materialIcon: 'filter_1', name: 'Adv. Form One' }
        //     ],
        //     show: false
        //   },
        //   Pages: {
        //     routes: [
        //       { route: '/login-one', faIcon: 'fa fa-unlock-alt', materialIcon: 'lock_open', name: 'Login One' },
        //       { route: '/pricing', faIcon: 'fa fa-money', materialIcon: 'attach_money', name: 'Pricing' },
        //       { route: '/drag-and-drop', faIcon: 'fa fa-arrows', materialIcon: 'move_to_inbox', name: 'Drag and Drop' },
        //       { route: '/server-side-data-table', faIcon: 'fa fa-list-alt', materialIcon: 'list_compact', name: 'Server Side Data Table' }
        //     ],
        //     show: false
        //   }
        // }
      }
    },
    created () {
      // var vm = this
      // firebase.auth().onAuthStateChanged(function (user) {
      //   if (user) {
      //     vm.user = user
      //     vm.name = vm.user.displayName
      //     vm.email = vm.user.email
      //     vm.photo = vm.user.photoURL
      //     vm.userId = vm.user.uid
      //   }
      // })
    },
    methods: {
      // logOut () {
      //   firebase.auth().signOut()
      // }
    },
    computed: {
      // ...mapGetters(['getLayoutNeeded', 'getMenuCollapse'])
    },
    components: {
      QSideLink,
      QListHeader,
      QCollapsible,
      QList,
      QItem,
      QItemSide,
      QItemMain
    }
  }
</script>
<style scoped>
  .q-item,.q-item:hover,.q-list {
    background: #eee;
  }
  .router-link-active {
    color: #027be3;
    background-color: #dadada !important;
    border-right: 2px solid #027be3;
  }
  .router-link-active .q-item-icon{
    color: #027be3;
  }
  .content {
    margin-left: 30px;
  }
  #profile {
    height: 130px;
    background-color: red;
  }
</style>
