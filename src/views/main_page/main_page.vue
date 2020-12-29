<template>
    <div class="container-fluid main">
        <div class="row banner">
            <SwiperBanner></SwiperBanner>
        </div>
        <div class="row yewu">
            <MajorBusiness></MajorBusiness>
        </div>
        <div class="container-fluid content">
            <div class="row near_xinghe">
                <div class="company_intro col-12 col-md-12">
                    <span>走进兴合</span>
                    <p>浙江省兴合集团有限责任公司是中国500强企业，浙江省重点流通企业和供销系统为农服务龙头企业，主要负责运行管理浙江省供销社本级经营性资产。</p>
                </div>
            </div>
            <div class="row rongyu">
                <ul class="rongyu1 rongyu_pc1 col-2 col-sm-2 col-md-2 col-lg-2"
                    v-show="this.deviceFlag !=='mobile'"
                >   
                    <li v-for="(item,index) in this.rongyu" :key="index" class="item"  v-show = "index == 0">
                        <animate-number 
                            ref="NumAnimate"
                            from="1"
                            mode="auto"
                            :to="item.value"
                            duration="5000"
                        ></animate-number>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
                <ul class="rongyu1 rongyu_pc2 col-9 col-sm-9 col-md-9 col-lg-9 row"
                    v-show="this.deviceFlag !=='mobile'"
                >   
                    <li v-for="(item,index) in this.rongyu" :key="index" class="col-3 col-sm-3 col-md-3 col-lg-3 item"  v-show = "index > 0">
                        <animate-number 
                            ref="NumAnimate"
                            from="1" 
                            mode="auto"
                            :to="item.value"
                            duration="5000"
                        ></animate-number>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
                 <ul class="rongyu1 row"
                    v-show="this.deviceFlag =='mobile'"
                >   
                    <li v-for="(item,index) in this.rongyu" :key="index" class="col-4 col-sm-4 item">
                        <animate-number 
                            ref="NumAnimate"
                            from="1"
                            mode="auto"
                            :to="item.value"
                            duration="5000"
                        ></animate-number>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <span class="detail" @click="near_xinghe">
                详情
                <i class="el-icon-arrow-right"></i>
            </span>
        </div>
        <div class="row news_center">
            <div class="title col-12 col-md-12">新闻中心</div>
            <ul class="options col-12 col-md-12">
                <li 
                    class="item col-6 col-md-6"
                    @click="jump_router('1')"
                    @mouseenter="changecolor1('1')"
                    @mouseleave="changecolor2"
                    :class="{ active: content_show == 1 }"
                >
                    集团新闻
                </li>
                <li 
                    class="item col-6 col-md-6"
                    @click="jump_router('2')"
                    @mouseenter="changecolor1('2')"
                    @mouseleave="changecolor2"
                    :class="{ active: content_show == 2 }"
                >
                    成员企业新闻
                </li>
            </ul>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 row news_content">
               <div class="col-12 col-md-12 col-lg-6 news_pics">
                   <SwiperNews
                    :newspics="this.pics"
                    @pics_godetail="this.godetail"
                   ></SwiperNews>
               </div>
               <div class="col-12 col-md-12 col-lg-6 news_list">
                   <div class="news_top col-12 col-md-12 col-lg-12" @click="godetail('newstop')">
                       <p class="news_title">
                           {{this.newstop ==undefined? "":this.newstop.title}}
                       </p>
                       <p class="news_content1">
                          {{this.newstop ==undefined? "":this.newstop.desc}}
                       </p>
                   </div>
                   <ul class="list1 col-12 col-md-12 col-lg-12">
                       <li 
                            v-for="(item,index) in this.newslist" 
                            :key="index" 
                            v-show="index>5" 
                            class="row"
                            @click="godetail(item)"
                        >
                           <span>{{item.create_at}}</span>
                           <p>{{item.title}}</p>
                       </li>
                   </ul>
               </div>
            </div>
        </div> 
    </div>
</template>
<script>
import '../../common/js/control.js'
import SwiperBanner from "@/components/swiper_banner/swiper_banner.vue"
import SwiperNews from "@/components/swiper_news/swiper_news.vue"
import MajorBusiness from "@/components/major_business/major_business.vue"
import { mapState,mapMutations } from "vuex"
export default {
    data(){
        return{
            content_show:this.$store.state.childActiveIndex,
            rongyu:"",
            newslist:[],//新闻列表,
            pics:[],
            // newstop:""
        }
    },
    computed:{
         ...mapState(["childActiveIndex","deviceFlag"]),
         newstop:function(){
             if(this.newslist.length >4){
                return this.newslist[5];
             }else{
                 return [];
             }
         }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.setchildActiveIndex('1')
            vm.setcurPage("index")
        });
    },
    mounted(){
        this.getRongYu()
        this.getNewsList(2)
        this.content_show = this.childActiveIndex
    },
    destroyed(){
        this.setcurPage("other")
    },
    components:{
        SwiperBanner,
        SwiperNews,
        MajorBusiness
    },
    methods:{
        ...mapMutations(["setActiveIndex","setchildActiveIndex","setcurPage"]),
        jump_router(item){
            this.content_show = item
            this.setchildActiveIndex(item)
        },
        getRongYu(){
            this.axios.get(
                "api/singlepage/zjxh"
            ).then(res=>{
                if(res.data.code == 1){
                    this.rongyu = res.data.data
                }
            })
        },
        near_xinghe(){
            this.$router.push({
                path:"/group_intro"
            })
            this.setActiveIndex("2-1")
            this.setchildActiveIndex("1")
        },
        getNewsList(sort){
            this.axios.post(
                "api/news/indexnews",
                `catid=${sort}`
            ).then(res=>{
                if(res.data.code ==1){
                    this.newslist = res.data.data
                    if(res.data.data.length>4){
                        this.pics = res.data.data.slice(0,5)
                    }else{
                        this.pics = res.data.data
                    }
                }
            })
        },
        godetail(item){
            if(this.content_show == "1"){
                this.setActiveIndex("3-1")
                this.setchildActiveIndex("1")
            }
            if(this.content_show == "2"){
                this.setActiveIndex("3-2")
                this.setchildActiveIndex("2")
            }
            if(item == "newstop"){
                this.$router.push({
                    path:"/news_detail",
                    query:{
                        newsid:this.newstop.newsid
                    }
                })
            }else{
                this.$router.push({
                    path:"/news_detail",
                    query:{
                        newsid:item.newsid
                    }
                })
            }    
        },
        changecolor1(item){
            this.content_show = item
        },
        changecolor2(){
            this.content_show = this.childActiveIndex
        }
    },
    watch:{
        childActiveIndex(newVal){
            if(newVal == "1"){
                this.$nextTick(()=>{
                    this.getNewsList("2")
                })
            }
            if(newVal == "2"){
                this.$nextTick(()=>{
                    this.getNewsList("3")
                })
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.main
    padding 0
    width 100%
    .banner
        padding 0
        width 100%
        margin 0
        @media screen and (max-width:768px)
            margin-top 4rem
        // .swiper-container
        //     width 100%
        //     .swiper-wrapper
        //         width 100%
        //         .swiper-slide
        //             width 100%
        //             &>img
        //                 width 100%                
    .yewu
        margin 0
    .content
        width 80%
        margin 0 auto
        padding 0
        background url("../../assets/023.png")
        background-size contain
        background-repeat no-repeat
        position relative
        bottom 7rem
        @media screen and (max-width:768px)
            width 92%
            bottom 7.5rem
        .near_xinghe
            margin 0
            .company_intro
                margin 0 auto!important
                padding 80px 0 40px
                width 100%
                @media screen and (max-width:768px)
                    padding 3.85rem 0 2.45rem
                span
                    text-align cneter
                    font-size 2rem
                    color #333333
                    font-family SourceHanSansCN-Bold
                    font-weight Bold
                &>p
                    width 40%
                    padding 0
                    font-size 0.8rem
                    color #666666
                    font-family Microsoft YaHei
                    line-height 1.5rem
                    font-weight Regular
                    margin 0 auto
                    margin-top 9px
                    @media screen and (max-width:1024px)
                        width 100%
                        margin-top 18.5pt
        .rongyu
            width 100%
            margin-right 0
            margin-left 0
            padding 0
            .rongyu1
                width 100%
                margin 0 auto
                padding 0
                @media screen and (max-width:768px)
                    margin 0
                .item
                    vertical-align top
                    padding 0 auto
                    @media screen and (max-width:768px)
                        padding 0
                    span
                        font-size 3.6rem
                        color #1A649F
                        font-weight 550
                        font-family HYb9gf
                        @media screen and (max-width:920px)
                            font-size 3rem
                            text-align left
                        @media screen and (max-width:768px)
                            margin-top 18.5pt
                            font-size 35pt
                            text-align left
                    &>p
                        line-height 1.5rem
                        font-size 0.8rem
                        width 10rem
                        margin 0 auto
                        @media screen and (max-width:1520px)
                            width 95%
                        @media screen and (max-width:1520px)
                            width 95%
            .rongyu_pc1
                margin-right 0
            .rongyu_pc2
                padding 0
                margin-left 0
        .detail
            margin 0 auto
            border-radius 5px
            width 110px
            height 40px
            display inline-block 
            border 1px solid #CCCCCC
            color #5C5C5C
            font-family MicrosoftYaHei
            font-size 0.8rem
            line-height 40px
            position relative
            bottom 4rem
            font-weight Regular
            padding-left 5px
            margin-right 20px
            @media screen and (max-width:768px)
                color #FFFFFF
                background #1A649F
                border 1px solid #1A649F
                margin-right 0
        .detail:hover
            color #FFFFFF
            background #1A649F
            border-radius 5px
            border 1px solid #1A649F
        .news_center
            background #F4F4F4
            padding 3.5rem 0 0
            width 100%
            margin 0
            @media screen and (max-width:768px)
                margin-bottom 0rem
                padding 2.85rem 0
            .title
                font-size 2rem
                font-weight Bold
                font-family SourceHanSansCN-Bold
                color #333333
                margin 0 auto
                margin-bottom 30px
            .options
                // margin-bottom 1rem
                padding 0 0
                margin 0 0
                width 100%
                &>li
                    display inline-block
                    cursor pointer
                    font-size 1.05rem
                    @media screen and (max-width:768px)
                        font-size 1.5rem
                    color #666666
                    font-family MicrosoftYaHei
                    font-weight Regular
                    text-align center
                    padding-bottom 2px
                    border-bottom 1px solid #999999
                    &.active
                        padding-bottom 0px
                        border-bottom 3px solid #1A649F
                        color #1A649F
                        font-weight bold
            .news_content
                padding 0
                margin 0
                width 100%
                background #F4F4F4
                margin-bottom 5rem
                .news_pics
                    height 24rem
                    margin-top 1.5rem
                    padding 0
                .news_list
                    height 24rem
                    margin 0
                    padding 0
                    width 100%
                    @media screen and (max-width:768px)
                        margin-top 17pt
                        height 37rem
                    .news_top
                        width 84%
                        padding 0 0 0 4%
                        margin 1.2rem 0 1rem
                        font-family MicrosoftYaHei
                        font-weight Regular
                        cursor pointer
                        @media screen and (max-width:768px)
                            width 100%
                            margin 0
                            padding-right 4%
                        .news_title
                            font-size 1.1rem
                            color #1A649F
                            text-align left
                            width 100%
                            margin-bottom 10px
                            // 单行显示省略号
                            overflow hidden
                            text-overflow ellipsis
                            white-space nowrap
                            @media screen and (max-width:768px)
                                font-size 1.5rem
                                line-height 1.5rem
                        .news_content1
                            text-align left
                            width 100%
                            display -webkit-box
                            -webkit-box-orient vertical
                            -webkit-line-clamp 2  //需要显示时文本行数
                            overflow hidden
                            color #666666
                            font-size 0.7rem
                            @media screen and (max-width:768px)
                                font-size 1.2rem
                                line-height 2rem
                            @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) 
                                text-overflow ellipsis
                                white-space nowrap
                    .list1
                        padding 0 0 0 4%
                        text-align left
                        // width 89.6%
                        &>li
                            font-size 1rem
                            width 100%
                            margin 0
                            padding 0
                            cursor pointer
                            span
                                color #1A649F
                                font-family SourceHanSansCN-Bold
                                font-weight Regular
                                line-height 1.85rem
                                display inline-block
                                padding 0
                                @media screen and (max-width:768px)
                                    font-size 1.2rem
                                    line-height 3.5rem
                            &>p
                                color #333333
                                padding-right 0
                                padding-left 1rem
                                width 71% 
                                font-family MicrosoftYaHei
                                font-weight Regular
                                overflow hidden
                                text-overflow ellipsis
                                white-space nowrap
                                line-height 1.85rem
                                margin-bottom 0
                                @media screen and (max-width:768px)
                                    font-size 1.5rem
                                    line-height 3.5rem
                                    padding-left 2rem
</style>