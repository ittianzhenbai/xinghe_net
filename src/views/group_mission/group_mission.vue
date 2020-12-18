<template>
    <div class="container-fluid group_mission">
        <ul class="row list1">
            <li class="col-12 col-sm-6 col-md-6 col-lg-6">
                <img class="icon1" v-lazy="this.shiming.logo" alt="请稍等，正在加载中">
                <div class="title">{{this.shiming.title}}</div>
                <p class="text1">{{this.shiming.subtitle}}</p>
            </li>
            <li class="col-12 col-sm-6 col-md-6 col-lg-6">
                <img class="pic1" v-lazy="this.shiming.image" alt="">
            </li>
            <li class="col-12 col-sm-6 col-md-6 col-lg-6">
                <img class="icon1" v-lazy="this.yuanjing.logo" alt="请稍等，正在加载中">
                <div class="title">{{this.yuanjing.title}}</div>
                <p class="text1">
                {{this.yuanjing.subtitle}}
                </p>
            </li>
            <li class="col-12 col-sm-6 col-md-6 col-lg-6">
                <img class="pic1" v-lazy="this.yuanjing.image" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            shiming:"",
            yuanjing:""
        }
    },
    mounted(){
        this.getGroupMission()
    },
    methods:{
        getGroupMission(){
            this.axios.get(
                "api/singlepage/vision"
            ).then(res=>{
                if(res.data.code == 1){
                    this.shiming = res.data.data[0]
                    this.yuanjing = res.data.data[1]
                }
            })
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
        @media screen and (max-width:768px)
            margin 1.95rem 0
            padding 0 1.5rem
        &>li
            background #F2F2F2
            padding 0
            @media screen and (max-width:768px)
                height 21.5rem
            .icon1
                width 75px
                height 88px
                margin-top 88px
                @media screen and (max-width:768px)
                    width 4.4rem
                    height 4.4rem
                    margin-top 3.8rem
            .title
                margin 23px 0 18px
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
                @media screen and (min-width:769px)
                    min-height 371px
                @media screen and (max-width:768px)
                    height 100%
        li:nth-child(1)
            margin-bottom 1rem
            @media screen and (max-width:768px)
                margin-bottom 0
        li:nth-child(2)
            margin-bottom 1rem
            
</style>