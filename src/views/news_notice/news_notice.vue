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
            >
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
            news_list: [],
            page:1,
            total:0,
            pagesize:20,
            layout:"pager",
            news_list1: [],//左边数据列表
            news_list2: []//右边数据列表
        }
    },
    created(){
    },
    mounted(){
        this.getNewsList(this.page,this.pagesize,4)
    },
    methods:{
        getNewsList(page,pagesize,sort){
            this.axios.post(
                "api/news/news",
                `page=${page}&pagesize=${pagesize}&catid=${sort}`
            ).then(res=>{
                if(res.data.code ==1){
                    console.log(res)
                    this.total = res.data.data.cur_page.total_count
                    this.news_list = res.data.data.list
                    if(res.data.data.list.length%2 == 1){
                       this.news_list.push({create_at:"",title:""})
                    }
                    var arr_length = res.data.data.list.length/2
                    this.news_list1 = this.news_list.slice(0,arr_length)
                    this.news_list2 = this.news_list.slice(arr_length)
                }
            })
        },
        cellStyle({row,column,columnIndex}){
            if(columnIndex === 0){
                return{
                    color:'#999999',
                    fontSize: '20px',
                    fontFamily: 'Source Han Sans CN',
                    fontWeight:'Regular'
                }
            }
            if(columnIndex === 1){
                return{
                    fontSize: '20px',
                    fontFamily: 'MicrosoftYaHei',
                    color:'#333333',
                    fontWeight:'Regular'
                }
            }
        },
        rowStyle({ row, rowIndex}) {
            if (rowIndex %2 == 0) {
                return {
                    background:'#F8F8F8',
                    lineHeight:'60px',
                    height:'60px'
                }
            } else {
                return {
                    background:'#FFFFFF',
                    lineHeight:'60px',
                    height:'60px'
                }
            }
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        goNoticeDetail(row){
            this.$router.push({
                path:"/news_detail",
                query:{
                    newsid:row.newsid
                }
            })
        },
        prevbtn(){
            console.log("666")
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
    width 80%
    .left_table,.right_table
        padding 0
    .left_table
        border-right 1px solid #DDDDDD
    .row2
        padding 0
        width 100%
        margin-top 79px
        .pagination
            margin 0 auto
</style>