

<template>
  <div>
    <app-header></app-header>
    <app-ninja v-bind:ninjas="ninjas"></app-ninja>
    <hr>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
    <ninjas></ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Ninjas from "./ninjas.vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Ninja from "./components/ninjas.vue";
export default {
  components: {
    ninjas: Ninjas,
    "app-header": Header,
    "app-footer": Footer,
    "app-ninja": Ninja
  },
  data() {
    return {
      title: "First Vue File",
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false }
      ]
    };
  },
  methods: {
    greeting: function() {
      return "New Vue Project!";
    }
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
