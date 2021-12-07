<template>
  <div class='relative'>
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1"></div>
      <div class="col-span-7 xl:col-span-4 lg:col-span-4 pt-36 mx-5 pb-12">
        <div class="flex">
          <h1 class="text-2xl font-medium font-medium mb-3 w-11/12 break-words">{{ post.topic }}</h1>
          <div class="justify-end my-auto flex w-1/12">
            <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="height: 30px; width: 30px; opacity: 1;" xml:space="preserve">
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
            <p class="ml-1 my-auto">{{ votes_length }}</p>
          </div>
        </div>
        <rateBar :agree_rate="agree_rate" :disagree_rate="disagree_rate"/>
        <div class="flex items-center mt-2">
          <p class="font-semibold title-font text-gray-700mr-3">by {{ post.name }}</p>
          <p class="mt-1 text-gray-500 text-sm ml-auto">{{ post.created_at | moment }}</p>
        </div>
        <div v-show="$isLogin()" class="mt-5 flex w-full gap-x-4">
          <button @click="vote(post, false)" class="w-11/12 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white" :class="$already_posted(post.votes, false) ? 'text-white bg-blue-500': 'text-blue-500'">No</button>
          <button @click="vote(post, true)" class="w-11/12 border border-red-500 rounded-md hover:bg-red-500 hover:text-white" :class="$already_posted(post.votes, true) ? 'text-white bg-red-500': 'text-red-500'">Yes</button>
        </div>
      </div>
      <div class="col-span-7 xl:col-span-2 lg:col-span-2">
        <createForm />
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
  data() {
    return {
      post: '',
      agree_rate: 0,
      disagree_rate: 50,
      votes_length: 50
    }
  },
  methods: {
    async getPost() {
      try {
        const res = await this.$axios.$get(`/api/posts/${this.$route.params.id}`)
        if (!res) {
          new Error('メッセージを取得できませんでした。')
        }
        let agree_rate = res.agree_count/(res.agree_count + res.disagree_count) * 100
        if (agree_rate > 0 && agree_rate <= 1 ) {
          agree_rate = 1
        } else if (agree_rate < 100 && agree_rate >= 99) {
          agree_rate = 99
        } else {
          agree_rate = Math.round(agree_rate)
        }
        let disagree_rate = 100 - agree_rate
        this.post = res
        this.agree_rate = agree_rate
        this.disagree_rate = disagree_rate
        this.votes_length = this.post.votes.length
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
  },
  created() {
    this.getPost()
  }
}
</script>
