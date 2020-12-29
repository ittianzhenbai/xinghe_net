<template>
    <div class="row">
         <ul class="major_businesses_pc">
            <li @click="godetail('nm')">
                <img  class="img1" src="../../assets/16.png" alt="">
                <span class="text1">{{this.nm.title}}</span>
                <span class="text2">{{this.nm.title_en}}</span>
                <img  class="img2" src="../../assets/01.png" alt="">
                <img  class="img3" src="../../assets/06.png" alt="">
                <div class="active">
                    <span class="text3">{{this.nm.title}}</span>
                    <p class="intro"
                        v-html="this.LimitNumber(this.nm.content,34)"
                    >
                    </p>
                    <div>...</div>
                </div>
            </li>
            <li @click="godetail('wm')">
                <img  class="img1" src="../../assets/23.png" alt="">
                <span class="text1">{{this.wm.title}}</span>
                <span class="text2">{{this.wm.title_en}}</span>
                <img  class="img2" src="../../assets/02.png" alt="">
                <img  class="img3" src="../../assets/010.png" alt="">
                <div class="active">
                    <span class="text3">{{this.wm.title}}</span>
                    <p class="intro"
                        v-html="this.LimitNumber(this.wm.content,35)"
                    >
                    </p>
                    <div>...</div>
                </div>
            </li>
            <li @click="godetail('fdc')">
                <img  class="img1" src="../../assets/15.png" alt="">
                <span class="text1">{{this.fdc.title}}</span>
                <span class="text2">{{this.fdc.title_en}}</span>
                <img  class="img2" src="../../assets/03.png" alt="">
                <img  class="img3" src="../../assets/07.png" alt="">
                <div class="active">
                    <span class="text3">{{this.fdc.title}}</span>
                    <p class="intro"
                        v-html="this.LimitNumber(this.fdc.content,35)"
                    >
                    </p>
                    <div>...</div>
                </div>
            </li>
            <li @click="godetail('jrtz')">
                <img  class="img1" src="../../assets/14.png" alt="">
                <span class="text1">{{this.jr.title}}</span>
                <span class="text2">{{this.jr.title_en}}</span>
                <img  class="img2" src="../../assets/04.png" alt="">
                <img  class="img3" src="../../assets/08.png" alt="">
                <div class="active">
                    <span class="text3">{{this.jr.title}}</span>
                    <p class="intro"
                        v-html="this.LimitNumber(this.jr.content,35)"
                    >
                    </p>
                    <div>...</div>
                </div>
            </li>
            <li @click="godetail('nyfw')">
                <img  class="img1" src="../../assets/13.png" alt="">
                <span class="text1">{{this.ny.title}}</span>
                <span class="text2">{{this.ny.title_en}}</span>
                <img  class="img2" src="../../assets/05.png" alt="">
                <img  class="img3" src="../../assets/09.png" alt="">
                <div class="active">
                    <span class="text3">{{this.ny.title}}</span>
                    <p class="intro"
                        v-html="this.LimitNumber(this.ny.content,35)"
                    >
                    </p>
                    <div>...</div>
                </div>
            </li>
        </ul>
        <ul class="major_businesses_mobile">
             <li @click="godetail('nm')">
                <img  class="img1" src="../../assets/16.png" alt="">
                <span class="text1">{{this.nm.title}}</span>
                <span class="text2">{{this.nm.title_en}}</span>
                <img  class="img4" src="../../assets/41.png" alt="">
            </li>
            <li @click="godetail('wm')">
                <img  class="img1" src="../../assets/23.png" alt="">
                <span class="text1">{{this.wm.title}}</span>
                <span class="text2">{{this.wm.title_en}}</span>
                <img  class="img4" src="../../assets/42.png" alt="">
            </li>
            <li @click="godetail('fdc')">
                <img  class="img1" src="../../assets/15.png" alt="">
                <span class="text1">{{this.fdc.title}}</span>
                <span class="text2">{{this.fdc.title_en}}</span>
                <img  class="img4" src="../../assets/43.png" alt="">
            </li>
             <li @click="godetail('jrtz')">
                <img  class="img1" src="../../assets/14.png" alt="">
                <span class="text1">{{this.jr.title}}</span>
                <span class="text2">{{this.jr.title_en}}</span>
                <img  class="img4" src="../../assets/44.png" alt="">
            </li>
            <li @click="godetail('nyfw')">
                <img  class="img1" src="../../assets/13.png" alt="">
                <span class="text1">{{this.ny.title}}</span>
                <span class="text2">{{this.ny.title_en}}</span>
                <img  class="img4" src="../../assets/45.png" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
import { mapMutations } from "vuex"
export default {
    data(){
        return{
            major_business:[],
        }
    },
    computed:{
        nm:function(){
            return this.major_business[1]
        },
        wm:function(){
            return this.major_business[2]
        },
        fdc:function(){
            return this.major_business[0]
        },
        jr:function(){
            return this.major_business[3]
        },
        ny:function(){
            return this.major_business[4]
        }
    },
    mounted(){
        this.getYeWu()
    },
    filters:{

    },
    methods:{
        ...mapMutations(["setActiveIndex","setchildActiveIndex"]),
        LimitNumber(txt,num) {
            var str = txt;
            return str.substr(0,num) + '...' ;
        },
        godetail(item){
            if(item == "nm"){
                this.$router.push({
                    path:"/business_neimao"
                })
                this.setActiveIndex("4-1")
                this.setchildActiveIndex("1")
            }
            if(item == "wm"){
                this.$router.push({
                    path:"/business_waimao"
                })
                this.setActiveIndex("4-2")
                this.setchildActiveIndex("2")
            }
            if(item == "fdc"){
                this.$router.push({
                    path:"/business_building"
                })
                this.setActiveIndex("4-3")
                this.setchildActiveIndex("3")
            }
            if(item == "jrtz"){
                this.$router.push({
                    path:"/business_finance"
                })
                this.setActiveIndex("4-4")
                this.setchildActiveIndex("4")
            }
            if(item == "nyfw"){
                this.$router.push({
                    path:"/business_agriculture"
                })
                this.setActiveIndex("4-5")
                this.setchildActiveIndex("5")
            }
        },
        getYeWu(){
            this.axios.get(
                "api/singlepage/main_business_list"
            ).then(res=>{
                if(res.data.code == 1){
                    this.major_business = res.data.data
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.row
    margin 0
    width 100%
    .major_businesses_pc
        width 80%
        margin 0 auto
        position relative
        @media screen and (max-width:768px)
            display none
        &::before
            //背部阴影效果
            display block
            height 100%
            width 100%
            position absolute
            right 0
            top -7rem
            @media screen and (max-width:1600px)
                top -5.4rem
            @media screen and (max-width:1460px)
                top -5rem
            @media screen and (max-width:1200px)
                top -4.5rem
            content ("")
            border-radius 10px
            box-shadow 0px 5px 9px 1px rgba(164, 164, 164, 0.51)
        &>li
            height 20rem
            width 20%
            display inline-block
            vertical-align top
            position relative
            bottom 7rem
            cursor pointer
            z-index 9
            @media screen and (max-width:1800px)
                height 18rem
            @media screen and (max-width:1600px)
                height 17rem
                bottom 5.4rem
            @media screen and (max-width:1460px)
                height 16rem
                bottom 5rem
            @media screen and (max-width:1200px)
                height 16.5rem
                bottom 4.5rem
            z-index 9
            background #FFFFFF
            @media screen and (max-width:768px)
                display none
            &:nth-child(1)
                border-top-left-radius 10px
                border-bottom-left-radius 10px
            .img1
                margin-top 37px
                width 80px
            &:nth-child(4n+0)
                .img1
                    width 81px
                    // margin-bottom 3px
            &:nth-child(4n+0)
                .img1
                    width 73px
            &:nth-child(5n+0)
                border-top-right-radius 10px
                border-bottom-right-radius 10px
                .img1
                    width 73px
                    margin-top 40px
                    margin-bottom 25px
            .img2
                width 100%
                position absolute
                bottom 0px
                left 0
                max-height 50%
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
            &:nth-child(5n+0)
                .active,.img3
                    border-top-right-radius 10px
                    border-bottom-right-radius 10px
            &:nth-child(1)
                .active,.img3
                    border-top-left-radius 10px
                    border-bottom-left-radius 10px
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
                    font-size 1.2rem
                    line-height 2.25rem
                    margin-top 3.8rem
                    @media screen and (max-width:1600px)
                        margin-top 2.3rem
                .intro
                    font-size 0.8rem
                    text-align left
                    color #FFFFFF
                    width 80%
                    margin 2.15rem auto 1.85rem
                    @media screen and (max-width:1600px)
                        margin 1.5rem auto 0.85rem
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 4  //需要显示时文本行数
                    overflow hidden
                    @media screen and (max-width:847px)
                        margin 1rem auto 0.5rem
                div
                    border 1px solid rgba(250,250,250,0.8)
                    border-radius 5px
                    width 5.5rem
                    height 2rem
                    color #FFFFFF
                    font-weight 600
                    margin 0 auto
                    line-height 25px
    .major_businesses_mobile
        position relative
        width 92%
        margin 0 auto
        bottom 75pt
        z-index 9
        background #FFFFFF
        border-radius 8px
        box-shadow 0px 5px 9px 1px rgba(164, 164, 164, 0.51)
        @media screen and (min-width:769px)
            display none
        &>li
            height 90pt
            position relative
            .img1
                width 40pt
                position absolute
                left 20pt
                top 26.5pt
            .img4
                position absolute
                right 0
                top 0
                height 100%
            &:nth-child(1)
                .img4
                    border-top-right-radius 8px
            &:nth-child(5)
                .img4
                    border-bottom-right-radius 8px
            .text1
                color #223D6B
                font-family MicrosoftYaHei
                font-weight Regular
                font-size 18pt
                line-height 22.5pt
                position absolute
                top 28.5pt
                left 70pt
            .text2
                position absolute
                top 52.5pt
                left 70pt
                color #223D6B
                font-family MicrosoftYaHei
                font-weight Regular

</style>