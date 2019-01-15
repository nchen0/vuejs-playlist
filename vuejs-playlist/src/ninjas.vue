<template>
  <div>
    <h1>List of Ninjas</h1>
    <div>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Yoshi", "Mario", "Bowser", "Ryu"]
    };
  }
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
