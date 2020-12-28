<template>
    <div class="container-fluid neimao">
        <div class="row row1">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 left">
                <!-- <img src="../../assets/012.png" alt=""> -->
                <img v-lazy="this.info.image" alt="">
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 right">
                <div class="title_cn">
                    {{this.info.title}}
                </div>
                <div class="title_en">
                    {{this.info.title_en}}
                </div>
                <div class="line"></div>
                <p class="neirong"
                    v-html="this.info.content"
                >
                </p>
            </div>
        </div>
        <div class="row row2">
           <CompanyBox
            :companys="this.info.link_company"
           ></CompanyBox>
        </div>
    </div>
</template>
<script>
import CompanyBox from "../../components/company_box/company_box.vue"
export default {
    data(){
        return{
            info:""//业务信息
        }
    },
    components:{
        CompanyBox
    },
    mounted(){
        this.getBusinessInfo("wm")
    },
    methods:{
        getBusinessInfo(name){
            this.axios.post(
                "api/singlepage/main_business",
                `name=${name}`
            ).then(res=>{
                if(res.data.code = 1){
                    this.info = res.data.data
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.neimao
    padding 0
    margin 100px 0
    width 100%
    @media screen and (max-width:768px)
        margin 2.5rem 0
    .row1
        margin 0 12.9% 0 12.5%
        @media screen and (max-width:768px)
            margin 0 1.5rem
        .left
            padding-left 0
            @media screen and (max-width:768px)
                padding 0
            img 
                width 100%
                height 100%
                @media screen and (max-width:768px)
                    height 24.6rem
        .right
            width 100%
            @media screen and (max-width:768px)
                padding 0
            font-family MicrosoftYaHei
            text-align left
            .title_cn
                font-weight bold
                color #333333
                font-size 2rem
                text-align left
                line-height 2rem
                @media screen and (max-width:768px)
                    height 2.5rem
                    margin-top 1.5rem
            .title_en
                color #999999
                font-size 1rem
                margin-top 10px
                @media screen and (max-width:768px)
                    height 1.4rem
                    line-height 1.5rem
                    margin-top 0.95rem
            .line
                width 30px
                height 3px
                background #999999
                margin 22px 0 47px
                @media screen and (max-width:768px)
                    margin 1rem 0 2.45rem
            .neirong
                color #333333
                font-size 0.9rem
                font-family MicrosoftYaHei
                font-weight Regular
                @media screen and (max-width:768px)
                    font-size 1.7rem
                    margin-bottom 0
    .row2
        width 100%
        padding 0
        margin 0
</style>