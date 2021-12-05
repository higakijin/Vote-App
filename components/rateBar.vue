<template>
  <div class="flex mt-2">
    <div v-if="disagree_rate === 100" class="w-full flex">
      <transition name="disagree_bar">
        <div v-show="showBar" class="bg-blue-600 rounded-lg min-w-min" :style="{width: `${disagree_rate}%`}">
          <p class="flex justify-center text-white">
            {{ disagree_rate }}%
          </p>
        </div>
      </transition>
    </div>
    <div v-else-if="agree_rate === 100" class="w-full flex">
      <transition name="agree_bar">
        <div v-show="showBar" class="bg-red-500 rounded-lg min-w-min"  :style="{width: `${agree_rate}%`}">
          <p class="flex justify-center text-white">
            {{ agree_rate }}%
          </p>
        </div>
      </transition>
    </div>
    <div v-else-if="isNaN(agree_rate) && isNaN(disagree_rate)" class="w-full">
      <div class="bg-gray-400 rounded-lg min-w-min w-100">
        <p class="flex justify-center text-white">
          投票なし
        </p>
      </div>
    </div>
    <div v-else class="w-full flex">
      <transition name="disagree_bar">
        <div v-show="showBar" class="bg-blue-600 rounded-l-lg min-w-min" :style="{width: `${disagree_rate}%`}">
          <p class="flex justify-center text-white">
            {{ disagree_rate }}%
          </p>
        </div>
      </transition>
      <transition name="agree_bar">
        <div v-show="showBar" class="bg-red-500 rounded-r-lg min-w-min"  :style="{width: `${agree_rate}%`}">
          <p class="flex justify-center text-white">
            {{ agree_rate }}%
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["agree_rate", "disagree_rate"],
  data() {
    return {
      showBar: false
    }
  },
  mounted() {
    this.showBar = true
  }
}
</script>

<style scoped>
.disagree_bar-enter {
  transform: translateX(-60%);
}
.disagree_bar-enter-to {
  transform: translateX(0);
}
.agree_bar-enter {
  transform: translateX(60%);
}
.agree_bar-enter-to {
  transform: translateX(0);
}
.agree_bar-enter-active, .disagree_bar-enter-active {
  transition: all 1s ease;
}
</style>