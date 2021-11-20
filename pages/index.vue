<template>
<div>
  <Navbar/>
  <b-container>
    <h1 class="mt-5">Home</h1>
    <p>
      Let's meet someones Loneliness Vaccines here.
    </p>
    <b-row class="text-center">
      <Item v-for="(item) in items" :key="item.id" :item="item"/>
    </b-row>
  </b-container>
</div>

</template>

<script>
import Item from "~/components/Item.vue";
import {mapState} from 'vuex';

export default {
  components: {
    Item
  },
  data(){
      return {
          title: "Header",
          text: "Hello Vue.js!",
      }
  },
  computed: {
    ...mapState(['items'])
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700&display=swap');
  body {
    font-family: 'Jost', sans-serif !important;
    a {
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: none;
        color: black;
      }
    }
  }
</style>
