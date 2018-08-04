<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-if="!this.$store.state.isLoggedIn" to="/register">Sign Up</router-link> 
      <router-link v-if="!this.$store.state.isLoggedIn" to="/login">Log In</router-link>
      <button class="bg-red" v-if="this.$store.state.isLoggedIn" @click="logout">Log Out</button>
    </div>
    <router-view/>
    <h3>Errors:</h3>
        <div v-if="this.$store.state.errors.length > 0">
    <li v-for="error in this.$store.state.errors" :key="error.msg">
      {{error.msg}}
    </li>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  methods: {
    async logout() {
      console.log('logging out client')
      try {
        const response = await AuthenticationService.logout()
        this.$store.commit('logout')
      } catch (err) {
        console.log('error! couldnt log out!', { err })
      }
      console.log('going to root')
      this.$router.push('/login')
    }
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style>
@import './styles.css';
</style>

