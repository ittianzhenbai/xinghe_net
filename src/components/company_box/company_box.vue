<template>
    <div class="other_company">
        <div class="related_enterprises">相关成员企业</div>
        <ul class="menber_list">
            <li 
                v-for="(item,index) in companys" 
                :key="index"
                @click="go_other_companys(item)"
            >
                <span class="text">
                    {{item.title}}
                    <i class="el-icon-arrow-right"></i> 
                </span>
                       
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
            window.open(item.url)
        }
    }
}
</script>
<style lang="stylus" scoped>
.other_company
    width 100%
    padding 0px 12.7% 0px 12.5%
    margin 50px 0 0
    min-height 100px
    // background #F5F5F5
    // border 1px solid red
    @media screen and (max-width:768px)
        margin 2.95rem 0 0
        padding 2rem 1.5rem
    .related_enterprises
        font-family MicrosoftYaHei
        text-align left
        color #333333
        font-size 1rem
        font-weight Regular
        margin-bottom 14px
        @media screen and (max-width:768px)
            font-size 1.5rem
            line-height 2rem
    .menber_list
        width calc(100%+16px)
        font-family MicrosoftYaHei
        color #333333
        font-size 1rem
        font-weight Regular
        @media screen and (max-width:768px)
            width 100%
        &>li
            display inline-block
            float left
            padding 0 16px
            width 272px
            cursor pointer
            height 50px
            background #FFFFFF
            border: 1px solid rgba(26, 100, 159, 0.5);
            margin-right 16px
            margin-bottom 20px
            line-height 45px
            @media screen and (max-width:768px)
                margin 0 0 1.5rem 0
                width 100%
                padding 0 1.6rem
                background #223D6B
                color #FFFFFF
                font-size 1.6rem
            .text
                display inline-block
                vertical-align middle
                line-height 1.8rem
                @media screen and (min-width:769px)
                    line-height 1.2rem
        li:hover
            background #1A649F
            color #FFFFFF
</style>