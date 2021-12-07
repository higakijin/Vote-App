export default ({$axios}, inject) => {
  const isLogin = () => {
    if (process.browser) {
      if (window.localStorage.getItem('access-token') && window.localStorage.getItem('client') && window.localStorage.getItem('uid') ) {
        return true
      } else {
        return false
      }
    }
  }
  //テスト

  const already_posted = (votes, boolean) => {
    let judge = null
    if (votes) {
      votes.some((e)=> {
        if (e.is_agree === boolean && e.uid === window.localStorage.getItem('uid')) {
          judge = true
          return true // ここでtrueを返すことでsome内の処理を終了させる
        } else {
          judge =  false
        }
      })
      return judge
    }
  }

  inject('isLogin', isLogin)
  inject('already_posted', already_posted)
}