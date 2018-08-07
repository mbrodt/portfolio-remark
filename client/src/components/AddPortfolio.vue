<script>
import PortfolioService from '@/services/PortfolioService'

export default {
  methods: {
    async addPortfolio(portfolio) {
      console.log('Adding portfolio on client')
      console.log('portfolio', portfolio)
      try {
        const response = await PortfolioService.addPortfolio(portfolio)
      } catch (err) {}
    }
  },
  render() {
    return this.$scopedSlots.default({
      addPortfolio: this.addPortfolio
    })
  }
}
</script>