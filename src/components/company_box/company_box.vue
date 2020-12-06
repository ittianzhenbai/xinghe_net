<template>
    <div class="other_company">
        <div class="related_enterprises">相关企业成员</div>
        <ul class="menber_list">
            <li class="single_conpany" v-for="item in 10" :key="item">
                浙江华都控股集团股份有限公司
                <i class="el-icon-arrow-right"></i>        
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style lang="stylus" scoped>
.other_company
    width 100%
    padding 49px 12.9% 20px 12.6%
    margin 50px 0 0
    min-height 235px
    background #F5F5F5
    .related_enterprises
        font-family MicrosoftYaHei
        text-align left
        color #333333
        font-size 1rem
        font-weight Regular
        margin-bottom 20px
    .menber_list
        width 100%
        font-family MicrosoftYaHei
        color #333333
        font-size 1rem
        font-weight Regular
        &>li
            display inline-block
            float left
            padding 12px 16px
            width 272px
            height 80px
            background #FFFFFF
            border: 1px solid rgba(26, 100, 159, 0.5);
            margin-right 19px
            margin-bottom 19px
            &:nth-child(4n+0)
                @media screen and (min-width:1300px)
                    margin-right 0
        li:hover
            background #1A649F
            color #FFFFFF
</style>