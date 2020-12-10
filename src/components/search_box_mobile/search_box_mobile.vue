<template>
    <div class="search_box1" v-show="alert_box == true">
        <img class="close_btn" @click="alert_box = false" src="../../assets/31.png" alt="">
        <div class="input_wrap">
            <input class="input" v-model="message" type="text" placeholder="请输入汉字" >
            <img class="search_btn" src="../../assets/3.png" @click="gonews" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            alert_box:false,
            message:""
        }
    },
    methods:{
       gonews(){
           console.log(this.message)
           this.alert_box = false
       }
    }
}
</script>
<style lang="stylus" scoped>
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
        left 15pt
        height 50pt
        .input
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