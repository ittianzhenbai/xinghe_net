<template>
    <div class="talent_recruitment">
        <div class="row banner">
            <img class="img" src="../../assets/banner_zhaopin.png" alt="">
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
                        人才理念
                    </li>
                     <li 
                        class="item"
                        @click="jump_router('2')"
                        :class="{ active: content_show == 2 }"
                    >
                        人才招聘
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
                        <template slot="title" class="title">人才招聘</template>
                        <el-menu-item index="1">人才理念</el-menu-item>
                        <el-menu-item index="2">人才招聘</el-menu-item>
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
            cur_address:"人才招聘",
            content_show:this.$store.state.childActiveIndex,
            title_zn:"人才招聘",
            title_en:"TALENT RECRUITMENT"
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
    methods:{
        ...mapMutations(["setchildActiveIndex"]),
        handleSelect(key, keyPath) {
            console.log(key ,keyPath)
            this.jump_router(key)
        },
        jump_router(item){
            this.content_show = item
            switch(item){
                case "1":
                    console.log(item)
                    this.$router.push({path:"/talent_concept"})
                    break;
                case "2":
                    this.$router.push({path:"/talent_recruitment_notice"})
                    break;
            }
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
.talent_recruitment
    width 100%
    .banner
        width 100%
        margin 0
        position relative
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
        @media screen and (min-width 768px)
            display none
        .child_nav
            text-align left
            padding 0 0
            .title
                color #FFFFFF
    .list_content
        width 100%
</style>