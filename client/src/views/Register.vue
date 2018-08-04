<template>
  <div>
    <h1 class="mb-4">Register</h1>
    <!-- <input type="text" name="name" placeholder="name" v-model="name">
    <input type="email" name="email" placeholder="email" v-model="email">
    <input type="password" name="password" placeholder="password" v-model="password">
    <input type="password" name="confirm-password" placeholder="password" v-model="confirmPassword">
    <div class="error" v-html="error"></div>
    <button @click="register">Sign up</button> -->
<!-- <test-form class="mx-auto"></test-form> -->
 
 <div class="w-full max-w-xs mx-auto">
  <form v-if="!isLoggedIn" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="register">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="name">
        Name
      </label>
      <input class="form-input" name="name" type="text" placeholder="Name" v-model="name" >
    </div>
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input class="form-input" name="email" type="email" placeholder="Email" v-model="email">
    </div>
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="form-input" name="password" type="password" placeholder="******************" v-model="password">
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="confirmPassword">
        Confirm password
      </label>
      <input class="form-input" name="confirmPassword" type="password" v-model="confirmPassword" placeholder="******************">
      <!-- <p class="text-red text-xs italic">Please choose a password.</p> -->
    </div>
    <div class="flex items-center justify-between mt-8">
      <button class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      :class="{ 'opacity-50': working}"
      type="submit">
        Register
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-indigo hover:text-indigo-dark" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div>
    <!-- <div v-if="errors.length > 0">
    <li v-for="error in errors" :key="error.msg">
      {{error.msg}}
    </li>
    </div> -->
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
      confirmPassword: '',
      errors: [],
      working: false
    }
  },
  methods: {
    async register() {
      this.working = true
      try {
        const response = await AuthenticationService.register({
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
        console.log(response)
        this.activeUser = response.data.user
        this.isLoggedIn = true
        this.errors = []
        this.$router.push('/')
      } catch (err) {
        console.log()
        // this.error = err.response
        this.$store.commit('updateErrors', err.response.data.errors)
        this.errors = err.response.data.errors
      }
      this.working = false
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>