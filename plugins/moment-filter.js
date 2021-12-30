import Vue from 'vue'
import moment from 'moment'

Vue.filter('moment', function (value) {
  const date = moment(value);
  return date.format("YYYY年MM月DD日(ddd)");
})

Vue.filter('moment2', function (value) {
  const date = moment(value);
  return date.format("YYYY.MM.DD");
})
