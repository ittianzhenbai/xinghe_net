<template>
  <div class="connect_us">
    <div>
      <OptionBox
        :cur_address = "this.cur_address"
      >
        <div class="option1">
          联系我们
        </div>
      </OptionBox>
    </div>
    <div class="content container-fluid">
      <div class="row">
        <div class="col-sm-5 col-md-5">
          <ul class="row">
            <li class="col-12 col-sm-12 col-md-12 title">
              浙江兴合集团有限公司
            </li>
            <li class="col-12 col-sm-12 col-md-12">
              <!-- <span class="icon1"></span> -->
              <i class="el-icon-phone-outline"></i>
              <span class="text1">电<span class="kongge"></span>话：0571-8703 2510</span>
            </li>
            <li class="col-12 col-sm-12 col-md-12">
              <!-- <span class="icon2"></span> -->
              <i class="el-icon-postcard"></i>
              <span class="text1">传<span class="kongge"></span>真：0571-8701 4212</span>
            </li>
            <li class="col-12 col-sm-12 col-md-12">
              <!-- <span class="icon3"></span> -->
              <i class="el-icon-message"></i>
              <span class="text1">电子邮箱：0571-8703 2510</span>
            </li>
            <li class="col-12 col-sm-12 col-md-12">
              <!-- <span class="icon4"></span> -->
              <i class="el-icon-location-outline"></i>
              <span class="text1">地<span class="kongge"></span>址：浙江省杭州市延安路315号</span>
            </li>
            <li class="col-12 col-sm-12 col-md-12">
              <span>扫一扫，关注我们</span>
            </li>
          </ul>
        </div>
        <div class="col-sm-9 col-md-7">
          <img class="map" src="../../assets/1.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OptionBox from '@/components/option_box/option_box.vue'
export default {
  data(){
    return{
      cur_address:"联系我们"
    }
  },
  components:{
    OptionBox
  },
  mounted(){
    // let _this = this;
    // window.onresize = () => {
    //   return (() => {
    //     var w = document.documentElement.clientWidth || document.body.clientWidth;
    //    _this.test = w
    //    if (w>900){
    //      document.documentElement.style.fontSize = '20px'
    //    }
    //    if(w<520){
    //      document.documentElement.style.fontSize = '10px'
    //    }
    //    if(w>520&&w<900){
    //      document.documentElement.style.fontSize = '60px'
    //    }
    //   })()
    // }
  }
}
</script>
<style lang="stylus" scoped>
.connect_us
  width 100%
  .option1
    color #558AB6
    margin 0 auto
    width 100px
    line-height 2rem
    border-bottom 2px solid #558AB6
  .content
    margin-top 3rem
    ul
      list-style none
      padding 0 0
      li
        line-height 2rem
        text-align left
        padding-left 10rem
        @media screen and (max-width:768px)
          padding-left 6rem  
        .kongge
          padding-right 2rem
        .text1
          padding-left 1rem
      .title
          color #333333
          font-weight bold
          font-family MicrosoftYaHei
    .map
      width 60%
      height 300px
</style>
