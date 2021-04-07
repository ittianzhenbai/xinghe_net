<template>
    <div class="nav row"
        ref = "nav"
        @mouseenter="changecolor"
        @mouseleave="changecolor1"
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
                ref="menus"
                :default-active="activeIndex1"
                mode="horizontal"
                class="el_menu"
                @select="handleSelect"
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
                    <el-menu-item index="5-2">清廉兴合</el-menu-item>
                    <el-menu-item index="5-3">党章党规</el-menu-item>
                    <el-menu-item index="5-4">学习园地</el-menu-item>
                    <el-menu-item index="5-5">文件通知</el-menu-item>
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
                <el-submenu index="2" @mouseenter="changecolor">
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
                    <el-menu-item index="5-2">清廉兴合</el-menu-item>
                    <el-menu-item index="5-3">党章党规</el-menu-item>
                    <el-menu-item index="5-4">学习园地</el-menu-item>
                    <el-menu-item index="5-5">文件通知</el-menu-item>
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
        openstatus:"",//记录当前menu打开的状态
        status:0,//状态为1表示submenu 正在悬浮
        isenter:false//false 代表 鼠标已经不在nav上了
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
    updated(){
        //每次组件更新都需要重新获取一下dom
        this.openstatus = this.$refs.menus.openedMenus
    },
    mounted(){
        this.openstatus = this.$refs.menus.openedMenus
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
                this.class3 = " col-md-12 nav_mid"
            })
        }
    },
    destroyed(){
        this.isenter = false
    },
    methods:{
        ...mapMutations(["setActiveIndex","setchildActiveIndex"]),
        handleSelect(key, keyPath) {
            this.isenter = true
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
                    // console.log("清廉兴合")
                    this.$router.push({path:"/party_qlxinghe"})
                    this.setActiveIndex('5-2')
                    this.setchildActiveIndex("2")
                }
                if(key == "5-3"){
                    // console.log("党章党规")
                    this.$router.push({path:"/party_danggui"})
                    this.setActiveIndex('5-3')
                    this.setchildActiveIndex("3")
                }
                if(key == "5-4"){
                    // console.log("学习园地")
                    this.$router.push({path:"/party_yuandi"})
                    this.setActiveIndex('5-4')
                    this.setchildActiveIndex("4")
                }
                if(key == "5-5"){
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
            this.isenter = true
            if((this.deviceFlag == "pc"||this.deviceFlag=='mid_pc')&&this.curPage == "index"){
                this.$refs.nav.style.opacity = "1",
                this.$nextTick(()=>{
                    this.color = '#223D6B'
                })
            }  
        },
        changecolor1(){
            if((this.deviceFlag == "pc"||this.deviceFlag=='mid_pc')&&this.curPage == "index"){
                let self = this
                setTimeout(()=>{
                    if(self.status !==1){
                        self.$refs.nav.style.opacity = "0.6",
                        self.$nextTick(()=>{
                            self.color = '#223D6B'
                        })
                    }
                    self.isenter = false
                },100)
            }  
        },
        goindex(){
            this.$router.push({
                path:"/main_page"
            })
        },
        scrollToTop() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop>0 &&(this.deviceFlag == "pc"||this.deviceFlag=='mid_pc')){
                this.$refs.search.alert_box = false
            }
        }
    },
    watch:{
        activeIndex(newName, oldName){ 
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
        openstatus:{
            handler(newVal){
                this.status = newVal.length
                if(newVal.length == 0 && this.isenter == false){
                    this.changecolor1()
                }
            },
            deep:true
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
                if(newVal = "mobile"){
                    this.$refs.nav.style.opacity = "1",
                    this.$nextTick(()=>{
                        this.color = "#223D6B"
                    })
                }
            }
        }
    }
}
</script>
<style lang="stylus">
.el-menu--collapse.el-menu .el-submenu,.el-menu--popup
    min-width 6rem
    text-align center
    color #ABABAB
    bottom 5px
    @media screen and (min-width:768px) and (max-width:890px)
        min-width 5rem
    @media screen and (min-width:891px) and (max-width:930px)
        min-width 6rem
    @media screen and (min-width:931px) and (max-width:999px)
        min-width 6.5rem
    @media screen and (min-width:1000px) and (max-width:1024px)
        min-width 5rem
    @media screen and (min-width:1340px)
        min-width 7.5rem
.el-menu-vertical-demo:not(.el-menu--collapse) 
    width 10rem
</style>
<style lang="stylus" scoped>//修改顶部导航样式
.el-menu-item:hover //修改所有的导航子菜单的样式包括sub_menu的，下面单独覆盖sub_menu样式
    outline 0 !important 
    color #FFFFFF !important
    background-color transpent !important
.el-menu-item.is-active 
    color #FFFFFF !important
.el-menu-item 
    font-family MicrosoftYaHei !important
    // background-color transparent !important
    @media screen and (min-width:769px)
        color #ABABAB !important
        font-size 0.8rem !important
/deep/.el-menu--horizontal
            border-bottom none
            margin-top 1rem
            margin-bottom 0.2rem
            .el-menu-item:hover
                outline 0 !important
                background-color transparent !important
                font-weight Bold !important
                font-family MicrosoftYaHei
                -webkit-font-smoothing antialiased !important
                color #FFFFFF !important
                // border-top 2px solid #FFFFFF
                @media all and (-ms-high-contrast: none), (-ms-high-contrast: active)
                    font-weight 700 !important
            .el-submenu
                font-size 1rem
                font-family MicrosoftYaHei
                .el-submenu__title
                    font-size 1rem
                    height 4rem
                    line-height 2.80rem
                    padding-top 2px !important
                    background-color transparent !important
                    @media screen and (min-width:769px) and (max-width:775px)
                        padding 0 7px
                        line-height 2.7rem
                    @media screen and (min-width:775px) and (max-width:865px)
                        padding 0 9px
                        line-height 2.7rem
                    @media screen and (min-width:865px) and (max-width:887px)
                        padding 0 11px
                        line-height 2.7rem
                    @media screen and (min-width:887px) and (max-width:911px)
                        padding 0 13px
                        line-height 2.7rem
                    @media screen and (min-width:911px) and (max-width:927px)
                        padding 0 15px
                        line-height 2.7rem
                    @media screen and (min-width:927px) and (max-width:938px)
                        padding 0 17px
                        line-height 2.7rem
                    @media screen and (min-width:938px) and (max-width:969px)
                        padding 0 18px
                        line-height 2.7rem
                    @media screen and (min-width:969px) and (max-width:977px)
                        padding 0 20px
                        line-height 2.7rem
                    @media screen and (min-width:977px) and (max-width:987px)
                        padding 0 22px
                        line-height 2.7rem
                    @media screen and (min-width:987px) and (max-width:1010px)
                        padding 0 24px
                        line-height 2.7rem
                    @media screen and (min-width:1010px) and (max-width:1040px)
                        padding 0 2px
                        line-height 2.5rem
                    @media screen and (min-width:1040px) and (max-width:1074px)
                        padding 0 5px
                        line-height 2.5rem
                    @media screen and (min-width:1074px) and (max-width:1160px)
                        padding 0 7px
                        line-height 2.5rem
                    @media screen and (min-width:1160px) and (max-width:1209px)
                        padding 0 12px
                        line-height 2.5rem
                    @media screen and (min-width:1210px) and (max-width:1380px)
                        padding 0 15px
                        line-height 2.5rem
                    @media screen and (min-width:1380px) and (max-width:1414px)
                        padding 0 16px
                        line-height 2.6rem
                    @media screen and (min-width:1414px) and (max-width:1515px)
                        padding 0 18px
                        line-height 2.6rem
                    @media screen and (min-width:1515px) and (max-width:1548px)
                        padding 0 22px
                        line-height 2.6rem
                    @media screen and (min-width:1548px) and (max-width:1548px)
                        padding 0 24px
                        line-height 2.6rem
                    @media screen and (min-width:1548px) and (max-width:1620px)
                        padding 0 26px
                        line-height 2.7rem
                    @media screen and (min-width:1620px)
                        padding 0 30px
                    a 
                        text-decoration none
                        color #FFFFFF
                        background-color transparent
                    .router-link-active 
                        text-decoration none
                .el-submenu__title:hover
                    outline 0 !important
                    // background-color transparent !important
                    font-family MicrosoftYaHei
                    font-weight Bold !important
                    border-top 2px solid #FFFFFF
                    padding-top 0 !important
                    // font-smoothing antialiased !important
                    font-smoothing subpixel-antialiased
                    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active)
                        font-weight 700 !important
            .el-submenu__icon-arrow
                position absolute
                right 62px
                top 56px
                @media screen and (max-width:1380px)
                    right 38px
                @media screen and (min-width:769px) and (max-width:775px)
                    right 38px
                @media screen and (min-width:776px) and (max-width:917px)
                    right 42px
                @media screen and (min-width:918px) and (max-width:968px)
                    right 45px
                @media screen and (min-width:969px) and (max-width:991px)
                    right 48px
                @media screen and (min-width:992px) and (max-width:1010px)
                    right 52px
                @media screen and (min-width:1010px) and (max-width:1122px)
                    right 35px
                @media screen and (min-width:1123px) and (max-width:1200px)
                    right 43px
                @media screen and (min-width:1201px) and (max-width:1280px)
                    right 46px
                @media screen and (min-width:1281px) and (max-width:1379px)
                    right 48px
                @media screen and (min-width:1379px) and (max-width:1513px)
                    right 50px
                @media screen and (min-width:1513px) and (max-width:1600px)
                    right 55px
                &:before
                    content ("")
                    display block
                    width 12px
                    height 7px
                    background url("../../assets/icon_down.png")
                    background-size cover
                
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
        border-bottom 1px solid rgba(250,250,250,0.2)
        height 5rem
        background #223D6B
        opacity 1
    .nav_left 
        color #fff
        line-height 3.02rem
        padding 0
        @media screen and (max-width:768px)
            line-height 2rem
        .logo
            width 60%
            cursor pointer
            margin-top 1.5rem
            @media screen and (min-width:850px) and (max-width:992px)
                width 50%
            @media screen and (max-width:768px)
                display none
                margin-top 0.75rem
            @media screen and (min-width:1921px)
                max-width 285px
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
        @media screen and (min-width:850px) and (max-width:1010px)
            padding 0 100px
        .el-menu-item
            line-height 3.2rem
            @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) 
              line-height 3.2rem
            height 2rem
            color #FFFFFF !important
            font-size 1rem !important
            background-color transparent !important
            @media screen and (min-width:768px) and (max-width:850px)
                padding 0 15px
                height 3.2rem
                line-height 3.2rem
            @media screen and (min-width:850px) and (max-width:992px)
                height 3.2rem
                line-height 3.2rem
                padding 0 17px
            @media screen and (min-width:993px) and (max-width:999px)
                height 3.2rem
                line-height 3.2rem
                padding 0 8px
            @media screen and (min-width:1000px) and (max-width:1380px)
                height 3.2rem
                line-height 3rem
                padding 0 6px
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
                    border-left 1px solid rgba(250,250,250,0.2)
                    line-height 5rem
                    height 4.8rem
                    text-align center
                .oa
                    display inline-block
                    cursor pointer
                    width 3.5rem
                    height 2rem
                    margin-top 2.3rem
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
                    margin-top 2.3rem
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
            @media screen and (min-width:1010px)
                display none
            @media screen and (max-width:768px)
                display none
            @media screen and (min-width:769px) and (max-width:799px)
                padding-left 180px
                padding-right 90px
            @media screen and (min-width:799px) and (max-width:850px)
                padding-left 180px
                padding-right 100px
    .mid_screen2
        @media screen and (min-width:769px) and (max-width:1010px)
            display none
    .mobile_nav //手机端侧边导航
        padding 0 0 
        .el-menu-collapse-list
            width 100%
            text-align left
            list-style none
            padding 0 0
            border-right none
            border-top 1px solid rgba(250,250,250,0.2)
    .search_box
        position fixed
        right 2.7%
        top 4.2rem
        @media screen and (max-width:997px)
            top 8.28rem
            right 7rem
        @media screen and (min-width:998px) and (max-width:1200px)
            top 4.25rem
            right 2.7%
</style>