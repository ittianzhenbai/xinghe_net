<template>
    <div class="search_box1" v-show="alert_box == true">
        <img class="close_btn" @click="alert_box = false" src="../../assets/31.png" alt="">
        <div class="input_wrap">
            <input id="myText" class="input1" v-model="message" type="text" placeholder="请输入搜索条件" @click="iosfocus">
            <img class="search_btn" src="../../assets/3.png" @click="gonews" alt="">
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations } from "vuex"
export default {
    data(){
        return{
            alert_box:false,
            message:""
        }
    },
    computed:{
        ...mapState(["browserType"])
    },
    methods:{
        ...mapMutations(["setActiveIndex","setsearchKeywords"]),
       gonews(){
           this.alert_box = false
           this.$router.push({
               path:"/search_news_list",
               query:{
                   fromsearch:"1",
                   keywords:this.message
               }
           })
           this.setActiveIndex("3-1")
           this.setsearchKeywords(this.message)
       },
       iosfocus(){
           if(this.browserType == "IOS"){
               setTimeout(()=>{
                    document.getElementById("myText").focus()
                },500)
           }
       }
    },
    watch:{
        alert_box(newVal){
            if(newVal == true&&this.browserType !=="IOS"){
                //打开弹窗后让输入框 自动聚焦
                setTimeout(()=>{
                    document.getElementById("myText").focus()
                },500)
            }else{
                document.addEventListener("click",this.iosfocus)
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
input
    -webkit-user-select: auto !important;
    -moz-user-select: auto !important;
.search_box1
    width 100%
    height 100%
    background #001435
    opacity 0.9
    position fixed
    top 0
    left 0
    z-index 99999999
    .close_btn
        position absolute
        top 35pt
        right 11.3%
        width 20px
        height 20px
    .input_wrap
        width 92%
        border-radius 25pt
        font-size 20pt
        background #001435
        border 1pt solid #FFFFFF
        opacity 0.9
        font-family MicrosoftYaHei
        font-weight Regular
        line-height 25pt
        padding-left 0.5rem
        position relative
        top 75pt
        left 4%
        height 50pt
        .input1
            border-radius 25px
            width 75%
            color #FFFFFF
            background transparent
            padding 11pt 0 11pt 5px
            position absolute
            left 23pt
            top 0
        .search_btn
            height 20pt
            width 20pt
            position absolute
            right 23pt
            top 16pt
</style>