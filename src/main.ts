import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { ROOT_KEY } from './store'
import './reset.css';
import {
  ElRow,
  ElButton,
  ElMenuItem,
  ElMenu,
  ElMenuItemGroup,
  ElSubmenu,
  ElCol,
  ElTable,
  ElTableColumn,
  ElInput,
  ElFormItem,
  ElOption,
  ElSelect,
  ElForm,
  ElDialog,
} from 'element-plus';
const app = createApp(App).use(store, ROOT_KEY).use(router)
const components = [
  ElRow,
  ElButton,
  ElMenuItem,
  ElMenu,
  ElMenuItemGroup,
  ElSubmenu,
  ElCol,
  ElTable,
  ElTableColumn,
  ElInput,
  ElFormItem,
  ElOption,
  ElSelect,
  ElForm,
  ElDialog,
]
components.forEach(component => {
  app.component(component.name, component)
})
app.mount('#app')
