<template>
  <div>
    <!-- <add-portfolio v-if="displayForm"> -->
    <!-- <form class="w-full max-w-sm" slot-scope={addPortfolio,error}> -->
    <form class="w-full max-w-sm mx-auto my-8" v-if="displayForm">
      <div class="flex items-center border-b border-b-2 border-indigo py-2">
        <input class="appearance-none bg-transparent border w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Portfolio URL" v-model="url" v-bind:class="{'border-red': error, 'border-none': !error}">
        <button class="flex-no-shrink bg-indigo hover:bg-indigo-dark border-indigo hover:border-indigo-dark text-sm border-4 text-white py-1 px-2 rounded" type="button" @click="addPortfolio(url)">
          Add Portfolio
        </button>
      </div>
    </form>
    <div v-else>
      Your portfolio has been submitted
    </div>
    <!-- </add-portfolio> -->
    <!-- <button class="btn-primary" @click="toggleDisplayForm()">Add portfolio here!</button> -->
  </div>
</template>

<script>
// import AddPortfolio from './AddPortfolio'
import PortfolioService from '@/services/PortfolioService'
import _ from 'lodash'

export default {
  data() {
    return {
      url: '',
      displayForm: true,
      error: false
    }
  },
  watch: {
    url(newvalue) {
      if (newvalue !== '') {
        console.log('not empty!')
        this.error = false
      }
    }
  },
  methods: {
    toggleDisplayForm() {
      this.url = ''
      this.displayForm = false
    },
    async addPortfolio(portfolio) {
      console.log('in addportfolio')
      if (portfolio === '') {
        this.error = true
        console.log('error in url')
        // this.$store.commit('updateErrors', [{ msg: 'Please type a URL' }])
        return
      }
      try {
        const response = await PortfolioService.addPortfolio(portfolio)
        this.$root.$emit('portfolioAdded', response.data)
        this.toggleDisplayForm()
      } catch (err) {
        console.log('error', err)
      }
    }
  }
  // components: {
  //   AddPortfolio
  // }
}
</script>
