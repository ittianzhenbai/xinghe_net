<template>
    <div class="nav row"
        ref = "nav"
        @mouseenter="changecolor"
    >
        <div 
            :class="this.class1"
            >
            <span @click="goindex" class="logo_mobile"></span>
            <img class="logo" @click="goindex" src="../../assets/32.png" alt="">
        </div>
         <div 
            :class="this.class2"
        >
            <ul class="list1">
                <li><span class="oa" @click="gooa"></span></li>
                <li><span class="search" @click="search"></span></li>
            </ul>
        </div>
        <div :class="this.class3" ref="midmenu">
            <el-menu
                :default-active="activeIndex1"
                mode="horizontal"
                class="el_menu"
                @select="handleSelect"
                :open ="handleOpen"
                :background-color="this.color"
                text-color="#fff"
                active-text-color="#FFFFFF">
                <el-menu-item index="1">首页</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">
                        <router-link to="/group_intro?from=title"> 走进兴合</router-link>
                    </template>
                    <el-menu-item index="2-1">集团概况</el-menu-item>
                    <el-menu-item index="2-2">组织架构</el-menu-item>
                    <el-menu-item index="2-3">使命愿景</el-menu-item>
                    <el-menu-item index="2-4">成员企业</el-menu-item>
                    <el-menu-item index="2-5">集团荣誉</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <router-link to="/news_group?from=title">新闻中心</router-link>
                    </template>
                    <el-menu-item index="3-1">集团新闻</el-menu-item>
                    <el-menu-item index="3-2">成员企业新闻</el-menu-item>
                    <el-menu-item index="3-3">通知公告</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <router-link to="/business_neimao?from=title">主营业务</router-link>
                    </template>
                    <el-menu-item index="4-1">内贸</el-menu-item>
                    <el-menu-item index="4-2">外贸</el-menu-item>
                    <el-menu-item index="4-3">房地产</el-menu-item>
                    <el-menu-item index="4-4">金融投资</el-menu-item>
                    <el-menu-item index="4-5">农业服务</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <router-link to="/party_news?from=title">党建园地</router-link>
                    </template>
                    <el-menu-item index="5-1">党建动态</el-menu-item>
                    <el-menu-item index="5-2">党章党规</el-menu-item>
                    <el-menu-item index="5-3">学习园地</el-menu-item>
                    <el-menu-item index="5-4">文件通知</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <router-link to="/talent_concept?from=title">人才招聘</router-link>
                    </template>
                    <el-menu-item index="6-1">人才理念</el-menu-item>
                    <el-menu-item index="6-2">人才招聘</el-menu-item>
                </el-submenu>
                <el-menu-item index="7">联系我们</el-menu-item>
            </el-menu>
        </div>
        <div 
            class="col-5 col-sm-6 col-md-6 col-lg-2 nav_right mid_screen2"
        >
            <ul class="list1">
                <li><span class="oa" @click="gooa"></span></li>
                <li><span class="search" @click="search"></span></li>
                <li @click="use_rightnav"><span class="anniu"></span></li>
            </ul>
        </div>
        <div 
            class="mobile_nav col-12" 
            v-if="this.right_navshow == true"
        >
            <el-menu
            default-active="2"
            class="el-menu-collapse-list"
            @select="handleSelect"
            background-color="#223D6B"
            text-color="#fff"
            :unique-opened = true
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
        <div class="search_box">
            <SearchBox ref="search"></SearchBox>
            <SearchBoxMobile ref="searchMobile"></SearchBoxMobile>
        </div>
    </div>
</template>
<script>
import '../../common/js/control.js'
import SearchBox from '@/components/search_box/search_box.vue'
import SearchBoxMobile from '@/components/search_box_mobile/search_box_mobile.vue'
import { mapState,mapMutations } from "vuex";
export default {
    data() {
      return {
        activeIndex1: this.$store.state.activeIndex,
        screenwidth:'',
        isCollapse: true,
        right_navshow:false,//控制右边导航显示
        click_count:0,//控制点击次数
        color:"#223D6B",
        class1:"nav_left col-7 col-sm-6 col-md-6 col-lg-3",//控制nav_left的样式
        class2:"col-5 col-sm-6 col-md-6 col-lg-2 nav_right mid_screen1",//控制中等屏幕下的右边导航按钮
        class3:"col-md-12 col-lg-7 nav_mid",//控制中部导航样式
      };
    },
    components:{
        SearchBox,
        SearchBoxMobile
    },
    computed:{
        ...mapState(["activeIndex","deviceFlag","curPage"])
    },
    created(){
    },
    mounted(){
        window.addEventListener('scroll', this.scrollToTop)
        this.$nextTick(()=>{
            if(this.curPage == "index"&&(this.deviceFlag == "pc"||this.deviceFlag=='mid_pc')){
                this.$refs.nav.style.opacity = "0.6",
                this.$nextTick(()=>{
                    this.color = "transparent"
                })
            }
        })
        if(this.deviceFlag == "mid_pc"){
            this.$nextTick(()=>{
                this.class1 = "nav_left col-7 col-sm-6 col-md-6"
                this.class2 = "col-5 col-sm-6 col-md-6 nav_right mid_screen1"
                this.class3 = "col-md-12 nav_mid"
            })
        }
    },
    destroyed(){
        // window.removeEventListener('scroll', this.scrollToTop);
    },
    methods:{
        ...mapMutations(["setActiveIndex","setchildActiveIndex"]),
        handleSelect(key, keyPath) {
            if(keyPath[0]=="1"){
                // console.log("我是首页")
                this.$router.push({path:"/main_page"})
                this.setActiveIndex("1")
                this.setchildActiveIndex("1")
            }
            if(keyPath[0]=="2"){
                if(key == "2-1"){
                    // console.log("集团概况")
                    this.$router.push({path:"/group_intro"})
                    this.setActiveIndex('2-1')
                    this.setchildActiveIndex("1")
                }
                if(key == "2-2"){
                    // console.log("组织架构")
                    this.$router.push({path:"/group_framework"})
                    this.setActiveIndex('2-2')
                    this.setchildActiveIndex("2")
                }
                if(key == "2-3"){
                    // console.log("使命愿景")
                    this.$router.push({path:"/group_mission"})
                    this.setActiveIndex('2-3')
                    this.setchildActiveIndex("3")
                }
                if(key == "2-4"){
                    // console.log("成员企业")
                    this.$router.push({path:"/group_menber"})
                    this.setActiveIndex('2-4')
                    this.setchildActiveIndex("4")
                }
                if(key == "2-5"){
                    // console.log("集团荣誉")
                    this.$router.push({path:"/group_honor"})
                    this.setActiveIndex('2-5')
                    this.setchildActiveIndex("5")
                }
            }
            if(keyPath[0]=="3"){
                if(key == "3-1"){
                    // console.log("集团新闻")
                    this.$router.push({path:"/news_group"})
                    this.setActiveIndex('3-1')
                    this.setchildActiveIndex("1")
                }
                if(key == "3-2"){
                    // console.log("成员企业新闻")
                    this.$router.push({path:"/news_menber"})
                    this.setActiveIndex('3-2')
                    this.setchildActiveIndex("2")
                }
                if(key == "3-3"){
                    // console.log("通知广告")
                    this.$router.push({path:"/news_notice"})
                    this.setActiveIndex('3-3')
                    this.setchildActiveIndex("3")
                }
            }
            if(keyPath[0]=="4"){
                if(key == "4-1"){
                    // console.log("内贸")
                    this.$router.push({path:"/business_neimao"})
                    this.setActiveIndex('4-1')
                    this.setchildActiveIndex("1")
                }
                if(key == "4-2"){
                    // console.log("外贸")
                    this.$router.push({path:"/business_waimao"})
                    this.setActiveIndex('4-1')
                    this.setchildActiveIndex("2")
                }
                if(key == "4-3"){
                    // console.log("房地产")
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
                    // console.log("农业服务")
                    this.$router.push({path:"/business_agriculture"})
                    this.setActiveIndex('4-5')
                    this.setchildActiveIndex("5")
                }
            }
            if(keyPath[0]=="5"){
                if(key == "5-1"){
                    // console.log("党建动态")
                    this.$router.push({path:"/party_news"})
                    this.setActiveIndex('5-1')
                    this.setchildActiveIndex("1")
                }
                if(key == "5-2"){
                    // console.log("党章党规")
                    this.$router.push({path:"/party_danggui"})
                    this.setActiveIndex('5-2')
                    this.setchildActiveIndex("2")
                }
                if(key == "5-3"){
                    // console.log("学习园地")
                    this.$router.push({path:"/party_yuandi"})
                    this.setActiveIndex('5-3')
                    this.setchildActiveIndex("3")
                }
                if(key == "5-4"){
                    // console.log("文件通知")
                    this.$router.push({path:"/party_notify"})
                    this.setActiveIndex('5-4')
                    this.setchildActiveIndex("4")
                }
            }
            if(keyPath[0]=="6"){
                if(key == "6-1"){
                    // console.log("人才理念")
                    this.$router.push({path:"/talent_concept"})
                    this.setActiveIndex('6-1')
                    this.setchildActiveIndex("1")
                }
                if(key == "6-2"){
                    // console.log("人才招聘")
                    this.$router.push({path:"/talent_recruitment_notice"})
                    this.setActiveIndex('6-2')
                    this.setchildActiveIndex("2")
                }
            }
             if(keyPath[0]=="7"){
               this.$router.push({path:"/connect_us"})
            //    console.log("联系我们")
               this.setActiveIndex('7')
            }
        },
        gonextfirst(item){
            console.log("跳到下级")
            if(item == "2-1"){
                // console.log("集团概况")
                this.$router.push({path:"/group_intro"})
                this.setActiveIndex('2-1')
                this.setchildActiveIndex("1")
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
        gooa(){
            window.open("https://oa.zjxinghe.com/")
        },
        search(){
           if(this.deviceFlag == "mobile"){
               //移动端显示
               this.$refs.searchMobile.alert_box = true
           }else{
               //pc端显示
               this.$refs.search.alert_box = true
           }
        },
        changecolor(){
            if((this.deviceFlag == "pc"||this.deviceFlag=='mid_pc')&&this.curPage == "index"){
                this.$refs.nav.style.opacity = "1",
                this.$nextTick(()=>{
                    this.color = '#223D6B'
                })
            }  
        },
        handleOpen(key, keyPath){
            console.log(key)
        },
        opensubmenu(index,indexPath){
            console.log(index,indexPath)
        },
        goindex(){
            this.$router.push({
                path:"/main_page"
            })
        },
        scrollToTop() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop>0 &&(this.deviceFlag == "pc"||this.deviceFlag=='mid_pc') &&this.curPage == "index"){
                this.$refs.nav.style.opacity = "0.6",
                this.$nextTick(()=>{
                    this.color = "transparent"
                })
                this.$refs.search.alert_box = false
            }else{
                //其他页面也要处理
                this.$refs.search.alert_box = false
            }
        }
    },
    watch:{
        activeIndex(newName, oldName){ 
            // console.log(newName)
            this.activeIndex1 = newName
            if(this.deviceFlag == "mobile"&& this.right_navshow == true){
                this.right_navshow = false          
            }
        },
        curPage(newVal){
            this.$nextTick(()=>{
                if(this.curPage == "other"&&(this.deviceFlag == "pc"||this.deviceFlag=='mid_pc')){
                    this.$refs.nav.style.opacity = "1",
                    this.$nextTick(()=>{
                        this.color = "#223D6B"
                    })
                }
            })
        },
        deviceFlag(newVal){
            if(newVal == "mid_pc"){
                this.class1 = "nav_left col-7 col-sm-6 col-md-6"
                this.class2 = "col-5 col-sm-6 col-md-6 nav_right mid_screen1"
                this.class3 = "col-md-12 nav_mid"
            }else{
                this.class1 = "nav_left col-7 col-sm-6 col-md-6 col-lg-3",//控制nav_left的样式
                this.class2 = "col-5 col-sm-6 col-md-6 col-lg-2 nav_right mid_screen1",//控制中等屏幕下的右边导航按钮
                this.class3 = "col-md-12 col-lg-7 nav_mid"//控制中部导航样式
            }
        }
    }
}
</script>
<style lang="stylus">
.el-menu--collapse.el-menu .el-submenu,.el-menu--popup
    min-width 4rem
    text-align center
    color #ABABAB
    @media screen and (min-width:768px) and (max-width:992px)
        min-width 7rem
    @media screen and (min-width:996px) and (max-width:1024px)
        min-width 5rem
    @media screen and (min-width:1025px)
        min-width 6rem
.el-menu-vertical-demo:not(.el-menu--collapse) 
    width 10rem
</style>
<style lang="stylus" scoped>//修改顶部导航样式
.el-menu-item:hover //修改所有的导航子菜单的样式包括sub_menu的，下面单独覆盖sub_menu样式
    outline 0 !important 
    color #FFFFFF !important
    background transpent !important
.el-menu-item.is-active 
    color #FFFFFF !important
.el-menu-item 
    @media screen and (min-width:769px)
        color #ABABAB !important
        font-size 0.8rem !important
/deep/.el-menu--horizontal
            border-bottom none
            margin-top 1rem
            .el-menu-item:hover
                outline 0 !important
                background-color transparent !important
                font-weight 550 !important
                color #FFFFFF !important
                border-top 2px solid #FFFFFF
            .el-submenu
                font-size 1rem
                .el-submenu__title
                    font-size 1rem
                    height 2.92rem
                    line-height 1.8rem
                    @media screen and (min-width:769px) and (max-width:819px)
                        padding 0 15px
                    @media screen and (min-width:820px) and (max-width:849px)
                        padding 0 17px
                    @media screen and (min-width:850px) and (max-width:868px)
                        padding 0 16px
                    @media screen and (min-width:869px) and (max-width:889px)
                        padding 0 18px
                    @media screen and (min-width:890px) and (max-width:908px)
                        padding 0 20px
                    @media screen and (min-width:909px) and (max-width:937px)
                        padding 0 22px
                    @media screen and (min-width:938px) and (max-width:968px)
                        padding 0 25px
                    @media screen and (min-width:969px) and (max-width:999px)
                        padding 0 28px
                    @media screen and (min-width:1000px) and (max-width:1119px)
                        padding 0 7px
                    @media screen and (min-width:1120px) and (max-width:1380px)
                        padding 0 15px
                    a 
                        text-decoration none
                        color #FFFFFF
                        background-color transparent
                    .router-link-active 
                        text-decoration none
                .el-submenu__title:hover
                    outline 0 !important
                    background-color transparent !important
                    font-weight 550 !important
                    border-top 2px solid #FFFFFF
            .el-submenu__icon-arrow,.el-icon-arrow-down
                position absolute
                right 50px
                top 38px
                @media screen and (max-width:1380px)
                    right 38px
                @media screen and (min-width:768px) and (max-width:935px)
                    top 30px
                    right 45px
                @media screen and (min-width:936px) and (max-width:1000px)
                    top 30px
                    right 50px
                @media screen and (min-width:1000px) and (max-width:1200px)
                    top 33px
                    right 36px
                @media screen and (min-width:1200px) and (max-width:1600px)
                    top 35px
                    right 46px
                font-weight 500
                color #FFFFFF
/deep/.el-menu--horizontal>.el-submenu.is-active .el-submenu__title
            border-bottom transparent !important
            border-bottom-color transparent !important
            background-color transparent !important
/deep/.el-menu--horizontal>.is-active
            border-bottom transparent!important  
.nav
    width 100%
    font-size 1rem
    background #223D6B
    opacity 1
    line-height 4rem
    padding-right 0
    padding-top 2px
    margin 0
    @media screen and (max-width:768px)
        border-bottom 1px solid rgba(250,250,250,0.5)
        height 5rem
        background #223D6B
        opacity 1
    .nav_left 
        color #fff
        line-height 3rem
        padding 0
        @media screen and (max-width:768px)
            line-height 2rem
        .logo
            width 60%
            cursor pointer
            margin-top 0.75rem
            @media screen and (min-width:850px) and (max-width:992px)
                width 50%
            @media screen and (max-width:768px)
                display none
                margin-top 0.75rem
        .logo_mobile
            display inline-block
            height 3.5rem
            width 10rem
            line-height 5rem
            margin-top 0.5rem
            float left
            margin-left 2rem
            background url("../../assets/37.png")
            background-size 10rem 3.5rem
            text-align left
            @media screen and (min-width:769px)
                display none
    .nav_mid
        padding 0
        @media screen and (max-width:768px)
            display none
        @media screen and (min-width:768px) and (max-width:850px)
            padding 0 70px
        @media screen and (min-width:850px) and (max-width:999px)
            padding 0 100px
        .el-menu-item
            font-size 1rem
            line-height 2rem
            height 2rem
            color #FFFFFF !important
            font-size 1rem !important
            @media screen and (min-width:768px) and (max-width:850px)
                padding 0 15px
            @media screen and (min-width:850px) and (max-width:992px)
                height 3.2rem
                padding 0 18px
            @media screen and (min-width:993px) and (max-width:1380px)
                // height 4rem
                padding 0 8px
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
                line-height 2rem
                @media screen and (max-width:768px)
                    border-left 1px solid rgba(250,250,250,0.6)
                    line-height 5rem
                    height 4.8rem
                    text-align center
                .oa
                    display inline-block
                    cursor pointer
                    width 3.5rem
                    height 2rem
                    margin-top 1.5rem
                    background url("../../assets/2@2x.png")
                    background-size 100%
                    @media screen and (max-width:768px)
                        margin-top 2rem
                        width 2rem
                        height 1.05rem
                        background-size 200%
                        background-position -2.3rem
                    background-repeat no-repeat
                .search
                    display inline-block
                    cursor pointer
                    width 1rem
                    height 2rem
                    margin-top 1.5rem
                    background url("../../assets/3@2x.png")
                    background-size 100%
                    @media screen and (max-width:768px)
                       width 2rem
                       margin-top 1.5rem
                    background-repeat no-repeat
                .anniu
                    display inline-block
                    width 20px
                    height 17px
                    margin-top 1.2rem
                    background url("../../assets/40.png")
                    background-size 100%
                    @media screen and (max-width:768px)
                        margin-top 1.75rem
                    line-height 5rem
            li:nth-child(3)
                @media screen and (min-width:769px)
                    display none
    .mid_screen1
            padding-left 200px
            padding-right 100px
            @meida screen and (man-width:850px)
                padding-left 0
            @media screen and (min-width:1000px)
                display none
            @media screen and (max-width:768px)
                display none
    .mid_screen2
        @media screen and (min-width:769px) and (max-width:999px)
            display none
    .mobile_nav //手机端侧边导航
        padding 0 0 
        .el-menu-collapse-list
            width 100%
            text-align left
            list-style none
            padding 0 0
            border-right none
            border-top 1px solid rgba(250,250,250,0.5)
    .search_box
        position fixed
        right 2.7%
        top 4.2rem
        @media screen and (max-width:997px)
            top 8.28rem
            right 7rem
        @media screen and (min-width:998px) and (max-width:1200px)
            top 4.3rem
            right 2.7%
</style>