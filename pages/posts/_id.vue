<template>
  <div class='relative'>
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1"></div>
      <div class="col-span-7 xl:col-span-4 lg:col-span-4 pt-36 mx-5 pb-12">
        <div class="text-red-500 mx-2 mb-2">{{ error }}</div>
        <div class="grid grid-cols-7">
          <div class="col-span-7 xl:col-span-6 lg:col-span-6 flex">
            <svg class="w-10 h-10 my-auto" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
              <style type="text/css">
                .st0{fill:#4B4B4B;}
              </style>
              <g>
                <polygon class="st0" points="179.754,130.165 163.414,154.427 348.602,154.427 332.246,130.165 297.75,130.165 297.75,0 214.25,0 
                  214.25,130.165 	" style="fill: rgba(0, 0, 0, 0.73);"></polygon>
                <path class="st0" d="M467.42,179.39l-78.738-98.631c-2.518-3.152-6.337-5.001-10.362-5.001h-66.663v26.557h60.274l62.072,77.769
                  H77.997l62.089-77.769h60.257V75.758h-66.646c-4.042,0-7.861,1.85-10.379,5.001L44.58,179.39c-1.884,2.356-2.912,5.267-2.912,8.273
                  v311.062c0,3.494,1.422,6.911,3.905,9.395c2.467,2.466,5.875,3.88,9.386,3.88h402.098c3.494,0,6.92-1.414,9.37-3.88
                  c2.484-2.484,3.905-5.901,3.905-9.395V187.663C470.332,184.657,469.304,181.746,467.42,179.39z M256.008,226.21
                  c4.145,0,7.502-3.375,7.502-7.519v-5.481c1.986,0.908,3.802,2.124,5.326,3.657c3.306,3.297,5.327,7.81,5.327,12.846v15.33h-36.329
                  v-15.33c0-5.036,2.021-9.548,5.328-12.846c1.524-1.533,3.339-2.749,5.326-3.657v5.481
                  C248.489,222.835,251.846,226.21,256.008,226.21z M263.939,308.082h-7.023h-1.85h-7.005l2.209-19.971
                  c-4.128-2.107-6.988-6.346-6.988-11.305c0-7.005,5.704-12.709,12.726-12.709c7.005,0,12.709,5.704,12.709,12.709
                  c0,4.959-2.86,9.198-6.988,11.305L263.939,308.082z M443.783,485.443H68.234V195.251h180.256v4.428
                  c-13.48,3.374-23.466,15.51-23.466,30.034v15.398c-8.581,0.36-15.449,7.382-15.449,16.057v56.078
                  c0,8.898,7.211,16.126,16.118,16.126h60.616c8.906,0,16.118-7.228,16.118-16.126v-56.078c0-8.675-6.868-15.698-15.449-16.057
                  v-15.398c0-14.524-9.986-26.66-23.466-30.034v-4.428h180.272V485.443z" style="fill: rgba(0, 0, 0, 0.73);"></path>
              </g>
            </svg>
            <p class="my-auto">{{ total_votes }}</p>
            <h1 class="text-2xl font-medium font-medium mb-3 break-words pl-3">{{ post.topic }}</h1>
          </div>
          <div class="col-span-7 lg:col-span-1 xl:col-span-1 my-auto flex justify-end gap-x-5">
            <div v-show="isMyPost" class="inline-block cursor-pointer" @click="deletePost(post)">
              <svg class="w-7 h-7 ml-auto" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                <style type="text/css">
                  .st0{fill:#4B4B4B;}
                </style>
                <g>
                  <path class="st0" d="M439.114,69.747c0,0,2.977,2.1-43.339-11.966c-41.52-12.604-80.795-15.309-80.795-15.309l-2.722-19.297
                    C310.387,9.857,299.484,0,286.642,0h-30.651h-30.651c-12.825,0-23.729,9.857-25.616,23.175l-2.722,19.297
                    c0,0-39.258,2.705-80.778,15.309C69.891,71.848,72.868,69.747,72.868,69.747c-10.324,2.849-17.536,12.655-17.536,23.864v16.695
                    h200.66h200.677V93.611C456.669,82.402,449.456,72.596,439.114,69.747z" style="fill: rgb(223, 86, 86);"></path>
                  <path class="st0" d="M88.593,464.731C90.957,491.486,113.367,512,140.234,512h231.524c26.857,0,49.276-20.514,51.64-47.269
                    l25.642-327.21H62.952L88.593,464.731z M342.016,209.904c0.51-8.402,7.731-14.807,16.134-14.296
                    c8.402,0.51,14.798,7.731,14.296,16.134l-14.492,239.493c-0.51,8.402-7.731,14.798-16.133,14.288
                    c-8.403-0.51-14.806-7.722-14.296-16.125L342.016,209.904z M240.751,210.823c0-8.42,6.821-15.241,15.24-15.241
                    c8.42,0,15.24,6.821,15.24,15.241v239.492c0,8.42-6.821,15.24-15.24,15.24c-8.42,0-15.24-6.821-15.24-15.24V210.823z
                    M153.833,195.608c8.403-0.51,15.624,5.894,16.134,14.296l14.509,239.492c0.51,8.403-5.894,15.615-14.296,16.125
                    c-8.403,0.51-15.624-5.886-16.134-14.288l-14.509-239.493C139.026,203.339,145.43,196.118,153.833,195.608z" style="fill: rgb(223, 86, 86);"></path>
                </g>
              </svg>
            </div>
            <div v-show="already_liked(post.likes)" @click="unlike_post(post)" class="inline-blok flex cursor-pointer">
              <svg class="h-7 w-7" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                <style type="text/css">
                  .st0{fill:#4B4B4B;}
                </style>
                <g>
                  <path class="st0" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
                    c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
                    l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z" style="fill: rgb(223, 86, 86);"></path>
                </g>
              </svg>
              <p class="ml-1 my-auto text-red-500">{{ post.likes_count }}</p>
            </div>
            <div v-show="!already_liked(post.likes)"  @click="like_post(post)" class="inline-block flex cursor-pointer">
              <svg class="h-7 w-7" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                <style type="text/css">
                  .st0{fill:#4B4B4B;}
                </style>
                <g>
                  <path class="st0" d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391
                    c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547
                    l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z" style="fill: rgb(75, 75, 75);"></path>
                </g>
              </svg>
              <p class="ml-1 my-auto">{{ post.likes_count }}</p>
            </div>
          </div>
        </div>
        <rateBar :agree_rate="$agree_rate(post.agree_count, post.disagree_count)" :disagree_rate="$disagree_rate(post.agree_count, post.disagree_count)"/>
        <div class="flex items-center mt-2">
          <p class="font-semibold title-font text-gray-700 mr-3 text-sm"><nuxt-link :to='`/users/${post.user_id}`'>by {{ post.name }}</nuxt-link></p>
          <p class="mt-1 text-gray-500 ml-auto text-xs">{{ post.created_at | moment }}</p>
        </div>
        <div v-show="$isLogin()" class="mt-5 flex w-full gap-x-4 mb-20">
          <button @click='$refs.child.showModal(post, false)' class="w-11/12 border border-blue-500 rounded-md hover:bg-blue-700 hover:text-white" :class="$already_posted(post.votes, false) ? 'text-white bg-blue-500': 'text-blue-500'">No</button>
          <button @click='$refs.child.showModal(post, true)' class="w-11/12 border border-red-500 rounded-md hover:bg-red-700 hover:text-white" :class="$already_posted(post.votes, true) ? 'text-white bg-red-500': 'text-red-500'">Yes</button>
        </div>
        <div v-for="created_comment in post.comments" :key="created_comment.id">
          <div v-if="created_comment.is_agree">
            <div class="mt-5 flex justify-end">
              <div class="flex">
                <p v-show="created_comment.likes_count > 0" class="mt-auto">{{ created_comment.likes_count }}</p>
                <svg @click="like_comment(post, created_comment)" v-show="!already_liked(created_comment.likes)" class="h-7 w-7 mt-auto mx-2 cursor-pointer" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                  <style type="text/css">
                    .st0{fill:#4B4B4B;}
                  </style>
                  <g>
                    <path class="st0" d="M512,331.117c0-11.141-3.813-21.484-10.172-29.641c-2.469-3.156-5.422-5.891-8.578-8.375
                      c5-7.625,7.969-16.703,7.969-26.484c0-26.859-21.75-48.641-48.625-48.641h-35.5h-0.047h-0.5h-2.078c-1.516,0-2.078,0-2.078,0
                      c-0.422,0-0.797,0-1.313,0h-25.875c-6.688-0.297-13.406-1.047-18.766-2.469c-5.484-1.391-9.234-3.547-10.813-5.313
                      c-2.766-3.141-3.328-5.141-3.438-8.438c-0.031-2.797,0.844-6.594,2.688-10.922c2.719-6.5,7.453-13.953,12.219-21.156
                      c2.391-3.609,4.781-7.188,6.938-10.781s4.125-7.125,5.594-11.094c4.547-12.641,14.391-35.781,14.406-63.984
                      c0.016-11.859-1.75-24.672-6.375-37.813c-3.953-11.281-10.063-20.344-17.766-26.609c-7.672-6.281-17-9.625-26.266-9.594
                      c-11.031-0.016-21.719,4.641-29.875,12.719c-8.188,8.063-13.922,19.469-16.188,33.109c-0.719,4.453-2.969,12.453-6.594,21.891
                      c-5.422,14.203-13.891,32.016-24.688,49.422c-10.781,17.422-23.969,34.422-38.469,47.219
                      c-18.359,16.234-35.828,29.953-50.734,42.016c-14.922,12.141-27.234,22.344-35.766,32.828c-1.813,2.281-5.047,4.797-9.078,6.953
                      c-6.016,3.266-13.641,5.688-19.578,7.094c-2.969,0.719-5.531,1.219-7.313,1.531c-0.469,0.078-0.719,0.109-1.063,0.172v-5.203
                      H36.469C16.313,259.554,0,275.882,0,296.023v162.938c0,20.141,16.313,36.469,36.469,36.469h43.5
                      c13.438,0,24.313-10.875,24.313-24.313v-1.203c0.031,0,9.594,0,38.906,0c5.375-0.047,16.094,1.625,28.75,4.391
                      c19.156,4.109,43.328,10.453,66.859,15.969c23.609,5.484,46.344,10.219,64.266,10.906c19.047,0.719,33.078,1.016,44.203,1.016
                      c23.703,0.031,34.531-1.469,50.734-3.266l0.406-0.063l22.75-3.266l0.219-0.047c23.078-3.75,40.75-23.656,40.75-47.875
                      c0-3.141-0.406-6.156-1-9.094c6.219-2.688,11.875-6.5,16.406-11.391c8-8.578,12.953-20.219,12.938-32.907
                      c0.016-7.313-1.656-14.219-4.563-20.391C501.344,365.804,512,349.82,512,331.117z M51.281,456.586c-9.25,0-16.75-7.5-16.75-16.75
                      s7.5-16.75,16.75-16.75s16.75,7.5,16.75,16.75S60.531,456.586,51.281,456.586z M464.719,354.632
                      c-5.078,0.297-9.453,3.609-11.094,8.422c-1.625,4.797-0.188,10.094,3.625,13.422c5.156,4.516,8.297,10.719,8.313,17.813
                      c-0.016,6.234-2.359,11.719-6.266,15.922c-3.922,4.219-9.328,7-15.422,7.531c-4.188,0.359-7.969,2.859-9.938,6.578
                      c-1.969,3.703-1.938,8.219,0.125,11.906c2.031,3.641,3.156,7.438,3.156,11.453c0,11.766-8.563,21.391-19.844,23.281l-22.313,3.219
                      c-16.594,1.828-25.125,3.078-47.797,3.109c-10.672,0-24.422-0.297-43.297-1c-9.5-0.344-22.609-2.375-37.031-5.313
                      c-21.656-4.422-46.375-10.813-68.547-16.156c-11.109-2.672-21.578-5.078-30.859-6.859c-9.344-1.766-17.313-2.938-24.344-2.969
                      c-11.875,0-20.375,0-26.438,0V287.695c2.875-0.656,6.109-1.484,9.609-2.563c5.578-1.719,11.703-4.016,17.688-7.234
                      c5.953-3.219,11.875-7.344,16.656-13.234c5.859-7.328,17.391-17.281,32.063-29.109c14.688-11.891,32.547-25.922,51.547-42.719
                      c22.688-20.078,40.75-46.766,53.969-71.578c6.594-12.406,11.969-24.344,15.969-34.844c4.016-10.563,6.688-19.469,7.906-26.703
                      c1.531-9.219,5.125-15.531,9.094-19.453c4-3.906,8.297-5.516,12.375-5.531c3.453,0.016,6.938,1.109,10.531,4
                      c3.594,2.906,7.25,7.797,9.969,15.516c3.609,10.297,4.984,20.156,5,29.578c0,22.469-7.969,42.031-12.906,55.438
                      c-0.656,1.891-2.688,5.578-5.406,9.813c-4.109,6.453-9.703,14.313-14.469,23.016c-4.719,8.734-9,18.438-9.094,29.672
                      c-0.094,8.656,3.219,18.156,10.172,25.453c6.484,6.844,14.641,10.25,22.688,12.406c8.125,2.125,16.484,2.922,24.328,3.266
                      l0.531,0.016h26.109c0.516,0,0.891,0,1.313,0c0,0,1,0,2.078,0c0.094,0,0.172,0,0.281,0c0.719,0,1.344,0,1.797,0
                      c0.234,0,0.453,0,0.5,0h0.047h35.5c13.078,0.016,23.688,10.625,23.703,23.719c0,8.109-4.078,15.203-10.328,19.531
                      c-4,2.75-6.031,7.547-5.25,12.328c0.813,4.781,4.281,8.641,8.953,9.953c5.016,1.391,9.406,4.391,12.5,8.359
                      c3.078,3.984,4.891,8.859,4.891,14.328C487.094,343.679,477.219,353.882,464.719,354.632z" style="fill: rgb(75, 75, 75);"></path>
                  </g>
                </svg>

                <svg @click="unlike_comment(post, created_comment)" v-show="already_liked(created_comment.likes)" class="h-7 w-7 mt-auto mx-2 cursor-pointer" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                  <style type="text/css">
                    .st0{fill:#4B4B4B;}
                  </style>
                  <g>
                    <path class="st0" d="M512,319.32c0-16.672-11.297-30.547-26.609-34.813c9.516-6.547,15.797-17.484,15.797-29.906
                      c0-20.047-16.25-36.297-36.297-36.297h-35.656h-0.5h-2.094c-1.547,0-2.094,0-2.063,0c-0.438,0-0.813,0-1.328,0h-26.203
                      c-14.672-0.625-30.484-3.125-38.547-11.766c-21.719-23.281,14.672-56.875,21.453-75.422c6.75-18.547,21.953-53.969,8-93.703
                      c-14.641-41.781-59.234-34.688-66.25,7.563c-3.875,23.406-31.859,88.969-74.047,126.234
                      c-37.469,33.125-70.891,55.703-85.328,73.578c-13.234,16.391-28.297,20.578-28.297,20.578v180.688c0,0,0,0,20.469,0
                      c29.406,0,117.719,29.797,160.844,31.391c59.578,2.219,69.141,0.484,93.422-2.203l22.797-3.297
                      c17.25-2.813,30.406-17.641,30.406-35.688c0-6.422-1.813-12.359-4.734-17.594c18.547-1.609,33.172-17,33.172-35.969
                      c0-10.953-4.938-20.641-12.625-27.313C496.828,354.273,512,338.633,512,319.32z" style="fill: rgb(234 179 8);"></path>
                    <path class="st0" d="M0,302.508v163.469c0,20.203,16.375,36.578,36.578,36.578h43.656c13.453,0,24.375-10.906,24.375-24.391
                      v-212.25H36.578C16.375,265.914,0,282.289,0,302.508z M51.453,429.977c9.266,0,16.781,7.531,16.781,16.813
                      s-7.516,16.797-16.781,16.797c-9.281,0-16.797-7.516-16.797-16.797S42.172,429.977,51.453,429.977z" style="fill: rgb(234 179 8);"></path>
                  </g>
                </svg>

              </div>
              <div class="flex justify-end">
                <div class="balloon-right">
                  {{ created_comment.body }}
                </div>
              </div>
              <div class="flex">
                <p class="my-auto pl-5 text-sm"><nuxt-link :to='`/users/${created_comment.user_id}`'>{{ created_comment.name }}</nuxt-link></p>
              </div>
            </div>
          </div>

          <div v-else>
            <div class="mt-5 flex">
              <div class="flex">
                <p class="my-auto pr-5 text-sm"><nuxt-link :to='`/users/${created_comment.user_id}`'>{{ created_comment.name }}</nuxt-link></p>
              </div>
              <div class="flex">
                <div class="balloon-left">
                  {{ created_comment.body }}
                </div>
              </div>
              <div class="flex">
                <svg @click="like_comment(post, created_comment)" v-show="!already_liked(created_comment.likes)" class="h-7 w-7 mt-auto mx-2 cursor-pointer" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                  <style type="text/css">
                    .st0{fill:#4B4B4B;}
                  </style>
                  <g>
                    <path class="st0" d="M512,331.117c0-11.141-3.813-21.484-10.172-29.641c-2.469-3.156-5.422-5.891-8.578-8.375
                      c5-7.625,7.969-16.703,7.969-26.484c0-26.859-21.75-48.641-48.625-48.641h-35.5h-0.047h-0.5h-2.078c-1.516,0-2.078,0-2.078,0
                      c-0.422,0-0.797,0-1.313,0h-25.875c-6.688-0.297-13.406-1.047-18.766-2.469c-5.484-1.391-9.234-3.547-10.813-5.313
                      c-2.766-3.141-3.328-5.141-3.438-8.438c-0.031-2.797,0.844-6.594,2.688-10.922c2.719-6.5,7.453-13.953,12.219-21.156
                      c2.391-3.609,4.781-7.188,6.938-10.781s4.125-7.125,5.594-11.094c4.547-12.641,14.391-35.781,14.406-63.984
                      c0.016-11.859-1.75-24.672-6.375-37.813c-3.953-11.281-10.063-20.344-17.766-26.609c-7.672-6.281-17-9.625-26.266-9.594
                      c-11.031-0.016-21.719,4.641-29.875,12.719c-8.188,8.063-13.922,19.469-16.188,33.109c-0.719,4.453-2.969,12.453-6.594,21.891
                      c-5.422,14.203-13.891,32.016-24.688,49.422c-10.781,17.422-23.969,34.422-38.469,47.219
                      c-18.359,16.234-35.828,29.953-50.734,42.016c-14.922,12.141-27.234,22.344-35.766,32.828c-1.813,2.281-5.047,4.797-9.078,6.953
                      c-6.016,3.266-13.641,5.688-19.578,7.094c-2.969,0.719-5.531,1.219-7.313,1.531c-0.469,0.078-0.719,0.109-1.063,0.172v-5.203
                      H36.469C16.313,259.554,0,275.882,0,296.023v162.938c0,20.141,16.313,36.469,36.469,36.469h43.5
                      c13.438,0,24.313-10.875,24.313-24.313v-1.203c0.031,0,9.594,0,38.906,0c5.375-0.047,16.094,1.625,28.75,4.391
                      c19.156,4.109,43.328,10.453,66.859,15.969c23.609,5.484,46.344,10.219,64.266,10.906c19.047,0.719,33.078,1.016,44.203,1.016
                      c23.703,0.031,34.531-1.469,50.734-3.266l0.406-0.063l22.75-3.266l0.219-0.047c23.078-3.75,40.75-23.656,40.75-47.875
                      c0-3.141-0.406-6.156-1-9.094c6.219-2.688,11.875-6.5,16.406-11.391c8-8.578,12.953-20.219,12.938-32.907
                      c0.016-7.313-1.656-14.219-4.563-20.391C501.344,365.804,512,349.82,512,331.117z M51.281,456.586c-9.25,0-16.75-7.5-16.75-16.75
                      s7.5-16.75,16.75-16.75s16.75,7.5,16.75,16.75S60.531,456.586,51.281,456.586z M464.719,354.632
                      c-5.078,0.297-9.453,3.609-11.094,8.422c-1.625,4.797-0.188,10.094,3.625,13.422c5.156,4.516,8.297,10.719,8.313,17.813
                      c-0.016,6.234-2.359,11.719-6.266,15.922c-3.922,4.219-9.328,7-15.422,7.531c-4.188,0.359-7.969,2.859-9.938,6.578
                      c-1.969,3.703-1.938,8.219,0.125,11.906c2.031,3.641,3.156,7.438,3.156,11.453c0,11.766-8.563,21.391-19.844,23.281l-22.313,3.219
                      c-16.594,1.828-25.125,3.078-47.797,3.109c-10.672,0-24.422-0.297-43.297-1c-9.5-0.344-22.609-2.375-37.031-5.313
                      c-21.656-4.422-46.375-10.813-68.547-16.156c-11.109-2.672-21.578-5.078-30.859-6.859c-9.344-1.766-17.313-2.938-24.344-2.969
                      c-11.875,0-20.375,0-26.438,0V287.695c2.875-0.656,6.109-1.484,9.609-2.563c5.578-1.719,11.703-4.016,17.688-7.234
                      c5.953-3.219,11.875-7.344,16.656-13.234c5.859-7.328,17.391-17.281,32.063-29.109c14.688-11.891,32.547-25.922,51.547-42.719
                      c22.688-20.078,40.75-46.766,53.969-71.578c6.594-12.406,11.969-24.344,15.969-34.844c4.016-10.563,6.688-19.469,7.906-26.703
                      c1.531-9.219,5.125-15.531,9.094-19.453c4-3.906,8.297-5.516,12.375-5.531c3.453,0.016,6.938,1.109,10.531,4
                      c3.594,2.906,7.25,7.797,9.969,15.516c3.609,10.297,4.984,20.156,5,29.578c0,22.469-7.969,42.031-12.906,55.438
                      c-0.656,1.891-2.688,5.578-5.406,9.813c-4.109,6.453-9.703,14.313-14.469,23.016c-4.719,8.734-9,18.438-9.094,29.672
                      c-0.094,8.656,3.219,18.156,10.172,25.453c6.484,6.844,14.641,10.25,22.688,12.406c8.125,2.125,16.484,2.922,24.328,3.266
                      l0.531,0.016h26.109c0.516,0,0.891,0,1.313,0c0,0,1,0,2.078,0c0.094,0,0.172,0,0.281,0c0.719,0,1.344,0,1.797,0
                      c0.234,0,0.453,0,0.5,0h0.047h35.5c13.078,0.016,23.688,10.625,23.703,23.719c0,8.109-4.078,15.203-10.328,19.531
                      c-4,2.75-6.031,7.547-5.25,12.328c0.813,4.781,4.281,8.641,8.953,9.953c5.016,1.391,9.406,4.391,12.5,8.359
                      c3.078,3.984,4.891,8.859,4.891,14.328C487.094,343.679,477.219,353.882,464.719,354.632z" style="fill: rgb(75, 75, 75);"></path>
                  </g>
                </svg>

                <svg @click="unlike_comment(post, created_comment)" v-show="already_liked(created_comment.likes)" class="h-7 w-7 mt-auto mx-2 cursor-pointer" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
                  <style type="text/css">
                    .st0{fill:#4B4B4B;}
                  </style>
                  <g>
                    <path class="st0" d="M512,319.32c0-16.672-11.297-30.547-26.609-34.813c9.516-6.547,15.797-17.484,15.797-29.906
                      c0-20.047-16.25-36.297-36.297-36.297h-35.656h-0.5h-2.094c-1.547,0-2.094,0-2.063,0c-0.438,0-0.813,0-1.328,0h-26.203
                      c-14.672-0.625-30.484-3.125-38.547-11.766c-21.719-23.281,14.672-56.875,21.453-75.422c6.75-18.547,21.953-53.969,8-93.703
                      c-14.641-41.781-59.234-34.688-66.25,7.563c-3.875,23.406-31.859,88.969-74.047,126.234
                      c-37.469,33.125-70.891,55.703-85.328,73.578c-13.234,16.391-28.297,20.578-28.297,20.578v180.688c0,0,0,0,20.469,0
                      c29.406,0,117.719,29.797,160.844,31.391c59.578,2.219,69.141,0.484,93.422-2.203l22.797-3.297
                      c17.25-2.813,30.406-17.641,30.406-35.688c0-6.422-1.813-12.359-4.734-17.594c18.547-1.609,33.172-17,33.172-35.969
                      c0-10.953-4.938-20.641-12.625-27.313C496.828,354.273,512,338.633,512,319.32z" style="fill: rgb(234 179 8);"></path>
                    <path class="st0" d="M0,302.508v163.469c0,20.203,16.375,36.578,36.578,36.578h43.656c13.453,0,24.375-10.906,24.375-24.391
                      v-212.25H36.578C16.375,265.914,0,282.289,0,302.508z M51.453,429.977c9.266,0,16.781,7.531,16.781,16.813
                      s-7.516,16.797-16.781,16.797c-9.281,0-16.797-7.516-16.797-16.797S42.172,429.977,51.453,429.977z" style="fill: rgb(234 179 8);"></path>
                  </g>
                </svg>

                <p v-show="created_comment.likes_count > 0" class="mt-auto">{{ created_comment.likes_count }}</p>
              </div>
                
            </div>
          </div>

        </div>
        <div v-show="!$isLogin()">
          <p class="pt-10 text-center">投票・コメントをするにはまず<nuxt-link to="/users/auth" class="underline text-blue-700">ログイン</nuxt-link>しましょう！</p>
        </div>
        <div v-show="$isLogin()">
          <div v-show="$already_posted(post.votes, false) || $already_posted(post.votes, true)">
            <form @submit.prevent="createComment(post)" class="mt-20 mb-40 w-full">
              <div class="flex items-center border-b border-green-500 p-2">
                <input required v-model="comment" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="コメントを入力" aria-label="Full name">
                <button class="ml-auto flex-shrink-0 text-green-500 hover:bg-green-500 hover:text-white text-sm border border-green-500 py-1 px-2 rounded">
                  投稿
                </button>
              </div>
            </form>
          </div>
          <div v-show="!$already_posted(post.votes, false) && !$already_posted(post.votes, true)">
            <p class="pt-10 text-center">コメントをするにはまず投票をしましょう！</p>
          </div>
        </div>

      </div>
      
      <div class="col-span-7 xl:col-span-2 lg:col-span-2">
        <createForm />
      </div>
      <div class="col-span-7 xl:col-span-2 lg:col-span-2">
        <confirmModal :post="post" ref="child" @vote="vote" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import rateBar from '../../components/rateBar.vue'
import createForm from '../../components/createForm.vue'
import confirmModal from '../../components/confirmModal.vue'

export default {
  components: { Navbar, createForm, rateBar, confirmModal },

  async asyncData(context) {
    try {
      const res = await context.$axios.$get(`/api/posts/${context.params.id}`)
      return {
        post: res,
        total_votes: res.agree_count + res.disagree_count
      }
    } catch (error) {
      return {
        post: [],
        total_votes: null,
      }
    }
  },

  data() {
    return {
      comment: '',
      isMyPost: false,
      error: null
    }
  },

  methods: {
    async getPost() {
      try {
        const res = await this.$axios.$get(`/api/posts/${this.$route.params.id}`)
        this.post = res
        this.total_votes = this.post.agree_count + this.post.disagree_count
      } catch (error) {
        this.post = []
        this.total_votes = null
      }
    },

    async vote(post, judge) {
      try {
        const res = await this.$axios.$post(`/api/posts/${post.id}/votes`, {
          uid: window.localStorage.getItem('uid'),
          "access-token": window.localStorage.getItem('access-token'),
          client: window.localStorage.getItem('client'),
          post: {
            id: post.id,
            is_agree: judge
          }
        })
        this.getPost()
      } catch(error) {
        this.error = "投票に失敗しました。"
      }
    },
    
    async createComment(post) {
      try {
        const res = await this.$axios.$post(`/api/posts/${post.id}/comments`, {
          uid: window.localStorage.getItem('uid'),
          "access-token": window.localStorage.getItem('access-token'),
          client: window.localStorage.getItem('client'),
          post: {
            id: post.id,
          },
          comment: {
            body: this.comment,
          }
        })
        this.getPost()
        this.comment = ""
        // ページ最下部へスクロール
        const elm = document.documentElement
        const bottom = elm.scrollHeight - elm.clientHeight
        window.scroll(0, bottom)
      } catch (error) {
        this.error = "コメントの投稿に失敗しました。"
        window.scrollTo({ top: 0, behavior: 'smooth'})
      }
    },

    async deletePost(post) {
      try {
        const res = await this.$axios.$delete(`/api/posts/${post.id}`, {
          data: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client'),
            post: {id: post.id},
          }
        })
        this.$router.push('/')
      } catch (error) {
        this.error = "投稿を削除できませんでした。"
      }
    },

    already_liked(likes) {
      if (process.browser && likes) {
        let judge = null
        likes.some((e) => {
          if (e.uid === window.localStorage.getItem('uid')) {
            judge = true
            return true // someの処理を終わらせる
          } else {
            judge = false
          }
        })
        return judge
      }
    },

    async like_post(post) {
      try {
        if (!this.$isLogin()) {
          this.$router.push('/users/auth')
        } else {
          const res = await this.$axios.$post(`/api/posts/${post.id}/post_likes`, {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client'),
            post: {
              id: post.id
            }
          })
          this.getPost()
        }
      } catch (error) {
        this.error = "いいねできませんでした。"
      }
    },

    async unlike_post(post) {
      try {
        const res = await this.$axios.$delete(`/api/posts/${post.id}/post_likes`, {
          data: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client'),
            post: {
              id: post.id
            }
          }
        })
        this.getPost()
      } catch (error) {
        this.error = "いいねを解除できませんでした。"
      }
    },

    async like_comment(post, comment) {
      try {
        if (!this.$isLogin()) {
          this.$router.push('/users/auth')
        } else {
          const res = await this.$axios.$post(`/api/posts/${post.id}/comment_likes`, {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client'),
            comment: {
              id: comment.id
            }
          })
        }
        this.getPost()
      } catch(error) {
        this.error = "いいねできませんでした。"
        window.scrollTo({ top: 0, behavior: 'smooth'})
      }
    },

    async unlike_comment(post, comment) {
      try {
        const res = await this.$axios.$delete(`/api/posts/${post.id}/comment_likes`, {
          data: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client: window.localStorage.getItem('client'),
            comment: {
              id: comment.id
            }
          }
        })
        this.getPost()
      } catch (error) {
        this.error = "いいねを解除できませんでした。"
        window.scrollTo({ top: 0, behavior: 'smooth'})
      }
    }
  },

  created() {
    if (!this.post.is_published) {
      this.$router.push('/')
    } 
  },

  mounted() {
    if (window.localStorage.getItem('uid') === this.post.uid) {
      this.isMyPost = true
    }
  }
}
</script>

<style scoped>
.balloon-right, .balloon-left{
  z-index: -1;
  position: relative;
  padding: 20px;
  border-radius: 0.375rem;
}
.balloon-right {
  --tw-bg-opacity: 1;
  background-color: rgba(252, 165, 165, var(--tw-bg-opacity));
}
.balloon-left {
  --tw-bg-opacity: 1;
  background-color: rgba(191, 219, 254, var(--tw-bg-opacity));
}
.balloon-right::before, .balloon-left::before{
  content: '';
  position: absolute;
  display: block;
  height: 0;
  
  top: 30%;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}
.balloon-right::before{
  right: -15px;
  --tw-bg-opacity: 1;
  border-left: 15px solid rgba(252, 165, 165, var(--tw-bg-opacity));
}
.balloon-left::before{
  left: -15px;
  --tw-bg-opacity: 1;
  border-right: 15px solid rgba(191, 219, 254, var(--tw-bg-opacity));
}

</style>