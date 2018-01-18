<template>
  <div class="layout-padding">
  	<q-card class="card">
      <q-card-title class="card-title bg-teal text-white">
        There are your query lists
      </q-card-title>
      <q-card-main class="cotent">
        <q-card :id="'card'+index" class="bigger" v-for="(list, index) in query" :key="index" :class="index">
		  <q-card-title>{{list.name}}
		  </q-card-title>
		  <q-card-main>
		    <table class="q-table vertical-separator flipped loose">
			  <thead>
			    <tr>
			      <!-- <th class="text-left">Query Name</th> -->
			      <th class="text-left">Usecase</th>
			      <th class="text-left">Expected Traffic</th>
			      <th class="text-left">Status</th>
			    </tr>
			  </thead>
			  <tbody :id="'edit'+index" :class="{'highlight': isedit[index]}">
			    <tr>
		          <!-- <td class="text-left" @blur="focusState = false" v-focus="focusState">{{list.name}}</td> -->
		          <td class="text-left">{{list.description}}</td>
		          <td class="text-left">{{list.exp_traffic}}</td>
		          <td class="text-left">{{list.status}}</td>
			    </tr>
			  </tbody>
			</table>
		    <q-btn icon="edit" color="primary" class="left"  small @click="edit(index)">
		    <!-- Edit -->
		    </q-btn>
		    <q-btn icon="delete" color="primary" class="left" small @click="deleteRow(index)">
		    <!-- Delete -->
		    </q-btn>
		    <q-btn icon="more horiz" class="corner" color="primary" round small @click="showMore($event, index)">
		    <!-- Edit -->
		    </q-btn>
		  </q-card-main>
        </q-card>
      </q-card-main>
      </q-card>
  </div>
</template>

<script>
  import { QCard, QCardTitle, QCardMain, QBtn } from 'quasar'
  import CardList from './CardList.vue'
  import query from 'data/query.json'
  export default {
    mounted () {
    },
    data () {
      return {
        query,
        isedit: []
      }
    },
    computed: {
    },
    methods: {
      deleteRow (index) {
        // item.rows.forEach(row => {
        //   this.query.splice(row.index, 1)
        // })
        this.query.splice(index, 1)
      },
      edit (index) {
        var editplace = document.getElementById('edit' + index)
        editplace.contentEditable = 'true'
        this.isedit[index] = true
        console.log(this.isedit)
      },
      showMore (event, index) {
        var expand = document.getElementById('card' + index)
        expand.width = '900px'
        console.log(expand.width)
        // this.width = '900px'
        // console.log(event.width)
        // event.width = '900px'
        // console.log(event.width)
      }
    },
    components: { CardList, QCard, QCardTitle, QCardMain, QBtn }
  }
</script>

<style scoped>
  .bigger {
  	width: 465px;
  	height: 470px;
    float: left;
    margin-top: 25px;
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
  	margin-top: 100px;
  	margin-left: 50px;
  	float: left;
  }
/*  .right {
    margin-top: 70px;
    margin-right: 80px;
    float: right
  }*/
  /*.highlight {
  	border: 2px solid red;
  }*/
  .cotent {
  	height: 2600px;
  }
  .corner {
  	margin-top: 160px;
  	/*margin-left: 200px;*/
  	float: right;
  }
  tbody {
  	width: 200px;
  }
</style>
