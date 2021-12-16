<template>
  <div class="relative">
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1"></div>
      <div class="col-span-7 xl:col-span-5 lg:col-span-5 xl:pt-40 lg:pt-40 pt-20 mx-5 pb-12">
        <div class="w-full">
          <p class="text-red-500 my-2">{{ error }}</p>
          <h1 class="mb-4 text-3xl font-mono">ユーザー情報を編集</h1>
          <form @submit.prevent="updateUser()" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-max">
            <div class="mb-8">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
              </label>
              <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" required>
            </div>
            <div class="mb-8">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input v-model="email" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" required>
            </div>
            <div class="mb-8">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="introduction">
                Introduction
              </label>
              <textarea v-model="introduction" rows="10" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="introduction" type="text" placeholder="Introduction"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto" type="submit">
                保存
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="col-span-7 xl:col-span-1 lg:col-span-1 ml-16">
        <createForm />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../../components/Navbar.vue'
import createForm from '../../../components/createForm.vue'

export default {
  components: { Navbar, createForm },

  async asyncData (context) {
    try {
      const res = await context.$axios.$get(`/api/users/${Number(context.params.id)}`)
      return {
        user: res,
        name: res.name,
        email: res.uid,
        introduction: res.introduction,
        error: null
      }
    } catch(error) {
      return {
        user: [],
        name: null,
        email: null,
        introduction: null,
        error: "サーバーとの接続に失敗しました。" + error
      }
    }
  },

  methods: {
    async updateUser() {
      try {
        const res = await this.$axios.$put(`/api/users/${Number(this.$route.params.id)}`, {
          uid: window.localStorage.getItem('uid'),
          "access-token": window.localStorage.getItem('access-token'),
          client: window.localStorage.getItem('client'),
          user: {
            id: Number(this.$route.params.id),
            name: this.name,
            email: this.email,
            introduction: this.introduction
          }
        })
        this.$router.push(`/users/${Number(this.$route.params.id)}`)
      } catch (error) {
        this.error = "ユーザー情報の更新に失敗しました。"
      }
    }
  },

  mounted() {
    if (this.email !== window.localStorage.getItem('uid')) {
      this.$router.push(`/users/${Number(this.$route.params.id)}`)
    }
  }
}
</script>