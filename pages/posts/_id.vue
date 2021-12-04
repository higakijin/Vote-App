<template>
  <div class='relative'>
    <Navbar />
    <div class="grid grid-cols-7 gap-4">
      <div class="col-span-7 xl:col-span-1 lg:col-span-1"></div>
      <div class="col-span-7 xl:col-span-4 lg:col-span-4 pt-36">
        <h1 class="text-4xl font-sans">ここにタイトル</h1>
        <p>名無し侍</p>
        <p>2001.9.11</p>
        
        <rateBar :agree_rate="agree_rate" :disagree_rate="disagree_rate"/>
        
      </div>
      <div class="col-span-7 xl:col-span-2 lg:col-span-2">
        <createForm />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import rateBar from '../../components/rateBar.vue'
import createForm from '../../components/createForm.vue'

export default {
  components: { Navbar, createForm, rateBar },
  data() {
    return {
      agree_rate: 42,
      disagree_rate: 58
    }
  }
}
</script>
