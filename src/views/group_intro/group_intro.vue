<template>
    <div class="row groupinfo">
        <div 
            class="col-12 col-md-12 col-lg-12 title"
        >
            浙江省兴合集团有限责任公司
        </div>
        <div class="col-12 col-md-12 col-lg-12 intro"
            v-html="this.groupinfo"
        >
        </div>
        <div class="col-12 col-md-12 col-lg-12 row rongyu">
            <ul class="rongyu1 col-2 col-sm-2 col-md-2 col-lg-2"
                v-show="this.deviceFlag !=='mobile'"
            >   
                <li v-for="(item,index) in this.rongyu" :key="index" class="item"  v-show = "index == 0">
                    <animate-number 
                        ref="NumAnimate"
                        from="1"
                        mode="auto"
                        :to="item.value"
                        duration="5000"
                    ></animate-number>
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <ul class="rongyu1 col-10 col-sm-10 col-md-10 col-lg-10 row"
                v-show="this.deviceFlag !=='mobile'"
            >   
                <li v-for="(item,index) in this.rongyu" :key="index" class="col-3 col-sm-3 col-md-3 col-lg-3 item"  v-show = "index > 0">
                    <animate-number 
                        ref="NumAnimate"
                        from="1" 
                        mode="auto"
                        :to="item.value"
                        duration="5000"
                    ></animate-number>
                    <p>{{item.title}}</p>
                </li>
            </ul>
                <ul class="rongyu1 row"
                v-show="this.deviceFlag =='mobile'"
            >   
                <li v-for="(item,index) in this.rongyu" :key="index" class="col-4 col-sm-4 item">
                    <animate-number 
                        ref="NumAnimate"
                        from="1"
                        mode="auto"
                        :to="item.value"
                        duration="5000"
                    ></animate-number>
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
        <div class="col-12 col-md-12 col-lg-12 pic"
        >
            <img class="pic1" v-lazy="this.grouppic" alt="">
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex"
export default {
    data(){
        return{
            groupinfo:"",//集团简介
            rongyu:"",//集团荣誉,
            grouppic:""
        }
    },
    mounted(){
        this.getGroupInfo()
    },
    computed:{
         ...mapState(["deviceFlag"])
    },
    methods:{
        getGroupInfo(){
            this.axios.all([
                this.axios.get("api/singlepage/aboutus"),
                this.axios.get("api/singlepage/zjxh")
            ]).then(this.axios.spread((res1,res2)=>{
                if(res1.data.code == 1){
                    var re = new RegExp("(<p>|<p\\s.*?>)(\\s|　|&nbsp;|<br\\s*/?>)*</p>","ig");
                    this.groupinfo = res1.data.data.content.replace(/\n/g,"").replace(/<p\/>|<p\s.*?\/>/ig,"").replace(re,"");
                    this.grouppic = res1.data.data.image
                }
                if(res2.data.code == 1){
                    this.rongyu = res2.data.data
                }
            }))
        }
    }
}
</script>
<style lang="stylus" scoped>
.groupinfo
    margin 100px auto
    width 62%
    @media screen and (max-width:768px)
        width 100%
        margin 4rem auto 2.4rem
    @media screen and (min-width:769px) and (max-width:1000px)
        width 90%
        margin 4rem auto 2.4rem
    .title
        color #333333
        font-family Microsoft YaHei
        font-weight Bold
        font-size 2rem
        line-height 2rem
        margin-bottom 12px
    .intro
        color #333333
        font-family MicrosoftYaHei
        font-weight Regular
        font-size 1rem
        line-height 2rem
        @media screen and (max-width:768px)
            font-size 14px
            line-height 2.5rem         
    .rongyu
        width 100%
        padding 0
        margin 0
        .rongyu1
            margin 0 auto
            padding 0 
            @media screen and (max-width:768px)
                margin 0
            .item
                vertical-align top
                padding 0 auto
                @media screen and (max-width:768px)
                    padding 0
                span
                    font-size 3.6rem
                    color #1A649F
                    font-weight 550
                    font-family HYb9gf
                    @media screen and (max-width:920px)
                        font-size 3rem
                        text-align left
                    @media screen and (max-width:768px)
                        margin-top 18.5pt
                        font-size 35pt
                        text-align left
                &>p
                    line-height 1.5rem
                    font-size 0.8rem
                    width 8rem
                    margin 0 auto
                    @media screen and (max-width:1520px)
                        width 95%
    .pic
        padding 0 15pt
        width 100%
        margin-top 45px
        .pic1
            width 100%
</style>