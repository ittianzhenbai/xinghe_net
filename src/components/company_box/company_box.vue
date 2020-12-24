<template>
    <div class="other_company">
        <div class="related_enterprises">相关企业成员</div>
        <ul class="menber_list">
            <li 
                :class ="item.title.length>10?'single_conpany1':'single_conpany'"
                v-for="(item,index) in companys" 
                :key="index"
                @click="go_other_companys(item)"
            >
                {{item.title}}
                <i class="el-icon-arrow-right"></i>        
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        companys:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        go_other_companys(item){
            // window.open(item.url)
            console.log(item.title.length)
        }
    }
}
</script>
<style lang="stylus" scoped>
.other_company
    width 100%
    padding 49px 12.7% 20px 12.5%
    margin 50px 0 0
    min-height 235px
    background #F5F5F5
    @media screen and (max-width:768px)
        margin 2.95rem 0 0
        padding 2rem 1.5rem
    .related_enterprises
        font-family MicrosoftYaHei
        text-align left
        color #333333
        font-size 1rem
        font-weight Regular
        margin-bottom 20px
        @media screen and (max-width:768px)
            font-size 1.5rem
            line-height 2rem
    .menber_list
        width calc(100%+16px)
        font-family MicrosoftYaHei
        color #333333
        font-size 1rem
        font-weight Regular
        &>li
            display inline-block
            float left
            padding 0 16px
            width 272px
            cursor pointer
            height 80px
            background #FFFFFF
            border: 1px solid rgba(26, 100, 159, 0.5);
            margin-right 16px
            margin-bottom 15px
            @media screen and (max-width:768px)
                margin 0 0 1.5rem 0
                width 74.6%
                padding 1.45rem 1.6rem
                line-height 1.9rem
                background #223D6B
                color #FFFFFF
                font-size 1.6rem
        .single_conpany1
            @media screen and (min-width:769px)
                line-height 24px
                padding 16px 16px
        .single_conpany
            @media screen and (min-width:769px)
                line-height 80px
        li:hover
            background #1A649F
            color #FFFFFF
</style>