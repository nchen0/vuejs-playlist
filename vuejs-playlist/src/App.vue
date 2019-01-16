

<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form.</h3>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Handle Submit</button>
      </div>
    </form-helper>
    <hr>
    <app-header v-on:changeTitle="updateTitle($event)" v-bind:title="title"></app-header>
    <app-ninja v-bind:ninjas="ninjas"></app-ninja>

    <hr>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
    <ninjas></ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import formHelper from "./components/formHelper.vue";
import Ninjas from "./ninjas.vue";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Ninja from "./components/ninjas.vue";
export default {
  components: {
    ninjas: Ninjas,
    "app-header": Header,
    "app-footer": Footer,
    "app-ninja": Ninja,
    "form-helper": formHelper
  },
  data() {
    return {
      title: "Vue Ninjas",
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
    updateTitle: function(event) {
      this.title = event;
    },
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
