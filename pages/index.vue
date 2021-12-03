<template>
  <div class='relative'>
    <Navbar />
    <div class="px-20">
      <div>
        <ul>
          <li>
            {{ post }}
          </li>
        </ul>

      </div>
      <createForm />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import createForm from '../components/createForm.vue'

export default {
  components: { Navbar, createForm },
  data() {
    return {
      showCreateForm: false
    }
  },
  async asyncData({$axios}) {
    const post = await $axios.$get('/api/posts')
    return { post }
  },
  // mounted() {
  //   console.log(`${this.$config.apiURL}/api/posts`)// ローカルでは3000になってます
  // },
}
</script>
