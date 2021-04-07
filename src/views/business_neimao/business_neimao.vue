<template>
    <div class="container-fluid neimao">
        <div class="row row1">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 left">
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
        this.getBusinessInfo("nm")
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
@import "../../common/css/maoyi.styl"
</style>