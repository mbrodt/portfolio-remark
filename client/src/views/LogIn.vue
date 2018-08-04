<template>
 <div class="w-full max-w-xs mx-auto">
       <h1 class="mb-4">Login</h1>
  <form @submit.prevent="login" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
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
    <div class="flex items-center justify-between mt-8">
      <button class="btn-primary" 
      type="submit">
       Log In
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
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.updateStore(response.data.user)
      } catch (err) {
        let errors = [
          {
            msg: 'The email or password was incorrect.'
          }
        ]
        console.log('error!!', errors)
        this.$store.commit('updateErrors', errors)
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
