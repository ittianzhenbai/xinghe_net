<template>
    <div class="container-fluid news_detail">
        <div class="news_title">
            {{this.news_content.title}}
        </div>
        <div class="fabu">
            <span class="time">{{this.news_content.create_at}}</span>
            <span class="person">{{this.news_content.author}}</span>
        </div>
        <div 
            class="content"
            v-html="this.news_content.content"
        ></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            news_content:""//新闻内容
        }
    },
    mounted(){
        this.getNewsDetail(this.$route.query.newsid)
    },
    filters: {
        formatContent(value) {
            var re = new RegExp("(<p>|<p\\s.*?>)(\\s||&nbsp;|<br\\s*/?>)*</p>","ig");
            return value.replace(/\n/g,"").replace(/<p\/>|<p\s.*?\/>/ig,"").replace(re,"");
        }
    },
    methods:{
        getNewsDetail(newsid){
            this.axios.post(
                "api/news/detail",
                `newsid=${newsid}`
            ).then(res=>{
                if(res.data.code == 1){
                    this.news_content = res.data.data
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.news_detail
    padding 0
    width 100%
    margin 81px 0 100px
    @media screen and (max-width:768px)
        margin 2.6rem auto
    .row
        margin 0
        width 100%
    .news_title
        color #333333
        font-size 2rem
        font-family Microsoft YaHei
        font-weight Regular
        color #333333
        line-height 2.2rem
        text-align center
        width 70%
        margin 0 auto
        @media screen and (max-width:768px)
            width 100%
            padding 0 1.5rem
            line-height 3rem
    .fabu
        margin-top 1.35rem
        font-size 0.9rem
        font-family Source Han Sans CN
        font-weight Regular
        color #999999
        line-height 2rem
        text-align center
        @media screen and (max-width:768px)
           font-size 1.4rem
        .time
            padding-right 0.5rem
    .content
        width 49.8%
        font-size 0.9rem
        font-family Microsoft YaHei
        font-weight 400
        color #333333
        line-height 2rem
        margin 0 auto
        margin-top 2.4rem
        @media screen and (max-width:768px)
            width 100%
            padding 0 1.3rem
            font-size 1.7rem
    .content>>>p
        margin-bottom 0
        text-align left
        line-height 1.5rem !important
    .content>>>img
        width 85% !important
        @media screen and (max-width:768px)
            width 95% !important
            padding 0 1.3rem

</style>