<template>
    <div class="near_xinghe">
        <div class="row banner">
            <img class="img" src="../../assets/1.png" alt="">
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
import { mapState,mapMutations } from "vuex";
export default {
    data(){
        return{
            cur_address:"走进兴合",
            content_show:this.$store.state.childActiveIndex
        }
    },
    computed:{
        ...mapState(["childActiveIndex"])
    },
    components:{
        OptionBox,
        OptionBoxMobile
    },
    mounted(){
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
                    this.$router.push({path:"/group_intro"})
                    break;
                case "2":
                    this.$router.push({path:"/group_framework"})
                    break;
                case "3":
                    this.$router.push({path:"/group_mission"})
                    break;
                case "4":
                    this.$router.push({path:"/group_menber"})
                    break;
                case "5":
                    this.$router.push({path:"/group_honor"})
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
.near_xinghe
    width 100%
    .banner
        width 100%
        padding 0
        margin 0
        .img
            width 100%
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
        border 1px solid #79A2C5
</style>