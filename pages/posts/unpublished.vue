<template>
  <div class='relative'>
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1"></div>
      <div class="col-span-7 xl:col-span-4 lg:col-span-4">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 pt-32 pb-12 mx-auto">
            <div v-if="!posts.length">
              <p>下書きはありません。</p>
            </div>
            <div v-else class="-my-8 divide-y-2 divide-gray-100">
              <div v-for='post in posts' :key='post.id'>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class='w-full'>
                    <div class="md:mb-0 flex flex-row">
                      <p class="font-semibold title-font text-gray-700">{{ post.name }}</p>
                    </div>
                    <div class="md:flex-grow">
                      <h2 class="text-xl font-medium text-gray-900 title-font mb-2">
                        {{ post.topic }}
                      </h2>
                      <div class="flex items-center mt-2">
                        <p class="mt-1 text-gray-500 text-sm">{{ post.created_at | moment }}</p>
                        <div class="ml-auto text-green-500 flex border border-green-500 py-1 px-3 hover:bg-green-500 hover:text-white rounded cursor-pointer">
                          <p @click="updateToPublic(post)">公開する</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-span-7 xl:col-span-2 lg:col-span-2">
        <createForm @getPosts="getPosts"/>
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
  
  async asyncData(context) {
    try {
      const res = await context.$axios.$get('/api/posts')
      return { 
        posts: res
              .filter((v) => !v.is_published )
              .sort(function(a, b){ return (a.created_at < b.created_at ? 1 : -1) }) 
      }
    } catch {
      console.log(error)
    }
  },

  data() {
    return {
      showCreateForm: false,
    }
  },

  beforeCreate() {
    if (!this.$isLogin()) {
      this.$router.push("/")
    }
  },

  mounted() {
    this.posts = this.posts.filter((v) => v.uid === window.localStorage.getItem('uid'))
  },

  methods: {
    async getPosts() {
      try {
        const res = await this.$axios.$get('/api/posts')
        if (!res) {
          new Error('メッセージを取得できませんでした。')
        }
        this.posts = res
                    .filter((v) => !v.is_published)
                    .filter((v) => v.uid === window.localStorage.getItem('uid'))
                    .sort(function(a, b){ return (a.created_at < b.created_at ? 1 : -1) })
      } catch(error) {
        console.log(error);
      }
    },

    async updateToPublic (post) {
      try {
        const res = await this.$axios.$post('/api/posts/unpublished', {
          uid: window.localStorage.getItem('uid'),
          "access-token": window.localStorage.getItem('access-token'),
          client: window.localStorage.getItem('client'),
          post: {
            id: post.id
          },
        }) 
        console.log(res)
        this.getPosts()
      } catch (error) {
        console.log(error)
      }
    }
  },
}
</script>

<style scoped>

</style>