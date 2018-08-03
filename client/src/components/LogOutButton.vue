<template>
<div class="w-full max-w-xs mx-auto">
            <button v-if="isLoggedIn" class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="button" @click="logout">
        Log Out
      </button>
</div>
</template>

<script>
export default {
  props: ['isLoggedIn'],
  // data() {
  //   return {
  //     isLoggedIn: true
  //   }
  // },
  methods: {
    async logout() {
      console.log('Logging out...')
    }
  }
}
</script>

<style scoped>
</style>