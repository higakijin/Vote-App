<template>
  <div class="relative">
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1"></div>
      <div class="col-span-7 xl:col-span-4 lg:col-span-4 pt-28 mx-5 pb-12">
        <div>
          <div v-if="error" class="text-red-500">
            {{ error }}
          </div>
          <div v-else class="mt-8 mb-2">
            <h1>
              <i class="font-bold text-4xl">{{ user.name }}</i><span class="text-xl ml-2">の投稿一覧</span>
            </h1>
          </div>
          <div v-show="isMyUser()" class="flex">
            <nuxt-link :to='`${user.id}/edit`' class="ml-auto px-3 py-1 text-green-500 border border-green-500 my-auto rounded-md hover:bg-green-500 hover:text-white">
              ユーザー設定
            </nuxt-link>
          </div>

        </div>
        <section class="text-gray-600 body-font overflow-hidden">
          <Lists :posts="posts" @getPosts="getPosts()" />
        </section>
      </div>
      <div class="col-span-7 xl:col-span-2 lg:col-span-2 ml-16 mb-40">
        <div class="xl:fixed lg:fixed xl:top-60 lg:top-60 w-11/12 lg:w-60 xl:w-60">
          <h2 class="text-xl font-mono">{{ user.name }}</h2>
          <p class="text-sm text-gray-400 xl:text-right lg:text-right mt-1">{{ user.created_at | moment2 }}~</p>
          <h3 class="text-gray-500 text-lg italic my-3">{{ user.introduction }}</h3>
        </div>
        <createForm />
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from '../../../components/Navbar.vue'
import createForm from '../../../components/createForm.vue'
import Lists from '../../../components/posts/Lists.vue'

export default {
  components: { Navbar, createForm, Lists },

  async asyncData (context) {
    try {
      const res = await context.$axios.$get(`/api/users/${Number(context.params.id)}`)
      return {
        user: res,
        posts: res.posts
                  .filter((v) => v.is_published)
                  .sort((a, b) => { return (a.created_at < b.created_at ? 1 : -1) }),
        error: null
      }
    } catch(error) {
      return {
        user: [],
        posts: [],
        error: "ユーザーの詳細投稿の取得に失敗しました。" + error
      }
    }
  },

  methods: {
    async getPosts() {
      try {
        const res = await this.$axios.$get(`/api/users/${Number(this.$route.params.id)}`)
        this.posts = res.posts
                    .filter((v) => v.is_published)
                    .sort(function(a, b){ return (a.created_at < b.created_at ? 1 : -1) })
      } catch(error) {
        this.error = "ユーザーの詳細投稿の取得に失敗しました。"
      }
    },

    isMyUser() {
      if (process.browser) {
        if (this.user.uid === window.localStorage.getItem('uid')) {
          return true
        } else {
          return false
        }
      }
    }
  }

}
</script>
