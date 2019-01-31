import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import VueLodash from 'vue-lodash'

export default () => {
  Vue.use(ElementUI,  { size: 'medium', locale })
  Vue.use(VueLodash)
}
