<template>
  <div class='relative'>
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1">
      </div>
      <div class="col-span-7 xl:col-span-4 lg:col-span-4">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 pt-32 pb-12 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div v-for='post in posts' :key='post.id'>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class='w-full'>
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span class="font-semibold title-font text-gray-700">{{ post.name }}</span>
                      <span class="mt-1 text-gray-500 text-sm">{{ post.created_at | moment }}に投稿</span>
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
                      <nuxt-link :to='`/posts/${post.id}`' class="text-green-500 inline-flex items-center mt-4 w-full">
                        Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
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
// import moment from 'moment'
import createForm from '../components/createForm.vue'

export default {
  components: { Navbar, createForm },
  data() {
    return {
      showCreateForm: false,
      posts: []
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
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>
