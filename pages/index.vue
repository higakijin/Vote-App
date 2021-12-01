<template>
  <div>
    <Navbar />
  </div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  mounted() {
    console.log(`${this.$config.apiURL}/api/posts`)// ローカルでは3000になってます
  }
}
</script>
