<template>
    <div class="container-fluid group_menber">
        <div class="row row1">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 group_pic">
                <img src="../../assets/1.png" alt="">
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 menber_list">
                <ul>
                    <li
                     v-for="(item,index) in 12" 
                     :key="index"
                     @mouseenter="changepics(index)"
                     >
                        <span v-show ="index<10">0{{index}}</span>
                        <span v-show ="index>=10">{{index}}</span>
                        <p class="title">中国茶叶拍卖交易服务有限公司</p>
                        <div class="left_hover">图标</div>
                        <div class="right_hover">
                            <p class="title1">中国茶叶拍卖交易服务有限公司</p>
                            <p class="company_intro">浙农控股集团有限公司坐落于以“天下第一潮”闻名的钱塘江畔，公司前身是始创于1952年的浙江省农业生产资料公司，公司前身是始创于1952年的浙江省农业生产资料公司公司前身是始创于1952年的浙江省农业生产资料公司1999年整体改制...</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mousecount:1,
            test:''
        }
    },
    methods:{
        changepics(index){
            console.log("666")
            this.test = index
        //   this.mousecount++
        //   if(this.mousecount%10==0){
        //       //节流操作
        //       console.log("666")
              
        //   }  
        }
    }
}
</script>
<style lang="stylus" scoped>
.group_menber
    width 100%
    padding 0
    margin 0
    .row1
        padding 0
        margin 100px 0
        width 100%
        .group_pic
            width 100%
            height 20rem
            padding 0
            img
                width 60%
                height 100%
                margin-left 40%
        .menber_list
            height 20rem
            padding 0 0
            margin 0
            overflow scroll
            overflow-x hidden
            ul
                padding 0 0
                margin 0
                width 80%
                background-image linear-gradient(to bottom, #2C9AF1 2%,#2583CF 10%,#2077BD 18%,#1C6CAC 28%,#19619A 38%,#165587 48%,#124771 58%,#104066 68%, #0F3A5C 78%, #0D314E 88%,#0A2942 100%)
                &>li
                    height 2rem
                    border-bottom 1px solid rgba(250,250,250,0.8)
                    display flex
                    height 80px
                    fong-size 1.2rem
                    line-height 80px
                    span
                        flex 1
                        display inline-block
                        border-right 1px solid #FFFFFF
                        color #FFFFFF
                    .right_hover,.left_hover
                        display none
                    .title
                        flex 8
                        margin-bottom 0
                        text-align left
                        padding-left 2rem
                        font-family MicrosoftYaHei
                        color #FFFFFF
                        //单行显示省略号
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap
                li:hover
                    height 120px
                    background #FFFFFF
                    span
                        display none
                    .title
                        display none
                    .left_hover
                        flex 1
                        display block
                        line-height 120px
                        border 1px solid #91CFFF
                    .right_hover
                        display block
                        flex 8
                        padding-left 2rem
                        font-family Microsoft YaHei 
                        .title1
                            color #333333
                            font-weight bold    
                            // flex 1
                            display block
                            line-height 1rem
                            padding-top 1rem
                            text-align left
                            //单行显示省略号
                            overflow hidden
                            text-overflow ellipsis
                            white-space nowrap
                            width 90%
                        .company_intro
                            font-size 0.8rem
                            line-height 1.25rem
                            text-align left
                            padding-bottom -15px
                            display -webkit-box
                            -webkit-box-orient vertical
                            -webkit-line-clamp 2
                            overflow hidden
                        //     width 90%
                        //     height 50px
                        //     position relative
                        // .company_intro:after
                        //     content "..."
                        //     position absolute
                        //     bottom 0
                        //     right 0
                        //     background #FFF
                        //     padding-left 10px
</style>     