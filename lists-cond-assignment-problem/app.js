const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      showList: true,
    };
  },
  computed: {
    buttonMessage() {
      return this.showList ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask(task) {
      this.tasks.push(this.newTask);
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleList() {
      this.showList = !this.showList;
    },
  },
});

app.mount("#assignment");
