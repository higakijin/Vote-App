<template>
  <div class="container px-5 pb-12 mx-auto">
    <div class="text-red-500 my-5 text-lg">
      {{ error}}
    </div>
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div v-for='post in posts' :key='post.id'>
        <div class="py-8 flex flex-wrap md:flex-nowrap">
          <div class='w-full'>
            <div class="md:mb-0 flex flex-row">
              <p class="font-semibold title-font text-gray-700"><nuxt-link :to='`/users/${post.user_id}`'>{{ post.name }}</nuxt-link></p>
              <div class="ml-auto flex gap-x-4">
                <div class="w-8 h-8 my-auto flex">
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
                  <p class="ml-1 my-auto">{{ post.agree_count + post.disagree_count }}</p>
                </div>

                <div v-show="!already_liked(post.likes)" @click="like(post)" class="w-8 h-8 my-auto flex cursor-pointer">
                  <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                    <style type="text/css">
                      .st0{fill:#4B4B4B;}
                    </style>
                    <g>
                      <path class="st0" d="M373.597,29.736c-0.938,0-1.856,0.009-2.795,0.03C313.675,30.864,276.726,59.028,256,93.182
                        c-20.726-34.154-57.675-62.318-114.802-63.416c-0.928-0.021-1.866-0.03-2.796-0.03c-38.566,0-73.559,15.465-98.518,43.538
                        C13.797,102.626,0,143.789,0,192.309c0,95.273,76.404,153.378,150.284,209.566c28.513,21.684,57.975,44.098,83.483,68.688
                        l1.138,1.547c5.062,6.24,12.419,9.904,20.296,10.134l0.8,0.02l0.838-0.02c7.847-0.24,15.186-3.894,20.247-10.114l1.158-1.578
                        c25.498-24.59,54.97-47.003,83.473-68.678C435.596,345.687,512,287.583,512,192.309C512,96.586,455.083,29.736,373.597,29.736z
                        M371.391,357.748c-37.12,28.952-78.172,57.866-113.654,92.099c-0.689,0.668-1.248,1.238-1.747,1.777
                        c-0.519-0.549-1.018-1.088-1.726-1.777c-47.303-45.615-104.52-81.895-149.116-121.202c-22.313-19.618-41.412-39.904-54.79-62.088
                        c-13.378-22.204-21.184-46.164-21.215-74.248c0.02-44.228,12.81-77.493,32.528-99.677c19.757-22.164,46.573-33.705,76.733-33.764
                        l2.237,0.03c33.775,0.708,57.835,12.67,75.017,29.681c17.132,17.022,27.165,39.556,30.77,60.99
                        c0.788,4.682,4.821,8.097,9.574,8.097c4.752,0,8.785-3.414,9.574-8.097c3.604-21.434,13.638-43.967,30.77-60.99
                        c17.181-17.012,41.242-28.973,75.017-29.681l2.236-0.03c30.161,0.059,56.976,11.6,76.735,33.764
                        c19.717,22.184,32.507,55.449,32.526,99.677c-0.03,28.084-7.837,52.044-21.215,74.248
                        C441.605,299.833,408.54,328.815,371.391,357.748z" style="fill: rgb(75, 75, 75);"></path>
                    </g>
                  </svg>
                  <p class="ml-1 my-auto">{{ post.likes_count }}</p>
                </div>
                <div v-show="already_liked(post.likes)" @click="unlike(post)" class="w-8 h-8 my-auto flex cursor-pointer">
                  <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                    <style type="text/css">
                      .st0{fill:#4B4B4B;}
                    </style>
                    <g>
                      <path class="st0" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
                        c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
                        l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z" style="fill: rgb(223, 86, 86);"></path>
                    </g>
                  </svg>
                  <p class="ml-1 my-auto text-red-500">{{ post.likes_count }}</p>
                </div>

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
                <button @click="$refs.child.showModal(post, false); confirm_post=post" class="hover:bg-blue-700 hover:text-white px-2 rounded-full border border-blue-500" :class="$already_posted(post.votes, false) ? 'text-white bg-blue-500': 'text-blue-500'">No</button>
                <button @click="$refs.child.showModal(post, true); confirm_post=post" class="hover:bg-red-700 ml-auto px-2 hover:text-white rounded-full border border-red-500" :class="$already_posted(post.votes, true) ? 'text-white bg-red-500': 'text-red-500'">Yes</button>
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
    <confirmModal ref="child" :post="confirm_post" @vote="vote" />
  </div>
</template>

<script>
import confirmModal from '../confirmModal.vue'

export default {
  props: ["posts"],
  components: { confirmModal },

  data() {
    return {
      confirm_post: null,
      error: null
    }
  },

  methods: {
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
        this.$emit("getPosts")
      } catch(error) {
        this.error = "投票に失敗しました。"
        window.scrollTo({ top: 0, behavior: 'smooth'})
      }
    },

    async like(post) {
      try {
        if (!this.$isLogin()) {
          this.$router.push('/users/auth') 
        } else {
          const res = await this.$axios.$post(`/api/posts/${post.id}/post_likes`, {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client'),
            post: {
              id: post.id
            }
          })
          this.$emit("getPosts")
        }
      } catch (error) {
        this.error = "いいねできませんでした。"
        window.scrollTo({ top: 0, behavior: 'smooth'})
      }
    },

    async unlike(post) {
      try {
        const res = await this.$axios.$delete(`/api/posts/${post.id}/post_likes`, {
          data: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client'),
            post: {
              id: post.id
            }
          }
        })
        this.$emit("getPosts")
      } catch (error) {
        this.error = "いいねを解除できませんでした。"
        window.scrollTo({ top: 0, behavior: 'smooth'})
      }
    },

    already_liked(likes) {
      if (process.browser && likes) {
        let judge = null
        likes.some((e) => {
          if (e.uid === window.localStorage.getItem('uid')) {
            judge = true
            return true // someの処理を終わらせる
          } else {
            judge = false
          }
        })
        return judge
      }
    }
  }
}
</script>
