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
                    <div class="md:mb-0 flex flex-row">
                      <p class="font-semibold title-font text-gray-700">{{ post.name }}</p>
                      <div class="ml-auto flex">
                        <div class="w-5 h-5 my-auto">
                          <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="opacity: 1;" xml:space="preserve">
                            <style type="text/css">
                              .st0{fill:#4B4B4B;}
                            </style>
                            <g>
                              <polygon class="st0" points="179.754,130.165 163.414,154.427 348.602,154.427 332.246,130.165 297.75,130.165 297.75,0 214.25,0 
                                214.25,130.165 	" style="fill: rgba(0, 0, 0, 0.73);"></polygon>
                              <path class="st0" d="M467.42,179.39l-78.738-98.631c-2.518-3.152-6.337-5.001-10.362-5.001h-66.663v26.557h60.274l62.072,77.769
                                H77.997l62.089-77.769h60.257V75.758h-66.646c-4.042,0-7.861,1.85-10.379,5.001L44.58,179.39c-1.884,2.356-2.912,5.267-2.912,8.273
                                v311.062c0,3.494,1.422,6.911,3.905,9.395c2.467,2.466,5.875,3.88,9.386,3.88h402.098c3.494,0,6.92-1.414,9.37-3.88
                                c2.484-2.484,3.905-5.901,3.905-9.395V187.663C470.332,184.657,469.304,181.746,467.42,179.39z M256.008,226.21
                                c4.145,0,7.502-3.375,7.502-7.519v-5.481c1.986,0.908,3.802,2.124,5.326,3.657c3.306,3.297,5.327,7.81,5.327,12.846v15.33h-36.329
                                v-15.33c0-5.036,2.021-9.548,5.328-12.846c1.524-1.533,3.339-2.749,5.326-3.657v5.481
                                C248.489,222.835,251.846,226.21,256.008,226.21z M263.939,308.082h-7.023h-1.85h-7.005l2.209-19.971
                                c-4.128-2.107-6.988-6.346-6.988-11.305c0-7.005,5.704-12.709,12.726-12.709c7.005,0,12.709,5.704,12.709,12.709
                                c0,4.959-2.86,9.198-6.988,11.305L263.939,308.082z M443.783,485.443H68.234V195.251h180.256v4.428
                                c-13.48,3.374-23.466,15.51-23.466,30.034v15.398c-8.581,0.36-15.449,7.382-15.449,16.057v56.078
                                c0,8.898,7.211,16.126,16.118,16.126h60.616c8.906,0,16.118-7.228,16.118-16.126v-56.078c0-8.675-6.868-15.698-15.449-16.057
                                v-15.398c0-14.524-9.986-26.66-23.466-30.034v-4.428h180.272V485.443z" style="fill: rgba(0, 0, 0, 0.73);"></path>
                            </g>
                          </svg>
                        </div>
                        <p class="ml-1">{{ post.votes.length }}</p>
                      </div>
                    </div>
                    <div class="md:flex-grow">
                      <nuxt-link :to='`/posts/${post.id}`' class='w-full'>
                        <h2 class="text-xl font-medium text-gray-900 title-font mb-2">
                          {{ post.topic }}
                        </h2>
                      </nuxt-link>
                    </div>
                    <div class="md:flex-grow">
                      <div v-show="$isLogin()" class="flex">
                        <button @click="$refs.child.showModal(post, false); confirm_post=post" class="hover:bg-blue-600 hover:text-white px-2 rounded-full border border-blue-500" :class="$already_posted(post.votes, false) ? 'text-white bg-blue-500': 'text-blue-500'">No</button>
                        <button @click="$refs.child.showModal(post, true); confirm_post=post" class="hover:bg-red-500 ml-auto px-2 hover:text-white rounded-full border border-red-500" :class="$already_posted(post.votes, true) ? 'text-white bg-red-500': 'text-red-500'">Yes</button>
                      </div>
                      <nuxt-link :to='`/posts/${post.id}`'>
                        <rateBar :agree_rate="$agree_rate(post.agree_count, post.disagree_count)" :disagree_rate="$disagree_rate(post.agree_count, post.disagree_count)"/>
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
        <createForm @getPosts="getPosts"/>
      </div>
      <confirmModal ref="child" :post="confirm_post" @vote="vote" />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import rateBar from '../components/rateBar.vue'
import createForm from '../components/createForm.vue'
import confirmModal from '../components/confirmModal.vue'

export default {
  components: { Navbar, createForm, rateBar, confirmModal },
  
  async asyncData(context) {
    try {
      const res = await context.$axios.$get('/api/posts')
      return { 
        posts: res
              .filter((v) => v.is_published)
              .sort(function(a, b){ return (a.created_at < b.created_at ? 1 : -1) }) 
      }
    } catch {
      console.log(error)
    }
  },
  data() {
    return {
      showCreateForm: false,
      confirm_post: null
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
                    .sort(function(a, b){ return (a.created_at < b.created_at ? 1 : -1) })
      } catch(error) {
        console.log(error);
      }
    },

    async vote(post, judge) {
      try {
        const res = await this.$axios.$post(`/api/posts/${post.id}/votes`, {
          uid: window.localStorage.getItem('uid'),
          "access-token": window.localStorage.getItem('access-token'),
          client: window.localStorage.getItem('client'),
          post: {
            id: post.id,
            is_agree: judge
          }
        })
        this.getPosts()
      } catch(error) {
        console.log(error)
      }
    }

  },
}
</script>