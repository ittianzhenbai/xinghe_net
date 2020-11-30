<template>
    <div class="anniu" @click="totop">
        <i class="el-icon-arrow-up"></i>
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
    right 60px
    font-size 3rem
    color red
</style>