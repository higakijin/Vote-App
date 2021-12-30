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
  const already_posted = (votes, boolean) => {
    if (process.browser) {
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
  }
  
  function agree_rate (agree_count, disagree_count) {
    let agree_rate = agree_count/(agree_count + disagree_count) * 100
    if (agree_rate > 0 && agree_rate <= 1) {
      agree_rate = 1
    } else if (agree_rate < 100 && agree_rate >= 99) {
      agree_rate = 99
    } else {
      agree_rate = Math.round(agree_rate)
    }
    return agree_rate
  }

  function disagree_rate (agree_count, disagree_count) {
    return 100 - agree_rate(agree_count, disagree_count)
  }

  inject('isLogin', isLogin)
  inject('already_posted', already_posted)
  inject('agree_rate', agree_rate)
  inject('disagree_rate', disagree_rate)
}