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
/deep/img
        width 100%
.group_framework
    margin 0
    padding 0
    width 100%
    .row1
        padding 0
        margin 100px 0
        width 100%
        @media screen and (max-width:768px)
            margin 4rem auto 2.4rem
        .pic
            margin 0 auto
        .pic>>>img
            width 100%
            max-width 1180px
            // image-rendering crisp-edges !important
            image-rendering -moz-crisp-edges /* Firefox */
            image-rendering -o-crisp-edges /* Opera */
            image-rendering -webkit-optimize-contrast /* Webkit (non-standard naming) */
            image-rendering crisp-edges 
            -ms-interpolation-mode nearest-neighbor /* IE (non-standard property) */             
</style>