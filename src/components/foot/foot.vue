<template>
    <div class="foot container-fluid">
        <div class="row foot_content">
            <div class="top_left col-12 col-md-8">
                <div class="title">联系我们</div>
                <ul>
                    <li>
                        <img src="../../assets/4.png" alt="">
                        地<span class="kongge"></span>址:浙江省杭州市延安路312号
                    </li>
                    <li>
                        <img src="../../assets/6.png" alt="">
                        传<span class="kongge"></span>真:0571-8701 4212
                    </li>
                    <li>
                        <img src="../../assets/8.png" alt="">
                        技术维护:浙江省兴合集团有限责任公司信息技术部
                    </li>
                    <li>
                        <img src="../../assets/5.png" alt="">
                        服务热线:0571-8703 2510
                    </li>
                    <li>
                        <img src="../../assets/7.png" alt="">
                        电子邮箱:xinghegroup@zjcoop.com
                    </li>
                </ul>
            </div>
            <div class="top_left_mobile col-12">
                <el-collapse  @change="handleChange">
                    <el-collapse-item title="联系我们" name="1" class="el_title">
                        <ul>
                            <li>
                                <img src="../../assets/4.png" alt="">
                                地<span class="kongge"></span>址:
                                <span class="text1">浙江省杭州市延安路312号</span>
                            </li>
                            <li>
                                <img src="../../assets/6.png" alt="">
                                传<span class="kongge"></span>真:
                                <span class="text1">0571-8701 4212</span>
                            </li>
                            <li>
                                <img src="../../assets/8.png" alt="">
                                技术维护:
                                <span class="text1">浙江省兴合集团有限责任公司信息技术部</span>
                            </li>
                            <li>
                                <img src="../../assets/5.png" alt="">
                                服务热线:
                                <span class="text1">0571-8703 2510</span>
                            </li>
                            <li>
                                <img src="../../assets/7.png" alt="">
                                电子邮箱:
                                <span class="text1">xinghegroup@zjcoop.com</span>
                            </li>
                            <li>
                                <span class="demonstration1">兴合集团公众号</span>
                                <img class="img1" src="../../assets/group_erweima.jpg" alt="">
                            </li>
                        </ul>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div class="top_right col-12 col-md-4">
                <img class="img1" src="../../assets/group_erweima.jpg" alt="">
                <span class="demonstration">兴合集团公众号</span>
            </div>
        </div>
        <div class="cutline"></div>
        <div class="bottom">
            <div>浙江省兴合集团有限责任公司 版权所有</div>
            <div>浙ICP备11027278号-1</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        handleChange(val) {
            console.log(val);
        }
    }
}
</script>
<style lang="stylus" scoped>
/deep/.el-collapse-item__header
        background-color #223D6B
        color #ffff
        padding 0 
        border-bottom none
        font-size 1.5rem
        margin-top 1.4rem
/deep/.el-collapse-item__header.is-active 
        // border-bottom 1px solid rgba(250,250,250,0.6)
/deep/.el-collapse-item__wrap
        background-color #223D6B
        color #ffff
        padding 0
        border none
        font-size 1.2rem
        line-height 1.6rem
/deep/.el-collapse
        border none
/deep/.el-collapse-item__arrow.is-active
        //点击后的方向
        transform rotate(-90deg)
/deep/.el-collapse-item__arrow, .el-tabs__nav
        //默认方向
        transform rotate(90deg)
.foot
    background-color #223D6B
    padding 0
    .foot_content
        margin 0
        padding 0 7% 0
        @media screen and (max-width:768px)
            padding 0 4%
        .top_left
            padding 0
            float left
            @media screen and (max-width:768px)
                display none
            .title
                color #fff
                text-align left
                margin-top 28px
                font-size 0.9rem
                font-family MicrosoftYaHei
                font-weight Regular
                margin-bottom 6px
                @media screen and (max-width:768px)
                    padding 0
            ul
                list-style none
                padding 0 0
                &>li
                    float left
                    width 33.3%
                    font-size 0.7rem
                    @media screen and (max-width:1700px)
                        width 50%
                    @media screen and (max-width:1270px)
                        width 100%
                    // padding-right 30px
                    @media screen and (max-width: 768px)
                        padding-right 0
                    text-align left
                    color #fff
                    line-height 1.5rem
                    &>img
                        width 1.2rem
                        padding-right 0.5rem
                        display inline-block
                    .kongge
                        padding-right 1.4rem
        .top_left_mobile
            width 100%
            padding 0
            background #223D6B
            @media screen and (min-width:769px)
                display none
            ul
                list-style none
                padding 0 0
                &>li
                    float left
                    width 33.3%
                    font-size 1.2rem
                    line-height 1.6rem
                    @media screen and (max-width:1919px)
                        width 50%
                    @media screen and (max-width:1270px)
                        width 100%
                    padding-right 30px
                    @media screen and (max-width: 768px)
                        padding-right 0
                    text-align left
                    color #fff
                    line-height 2rem
                    &>img
                        width 1.5rem
                        padding-right 0.5rem
                        display inline-block
                    .img1
                        width 120px
                        height 120px
                        margin-bottom 15px
                        margin-top 1rem
                        @media screen and (max-width:280px)
                            width 80px
                            height 80px
                    .text1
                        display inline-block
                        width 71%
                        vertical-align top
                        @media screen and (max-width:320px)
                            width 60%
                        @media screen and (min-width:320px) and (max-width:540px)
                            width 68%
                        @media screen and (min-width:540px) and (max-width:768px)
                            width 70%
                    .kongge
                        padding-right 2.4rem
                    .demonstration1
                        display inline-block
                        float left
                        font-size 1.2rem
                        line-height 120px
                        padding-right 2rem
                        margin-top 1rem
                        @media screen and (min-width:769px)
                            display none
                        @media screen and (max-width:280px)
                           line-height 1.2rem
        .top_right
            color #fff
            padding-top 60px
            @media screen and (max-width: 768px)
                padding-top 20px
                display none
            .demonstration
                clear both
                display block
                text-align right
                font-size 0.7rem
                @media screen and (max-width:768px)
                    display none
            .img1
                width 69px
                height 69px
                float right
                margin-right 0.75rem
                margin-bottom 15px
    .cutline
        clear both
        padding-top 10px
        margin 0 auto
        width 85%
        @media screen and (max-width:768px)
            padding 1px
            width 92%
        border-bottom 1px dashed rgba(250,250,250,0.3)
    .bottom
        padding-top 23px
        color #FFF!important
        font-size 0.7rem
        line-height 1.2rem
        padding-bottom 23px
        @media screen and (max-width:768px)
            font-size 1.2rem
            padding-top 2.5rem
            line-height 1.6rem
            padding-bottom 2.35rem
</style>