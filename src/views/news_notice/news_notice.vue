<template>
    <div class="contain row">
        <div class="left_table col-12 col-md-6 col-lg-6">
            <el-table 
            class="expert_list"
            :data="left_data" 
            stripe
            :show-header="false"
             >
             <el-table-column
                prop="create_at"
                label="日期"
                width="100"
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
            :data="right_data" 
            stripe
            :show-header="false"
             >
             <el-table-column
                prop="date"
                label="日期"
                width="100"
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
            left_data:[],
            right_data:[],
            page:1,
            total:0,
            pagesize:20,
            layout:"pager"
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
                    this.left_data = res.data.data.list
                    if(this.total>20){
                        this.layout = "pager, next"
                    }
                    // if(this.total<21){
                    //     if(this.total<11){
                    //         this.left_data = res.data.data.list
                    //         if(this.left_data.length<10){
                    //             this.left_data.push("")
                    //         }
                    //     }
                    // }
                }
            })
        },
        // rowStyle({row}){
        //     if(row){
        //         return{
        //             with:"100%",
        //             fontSize:'14px',
        //             fontFamily: 'Microsoft YaHei',
        //             fontWeight: '400',
        //             lineHeight: '60px',
        //             height:'60px',
        //         }
        //     }
        // },
        // handleSizeChange(val) {
        //     console.log(`每页 ${val} 条`);
        // },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        prevbtn(){
            console.log("666")
        }
    }
}
</script>
<style lang="stylus" scoped>
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