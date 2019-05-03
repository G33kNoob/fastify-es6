<template>
  <div>

    <form @submit.prevent="addUser">
      <input type="text" v-model="name" placeholder="Name">
      <input type="email" v-model="email" placeholder="Email">
      <button type="submit">Add</button>
    </form>

    <ul>
      <li v-for="(user, index) in getUsers" :key="index">
        <strong>Name:</strong>{{ user.name }},
        <strong>Email: </strong>  {{ user.email }}
        <button @click="removeUser(user._id)">x</button>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: ''
    };
  },
  computed: {
    getUsers() {
      return this.$store.getters.GET_USERS;
    },
  },
  mounted() {
    this.$store.dispatch('SET_USERS');
  },
  methods: {
    addUser() {
      this.$store.dispatch('ADD_USER', {name: this.name, email: this.email})
      this.name = '';
      this.email = '';
    },
    removeUser(id) {
      this.$store.dispatch('REMOVE_USER', id)
    }
  }
};
</script>