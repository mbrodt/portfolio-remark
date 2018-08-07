import Api from '@/services/Api'

export default {
  getPortfolios() {
    return Api().get('portfolios')
  },
  addPortfolio(url) {
    return Api().post('add', { url })
  }
}
