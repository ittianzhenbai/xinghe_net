<template>
    <div class="container-fluid group_menber">
        <div class="row row1">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 group_pic">
                <transition name="slide-fade">
                    <img v-lazy="this.cur_image" ref="imgs" alt="">
                </transition>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 menber_list">
                <div class="list1"> 
                     <ul 
                        @mouseleave="godefault"
                    >
                        <li
                        v-for="(item,index) in this.groupmenber" 
                        :key="index"
                        @click="gomenber_net(item)"
                        @mouseenter="changepics(item,index)"
                        ref="menbergroup"
                        >
                            <span v-show ="index<9">0{{index+1}}</span>
                            <span v-show ="index>=9">{{index+1}}</span>
                            <p class="title">{{item.title}}</p>
                            <div class="left_hover">
                                <img :src="item.logo" alt="">
                            </div>
                            <div class="right_hover">
                                <p class="title1">{{item.title}}</p>
                                <p class="company_intro">{{item.content}}</p>
                            </div>
                        </li>
                    </ul>
                </div>  
            </div>
        </div>
        <ul class="row row_mobile">
            <li
                v-for="(item,index) in this.groupmenber" 
                :key="index"
                class="col-12 col-sm-12 row"
                @click="gomenber_net(item)"
                >
                <div class="col-12 col-sm-12 group_pic">
                    <img v-lazy="item.image" alt="">
                </div>
                <div class="row group_intro">
                    <div class="col-3 col-sm-3 logo">
                        <img :src="item.logo" alt="">
                        <!-- <i class="el-icon-s-promotion"/> -->
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
        changepics(item,index){
            //鼠标移入后做对应的图片切换
           this.$nextTick(()=>{
               this.cur_image = item.image
               this.$refs.imgs.setAttribute("class", "imgs")
                var self = this
                setTimeout(()=>{
                   self.$refs.menbergroup[0].removeAttribute("class", "default")
                },300)
           })
           if(index !== 0&&index !== this.groupmenber.length-1){
                this.$nextTick(()=>{
                    this.cur_image = item.image
                        var self = this
                        self.$refs.menbergroup[index].style.transformOrigin="50% 50%"
                })
           }else if(index == this.groupmenber.length-1){
                this.$nextTick(()=>{
                    this.cur_image = item.image
                        var self = this
                        self.$refs.menbergroup[index].style.transformOrigin="100% 100%"
                })
           }else if(index == 0){
                this.$nextTick(()=>{
                    this.cur_image = item.image
                        var self = this
                        self.$refs.menbergroup[0].style.transformOrigin="0% 0%"
                })
           }
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
    },
    watch:{
        cur_image(){
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
            height 32rem
            padding 0
            img
                width 75%
                height 100%
                margin-left 25%
            .imgs
                -webkit-transition opacity 1s ease-in-out
                -moz-transition opacity 1s ease-in-out
                -o-transition opacity 1s ease-in-out
                transition opacity 1s ease-in-out
        .menber_list
            padding 0 0
            margin 0
            .list1
                width 75%
                overflow scroll
                overflow-x hidden
                height 32rem
                ul
                    padding 0 0
                    margin 0
                    width 100%
                    position relative
                    border 1px solid #e5e5e5
                    background-image linear-gradient(to bottom, #2C9AF1 2%,#2583CF 10%,#2077BD 18%,#1C6CAC 28%,#19619A 38%,#165587 48%,#124771 58%,#104066 68%, #0F3A5C 78%, #0D314E 88%,#0A2942 100%)
                    &>li
                        height 2rem
                        border-bottom 1px solid rgba(145,207,255,0.1)
                        display flex
                        height 80px
                        font-size 1.2rem
                        line-height 80px
                        cursor pointer
                        box-sizing border-box
                        transition all .5s
                        -webkit-transition all .5s /* Safari */
                        &:last-child
                            border-bottom none
                        span
                            flex 1.5
                            display inline-block
                            min-width 3.4rem
                            border-right 1px solid rgba(250,250,250,0.5)
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
                        transform scaleY(1.5)
                        background #FFFFFF
                        transform-origin 0 0
                        span
                            display none
                        .title
                            display none
                        .left_hover
                            flex 1.5
                            display block
                            border-right 1px solid #91CFFF
                            min-width 3.4rem
                            img
                                width 80%
                                margin 0 auto
                                max-height 60% 
                        .right_hover
                            display block
                            flex 8
                            padding-left 2rem
                            font-family Microsoft YaHei 
                            .title1
                                color #333333
                                font-weight bold    
                                display block
                                line-height 0.8rem
                                font-size 0.8rem
                                padding-top 0.8rem
                                text-align left
                                transform scaleX(1.5)
                                transform-origin 0 0
                                //单行显示省略号
                                overflow hidden
                                text-overflow ellipsis
                                white-space nowrap
                                width 60%
                                margin-bottom 6px
                            .company_intro
                                font-size 0.4rem
                                line-height 0.8rem
                                text-align left
                                transform scaleX(1.5)
                                transform-origin 0 0
                                display -webkit-box
                                width 60%
                                -webkit-box-orient vertical
                                -webkit-line-clamp 2
                                overflow hidden
                                @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) 
                                    overflow hidden
                                    text-overflow ellipsis
                                    white-space nowrap
                                    width 60%
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
                    img 
                        width 80%
                        margin 2.5rem 0.6rem
                        vertical-align middle
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
                        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) 
                            overflow hidden
                            text-overflow ellipsis
                            white-space nowrap
                            width 90%
</style>     