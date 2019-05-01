<template>
<div class="home">
	<ul>
		<li v-for="(user, index) in users" :key="index"> {{ user.name }} </li>
	</ul>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
	getUsers() {
		this.$store.dispatch('SET_USERS');
		console.log(this.$store.state.users);
		axios.get(this.$store.state.apiUrl + 'users')
			 .then(res => this.users = res.data)
			 .catch(err => console.log(err))
	}

  }
};
</script>