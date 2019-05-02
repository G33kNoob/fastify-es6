<template>
<div class="home">
	<ul>
		<li v-for="(user, index) in getUsers" :key="index">{{ user.name }}</li>
	</ul>
</div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>