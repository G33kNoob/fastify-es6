<template>
<div class="home">
  <input type="text" v-model="name">
  <button @click="setUser()">Add</button>
	<ul>
		<li v-for="(user, index) in getUsers" :key="index">{{ user.name }}</li>
	</ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
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
    setUser() {
      this.$store.dispatch('ADD_USER', {name: this.name})
    }
  }
};
</script>