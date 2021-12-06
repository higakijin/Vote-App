export default ({}, inject) => {
  const isLogin = () => {
    if (process.browser) {
      if (window.localStorage.getItem('access-token') && window.localStorage.getItem('client') && window.localStorage.getItem('uid') ) {
        return true
      } else {
        return false
      }
    }
  }

  inject('isLogin', isLogin)
}