<template>
   <div class="container-fluid danggui">
        <div class="row row1">
             <el-table
                :data="joblist"
                :show-header="status"
                class="table_pc"
                @row-click = "goNoticeDetail"
                :row-style="rowStyle"
                :cell-style ="cellStyle"
                style="width: 100%">
                <el-table-column
                    prop="create_at"
                    label="日期"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="新闻标题">
                </el-table-column>
            </el-table>
            <el-table
                :data="joblist"
                :show-header="status"
                class="table_mobile"
                height="500px"
                @row-click = "goNoticeDetail"
                v-el-table-infinite-scroll="load"
                :row-style="rowStyle"
                :cell-style ="cellStyle"
                style="width: 100%">
                <el-table-column
                    prop="create_at"
                    label="日期"
                    width="80">
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
                :layout = this.divide_layout
                :pager-count ='this.pagecount'
                :hide-on-single-page = true
                @current-change = "handleCurrentChange"
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
            status:false,//控制是否显示表头
            joblist:[],//招聘信息列表
            total:0,//总计招聘信息数量
            page:1,
            pagesize:10,
            divide_layout:"pager, next",
            readhistory:this.$store.state.talentNotices,
            pagecount:5//分页组件控制多少页后才会显示省略号
        }   
    },
    computed:{
        ...mapState(["readHistory1"])
    },
    created(){
        // console.log(this.readhistory)
    },
    mounted(){
        this.getRecruList(this.page,this.pagesize)
    },
    methods:{
        ...mapMutations(["setreadHistory1"]),
        getRecruList(page,pagesize){
            this.axios.post(
                "api/job/jobs",
                `page=${page}&pagesize=${pagesize}`
            ).then(res=>{
                if(res.data.code == 1){
                    this.joblist = res.data.data.list
                    this.total = res.data.data.cur_page.total_count
                    if(this.total<10){
                        this.divide_layout = "pager"
                    }
                }
            })
        },
        getRecruList_mobile(page,pagesize){
            this.axios.post(
                "api/job/jobs",
                `page=${page}&pagesize=${pagesize}`
            ).then(res=>{
                if(res.data.code ==1){
                    console.log(res)
                    // this.newslist = res.data.data.list
                    if(this.page == 1){
                        this.joblist = res.data.data.list
                    }else{
                        this.joblist.push(...res.data.data.list)
                    }
                    this.total = res.data.data.cur_page.total_count
                }else if(res.code == 210){
                    console.log("暂无数据")
                }
            })
        },
        goNoticeDetail(row,column,event){
            this.setreadHistory1(row)
            this.$router.push({
                path:"/recruitment_detail",
                query:{jobid:row.jobid}
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
                if(this.readHistory1.some(({jobid})=>jobid==row.jobid)){
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
                }
            } else {
                return {
                    background:'#FFFFFF',
                    lineHeight:'60px',
                    height:'60px'
                }
            }
        },
        handleCurrentChange(val){
            this.getNewsList(val,this.pagesize)
        },
        load() {
            console.log("触发无限加载")
            this.page ++ 
            console.log(this.page)
            this.getRecruList_mobile(this.page,this.pagesize)
        },
    }
}
</script>
<style lang="stylus" scoped>
/deep/.el-table--enable-row-hover .el-table__body tr:hover>td
    color #1A649F !important
    background-color transparent
/deep/..el-table .hadread
    color #999999 !important
.danggui
    width 100%
    padding 0
    margin 100px 0
    @media screen and (max-width:768px)
        margin 2rem 0
    .row1
        margin 0 auto
        width 80%
        @media screen and (max-width:768px)
            width 100%
        .table_pc
            @media screen and (max-width:768px)
                display none
        .table_mobile
            @media screen and (min-width:769px)
                display none
                height 500px  
    .row2
        margin 79px 0 0 0
        @media screen and (max-width:768px)
            display none
        .pagination
            margin 0 auto
</style>