<template>
  <div class="relative">
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1"></div>
      <div class="col-span-7 xl:col-span-4 lg:col-span-4 pt-32 mx-5 pb-12">
        <h1><i class="font-bold text-4xl">{{ user.name }}</i><span class="text-xl ml-2">の投稿一覧</span></h1>
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
      const res = await context.$axios.$get(`/api/users/${Number(context.params.id)}`)
      return {
        user: res,
        posts: res.posts
                  .filter((v) => v.is_published)
                  .sort((a, b) => { return (a.created_at < b.created_at ? 1 : -1) })
      }
    } catch(error) {
      console.log(error)
    }
  },

  methods: {
    async getPosts() {
      try {
        const res = await this.$axios.$get(`/api/users/${Number(this.$route.params.id)}`)
        if (!res) {
          new Error('メッセージを取得できませんでした。')
        }
        this.posts = res.posts
                    .filter((v) => v.is_published)
                    .sort(function(a, b){ return (a.created_at < b.created_at ? 1 : -1) })
      } catch(error) {
        console.log(error);
      }
    }
  }

}
</script>
