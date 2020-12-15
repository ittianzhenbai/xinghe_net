import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex:sessionStorage.getItem("activeIndex")==undefined||null?"1":sessionStorage.getItem("activeIndex"),//记录当前指向的导航index
    childActiveIndex:sessionStorage.getItem("childActiveIndex")==undefined||null?"1":sessionStorage.getItem("childActiveIndex"),//记录子页面选项卡的指向
    searchKeywords:sessionStorage.getItem("searchKeywords")==undefined||null?"1":sessionStorage.getItem("searchKeywords"),//搜索关键词
    readHistory1:window.sessionStorage.getItem("readHistory1") ==undefined||null?[]:JSON.parse(window.sessionStorage.getItem("readHistory1"))//记录人才招聘阅读记录
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
      state.childActiveIndex = data
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
      console.log(state.readHistory1)
    }
    
  },
  actions: {
  },
  modules: {
  }
})
