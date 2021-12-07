<template>
  <div class='relative'>
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1"></div>
      <div class="col-span-7 xl:col-span-4 lg:col-span-4">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 pt-32 pb-12 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div v-for='post in posts' :key='post.id'>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class='w-full'>
                    <div class="md:w-64 md:mb-0 flex flex-row">
                      <p class="font-semibold title-font text-gray-700">{{ post.name }}</p>
                    </div>
                    <div class="md:flex-grow">
                      <nuxt-link :to='`/posts/${post.id}`' class='w-full'>
                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                          {{ post.topic }}
                        </h2>
                      </nuxt-link>
                      <!-- <div class="flex">
                        <div class="px-1" v-if="post.tags.length > 0">
                          <font-awesome-icon icon="tags" />
                        </div>
                        <div v-for="tag in post.tags" :key="tag.id" class="flex">
                          <nuxt-link :to='`/posts/tags/${tag.name}`' class="hover:underline">
                            {{ tag.name }}
                          </nuxt-link>
                          <p v-if="tag.name !== post.tags.slice(-1)[0].name" class="mr-2">,</p>
                        </div>
                      </div> -->

                      <div v-if="isLogin" class="flex">
                        <button class="hover:bg-blue-600 hover:text-white px-2 rounded-full text-blue-500 border border-blue-500">No</button>
                        <button class="hover:bg-red-500 ml-auto px-2 hover:text-white rounded-full text-red-500 border border-red-500">Yes</button>
                      </div>
                      <nuxt-link :to='`/posts/${post.id}`'>
                        <rateBar :agree_rate="agree_rate(post.agree_count, post.disagree_count)" :disagree_rate="disagree_rate(post.agree_count, post.disagree_count)"/>

                        <div class="flex items-center mt-2">
                          <p class="mt-1 text-gray-500 text-sm">{{ post.created_at | moment }}</p>
                          <p class="ml-auto text-green-500">Show More</p>
                          <svg class="w-4 h-4 ml-2 text-green-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </nuxt-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-span-7 xl:col-span-2 lg:col-span-2">
        <createForm />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import rateBar from '../components/rateBar.vue'
import createForm from '../components/createForm.vue'

export default {
  components: { Navbar, createForm, rateBar },
  data() {
    return {
      showCreateForm: false,
      posts: [],
      isLogin: false
    }
  },
  methods: {
    async getPosts() {
      try {
        const res = await this.$axios.$get('/api/posts')
        if (!res) {
          new Error('メッセージを取得できませんでした。')
        }
        this.posts = res.filter((v) => v.is_published).reverse()
      } catch(error) {
        console.log(error);
      }
    },
    loginJudge() {
      if (window.localStorage.getItem('access-token') && window.localStorage.getItem('client') && window.localStorage.getItem('uid') ) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    },
    agree_rate(agree_count, disagree_count) {
      let agree_rate = agree_count/(agree_count + disagree_count) * 100
      if (agree_rate > 0 && agree_rate <= 1) {
        agree_rate = 1
      } else if (agree_rate < 100 && agree_rate >= 99) {
        agree_rate = 99
      } else {
        agree_rate = Math.round(agree_rate)
      }
      return agree_rate
    },
    disagree_rate(agree_count, disagree_count) {
      // let disagree_rate = disagree_count/(agree_count + disagree_count) * 100
      // return Math.round(disagree_rate)
      return 100 - this.agree_rate(agree_count, disagree_count)
    },
  },
  mounted() {
    this.getPosts()
    this.loginJudge()
  }
}
</script>