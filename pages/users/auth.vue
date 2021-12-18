<template>
  <div>
    <div v-if="showLogin" class="loginForm">
      <section class="text-gray-600 body-font h-screen flex gap-0">
        <div class="container px-5 mx-auto flex flex-wrap items-center my-auto">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-xl text-gray-900"><i class="text-3xl font-bold mr-2">VoteApp</i>にログインしてあなたの疑問を世界中に聞いてみよう。</h1>
            <p class="leading-relaxed mt-4">
              画面上の戦いへ。いますぐ始めよう。
              <br>未登録なら<span @click="showLogin = false" class="text-blue-700 underline cursor-pointer">こちら</span>をクリック
            </p>
            <nuxt-link to="/" class="inline-block mt-4 flex">
              <svg class="bg-green-500 rounded-full h-12 w-12 items-center justify-center p-2 ml-auto" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                <style type="text/css">
                  .st0{fill:#4B4B4B;}
                </style>
                <g>
                  <polygon class="st0" points="442.531,218 344.828,120.297 256,31.469 167.172,120.297 69.438,218.047 0,287.469 39.984,327.453 
                    109.406,258.031 207.156,160.281 256,111.438 304.844,160.281 402.531,257.984 472.016,327.453 512,287.469 	" style="fill: #ffffff"></polygon>
                  <polygon class="st0" points="85.719,330.375 85.719,480.531 274.75,480.531 274.75,361.547 343.578,361.547 343.578,480.531 
                    426.281,480.531 426.281,330.328 256.016,160.063 	" style="fill: #ffffff"></polygon>
                </g>
              </svg>
            </nuxt-link>
          </div>
          <form @submit.prevent="login" class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5 font-bold">ログイン</h2>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">メールアドレス</label>
              <input type="text" required v-model="loginEmail" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">パスワード</label>
              <input type="password" required v-model="loginPassword" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4 text-red-500">
              {{ error }}
            </div>
            <button class="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">ログイン</button>
          </form>
        </div>
      </section>
    </div>

    <div v-if="!showLogin" class="signupForm">
      <section class="text-gray-600 body-font h-screen flex">
        <div class="container px-5 mx-auto flex flex-wrap items-center my-auto">
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-xl text-gray-900">ようこそ、<i class="text-3xl font-bold mr-1">VoteApp</i>へ</h1>
            <div class="leading-relaxed mt-4">
              <p>登録してあなたの疑問を解消しましょう。</p>
              <p>登録済なら<span @click="showLogin = true" class="text-blue-700 underline cursor-pointer">こちら</span>をクリック</p>
              <nuxt-link to="/" class="inline-block mt-4 flex">
                <svg class="bg-green-500 rounded-full h-12 w-12 items-center justify-center p-2 ml-auto" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                  <style type="text/css">
                    .st0{fill:#4B4B4B;}
                  </style>
                  <g>
                    <polygon class="st0" points="442.531,218 344.828,120.297 256,31.469 167.172,120.297 69.438,218.047 0,287.469 39.984,327.453 
                      109.406,258.031 207.156,160.281 256,111.438 304.844,160.281 402.531,257.984 472.016,327.453 512,287.469 	" style="fill: #ffffff"></polygon>
                    <polygon class="st0" points="85.719,330.375 85.719,480.531 274.75,480.531 274.75,361.547 343.578,361.547 343.578,480.531 
                      426.281,480.531 426.281,330.328 256.016,160.063 	" style="fill: #ffffff"></polygon>
                  </g>
                </svg>
              </nuxt-link>
            </div>
          </div>
          <form @submit.prevent="signUp" class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-5 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5 font-bold">サインアップ</h2>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">名前</label>
              <input type="text" v-model="signupName" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">メールアドレス</label>
              <input type="email" v-model="signupEmail" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">パスワード</label>
              <input type="password" v-model="signupPassword" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4">
              <label for="password_confirmation" class="leading-7 text-sm text-gray-600">パスワード（確認用）</label>
              <input type="password" v-model="signupPasswordConfirmation" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            </div>
            <div class="relative mb-4 text-red-500">
              {{ error }}
            </div>
            <button class="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">登録</button>
          </form>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
export default {

  data () {
    return {
      showLogin: true,
      loginEmail: '',
      loginPassword: '',
      signupName: '',
      signupEmail: '',
      signupPassword: '',
      signupPasswordConfirmation: '',
      error: null
    }
  },
  methods: {
    async login() {
      this.error = null
      try {
        const res = await this.$axios.post('/auth/sign_in', {
          email: this.loginEmail,
          password: this.loginPassword
        })
        if (!res) {
          throw new Error('ログインできませんでした')
        }
        if (!this.error) {
          window.localStorage.setItem('access-token', res.headers['access-token'])
          window.localStorage.setItem('client', res.headers.client)
          window.localStorage.setItem('uid', res.headers.uid)
          window.localStorage.setItem('name', res.data.data.name)
          this.$router.push("/")
        }
        return res
      } catch (error) {
        this.error = 'ログインできませんでした'
      }
    },
    async signUp() {
      this.error = null
      try {
        const res = await this.$axios.post('/auth', {
          name: this.signupName,
          email: this.signupEmail,
          password: this.signupPassword,
          password_confirmation: this.signupPasswordConfirmation,
        })
        if (!res) {
          throw new Error('サインアップできませんでした。')
        }
        if (!this.error) {
          window.localStorage.setItem('access-token', res.headers['access-token'])
          window.localStorage.setItem('client', res.headers.client)
          window.localStorage.setItem('uid', res.headers.uid)
          window.localStorage.setItem('name', res.data.data.name)
          this.$router.push("/")
        }
        return res
      } catch (error) {
        this.error = 'サインアップできませんでした。'
      }
    }
  }
}
</script>