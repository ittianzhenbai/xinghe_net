<template>
    <div class="anniu" @click="totop">
        <img src="../../assets/17.png" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        totop(){
            //让页面滚动回底部
            document.body.scrollTop=document.documentElement.scrollTop=0
        }
    }
}
</script>
<style lang="stylus" scoped>
.anniu
    position fixed
    bottom 150px
    color red
    right 60px
    @media screen and (max-width:768px)
        display none
    img
        width 60px
        height 60px
        @media screen and (max-width:768px)
            height 45px
            width 45px
</style>