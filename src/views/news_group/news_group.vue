<template>
    <div class="container-fluid news_group">
        <ul class="row news_list">
            <li v-for="(item,index) in this.newslist" :key="index" class="col-6 col-md-3">
                <div class="single_news">
                     <img class="row" v-lazy="item.image" alt="">
                    <span class="date">{{item.create_at}}</span>
                    <p class="title">{{item.title}}</p>
                    <p class="neirong">{{item.desc}}</p>
                </div>
            </li>
        </ul>
        <div class="row row2">
            <el-pagination
                class="pagination"
                background
                layout="pager, next"
                @current-change = "handleCurrentChange"
                :page-size.sync="pagesize"
                :current-page.sync="page"
                :total="this.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newslist:'',//新闻列表
            page:1,
            pagesize:8,
            total:0
        }
    },
    mounted(){
        this.getNewsList(this.page,this.pagesize,2)
    },
    methods:{
        getNewsList(page,pagesize,sort){
            this.axios.post(
                "api/news/news",
                `page=${page}&pagesize=${pagesize}&catid=${sort}`
            ).then(res=>{
                if(res.data.code ==1){
                    console.log(res)
                    this.newslist = res.data.data.list
                    this.total = res.data.data.cur_page.total_count
                }
            })
        },
        handleCurrentChange(val){
            this.getNewsList(val,this.pagesize,2)
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
                    height 230px
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
                    text-align left                
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
            background-color #1A649F
            padding 0
            .single_news
                width 100%
                img
                    height 260px
                .date,.title,.neirong
                    color #FFFFFF
    .row2
        padding 0
        .pagination
            margin 0 auto

</style>