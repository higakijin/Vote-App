<template>
  <div class="relative">
    <Navbar />

    <section class="text-gray-600 body-font">
      <div class="container lg:px-5 xl:px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-5/6 lg:mx-auto xl:mx-auto mx-1">

          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <!-- <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div> -->
              <div class="flex flex-col">
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg text-center">{{ user.name }}</h2>
                <p class="text-sm text-gray-400 text-right mb-2 mr-4">{{ user.created_at | moment2 }}~</p>
                <div v-show="isMyUser()" class="flex mb-4">
                  <nuxt-link :to='`${user.id}/edit`' class="ml-auto px-3 py-1 text-green-500 border border-green-500 my-auto rounded-md hover:bg-green-500 hover:text-white">
                    ユーザー設定
                  </nuxt-link>
                </div>
                <p class="text-center text-gray-500 text-sm mx-2">{{ user.introduction }}</p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <div class="leading-relaxed text-lg mb-4">
                <div v-if="posts[0]">
                  <Lists :posts="posts" @getPosts="getPosts()" />
                </div>
                <div v-else>
                  <p class="text-gray-500 text-md">投稿はありません。</p>
                </div>
              </div>
            </div>
            <createForm />
          </div>
        </div>
      </div>
    </section>
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
