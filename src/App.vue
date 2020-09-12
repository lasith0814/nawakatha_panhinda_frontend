<template>
  <div id="app">
    <navbar v-if={is_logged}></navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import navbar from "./layout/nav_bar";

export default {
  name: 'App',
  data(){
    return {
        islogged : false,
      };
  },
  components: {
    navbar,
  },
  computed : {
    ...mapGetters(['DataSet']),
  }
}
</script>


