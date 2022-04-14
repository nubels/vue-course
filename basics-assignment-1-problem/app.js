const vue = Vue.createApp({
  data() {
    return {
      name: "Niklas",
      age: "21",
      favoriteNumer: "7",
      imgUrl: "https://avatars.githubusercontent.com/u/81755541?v=4",
    };
  },
  methods: {
    generateRandomNumber() {
      return Math.floor(Math.random() * 10);
    },
  },
}).mount("#assignment");
