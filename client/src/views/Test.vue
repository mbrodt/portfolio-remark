<template>
  <div >
    <h1>TEST PAGE</h1>
    <test-component><div class="w-full max-w-xs mx-auto">
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
      <button class="bg-indigo hover:bg-indigo-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="submit">
       Log In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-indigo hover:text-indigo-dark" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
</div></test-component>
  </div>
</template>

<script>
import TestComponent from '../components/TestComponent'
export default {
  components: {
    TestComponent
  }
}
</script>

