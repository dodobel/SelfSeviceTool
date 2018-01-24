<template>
<q-card class="formcard">
  <q-card-title class="card-title bg-teal text-white">
  manage you query
  </q-card-title>
  <q-card-main class="cotent row">
  <div class="form">
  	<div v-if="this.name === 'queryAdd' && this.org.length===0">
  	  <q-input v-model="orgInfo.name" inverted color="brown-3" stack-label="Orgnazation" />
  	  <q-input v-model="orgInfo.contactinfo" inverted color="brown-3" stack-label="Contact Info" />
  	  <q-input v-model="orgInfo.accesslist" inverted color="brown-3" stack-label="Access List" />
  	</div>
  	<q-select v-if="this.org.length!==0" :options="orgOptions" v-model="queryDetail.org_name" inverted color="brown-3" stack-label="Orgnazation" />
  	<q-input v-if="this.name === 'queryEdit'" inverted color="brown-3" v-model="queryDetail.name" disable stack-label="Name" />
  	<q-input v-if="this.name === 'queryAdd'" inverted color="brown-3" v-model="queryDetail.name" stack-label="Name" />
    <q-input type="textarea" inverted color="brown-3" v-model="queryDetail.description" stack-label="Usecase" />
    <q-input inverted color="brown-3" v-model="queryDetail.exp_traffic" stack-label="Expected Traffic" />
    <q-select inverted color="brown-3" :options="selectOptions" v-model="queryDetail.datasource" stack-label="Data Source" />
    <div class="row">
    <p class="caption col-6" style="margin-top: 30px;">Input Fileds</p>
    <p class="caption col-6">Output Fileds</p>
    <q-option-group v-model="queryDetail.inputfileds" class="col-6" type="checkbox" :options="inputFileds" />
    
    <q-option-group v-model="queryDetail.outputfileds" class="col-6" type="checkbox" :options="outputFileds" />
    </div>    
    <q-btn color="primary" style="float: right;margin-left: 5px;width: 65px" @click="cancel">Cancel</q-btn>
    <q-btn color="primary" style="float: right" @click="submit">Save</q-btn>
  </div>
  </q-card-main>
</q-card>
</template>
<script>
  import axios from 'axios'
  import { QCard, QCardTitle, QCardMain, QInput, QBtn, QSelect, QOptionGroup } from 'quasar'
  export default {
    props: ['name', 'query', 'org'],
    components: {
      QCard, QCardTitle, QCardMain, QInput, QBtn, QSelect, QOptionGroup
    },
    created () {
      console.log(this.query)
      for (let index in this.org) {
        this.orgOptions.push(
          { label: this.org[index].name,
            value: this.org[index].name
          }
        )
      }
    },
    data () {
      return {
        // input: ['selected'],
        // output: ['selected'],
        // usecase: 'selling',
        // traffic: '25M',
        // select: '1',
        // org_name: '',
        // contactinfo: '',
        // accesslist: [],
        queryDetail: JSON.parse(JSON.stringify(this.query)),
        orgInfo: JSON.parse(JSON.stringify(this.org)),
        orgOptions: [],
        selectOptions: [
          {
            label: 'Local Team Data',
            value: 'Local Team Data'
          },
          {
            label: 'Postal Code Data',
            value: 'Postal Code Data'
          },
          {
            label: 'IP Address Data',
            value: 'IP Address Data'
          }
        ],
        inputFileds: [
          {label: 'selected', value: 'selected', color: 'amber'},
          {label: 'not selected', value: 'not selected', color: 'amber'},
          {label: 'indeterminate', value: 'indeterminate', color: 'amber'},
          {label: 'disabled', value: 'disabled', color: 'amber'},
          {label: 'disabled selected', value: 'disabled selected', color: 'amber'}
        ],
        outputFileds: [
          {label: 'selected', value: 'selected', color: 'amber'},
          {label: 'not selected', value: 'not selected', color: 'amber'},
          {label: 'indeterminate', value: 'indeterminate', color: 'amber'},
          {label: 'disabled', value: 'disabled', color: 'amber'},
          {label: 'disabled selected', value: 'disabled selected', color: 'amber'}
        ]
      }
    },
    methods: {
      submit () {
        if (this.name === 'queryEdit') {
          let url = this.$config.query + '/' + this.queryDetail.id
          axios.put(url, this.queryDetail).then(response => {
          })
            .catch(e => {
              console.error(e)
            })
          this.$router.replace('../')
        }
        else if (this.name === 'queryAdd') {
          console.log(this.org.length)
          let orgurl = this.$config.org
          if (this.org.length === 0) {
            // this.orgInfo.data = []
            setTimeout(() => {
              let postOrg = {
                'name': this.orgInfo.name,
                'contactinfo': this.orgInfo.contactinfo,
                'accesslist': this.orgInfo.accesslist,
                'data': []
              }
              console.log(postOrg)
              axios.post(orgurl, postOrg).then(response => {
                this.queryDetail.org_name = this.orgInfo.name
                console.log(response.data)
              })
                .catch(e => {
                  console.error(e)
                })
            }, 100)
            // axios.post(orgurl, this.orgInfo).then(response => {
            //   this.queryDetail.org_name = this.orgInfo.name
            // })
            //   .catch(e => {
            //     console.error(e)
            //   })
          }
          let queryurl = this.$config.query
          console.log(this.queryDetail)
          setTimeout(() => {
            axios.post(queryurl, this.queryDetail).then(response => {
              console.log(response.data)
            })
              .catch(e => {
                console.error(e)
              })
          }, 500)
          // axios.post(queryurl, this.queryDetail).then(response => {
          // })
          //   .catch(e => {
          //     console.error(e)
          //   })
          this.$router.replace('./')
        }
      },
      cancel () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
  .formcard {
  	margin-left: 200px;
  	margin-right: 200px;
  }
  .form {
  	width: 600px;
  	margin-left: 140px;
  }
</style>