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
                        <template slot="title" class="title">党建园地</template>
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
            <router-view></router-view>
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
            cur_address:"党建园地",
            content_show:this.$store.state.childActiveIndex,
            banner:"",
            options:[
                {cur_index:"1",cur_name:"党建动态"},
                {cur_index:"2",cur_name:"党章党规"},
                {cur_index:"3",cur_name:"学习园地"},
                {cur_index:"4",cur_name:"文件通知"},
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
    mounted(){
        this.getBanner("djyd")
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
                    this.$router.push({path:"/party_news"})
                    this.setActiveIndex("5-1")
                    break;
                case "2":
                    this.$router.push({path:"/party_danggui"})
                    this.setActiveIndex("5-2")
                    break;
                case "3":
                    this.$router.push({path:"/party_yuandi"})
                    this.setActiveIndex("5-3")
                    break;
                case "4":
                    this.$router.push({path:"/party_notify"})
                    this.setActiveIndex("5-4")
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
            console.log("childActiveIndex",newval)
            this.content_show = newval
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
        .img
            width 100%
        .banner_title
            z-index 10
            position absolute
            top 44%
            left 12.6%
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