<template>
    <div class="container-fluid news_group">
         <ul 
            class="row news_list pc"
        >
            <li 
                v-for="(item,index) in this.newslist" 
                :key="index" 
                class="col-6 col-md-3"
                @click="godetail(item)"
            >
                <div class="single_news">
                    <span class="row img" v-lazy:background-image="item.image"></span>
                    <p class="title">{{item.title}}</p>
                    <p class="neirong">{{item.desc}}</p>
                    <span class="date">{{item.create_at}}</span>
                </div>
            </li>
        </ul>
        <ul 
            class="row news_list mobile"
            v-infinite-scroll="load"
            :infinite-scroll-disabled="isloading"
            :infinite-scroll-distance="50"
        >
            <li 
                v-for="(item,index) in this.newslist" 
                :key="index" 
                class="col-6 col-md-3"
                @click="godetail(item)"
            >
                <div class="single_news">
                    <span class="row img" v-lazy:background-image="item.image"></span>
                    <p class="title">{{item.title}}</p>
                    <p class="neirong">{{item.desc}}</p>
                    <span class="date">{{item.create_at}}</span>
                </div>
            </li>
            <li>
                <span class="text1" v-if="loading&& this.total!==0" @click="reload">继续查看...</span>
                <span class="text1" v-if="noMore && this.total>0">没有更多了</span>
                <span class="text1" v-if="this.total == 0">未查询到相关新闻信息！</span>
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
                :hide-on-single-page = true
                :pager-count ='this.pagecount'
                :total="this.total">
            </el-pagination>
        </div>
        <div class="nodata" v-show="this.deviceFlag !== 'mobile'&& this.total == 0">
            未查询到相关新闻信息！
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
            pagecount:5,//分页组件控制多少页后才会显示省略号
            loading: false,
            count:""//记录加载的新闻长度
        }
    },
    computed:{
        ...mapState(["searchKeywords","deviceFlag"]),
        noMore () {
            return this.count >= this.total
        },
        isloading(){
            return this.loading || this.noMore
        },
    },
    mounted(){
        if(this.deviceFlag == "mobile"){
            this.getNewsList_mobile(this.searchKeywords,this.page,this.pagesize)
        }else{
            this.getNewsList(this.searchKeywords,this.page,this.pagesize)
        }
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
                }else if(res.data.code == 210){
                    this.newslist = []
                    this.total = 0
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
                    this.count = this.newslist.length
                    this.total = res.data.data.cur_page.total_count
                }else if(res.data.code == 210){
                    this.newslist = []
                    this.total = 0
                    this.count = 0
                }
            })
        },
        //无限加载效果实现
        load () {
            this.loading = true
            this.page+=1
            this.getNewsList_mobile(this.searchKeywords,this.page,this.pagesize)
        },
        reload(){
            //点击继续查看 可以查看下一页数据
            this.page ++
            console.log(this.page,this.count)
            if(this.count>=this.total){
                this.loading = false
            }
            this.getNewsList_mobile(this.searchKeywords,this.page,this.pagesize)
        },
        godetail(item){
            this.$router.push({
                path:"/news_detail",
                query:{
                    newsid:item.newsid,
                    fromsearch:"1"
                }
            })
        },
        handleCurrentChange(val){
            this.getNewsList(this.searchKeywords,val,this.pagesize,)
        }
    },
    watch:{
        searchKeywords(newVal){
            this.$nextTick(()=>{
                if(this.deviceFlag == "mobile"){
                    this.getNewsList_mobile(newVal,1,this.pagesize)
                }else{
                    this.getNewsList(newVal,1,this.pagesize)
                }
            })
        },
        deviceFlag(newval){
            if(newval == "mobile"){
                this.page = 1
                this.getNewsList_mobile(this.searchKeywords,1,this.pagesize)
            }else {
                this.page = 1
                this.getNewsList(this.searchKeywords,1,this.pagesize)
            }
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
        overflow auto
        @media screen and (max-width:768px)
            height 500px
            overflow scroll
            overflow-x hidden
        &>li
            width 100%
            margin-bottom 11px
            cursor pointer
            padding 0 6px
            @media screen and (max-width:768px)    
                padding 0
                margin-bottom 2.45rem
            .single_news
                padding 9px 9px 0
                .img
                    width 100%
                    height 13vw
                    background-position center center
                    background-color #e5e5e5
                    background-size contain
                    background-repeat no-repeat
                    @media screen and (max-width:1024px)
                        height 11.5rem
                    @media screen and (min-width:769px) and (max-width:1200px)
                        height 12vw
                    margin 0 auto
                .title
                    font-family Microsoft YaHei
                    font-weight Regular
                    color #333333
                    line-height 1.5rem
                    width 100%
                    margin-top 15px
                    margin-bottom 10px
                    font-size 1.1rem
                    text-align left          
                    display -webkit-box        
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2 //需要显示时文本行数
                    overflow hidden
                    @media screen and (min-width:769px)
                        height 3rem
                    @media screen and (max-width:768px)
                        margin 19px 0
                        font-size 1.7rem
                        line-height 1.9rem
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
                    margin-bottom 0
                    @media screen and (max-width:768px)
                        font-size 1.4rem
                        line-height 2rem 
                    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) 
                        text-overflow ellipsis
                        white-space nowrap
                .date
                    display block
                    text-align left
                    color #CACACA
                    font-size 0.8rem
                    margin-top 4px
                    margin-bottom 15px
                    font-family SourceHanSansCN
                    font-weight Regular
                    line-height 1.5rem
                    @media screen and (max-width:768px)
                        font-size 1.5rem
                        margin-top 1.05rem
                        margin-bottom 1.4rem
            .text1
                width 100%
                font-size 1.5rem
                text-align center
    @media screen and (min-width:769px)
        li:hover
            background-color #1A649F
            padding 0
            .single_news
                width 100%
                .img
                    background-position center center
                    background-size 120% auto
                    background-repeat no-repeat
                    -webkit-transition all 1s
                    -moz-transition all 1s
                    -o-transition all 1s
                    transition all 1s
                .date,.title,.neirong
                    color #FFFFFF
                    padding 0 6px
    .pc
        @media screen and (max-width:768px)
            display none
    .mobile
        @media screen and (min-width:769px)
            display none
    .row2
        width 100%
        padding 0
        @media screen and (max-width:768px)
            display none
        .pagination
            margin 0 auto
    .nodata
        font-weight 500
        font-family Microsoft YaHei
        font-size 1.5rem
</style>