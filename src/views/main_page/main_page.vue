<template>
    <div class="container-fluid main">
        <div class="row banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div 
                        class="swiper-slide" 
                        v-for="(item,index) in pics" 
                        :key="index">
                        <img :src="item.img" alt="">
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <div class="row yewu">
            <ul class="major_businesses">
                <li v-for="(item,index) in major_business" :key="index">
                    <img  class="img1" :src="item.img1" alt="">
                    <span class="text1">{{item.text1}}</span>
                    <span class="text2">{{item.text2}}</span>
                    <img  class="img2" :src="item.img2" alt="">
                    <img  class="img3" :src="item.img3" alt="">
                    <div class="active">
                        <span class="text3">{{item.text1}}</span>
                        <p class="intro">
                            这是一段文字，这是一段文字，这是一段文字，这是一段文字,第三行会隐藏
                        </p>
                        <div>...</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="container-fluid content">
            <div class="row near_xinghe">
                <div class="company_intro col-12 col-md-12">
                    <span>走进兴合</span>
                    <p>浙江省兴合集团有限责任公司是中国500强企业，浙江省重点流通企业和供销系统为农服务龙头企业，主要负责运行管理浙江省供销社本级经营性资产。</p>
                </div>
            </div>
            <div class="row rongyu">
                <ul class="col-md-10">
                    <li v-for="item in 5" :key="item" class="col-12 col-sm-2 col-md-2">
                        <animate-number from="1" to="520"></animate-number>
                        <p>1992年公司经省政府批准设立，已有28个年头</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 col-md-12">
            <span class="detail">
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
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                Slide 1
                                <div class="title1">这是标题1</div>
                            </div>
                            <div class="swiper-slide">Slide 2
                                 <div class="title1">这是标题2</div>
                            </div>
                            <div class="swiper-slide">Slide 3
                                <div class="title1">这是标题3</div>
                            </div>
                            <div class="swiper-slide">Slide 4
                                <div class="title1">这是标题4</div>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
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
import { mapMutations } from "vuex"
import Swiper from "swiper"
export default {
    data(){
        return{
            content_show:"1",
            pics:[
                {img:require("../../assets/banner-1.jpg")},
                {img:require("../../assets/banner-2.jpg")},
                {img:require("../../assets/banner-3.jpg")},
            ],
            major_business:[
                {
                    img1:require("../../assets/16.png"),
                    img2:require("../../assets/01.png"),
                    img3:require("../../assets/06.png"),
                    text1:"内贸",
                    text2:"Within trade"
                },
                {
                    img1:require("../../assets/23.png"),
                    img2:require("../../assets/02.png"),
                    img3:require("../../assets/010.png"),
                    text1:"外贸",
                    text2:"Foreigh trade"
                },
                {
                    img1:require("../../assets/15.png"),
                    img2:require("../../assets/03.png"),
                    img3:require("../../assets/07.png"),
                    text1:"房地产",
                    text2:"Real estate"
                },
                {
                    img1:require("../../assets/14.png"),
                    img2:require("../../assets/04.png"),
                    img3:require("../../assets/08.png"),
                    text1:"金融投资",
                    text2:"Financial investment"
                },
                {
                    img1:require("../../assets/13.png"),
                    img2:require("../../assets/05.png"),
                    img3:require("../../assets/09.png"),
                    text1:"农业服务",
                    text2:"Agricultural Services"
                }
            ]

        }
    },
    mounted(){
        this.init()
        // this.init1()
        // this.$nextTick(()=>{
        //     this.init1()
        // })
    },
    methods:{
        ...mapMutations(["setActiveIndex"]),
        init(){
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
            })
        },
        // init1(){
        //     var swiper = new Swiper('.swiper-container1', {
        //         loop: true, // 循环模式选项
        //         autoplay:true,
        //         // 如果需要前进后退按钮
        //         navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //         },
        //     })
        // },
        jump_router(item){
            this.content_show = item
            if(item == "1"){
                // this.$router.push({path:"/news_group"})
                this.setActiveIndex("3-1")
            }
            if(item == "2"){
                // this.$router.push({path:"/news_menber"})
                this.setActiveIndex("3-2")
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
        .major_businesses
            width 80%
            margin 0 auto
            &>li
                height 16rem
                width 20%
                display inline-block
                vertical-align top
                position relative
                bottom 30%
                z-index 9
                background #FFFFFF
                @media screen and (max-width:768px)
                    display none
                .img1
                    margin-top 37px
                    width 80px
                &:nth-child(4n+0)
                    .img1
                        width 81px
                        margin-bottom 3px
                &:nth-child(4n+0)
                    .img1
                        width 73px
                &:nth-child(5n+0)
                    border-right-top-radius 10px
                    .img1
                        width 73px
                        margin-top 40px
                        margin-bottom 25px
                .img2
                    width 100%
                    position absolute
                    bottom 0px
                    left 0
                .img3
                    display none
                .text1
                    display block
                    color #223D6B
                    font-size 24px
                    line-height 45px
                    font-family MicrosoftYaHei
                .active
                    width 100%
                    height 100%
                    visibility hidden
                    position absolute
                    top 0
            &>li:hover
                .img3
                    display block
                    position absolute
                    left 0
                    width 100%
                    height 100%
                    top 0
                .img1,.img2,.text1,.text2
                    display none
                .active
                    width 100%
                    height 100%
                    animation-name myfirst
                    animation-duration 1s
                    animation-iteration-count 1
                    animation-fill-mode forwards
                    .text3
                        display block
                        font-family MicrosoftYaHei
                        font-weight Regular
                        color #FFFFFF
                        font-size 24px
                        line-height 45px
                        margin-top 16px
                    .intro
                        font-size 0.8rem
                        text-align left
                        color #FFFFFF
                        width 80%
                        margin 43px auto 37px
                        display -webkit-box
                        -webkit-box-orient vertical
                        -webkit-line-clamp 3  //需要显示时文本行数
                        overflow hidden
                    div
                        border 1px solid #FFFFFF
                        width 30%
                        height 20px
                        color #FFFFFF
                        margin 0 auto
                        line-height 10px
    .content
        width 80%
        margin 0 auto
        padding 0
        background url("../../assets/023@2x.png")
        background-size 100%
        position relative
        bottom 4.8rem
        .near_xinghe
            margin 0
            .company_intro
                margin 0 auto
                padding 0 0 
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
                    @media screen and (max-width:786px)
                        width 80% 
                    font-size 0.8rem
                    color #666666
                    font-family Microsoft YaHei
                    line-height 1.5rem
                    font-weight Regular
                    margin 0 auto
        .rongyu
            width 100%
            margin-top 3rem
            margin-right 0
            margin-left 0
            padding 0
            ul
                margin 0 auto
                &>li
                    display inline-block
                    span
                        font-size 3.6rem
                        color #1A649F
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
                    .swiper-container 
                        width 80%
                        height 100%
                        margin 0 auto
                        .swiper-slide 
                            text-align center
                            font-size 18px
                            /* Center slide text vertically */
                            display -webkit-box
                            display -ms-flexbox
                            display -webkit-flex
                            display flex
                            -webkit-box-pack center
                            -ms-flex-pack center
                            -webkit-justify-content center
                            justify-content center
                            -webkit-box-align center
                            -ms-flex-align center
                            -webkit-align-items center
                            align-items center
                            position relative
                            .title1
                                position absolute
                                bottom 0
                                height 2rem
                                line-height 2rem
                                left 0
                                background rgba(000,000,000,0.6)
                                width 100%
                                text-align left
                                padding-left 1rem
                                color #FFFFFF
                    .swiper-pagination
                        width 20%
                        left 70%
                        bottom 0.2rem
                .news_list
                    height 20rem
                    margin 0
                    padding 0
                    width 100%
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
                        width 100%
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
                            &>p
                                color #333333
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