<template>
  <div class="connect_us container-fluid">
    <div class="row banner">
        <img class="img" src="../../assets/banner_connect.png" alt="">
        <BannerTitle
          class="banner_title"
          :title_zn="title_zn"
          :title_en="title_en"
        ></BannerTitle>
    </div>
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
      <div class="row row1">
        <div class="col-sm-5 col-md-5 col-lg-4 row1_left">
          <ul class="row">
            <li class="col-12 col-sm-12 col-md-12 title">
              浙江兴合集团有限公司
            </li>
            <li class="col-12 col-sm-12 col-md-12">
              <img class="icon1" src="../../assets/33.png" alt="">
              <span class="text1">电<span class="kongge"></span>话：0571-8703 2510</span>
            </li>
            <li class="col-12 col-sm-12 col-md-12">
              <img class="icon2" src="../../assets/36.png" alt="">
              <span class="text1">传<span class="kongge"></span>真：0571-8701 4212</span>
            </li>
            <li class="col-12 col-sm-12 col-md-12">
              <img class="icon3" src="../../assets/34.png" alt="">
              <span class="text1">电子邮箱：0571-8703 2510</span>
            </li>
            <li class="col-12 col-sm-12 col-md-12">
              <img class="icon4" src="../../assets/35.png" alt="">
              <span class="text1">地<span class="kongge"></span>址：浙江省杭州市延安路315号</span>
            </li>
            <li class="col-12 col-sm-12 col-md-12">
              <span>扫一扫，关注我们</span>
              <img class="erweima" src="../../assets/021.png" alt="">
            </li>
          </ul>
        </div>
        <div class="col-sm-9 col-md-7 col-lg-8 row1_right">
          <img class="map" src="../../assets/1.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OptionBox from '@/components/option_box/option_box.vue'
import BannerTitle from '@/components/banner_title/banner_title.vue'
export default {
  data(){
    return{
      cur_address:"联系我们",
      title_zn:"联系我们",
      title_en:"CONTACT US"
    }
  },
  components:{
    OptionBox,
    BannerTitle
  },
  mounted(){
  }
}
</script>
<style lang="stylus" scoped>
.connect_us
  // width 100%
  padding 0
  .banner
    width 100%
    margin 0
    position relative
    img
      width 100%
    .banner_title
      z-index 10
      position absolute
      top 44%
      left 12.6%
  .option1
    color #558AB6
    margin 0 auto
    width 100px
    line-height 2rem
    border-bottom 2px solid #558AB6
  .content
    margin 100px auto
    padding 0
    .row1
      margin 0
      .row1_left
        padding 0
        ul
          list-style none
          padding 0 0
          margin 0
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
            .icon1
              width 25px
              height 25px
            .icon2
              width 28px
              height 23px
            .icon3
              width 28px 
              height 20px
            .icon4
              width 22px
              height 29px
            .erweima
              height 120px
              width 120px
              margin-left 22px
            &:nth-child(6n+0)
              margin-top 54px
          .title
              color #333333
              font-weight bold
              font-family MicrosoftYaHei
      .row1_right
        padding 0
        .map
          width 60%
          height 100%
          float left
</style>
