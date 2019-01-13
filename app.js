new Vue({
  el: "#vue-app",
  data: {
    name: "Nick",
    job: "Developer",
    website: "https://trivializer.netlify.com/"
  },
  methods: {
    greet: function(time) {
      return `Good ${time}, ${this.name}`;
    }
  }
});
