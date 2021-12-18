# リンク先
https://higakijin-vote-app.herokuapp.com/

# このアプリは何？
VoteAppという投票アプリ(**フロントエンド**)です。    
Yes/Noの2択でシンプルに賛否を問います。  
投票機能というとTwitterのアンケートを連想しがちですが、異なる点は賛成派、反対派に別れてそれぞれ意見を投稿できる点です。

# 使用技術
- フロントエンド
  - NPM 8.1.0 
  - Nuxt.js 2.15.8
- バックエンド
  - Ruby 2.7.4
  - Ruby on Rails 6.1.4.1（APIモード）
- CSSフレームワーク
  - Tailwind CSS 4.2.1
- デプロイ先：Heroku
  - バックエンド：https://vote-app-api.herokuapp.com/
  - フロントエンド：https://higakijin-vote-app.herokuapp.com/

# 使い方
初見でもわかるUI設計を目指しております。

# なぜAPIで実装したか。
単純にかっこよかった。  
Railsを普通に勉強していたときに、タグの絞り込み機能やビデオチャットといった機能を実装したくなりました。  
いつかJavaScriptを学ばなければと思っていましたが、今時jQueryを学ぶ気にもならなかったので、モダンjsに手を出しました。

# なぜフロントにNuxt.js(Vue.js)を使ったか。
実は以前にReactに手を出したことがあったが、無事挫折したので、なんとなくVue.jsにしてみました。

# なぜTailwind CSSを使ったのか。
以前までBootstrapにお世話になっていましたが、見るからにBootstrap臭がするのが悩みでした。  
そんな時にTailwind CSSに出会い、比較的自由にcssの指定ができることや、Nuxtとの相性がいいということなので、採用してみました。  
Vuetifyと併用ができなくてショックでした。

# ER図
![](https://i.gyazo.com/63d21b8b31c82fd8d9fcab5795670573.png)


# アイコン
- [IFN無料アイコン](https://illustration-free.net/)
- [icooon mono](https://icooon-mono.com/)