<template>
  <div id="app" class="">
    <site-navigation></site-navigation>
    <div class="container mx-auto">

    <router-view/>
    <display-errors></display-errors>
    </div>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import LogOutComponent from '@/components/LogOutComponent'
import DisplayErrors from '@/components/DisplayErrors'
import SiteNavigation from '@/components/SiteNavigation'
export default {
  components: {
    LogOutComponent,
    DisplayErrors,
    SiteNavigation
  },
  created() {
    document.body.classList.add('bg-grey-lightest')
    document.body.classList.add('font-sans')
  }
}
</script>


<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
</style>

<style>
@import './styles.css';
</style>

