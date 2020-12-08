<template>
    <div class="container-fluid group_framework">
        <div class="row row1">
            <div 
                class="pic"
                v-html="this.groupframework"
            ></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            groupframework:""//集团架构 
        }
    },
    mounted(){
        this.getGroupFramework()
    },
    methods:{
        getGroupFramework(){
            this.axios.get(
                "api/singlepage/business"
            ).then(res=>{
                if(res.data.code == 1){
                    this.groupframework = res.data.data
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.group_framework
    margin 0
    padding 0
    width 100%
    .row1
        padding 0
        margin 100px 0
        width 100%
        .pic
            margin 0 auto
</style>