<template>
    <div class="near_xinghe">
        <div class="row banner">
            <img class="img" src="../../assets/banner_xinghe.png" alt="">
            <BannerTitle
                class="banner_title"
                :title_zn="title_zn"
                :title_en="title_en"
            ></BannerTitle>
        </div>
        <div class="navigation_pc">
            <OptionBox
                :cur_address = "this.cur_address"
            >
                <ul class="options">
                    <li 
                        class="item"
                        @click="jump_router('1')"
                        :class="{ active: content_show == 1 }"
                    >
                        集团概况
                    </li>
                     <li 
                        class="item"
                        @click="jump_router('2')"
                        :class="{ active: content_show == 2 }"
                    >
                        组织架构
                    </li>
                     <li 
                        class="item"
                        @click="jump_router('3')"
                        :class="{ active: content_show == 3 }"
                    >
                        使命愿景
                    </li>
                     <li 
                        class="item"
                        @click="jump_router('4')"
                        :class="{ active: content_show == 4 }"
                    >
                        成员企业
                    </li>
                     <li 
                        class="item"
                        @click="jump_router('5')"
                        :class="{ active: content_show == 5 }"
                    >
                        集团荣誉
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
                        <template slot="title" class="title">走进兴合</template>
                        <el-menu-item index="1">集团概况</el-menu-item>
                        <el-menu-item index="2">组织架构</el-menu-item>
                        <el-menu-item index="3">使命愿景</el-menu-item>
                        <el-menu-item index="4">成员企业</el-menu-item>
                        <el-menu-item index="5">集团荣誉</el-menu-item>
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
            cur_address:"走进兴合",
            content_show:this.$store.state.childActiveIndex,
            title_zn:"走进兴合",
            title_en:"ENTERING XINHE",
            banner:""
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
        this.getBanner("zjxh")
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
                    this.$router.push({path:"/group_intro"})
                    this.setActiveIndex("2-1")                    
                    break;
                case "2":
                    this.$router.push({path:"/group_framework"})
                    this.setActiveIndex("2-2")
                    break;
                case "3":
                    this.$router.push({path:"/group_mission"})
                    this.setActiveIndex("2-3")
                    break;
                case "4":
                    this.$router.push({path:"/group_menber"})
                    this.setActiveIndex("2-4")
                    break;
                case "5":
                    this.$router.push({path:"/group_honor"})
                    this.setActiveIndex("2-5")
                    break;
            }
        },
        getBanner(name){
            this.axios.post(
                "api/banner/zlmbanner",
                `name=${name}`
            ).then(res=>{
                if(res.data.code == 1){
                    console.log(res)
                    this.banner = res.data.data
                }
            })
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
                display inline-block
                margin-right 3rem
                width 7rem
                cursor pointer
                color #000000
                text-align center
                &.active
                    border-bottom 2px solid #79A2C5
                    color #79A2C5
    .navigation_mobile
        @media screen and (min-width:769px)
            display none
        .child_nav
            text-align left
            padding 0 0
            .title
                color #FFFFFF
    .list_content
        width 100%
</style>