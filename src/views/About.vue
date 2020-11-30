<template>
  <div class="about">
    <h1>{{test}}</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
      test:1
    }
  },
  mounted(){
    let _this = this;
    window.onresize = () => {
      return (() => {
        var h =
        document.documentElement.clientHeight || document.body.clientHeight;
        console.log(h)
       _this.test++
      })()
    }
  }
}
</script>
