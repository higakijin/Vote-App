<template>
  <div class='relative'>
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1">
        <svg class="w-10 h-10" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
          <style type="text/css">
            .st0{fill:#4B4B4B;}
          </style>
          <g>
            <path class="st0" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
              c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
              l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z" style="fill: rgb(75, 75, 75);"></path>
          </g>
        </svg>
      </div>
      <div class="col-span-7 xl:col-span-5 lg:col-span-5 xl:pt-36 lg:pt-36 pt-24 mx-5 pb-12">
        <div class="grid grid-cols-7">
          <div class="col-span-1 flex justify-center">
            <svg class="w-10 h-10 my-auto" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
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
            <p class="my-auto">{{ total_votes }}</p>
          </div>
          <div class="col-span-6 lg:col-span-5 xl:col-span-5">
            <h1 class="text-2xl font-medium font-medium mb-3 break-words px-3">{{ post.topic }}</h1>
          </div>
          <div class="col-span-7 lg:col-span-1 xl:col-span-1 my-auto flex justify-end gap-x-5">
            <div v-show="isMyPost" class="inline-block cursor-pointer" @click="deletePost(post)">
              <svg class="w-7 h-7 ml-auto" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                <style type="text/css">
                  .st0{fill:#4B4B4B;}
                </style>
                <g>
                  <path class="st0" d="M439.114,69.747c0,0,2.977,2.1-43.339-11.966c-41.52-12.604-80.795-15.309-80.795-15.309l-2.722-19.297
                    C310.387,9.857,299.484,0,286.642,0h-30.651h-30.651c-12.825,0-23.729,9.857-25.616,23.175l-2.722,19.297
                    c0,0-39.258,2.705-80.778,15.309C69.891,71.848,72.868,69.747,72.868,69.747c-10.324,2.849-17.536,12.655-17.536,23.864v16.695
                    h200.66h200.677V93.611C456.669,82.402,449.456,72.596,439.114,69.747z" style="fill: rgb(223, 86, 86);"></path>
                  <path class="st0" d="M88.593,464.731C90.957,491.486,113.367,512,140.234,512h231.524c26.857,0,49.276-20.514,51.64-47.269
                    l25.642-327.21H62.952L88.593,464.731z M342.016,209.904c0.51-8.402,7.731-14.807,16.134-14.296
                    c8.402,0.51,14.798,7.731,14.296,16.134l-14.492,239.493c-0.51,8.402-7.731,14.798-16.133,14.288
                    c-8.403-0.51-14.806-7.722-14.296-16.125L342.016,209.904z M240.751,210.823c0-8.42,6.821-15.241,15.24-15.241
                    c8.42,0,15.24,6.821,15.24,15.241v239.492c0,8.42-6.821,15.24-15.24,15.24c-8.42,0-15.24-6.821-15.24-15.24V210.823z
                    M153.833,195.608c8.403-0.51,15.624,5.894,16.134,14.296l14.509,239.492c0.51,8.403-5.894,15.615-14.296,16.125
                    c-8.403,0.51-15.624-5.886-16.134-14.288l-14.509-239.493C139.026,203.339,145.43,196.118,153.833,195.608z" style="fill: rgb(223, 86, 86);"></path>
                </g>
              </svg>
            </div>
            <div v-show="already_liked(post.likes)" @click="unlike(post)" class="inline-blok flex cursor-pointer">
              <svg class="h-7 w-7" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
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
            <div v-show="!already_liked(post.likes)"  @click="like(post)" class="inline-block flex cursor-pointer">
              <svg class="h-7 w-7" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                <style type="text/css">
                  .st0{fill:#4B4B4B;}
                </style>
                <g>
                  <path class="st0" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
                    c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
                    l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z" style="fill: rgb(75, 75, 75);"></path>
                </g>
              </svg>
              <p class="ml-1 my-auto">{{ post.likes_count }}</p>
            </div>
          </div>
        </div>
        <rateBar :agree_rate="$agree_rate(post.agree_count, post.disagree_count)" :disagree_rate="$disagree_rate(post.agree_count, post.disagree_count)"/>
        <div class="flex items-center mt-2">
          <p class="font-semibold title-font text-gray-700mr-3">by {{ post.name }}</p>
          <p class="mt-1 text-gray-500 text-sm ml-auto">{{ post.created_at | moment }}</p>
        </div>
        <div v-show="$isLogin()" class="mt-5 flex w-full gap-x-4 mb-20">
          <button @click='$refs.child.showModal(post, false)' class="w-11/12 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white" :class="$already_posted(post.votes, false) ? 'text-white bg-blue-500': 'text-blue-500'">No</button>
          <button @click='$refs.child.showModal(post, true)' class="w-11/12 border border-red-500 rounded-md hover:bg-red-500 hover:text-white" :class="$already_posted(post.votes, true) ? 'text-white bg-red-500': 'text-red-500'">Yes</button>
        </div>
        <div v-for="created_comment in post.comments" :key="created_comment.id">
          <div v-if="created_comment.is_agree">
            <div class="mt-5 flex justify-end">
              <div class="flex justify-end">
                <div class="balloon-right">
                  {{ created_comment.body }}
                </div>
              </div>
              <div class="flex">
                <p class="my-auto pl-5 text-sm">{{ created_comment.name }}</p>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="mt-5 flex">
              <div class="flex">
                <p class="my-auto pr-5 text-sm">{{ created_comment.name }}</p>
              </div>
              <div class="flex">
                <div class="balloon-left">
                  {{ created_comment.body }}
                </div>
              </div>
            </div>
          </div>

        </div>
        <div v-show="!$isLogin()">
          <p class="pt-10 text-center">投票・コメントをするにはまず<nuxt-link to="/users/auth" class="underline text-blue-700">ログイン</nuxt-link>しましょう！</p>
        </div>
        <div v-show="$isLogin()">
          <div v-show="$already_posted(post.votes, false) || $already_posted(post.votes, true)">
            <form @submit.prevent="createComment(post)" class="mt-20 mb-40 w-full">
              <div class="flex items-center border-b border-green-500 p-2">
                <input required v-model="comment" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="コメントを入力" aria-label="Full name">
                <button class="ml-auto flex-shrink-0 text-green-500 hover:bg-green-500 hover:text-white text-sm border border-green-500 py-1 px-2 rounded">
                  投稿
                </button>
              </div>
            </form>
          </div>
          <div v-show="!$already_posted(post.votes, false) && !$already_posted(post.votes, true)">
            <p class="pt-10 text-center">コメントをするにはまず投票をしましょう！</p>
          </div>
        </div>

      </div>
      
      <div class="col-span-7 xl:col-span-1 lg:col-span-1">
        <createForm />
      </div>
      <div class="col-span-7 xl:col-span-2 lg:col-span-2">
        <confirmModal :post="post" ref="child" @vote="vote" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import rateBar from '../../components/rateBar.vue'
import createForm from '../../components/createForm.vue'
import confirmModal from '../../components/confirmModal.vue'

export default {
  components: { Navbar, createForm, rateBar, confirmModal },

  async asyncData(context) {
    try {
      const res = await context.$axios.$get(`/api/posts/${context.params.id}`)
      return {
        post: res,
        total_votes: res.agree_count + res.disagree_count
      }
    } catch {
      console.log(error)
    }
  },

  data() {
    return {
      comment: '',
      isMyPost: false
    }
  },

  methods: {
    async getPost() {
      try {
        const res = await this.$axios.$get(`/api/posts/${this.$route.params.id}`)
        if (!res) {
          new Error('メッセージを取得できませんでした。')
        }
        this.post = res
        this.total_votes = this.post.agree_count + this.post.disagree_count
      } catch (error) {
        console.log(error)
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
        this.getPost()
      } catch(error) {
        console.log(error)
      }
    },
    
    async createComment(post) {
      const res = await this.$axios.$post(`/api/posts/${post.id}/comments`, {
        uid: window.localStorage.getItem('uid'),
        "access-token": window.localStorage.getItem('access-token'),
        client: window.localStorage.getItem('client'),
        post: {
          id: post.id,
        },
        comment: {
          body: this.comment,
        }
      })
      this.getPost()
      this.comment = ""
      // ページ最下部へスクロール
      const elm = document.documentElement
      const bottom = elm.scrollHeight - elm.clientHeight
      window.scroll(0, bottom)
    },

    async deletePost(post) {
      try {
        const res = await this.$axios.$delete(`/api/posts/${post.id}`, {
          data: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client'),
            post: {id: post.id},
          }
        })
      } catch (error) {
        console.log(error)
      }
      this.$router.push('/')
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
          this.getPost()
        }
      } catch (error) {
        console.log(error)
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
        this.getPost()
      } catch (error) {
        console.log(error)
      }
    },
  },

  created() {
    if (!this.post.is_published) {
      this.$router.push('/')
    } 
  },

  mounted() {
    if (window.localStorage.getItem('uid') === this.post.uid) {
      this.isMyPost = true
    }
  }
}
</script>

<style scoped>
.balloon-right, .balloon-left{
  z-index: -1;
  position: relative;
  padding: 20px;
  border-radius: 0.375rem;
}
.balloon-right {
  --tw-bg-opacity: 1;
  background-color: rgba(252, 165, 165, var(--tw-bg-opacity));
}
.balloon-left {
  --tw-bg-opacity: 1;
  background-color: rgba(191, 219, 254, var(--tw-bg-opacity));
}
.balloon-right::before, .balloon-left::before{
  content: '';
  position: absolute;
  display: block;
  height: 0;
  
  top: 30%;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.balloon-right::before{
  right: -15px;
  --tw-bg-opacity: 1;
  border-left: 15px solid rgba(252, 165, 165, var(--tw-bg-opacity));
}
.balloon-left::before{
  left: -15px;
  --tw-bg-opacity: 1;
  border-right: 15px solid rgba(191, 219, 254, var(--tw-bg-opacity));
}

</style>