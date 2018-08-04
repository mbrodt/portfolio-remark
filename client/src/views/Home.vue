<template>
  <div class="home">
    <h1>Welcome, {{this.$store.state.activeUser.name}}</h1>
    <button @click="addPortfolio" class="btn-primary py-4">Add Portfolio</button>
    <portfolio-list></portfolio-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PortfolioList from '@/components/PortfolioList'

export default {
  name: 'home',
  components: {
    PortfolioList
  },
  methods: {
    addPortfolio() {
      console.log('Adding portfolio')
    }
  }
}
</script>
