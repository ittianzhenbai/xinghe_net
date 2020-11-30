<template>
    <div class="nav container-fluid">
        <div 
            class="nav_left col-7 col-sm-6 col-lg-3" 
            >
            这是放logo的位置
        </div>
        <div class="col-md-12 col-lg-7 nav_mid" ref="midmenu">
            <el-menu
                :default-active="activeIndex2"
                mode="horizontal"
                class="el_menu"
                @select="handleSelect"
                background-color="#28436E"
                text-color="#fff"
                active-text-color="#fff">
                <el-menu-item index="1">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">走进兴合</template>
                    <el-menu-item index="2-1">集团概况</el-menu-item>
                    <el-menu-item index="2-2">组织架构</el-menu-item>
                    <el-menu-item index="2-3">使命愿景</el-menu-item>
                    <el-menu-item index="2-4">成员企业</el-menu-item>
                    <el-menu-item index="2-5">集团荣誉</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">新闻中心</template>
                    <el-menu-item index="3-1">集团新闻</el-menu-item>
                    <el-menu-item index="3-2">成员企业新闻</el-menu-item>
                    <el-menu-item index="3-3">通知公告</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">主营业务</template>
                    <el-menu-item index="4-1">内贸</el-menu-item>
                    <el-menu-item index="4-2">外贸</el-menu-item>
                    <el-menu-item index="4-3">房地产</el-menu-item>
                    <el-menu-item index="4-4">金融投资</el-menu-item>
                    <el-menu-item index="4-5">农业服务</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">党建园地</template>
                    <el-menu-item index="5-1">党建动态</el-menu-item>
                    <el-menu-item index="5-2">党章党规</el-menu-item>
                    <el-menu-item index="5-3">学习园地</el-menu-item>
                    <el-menu-item index="5-4">文件通知</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">人才招聘</template>
                    <el-menu-item index="6-1">人才理念</el-menu-item>
                    <el-menu-item index="6-2">人才招聘</el-menu-item>
                </el-submenu>
                <el-menu-item index="7">联系我们</el-menu-item>
            </el-menu>
        </div>
        <div 
            class="col-5 col-sm-6 col-md-12 col-lg-2 nav_right"
        >
            <ul class="list1">
                <li>OA</li>
                <li>企业</li>
                <li @click="use_rightnav">按钮</li>
            </ul>
        </div>
        <div 
            class="left_nav col-12" 
            v-if="this.right_navshow == true"
        >
            <el-menu
            default-active="2"
            class="el-menu-collapse-list"
            @select="handleSelect"
            background-color="#223D6B"
            text-color="#fff"
            active-text-color="#FFFFFF">
            <el-menu-item index="1">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">走进兴合</template>
                    <el-menu-item index="2-1">集团概况</el-menu-item>
                    <el-menu-item index="2-2">组织架构</el-menu-item>
                    <el-menu-item index="2-3">使命愿景</el-menu-item>
                    <el-menu-item index="2-4">成员企业</el-menu-item>
                    <el-menu-item index="2-5">集团荣誉</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">新闻中心</template>
                    <el-menu-item index="3-1">集团新闻</el-menu-item>
                    <el-menu-item index="3-2">成员企业新闻</el-menu-item>
                    <el-menu-item index="3-3">通知公告</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">主营业务</template>
                    <el-menu-item index="4-1">内贸</el-menu-item>
                    <el-menu-item index="4-2">外贸</el-menu-item>
                    <el-menu-item index="4-3">房地产</el-menu-item>
                    <el-menu-item index="4-4">金融投资</el-menu-item>
                    <el-menu-item index="4-5">农业服务</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">党建园地</template>
                    <el-menu-item index="5-1">党建动态</el-menu-item>
                    <el-menu-item index="5-2">党章党规</el-menu-item>
                    <el-menu-item index="5-3">学习园地</el-menu-item>
                    <el-menu-item index="5-4">文件通知</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">人才招聘</template>
                    <el-menu-item index="6-1">人才理念</el-menu-item>
                    <el-menu-item index="6-2">人才招聘</el-menu-item>
                </el-submenu>
                <el-menu-item index="7">联系我们</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
import control_fontsize from  '../../common/js/control.js'
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        screenwidth:'',
        isCollapse: true,
        right_navshow:false,//控制右边导航显示
        click_count:0,//控制点击次数
      };
    },
    created(){
        this.screenwidth = document.documentElement.clientWidth || document.body.clientWidth
    },
    mounted(){
        control_fontsize()
    },
    methods:{
        handleSelect(key, keyPath) {
            if(keyPath[0]=="1"){
                console.log("我是首页")
            }
            if(keyPath[0]=="2"){
                if(key == "2-1"){
                    console.log("集团概况")
                }
                if(key == "2-2"){
                    console.log("组织架构")
                }
                if(key == "2-3"){
                    console.log("使命愿景")
                }
                if(key == "2-4"){
                    console.log("成员企业")
                }
                if(key == "2-5"){
                    console.log("集团荣誉")
                }
            }
            if(keyPath[0]=="3"){
                if(key == "3-1"){
                    console.log("集团新闻")
                }
                if(key == "3-2"){
                    console.log("成员企业新闻")
                }
                if(key == "3-3"){
                    console.log("通知广告")
                }
            }
            if(keyPath[0]=="4"){
                if(key == "4-1"){
                    console.log("内贸")
                }
                if(key == "4-2"){
                    console.log("外贸")
                }
                if(key == "4-3"){
                    console.log("房地产")
                }
                if(key == "4-4"){
                    console.log("金融投资")
                }
                if(key == "4-5"){
                    console.log("农业服务")
                }
            }
            if(keyPath[0]=="5"){
                if(key == "5-1"){
                    console.log("党建动态")
                }
                if(key == "5-2"){
                    console.log("党章党规")
                }
                if(key == "5-3"){
                    console.log("学习园地")
                }
                if(key == "5-4"){
                    console.log("文件通知")
                }
            }
            if(keyPath[0]=="6"){
                this.$router.push({path:"/talent_recruitment"})
                if(key == "6-1"){
                    console.log("人才理念")
                }
                if(key == "6-2"){
                    console.log("人才招聘")
                }
            }
             if(keyPath[0]=="7"){
               this.$router.push({path:"/connect_us"})
               console.log("联系我们")
            }
        },
        use_rightnav(){
            this.click_count++
            if(this.click_count%2 == 1){
                this.right_navshow = true
            }
            if(this.click_count%2 == 0){
                this.right_navshow = false
            }
        }
    }
}
</script>
<style lang="stylus">
.el-menu--collapse.el-menu .el-submenu,.el-menu--popup
    min-width 105px
    text-align center
.el-menu-vertical-demo:not(.el-menu--collapse) 
    width 200px
</style>
<style lang="stylus" scoped>
//修改顶部导航样式
/deep/.el-menu--horizontal
            border-bottom none
            .el-submenu
                font-size 1rem
                .el-submenu__title
                    font-size 1rem
                    height 4rem
                    line-height 4rem
            .el-submenu__icon-arrow,.el-icon-arrow-down
                position absolute
                right 45px
                top 50px
/deep/.el-menu--horizontal>.el-submenu.is-active .el-submenu__title
            border-bottom transparent!important
            border-bottom-color transparent!important
/deep/.el-menu--horizontal>.is-active
            border-bottom transparent!important
            border-top 2px solid #FFFFFF
.nav
    font-size 1rem
    background #28436E
    line-height 3rem
    padding-right 0
    padding-top 2px
    @media screen and (max-width:768px)
        border-bottom 1px solid #FFFFFF
    .nav_left 
        color #fff
        line-height 4rem
    .nav_mid
        @media screen and (max-width:768px)
            display none
        .el-menu-item
            font-size 1rem
            line-height 4rem
            height 4rem
        .openitem
            border 1px solid red
    .nav_right
        padding 0 0
        @media screen and (min-width:998px)
            padding-left 10rem
        ul
            list-style none
            padding 0 0
            display flex
            margin-bottom 0
            &>li
                flex 1
                color #fff
                line-height 4rem
                @media screen and (max-width:768px)
                    border-left 1px solid #FFFFFF
            li:nth-child(3)
                @media screen and (min-width:768px)
                    display none
    .left_nav //手机端侧边导航
        padding 0 0 
        .el-menu-collapse-list
            width 100%
            text-align left
            list-style none
            padding 0 0
            border-right none
</style>