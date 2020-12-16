<template>
    <div class="search_box" v-show="alert_box == true">
        <img class="close_btn" @click="alert_box = false" src="../../assets/31.png" alt="">
        <div class="input_wrap">
            <input class="input" v-model="message" type="text" placeholder="请输入汉字" >
            <img class="search_btn" src="../../assets/30.png" @click="gonews" alt="">
        </div>
    </div>
</template>
<script>
import {mapMutations } from "vuex"
export default {
    data(){
        return{
            alert_box:false,
            message:""
        }
    },
    methods:{
        ...mapMutations(["setActiveIndex","setsearchKeywords"]),
       gonews(){
           console.log(this.message)
           this.alert_box = false
           this.$router.push({
               path:"/search_news_list",
               query:{
                   fromsearch:"1"
               }
           })
           this.setActiveIndex("3-1")
           this.setsearchKeywords(this.message)
       }
    }
}
</script>
<style lang="stylus" scoped>
.search_box
    height 140px
    width 455px
    background #223D6B
    position relative
    .close_btn
        position absolute
        top 20px
        right 6.6%
        width 20px
        height 20px
    .input_wrap
        width 84%
        border-radius 25px
        font-size 1rem
        background #FFFFFF
        font-family MicrosoftYaHei
        font-weight Regular
        line-height 20px
        padding-left 0.5rem
        position relative
        top 59px
        left 9%
        height 50px
        .input
            border-radius 25px
            width 85%
            color #666666
            padding 11px 0 11px 5px
        .search_btn
            height 24px
            width 24px
</style>