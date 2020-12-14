<template>
    <div class="container-fluid news_group">
        <ul 
            class="row news_list mobile"
            v-infinite-scroll="load"
            :infinite-scroll-disabled="isloading"
            infinite-scroll-distance="50"
        >
            <li 
                v-for="(item,index) in this.newslist" 
                :key="index" 
                class="col-6 col-md-3"
                @click="godetail(item)"
            >
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
                :layout="this.layout"
                @current-change = "handleCurrentChange"
                :page-size.sync="pagesize"
                :current-page.sync="page"
                :total="this.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    data(){
        return{
            newslist:'',//新闻列表
            page:1,
            pagesize:8,
            total:0,
            layout:"pager, next",//控制分页是否显示next箭头
            isloading:true
        }
    },
    computed:{
        ...mapState(["searchKeywords"])
    },
    mounted(){
        this.getNewsList(this.searchKeywords,this.page,this.pagesize)
        this.controloading()
    },
    methods:{
        getNewsList(keywords,page,pagesize){
            this.axios.post(
                "api/news/search",
                `keywords=${keywords}&page=${page}&pagesize=${pagesize}`
            ).then(res=>{
                if(res.data.code ==1){
                    this.newslist = res.data.data.list
                    this.total = res.data.data.cur_page.total_count
                    if(this.total<=8){
                        this.layout = "pager"
                    }
                }
            })
        },
        getNewsList_mobile(keywords,page,pagesize){
            this.axios.post(
                "api/news/search",
                `keywords=${keywords}&page=${page}&pagesize=${pagesize}`
            ).then(res=>{
                if(res.data.code ==1){
                    // this.newslist = res.data.data.list
                    if(this.page == 1){
                        this.newslist = res.data.data.list
                    }else{
                        this.newslist.push(...res.data.data.list)
                    }
                }else if(res.code == 210){
                    console.log("暂无数据")
                }
            })
        },
        controloading(){
            var w = document.documentElement.clientWidth || document.body.clientWidth;
            console.log(w)
            if(w<768||w==768){
                this.isloading = false
            }else{
                this.isloading = true
            }
        },
        //无限加载效果实现
        load () {
            this.controloading()
            console.log("触发滚动")
            this.page+=1
            this.getNewsList_mobile(this.page,this.pagesize,2)
        },
        godetail(item){
            console.log(item)
            this.$router.push({
                path:"/news_detail",
                query:{
                    newsid:item.newsid,
                    fromsearch:"1"
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
    padding 100px 0
    margin 0 auto
    @media screen and (max-width:768px)
        width 95%
        padding 15pt 0
    .news_list
        margin 0 
        @media screen and (max-width:768px)
            height 500px
            overflow scroll
        &>li
            margin-bottom 1rem
            @media screen and (max-width:768px)    
                padding 0
                margin-bottom 2.45rem
            .single_news
                padding 9px 9px
                img
                    width 100%
                    height 230px
                    @media screen and (max-width:768px)
                        height 11.5rem
                    margin 0 auto
                .date
                    display block
                    text-align left
                    color #CACACA
                    font-size 1.2rem
                    font-family SourceHanSansCN
                    font-weight Bold
                    @media screen and (max-width:768px)
                        font-size 1.5rem
                        margin-top 1.4rem
                        margin-bottom 1.05rem
                    line-height 1.5rem
                .title
                    font-family Microsoft YaHei
                    font-weight Regular
                    color #333333
                    line-height 1.5rem
                    white-space nowrap
                    width 90%
                    margin-bottom 19px
                    font-size 1.1rem
                    text-align left          
                    text-overflow:ellipsis
                    overflow hidden 
                    @media screen and (max-width:768px)
                        margin-bottom 0.95rem
                        line-height 1.7rem 
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
                    @media screen and (max-width:768px)
                        font-size 1.4rem
                        line-height 2rem 
    @media screen and (min-width:769px)
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
        width 100%
        padding 0
        @media screen and (max-width:768px)
            display none
        .pagination
            margin 0 auto

</style>