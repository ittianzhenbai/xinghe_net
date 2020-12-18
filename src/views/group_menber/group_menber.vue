<template>
    <div class="container-fluid group_menber">
        <div class="row row1">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 group_pic">
                <img v-lazy="this.cur_image" alt="">
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 menber_list">
                <ul @mouseleave="godefault">
                    <li
                     v-for="(item,index) in this.groupmenber" 
                     :key="index"
                     @click="gomenber_net(item)"
                     @mouseenter="changepics(item)"
                     ref="menbergroup"
                     >
                        <span v-show ="index<9">0{{index+1}}</span>
                        <span v-show ="index>=9">{{index+1}}</span>
                        <p class="title">{{item.title}}</p>
                        <div class="left_hover">
                            <i class="el-icon-s-promotion"/>
                        </div>
                        <div class="right_hover">
                            <p class="title1">{{item.title}}</p>
                            <p class="company_intro">{{item.content}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="row row_mobile">
            <li
                v-for="(item,index) in this.groupmenber" 
                :key="index"
                class="col-12 col-sm-12 row"
                @click="gomenber_net(item)"
                @mouseenter="changepics(item)"
                >
                <div class="col-12 col-sm-12 group_pic">
                    <img v-lazy="item.image" alt="">
                </div>
                <div class="row group_intro">
                    <div class="col-3 col-sm-3 logo">
                        <!-- <img :src="item.logo" alt=""> -->
                        <i class="el-icon-s-promotion"/>
                    </div>
                    <div class="col-9 col-sm-9 intro">
                        <p class="title1">{{item.title}}</p>
                        <p class="company_intro">{{item.content}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mousecount:1,
            test:'',
            groupmenber:"",//成员信息,
            cur_image:""
        }
    },
    created(){
        this.getGroupMenber() 
    },
    mounted(){
        this.godefault()
    },
    methods:{
        changepics(item){
           this.$nextTick(()=>{
               this.cur_image = item.image
                var self = this
                setTimeout(()=>{
                   self.$refs.menbergroup[0].removeAttribute("class", "default")
                },300)
           })
        },
        godefault(){
            this.$nextTick(()=>{
                var self = this
                setTimeout(()=>{
                    self.$refs.menbergroup[0].setAttribute("class", "default")
                },500)
            })
        },
        gomenber_net(item){
            window.open(item.url)
        },
        getGroupMenber(){
            this.axios.get(
                "api/singlepage/cyqy"
            ).then(res=>{
                if(res.data.code == 1){
                    this.groupmenber = res.data.data
                    this.cur_image = res.data.data[0].image
                }
            })
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
        @media screen and (max-width:768px)
            display none
        .group_pic
            width 100%
            height 20rem
            padding 0
            img
                width 60%
                height 100%
                margin-left 40%
                box-shadow 0px 5px 9px 1px rgba(164, 164, 164, 0.51)
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
                border 1px solid #333333
                background-image linear-gradient(to bottom, #2C9AF1 2%,#2583CF 10%,#2077BD 18%,#1C6CAC 28%,#19619A 38%,#165587 48%,#124771 58%,#104066 68%, #0F3A5C 78%, #0D314E 88%,#0A2942 100%)
                &>li
                    height 2rem
                    border-bottom 1px solid #91CFFF
                    display flex
                    height 80px
                    fong-size 1.2rem
                    line-height 80px
                    span
                        flex 1
                        display inline-block
                        min-width 3.4rem
                        border-right 1px solid #91CFFF
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
                li:hover,.default
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
                        border-right 1px solid #91CFFF
                        min-width 3.4rem
                        .el-icon-s-promotion
                            color #28436E
                            font-size 3rem
                            line-height 120px
                        img
                            width 80%
                            margin 0 auto
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
    .row_mobile
        margin 0
        width 100%
        @media screen and (min-width:769px)
            display none
        &>li
            margin 0 0 1rem
            padding 0
            width 100%
            .group_pic
                width 100%
                padding 0
                img 
                    width 91.8%
                    height 25rem
            .group_intro
                margin 0 auto
                border 1px solid rgba(229, 229, 229, 0.8)
                padding 0
                width 92%
                .logo
                    padding 0
                    margin 0
                    .el-icon-s-promotion
                        font-size 3.4rem
                        margin 2.55rem 1.1rem 2.55rem 1.1rem
                .intro 
                    padding 0
                    font-family Microsoft YaHei
                    vertical-align top
                    border-left 1px solid rgba(229, 229, 229, 0.8)
                    margin 1.3rem 0
                    padding-left 0.95rem
                    .title1
                        color #333333
                        font-weight bold    
                        font-size 1.7rem
                        display block
                        line-height 1.7rem
                        text-align left
                        //单行显示省略号
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap
                        margin-bottom 0
                    .company_intro
                        text-align left
                        margin-bottom 0
                        font-size 1.2rem
                        line-height 1.5rem
                        padding-top 0.95rem
                        text-align left
                        display -webkit-box
                        -webkit-box-orient vertical
                        -webkit-line-clamp 2
                        overflow hidden
                    

</style>     