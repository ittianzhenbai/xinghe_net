<template>
    <div class="container-fluid danggui">
        <div class="row row1">
             <el-table
                :data="newslist"
                :show-header="status"
                class="table_pc"
                @row-click = "goNoticeDetail"
                :row-style="rowStyle"
                :cell-style ="cellStyle"
                style="width: 100%">
                <el-table-column
                    prop="create_at"
                    label="日期"
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="title"
                    label="新闻标题">
                </el-table-column>
            </el-table>
            <el-table
                :data="newslist"
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
import elTableInfiniteScroll from 'el-table-infinite-scroll';
export default {
    data(){
         return{
            status:false,//控制是否显示表头
            newslist:[],//招聘信息列表
            total:0,//总计招聘信息数量
            pagesize:10,
            page:1,
            divide_layout:"pager, next",
            readhistory:this.$store.state.talentNotices,
            pagecount:5//分页组件控制多少页后才会显示省略号
        }   
    },
    computed:{
        ...mapState(["readHistory3","deviceFlag"])
    },
    created(){
    },
    mounted(){
        if(this.deviceFlag == "mobile"){
            this.getNewsList_mobile(this.page,this.pagesize,96)
        }else{
            this.getNewsList(this.page,this.pagesize,96)
        }
    },
    methods:{
        ...mapMutations(["setreadHistory3"]),
        getNewsList(page,pagesize,sort){
            this.axios.post(
                "api/news/news",
                `page=${page}&pagesize=${pagesize}&catid=${sort}`
            ).then(res=>{
                if(res.data.code == 1){
                    this.newslist = res.data.data.list
                    this.total = res.data.data.cur_page.total_count
                    if(this.total<10){
                        this.divide_layout = "pager"
                    }
                }else if(res.data.code == 210){
                    this.total = 0
                    this.newslist = []
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
                }else if(res.data.code == 210){
                    console.log("暂无数据")
                }
            })
        },
        goNoticeDetail(row){
            this.setreadHistory3(row)
            this.$router.push({
                path:"/party_detail",
                query:{
                    newsid:row.newsid
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
                 if(this.readHistory3.some(({newsid})=>newsid==row.newsid)){
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
        handleCurrentChange(val){
            this.getNewsList(val,this.pagesize,96)
        },
        //移动端无限加载
        load() {
            this.page ++ 
            this.getNewsList_mobile(this.page,this.pagesize,96)
        },
    },
    watch:{
        deviceFlag(newval){
            this.newslist=[]
            if(newval == "mobile"){
                this.getNewsList_mobile(1,this.pagesize,96)
            }else{
                this.getNewsList(1,this.pagesize,96)
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
/deep/.el-table--enable-row-hover .el-table__body tr:hover>td
    color #1A649F !important
    background-color transparent
.danggui
    width 100%
    padding 0
    margin 100px 0
    @media screen and (max-width:768px)
        margin 2rem 0
    .row1
        margin 0 auto
        width 75%
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
        margin 3.1rem 0 0 0
        @media screen and (max-width:768px)
            display none
        .pagination
            margin 0 auto
</style>