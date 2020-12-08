<template>
    <div class="container-fluid group_mission">
        <ul class="row list1">
            <li class="col-12 col-sm-6 col-md-6 col-lg-6">
                <img class="icon1" src="../../assets/24.png" alt="请稍等，正在加载中">
                <div class="title">使命</div>
                <p class="text1">联结内外 沟通城乡 服务“三农”</p>
            </li>
            <li class="col-12 col-sm-6 col-md-6 col-lg-6">
                <img class="pic1" src="../../assets/015.png" alt="">
            </li>
            <li class="col-12 col-sm-6 col-md-6 col-lg-6">
                <img class="icon1" src="../../assets/25.png" alt="请稍等，正在加载中">
                <div class="title">愿景</div>
                <p class="text1">
                成为贸、产、融、投结合发展 具有领先优势和强大实力的综合性企业集团
                </p>
            </li>
            <li class="col-12 col-sm-6 col-md-6 col-lg-6">
                <img class="pic1" src="../../assets/016.png" alt="">
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
.group_mission
    padding 0
    .list1
        width 100%
        padding 0 15%
        margin 100px 0 100px
        &>li
            background #F2F2F2
            padding 0
            .icon1
                width 75px
                height 88px
                margin-top 88px
            .title
                margin 38px 0
                font-size 1.6rem
                color #666666
                font-weight Regular
                font-family MicrosoftYaHei
            .text1
                width 85%
                margin 0 auto
                text-align center
                font-size 1.2rem
                color #666666
                font-weight Regular
                font-family MicrosoftYaHei
            .pic1
                width 100%
                min-height 371px
        li:nth-child(1)
            margin-bottom 2rem
        li:nth-child(2)
            margin-bottom 2rem
            
</style>