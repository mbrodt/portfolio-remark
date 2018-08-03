<template>
 <div class="w-full max-w-xs mx-auto">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
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
      <button @click="login" class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="button">
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
      email: "",
      password: "",
    }
  },
  methods: {
    async login() {
      console.log("Logging in")
            try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        })
                console.log(response)
      } catch (err) {
        // this.error = err.response
        console.log("error!!")
      }
    }
  }
}
</script>
