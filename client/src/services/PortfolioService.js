import Api from '@/services/Api'

export default {
  getPortfolios() {
    return Api().get('portfolios')
  }
}
