import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex:sessionStorage.getItem("activeIndex")==undefined||null?"1":sessionStorage.getItem("activeIndex"),//记录当前指向的导航index
    childActiveIndex:sessionStorage.getItem("childActiveIndex")==undefined||null?"1":sessionStorage.getItem("childActiveIndex"),//记录子页面选项卡的指向
    searchKeywords:"",//搜索新闻关键词
    readHistory1:window.sessionStorage.getItem("readHistory1") ==undefined||null?[]:JSON.parse(window.sessionStorage.getItem("readHistory1")),//记录人才招聘公告阅读记录
    readHistory2:window.sessionStorage.getItem("readHistory2") ==undefined||null?[]:JSON.parse(window.sessionStorage.getItem("readHistory2")),//记录党章党规阅读记录
    readHistory3:window.sessionStorage.getItem("readHistory3") ==undefined||null?[]:JSON.parse(window.sessionStorage.getItem("readHistory3")),//记录学习园地阅读记录
    readHistory4:window.sessionStorage.getItem("readHistory4") ==undefined||null?[]:JSON.parse(window.sessionStorage.getItem("readHistory4")),//记录文件通知阅读记录
    readHistory5:window.sessionStorage.getItem("readHistory5") ==undefined||null?[]:JSON.parse(window.sessionStorage.getItem("readHistory5")),//记录文件通知阅读记录
    deviceFlag:window.sessionStorage.getItem("deviceFlag"),
    curPage:window.sessionStorage.getItem("curPage"),
    browserType:window.sessionStorage.getItem("browserType") == undefined||null?"":window.sessionStorage.getItem("browserType"),//浏览器类型判断，为了让ios输入框聚焦
    colseMobileIndex:0
  },
  mutations: {
    setActiveIndex(state,data){
      state.activeIndex = data
      sessionStorage.setItem("activeIndex",data)
    },
    setchildActiveIndex(state,data){
      state.childActiveIndex = data
      sessionStorage.setItem("childActiveIndex",data)
    },
    setsearchKeywords(state,data){
      state.searchKeywords = data
      sessionStorage.setItem("searchKeywords",data)
    },
    setreadHistory1(state,data){
      function unique(arr) {
        //去重函数
        const res = new Map();
        return arr.filter((arr) => !res.has(arr.jobid) && res.set(arr.jobid, data.jobid));
      }
      state.readHistory1 = state.readHistory1.concat(data)
      state.readHistory1 = unique(state.readHistory1)
      window.sessionStorage.setItem("readHistory1",JSON.stringify(state.readHistory1))
    },
    setreadHistory2(state,data){
      function unique(arr) {
        //去重函数
        const res = new Map();
        return arr.filter((arr) => !res.has(arr.newsid) && res.set(arr.newsid, data.newsid));
      }
      state.readHistory2 = state.readHistory2.concat(data)
      state.readHistory2 = unique(state.readHistory2)
      window.sessionStorage.setItem("readHistory2",JSON.stringify(state.readHistory2))
    },
    setreadHistory3(state,data){
      function unique(arr) {
        //去重函数
        const res = new Map();
        return arr.filter((arr) => !res.has(arr.newsid) && res.set(arr.newsid, data.newsid));
      }
      state.readHistory3 = state.readHistory3.concat(data)
      state.readHistory3 = unique(state.readHistory3)
      window.sessionStorage.setItem("readHistory3",JSON.stringify(state.readHistory3))
    },
    setreadHistory4(state,data){
      function unique(arr) {
        //去重函数
        const res = new Map();
        return arr.filter((arr) => !res.has(arr.newsid) && res.set(arr.newsid, data.newsid));
      }
      state.readHistory4 = state.readHistory4.concat(data)
      state.readHistory4 = unique(state.readHistory4)
      window.sessionStorage.setItem("readHistory4",JSON.stringify(state.readHistory4))
    },
    setreadHistory5(state,data){
      function unique(arr) {
        //去重函数
        const res = new Map();
        return arr.filter((arr) => !res.has(arr.newsid) && res.set(arr.newsid, data.newsid));
      }
      state.readHistory5 = state.readHistory5.concat(data)
      state.readHistory5 = unique(state.readHistory5)
      window.sessionStorage.setItem("readHistory5",JSON.stringify(state.readHistory5))
    },
    setdeviceFlag(state,data){
      state.deviceFlag = data
      window.sessionStorage.setItem("deviceFlag",data)
    },
    setcurPage(state,data){
      state.curPage = data
      window.sessionStorage.setItem("curPage",data)
    },
    setbrowserType(state,data){
      state.browserType = data
      window.sessionStorage.setItem("browserType",data)
    },
    setcolseMobileIndex(state,data){
      if(data !=="0"){
        state.colseMobileIndex ++
      }else{
        state.colseMobileIndex = 0
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
