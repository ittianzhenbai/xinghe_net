// 导入自己需要的组件
import { 
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
  CollapseItem,
  InfiniteScroll
} from 'element-ui'
const element = {
  install: function (Vue) {
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
    Vue.use(InfiniteScroll)
  }
}
export default element