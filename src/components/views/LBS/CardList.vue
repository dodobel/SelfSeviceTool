<template>
    <!-- <div class="layout-padding"> -->
      <q-card class="bigger">
        <q-card-title>Your Query List
        </q-card-title>
        <q-card-main>
          <table class="q-table vertical-separator flipped loose">
			  <thead>
			    <tr>
			      <th class="text-left">Query Name</th>
			      <th class="text-left">Usecase</th>
			      <th class="text-left">Expected Traffic</th>
			      <th class="text-left">Status</th>
			    </tr>
			  </thead>
			  <tbody>
			    <!-- <tr v-for="item in query">
			      <td class="text-left">{{item.name}}</td>
			      <td class="text-left">{{item.description}}</td>
			      <td class="text-left">{{item.exp_traffic}}</td>
			      <td class="text-left">{{item.status}}</td>
			    </tr> -->
          <tr>
            <td class="text-left">{{list.name}}</td>
            <td class="text-left">{{list.description}}</td>
            <td class="text-left">{{list.exp_traffic}}</td>
            <td class="text-left">{{list.status}}</td>
          </tr>
			    <!-- <tr>
			      <td class="text-left">Item #2</td>
			      <td class="text-right">$8.88</td>
			      <td class="text-right">34</td>
			    </tr>
			    <tr>
			      <td class="text-left">Item #3</td>
			      <td class="text-right">$0.15</td>
			      <td class="text-right">1670</td>
			    </tr> -->
			  </tbody>
			</table>
      <q-btn icon="edit" color="primary" class="right" small>
        Edit
      </q-btn>
        </q-card-main>
      </q-card>
    <!-- </div> -->
</template>

<script>
  import { QCard, QCardTitle, QBtn } from 'quasar'
  import query from 'data/query.json'
  export default {
    mounted () {
    },
    data () {
      return {
        query
      }
    },
    computed: {
    },
    methods: {
    },
    components: { QCard, QCardTitle, QBtn }
  }
</script>

<style scoped>
  /*.card-title{
  	font-size: 1.1rem;
  	font-weight: 500;
  	padding: 16px;*/
  /*}*/
  .bigger {
  	width: 400px;
  	height: 450px;
    float: left;
  }
  .q-card-primary {
  	background: #027be3;
  }
  .right {
    margin-top: 60px;
    margin-left: 250px;
  }
</style>
