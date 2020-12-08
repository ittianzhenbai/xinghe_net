<template>
    <div class="row groupinfo">
        <div 
            class="col-12 col-md-12 col-lg-12 title"
        >
        浙江省兴合集团有限责任公司
        </div>
        <div class="col-12 col-md-12 col-lg-12 intro"
            v-html="this.groupinfo"
        >
        </div>
        <div class="col-12 col-md-12 col-lg-12 rongyu">
            <ul class="row rongyu1">
                <li 
                    v-for="(item,index) in this.honor" 
                    :key="index" 
                    class="col-4 item1"
                >
                    <animate-number 
                        from="1" 
                        :to="item.value" 
                        mode="auto"
                        duration="3000"
                    >
                    </animate-number>
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
        <div class="col-12 col-md-12 col-lg-12 pic"
        >
            <img class="pic1" v-lazy="this.grouppic" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            groupinfo:"",//集团简介
            honor:"",//集团荣誉,
            grouppic:""
        }
    },
    mounted(){
        this.getGroupInfo()
    },
    methods:{
        getGroupInfo(){
            this.axios.all([
                this.axios.get("api/singlepage/aboutus"),
                this.axios.get("api/singlepage/zjxh")
            ]).then(this.axios.spread((res1,res2)=>{
                if(res1.data.code == 1){
                    console.log(res1)
                    // this.groupinfo = res1.data.data.content
                    var re = new RegExp("(<p>|<p\\s.*?>)(\\s|　|&nbsp;|<br\\s*/?>)*</p>","ig");
                    this.groupinfo = res1.data.data.content.replace(/\n/g,"").replace(/<p\/>|<p\s.*?\/>/ig,"").replace(re,"");
                    this.grouppic = res1.data.data.image
                }
                if(res2.data.code == 1){
                    this.honor = res2.data.data
                }
            }))
        }
    }
}
</script>
<style lang="stylus" scoped>
.groupinfo
    margin 100px auto
    width 62%
    .title
        color #333333
        font-family Microsoft YaHei
        font-weight Bold
        font-size 2rem
        line-height 1.5rem
        margin-bottom 12px
    .intro
        color #333333
        font-family MicrosoftYaHei
        font-weight 1rem
        line-height 2rem
        font-size 0px                  
    .rongyu
        width 100%
        padding 0
        .rongyu1
            display flex
            padding 0 27px
            margin 0 auto
            .item1
                flex 1
                span
                    font-size 3.6rem
                    color #1A649F
                    font-weight regular
                    font-family HYb9gf
                &>p
                    line-height 1.5rem
                    font-size 0.8rem
                    color #666666
                    font-family Microsoft YaHei
                    fong-weight Regular
                    text-align center
    .pic
        padding 0
        width 100%
        margin-top 45px
        .pic1
            width 100%
</style>