new Vue({
  el: "#vue-app",
  data: {
    name: "Nick",
    job: "Developer",
    website: "https://trivializer.netlify.com/",
    websiteTag: "<a href='https://trivializer.netlify.com/'>New Website</a>",
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time) {
      return `Good ${time}, ${this.name}`;
    },
    add: function(number) {
      this.age += number;
    },
    subtract: function(number) {
      this.age -= number;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});
