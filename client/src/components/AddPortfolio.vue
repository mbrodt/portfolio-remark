<script>
import PortfolioService from '@/services/PortfolioService'

export default {
  data() {
    return {
      error: false
    }
  },
  methods: {
    async addPortfolio(portfolio) {
      if (portfolio === '') {
        this.error = true
        // this.$store.commit('updateErrors', [{ msg: 'Please type a URL' }])
        return
      }
      console.log('Adding portfolio on client')
      console.log('portfolio', portfolio)
      try {
        const response = await PortfolioService.addPortfolio(portfolio)
      } catch (err) {}
    }
  },
  render() {
    return this.$scopedSlots.default({
      addPortfolio: this.addPortfolio,
      error: this.error
    })
  }
}
</script>