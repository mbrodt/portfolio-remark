<template>
  <div class="home">
    <h1 v-if="this.$store.state.isLoggedIn">Welcome, {{this.$store.state.activeUser.name}}</h1>
    <h1 v-else>Currently browsing all portfolios</h1>
    <add-portfolio-form></add-portfolio-form>
    <portfolio-list></portfolio-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PortfolioList from '@/components/PortfolioList'
import AddPortfolioForm from '@/components/AddPortfolioForm'

export default {
  name: 'home',
  components: {
    PortfolioList, AddPortfolioForm
  },
  data() {
    return {
      portfolios: []
    }
  }
}
</script>
