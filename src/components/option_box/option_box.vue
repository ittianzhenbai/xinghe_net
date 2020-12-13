<template>
    <div class="box">
        <div 
            class="cur_address wow fadeInLeft"
        >
            首页&gt;{{this.cur_address}}
        </div>
        <div class="options">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import WOW from 'wowjs' 
export default {
    props:{
        cur_address:{
            type:String,
            default:""
        }
    },
    data(){
        return{

        }
    },
    mounted(){
        this.wowInit
    },
    methods:{
         wowInit(){
             let wow = new WOW.WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: true
            });
            wow.init();
        },
    }
}
</script>
<style lang="stylus" scoped>
.box
    background #F5FBFF
    .cur_address
        padding-top 1.2rem
        padding-left 12.5%
        text-align left
        font-size 0.7rem
        color #999999
        line-height 0.7rem
        font-family Microsoft YaHei
        font-weight Regular
        padding-bottom 2.7rem
</style>