<template>
  <div>
    <Navbar />
    <p>{{ $config.apiURL }}</p>
  </div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  mounted() {
    console.log(this.$config.apiURL)// ローカルでは3000になってます
  }
}
</script>
