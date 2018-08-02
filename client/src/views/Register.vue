<template>
  <div>
    <h1>Register</h1>
    <input type="text" name="name" placeholder="name" v-model="name">
    <input type="email" name="email" placeholder="email" v-model="email">
    <input type="password" name="password" placeholder="password" v-model="password">
    <div class="error" v-html="error"></div>
    <button @click="register">Sign up</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          name: this.name,
          email: this.email,
          password: this.password
        })
      } catch (err) {
        this.error = err.response.data.error
      }
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>