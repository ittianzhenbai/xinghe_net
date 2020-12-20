<template>
     <div class="swiper-container">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide" 
                v-for="(item,index) in newspics" 
                :key="index"
            >
                <span class="pic" v-lazy:background-image="item.image"></span>
                <div class="title1">
                    <span>{{item.title}}</span>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
    props:{
        newspics:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    data(){
        return{
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            var swiper = new Swiper('.swiper-container', {
                loop:true,
                autoplay:3000,
                speed:300,
                pagination : '.swiper-pagination',
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
/deep/ .swiper-pagination-bullet
            background-color #FFFFFF!important
            opacity 1 !important
            transform scale(0.8)
/deep/ .swiper-pagination-bullet-active
            transform scale(1.3)
.swiper-container
    width 92%
    height 24rem
    margin 0 auto
    @media screen and (min-width:992px)
        float right
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
        .pic
            width 100%
            height 100%
            display block
            background-repeat no-repeat
            background-size contain
            background-position center center
            background-color #333333
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
            @media screen and (max-width:768px)
                font-size 1.2rem
                line-height 2rem
            span 
                display inline-block
                width 60%
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
    .swiper-pagination
        width 100%
        text-align right
        padding-right 15px
        bottom 0.35rem
</style>