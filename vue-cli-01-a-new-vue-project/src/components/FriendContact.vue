<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show details</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      showDetails: false,
      friend: {
        id: "hannah",
        name: "Hannah Elixmann",
        phone: "0123 45678 90",
        email: "hannah@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>
