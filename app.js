new Vue({
  el: "#vue-app",
  data: {
    name: "",
    job: "Developer",
    website: "https://trivializer.netlify.com/",
    websiteTag: "<a href='https://trivializer.netlify.com/'>New Website</a>",
    age: 26,
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    characters: ["Mario", "Luigi", "Yoshi", "Bowser"],
    ninjas: [{ name: "Ryu", age: 25 }, { name: "Sam", age: 26 }, { name: "Jessica", age: 22 }]
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
    },
    click: function() {
      alert("Website Clicked!");
    },
    inputName: function(e) {
      this.name = e.target.value;
    },
    inputAge: function(e) {
      console.log("hello");
      this.age = e.target.value;
    },
    changeColor: function() {
      this.available = !this.available;
    }
  },
  computed: {
    addToA: function() {
      return this.a + this.age;
    },
    addToB: function() {
      return this.b + this.age;
    },
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      };
    }
  }
});
