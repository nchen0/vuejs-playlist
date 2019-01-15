Vue.component("sgreeting", {
  template:
    "<p>Hey There I am {{name}}. <button v-on:click='changeName'>Change name</button> </p>",
  data: function() {
    return {
      name: "Yoshi"
    };
  },
  methods: {
    changeName: function() {
      this.name = "Mario";
    }
  }
});

let one = new Vue({
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
    ninjas: [
      { name: "Ryu", age: 25 },
      { name: "Sam", age: 26 },
      { name: "Jessica", age: 22 }
    ],
    title: "Vue Instance 1"
  },
  methods: {
    newGreet: function() {
      return "Vue Instance 1";
    },
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

let two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two",
    output: "Your favorite food"
  },
  methods: {
    changeOneTitle: function() {
      one.title = "Changed";
    },
    readRefs: function() {
      // We want to access the input refs we defined in the HTML.
      this.output = this.$refs.input.value;
      this.$refs.test.innerText = this.output;
      console.log("this.$refs is: ", this.$refs);
    }
  },
  computed: {
    greet: function() {
      return "Vue instance 2";
    }
  }
});
