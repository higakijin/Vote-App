<template>
  <div class='relative'>
    <Navbar />

    <div>
      <ul>
        <li>
          {{ post }}
        </li>
      </ul>

      <button @click='showCreateForm = !showCreateForm'>
        <svg xmlns="http://www.w3.org/2000/svg" width="200.008" height="200" viewBox="0 0 200.008 200"><g transform="translate(-14.955 -264.331)"><path d="M164,264.331,33.768,394.567l50.959,50.959L214.963,315.29ZM20.59,408.165l-4.175,53.46-1.46,1.46,1.36-.1-.117,1.35,1.46-1.459,53.469-4.165Z" transform="translate(0 0)"/></g></svg>
        投稿ボタン
      </button>

      <!-- ここからcomponent -->
      <div v-show='showCreateForm' @click.self='showCreateForm = !showCreateForm' class="flex justify-center h-screen items-center bg-gray-500 bg-opacity-75 antialiased top-0 left-0 absolute w-full">
        <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
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
            <p class="mb-2 font-semibold text-gray-700">疑問を投稿（Yes/Noで答えられるように！）</p>
            <textarea
              type="text"
              name=""
              placeholder="Type message..."
              class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
              id=""
            ></textarea>
            <hr />

            <div class="flex items-center mt-5 mb-3 space-x-4">
              <input
                class="inline-flex"
                type="checkbox"
                id="check2"
                name="check2"
                checked
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
            <button class="px-4 py-2 text-white font-semibold bg-green-500 rounded">
              Done!
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  data() {
    return {
      showCreateForm: false
    }
  },
  async asyncData({$axios}) {
    const post = await $axios.$get('/api/posts')
    return { post }
  },
  // mounted() {
  //   console.log(`${this.$config.apiURL}/api/posts`)// ローカルでは3000になってます
  // },
}
</script>
