<template>
     <div class="swiper-container">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide" 
                v-for="item in 5" 
                :key="item"
            >
                Slide {{item}}
                <div class="title1">这是标题{{item}}</div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
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
    width 80%
    @media screen and (max-width:768px)
        width 100%
    height 20rem
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
    left 30%
    bottom 0.2rem
</style>