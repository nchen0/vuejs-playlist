<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "First Vue File"
    };
  },
  methods: {
    greeting: function() {
      return "New Vue Project!";
    }
  }
};
</script>

<style>
</style>
