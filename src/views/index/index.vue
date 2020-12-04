<template>
  <div class="container-fluid main" >
      <div class="row header">
        <HeadNavs />
      </div>
      <div class="row content">
        <router-view></router-view>
      </div>
      <div class="row foot">
        <Foot/>
      </div>
      <!-- <ScrollTop></ScrollTop> -->
  </div>
</template>
<script>
// import ScrollTop from '@/components/scroll_to_top/scroll_to_top.vue'
import HeadNavs from '@/components/head_navs/head_navs.vue'
import Foot from '@/components/foot/foot.vue'
import  '../../common/js/control.js'
export default {
  name: 'Index',
  data(){
    return{
      screenwidth:''
    }
  },
  components: {
    // ScrollTop,
    HeadNavs,
    Foot
  },
  created(){
    this.screenwidth = document.documentElement.clientWidth || document.body.clientWidth
  },
  mounted(){
  }
}
</script>
<style lang="stylus" scoped>
.main
  width 100%
  padding 0
  margin 0
  // overflow-x hidden
  .header
    width 100%
    position fixed
    top 0
    left 0
    right 0
    z-index 99
    margin 0
  .banner
    margin-top 3rem
    .img
      width 100%
  .content
    margin-top 3rem
    min-height 750px
    // margin-left 0
    // margin-right 0
    // padding 0
    border 1px solid red
</style>
