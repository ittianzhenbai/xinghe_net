<template>
  <div class="container-fluid main" >
      <div class="row header">
        <HeadNavs />
      </div>
      <div class="row banner">
        <img class="img" src="../../assets/1.png" alt="">
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
import control_fontsize from  '../../common/js/control.js'
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
    control_fontsize()
    window.onresize = () => {
        return (() => {
        })()
      }
  }
}
</script>
<style lang="stylus" scoped>
.main
  width 100%
  .header
    position fixed
    top 0
    width 100%
    z-index 99
  .banner
    margin-top 4rem
    .img
      width 100%
  .content
    min-height 750px
</style>
