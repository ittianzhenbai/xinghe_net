<template>
  <div class="container-fluid main" >
      <div class="container-fluid header">
        <HeadNavs ref="headnavs" />
      </div>
      <div class="row content" @click="closeMobileMenu">
        <router-view></router-view>
      </div>
      <div class="row foot" @click="closeMobileMenu">
        <Foot/>
      </div>
      <ScrollTop></ScrollTop>
  </div>
</template>
<script>
import ScrollTop from '@/components/scroll_to_top/scroll_to_top.vue'
import HeadNavs from '@/components/head_navs/head_navs.vue'
import Foot from '@/components/foot/foot.vue'
import  '../../common/js/control.js'
import { mapState} from "vuex";
export default {
  name: 'Index',
  data(){
    return{
      screenwidth:''
    }
  },
  components: {
    ScrollTop,
    HeadNavs,
    Foot
  },
  computed:{
    ...mapState(["colseMobileIndex"])
  },
  created(){
  },
  mounted(){
  },
  methods:{
    closeMobileMenu(){
       event.stopPropagation()
       this.$refs.headnavs.right_navshow = false
       this.$refs.headnavs.click_count = 0
    }
  },
  watch:{
    colseMobileIndex(newVal){
      if(newVal>0){
        this.$refs.headnavs.right_navshow = false
        this.$refs.headnavs.click_count = 0
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.main
  width 100%
  padding 0
  margin 0
  .header
    width 100%
    padding 0
    position fixed
    top 0
    left 0
    right 0
    z-index 99
    margin 0
  .content
    margin 0
    padding 0
    min-height 750px
    @media screen and (max-width:768px)
        min-height 590px
    @media screen and (min-height:1080px)
        min-height 1100px
  .foot
    margin 0
    padding 0
</style>
