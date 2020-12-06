<template>
    <div class="container-fluid news_group">
        <ul class="row news_list">
            <li v-for="item in 8" :key="item" class="col-6 col-md-3">
                <div class="single_news">
                     <img class="row" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2877953759,1594489968&fm=26&gp=0.jpg" alt="">
                    <span class="date">7/11</span>
                    <p class="title">新闻标题新闻标题新闻标题标题</p>
                    <p class="neirong">浙江省兴合集团有限责任公司是中国500强企业，浙江省重点流通企业和供销系统为农服务龙头企业，主要负责运行管理浙江省供销社本级经营性资产。</p>
                </div>
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
    padding 100px 0
    .news_list
        margin 0 
        &>li
            margin-bottom 1rem
            .single_news
                padding 9px 9px
                img
                    width 100%
                    margin 0 auto
                span
                    display block
                    text-align left
                    color #CACACA
                    font-size 1.2rem
                    line-height 1.5rem
                .data
                    font-size 1.2rem
                    font-family Source Han Sans CN
                    font-weight bold
                    line-height 30px
                    padding 19px 0
                .title
                    font-family Microsoft YaHei
                    font-weight Regular
                    color #333333
                    line-height 30px
                    white-space nowrap
                    width 90%
                    margin-bottom 19px                    
                    text-overflow:ellipsis
                    overflow hidden 
                .neirong
                    text-align left
                    display -webkit-box
                    font-size 0.7rem
                    color #666666
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2 //需要显示时文本行数
                    overflow hidden
                    font-family Microsoft YaHei
                    font-weight Regular
                    line-height 1.2rem
        li:hover
            .single_news
                background-color #1A649F
                .date,.title,.neirong
                    color #FFFFFF

</style>