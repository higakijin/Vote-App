<template>
  <div>
    <Navbar />
    <ul>
      <li>
        {{ post }}
      </li>
    </ul>
  </div>

</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  async asyncData({$axios}) {
    const post = await $axios.$get('/api/posts')
    return { post }
  },
  mounted() {
    console.log(`${this.$config.apiURL}/api/posts`)// ローカルでは3000になってます
  },
}
</script>
