<template>
  <div class='relative'>
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1"></div>
      <div class="col-span-7 xl:col-span-4 lg:col-span-4 pt-36 px-5 pb-12">
        <h1 class="text-3xl font-medium font-medium mb-3">{{ post.topic }}</h1>
        <rateBar :agree_rate="agree_rate" :disagree_rate="disagree_rate"/>
        <div class="flex items-center mt-2">
          <p class="font-semibold title-font text-gray-700mr-3">by {{ post.name }}</p>
          <p class="mt-1 text-gray-500 text-sm ml-auto">{{ post.created_at | moment }}</p>
        </div>
      </div>
      <div class="col-span-7 xl:col-span-2 lg:col-span-2">
        <createForm />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import rateBar from '../../components/rateBar.vue'
import createForm from '../../components/createForm.vue'

export default {
  components: { Navbar, createForm, rateBar },
  async asyncData({ $axios, params }) {
    try {
      const res = await $axios.$get(`/api/posts/${params.id}`)
      if (!res) {
        new Error('メッセージを取得できませんでした。')
      }
      let agree_rate = res.agree_count/(res.agree_count + res.disagree_count) * 100
      if (agree_rate > 0 && agree_rate <= 1 ) {
        agree_rate = 1
      } else if (agree_rate < 100 && agree_rate >= 99) {
        agree_rate = 99
      } else {
        agree_rate = Math.round(agree_rate)
      }
      let disagree_rate = 100 - agree_rate
      return {post: res, agree_rate, disagree_rate}
    } catch (error) {
      console.log(error)
    }
  },
  data() {
    return {
    }
  }
}
</script>
