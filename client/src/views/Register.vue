<template>
 <div class="w-full max-w-xs mx-auto">
    <h1 class="mb-4">Register</h1>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="register">
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
      <button class="btn-primary" 

      type="submit">
        Register
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-indigo hover:text-indigo-dark" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
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
      confirmPassword: ''
    }
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        })
        console.log(response)
        this.updateStore(response.data.user)
      } catch (err) {
        this.$store.commit('updateErrors', err.response.data.errors)
      }
    },
    updateStore(user) {
      this.$store.commit('login', user)
      this.$store.commit('updateErrors', [])
      this.$router.push('/')
    }
  }
}
</script>