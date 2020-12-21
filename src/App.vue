<template>
  <div id="app" class="App">
    <!-- <navbar v-if={islogged}></navbar> -->
    <!-- <a href="#" class="btn btn-danger" v-on:click="count_up()">to</a>
    <router-link to="/add" class="btn btn-success">Login</router-link> -->
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
// import navbar from "./layout/nav_bar";

export default {
  name: 'App',
  data(){
    return {
        islogged : false,
      };
  },
  components: {
    // navbar,
  },
  computed : {
    ...mapGetters(['DataSet']),
  },
  created() {
    console.log(this.DataSet)
  },
  methods : {
    ...mapMutations({add : 'setDataSet'}),
    count_up(){
      let data = this.DataSet;
      data ++;
      this.add(data);
      console.log(this.DataSet)
    }
  },
  watch : {
    DataSet : {
        handler(DataSet){
          console.log(DataSet)
        }
    }
  }
}

</script>


<style lang="scss" scope>
  $primary-background: #fff;
  $circle-background: rgba(238, 238, 238, 0.815);


  .App {
    background-color: $primary-background;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before{
      content: "";
      width: calc(600px + 30vw);
      height: calc(600px + 30vw);
      background: $circle-background;
      position: absolute;
      transform: translate(-30%,-20%);
      border-radius: 50%;
    }
  }
</style>