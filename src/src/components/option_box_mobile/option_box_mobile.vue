<template>
    <div class="box">
        <!-- <span class="cur_address">
          {{this.cur_address}}
        </span>
        <div class="nav_botton" @click="open_child_nav">
            导航按钮
        </div> -->
        <div class="nav_list" >
            <slot ></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        cur_address:{
            type:String,
            default:""
        }
    },
    data(){
        return{
            child_nav_show:false,//控制子导航显示
            click_count:0//记录点击按钮的次数 点击单次为打开 双次为关闭
        }
    },
    methods:{
        open_child_nav(){
             this.click_count++
            if(this.click_count%2 == 1){
                this.child_nav_show = true
            }
            if(this.click_count%2 == 0){
                this.child_nav_show = false
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.box
    .cur_address
        float left
        font-size 1.1rem
    .nav_botton
        float right
        height 1.7rem
    .nav_list
        clear both
        width 100%
        margin-bottom 0.2rem
</style>