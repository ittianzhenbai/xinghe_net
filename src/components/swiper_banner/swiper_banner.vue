<template>
    <div class="swiper-container" id="swiper-container1">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide" 
                v-for="(item,index) in pics" 
                :key="index">
                <img class="pc" :src="item.image" alt="">
                <img class="mobile" :src="item.h5_image" alt="">
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>
<script>
import Swiper from "swiper"
export default {
    data(){
        return{
            pics:[],
            banner:[]
        }
    },
    mounted(){
        // this.init()
        this.getBanner()
    },
    methods:{
        init(){
            var swiper1 = new Swiper('#swiper-container1', {
                loop:true,
                autoplay:3000,
                speed:300,
                autoplayDisableOnInteraction:false,
                // centeredSlides: true,
                // observer: true,
                // observeParents: true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
            })
        },
        getBanner(){
            this.axios.get(
                "api/banner/banners"
            ).then(res=>{
                if(res.data.code == 1){
                    this.pics = res.data.data
                    this.$nextTick(()=>{
                        this.init()
                    })
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.swiper-button-next,.swiper-button-prev
    background-image url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%2328436E'%2F%3E%3C%2Fsvg%3E")
.swiper-button-prev
    transform rotate(-180deg)
.swiper-container
    width 100%
    .swiper-wrapper
        width 100%
        .swiper-slide
            width 100%
            img
                width 100%
            .pc
                @media screen and (max-width:768px)
                    display none 
                @media screen and (min-width:769px) and (max-width:992px)
                    height 27.5rem
            .mobile
                height 27.5rem
                @media screen and (min-width:769px)
                    display  none
</style>