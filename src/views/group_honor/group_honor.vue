<template>
    <div class="container-fluid group_honner">
        <div class="row row1">
            <div class="item1 col-12 col-md-4">
                <img class="img1" src="../../assets/017.png" alt="">
                <span class="title">2020年中国第500强企业</span>
                <span class="paihang">第<animate-number from="1" to="179"></animate-number>位</span>
            </div>
            <div class="col-12 col-md-4 row coulum2">
                <div class="item2 col-12 col-md-12">
                    <img class="img2" src="../../assets/019.png" alt="">
                    <span class="title">2020年中国服务业500强企业</span>
                    <span class="paihang">第<animate-number from="1" to="73"></animate-number>位</span>
                </div>
                <div class="item3 col-12 col-md-12">
                    <img class="img3" src="../../assets/018.png" alt="">
                    <span class="title">2019年浙江省服务业百强企业</span>
                    <span class="paihang">第<animate-number from="1" to="6"></animate-number>位</span>
                </div>
            </div>
            <div class="item4 col-12 col-md-4">
                <img class="img4" src="../../assets/021.png" alt="">
                <span class="title">2019年浙江省综合百强企业</span>
                <span class="paihang">第<animate-number from="1" to="15"></animate-number>位</span>
            </div>
            <div class="item5 col-12 col-md-12">
                <img class="img5" src="../../assets/020.png" alt="">
                <span class="title1">浙江省重点流通企业</span>
            </div>
        </div>
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
.group_honner
    padding 0
    margin 0
    width 100%
    .row1
        width 80%
        margin 100px auto
        padding 0
        .item1
            height 24rem
            padding 0 40px
            position relative
            background #F2F2F2
            @media screen and (max-width:768px)
                height 18rem
                margin-bottom 2rem
            .img1
                width 53%
                position absolute
                right 0
                bottom 0
            .title
                position absolute
                top 50px
                left 29px
                font-size 1rem
                color #666666
                font-family MicrosoftYaHei
                font-weight Regular
            .paihang
                position absolute
                top 89px
                left 29px
                font-size 2rem
                color #666666
                font-family MicrosoftYaHei
                font-weight Bold
        .coulum2
            padding 0 40px
            margin 0
            height 24rem
            @media screen and (max-width:768px)
                padding 0
            .item2
                margin 0 0 40px
                position relative
                background #F2F2F2
                @media screen and (max-width:768px)
                    height 18rem
                .img2
                    width 29.5%
                    position absolute
                    right 3.8%
                    bottom 0
                .title
                    position absolute
                    top 50px
                    left 29px
                    font-size 1rem
                    color #666666
                    font-family MicrosoftYaHei
                    font-weight Regular
                .paihang
                    position absolute
                    top 89px
                    left 29px
                    font-size 2rem
                    color #666666
                    font-family MicrosoftYaHei
                    font-weight Bold
            .item3
                position relative
                background #F2F2F2
                @media screen and (max-width:768px)
                    height 18rem
                    margin-bottom 2rem
                .img3
                    width 29.5%
                    position absolute
                    right 3.8%
                    bottom 0
                .title
                    position absolute
                    top 50px
                    left 29px
                    font-size 1rem
                    color #666666
                    font-family MicrosoftYaHei
                    font-weight Regular
                .paihang
                    position absolute
                    top 89px
                    left 29px
                    font-size 2rem
                    color #666666
                    font-family MicrosoftYaHei
                    font-weight Bold
        .item4
            padding 0
            position relative
            background #F2F2F2
            height 24rem
            @media screen and (max-width:768px)
                height 18rem
            .img4
                width 41.6%
                position absolute
                bottom 0
                right 0
            .title
                position absolute
                top 50px
                left 29px
                font-size 1rem
                color #666666
                font-family MicrosoftYaHei
                font-weight Regular
            .paihang
                position absolute
                top 89px
                left 29px
                font-size 2rem
                color #666666
                font-family MicrosoftYaHei
                font-weight Bold
        .item5
            height 14.5rem
            padding 0
            margin-top 45px
            position relative
            background #F2F2F2
            .img5
                width 16%
                position absolute
                bottom 0
                right 0
            .title1
                position absolute
                top 50px
                left 29px
                font-size 1.5rem
                color #666666
                font-family MicrosoftYaHei
                font-weight Bold
    
</style>