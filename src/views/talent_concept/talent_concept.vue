<template>
    <div class="container-fluid talent_concept">
        <div class="row linian">       
            <span v-html="this.linian"></span>  
        </div>
        <ul class="row advantages wow fadeInUp">
            <li class="col-6 col-sm-6 col-md-3 col-lg-3 wow bounce">
                <div class="xiyin ">
                    <img src="../../assets/26.png" alt="">
                </div>
                <span class="text1">吸引</span>
                <span class="test2">发展吸引人</span>
            </li>
            <li class="col-6 col-sm-6 col-md-3 col-lg-3 wow bounce">
                <div class="ningju">
                    <img src="../../assets/27.png" alt="">
                </div>
                <span class="text1">凝聚</span>
                <span class="test2">事业凝聚人</span>
            </li>
            <li class="col-6 col-sm-6 col-md-3 col-lg-3 wow bounce">
                <div class="peiyang">
                    <img src="../../assets/28.png" alt="">
                </div>
                <span class="text1">培养</span>
                <span class="test2">工作培养人</span>
            </li>
            <li class="col-6 col-sm-6 col-md-3 col-lg-3 wow bounce">
                <div class="kaohe">
                    <img src="../../assets/29.png" alt="">
                </div>
                <span class="text1">考核</span>
                <span class="test2">业绩考核人</span>
            </li>
        </ul>
   </div>
</template>
<script>
import WOW from 'wowjs' 
export default {
    data(){
        return{
            linian:""//人才理念
        }
    },
    mounted(){
       this.wowInit()
       this.getLiNian()
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
        getLiNian(){
            this.axios.get(
                "api/singlepage/joinus"
            ).then(res=>{
                if(res.data.code == 1){
                    this.linian = res.data.data
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.talent_concept
    width 100%
    padding 0
    margin 100px auto
    @media screen and (max-width:768px)
        margin 2.5rem 0
    .linian
        width 100%
        margin 0
        span
            display inline-block
            text-align center
            width 70%
            margin 0 auto
            font-size 1.2rem
            font-weight Regular
            color #333333
            font-family  Microsoft YaHei
            line-height 2rem
            @media screen and (max-width:768px)
                width 100%
                padding 0 6.7% 0 4%
    .advantages
        padding 0 14.8%
        margin 8px 0 auto
        @media screen and (max-width:768px)
            padding 0 0
            margin 3.95rem 0 auto
        &>li
            padding 0
            @media screen and (max-width:768px) 
                margin-bottom 3.9rem
            .xiyin,.ningju,.peiyang,.kaohe
                width 13vw
                height 13vw
                margin 0 auto
                border-radius 50%
                padding 0
                @media screen and (max-width:768px)
                    width 33vw
                    height 33vw
                img
                    width 40%
                    margin-top 32%
                    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active)
                        height 40%
            .xiyin
                background #5A98CA
            .ningju
                background #995ACA
                img
                    width 35%
            .peiyang
                background #CAAC5A
                img
                    width 35%
            .kaohe
                background #CA675A
            .text1,.text2
                display block
                color #333333
                font-size MicrosoftYaHei
                font-weight Bold
                font-size 45px
                line-height 2rem
                padding-top 29px
                padding-bottom 22px
                @media screen and (max-width:768px)
                    font-size 2.25rem
                    padding-top 1.45rem
                    padding-bottom 0.95rem
            .text2
                font-size 1.2rem
                padding 0
                font-weight Regular
                @media screen and (max-width:768px)
                    font-size 1.4rem    
</style>