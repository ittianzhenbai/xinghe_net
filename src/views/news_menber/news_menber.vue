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
                    <p class="neirong">{{item.desc | qukongge}}</p>
                    <span class="date">{{item.create_at}}</span>
                </div>
            </li>
        </ul>
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
                    <span class="row img" v-lazy:background-image="item.image"></span>
                    <p class="title">{{item.title}}</p>
                    <p class="neirong">{{item.desc | qukongge}}</p>
                    <span class="date">{{item.create_at}}</span>
                </div>
            </li>
            <li>
                <span class="text1" v-if="loading" @click="reload">继续查看...</span>
                <span class="text1" v-if="noMore">没有更多了</span>
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
    </div>
</template>
<script>
import { mapState} from "vuex"
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
    mounted(){
        if(this.deviceFlag == "mobile"){
            this.getNewsList_mobile(this.page,this.pagesize,3)
        }else{
            this.getNewsList(this.page,this.pagesize,3)
        }
    },
    computed:{
        ...mapState(["deviceFlag"]),
        noMore () {
            return this.count >= this.total
        },
        isloading(){
            return this.loading || this.noMore
        }
    },
    methods:{
        getNewsList(page,pagesize,sort){
            this.axios.post(
                "api/news/news",
                `page=${page}&pagesize=${pagesize}&catid=${sort}`
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
        getNewsList_mobile(page,pagesize,sort){
            this.axios.post(
                "api/news/news",
                `page=${page}&pagesize=${pagesize}&catid=${sort}`
            ).then(res=>{
                if(res.data.code ==1){
                    if(this.page == 1){
                        this.newslist = res.data.data.list
                    }else{
                        this.newslist.push(...res.data.data.list)
                    }
                    this.count = this.newslist.length
                    this.total = res.data.data.cur_page.total_count
                }else if(res.code == 210){
                    console.log("暂无数据")
                }
            })
        },
        //无限加载效果实现
        load () {
            this.loading = true
            this.page+=1
            this.getNewsList_mobile(this.page,this.pagesize,3)
        },
        reload(){
            //点击继续查看 可以查看下一页数据
            this.page ++
            console.log(this.page,this.count)
            if(this.count>=this.total){
                this.loading = false
            }
            this.getNewsList_mobile(this.page,this.pagesize,3)
        },
        godetail(item){
            this.$router.push({
                path:"/news_detail",
                query:{
                    newsid:item.newsid
                }
            })
        },
        handleCurrentChange(val){
            this.getNewsList(val,this.pagesize,3)
        }
    },
    watch:{
        deviceFlag(newval){
            if(newval == "mobile"){
                this.getNewsList_mobile(1,this.pagesize,3)
            }else{
                this.getNewsList(1,this.pagesize,3)
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
@import "../../common/css/groupnewlist.styl"
</style>