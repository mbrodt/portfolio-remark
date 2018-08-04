<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  methods: {
    async logout() {
      console.log('Logging out from component')
      try {
        const response = await AuthenticationService.logout()
        this.$store.commit('logout')
      } catch (err) {
        console.log('error! couldnt log out!', { err })
      }
      this.$router.push('/login')
    }
  },
  render() {
    return this.$scopedSlots.default({
      logout: this.logout
    })
  }
}
</script>

<style scoped>
</style>