<template>
  <div class="connect_us container-fluid">
    <div class="row banner">
        <img class="img" v-lazy="this.banner.image" alt="">
        <BannerTitle
            class="banner_title"
            :title_zn="this.banner.title"
            :title_en="this.banner.title_en"
        ></BannerTitle>
    </div>
    <div class="option_pc">
      <OptionBox
        :cur_address = "this.cur_address"
      >
        <div class="option1">
          联系我们
        </div>
      </OptionBox>
    </div>
    <div class="option_mobile">
      <span class="option2">联系我们</span>
    </div>
    <div class="content container-fluid">
      <div class="row row1">
        <div class="row1_left">
          <ul>
            <li class="title">
              <div class="single_row">
                浙江兴合集团有限公司
              </div>
            </li>
            <li >
              <div class="single_row">
                <img class="icon1" src="../../assets/33.png" alt="">
                <span class="text1">电<span class="kongge"></span>话：0571-8703 2510</span>
              </div>
            </li>
            <li >
              <div class="single_row">
                <img class="icon1" src="../../assets/36.png" alt="">
                <span class="text1">传<span class="kongge"></span>真：0571-8701 4212</span>
              </div>
            </li>
            <li >
              <div class="single_row">
                <img class="icon1" src="../../assets/34.png" alt="">
                <span class="text1">电子邮箱：xinghegroup@zjcoop.com</span>
              </div>
            </li>
            <li >
              <div class="single_row">
                <img class="icon1" src="../../assets/35.png" alt="">
                <span class="text1">地<span class="kongge"></span>址：浙江省杭州市延安路312号</span>
              </div>
            </li>
            <li >
              <div class="single_row">
                <span class="text1">扫一扫，关注我们</span>
                <img class="erweima" src="../../assets/group_erweima.jpg" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div class="row1_right">
          <img class="map" src="../../assets/group_map.png" alt="">
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
      banner:"",//背景图
    }
  },
  components:{
    OptionBox,
    BannerTitle
  },
  mounted(){
    this.getBanner("lxwm")
  },
  methods:{
    getBanner(name){
        this.axios.post(
            "api/banner/zlmbanner",
            `name=${name}`
        ).then(res=>{
            if(res.data.code == 1){
              this.banner = res.data.data
            }else if(res.data.code == 210){
              console.log("暂无数据")
            }
        })
    }
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
    @media screen and (max-width:768px)
        margin-top 5rem
        height 20rem
    @media screen and (min-width:769px) and (max-width:992px)
        margin-top 6.5rem
        height 20rem
    img
      width 100%
      @media screen and (max-width:768px)
        height 20rem
    .banner_title
      z-index 10
      position absolute
      top 44%
      left 12.6%
      @media screen and (max-width:768px)
        left 10.6%
        top 31%
  .option_pc
    @media screen and (max-width:768px)
      display none
    .option1
      color #1A649F
      margin 0 auto
      width 12.5rem
      font-family MicrosoftYaHei
      font-weight bold
      font-size 1.2rem
      line-height 1.5rem
      border-bottom 3px solid #1A649F
      padding-bottom 14px
      @media screen and (min-width:993px) and (max-width:1680px)
          width 10rem
      @media screen and (min-width:769px) and (max-width:992px)
          width 8rem
  .option_mobile
    @media screen and (min-width:769px)
      display none
    width 100%
    height 4.5rem
    background #F2F2F2
    text-align left
    .option2
      color #1A649F
      font-family MicrosoftYaHei
      font-weight Regular
      font-size 1.8rem
      line-height 4.5rem
      padding-left 4%
  .content
    margin 100px auto
    padding 0
    @media screen and (max-width:768px)
      margin 2.2rem 0
    .row1
      margin 0
      .row1_left
        padding 0
        margin-left 10.7%
        margin-right 2%
        @media screen and (max-width:768px)
          margin-left 1.45rem
        ul
          list-style none
          padding 0 0
          margin 0
          li
            line-height 2rem
            text-align left
            .single_row
              @media screen and (max-width:768px)
                font-size 1.9rem
                line-height 3rem
              .kongge
                padding-right 2rem
                @media screen and (max-width:768px)
                  padding-right 3.5rem
              .text1
                font-weight Regular
                font-family MicrosoftYaHei
                line-height 2.5rem
                vertical-align middle
                word-break break-all
                @media screen and (max-width:768px)
                  font-size 1.7rem
                  vertical-align middle
                  line-height 3.5rem
              .icon1
                width 25px
                margin-right 10px
              .erweima
                height 120px
                width 120px
                margin-left 22px
                @media screen and (max-width:768px)
                  width 24vw
                  height 24vw
            &:nth-child(6n+0)
              margin-top 54px
          .title
              color #333333
              font-weight bold
              font-family MicrosoftYaHei
              @media screen and (max-width:768px)
                font-size 1.9rem
                line-height 3.5rem
      .row1_right
        padding 0
        width 50%
        max-width 960px
        @media screen and (max-width:1000px)
          width 40%
        @media screen and (max-width:768px)
          width 92.5%
          margin-left 4%
          margin-top 3.45rem
        .map
          width 100%
          @media screen and (min-width:768px)
            height 100%
</style>
