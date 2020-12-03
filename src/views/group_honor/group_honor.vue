<template>
    <div class="container-fluid group_honner">
        <div class="row row1">
            <div class="item1 col-md-4"></div>
            <div class="col-md-4 row coulum2">
                <div class="item2 col-md-12"></div>
                <div class="item3 col-md-12"></div>
            </div>
            <div class="item4 col-md-4"></div>
            <div class="item5 col-md-12"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style lang="stylus" scoped>
.group_honner
    padding 0
    margin 0
    width 100%
    .row1
        width 80%
        margin 0 auto
        padding 0
        border 1px solid yellow
        margin-bottom 100px
        .item1
            height 20rem
            padding 0 40px
            border 1px solid red
        .coulum2
            padding 0 40px
            margin 0
            .item2
                border 1px solid yellow
                margin 5px 0
            .item3
                border 1px solid yellow
        .item4
            border 1px solid green
            padding 0
        .item5
            border 1px solid blue
            height 10rem
            padding 0
            margin-top 5px
</style>