<template>
  <div>
        <div v-if="this.$store.state.errors.length > 0">
    <h3>Errors:</h3>
    <li v-for="error in this.$store.state.errors" :key="error.msg">
      {{error.msg}}
    </li>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>