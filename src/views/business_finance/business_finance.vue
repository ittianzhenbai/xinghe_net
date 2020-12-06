<template>
    <div class="container-fluid neimao">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 left">
                <img src="../../assets/013@2x.png" alt="">
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 right">
                <div class="title_cn">
                    金融投资
                </div>
                <div class="title_en">
                    Financial investment
                </div>
                <div class="line"></div>
                <p class="neirong">
                    集团金融投资业务以产融结合服务实体发展，下属多家专业金融投资服务公司，涉及供应链金融、互联网金融、期货套保、小额贷款、租赁、担保、PE投资、证券投资、资产管理等业务形态，初步形成了全链条、综合化的业务格局。我们一直秉持和遵循规范管理、稳健投资的理念，以专业能力发现投资价值并进一步为客户创造财富。
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
            
        }
    },
    components:{
        CompanyBox
    }
}
</script>
<style lang="stylus" scoped>
.neimao
    padding 0
    margin 100px 0
    width 100%
    .row
        margin 0 12.9% 0 12.6%
        .left
            img 
                width 100%
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
        padding 0
        margin 0
</style>