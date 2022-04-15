const app = Vue.createApp({
  data() {
    return {
      firstHint: "Not there yet",
      secondHint: "Too much!",
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return this.firstHint;
      }

      if (this.number > 37) {
        return this.secondHint;
      }

      return this.number;
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
});

app.mount("#assignment");
