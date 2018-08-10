<template>
  <div id="nav" class="bg-indigo flex justify-center items-center">
    <router-link class="link-style" to="/">Home</router-link>
    <router-link class="link-style" v-if="!this.$store.state.isLoggedIn" to="/register">Sign Up</router-link>
    <router-link class="link-style" v-if="!this.$store.state.isLoggedIn" to="/login">Log In</router-link>
    <log-out-component v-if="this.$store.state.isLoggedIn">
      <a class="link-style" slot-scope="{logout}" @click="logout">Log Out</a>
    </log-out-component>
    <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/10/09/rock.jpg?w968h681" alt="" class="mx-4 w-12 h-12 rounded-full">
  </div>
</template>

<script>
import LogOutComponent from '@/components/LogOutComponent'
export default {
  components: {
    LogOutComponent
  }
}
</script>

<style scoped>
</style>