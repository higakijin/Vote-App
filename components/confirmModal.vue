<template>
  <div v-show="confirmModal" @click.self='confirmModal = !confirmModal' class="fixed flex justify-center items-center bg-gray-500 bg-opacity-75 antialiasedv top-0 left-0 absolute w-full h-full min-h-screen">
    <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl fixed top-40">
      <div
        class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
      >
        <p class="font-semibold text-red-500">Warning!</p>
        <div @click='confirmModal = !confirmModal' class="cursor-pointer">
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
      <div class="flex flex-col px-6 py-5 bg-gray-50 text-red-500">
        <p>このまま実行すると<i class="font-bold">今までのコメントが消えます</i>。</p>
        <p>実行しますか？</p>
      </div>
      <div
        class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
      >
        <p class="font-semibold text-gray-600 cursor-pointer text-red-500" @click='confirmModal = !confirmModal'>Cancel</p>
        <button @click="$emit('vote', post, opinion); confirmModal=false" class="px-4 py-2 border border-gray-200 rounded">
          Done!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  data() {
    return {
      opinion: null,
      confirmModal: false,
    }
  },
  methods: {
    showModal(post, opinion) {
      // 2回目以降の投票の場合
      // 意見を変えるとコメントも消えるので警告を出す
      if (this.$already_posted(post.votes, false) || this.$already_posted(post.votes, true)) {
        this.confirmModal = true
        this.opinion = opinion
      } else {
        // 初めての投票
        // ダイアログを表示させず、そのまま投票させる。
        this.$emit('vote', post, opinion)
      }
    },
  }
}
</script>