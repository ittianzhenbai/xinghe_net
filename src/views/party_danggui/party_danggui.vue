<template>
    <div class="container-fluid danggui">
        <div class="row row1">
            <el-table
                :data="joblist"
                :show-header="status"
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
        </div>
        <div class="row row2">
            <el-pagination
                class="pagination"
                background
                :layout= this.divide_layout
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
            divide_layout:"pager, next",
            readhistory:this.$store.state.talentNotices
        }   
    },
    computed:{
        ...mapState(["talentNotices"])
    },
    created(){
        // console.log(this.readhistory)
    },
    mounted(){
        this.getRecruList(1,10,91)
    },
    methods:{
        ...mapMutations(["settalentNotices"]),
        getRecruList(page,pagesize,sort){
            this.axios.post(
                "api/news/news",
                `page=${page}&pagesize=${pagesize}&catid=${sort}`
            ).then(res=>{
                if(res.data.code == 1){
                    console.log(res)
                    this.joblist = res.data.data.list
                    this.total = res.data.data.cur_page.total_count
                    if(this.total<10){
                        this.divide_layout = "pager"
                    }
                }
            })
        },
        goNoticeDetail(row){
            // if(this.readhistory == []||this.readhistory.length == 0){
            //     //如果浏览记录为空或者 数组长度为0，则直接向数组中加入数据
            //     this.readhistory.push(row)
            //     this.settalentNotices(this.readhistory)
            // }else{
            // }
            this.$router.push({
                path:"/party_detail",
                query:{
                    newsid:row.newsid
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
    .row1
        margin 0 auto
        width 80%
    .row2
        margin 79px 0 0 0
        .pagination
            margin 0 auto
</style>