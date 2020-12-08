// 导入自己需要的组件
import { 
  // Select, 
  // Option, 
  // OptionGroup,
  // Input, 
  // Tree, 
  // Dialog,
  // Row, 
  // Col ,
  Table,
  TableColumn,
  Pagination,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Image,
  Tabs,
  TabPane,
  Collapse,
  CollapseItem
} from 'element-ui'
const element = {
  install: function (Vue) {
    // Vue.use(Select)
    // Vue.use(Option)
    // Vue.use(OptionGroup)
    // Vue.use(Input)
    // Vue.use(Tree)
    // Vue.use(Dialog)
    // Vue.use(Row)
    // Vue.use(Col)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Pagination)
    Vue.use(Menu)
    Vue.use(Submenu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Image)
    Vue.use(Tabs)
    Vue.use(TabPane)
    Vue.use(Collapse)
    Vue.use(CollapseItem)
  }
}
export default element