const app = Vue.createApp({
  data() {
    return {
      firstInput: "",
      secondInput: "",
    };
  },
  methods: {
    showAlert() {
      console.log("showAlert");
      alert("Hello from Vue!");
    },
    handleSecondInput(event) {
      this.secondInput = event.target.value;
    },
  },
});

app.mount("#assignment");
