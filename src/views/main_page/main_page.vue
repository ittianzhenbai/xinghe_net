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
                <ul class="col-md-12">
                    <li v-for="(item,index) in this.rongyu" :key="index" class="col-4 col-sm-4 col-md-4 col-lg-2">
                        <animate-number 
                            from="1" 
                            :to="item.value"
                            mode="auto"
                            duration="3000"
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
                    :class="{ active: content_show == 1 }"
                >
                    集团新闻
                </li>
                <li 
                    class="item col-6 col-md-6"
                    @click="jump_router('2')"
                    :class="{ active: content_show == 2 }"
                >
                    成员企业新闻
                </li>
            </ul>
            <div class="col-12 col-md-12 col-lg-12 row news_content">
               <div class="col-12 col-md-6 col-lg-6 news_pics">
                   <SwiperNews></SwiperNews>
               </div>
               <div class="col-12 col-md-6 col-lg-6 news_list">
                   <div class="news_top col-12 col-md-12 col-lg-12 ">
                       <p class="news_title">
                           新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻...
                       </p>
                       <p class="news_content1">
                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新新闻内容新闻内容新闻内容新闻内容
                        新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容
                       </p>
                   </div>
                   <ul class="list1 col-12 col-md-12 col-lg-12">
                       <li v-for="item in 10" :key="item" class="row">
                           <span class="col-1 col-md-1 col-lg-1">07/10</span>
                           <p class="col-11 col-md-11 col-lg-11">这就是新闻标题，这就是新闻标题，这就是新闻标题，我就是一个快乐的新闻标题dahaksjhdjkahak</p>
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
import { mapMutations } from "vuex"
export default {
    data(){
        return{
            content_show:"1",
            pics:[
                {img:require("../../assets/banner-1.jpg")},
                {img:require("../../assets/banner-2.jpg")},
                {img:require("../../assets/banner-3.jpg")},
            ],
            rongyu:""
        }
    },
    mounted(){
        this.getRongYu()
    },
    components:{
        SwiperBanner,
        SwiperNews,
        MajorBusiness
    },
    methods:{
        ...mapMutations(["setActiveIndex","setchildActiveIndex"]),
        jump_router(item){
            this.content_show = item
            this.setActiveIndex(item)
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
        .swiper-container
            width 100%
            .swiper-wrapper
                width 100%
                .swiper-slide
                    width 100%
                    &>img
                        width 100%                
    .yewu
        margin 0
    .content
        width 80%
        margin 0 auto
        @media screen and (max-width:768px)
            width 92%
        padding 0
        background url("../../assets/023.png")
        background-size 100%
        position relative
        bottom 4.8rem
        .near_xinghe
            margin 0
            .company_intro
                margin 0 auto!important
                padding 75px 0
                width 100%
                span
                    text-align cneter
                    font-size 2rem
                    color #333333
                    font-family SourceHanSansCN-Bold
                    font-weight Bold
                &>p
                    width 40%
                    padding 0
                    @media screen and (max-width:768px)
                        width 100%
                        margin-top 18.5pt
                    font-size 0.8rem
                    color #666666
                    font-family Microsoft YaHei
                    line-height 1.5rem
                    font-weight Regular
                    margin 0 auto
        .rongyu
            width 100%
            margin-right 0
            margin-left 0
            padding 0
            ul
                margin 0 auto
                padding 0
                &>li
                    display inline-block
                    vertical-align top
                    padding 0
                    span
                        font-size 3.6rem
                        color #1A649F
                        @media screen and (max-width:768px)
                            margin-top 18.5pt
                            font-size 35pt
                            text-align left
                        font-weight regular
                        font-family HYb9gf
                    &>p
                        line-height 1.5rem
                        font-size 0.8rem
        .detail
            margin 0 auto
            border-radius 10%
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
        .detail:hover
            color #FFFFFF
            background #1A649F
            border 1px solid #1A649F
        .news_center
            background #F4F4F4
            padding 2rem 0 100px
            width 100%
            margin 0
            .title
                font-size 2rem
                font-weight Bold
                padding-top 2.6rem
                font-family SourceHanSansCN-Bold
                color #333333
                margin 0 auto
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
                    &.active
                        border-bottom 3px solid #1A649F
                        color #1A649F
            .news_content
                padding 0
                margin 0
                width 100%
                background #F4F4F4
                .news_pics
                    height 20rem
                .news_list
                    height 20rem
                    margin 0
                    padding 0
                    width 100%
                    @media screen and (max-width:768px)
                        margin-top 17pt
                    .news_top
                        width 100%
                        padding 0 2rem
                        margin 0
                        .news_title
                            font-size 1.1rem
                            color #1A649F
                            text-align left
                            width 80%
                            margin-bottom 0
                            // 单行显示省略号
                            overflow hidden
                            text-overflow ellipsis
                            white-space nowrap
                        .news_content1
                            text-align left
                            display -webkit-box
                            -webkit-box-orient vertical
                            -webkit-line-clamp 3  //需要显示时文本行数
                            overflow hidden
                            color #666666
                            font-size 0.7rem
                    .list1
                        padding 0 1rem
                        text-align left
                        width 89.6%
                        margin 0 auto
                        &>li
                            font-size 1rem
                            width 100%
                            margin 0
                            span
                                color #1A649F
                                font-family SourceHanSansCN-Bold
                                font-weight Bold
                                line-height 1.5rem
                                display inline-block
                                padding 0
                            &>p
                                color #333333
                                padding-right 0
                                padding-left 1rem
                                @media screen and (max-width:786px)
                                    padding-left 2rem
                                font-family MicrosoftYaHei
                                font-weight Regular
                                overflow hidden
                                text-overflow ellipsis
                                white-space nowrap
                                line-height 1.5rem
                                margin-bottom 0       
</style>