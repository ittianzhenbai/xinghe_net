<template>
  <div>
    新闻中心
  </div>
</template>
<script>
import control_fontsize from  '../../common/js/control.js'
export default {
  name: 'Home',
  data(){
    return{
      
    }
  },
  components: {
  },
  created(){
    this.screenwidth = document.documentElement.clientWidth || document.body.clientWidth
  },
  mounted(){
    var _this = this
    control_fontsize()
    window.onresize = () => {
        return (() => {
            var w = document.documentElement.clientWidth || document.body.clientWidth;
            console.log(w)
            if(w>768){
                _this.$refs.menuList.style = "display:none"
                _this.$refs.midmenu.style = "display:block"
            }
            if(w<768){
                //超小屏幕，手机
                _this.$refs.menuList.style = "display:inline-block"
                _this.$refs.midmenu.style = "display:none"
                _this.screenwidth = w
            }
      })()
    }
  },
  methods:{
      handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
  }
}
</script>
<style lang="stylus" scoped>
.header
  .menu
    border 1px solid red
    @media screen and (max-width:768px)
      display none
</style>
