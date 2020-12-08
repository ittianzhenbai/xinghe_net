<template>
  <div class="container-fluid news_center">
      <div class="row banner">
        <img src="../../assets/banner_news.png" alt="">
        <BannerTitle
          class="banner_title"
          :title_zn="title_zn"
          :title_en="title_en"
        ></BannerTitle>
      </div>
      <div class="navigation_pc">
            <OptionBox
                :cur_address = "this.cur_address"
            >
                <ul class="options">
                    <li 
                        v-for="(item,index) in this.optionsort"
                        :key="index"
                        class="item"
                        @click="jump_router(index)"
                        :class="{ active: content_show == index }"
                    >
                        {{item.title}}
                    </li>
                </ul>
            </OptionBox>
        </div>
        <div class="navigation_mobile">
            <OptionBoxMobile
                :cur_address = "this.cur_address"
            >
            <div class="child_nav">
                <el-menu
                    class="el-menu-collapse-list"
                    @select="handleSelect"
                    text-color="#FFFFFF"
                    background-color="#FFFFFF"
                    active-text-color="#333">
                    <el-submenu index="1">
                        <template slot="title" class="title">企业新闻</template>
                        <el-menu-item 
                            v-for="(item,index) in this.optionsort"
                            :key="index"
                            index='1'
                        >
                            {{item.title}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
            </OptionBoxMobile>
        </div>
        <div class="list_content">
            <router-view></router-view>
        </div>
  </div>
</template>
<script>
import OptionBox from '@/components/option_box/option_box.vue'
import OptionBoxMobile from '@/components/option_box_mobile/option_box_mobile.vue'
import BannerTitle from '@/components/banner_title/banner_title.vue'
export default {
    data(){
        return{
            cur_address:"新闻中心",
            content_show:1,
            title_zn:"新闻中心",
            title_en:"NEWS CEMTER",
            optionsort:""
        }
    },
    components:{
        OptionBox,
        OptionBoxMobile,
        BannerTitle
    },
    mounted(){
        this.getNewsCategroy()
    },
    methods:{
        getNewsCategroy(){
            this.axios.get(
                "api/news/categroy"
            ).then(res=>{
                if(res.data.code == 1){
                    // console.log(res)
                    this.optionsort = res.data.data
                }
            })
        },
        handleSelect(key, keyPath) {
            console.log(key ,keyPath)
            this.jump_router(key)
        },
        jump_router(item){
            this.content_show = item
            console.log(item)
            switch(item){
                case 0:
                    console.log(item)
                    this.$router.push({path:"/news_group"})
                    break;
                case 1:
                    this.$router.push({path:"/news_menber"})
                    break;
                case 2:
                    this.$router.push({path:"/news_notice"})
                    break;
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.news_center
  border 1px solid red
  padding 0
  .banner
    width 100%//这里写100%是为了继承上一层的宽度
    margin 0
    position relative
    img
        width 100%
    .banner_title
        z-index 10
        position absolute
        top 44%
        left 12.6%
  .navigation_pc
      width 100%
      @media screen and (max-width:768px)
           display none
      .options
          list-style none
          padding 0 0
          margin-bottom 0
          &>li
              display inline-block
              margin-right 3rem
              width 7rem
              cursor pointer
              color #000000
              text-align center
              &.active
                  border-bottom 2px solid #79A2C5
                  color #79A2C5
  .navigation_mobile
      @media screen and (min-width 768px)
          display none
      .child_nav
          text-align left
          padding 0 0
          .title
              color #FFFFFF
    .list_content
        border 1px solid #79A2C5
</style>
