<template>
  <div class="fixed w-full">
    <nav class="flex items-center justify-between flex-wrap bg-green-500 p-4">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <nuxt-link to="/" class="flex">
          <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 50px; height: 30px;" xml:space="preserve">
            <style type="text/css">
              .st0{fill:#4B4B4B;}
            </style>
            <g>
              <path class="st0" d="M131.474,442.606H512l-45.828-70.447h-51.578l-29.121-211.834l-40.481,5.548
                c-5.555-4.704-16.389-13.154-35.466-25.048c-17.858-11.208-38.472-17.02-55.07-17.02c-48.364,0-102.796,0-102.796,0l-14.907-8.88
                l-61.359,91.172l28.165,17.172l36.852,52.382c4.115,5.861,9.67,10.62,16.112,13.736c0,0,24.951,11.79,44.873,21.723
                c7.19,3.596,15.642,6.768,24.729,9.622l7.08,51.426h-55.971L131.474,442.606z M275.97,334.309
                c27.694,7.405,50.997-20.767,28.221-39.74c-29.606-24.681-30.548-24.792-30.548-24.792c-9.836-7.98-15.544-19.922-15.641-32.606
                c-0.055-12.628,5.487-24.632,15.212-32.771l10.529-8.714l83.65-11.527l25.852,187.998l3.851,28.165H258.417l-3.851-28.165
                l-6.193-45.032C257.725,329.613,267.188,331.934,275.97,334.309z" style="fill: rgb(255, 255, 255);"></path>
              <polygon class="st0" points="75.878,69.394 0,183.038 54.252,218.005 130.892,104.375 	" style="fill: rgb(255, 255, 255);"></polygon>
            </g>
          </svg>
          <span class="font-semibold text-xl tracking-tight my-auto">VoteApp</span>
        </nuxt-link>
      </div>
      <div class="block lg:hidden">
        <button @click="isEnable = !isEnable" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div v-show="isEnable" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Docs
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Blog
          </a>

          <!-- <router-link to="/posts/unpublished"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            :class="this.$route.path==='/posts/unpublished' ? 'text-white' : '' "
          >
            下書き一覧
          </router-link>  -->
        </div>

        <div v-if="isCurrentUser">
          <button @click="logout" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-600 hover:bg-white mt-4 lg:mt-0 hover:cursor-pointer">ログアウト</button>
        </div>
        <div v-else>
          <nuxt-link to="/users/auth" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-600 hover:bg-white mt-4 lg:mt-0">
            ログイン
          </nuxt-link>
        </div>
      </div>
    </nav>
    <div class="mt-3 mr-10">
      <div v-if="name" class="text-right">
        {{ name }} としてログイン中
      </div>
      <div v-else class="text-right">
        ログインしていません
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      isCurrentUser: false,
      name: '',
      error: null,
      isEnable: true,

      windowWidth: 0
    }
  },
  methods: {
    async logout () {
      this.error = null
      try {
        const res = await this.$axios.delete('/auth/sign_out', {
          headers: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client')
          }
        })
        if (!res) {
          new Error('ログアウトできませんでした。')
        }
        if (!this.error) {
          window.localStorage.removeItem('access-token')
          window.localStorage.removeItem('client')
          window.localStorage.removeItem('uid')
          window.localStorage.removeItem('name')
          this.$router.push('/users/auth')
        }
        this.error = null
        return res
      } catch (error)  {
        this.error = 'ログアウトできませんでした。'
        window.localStorage.removeItem('access-token')
        window.localStorage.removeItem('client')
        window.localStorage.removeItem('uid')
        window.localStorage.removeItem('name')
        this.$router.push('/users/auth')
      }
    },
    calculateWindowWidth() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 1024) {
        this.isEnable = false
      } else {
        this.isEnable = true
      }
    }
  },
  mounted () {
    this.name = window.localStorage.getItem('name')
    const loginJudge = () => {
      if (window.localStorage.getItem('access-token') && window.localStorage.getItem('client') && window.localStorage.getItem('uid') ) {
        this.isCurrentUser = true
      } else {
        this.isCurrentUser = false
      }
    }
    loginJudge ()
    this.calculateWindowWidth()
    window.addEventListener('resize', this.calculateWindowWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateWindowWidth)
  }
}
</script>