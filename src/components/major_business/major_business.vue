<template>
    <div class="row">
         <ul class="major_businesses_pc">
            <li v-for="(item,index) in major_business" @click="godetail(item)" :key="index">
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
        <ul class="major_businesses_mobile">
            <li v-for="(item,index) in major_business" @click="godetail(item)" :key="index">
                <img  class="img1" :src="item.img1" alt="">
                <span class="text1">{{item.text1}}</span>
                <span class="text2">{{item.text2}}</span>
                <img  class="img4" :src="item.img4" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
import { mapMutations } from "vuex"
export default {
    data(){
        return{
            major_business:[
                {
                    img1:require("../../assets/16.png"),
                    img2:require("../../assets/01.png"),
                    img3:require("../../assets/06.png"),
                    img4:require("../../assets/41.png"),
                    text1:"内贸",
                    text2:"Within trade"
                },
                {
                    img1:require("../../assets/23.png"),
                    img2:require("../../assets/02.png"),
                    img3:require("../../assets/010.png"),
                    img4:require("../../assets/42.png"),
                    text1:"外贸",
                    text2:"Foreigh trade"
                },
                {
                    img1:require("../../assets/15.png"),
                    img2:require("../../assets/03.png"),
                    img3:require("../../assets/07.png"),
                    img4:require("../../assets/43.png"),
                    text1:"房地产",
                    text2:"Real estate"
                },
                {
                    img1:require("../../assets/14.png"),
                    img2:require("../../assets/04.png"),
                    img3:require("../../assets/08.png"),
                    img4:require("../../assets/44.png"),
                    text1:"金融投资",
                    text2:"Financial investment"
                },
                {
                    img1:require("../../assets/13.png"),
                    img2:require("../../assets/05.png"),
                    img3:require("../../assets/09.png"),
                    img4:require("../../assets/45.png"),
                    text1:"农业服务",
                    text2:"Agricultural Services"
                }
            ],
        }
    },
    methods:{
        ...mapMutations(["setActiveIndex","setchildActiveIndex"]),
        godetail(item){
            console.log(item)
            if(item.text1 == "内贸"){
                this.$router.push({
                    path:"/business_neimao"
                })
                this.setActiveIndex("4-1")
                this.setchildActiveIndex("1")
            }
            if(item.text1 == "外贸"){
                this.$router.push({
                    path:"/business_waimao"
                })
                this.setActiveIndex("4-2")
                this.setchildActiveIndex("2")
            }
            if(item.text1 == "房地产"){
                this.$router.push({
                    path:"/business_building"
                })
                this.setActiveIndex("4-3")
                this.setchildActiveIndex("3")
            }
            if(item.text1 == "金融投资"){
                this.$router.push({
                    path:"/business_finance"
                })
                this.setActiveIndex("4-4")
                this.setchildActiveIndex("4")
            }
            if(item.text1 == "农业服务"){
                this.$router.push({
                    path:"/business_agriculture"
                })
                this.setActiveIndex("4-5")
                this.setchildActiveIndex("5")
            }
        },
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
        @media screen and (max-width:768px)
            display none
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
    .major_businesses_mobile
        position relative
        width 92%
        margin 0 auto
        bottom 75pt
        z-index 9
        background #FFFFFF
        @media screen and (min-width:768px)
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