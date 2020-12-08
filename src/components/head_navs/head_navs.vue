<template>
    <div class="nav row"
        ref = "nav"
        @mouseenter="changecolor"
    >
        <div 
            class="nav_left col-7 col-sm-6 col-md-6 col-lg-3" 
            >
            这是放logo的位置
        </div>
         <div 
            class="col-5 col-sm-6 col-md-6 col-lg-2 nav_right mid_screen1"
        >
            <ul class="list1">
                <li><span class="oa"></span></li>
                <li><span class="search"></span></li>
                <li @click="use_rightnav">按钮</li>
            </ul>
        </div>
        <div class="col-md-12 col-lg-7 nav_mid" ref="midmenu">
            <el-menu
                :default-active="activeIndex1"
                mode="horizontal"
                class="el_menu"
                @select="handleSelect"
                :background-color="this.color"
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
            class="col-5 col-sm-6 col-md-12 col-lg-2 nav_right mid_screen2"
        >
            <ul class="list1">
                <li><span class="oa"></span></li>
                <li><span class="search"></span></li>
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
import '../../common/js/control.js'
import { mapState,mapMutations } from "vuex";
export default {
    data() {
      return {
        activeIndex1: this.$store.state.activeIndex,
        screenwidth:'',
        isCollapse: true,
        right_navshow:false,//控制右边导航显示
        click_count:0,//控制点击次数
        color:"transparent"
      };
    },
    computed:{
        ...mapState(["activeIndex"])
    },
    created(){
        this.screenwidth = document.documentElement.clientWidth || document.body.clientWidth
    },
    mounted(){
        window.addEventListener('scroll', this.scrollToTop)
    },
    methods:{
        ...mapMutations(["setActiveIndex","setchildActiveIndex"]),
        handleSelect(key, keyPath) {
            if(keyPath[0]=="1"){
                console.log("我是首页")
                this.$router.push({path:"/main_page"})
                this.setActiveIndex("1")
            }
            if(keyPath[0]=="2"){
                if(key == "2-1"){
                    console.log("集团概况")
                    this.$router.push({path:"/group_intro"})
                    this.setActiveIndex('2-1')
                    this.setchildActiveIndex("1")
                }
                if(key == "2-2"){
                    console.log("组织架构")
                    this.$router.push({path:"/group_framework"})
                    this.setActiveIndex('2-2')
                    this.setchildActiveIndex("2")
                }
                if(key == "2-3"){
                    console.log("使命愿景")
                    this.$router.push({path:"/group_mission"})
                    this.setActiveIndex('2-3')
                    this.setchildActiveIndex("3")
                }
                if(key == "2-4"){
                    console.log("成员企业")
                    this.$router.push({path:"/group_menber"})
                    this.setActiveIndex('2-4')
                    this.setchildActiveIndex("4")
                }
                if(key == "2-5"){
                    console.log("集团荣誉")
                    this.$router.push({path:"/group_honor"})
                    this.setActiveIndex('2-5')
                    this.setchildActiveIndex("5")
                }
            }
            if(keyPath[0]=="3"){
                if(key == "3-1"){
                    console.log("集团新闻")
                    this.$router.push({path:"/news_group"})
                    this.setActiveIndex('3-1')
                    this.setchildActiveIndex("1")
                }
                if(key == "3-2"){
                    console.log("成员企业新闻")
                    this.$router.push({path:"/news_menber"})
                    this.setActiveIndex('3-2')
                    this.setchildActiveIndex("2")
                }
                if(key == "3-3"){
                    console.log("通知广告")
                    this.$router.push({path:"/news_notice"})
                    this.setActiveIndex('3-3')
                    this.setchildActiveIndex("3")
                }
            }
            if(keyPath[0]=="4"){
                if(key == "4-1"){
                    console.log("内贸")
                    this.$router.push({path:"/business_neimao"})
                    this.setActiveIndex('4-1')
                    this.setchildActiveIndex("1")
                }
                if(key == "4-2"){
                    console.log("外贸")
                    this.$router.push({path:"/business_waimao"})
                    this.setActiveIndex('4-1')
                    this.setchildActiveIndex("2")
                }
                if(key == "4-3"){
                    console.log("房地产")
                    this.$router.push({path:"/business_building"})
                    this.setActiveIndex('4-3')
                    this.setchildActiveIndex("3")
                }
                if(key == "4-4"){
                    this.$router.push({path:"/business_finance"})
                    this.setActiveIndex('4-4')
                    this.setchildActiveIndex("4")
                }
                if(key == "4-5"){
                    console.log("农业服务")
                    this.$router.push({path:"/business_agriculture"})
                    this.setActiveIndex('4-5')
                    this.setchildActiveIndex("5")
                }
            }
            if(keyPath[0]=="5"){
                if(key == "5-1"){
                    console.log("党建动态")
                    this.$router.push({path:"/party_news"})
                    this.setActiveIndex('5-1')
                    this.setchildActiveIndex("1")
                }
                if(key == "5-2"){
                    console.log("党章党规")
                    this.$router.push({path:"/party_danggui"})
                    this.setActiveIndex('5-2')
                    this.setchildActiveIndex("2")
                }
                if(key == "5-3"){
                    console.log("学习园地")
                    this.$router.push({path:"/party_yuandi"})
                    this.setActiveIndex('5-3')
                    this.setchildActiveIndex("3")
                }
                if(key == "5-4"){
                    console.log("文件通知")
                    this.$router.push({path:"/party_notify"})
                    this.setActiveIndex('5-4')
                    this.setchildActiveIndex("4")
                }
            }
            if(keyPath[0]=="6"){
                if(key == "6-1"){
                    console.log("人才理念")
                    this.$router.push({path:"/talent_concept"})
                    this.setActiveIndex('6-1')
                    this.setchildActiveIndex("1")
                }
                if(key == "6-2"){
                    console.log("人才招聘")
                    this.$router.push({path:"/talent_recruitment_notice"})
                    this.setActiveIndex('6-2')
                    this.setchildActiveIndex("2")
                }
            }
             if(keyPath[0]=="7"){
               this.$router.push({path:"/connect_us"})
               console.log("联系我们")
               this.setActiveIndex('7')
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
        },
        changecolor(){
            this.$refs.nav.style.opacity = "1",
            this.$nextTick(()=>{
                this.color = '#28436E'
            })
        },
        scrollToTop() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop%200 == 0 && scrollTop>0){
                this.$refs.nav.style.opacity = "0.6",
                this.$nextTick(()=>{
                    this.color = "transparent"
                })
            }else{
                return
            }
        }
    },
    watch:{
        activeIndex(newName, oldName){ 
            this.activeIndex1 = newName
            // console.log("activeIndex1>>>newval",newName)
            // console.log("activeIndex1>>>oldval",oldName)
        }
    }
}
</script>
<style lang="stylus">
.el-menu--collapse.el-menu .el-submenu,.el-menu--popup
    min-width 6rem
    text-align center
.el-menu-vertical-demo:not(.el-menu--collapse) 
    width 10rem
</style>
<style lang="stylus" scoped>
//修改顶部导航样式
/deep/.el-menu--horizontal
            border-bottom none
            .el-submenu
                font-size 1rem
                .el-submenu__title
                    font-size 1rem
                    height 3rem
                    line-height 3rem
            .el-submenu__icon-arrow,.el-icon-arrow-down
                position absolute
                right 45px
                top 50px
                @media screen and (min-width:768px) and (max-width:1200px)
                    top 35px
                font-weight 500
                color #FFFFFF
/deep/.el-menu--horizontal>.el-submenu.is-active .el-submenu__title
            border-bottom transparent!important
            border-bottom-color transparent!important
/deep/.el-menu--horizontal>.is-active
            border-bottom transparent!important
            border-top 2px solid #FFFFFF
.nav
    width 100%
    font-size 1rem
    background #28436E
    opacity 0.6
    // background transparent
    line-height 3rem
    padding-right 0
    padding-top 2px
    margin 0
    @media screen and (max-width:768px)
        border-bottom 1px solid #FFFFFF
    .nav_left 
        color #fff
        line-height 3rem
        padding 0
    .nav_mid
        padding 0
        @media screen and (max-width:768px)
            display none
        @media screen and (min-width:768px) and (max-width:850px)
            padding 0 50px
        @media screen and (min-width:850px) and (max-width:992px)
            padding 0 100px
        .el-menu-item
            font-size 1rem
            line-height 3rem
            height 3rem
            @media screen and (min-width:768px) and (max-width:992px)
                height 4rem
    .nav_right
        padding 0 0
        @media screen and (min-width:992px)
            padding-left 3rem
        ul
            list-style none
            padding 0 0
            display flex
            margin-bottom 0
            &>li
                flex 1
                color #fff
                line-height 3rem
                @media screen and (max-width:768px)
                    border-left 1px solid #FFFFFF
                .oa
                    display block
                    width 3.5rem
                    height 2rem
                    margin-top 1.2rem
                    background url("../../assets/2@2x.png")
                    background-size 100%
                    @media screen and (max-width:768px)
                        margin-top 0.6rem
                        margin-left 1rem
                        width 2rem
                        background-size 200%
                        background-position -2.3rem
                    background-repeat no-repeat
                .search
                    display block
                    width 1rem
                    height 2rem
                    margin-top 1.2rem
                    margin-left 1rem
                    background url("../../assets/3@2x.png")
                    background-size 100%
                    // @media screen and (max-width:768px)
                    //     background-position -2.3rem
                    background-repeat no-repeat
            li:nth-child(3)
                @media screen and (min-width:768px)
                    display none
    .mid_screen1
            padding-left 200px
            padding-right 100px
            @meida screen and (man-width:850px)
                padding-left 0
            @media screen and (min-width:992px)
                display none
            @media screen and (max-width:768px)
                display none
    .mid_screen2
        @media screen and (min-width:768px) and (max-width:992px)
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