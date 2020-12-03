<template>
  <div class="container-fluid news_center">
      <div class="row banner">
        <img src="../../assets/1.png" alt="">
      </div>
      <div class="navigation_pc">
            <OptionBox
                :cur_address = "this.cur_address"
            >
                <ul class="options">
                    <li 
                        class="item"
                        @click="jump_router('1')"
                        :class="{ active: content_show == 1 }"
                    >
                        集团新闻
                    </li>
                     <li 
                        class="item"
                        @click="jump_router('2')"
                        :class="{ active: content_show == 2 }"
                    >
                        成员企业新闻
                    </li>
                    <li 
                        class="item"
                        @click="jump_router('3')"
                        :class="{ active: content_show == 3 }"
                    >
                        通知公告
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
                        <el-menu-item index="1">集团新闻</el-menu-item>
                        <el-menu-item index="2">成员企业新闻</el-menu-item>
                        <el-menu-item index="">通知公告</el-menu-item>
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
export default {
    data(){
        return{
            cur_address:"新闻中心",
            content_show:1,
        }
    },
    components:{
        OptionBox,
        OptionBoxMobile
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key ,keyPath)
            this.jump_router(key)
        },
        jump_router(item){
            this.content_show = item
            switch(item){
                case "1":
                    console.log(item)
                    this.$router.push({path:"/news_group"})
                    break;
                case "2":
                    this.$router.push({path:"/news_menber"})
                    break;
                case "3":
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
    img
      width 100%
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
