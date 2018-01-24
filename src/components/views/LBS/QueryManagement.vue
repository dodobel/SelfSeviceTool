<template>
  <div class="layout-padding">
    <div class="button">
      <q-btn color="primary" style="margin-top: 10px" outline  @click="addQuery()">
        Create  Query
      </q-btn>
      <!-- <router-link to="./management/add">Create Cluster</router-link> -->
    </div>
    <div v-if="this.orgExit">
  	<q-card v-for="(item, i) in this.org" class="card" :key="i" :class="i">
      <q-card-title class="card-title bg-teal text-white">
        <!-- There are your query lists<br/> -->
        <b>Organization: {{item.name}}</b><br/>
        <b>Contact Info: {{item.contactinfo}}</b><br/>
        <b>Access List: </b>
        <b v-for="list in item.accesslist">{{list}}</b>
        <q-btn icon="edit" color="white" outline class="right"  small @click="editOrg(item)">
        <!-- Edit -->
        </q-btn>
      </q-card-title>
      <q-card-main class="cotent row">
        <q-card :id="'card'+index" class="subcard col-5" v-for="(list, index) in item.data" :key="index" :class="index">
    		  <q-card-title>{{list.name}}
    		  </q-card-title>
    		  <q-card-main>
    		    <table class="q-table vertical-separator flipped loose">
    			  <thead>
    			    <tr>
    			      <th class="text-left">Usecase</th>
    			      <th class="text-left">Expected Traffic</th>
    			      <th class="text-left">Status</th>
    			      <th class="text-left">Input Fileds</th>
    			      <th class="text-left">Output Fileds</th>
    			      <th class="text-left">Data Source</th>
    			    </tr>
    			  </thead>
    			  <tbody :id="'edit'+index" :class="{'highlight': isedit[index]}">
    			    <tr>
    		          <td class="text-left">{{list.description}}</td>
    		          <td class="text-left">{{list.exp_traffic}}</td>
    		          <td class="text-left">{{list.status}}</td>
    		          <td class="text-left" v-for="(item) in list.inputfileds">{{item}}</td>
    		          <td class="text-left" v-for="(item) in list.outputfileds">{{item}}</td>
    		          <td class="text-left">{{list.datasource}}</td>
    			    </tr>
    			  </tbody>
    			</table>
    		  </q-card-main>
          <q-card-actions>
            <q-btn icon="edit" color="primary" class="left" small @click="editQuery(list)" >
            </q-btn>
            <q-btn icon="delete" color="primary" class="left" small @click="deleteRow(i, list, index)">
            </q-btn>
            <q-btn icon="more horiz" class="corner" color="primary" round small >
            </q-btn>
          </q-card-actions>
        </q-card>
      </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
  import { QCard, QCardTitle, QCardMain, QCardActions, QBtn, Dialog, Toast } from 'quasar'
  import CardList from './CardList.vue'
  // import QueryEdit from './QueryEdit.vue'
  import axios from 'axios'
  // import query from 'data/query.json'
  export default {
    mounted () {
    },
    created () {
      let url = this.$config.query
      let org = this.$config.org
      axios.get(url)
        .then(response => {
          this.query = response.data
          this.$root.query = response.data
        })
        .catch(e => {
          console.error(e)
        })
      axios.get(org)
        .then(response => {
          this.org = response.data
          for (let i = 0; i < this.org.length; i++) {
            for (let j in this.query) {
              if (this.query[j].org_name === this.org[i].name) {
                console.log(this.query[j])
                this.org[i].data.push(this.query[j])
              }
            }
          }
          console.log(this.org)
          this.orgExit = response.data[0]
          this.$root.org = response.data
        })
        .catch(e => {
          console.error(e)
        })
    },
    data () {
      return {
        query: [],
        org: [{
          'id': 0,
          'name': '',
          'contactinfo': '',
          'accesslist': [],
          'data': []
        }
        ],
        orgExit: [],
        queryWithOrg: [],
        isedit: []
      }
    },
    computed: {
    },
    methods: {
      deleteRow (i, list, index) {
        let url = this.$config.query + '/' + list.id
        axios.delete(url).then(response => {
          this.query.splice(index, 1)
          this.org[i].data = this.org[i].data.filter(e => e !== list)
          console.log(this.org[i])
        }).catch((e) => {
          console.error(e)
        })
      },
      editOrg (item) {
        Dialog.create({
          title: item.name,
          form: {
            name: {
              type: 'text',
              label: 'Organizations',
              model: item.name
            },
            contactinfo: {
              type: 'text',
              label: 'Contact Info',
              model: item.contactinfo
            },
            accesslist: {
              type: 'text',
              label: 'Access List',
              model: item.accesslist
            }
          },
          buttons: [
            'Cancel',
            {
              label: 'Save',
              handler: (data) => {
                let putQuery = JSON.parse(JSON.stringify(this.query))
                for (let index in putQuery) {
                  if (putQuery[index].org_name === item.name) {
                    let url = this.$config.query + '/' + putQuery[index].id
                    putQuery[index].org_name = data.name
                    axios.put(url, putQuery[index]).then(response => {
                    })
                      .catch(e => {
                        console.error(e)
                      })
                  }
                }
                item.name = data.name
                item.contactinfo = data.contactinfo
                item.data = []
                item.accesslist = JSON.parse(JSON.stringify(data.accesslist))
                let url = this.$config.org + '/' + item.id
                axios.put(url, item).then(response => {
                })
                  .catch(e => {
                    console.error(e)
                  })
                window.location.reload(true)
                Toast.create('Returned ' + JSON.stringify(data))
              }
            }
          ]
        })
      },
      addQuery () {
        this.$router.push({ path: '/lbs/management/add' })
      },
      editQuery (list) {
        this.$router.push({ path: '/lbs/management/edit/' + list.id })
      }
    },
    components: { CardList, QCard, QCardTitle, QCardActions, QCardMain, QBtn, Dialog, Toast }
  }
</script>

<style scoped>
  .bigger {
  	width: 465px;
  	/*height: 470px;*/
    /*float: left;*/
    margin-top: 25px;
  }
  .subcard {
    /*width: 465px;*/
    /*float: left;*/
    margin-left: 50px;
  }
  .isExpand {
  	width: 900px;
  	height: 470px;
    float: left;
    margin-top: 25px;
  }
  .q-card-primary {
  	background: #027be3;
  }
  .left {
  	margin-top: 50px;
  	margin-left: 50px;
  	/*float: left;*/
  }
  .right {
    float: right;
  }
/*  .right {
    margin-top: 70px;
    margin-right: 80px;
    float: right
  }*/
  /*.highlight {
  	border: 2px solid red;
  }*/
/*  .cotent {
  	height: -webkit-fill-available;
  }*/
  .corner {
  	margin-top: 60px;
  	/*margin-left: 200px;*/
  	float: right;
  }
  tbody {
  	width: 300px;
  }
  .button {
    /*height: 30px;*/
    margin-left: 8px;
  }
</style>
