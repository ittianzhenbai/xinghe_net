<template>
    <div class="box">
        <div class="cur_address">
            首页&gt;{{this.cur_address}}
        </div>
        <div class="options">
            <slot></slot>
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

        }
    }
}
</script>
<style lang="stylus" scoped>
.box
    background #F5FBFF
    .cur_address
        padding-top 1rem
        padding-left 3rem
        text-align left
        font-size 0.5rem
</style>