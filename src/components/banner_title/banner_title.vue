<template>
    <div class="banner_title">
        <span class="title_zn wow fadeInUp">
            {{this.title_zn}}
        </span>
        <span class="title_en wow fadeInUp">
            {{this.title_en}}
        </span>
    </div>
</template>
<script>
import WOW from 'wowjs' 
export default {
    props:{
        title_zn:{
            type:String,
            default:""
        },
        title_en:{
            type:String,
            default:""
        },
    },
    data(){
        return{

        }
    },
    mounted(){
        this.wowInit()
    },
    methods:{
        wowInit(){
             let wow = new WOW.WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: true,
                live: false
            });
            wow.init();
        },
    }
}
</script>
<style lang="stylus" scoped>
.banner
    width 185px
    height 22px
    font-size: 28px
    font-family Source Han Sans CN
    line-height 45px
    .title_zn
        font-size 3rem
        color #FFFFFF
        text-align left
        font-weight Bold
        display block
    .title_en
        font-size 1.4rem
        color #FFFFFF
        text-align left
        display block
        font-weight Light
</style>