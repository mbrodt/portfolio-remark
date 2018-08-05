<template>
  <div>
        <button @click="getPortfolios" class="btn-primary py-4 bg-red">Get all portfolios</button>
    <ul class="list-reset">
      <li class="bg-white w-1/2 mx-auto my-4 shadow-lg flex justify-between p-8 rounded " v-for="portfolio in portfolios" :key="portfolio.name">
      <div class="w-2/3 flex flex-col">
        <p class="text-left text-sm text-grey-darkest">August 5, 2018</p>
        <a class="text-left  text-2xl font-bold no-underline text-grey-darkest" :href="portfolio.url">{{ portfolioName(portfolio.url)}}</a>
      </div>
        <div class="flex items-center w-1/3">
        <p class="text-xl text-grey-darkest">{{ portfolio.likes}}</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path class="heroicon-ui" d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"/></svg>
  <a v-if="portfolio.comments.length > 0" @click="displayComments(portfolio.comments)" class="text-xl no-underline text-grey-darkest">View comments</a>
        </div>
      </li>
      
    </ul>
  </div>
</template>

<script>
import PortfolioService from '@/services/PortfolioService'
export default {
  data() {
    return {
      portfolios: []
    }
  },
  methods: {
    async getPortfolios() {
      console.log('getting portfolios in client')
      try {
        const response = await PortfolioService.getPortfolios()
        console.log(response)
        this.portfolios = response.data.portfolios
      } catch (err) {
        this.$store.commit('updateErrors', err.response.data.errors)
      }
    },
    portfolioName(url) {
      //Remove https or http before displaying the name
      return url.replace(/(^\w+:|^)\/\//, '')
    },
    displayComments(comments) {
      // TODO: display the comments in the UI
      comments.forEach(comment => {
        console.log(
          `im a comment: ${comment.content} and i have ${comment.likes} likes`
        )
      })
    }
  }
}
</script>

<style scoped>
</style>