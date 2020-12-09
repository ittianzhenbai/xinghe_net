<template>
    <div class="container-fluid neimao">
        <div class="row row1">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 left">
                <!-- <img src="../../assets/011.png" alt=""> -->
                <img v-lazy="this.info.image" alt="">
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 right">
                <div class="title_cn">
                    {{this.info.title}}
                </div>
                <div class="title_en">
                    {{this.info.title_en}}
                </div>
                <div class="line"></div>
                <p class="neirong">
                    内贸是集团基础性业务，以农资、塑化、钢材、棉花、茶叶、再生资源等大宗商品和汽车、服装、日用消费品等消费品经营为主，依托多年来建立的资源、渠道、服务、品牌等综合优势，通过模式创新、产融结合等方式，我们不断深化供应链管理服务体系建设，不断深挖“供应链+”的生态和价值空间，形成贸易综合经营、集成服务的发展路子，农资、塑化、汽车等主要商品在细分行业或区域市场中具有领先地位。
                </p>
            </div>
        </div>
        <div class="row row2">
           <CompanyBox></CompanyBox>
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
        this.getBusinessInfo("nm")
    },
    methods:{
        getBusinessInfo(name){
            this.axios.post(
                "api/singlepage/main_business",
                `name=${name}`
            ).then(res=>{
                if(res.data.code = 1){
                    console.log(res)
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
    .row1
        margin 0 12.9% 0 12.5%
        .left
            img 
                width 100%
                height 100%
        .right
            width 100%
            font-family MicrosoftYaHei
            text-align left
            .title_cn
                color #333333
                font-size 2rem
                text-align left
            .title_en
                color #999999
                font-size 1rem
            .line
                width 30px
                height 3px
                background #999999
                margin 22px 0 47px
            .neirong
                color #333333
                font-size 0.9rem
                font-family MicrosoftYaHei
    .row2
        width 100%
        margin 0
</style>