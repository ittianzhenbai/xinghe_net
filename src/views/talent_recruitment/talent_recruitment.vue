<template>
    <div class="talent_recruitment">
        <div class="row banner" @click="closeOption">
            <img class="img" :src="this.banner.image" lazy="loaded" alt="">
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
                    :default-openeds="openeds"
                    text-color="#FFFFFF"
                    background-color="#FFFFFF"
                    active-text-color="#333">
                    <el-submenu index="1">
                        <template slot="title" class="title">人才招聘</template>
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
        <div class="list_content" @click="closeOption">
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
            banner:"",
            options:[
                {cur_index:"1",cur_name:"人才理念"},
                {cur_index:"2",cur_name:"人才招聘"}
            ],
            openeds:[""]//控制子菜单闭合
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
                vm.setActiveIndex('6-1')
            }
        });
    },
    mounted(){
        this.getBanner("rczp")
    },
    destroyed(){
        this.setcolseMobileIndex("0")
    },
    methods:{
        ...mapMutations(["setActiveIndex","setchildActiveIndex","setcolseMobileIndex"]),
        handleSelect(key, keyPath) {
            this.jump_router(key)
        },
        closeOption(){
            event.stopPropagation()
            this.openeds = [""]
            this.setcolseMobileIndex("1")
        },
        jump_router(item){
            this.content_show = item
            this.setchildActiveIndex(item)
            switch(item){
                case "1":
                    // console.log(item)
                    this.$router.push({path:"/talent_concept"})
                    break;
                case "2":
                    this.$router.push({path:"/talent_recruitment_notice"})
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
                    this.setActiveIndex('6-1')
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
.img[lazy=loaded] {
    background url("../../assets/loaded.png")
 }
.talent_recruitment
    width 100%
    .banner
        width 100%
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
                @media screen and (min-width:993px) and (max-width:1680px)
                    width 10rem
                @media screen and (min-width:769px) and (max-width:992px)
                    width 8rem
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