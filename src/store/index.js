import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeIndex:sessionStorage.getItem("activeIndex")==undefined||null?"1":sessionStorage.getItem("activeIndex"),//记录当前指向的导航index
    childActiveIndex:sessionStorage.getItem("childActiveIndex")==undefined||null?"1":sessionStorage.getItem("childActiveIndex"),//记录子页面选项卡的指向
    searchKeywords:sessionStorage.getItem("searchKeywords")==undefined||null?"1":sessionStorage.getItem("searchKeywords"),//记录子页面选项卡的指向
    // talentNotices:localStorage.getItem("talentNotices") == undefined||
    //               localStorage.getItem("talentNotices") ==null||
    //               localStorage.getItem("talentNotices") =="null"?[]:JSON.parse(localStorage.getItem("talentNotices"))
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
    }
    // settalentNotices(state,data){
    //   console.log(state)
    //   localStorage.setItem("talentNotices",JSON.stringify(data))
    // }
  },
  actions: {
  },
  modules: {
  }
})
