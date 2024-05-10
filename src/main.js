import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router' // 引入上面定义的路由模块
import '@/styles/index.scss' // global css


import { Button, Select, Message, Avatar, Row, Col, Divider, Dialog, Rate, DatePicker, Option, Container, Header, Aside, Main,
    Form, FormItem, Input, Table, TableColumn, Pagination, MessageBox, Checkbox, CheckboxGroup, Tree, Radio, RadioGroup, InputNumber,
    Tooltip
 } from 'element-ui';

Vue.component(Button.name, Button)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Radio.name, Radio)
Vue.component(InputNumber.name, InputNumber)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Select.name, Select)
Vue.component(Message.name, Message)
Vue.component(Avatar.name, Avatar)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Divider.name, Divider)
Vue.component(Dialog.name, Dialog)
Vue.component(Rate.name, Rate)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Option.name, Option)
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Tree.name, Tree)

Vue.prototype.$message = Message

Vue.prototype.$confirm = MessageBox.confirm

Vue.prototype.$alert = MessageBox.alert

Vue.config.productionTip = false

new Vue({
  router, // 注入路由
  store,
  render: h => h(App),
}).$mount('#app')
