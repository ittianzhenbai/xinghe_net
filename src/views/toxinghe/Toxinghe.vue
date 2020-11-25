<template>
    <div class="contain">
        <div class="left_table">
            <el-table 
            class="expert_list"
            :data="userList1" 
            :row-style = "rowStyle"
            ref="tabledata"
            stripe
            :show-header="false"
             >
            <template slot="empty">
                <!-- <p>{{this.prompt}}</p> -->
            </template>
                <el-table-column label="专家姓名"  >
                    <template v-slot="scope">
                       <p class="discuss">{{scope.row.realname}}</p> 
                    </template>       
                </el-table-column> 
            </el-table>
        </div>
         <div class="right_table">
            <el-table 
            class="expert_list"
            :data="userList2" 
            :row-style = "rowStyle"
            ref="tabledata"
            stripe
            :show-header="false"
             >
            <template slot="empty">
                <!-- <p>{{this.prompt}}</p> -->
            </template>
                <el-table-column label="专家姓名">
                     <template v-slot="scope">
                        <p class="discuss">{{scope.row.realname}}</p>
                    </template>      
                </el-table-column>
                
            </el-table>
        </div>
        <div class="page_divide">
            <el-pagination
                ref="pagedivide"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="100"
                layout="prev,slot,next"
                :total="this.total">
                <button type='button' disabled ref='prev' class="prev" @click="prevbtn">上一页</button>
                <button type='button' ref='next' class="next" @click="prevbtn">下一页</button>
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userList:[
                {realname:'通知通知新闻',time:'2020-09'},
                {realname:'1'},
                {realname:'1'},
                {realname:'1'},
                {realname:'1'},
                {realname:'1'},
                {realname:'1'},
                {realname:'1'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'1'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
                {realname:'2'},
            ],
            currentPage:1,
            total:99,
            pagesize:20
        }
    },
    created(){
        this.userList1 = this.userList.slice(0,8)
        this.userList2 = this.userList.slice(8,16)
    },
    mounted(){
        console.log(this.$refs.pagedivide)
        console.log(this.$refs.pagedivide.$vnode.componentOptions.children[0])
        // console.log(this.$refs.prev)
        // console.log(this.$refs.next)
        //判断 当按钮为禁用状态的时候 让其hover样式失效
        if(!this.$refs.prev.disabled){
            //只有按钮为不禁用状态的时候 才会有prev1的类名
           this.$refs.prev.className = 'prev prev1'
        }
        if(!this.$refs.next.disabled){
            //只有按钮为不禁用状态的时候 才会有next1的类名
            this.$refs.next.className = 'next next1'
        }
    },
    methods:{
        rowStyle({row}){
            if(row){
                return{
                    with:"100%",
                    fontSize:'14px',
                    fontFamily: 'Microsoft YaHei',
                    fontWeight: '400',
                    lineHeight: '60px',
                    height:'60px',
                }
            }
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        prevbtn(){
            console.log("666")
        }
    }
}
</script>
<style lang="scss" scoped>
::v-deep .btn-next{
    padding-left: 0px !important;
}
::v-deep .btn-prev{
    padding-right: 0px !important;
}
.contain{
    width: 60%;
    margin: 0 auto;
    margin-top: 100px;
    .left_table,.right_table{
        width: 50%;
        display: inline-block;
        border-top:1px solid #4e4e4e;
        border-bottom:1px solid #4e4e4e
    }
    .right_table{
        border-left:1px solid #4e4e4e;
    }
    .page_divide{
        display: block;
        .prev{
            padding-right: 10px;
        }
        .prev1:hover,.next1:hover{
            color: aqua;
        }
    }
}
</style>