<template>
    <div class="container-fluid detail">
        <div class="news_title">
            <span class="title">{{this.detail.title}}</span>
            <span class="fabu_person">
                {{this.detail.create_at}}
                <span class="person">{{this.detail.author}}</span>
            </span>
        </div>
        <div 
            class="content"
            v-html="$options.filters.formatContent(this.detail.content)"
            >
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            detail:""//招聘信息详情
        }
    },
    mounted(){
        this.getNewsDetail(this.$route.query.jobid)
    },
    filters: {
        formatContent(value) {
            if(value !==undefined&&value !== null){
                var re = new RegExp("(<p>|<p\\s.*?>)(\\s|　|&nbsp;|<br\\s*/?>)*</p>","ig");
                return value.replace(/\n/g,"").replace(/<p\/>|<p\s.*?\/>/ig,"").replace(re,"");
            }else{
                return value
            }
        }
    },
    methods:{
        getNewsDetail(jobid){
            this.axios.post(
                "api/job/detail",
                `jobid=${jobid}`
            ).then(res=>{
                if(res.data.code == 1){
                    // console.log(res)
                    this.detail = res.data.data
                }
            })
        }
    },
    watch:{
        $route(newVal){
            console.log(newVal.query.jobid)
            if(newVal.query.newsid !== undefined){
                this.getNewsDetail(newVal.query.newsid)
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.detail
    margin 100px auto
    @media screen and (max-width:768px)
        margin 2.6rem auto
    .news_title
        line-height 1.5rem
        .title
            display block
            font-family Microsoft YaHei
            font-weight Regular
            color #333333
            font-size 2rem
            line-height 3rem
        .fabu_person
            font-family Source Han Sans CN
            font-weight Normal
            color #999999
            font-size 0.9rem
            display block
            margin-top 26px
            @media screen and (max-width:768px)
                font-size 1.4rem
                margin-top 1.35rem
            .person
                padding-left 1rem
    .content
        text-align left
        padding 0 25%
        font-size 0.9rem
        color #333333
        font-family  Microsoft YaHei
        margin-top 49px
        @media screen and (max-width:768px)
            padding 0 1.7rem
            margin-top 2.4rem       
</style>