<template>
    <div class="contain row">
        <div class="left_table col-12 col-md-6 col-lg-6">
            <el-table 
            class="expert_list"
            :data="news_list1" 
            :row-style="rowStyle"
            @row-click = "goNoticeDetail"
            :cell-style ="cellStyle"
            :show-header="false"
             >
             <el-table-column
                prop="create_at"
                label="日期"
                width="150"
            >
            </el-table-column>
            <el-table-column
                prop="title"
                label="新闻标题"
                show-overflow-tooltip
            >
            </el-table-column>
            </el-table>
        </div>
         <div class="right_table col-12 col-md-6 col-lg-6">
            <el-table 
            class="expert_list"
            :data="news_list2" 
            :row-style="rowStyle"
            @row-click = "goNoticeDetail"
            :cell-style ="cellStyle"
            :show-header="false"
             >
             <el-table-column
                prop="create_at"
                label="日期"
                width="150"
            >
            </el-table-column>
            <el-table-column
                prop="title"
                label="新闻标题"
                show-overflow-tooltip
            >
            </el-table-column>
            </el-table>
        </div>
        <div class="row table_mobile col-12">
            <el-table
                :data="newslist"
                :show-header="status"
                height="500px"
                @row-click = "goNoticeDetail"
                v-el-table-infinite-scroll="load"
                :infinite-scroll-distance = "50"
                :row-style="rowStyle"
                :cell-style ="cellStyle"
                style="width: 100%">
                <el-table-column
                    prop="create_at"
                    label="日期"
                    width="145">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="新闻标题">
                </el-table-column>
            </el-table>
        </div>
        <div class="row row2">
            <el-pagination
                class="pagination"
                background
                :layout="this.layout"
                @current-change = "handleCurrentChange"
                :page-size.sync="pagesize"
                :hide-on-single-page = true
                :current-page.sync="page"
                :total="this.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations } from "vuex";
export default {
    data(){
        return{
            newslist: [],
            page:1,
            total:0,
            pagesize:20,
            status:false,//关闭头部
            layout:"pager",
            news_list1: [],//左边数据列表
            news_list2: []//右边数据列表
        }
    },
    computed:{
        ...mapState(["readHistory5","deviceFlag"])
    },
    created(){
    },
    mounted(){
        if(this.deviceFlag == "mobile"){
            this.getNewsList_mobile(this.page,this.pagesize,4)
        }else{
             this.getNewsList(this.page,this.pagesize,4)
        }
    },
    methods:{
        ...mapMutations(["setreadHistory5"]),
        getNewsList(page,pagesize,sort){
            this.axios.post(
                "api/news/news",
                `page=${page}&pagesize=${pagesize}&catid=${sort}`
            ).then(res=>{
                if(res.data.code ==1){
                    this.total = res.data.data.cur_page.total_count
                    this.newslist = res.data.data.list
                    if(res.data.data.list.length%2 == 1){
                       this.newslist.push({create_at:"",desc:"",image:"",newsid:"",title:""})
                    }
                    var arr_length = res.data.data.list.length/2
                    this.news_list1 = this.newslist.slice(0,arr_length)
                    this.news_list2 = this.newslist.slice(arr_length)
                }
            })
        },
        getNewsList_mobile(page,pagesize,sort){
            this.axios.post(
                "api/news/news",
                `page=${page}&pagesize=${pagesize}&catid=${sort}`
            ).then(res=>{
                if(res.data.code ==1){
                    // this.newslist = res.data.data.list
                    if(this.page == 1){
                        this.newslist = res.data.data.list
                    }else{
                        this.newslist.push(...res.data.data.list)
                    }
                    this.total = this.newslist.length
                }
            })
        },
        cellStyle({row,column,columnIndex}){
            if(columnIndex === 0){
                if(this.deviceFlag == "mobile"){
                    return{
                        color:'#999999',
                        fontSize: '20px',
                        fontFamily: 'Source Han Sans CN',
                        fontWeight:'Regular',
                        paddingLeft:"10px",
                    }
                }else{
                     return{
                        color:'#999999',
                        fontSize: '20px',
                        fontFamily: 'Source Han Sans CN',
                        fontWeight:'Regular'
                    }
                }
            }
            if(columnIndex === 1){
                 if(this.readHistory5.some(({newsid})=>newsid==row.newsid)){
                    return{
                        color:'#999999',
                        fontSize: '20px',
                        fontFamily: 'Source Han Sans CN',
                        fontWeight:'Regular'
                    }
                }else{
                     return{
                        fontSize: '20px',
                        fontFamily: 'MicrosoftYaHei',
                        color:'#333333',
                        fontWeight:'Regular'
                    }
                }
            }
        },
        rowStyle({ row, rowIndex}) {
            if (rowIndex %2 == 0) {
                return {
                    background:'#F8F8F8',
                    lineHeight:'60px',
                    height:'60px',
                    cursor:'pointer'
                }
            } else {
                return {
                    background:'#FFFFFF',
                    lineHeight:'60px',
                    height:'60px',
                    cursor:'pointer'
                }
            }
        },
        handleCurrentChange(val) {
            this.getNewsList(val,this.pagesize,4)
        },
        goNoticeDetail(row){
            this.setreadHistory5(row)
            this.$router.push({
                path:"/news_detail",
                query:{
                    newsid:row.newsid
                }
            })
        },
        load() {
            // console.log("触发无限加载",this.page)
            this.page ++ 
            this.getNewsList_mobile(this.page,this.pagesize,4)
        },
    },
    watch:{
        deviceFlag(newval){
            this.newslist = []
            if(newval == "mobile"){
                this.getNewsList_mobile(1,this.pagesize,4)
            }else{
                this.getNewsList(1,this.pagesize,4)
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
/deep/.el-table--enable-row-hover .el-table__body tr:hover>td
    color #1A649F !important
    background-color transparent
.contain
    margin 100px auto
    width 75%
    @media screen and (max-width:768px)
        width 100%
        margin 2rem auto
    .left_table,.right_table
        padding 0
        @media screen and (max-width:768px)
            display none
    .left_table
        border-right 1px solid #DDDDDD
    .table_mobile
        width 100%
        margin 0
        padding 0
        height 500px 
        @media screen and (min-width:769px)
            display none
    .row2
        padding 0
        width 100%
        margin-top 3.1rem
        .pagination
            margin 0 auto
            @media screen and (max-width:768px)
                display none
</style>