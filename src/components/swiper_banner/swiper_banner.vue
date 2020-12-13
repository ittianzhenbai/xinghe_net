<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div 
                class="swiper-slide" 
                v-for="(item,index) in pics" 
                :key="index">
                <img :src="item.image" alt="">
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
            pics:[
                {image:require("../../assets/banner-1.jpg")},
                {image:require("../../assets/banner-2.jpg")},
                {image:require("../../assets/banner-3.jpg")},
            ],
            banner:[]
        }
    },
    mounted(){
        // this.init()
        this.getBanner()
    },
    methods:{
        init(){
            var swiper = new Swiper('.swiper-container', {
                loop:true,
                autoplay:3000,
                speed:300,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
            })
        },
        getBanner(){
            this.axios.get(
                "api/banner/banners"
            ).then(res=>{
                if(res.data.code == 1){
                    console.log(res)
                    this.banner = res.data.data
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
    background-image url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23888888'%2F%3E%3C%2Fsvg%3E")
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
</style>