<template>
  <div class="about">
    <h1>This is an about page</h1>
      <add-portfolio v-if="displayForm">
    <form class="w-full max-w-sm" slot-scope={addPortfolio}>
  <div class="flex items-center border-b border-b-2 border-teal py-2">
    <input class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Portfolio URL" v-model="url">
    <button class="flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded" type="button"  @click="addPortfolio(url)">
      Add Portfolio
    </button>
    <button class="flex-no-shrink border-transparent border-4 text-teal hover:text-teal-darker text-sm py-1 px-2 rounded" type="button" @click="toggleDisplayForm()">
      Cancel
    </button>
  </div>
</form>
      </add-portfolio>
    <button class="btn-primary" @click="toggleDisplayForm()">Add portfolio here!</button>
  </div>
</template>

<script>
import AddPortfolio from '@/components/AddPortfolio'
export default {
  data() {
    return {
      url: 'slotscope.com',
      displayForm: false
    }
  },
  methods: {
    toggleDisplayForm() {
      this.displayForm = !this.displayForm
    }
  },
  components: {
    AddPortfolio
  }
}
</script>
