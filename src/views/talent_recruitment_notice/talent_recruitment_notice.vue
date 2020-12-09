<template>
    <div class="container-fluid danggui">
        <div class="row row1">
            <el-table
                :data="joblist"
                :show-header="status"
                @row-click = "goNoticeDetail"
                stripe
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
                :layout= this.divide_layout
                :total="this.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data(){
         return{
            status:false,//控制是否显示表头
            tableData: [{
                date: '2016-05-02',               
                title: '这就是要整的新闻'
                }, {
                date: '2016-05-04',  
                title: '习近平总书记表达了2020年全面建成小康社会的决心'
                }, {
                date: '2016-05-01',
                title: '上海市普陀区金沙江路 1519 弄'
                }, {
                date: '2016-05-03',
                title: '上海市普陀区金沙江路 1516 弄',
                },{
                date: '2016-05-04',  
                title: '习近平总书记表达了2020年全面建成小康社会的决心'
                },{
                date: '2016-05-04',  
                title: '习近平总书记表达了2020年全面建成小康社会的决心'
                },{
                date: '2016-05-04',  
                title: '习近平总书记表达了2020年全面建成小康社会的决心'
                },{
                date: '2016-05-04',  
                title: '习近平总书记表达了2020年全面建成小康社会的决心'
                },{
                date: '2016-05-04',  
                title: '习近平总书记表达了2020年全面建成小康社会的决心'
                }
            ],
            joblist:"",//招聘信息列表
            total:0,//总计招聘信息数量
            divide_layout:"pager, next"
        }   
    },
    created(){
    },
    mounted(){
        this.getRecruList(1,10)
    },
    methods:{
        getRecruList(page,pagesize){
            this.axios.post(
                "api/job/jobs",
                `page=${page}&pagesize=${pagesize}`
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
            console.log(row)
            this.$router.push({
                path:"/recruitment_detail",
                query:{jobid:row.jobid}
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
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