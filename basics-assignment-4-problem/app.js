const app = Vue.createApp({
  data() {
    return {
      selectedClass: "",
      showParagraph: true,
      inputBgColor: "",
    };
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.selectedClass === "user1",
        user2: this.selectedClass === "user2",
        user3: this.selectedClass === "user3",
        visible: this.showParagraph,
        hidden: !this.showParagraph,
      };
    },
  },

  methods: {
    toggleParagraph() {
      this.showParagraph = !this.showParagraph;
    },
  },
});

app.mount("#assignment");
