<template>
    <div class="near_xinghe">
        <div class="row banner">
            <img class="img" v-lazy="this.banner.image" alt="">
            <BannerTitle
                class="banner_title"
                :title_zn="this.banner.title"
                :title_en="this.banner.title_en"
            ></BannerTitle>
        </div>
        <div class="navigation_pc">
            <OptionBox
                :cur_address = "this.cur_address"
            >
                <ul class="options">
                    <li 
                        v-for="(item,index) in options"
                        :key="index"
                        class="item"
                        @click="jump_router(item.cur_index)"
                        @mouseover="changecolor1(item.cur_index)"
                        @mouseleave="changecolor2"
                        :class="{ active: content_show == item.cur_index }"
                    >
                        {{item.cur_name}}
                    </li>
                </ul>
            </OptionBox>
        </div>
        <div class="navigation_mobile">
            <OptionBoxMobile
                :cur_address = "this.cur_address"
            >
            <div class="child_nav">
                <el-menu
                    class="el-menu-collapse-list"
                    @select="handleSelect"
                    text-color="#FFFFFF"
                    background-color="#FFFFFF"
                    active-text-color="#333">
                    <el-submenu index="1">
                        <template slot="title" class="title">主营业务</template>
                        <el-menu-item
                             v-for="(item,index) in options"
                            :key="index"
                            :index="item.cur_index"
                        >
                            {{item.cur_name}}
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </div>
            </OptionBoxMobile>
        </div>
        <div class="list_content">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
import OptionBox from '@/components/option_box/option_box.vue'
import OptionBoxMobile from '@/components/option_box_mobile/option_box_mobile.vue'
import BannerTitle from '@/components/banner_title/banner_title.vue'
import { mapState,mapMutations } from "vuex";
export default {
    data(){
        return{
            cur_address:"主营业务",
            content_show:this.$store.state.childActiveIndex,
            banner:"",
            options:[
                {cur_index:"1",cur_name:"内贸"},
                {cur_index:"2",cur_name:"外贸"},
                {cur_index:"3",cur_name:"房地产"},
                {cur_index:"4",cur_name:"金融投资"},
                {cur_index:"5",cur_name:"农业服务"}
            ]
        }
    },
    computed:{
        ...mapState(["childActiveIndex"])
    },
    components:{
        OptionBox,
        OptionBoxMobile,
        BannerTitle
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if(vm.$route.query.from == "title"){
                vm.setchildActiveIndex('1')
                vm.setActiveIndex('4-1')
            }
        });
    },
    mounted(){
        this.getBanner("zyyw")
    },
    methods:{
        ...mapMutations(["setActiveIndex","setchildActiveIndex"]),
        handleSelect(key, keyPath) {
            console.log(key ,keyPath)
            this.jump_router(key)
        },
        jump_router(item){
            this.content_show = item
            this.setchildActiveIndex(item)
            switch(item){
                case "1":
                    this.$router.push({path:"/business_neimao"})
                    this.setActiveIndex("4-1")
                    break;
                case "2":
                    this.$router.push({path:"/business_waimao"})
                    this.setActiveIndex("4-2")
                    break;
                case "3":
                    this.$router.push({path:"/business_building"})
                     this.setActiveIndex("4-3")
                    break;
                case "4":
                    this.$router.push({path:"/business_finance"})
                     this.setActiveIndex("4-4")
                    break;
                case "5":
                    this.$router.push({path:"/business_agriculture"})
                     this.setActiveIndex("4-5")
                    break;
            }
        },
        getBanner(name){
            this.axios.post(
                "api/banner/zlmbanner",
                `name=${name}`
            ).then(res=>{
                if(res.data.code == 1){
                    this.banner = res.data.data
                }
            })
        },
        changecolor1(item){
            this.content_show = item
        },
        changecolor2(){
            this.content_show = this.childActiveIndex
        }
    },
    watch:{
        childActiveIndex(newval){
            // console.log("childActiveIndex",newval)
            this.content_show = newval
        },
        $route:{
            handler:function(newval, oldVal){
                if(newval.query.from == "title"){
                    this.setActiveIndex('4-1')
                    this.setchildActiveIndex('1')
                }
            },
            // 深度观察监听
            deep:  true
        }
    }
}
</script>
<style lang="stylus" scoped>
.near_xinghe
    width 100%
    .banner
        width 100%
        padding 0
        margin 0
        position relative
        @media screen and (max-width:768px)
            margin-top 5rem
            height 20rem
        @media screen and (min-width:769px) and (max-width:992px)
            margin-top 6.5rem
            height 20rem
        @media screen and (min-width:992px) and (max-width:1010px)
            margin-top 7rem
            height 20rem
        .img
            width 100%
            height 20rem
            @media screen and (max-width:768px)
                height 20rem
        .banner_title
            z-index 10
            position absolute
            top 44%
            left 12.6%
            @media screen and (max-width:768px)
                left 10.6%
                top 31%
    .navigation_pc
        @media screen and (max-width:768px)
            display none
        .options
            list-style none
            padding 0 0
            margin-bottom 0
            &>li
                margin 0 auto
                width 12.5rem
                font-family MicrosoftYaHei
                font-weight Regular
                line-height 1.5rem
                padding-bottom 14px
                display inline-block
                cursor pointer
                color #000000
                text-align center
                @media screen and (min-width:1381px) and (max-width:1680px)
                    width 10rem
                @media screen and (min-width:1025px) and (max-width:1380px)
                    width 9rem
                @media screen and (min-width:960px) and (max-width:1080px)
                    width 8rem
                @media screen and (min-width:768px) and (max-width:959px)
                    width 6.5rem
                &.active
                    border-bottom 3px solid #1A649F
                    font-weight bold
                    color #1A649F
    .navigation_mobile
        @media screen and (min-width 769px)
            display none
        .child_nav
            text-align left
            padding 0 0
            .title
                color #FFFFFF
    .list_content
        width 100%
</style>