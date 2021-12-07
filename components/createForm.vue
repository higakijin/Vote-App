<template>
  <div v-show="isCurrentUser">
    <div>
      <button @click='showCreateForm = !showCreateForm' class="bg-green-500 p-3 rounded-full right fixed bottom-10 right-10">
        <svg xmlns="http://www.w3.org/2000/svg" style="width: 30px; height: 30px; fill: white;" viewBox="0 0 200.008 200"><g transform="translate(-14.955 -264.331)"><path d="M164,264.331,33.768,394.567l50.959,50.959L214.963,315.29ZM20.59,408.165l-4.175,53.46-1.46,1.46,1.36-.1-.117,1.35,1.46-1.459,53.469-4.165Z" transform="translate(0 0)"/></g></svg>
      </button>
    </div>
    <div>
      <div v-show='showCreateForm' @click.self='showCreateForm = !showCreateForm' class="fixed flex justify-center items-center bg-gray-500 bg-opacity-75 antialiasedv top-0 left-0 absolute w-full h-full min-h-screen">
        <form @submit.prevent="createTopic" class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl fixed top-40">
          <div
            class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
          >
            <p class="font-semibold text-gray-800">質問を投稿</p>
            <div @click="showCreateForm = !showCreateForm" class="cursor-pointer">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <div class="flex flex-col px-6 py-5 bg-gray-50">
            <p class="mb-2 font-semibold text-gray-700">疑問を投稿</p>
            <textarea
              type="text"
              name=""
              placeholder="（Yes/Noで答えられるように！）"
              class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
              id=""
              v-model="topic"
            ></textarea>
            <hr />

            <div class="flex items-center mt-5 mb-3 space-x-4">
              <input
                class="inline-flex"
                type="checkbox"
                id="check2"
                name="check2"
                v-model="isForPublic"
              />
              <label class="inline-flex font-semibold text-green-500" for="check2">
                公開する？</label
              ><br />
            </div>
            
          </div>
          <div
            class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
          >
            <p class="font-semibold text-gray-600 cursor-pointer" @click="showCreateForm = !showCreateForm">Cancel</p>
            <p class="text-red-400">{{ error }}</p>
            <button class="px-4 py-2 text-white font-semibold bg-green-500 rounded">
              Done!
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCreateForm : false,
      topic: "",
      isCurrentUser: false,
      isForPublic: false,

      error: null
    }
  },
  methods: {
    async createTopic(){
      this.error = null
      try {
        const res = await this.$axios.$post('/api/posts', {
          uid: window.localStorage.getItem('uid'),
          "access-token": window.localStorage.getItem('access-token'),
          client: window.localStorage.getItem('client'),
          post: {
            topic: this.topic,
            published: this.isForPublic
          },
        })
        if (!res) {
          new Error('投稿できませんでした')
        }
        if (!this.error) {
          if (this.$route.path === "/") {
            this.$router.go('/')  
          } else {
            this.$router.push('/')
          }
        }
        this.error = null
        return res
      } catch(error) {
        console.log(error);
        this.error = '投稿できませんでした'
      }
    }
  },
  mounted() {
    const loginJudge = () => {
      if (window.localStorage.getItem('access-token') && window.localStorage.getItem('client') && window.localStorage.getItem('uid') ) {
        this.isCurrentUser = true
      } else {
        this.isCurrentUser = false
      }
    }
    loginJudge ()
  }
}

</script>