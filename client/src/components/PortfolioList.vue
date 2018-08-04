<template>
  <div>
    <ul class="list-reset">
      <li class="bg-white border border-indigo w-1/2 mx-auto my-4" v-for="portfolio in portfolios" :key="portfolio.name">
        <p>{{ portfolio.name}}</p>
        <a>{{ portfolio.link}}</a>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolios: [
        {
          name: "Mads' Awesome Portfolio",
          link: 'https://google.com'
        },
        {
          name: 'Best portfolio',
          link: 'https://google.com'
        },
        {
          name: 'Crazy sick portfolio',
          link: 'https://google.com'
        },
        {
          name: 'Test portfolio',
          link: 'https://google.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>