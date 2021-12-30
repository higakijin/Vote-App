<template>
  <div class="relative">
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1"></div>
      <div class="col-span-7 xl:col-span-4 lg:col-span-4 pt-28 mx-5 pb-12">
        <h1 class="my-8"><span class="text-4xl font-mono">ランキング</span></h1>
        <div class="text-red-500">{{ error }}</div>
        <section class="text-gray-600 body-font overflow-hidden">
          <Lists :posts="posts" @getPosts="getPosts()" />
        </section>

      </div>
      <div class="col-span-7 xl:col-span-2 lg:col-span-2">
        <createForm />
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import createForm from '../../components/createForm.vue'
import Lists from '../../components/posts/Lists.vue'

export default {
  components: { Navbar, createForm, Lists },

  async asyncData (context) {
    try {
      const res = await context.$axios.$get('/api/posts')
      return {
        posts: res
              .filter((v) => v.is_published)
              .sort((a, b) => { return (a.likes_count < b.likes_count ? 1 : -1) }),
        error: null
      }
    } catch(error) {
      return {
        posts: [],
        error: "投稿の取得に失敗しました。" + error
      }
    }
  },

  methods: {
    async getPosts() {
      try {
        const res = await this.$axios.$get('/api/posts')
        if (!res) {
          new Error('メッセージを取得できませんでした。')
        }
        this.posts = res
                    .filter((v) => v.is_published)
                    .sort(function(a, b){ return (a.likes_count < b.likes_count ? 1 : -1) })
      } catch (error) {
        this.posts = []
        this.error = "投稿の取得に失敗しました。" + error
      }
    }
  }

}
</script>
