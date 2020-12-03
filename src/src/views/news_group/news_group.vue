<template>
    <div class="container-fluid news_group">
        <ul class="row news_list">
            <li v-for="item in 8" :key="item" class="col-6 col-md-3">
                <img class="row" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2877953759,1594489968&fm=26&gp=0.jpg" alt="">
                <span>7/11</span>
                <p class="neirong">浙江省兴合集团有限责任公司是中国500强企业，浙江省重点流通企业和供销系统为农服务龙头企业，主要负责运行管理浙江省供销社本级经营性资产。</p>
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
.news_group
    width 80%
    @media screen and (max-width:768px)
        width 95%
    border 1px solid red
    padding 2rem 0
    .news_list
        margin 0 
        &>li
            border 1px solid yellow
            img
                width 85%
                margin 0 auto
            span
                display block
                text-align left
                padding 1rem 0
            .neirong
                text-align left
                display -webkit-box
                -webkit-box-orient vertical
                -webkit-line-clamp 3 //需要显示时文本行数
                overflow hidden

</style>