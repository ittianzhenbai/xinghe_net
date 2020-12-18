<template>
    <div class="container-fluid group_honner">
        <div class="row row1">
            <div class="item1 col-12 col-sm-12 col-md-4">
                <img class="img1" src="../../assets/017.png" alt="">
                <span class="title">{{this.honor[0].title}}</span>
                <span class="paihang">
                    第<animate-number 
                    from="1" 
                    :to="this.honor[0].value"
                    mode="auto"
                    duration="2000"
                    ></animate-number>位
                </span>
            </div>
            <div class="col-12 col-sm-12 col-md-4 row coulum2">
                <div class="item2 col-12 col-sm-12 col-md-12">
                    <img class="img2" src="../../assets/019.png" alt="">
                    <span class="title">{{this.honor[1].title}}</span>
                    <span class="paihang">
                        第<animate-number 
                        from="1" 
                        :to="this.honor[1].value"
                        mode="auto"
                        duration="2000"
                        ></animate-number>位
                    </span>
                </div>
                <div class="item3 col-12 col-sm-12 col-md-12">
                    <img class="img3" src="../../assets/018.png" alt="">
                    <span class="title">{{this.honor[2].title}}</span>
                    <span class="paihang">
                        第<animate-number 
                        from="1" 
                        :to="this.honor[2].value"
                        mode="auto"
                        duration="2000"
                        ></animate-number>位
                    </span>
                </div>
            </div>
            <div class="item4 col-12 col-sm-12 col-md-4">
                <img class="img4" src="../../assets/021.png" alt="">
                <span class="title">{{this.honor[3].title}}</span>
                <span class="paihang">
                    第<animate-number 
                    from="1" 
                    :to="this.honor[3].value"
                    mode="auto"
                    duration="2000"
                    ></animate-number>位
                </span>
            </div>
            <div class="item5 col-12 col-sm-12 col-md-12">
                <img class="img5" src="../../assets/020.png" alt="">
                <span class="title1">{{this.honor[4].title}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            honor:"",
        }
    },
    mounted(){
        this.getGroupHonor()
    },
    methods:{
        getGroupHonor(){
            this.axios.get(
                "api/singlepage/honour"
            ).then(res=>{
                if(res.data.code == 1){
                    this.honor = res.data.data
                }
            })
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
        @media screen and (max-width:769px)
            width 100%
            padding 1.25rem 1.5rem
            margin 0
        .item1
            height 24rem
            padding 0 40px
            position relative
            background #F2F2F2
            @media screen and (max-width:768px)
                height 18rem
                margin-bottom 1.45rem
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
            @media screen and (min-width:769px)
                height 24rem
            @media screen and (max-width:768px)
                padding 0
            .item2
                margin 0 0 40px
                position relative
                background #F2F2F2
                @media screen and (max-width:768px)
                    height 18rem
                    margin 0 0 1.45rem
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
                    margin-bottom 1.45rem
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
            @media screen and (max-width:768px)
                margin-top 1.45rem
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