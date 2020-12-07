<template>
    <div class="foot container-fluid">
        <div class="row">
            <div class="top_left col-12 col-md-8">
                <div class="title">联系我们</div>
                <ul>
                    <li>
                        <img src="../../assets/4@2x.png" alt="">
                        地<span class="kongge"></span>址:浙江省杭州市延安路312号
                    </li>
                    <li>
                        <img src="../../assets/6@2x.png" alt="">
                        传<span class="kongge"></span>真:0571-8701 4212
                    </li>
                    <li>
                        <img src="../../assets/8@2x.png" alt="">
                        技术维护:浙江省兴合集团有限责任公司信息技术部
                    </li>
                    <li>
                        <img src="../../assets/5@2x.png" alt="">
                        服务热线:0571-8703 2510
                    </li>
                    <li>
                        <img src="../../assets/7@2x.png" alt="">
                        电子邮箱:xinghegroup@zjcoop.com
                    </li>
                </ul>
            </div>
            <div class="top_right col-12 col-md-4">
                <el-image
                    style="width: 60px; height: 60px"
                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    fit="cover">
                </el-image>
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
}
</script>
<style lang="stylus" scoped>
.foot
    background-color #223D6B
    padding 0 40px
    .row
        margin 0
        .top_left
            float left
            .title
                color #fff
                text-align left
                margin-top 1.7rem
                font-size 0.9rem
            ul
                list-style none
                padding 0 0
                &>li
                    float left
                    width 33.3%
                    font-size 0.7rem
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
                        width 1.2rem
                        padding-right 0.5rem
                        display inline-block
                    .kongge
                        padding-right 1.4rem
        .top_right
            float right
            color #fff
            padding-top 60px
            @media screen and (max-width: 768px)
                padding-top 20px
            .demonstration
                display block
                font-size 0.7rem
    .cutline
        clear both
        padding-top 10px
        margin 0 auto
        width 98%
        border-bottom 1px dashed #FFF
    .bottom
        padding-top 10px
        color #FFF!important
        font-size 0.7rem
</style>