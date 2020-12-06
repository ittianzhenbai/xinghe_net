<template>
    <div class="container-fluid neimao">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 left">
                <img src="../../assets/013@2x.png" alt="">
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-6 right">
                <div class="title_cn">
                    房地产
                </div>
                <div class="title_en">
                    Real estate
                </div>
                <div class="line"></div>
                <p class="neirong">
                    集团房地产业务以开发商业住宅及社区商业为主，涵盖城市综合体、专业市场、写字楼、产业地产等多种物业形态，项目遍及浙江、山东、四川、安徽、湖北、湖南等地，累计开发面积1500多万平方米,在实践中形成了快周转、标准化、高品质的经营特点和“开发+运营”的发展路子，并在“房地产+”的探索中进一步创造美好人居生活。      
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
        margin 0
        padding 0
</style>